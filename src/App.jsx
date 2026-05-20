import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: ""
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.address) newErrors.address = "Address required";
    if (!form.city) newErrors.city = "City required";
    if (!form.state) newErrors.state = "State required";
    if (!form.country) newErrors.country = "Country required";

    if (!form.zip) {
      newErrors.zip = "Zip required";
    } else if (!/^\d{6}$/.test(form.zip)) {
      newErrors.zip = "Zip must be 6 digits";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully ");
    }
  };

  return (
    <div className="app">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit} className="form">

        <input name="name" placeholder="Name" onChange={handleChange} />
        <span>{errors.name}</span>

        <input name="email" placeholder="Email" onChange={handleChange} />
        <span>{errors.email}</span>

        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <span>{errors.phone}</span>

        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <span>{errors.password}</span>

        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        <span>{errors.confirmPassword}</span>

        <input name="address" placeholder="Address" onChange={handleChange} />
        <span>{errors.address}</span>

        <input name="city" placeholder="City" onChange={handleChange} />
        <span>{errors.city}</span>

        <input name="state" placeholder="State" onChange={handleChange} />
        <span>{errors.state}</span>

        <input name="country" placeholder="Country" onChange={handleChange} />
        <span>{errors.country}</span>

        <input name="zip" placeholder="Zip Code" onChange={handleChange} />
        <span>{errors.zip}</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}