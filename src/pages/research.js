import React from "react";
import HeroSection from "components/hero";
import Announcements from "components/announcements";
import Button from "react-bootstrap/Button";

const ProjectList = [
  {
    spons: "Sponsored by: IIT Roorkee",
    title:
      " Impact of social environment on Lifestyle diseases among women: A study of Uttarakhand ",
    date: <>Duration: 2 Years &#8226; By Anindya J Mishra</>,
    link: "#",
  },
  {
    spons: "Sponsored by: IIT Roorkee",
    title:
      " Impact of social environment on Lifestyle diseases among women: A study of Uttarakhand ",
    date: <>Duration: 2 Years &#8226; By Anindya J Mishra</>,
    link: "#",
  },
];

function Research() {
  return (
    <>
      <HeroSection>
        <h1 className="section-heading">Research</h1>
        <p className="section-content">
          The department is invested in doing cutting-edge research in several
          of its disciplines. Currently, the focussed areas for Economics are
          labour economics, climate change and disaster, conservation, cleaning
          the Ganges, etc. The English discipline has expertise in modern and
          contemporary British literature, Indian writings, postcolonial
          literature, ecocriticism, and linguistics.
        </p>
      </HeroSection>

      <section className="padded-container">
        <h1 className="section-heading mb-4">Projects</h1>
        <p className="section-content">
          The department is invested in doing cutting-edge research in several
          of its disciplines. Currently, the focussed areas for Economics are
          labour economics, climate change and disaster, conservation, cleaning
          the Ganges, etc.
        </p>

        <h2 className="section-heading-sm mt-5 mb-3">Ongoing Projects</h2>
        <Announcements list={ProjectList} />
        <div className="d-flex justify-content-center my-5">
          <Button variant="outline-primary" href="#">
            View More
          </Button>
        </div>

        <h2 className="section-heading-sm mt-5 mb-3">Completed Projects</h2>
        <Announcements list={ProjectList} />
        <div className="d-flex justify-content-center my-5">
          <Button variant="outline-primary" href="#">
            View More
          </Button>
        </div>
      </section>
    </>
  );
}

export default Research;
