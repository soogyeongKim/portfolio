import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Loader from "./components/Loader";
import Root from "./routes/Root";
import Android from "./routes/Android";
import Server from "./routes/Server";
import Vue from "./routes/Vue";
import Reactjs from "./routes/Reactjs";

const useLoader = () => {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoader(false), 10000);
  }, []);
  return isLoader;
};

function App() {
  const isLoader = useLoader();
  return isLoader ? (
    <>
      <Loader />
      <GlobalStyles />
    </>
  ) : (
    <Router>
      <Route exact path="/" component={Root} />
      <Route path="/android" component={Android} />
      <Route path="/server" component={Server} />
      <Route path="/vue" component={Vue} />
      <Route path="/react" component={Reactjs} />
      <GlobalStyles />
    </Router>
  );
}

export default App;
