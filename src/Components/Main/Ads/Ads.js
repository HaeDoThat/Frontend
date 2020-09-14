import React from "react";
import * as S from "./style";

function Ads() {
  return (
    <S.AdsContainer>
      <S.AdsMainWrapper>
        <S.AdsLeftWrapper>
          <S.AdsLeftBox>Project</S.AdsLeftBox>
          <S.AdsRightBox>Project</S.AdsRightBox>
        </S.AdsLeftWrapper>
        <S.AdsRightWrapper>
          <S.AdsTitle>최고의 프로젝트의 주인공은 바로 나?</S.AdsTitle>
          <S.AdsIntroduction>지금 당장 참여하세요</S.AdsIntroduction>
          <S.AdsButton>
            Let Go
            <S.AdsArrowIcon />
          </S.AdsButton>
        </S.AdsRightWrapper>
      </S.AdsMainWrapper>
    </S.AdsContainer>
  );
}

export default Ads;
