import React from "react";
import * as S from "./style";

function Footer() {
  return (
    <S.Container>
      <S.MainWrapper>
        <S.FunctionsDiv>
          <S.Functions>고객센터</S.Functions>
          <S.DividingLine />
          <S.Functions>공지사항</S.Functions>
        </S.FunctionsDiv>
        <S.PolicyDiv>
          <S.Policy>개인정보처리방침</S.Policy>
          <S.DividingLine />
          <S.Policy>저작권보호정책</S.Policy>
          <S.DividingLine />
          <S.Policy>이용약관</S.Policy>
        </S.PolicyDiv>
        <S.LocationDiv>
          <S.Location>
            (34111)대전광역시 유성구 가정북로 76(장동 23-9)
            대덕소프트웨어마이스터고등학교
          </S.Location>
        </S.LocationDiv>
      </S.MainWrapper>
    </S.Container>
  );
}

export default Footer;
