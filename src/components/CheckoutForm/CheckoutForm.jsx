import React, { useState } from "react";
import styles from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.address.trim())
      newErrors.address = "Address is required.";

    if (!formData.city.trim())
      newErrors.city = "City is required.";

    if (!formData.state.trim())
      newErrors.state = "State is required.";

    if (!formData.zip.trim())
      newErrors.zip = "ZIP code is required.";

    if (!/^\d{16}$/.test(formData.cardNumber))
      newErrors.cardNumber = "Card number must contain exactly 16 digits.";

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry))
      newErrors.expiry = "Expiry must be in MM/YY format.";

    if (!/^\d{3}$/.test(formData.cvv))
      newErrors.cvv = "CVV must contain exactly 3 digits.";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Order placed successfully!");

    setFormData({
      fullName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });

    setErrors({});
  };

  return (
    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
      <h2>Checkout</h2>

      <div className={styles.formGroup}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && (
          <span className={styles.error}>{errors.fullName}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && (
          <span className={styles.error}>{errors.address}</span>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && (
            <span className={styles.error}>{errors.city}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          {errors.state && (
            <span className={styles.error}>{errors.state}</span>
          )}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>ZIP Code</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
        {errors.zip && (
          <span className={styles.error}>{errors.zip}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label>Card Number</label>
        <input
          type="text"
          name="cardNumber"
          maxLength="16"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        {errors.cardNumber && (
          <span className={styles.error}>{errors.cardNumber}</span>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label>Expiry (MM/YY)</label>
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            maxLength="5"
            value={formData.expiry}
            onChange={handleChange}
          />
          {errors.expiry && (
            <span className={styles.error}>{errors.expiry}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>CVV</label>
          <input
            type="password"
            name="cvv"
            maxLength="3"
            value={formData.cvv}
            onChange={handleChange}
          />
          {errors.cvv && (
            <span className={styles.error}>{errors.cvv}</span>
          )}
        </div>
      </div>

      <button className={styles.submitBtn} type="submit">
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;