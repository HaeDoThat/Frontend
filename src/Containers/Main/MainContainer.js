import React from "react";

import HeaderContainer from "./HeaderContainer/HeaderContainer";
import AdsContainer from "./AdsContainer/AdsContainer";
import ProjectViewerContainer from "./ProjectViewerContainer/ProjectViewerContainer";
import FooterContainer from "./FooterContainer/FooterContainer";

function MainContainer() {
  return (
    <>
      <HeaderContainer />
      <AdsContainer />
      <ProjectViewerContainer />
      <FooterContainer />
    </>
  );
}

export default MainContainer;
