export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateCardNumber = (cardNumber) => {
  return /^\d{16}$/.test(cardNumber);
};

export const validateExpiry = (expiry) => {
  return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
};

export const validateCVV = (cvv) => {
  return /^\d{3}$/.test(cvv);
};