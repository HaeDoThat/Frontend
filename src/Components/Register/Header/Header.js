import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderLoginLink href="/login">Sign in</S.HeaderLoginLink>
    </S.HeaderWrapper>
  );
};

export default Header;
