import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="rounded-pill p-4 m-3 mt-5 col-3 btn btn-lg btn-outline-primary">Find Roommate</div>
          <div className="rounded-pill p-4 m-3 mt-5 col-3 btn btn-lg btn-outline-primary">Swap Roommate</div>
        </div>
      </div>
    );
  }
}

export default Home;
