import React from "react";
import ScrollToTop from "../hooks/useScrollTop";
import CoinExplorer from "../components/CoinExplorer";
import UseHooks from "../components/UseHooks";

function Reactjs(props) {
  return (
    <>
      <ScrollToTop />
      <CoinExplorer />
      <UseHooks />
    </>
  );
}

export default Reactjs;
