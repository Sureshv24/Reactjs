import React, { createContext, useState } from "react";
import Form from "./Form";
import "./App.css";


export const FormContext = createContext();

export default function App() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: ""
  });


  const [dark, setDark] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const toggleTheme = () => setDark(!dark);

  return (
    <FormContext.Provider value={{ formData, handleChange, dark }}>
      
      <div className={dark ? "app dark" : "app light"}>

        <h1>Context Form</h1>

        <button onClick={toggleTheme}>
          {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <Form />

      </div>

    </FormContext.Provider>
  );
}