import React from "react";
import BuskingTown from "../components/BuskingTown";
import BuskingTownDB from "../components/BuskingTownDB";
import BuskingTownServer from "../components/BuskingTownServer";
import ScrollToTop from "../hooks/useScrollTop";

function Server(props) {
  return (
    <>
      <ScrollToTop />
      <BuskingTown />
      <BuskingTownDB />
      <BuskingTownServer />
    </>
  );
}

export default Server;
