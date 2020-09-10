import React from "react";
import * as S from "./style";
import Project from "../Project/Project";

function ProjectViewer() {
  return (
    <S.ProjectViewerContainer>
      <S.ProjectViewerMainWrapper>
        <S.ProjectViewerTopWrapper>
          <S.ProjectViewerIcon size={20} />
          <S.ProjectViewerTitle>따끈따끈한 프로젝트!</S.ProjectViewerTitle>
          <S.ProjectViewerSummary>
            방금 생긴 새 프로젝트에 참여하세요
          </S.ProjectViewerSummary>
        </S.ProjectViewerTopWrapper>
        <S.ProjectViewerBodyWrapper>
          <S.ProjectViewerBodyTopWrapper>
            <Project />
            <Project />
            <Project />
            <Project />
          </S.ProjectViewerBodyTopWrapper>
          <S.ProjectViewerBodyBottomWrapper>
            <Project />
            <Project />
            <Project />
            <Project />
          </S.ProjectViewerBodyBottomWrapper>
        </S.ProjectViewerBodyWrapper>
      </S.ProjectViewerMainWrapper>
    </S.ProjectViewerContainer>
  );
}

export default ProjectViewer;
