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
            Room<span style={{ color: "#E6AC2C" }}>Mass</span>
          </p>
          <div onClick={()=>this.props.changeRoute(4)} className="bd_rd p-4 m-3 mt-5 col-3 btn btn-lg btn-outline-warning">
            Find Roommate
          </div>
          <div onClick={()=>this.props.changeRoute(5)} className="bd_rd p-4 m-3 mt-5 col-3 btn btn-lg btn-outline-warning">
            Swap Room
          </div>
          <div className = "intro_wrapper">
            <p className = "brief_intro">Not sure which dorm to live next semester? Having troubles with your current roommate? Look no further, RoomMass is here for you!!! We provide a platform for you to meet your desired roommate or to find a person longing to swap rooms with you!
</p>
          </div>
        </div>
      </header>

      </section>
      
  
    );
  }
}

export default Home;
