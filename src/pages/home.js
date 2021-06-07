import Announcements from "components/announcements";
import HeroSection from "components/hero";
import React from "react";
import history from "assets/images/history.png";
import EventList from "components/eventList";
import Button from "react-bootstrap/Button";

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
            The Department of Humanities and Social Sciences in IIT Roorkee
            (erstwhile University of Roorkee) was established in 1966 with a
            vision to integrate human values and social concerns with technical
            education. Over the years, it has developed into a lively
            department, encompassing teaching and research programs in the areas
            of English, Economics, Philosophy, Psychology, Sociology, Fine Arts
            and related inter & cross disciplinary subjects. Seventy two
            scholars have been awarded the Ph.D. degrees across different
            disciplines of the department. One of the notable achievements in
            recent years has been the expansion in research activities and
            exchanges of ideas, facilitated by the constant surge of
            discussions, consultations and publications in esteemed and high
            impact journals. Besides, there has been considerable progression of
            tangible and scholastic infrastructure which in process provides an
            impetus to its bright future.
          </p>
        </div>
      </section>

      <section className="padded-container">
        <h1 className="section-heading">News and Events</h1>
        <p className="section-content" style={{ maxWidth: "800px" }}>
          The department regularly holds various events including conferences,
          talks, summer courses, technical workshops, etc. A list of these
          events can be found on the Events tab above. Soon, the department will
          also be holding visiting fellowships/professorships and monthly
          seminars from distinguished people in relevant fields. The
          department’s faculty research presentation has also been revamped.
        </p>
        <EventList />
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
