import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import More from "../components/More";
import Contact from "../components/Contact";
import Loader from "../components/Loader";
import useLoader from "../hooks/useLoader";

function Root(props) {
  const isLoader = useLoader();
  return isLoader ? (
    <>
      <Loader bgColor="#cca498" />
    </>
  ) : (
    <>
      <Header />
      <Main />
      <More />
      <Contact />
    </>
  );
}

export default Root;
