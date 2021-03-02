import React from "react";
import ScrollToTop from "../hooks/useScrollTop";
import XsyncSolution from "../components/XsyncSolution";
import NextRise from "../components/NextRise";
import IFrame from "../components/IFrame";

function Vue(props) {
  return (
    <>
      <ScrollToTop />
      <XsyncSolution />
      <NextRise />
      <IFrame />
    </>
  );
}

export default Vue;
