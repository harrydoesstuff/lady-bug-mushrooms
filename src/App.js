import Header from "./components/Header";
import Home from "./components/Home";
import Store from "./components/Store";
import AboutUs from "./components/AboutUs";
import Recipes from "./components/Recipes"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          {/* <Route path="/aboutus">
            <AboutUs />
          </Route> */}
          {/* <Route path="/recipes">
            <Recipes />
          </Route> */}
        </Switch>
    </Router>
  );
}

export default App;
