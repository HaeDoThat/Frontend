import React, { useState } from "react";
import axios from "axios";
import Login from "../../Components/Login/Login";

function LoginContainer({ history, changeLoginState }) {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const changeInput = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const submitInput = async e => {
    e.preventDefault();
    try {
      console.log(loginForm.email);
      console.log(loginForm.password);
      const res = await axios.post("http://3.34.138.65/user/auth", {
        email: loginForm.email,
        password: loginForm.password,
      });
      if (res.status === 200) {
        console.log(res);
        localStorage.setItem("access_token", res.data.access_token);
        // changeLoginState();
        history.push("/");
      } else {
        setLoginForm({ email: "", password: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return <Login changeInput={changeInput} submitInput={submitInput} />;
}

export default LoginContainer;
