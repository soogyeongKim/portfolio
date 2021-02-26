import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Root from "./routes/Root";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Root} />
      <Route path="/detail" component={Detail} />
      <GlobalStyles />
    </Router>
  );
}

export default App;
