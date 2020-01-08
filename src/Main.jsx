import React from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import Home from "../src/Home";
import About from "../src/About";

class Main extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Main Title</h1>
        <li className="menu">
          <ul className="first">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/athletes">Athletes</NavLink>
            <NavLink to="/videos">Videos</NavLink>
            <NavLink to="/schools">Schools</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </li>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/athletes" component={Home} />
          <Route exact path="/videos" component={Home} />
          <Route exact path="/schools" component={Home} />
          <Route exact path="/contact" component={Home} />
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
