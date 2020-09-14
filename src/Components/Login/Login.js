import React from "react";
import * as S from "./style";

function Login() {
  return (
    <S.LoginWrapper>
      <S.LoginLeftWrapper>
        <S.LoginBox>
          <S.LoginTitle>LOGIN</S.LoginTitle>
          <S.LoginInputWrapper>
            <S.LoginInputExplanation>email</S.LoginInputExplanation>
            <S.LoginInput />
          </S.LoginInputWrapper>
          <S.LoginInputWrapper>
            <S.LoginInputExplanation>password</S.LoginInputExplanation>
            <S.LoginInput />
          </S.LoginInputWrapper>
          <S.LoginLinkDiv>
            <S.LoginPasswordFind>Forgot your password?</S.LoginPasswordFind>
            <S.LoginRegisterLink>
              Don't have an account? sign up
            </S.LoginRegisterLink>
          </S.LoginLinkDiv>
          <S.LoginButton>LOGIN</S.LoginButton>
          <S.LoginDividingLine />
          <S.LoginRegisterButton>start with Google</S.LoginRegisterButton>
        </S.LoginBox>
      </S.LoginLeftWrapper>
      <S.LoginImg src="https://lh3.googleusercontent.com/Kbu0747Cx3rpzHcSbtM1zDriGFG74zVbtkPmVnOKpmLCS59l7IuKD5M3MKbaq_nEaZM=s180" />
    </S.LoginWrapper>
  );
}

export default Login;
