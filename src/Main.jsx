import React from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Athletes from "./components/Athletes";
import Videos from "./components/Videos";
import Schools from "./components/Schools";
import Contact from "./components/Contact";

class Main extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Licensed to Shoot Hawaii</h1>
        <li className="menu">
          <ul className="first">
            <NavLink to="/home">Home</NavLink>
          </ul>
          <ul>
            <NavLink to="/about">About</NavLink>
          </ul>
          <ul>
            <NavLink to="/athletes">Athletes</NavLink>
          </ul>
          <ul>
            <NavLink to="/videos">Videos</NavLink>
          </ul>
          <ul>
            <NavLink to="/schools">Schools</NavLink>
          </ul>
          <ul className="last">
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </li>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/athletes" component={Athletes} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/schools" component={Schools} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </div>
    );
  }
}

export default Main;

// // This is what you really care about
// class Dashboard extends React.Component {
//   render() {
//     return (
//       <div id="dashboard">
//         <div className="menu">
//           <NavLink exact to="/">
//             Home
//           </NavLink>
//           <NavLink exact to="/marketing">
//             Marketing
//           </NavLink>
//           <NavLink exact to="/automation">
//             Automation
//           </NavLink>
//         </div>
//         <div className="content">
//           <Route exact path="/" component={Home} />
//           <Route exact path="/marketing" component={Marketing} />
//           <Route exact path="/automation" component={Automation} />
//         </div>
//       </div>
//     );
//   }
// }
