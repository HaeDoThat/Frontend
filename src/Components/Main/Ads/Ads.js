import React from "react";
import * as S from "./style";

function Ads() {
  return (
    <S.Container>
      <S.MainWrapper>
        <S.LeftWrapper>
          <S.LeftBox>Project</S.LeftBox>
          <S.RightBox>Project</S.RightBox>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.Title>최고의 프로젝트의 주인공은 바로 나?</S.Title>
          <S.Introduction>지금 당장 참여하세요</S.Introduction>
          <S.Button>
            Let Go
            <S.ArrowIcon />
          </S.Button>
        </S.RightWrapper>
      </S.MainWrapper>
    </S.Container>
  );
}

export default Ads;
