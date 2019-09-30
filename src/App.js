import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchPage from "./pages/searchPages";
import "./App.css";
import BookDetailPage from "./pages/bookDetailPage";

const NoMatchRoute = () => <div>404 Page</div>;
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route component={NoMatchRoute} />
        <Route path="/book/:bookId" exact component={BookDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
