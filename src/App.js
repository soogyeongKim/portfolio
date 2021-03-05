import { HashRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Root from "./routes/Root";
import Android from "./routes/Android";
import Server from "./routes/Server";
import Vue from "./routes/Vue";
import Reactjs from "./routes/Reactjs";

function App() {
  return (
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
