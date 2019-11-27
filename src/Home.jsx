import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>LICENSED TO SHOOT HAWAII</h1>

        <li className="menu">
          <ul className="first">
            <a href="#">About</a>
          </ul>
          <ul>
            <a href="#">Athletes</a>
          </ul>
          <ul>
            <a href="#">Videos</a>
          </ul>
          <ul>
            <a href="#">Schools</a>
          </ul>
          <ul className="last">
            <a href="#">Contact</a>
          </ul>
        </li>
      </div>
    );
  }
}

export default Home;
