import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { registerUser } from "../../helpers/auth";
import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      return setError("Name is required.");
    }

    if (!form.email.trim()) {
      return setError("Email is required.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      return setError("Please enter a valid email.");
    }

    if (form.password.length < 6) {
      return setError(
        "Password must be at least 6 characters."
      );
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }

    const result = registerUser({
      name: form.name,
      email: form.email,
      password: form.password,
    });

    if (!result.success) {
      return setError(result.message);
    }

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Create Account</h1>

          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit">
              Register
            </button>
          </form>

          <p className={styles.loginText}>
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;