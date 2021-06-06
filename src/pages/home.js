import HeroSection from "components/hero";
import React from "react";

function Home() {
  return (
    <HeroSection>
      <div className="home--heading">
        <span>WELCOME TO THE</span> <br />
        <h1>Department of Humanities & Social Sciences</h1>
      </div>
    </HeroSection>
  );
}

export default Home;
