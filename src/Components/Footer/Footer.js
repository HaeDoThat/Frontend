import React from "react";
import * as S from "./style";

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterMainWrapper>
        <S.FooterFunctionsDiv>
          <S.FooterFunctions>고객센터</S.FooterFunctions>
          <S.FooterDividingLine />
          <S.FooterFunctions>공지사항</S.FooterFunctions>
        </S.FooterFunctionsDiv>
        <S.FooterPolicyDiv>
          <S.FooterPolicy>개인정보처리방침</S.FooterPolicy>
          <S.FooterDividingLine />
          <S.FooterPolicy>저작권보호정책</S.FooterPolicy>
          <S.FooterDividingLine />
          <S.FooterPolicy>이용약관</S.FooterPolicy>
        </S.FooterPolicyDiv>
        <S.FooterLocationDiv>
          <S.FooterLocation>
            (34111)대전광역시 유성구 가정북로 76(장동 23-9)
            대덕소프트웨어마이스터고등학교
          </S.FooterLocation>
        </S.FooterLocationDiv>
      </S.FooterMainWrapper>
    </S.FooterContainer>
  );
}

export default Footer;
