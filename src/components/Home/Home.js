import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <p id="title">
            Room <span style={{ color: "#F5C458" }}>Mass</span>
          </p>
          <div className="rounded-pill p-4 m-3 mt-5 col-3 btn btn-lg btn-outline-warning">
            Find Roommate
          </div>
          <div className="rounded-pill p-4 m-3 mt-5 col-3 btn btn-lg btn-outline-warning">
            Swap Roommate
          </div>
        </div>
      </header>
      //   <div className="container d-flex align-items-center justify-content-center">
      //     <h1>
      //       Room <span style={{ color: "yellow" }}>Mass</span>
      //     </h1>
      //     <div className="rounded-pill p-4 m-3 mt-5 col-3 btn btn-lg btn-outline-warning">
      //       Find Roommate
      //     </div>
      //     <div className="rounded-pill p-4 m-3 mt-5 col-3 btn btn-lg btn-outline-warning">
      //       Swap Roommate
      //     </div>
      //   </div>
    );
  }
}

export default Home;
