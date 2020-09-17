import React from "react";
import * as S from "./style";

const InputBox = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Title>Sign up</S.Title>
        <S.InnerDiv>
          <S.Input placeholder="Name" />
          <S.Input placeholder="Email" />
          <S.Input placeholder="password" />
          <S.Input placeholder="confirm password" />
        </S.InnerDiv>
        <S.Button>sign up</S.Button>
        <S.DividingLine />
        <S.GoogleRegister>Sign up with Google</S.GoogleRegister>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default InputBox;
