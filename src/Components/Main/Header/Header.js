import React from "react";
import * as S from "./style";

function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>HaeDoThat</S.Logo>
        <S.SearchBox />
        <S.LinkWrapper>
          <S.LinkDiv>
            <S.Link href="/login">로그인</S.Link>
          </S.LinkDiv>
          <S.LinkDiv>
            <S.Link href="//google.com">회원가입</S.Link>
          </S.LinkDiv>
        </S.LinkWrapper>
      </S.Wrapper>
    </S.Container>
  );
}

export default Header;
