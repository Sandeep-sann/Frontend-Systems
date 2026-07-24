// Get all registered users
export const getUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

// Save users
export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// Register a new user
export const registerUser = ({
  name,
  email,
  password,
}) => {
  const users = getUsers();

  const userExists = users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase()
  );

  if (userExists) {
    return {
      success: false,
      message: "Email already registered.",
    };
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
  };

  users.push(newUser);
  saveUsers(users);

  return {
    success: true,
    message: "Registration successful.",
  };
};

// Login user
export const loginUser = (email, password) => {
  const users = getUsers();

  const user = users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() &&
      u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  sessionStorage.setItem("loggedIn", "true");

  sessionStorage.setItem(
    "currentUser",
    JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
    })
  );

  return {
    success: true,
    user,
  };
};

// Logout
export const logoutUser = () => {
  sessionStorage.removeItem("loggedIn");
  sessionStorage.removeItem("currentUser");
};

// Check login
export const isAuthenticated = () => {
  return sessionStorage.getItem("loggedIn") === "true";
};

// Get current logged-in user
export const getCurrentUser = () => {
  const user = sessionStorage.getItem("currentUser");

  return user ? JSON.parse(user) : null;
};