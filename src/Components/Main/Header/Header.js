import React from "react";
import * as S from "./style";

function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderLogo>HaeDoThat</S.HeaderLogo>
        <S.HeaderSearchBox />
        <S.HeaderLinkWrapper>
          <S.HeaderLinkDiv>
            <S.HeaderLink href="/login">로그인</S.HeaderLink>
          </S.HeaderLinkDiv>
          <S.HeaderLinkDiv>
            <S.HeaderLink href="//google.com">회원가입</S.HeaderLink>
          </S.HeaderLinkDiv>
        </S.HeaderLinkWrapper>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}

export default Header;
