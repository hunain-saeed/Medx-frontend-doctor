import "./Home.css";
import React from "react";
import homeImg from "../../images/homeimg1.jpg";

import ReviewSection from "./hm/Reviewsection"
import Footer from "../footer/Footer";
import Meettheteam from "./hm/Meettheteam";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="row m-0 p-0 align-items-center">
          <div className="col-lg-6 img-div order-2 order-lg-1 mt-small">
            <h2>Improve Clientele</h2>
            <h1 className="text-center top-heading">MedX</h1>
            <h2 className="text-right">Improve Performance</h2>
            <div className="line-heading"></div>
            <p className="container-fluid">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Morbi eget placerat elit. Vivamumkmmks quis dictum.
            </p>
            <div className="container-fluid">
              <button className="btn home-btn">Learn more</button>
            </div>
          </div>

          <div className="col-lg-6 m-0 p-0 order-1 order-lg-2 img-div">
            <img className="home-top-img" src={homeImg} alt="Background" />
          </div>
        </div>
        <ReviewSection/>
        <div className="rew-section"></div>
        <Meettheteam/>
        <div className="mt-5"></div>
        <Footer />
      </div>
    );
  }
}
export default Home;
