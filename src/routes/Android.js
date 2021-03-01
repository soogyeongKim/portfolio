import React from "react";
import Galaxy from "../components/Galaxy";
import SKnights from "../components/SKnights";
import String from "../components/String";
import ScrollToTop from "../hooks/useScrollTop";

function Android(props) {
  return (
    <>
      <ScrollToTop />
      <Galaxy />
      <SKnights />
      <String />
    </>
  );
}

export default Android;
