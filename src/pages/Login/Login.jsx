import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { loginUser, isAuthenticated } from "../../helpers/auth";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginUser(email, password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.loginCard}>
          <h1>Login</h1>

          {error && <p className={styles.error}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.loginBtn}
            >
              Login
            </button>
          </form>

          <p className={styles.registerText}>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;