import React from "react";
import * as S from "./style";

const InputBox = ({ changeInput, submitInput }) => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Title>Sign up</S.Title>
        <S.InnerForm onSubmit={submitInput} autoComplete="off">
          <S.Input placeholder="Name" name="name" onChange={changeInput} />
          <S.Input placeholder="Email" name="email" onChange={changeInput} />
          <S.Input
            placeholder="password"
            name="password"
            type="password"
            onChange={changeInput}
          />
          <S.Input
            placeholder="confirm password"
            name="confirmPassword"
            type="password"
            onChange={changeInput}
          />
          <S.Button type="submit">sign up</S.Button>
        </S.InnerForm>
        <S.DividingLine />
        <S.GoogleRegister>Sign up with Google</S.GoogleRegister>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default InputBox;
