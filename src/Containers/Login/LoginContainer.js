import React, { useState } from "react";
import axios from "axios";
import Login from "../../Components/Login/Login";

function LoginContainer() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const changeInput = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const submitInput = async e => {
    e.preventDefault();
    try {
      const res = axios.post("", {
        email: loginForm.email,
        password: loginForm.password,
      });
      window.alert(res.message);
      if (res == 200) {
        localStorage.setItem("access_token", res.access_token);
      } else {
        setLoginForm({ id: "", pw: "" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return <Login changeInput={changeInput} submitInput={submitInput} />;
}

export default LoginContainer;
