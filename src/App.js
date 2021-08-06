import AOS from "aos";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Blog from "./containers/Blog";
import Home from "./containers/Home";
import { GlobalStyles } from './GlobalElements';

// initializing animate on scroll
AOS.init();


function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>

          <Route path="/blog/" component={Blog} />

          <Route exact path="/" component={Home} />

          <Route path="*">
            <Redirect to="/" />
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
