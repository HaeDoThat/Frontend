import React from "react";
import * as S from "./style";

const img =
  "https://lh3.googleusercontent.com/proxy/xvGkSCQ0ZRrPA3rkNhfNwh8zIaPNWz3Vp9tBj_ib-gRStATmJQD5WhcBKyOGInZPJ4HHtVCVy_3IEhqzIbpsGvGDzi7T6bZpmkjMLyDKEnlBFObUyU5MoYNFVCFjCcRwHdWygkMmkHnxMcHYqNBvVQaOEF5WkabgKn3YPK9T5tcmpsdxV3JI5aEiaO7MUpkBRE0";

function Project() {
  return (
    <S.ProjectMainWrapper>
      <S.ProjectImage src={img} />
      <S.ProjectIntroductionWrapper>
        <S.ProjectIntroductionLeftWrapper>
          <S.ProjectIntroductionTitle>
            식물 관찰 일지
          </S.ProjectIntroductionTitle>
          <S.ProjectIntroductionLeader>일생</S.ProjectIntroductionLeader>
        </S.ProjectIntroductionLeftWrapper>
        <S.ProjectIntroductionRightWrapper>
          <S.ProjectIntroductionMembers>
            참여자 7명
          </S.ProjectIntroductionMembers>
        </S.ProjectIntroductionRightWrapper>
      </S.ProjectIntroductionWrapper>
    </S.ProjectMainWrapper>
  );
}

export default Project;
