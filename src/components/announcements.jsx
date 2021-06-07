import React from "react";

const List = [
  {
    spons: "Sponsored by: IIT Roorkee",
    title:
      "Slotwise Interview shedule for Ph.D admission, Autumn Semester 2021-22",
    date: "Posted On: 18th May 2021",
    link: "#",
  },
  {
    spons: "Sponsored by: IIT Roorkee",
    title:
      "List of Shortlised Candidates for PhD admission, Autumn semester 2021-22",
    date: "Posted On: 19th May 2021",
    link: "#",
  },
];

function Announcements() {
  return (
    <section className="padded-container">
      <h1 className="section-heading">Announcements</h1>
      {List.map((item, index) => (
        <a className="ann--wrapper" href={item.link} key={index}>
          <p className="ann--spons">{item.spons}</p>
          <h2 className="ann--title">{item.title}</h2>
          <p className="ann--date">{item.date}</p>
        </a>
      ))}
    </section>
  );
}

export default Announcements;
