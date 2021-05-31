import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Blog from "./containers/Blog";
import Home from "./containers/Home";
import { GlobalStyles } from './GlobalElements';


function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/blog/">
            <Blog />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
