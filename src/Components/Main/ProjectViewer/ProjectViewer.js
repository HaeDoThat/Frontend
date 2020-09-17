import React from "react";
import * as S from "./style";
import Project from "../Project/Project";

function ProjectViewer() {
  return (
    <S.Container>
      <S.MainWrapper>
        <S.TopWrapper>
          <S.Icon size={20} />
          <S.Title>따끈따끈한 프로젝트!</S.Title>
          <S.Summary>방금 생긴 새 프로젝트에 참여하세요</S.Summary>
        </S.TopWrapper>
        <S.BodyWrapper>
          <S.BodyTopWrapper>
            <Project />
            <Project />
            <Project />
            <Project />
          </S.BodyTopWrapper>
          <S.BodyBottomWrapper>
            <Project />
            <Project />
            <Project />
            <Project />
          </S.BodyBottomWrapper>
        </S.BodyWrapper>
      </S.MainWrapper>
    </S.Container>
  );
}

export default ProjectViewer;
