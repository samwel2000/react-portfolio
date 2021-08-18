import AOS from "aos";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Archieve from "./containers/Archive";
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

          <Route path="/archive/" component={Archieve} />

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
