import Announcements from "components/announcements";
import HeroSection from "components/hero";
import React from "react";
import history from "assets/images/history.png";
import EventList from "components/eventList";
import Button from "react-bootstrap/Button";
import OverflowCard from "components/overflowCard";
import talks from "assets/images/talks.png";
import PhdCard from "components/phdCard";

function Home() {
  return (
    <>
      <HeroSection>
        <div className="home--heading">
          <span>WELCOME TO THE</span> <br />
          <h1>Department of Humanities & Social Sciences</h1>
        </div>
      </HeroSection>

      <Announcements />

      <section
        className="padded-container d-flex align-items-center flex-wrap flex-md-nowrap"
        style={{ background: "rgba(251, 251, 253, 1)" }}
      >
        <img className="home--hist-img" src={history} />
        <div>
          <h1 className="section-heading">Our History</h1>
          <p className="section-content">
            Indian Institute of Technology Roorkee has its roots in the Roorkee
            College, which was set up in 1847. It was renamed as the Thomason
            College of Civil Engineering in 1854. The College laid the
            foundation of modern engineering education and the use of civil
            engineering practices in the infrastructure development of country.
            It got elevated as the first Technical University of the country in
            1948 through the University of Roorkee Act, 1947 passed by the
            United Provinces Legislature.
          </p>
        </div>
      </section>

      <section className="padded-container">
        <h1 className="section-heading">News and Events</h1>
        <p className="section-content" style={{ maxWidth: "800px" }}>
          Indian Institute of Technology Roorkee has its roots in the Roorkee
          College, which was set up in 1847. It was renamed as the Thomason
          College of Civil Engineering in 1854.
        </p>
        <EventList />
        <div className="d-flex justify-content-center mt-5">
          <Button variant="outline-primary" href="#">
            View More
          </Button>
        </div>
      </section>

      <section className="padded-container">
        <h1 className="section-heading text-center">Prospective Students</h1>
        <p
          className="section-content mx-auto text-center"
          style={{ maxWidth: "800px" }}
        >
          Indian Institute of Technology Roorkee has its roots in the Roorkee
          College, which was set up in 1847. It was renamed as the Thomason
          College of Civil Engineering in 1854. The College laid the foundation
          of modern engineering education.
        </p>
        <OverflowCard
          key={1}
          heading="M.Sc. Programmes in Economics"
          content="The Department of Architecture and Planning imparts high-quality education in the professional fields of Architecture and Planning and offers Bachelor of Architecture"
          url="#"
          img={talks}
          indent="left"
        />
        <OverflowCard
          key={2}
          heading="Ph.D. Programmes in all disciplines"
          content="The Department of Architecture and Planning imparts high-quality education in the professional fields of Architecture and Planning and offers Bachelor of Architecture"
          url="#"
          img={talks}
          indent="right"
        />
      </section>

      <section className="padded-container">
        <h1 className="section-heading">Ph.D. Awarded</h1>
        <p className="section-content" style={{ maxWidth: "800px" }}>
          Indian Institute of Technology Roorkee has its roots in the Roorkee
          College, which was set up in 1847. It was renamed as the Thomason
          College of Civil Engineering in 1854.
        </p>
        <PhdCard />
        <div className="d-flex justify-content-center mt-5">
          <Button variant="outline-primary" href="#">
            View More
          </Button>
        </div>
      </section>
    </>
  );
}

export default Home;
