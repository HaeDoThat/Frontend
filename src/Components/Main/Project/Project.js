import React from "react";
import * as S from "./style";

const img =
  "https://lh3.googleusercontent.com/proxy/xvGkSCQ0ZRrPA3rkNhfNwh8zIaPNWz3Vp9tBj_ib-gRStATmJQD5WhcBKyOGInZPJ4HHtVCVy_3IEhqzIbpsGvGDzi7T6bZpmkjMLyDKEnlBFObUyU5MoYNFVCFjCcRwHdWygkMmkHnxMcHYqNBvVQaOEF5WkabgKn3YPK9T5tcmpsdxV3JI5aEiaO7MUpkBRE0";

function Project({ id }) {
  return (
    <S.MainWrapper>
      <S.Image src={img} />
      <S.IntroductionWrapper>
        <S.IntroductionLeftWrapper>
          <S.IntroductionTitle>식물 관찰 일지</S.IntroductionTitle>
          <S.IntroductionLeader>일생</S.IntroductionLeader>
        </S.IntroductionLeftWrapper>
        <S.IntroductionRightWrapper>
          <S.IntroductionMembers>참여자 7명</S.IntroductionMembers>
        </S.IntroductionRightWrapper>
      </S.IntroductionWrapper>
    </S.MainWrapper>
  );
}

export default Project;
