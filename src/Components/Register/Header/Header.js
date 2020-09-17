import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.Wrapper>
      <S.LoginLink href="/login">Sign in</S.LoginLink>
    </S.Wrapper>
  );
};

export default Header;
