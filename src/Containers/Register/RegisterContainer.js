import React, { useState } from "react";
import axios from "axios";

import Header from "../../Components/Register/Header/Header";
import InputBox from "../../Components/Register/InputBox/InputBox";

const RegisterContainer = ({ history }) => {
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

    if (registerForm.password !== registerForm.confirmPassword) {
      window.alert("비밀번호가 다릅니다.");
    }

    try {
      const res = await axios.post("http://3.34.138.65/user", {
        name: registerForm.name,
        email: registerForm.email,
        password: registerForm.password,
      });
      if (res.status === 201) {
        window.alert("회원가입에 성공하셨습니다.");
        history.push("/login");
      } else {
        window.alert("201이 아님");
      }
    } catch (err) {
      alert(err.response.data.message);
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
