import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage, DesignerPage, ContentPage, AboutPage } from "pages";
import Header from "./components/Common/Header/Header";
import "./styles/reset.css";
import "./styles/common.scss";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
