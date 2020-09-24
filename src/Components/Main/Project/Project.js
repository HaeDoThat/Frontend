import React from "react";
import * as S from "./style";

const img =
  "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99C47B3B5B41033A12";

function Project({ id }) {
  return (
    <S.MainWrapper>
      <S.Image src={img} />
      <S.IntroductionWrapper>
        <S.IntroductionLeftWrapper>
          <S.IntroductionTitle>식물 관찰 일지</S.IntroductionTitle>
          <S.IntroductionLeader>일상</S.IntroductionLeader>
        </S.IntroductionLeftWrapper>
        <S.IntroductionRightWrapper>
          <S.IntroductionMembers>참여자 7명</S.IntroductionMembers>
        </S.IntroductionRightWrapper>
      </S.IntroductionWrapper>
    </S.MainWrapper>
  );
}

export default Project;
