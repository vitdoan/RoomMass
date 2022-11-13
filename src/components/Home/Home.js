import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    constructor(props) {
		super(props);
    }
  render() {
    return (
      <section id = "home">
        <header>
        <div className="container header__container">
          <p id="title">
            Room <span style={{ color: "#F5C458" }}>Mass</span>
          </p>
          <div onClick={()=>this.props.changeRoute(4)} className="rounded-pill p-4 m-3 mt-5 col-3 btn btn-lg btn-outline-warning">
            Find Roommate
          </div>
          <div onClick={()=>this.props.changeRoute(5)} className="rounded-pill p-4 m-3 mt-5 col-3 btn btn-lg btn-outline-warning">
            Swap Room
          </div>
        </div>
      </header>

      </section>
      
  
    );
  }
}

export default Home;
