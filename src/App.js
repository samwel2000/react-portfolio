import AOS from "aos";
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Archieve from "./containers/Archive";
import Blog from "./containers/Blog";
import BlogDetail from "./containers/BlogDetail";
import FilteredBlog from "./containers/FilteredBlogs";
import Home from "./containers/Home";
import { GlobalStyles } from './GlobalElements';

// initializing animate on scroll
AOS.init({once: true});


function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>

          <Route path="/blog/:id" component={BlogDetail} />

          <Route path="/blogs/:id" component={FilteredBlog} />

          <Route exact path="/blog/" component={Blog} />

          <Route exact path="/archive/" component={Archieve} />

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
