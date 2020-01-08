import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import Main from "./components/Main";

class App extends React.Component {
  render() {
    return <Main />;
  }
}

export default App;
