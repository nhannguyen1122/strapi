import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "./pages/Homepage";
import ReviewComponent from "./pages/Review";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePageComponent />
          </Route>
          <Route path="/review/:id">
            <ReviewComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
