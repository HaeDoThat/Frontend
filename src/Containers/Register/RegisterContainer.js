import React, { useState } from "react";
import axios from "axios";

import Header from "../../Components/Register/Header/Header";
import InputBox from "../../Components/Register/InputBox/InputBox";

const RegisterContainer = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeInput = e => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const submitInput = async e => {
    e.preventDefault();

    try {
      const res = await axios.post("", {
        userName: registerForm.name,
        userEmail: registerForm.email,
        password: registerForm.password,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <InputBox changeInput={changeInput} submitInput={submitInput} />
    </React.Fragment>
  );
};

export default RegisterContainer;
