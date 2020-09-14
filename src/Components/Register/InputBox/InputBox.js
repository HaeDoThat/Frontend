import React from "react";
import * as S from "./style";

const InputBox = () => {
  return (
    <S.InputBoxWrapper>
      <S.InputBoxContentWrapper>
        <S.InputBoxTitle>Sign up</S.InputBoxTitle>
        <S.InputBoxInnerDiv>
          <S.InputBoxInput placeholder="Name" />
          <S.InputBoxInput placeholder="Email" />
          <S.InputBoxInput placeholder="password" />
          <S.InputBoxInput placeholder="confirm password" />
        </S.InputBoxInnerDiv>
        <S.InputBoxButton>sign up</S.InputBoxButton>
        <S.InputBoxDividingLine />
        <S.InputBoxGoogleRegister>Sign up with Google</S.InputBoxGoogleRegister>
      </S.InputBoxContentWrapper>
    </S.InputBoxWrapper>
  );
};

export default InputBox;
