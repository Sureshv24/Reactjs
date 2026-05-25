import React, { useContext } from "react";
import { FormContext } from "./App";

export default function InputFields() {

  const { formData, handleChange } = useContext(FormContext);

  return (
    <>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
    </>
  );
}