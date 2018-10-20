import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage, DesignerPage, ContentPage, AboutPage } from "pages";
import Menu from "./components/Common/Menu/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/designer" component={DesignerPage} />
          <Route exact path="/Content/:id" component={ContentPage} />
          <Route exact path="/About" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
