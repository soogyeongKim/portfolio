import { HashRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Root from "./routes/Root";
import Android from "./routes/Android";
import Server from "./routes/Server";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Root} />
      <Route path="/android" component={Android} />
      <Route path="/server" component={Server} />
      <GlobalStyles />
    </Router>
  );
}

export default App;
