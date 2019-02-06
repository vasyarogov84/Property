import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import HouseDetails from "./components/HouseDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/details" component={HouseDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
