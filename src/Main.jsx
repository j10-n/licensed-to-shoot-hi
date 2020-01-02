import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Home from "../src/Home";
import About from "../src/About";

class main extends React.Component {
  render() {
    return (
      <div>
        <h1>daspdsa</h1>
        <Router>
          <li className="menu">
            <ul className="first">
              <Link to="/about">About</Link>
            </ul>
            {/* <ul>
              <NavLink href="#">Athletes</NavLink>
            </ul>
            <ul>
              <NavLink href="#">Videos</NavLink>
            </ul>
            <ul>
              <NavLink href="#">Schools</NavLink>
            </ul>
            <ul className="last">
              <NavLink href="#">Contact</NavLink>
            </ul> */}
          </li>
          <div className="content">
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default main;
