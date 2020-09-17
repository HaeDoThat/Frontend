import React from "react";
import * as S from "./style";

function InputBox(props) {
  return (
    <S.Form onSubmit={props.submitInput}>
      <S.Wrapper>
        <S.Title>LOGIN</S.Title>
        <S.InputWrapper>
          <S.InputExplanation>email</S.InputExplanation>
          <S.Input
            name="email"
            onChange={props.changeInput}
            value={props.loginForm.id || ""}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputExplanation>password</S.InputExplanation>
          <S.Input
            name="password"
            onChange={props.changeInput}
            value={props.loginForm.password || ""}
          />
        </S.InputWrapper>
        <S.LinkDiv>
          <S.PasswordFind>Forgot your password?</S.PasswordFind>
          <S.RegisterLink href="/register">
            Don't have an account? sign up
          </S.RegisterLink>
        </S.LinkDiv>
        <S.Button type="submit">LOGIN</S.Button>
        <S.DividingLine />
        <S.RegisterButton>start with Google</S.RegisterButton>
      </S.Wrapper>
    </S.Form>
  );
}

export default InputBox;
