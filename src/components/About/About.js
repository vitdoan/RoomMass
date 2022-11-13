import React, { Component } from "react";
import chc_housing from '../../pictures/chc_housing.jpg'
import "./About.css";

class About extends Component {
  render() {
    return (
        <section id="about">
            <div className="container mt-5">
        <div className="row ">
          <div>
            <p id="about_us">Our Story</p>

          </div>
          <div>
              <p id = "para">Last year, a teammate of ours was matched with an incompatible roommate at the start of the Fall semester. Even worse, they did not know where to move to and had a hard time finding a new suitable roommate. Since then, our teammate has been nurturing an idea to help those who are having similar problems. We saw tons of posts on Reddit that students complain about their roommates or just want to find roommates. Therefore, this website will help lessen the stress and anxiety caused by UMass's housing problems.

</p>
          </div>

          <div>
              <img id = "img" src = {chc_housing} alt = "chc_housing" />
          </div>
        </div>
      </div>

        </section>
      
    );
  }
}

export default About;
