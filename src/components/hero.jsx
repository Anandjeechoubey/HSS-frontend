import React from "react";
import heroImage from "assets/images/mainbuilding.png";

function HeroSection(props) {
  return (
    <section className="padded-container d-flex align-items-center flex-wrap">
      <span className="hero--bg-dec" />
      <div className="hero--content">{props.children}</div>
      <img className="hero--img" src={heroImage} />
    </section>
  );
}

export default HeroSection;
