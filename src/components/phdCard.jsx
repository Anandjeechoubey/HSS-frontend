import React from "react";
import dp from "assets/images/phd_award.png";
import emailLogo from "assets/images/email-logo.png";

const phds = [
  {
    img: dp,
    name: "Laal Veer Aditya",
    email: "nagendra.kumar@hs.iitr.ac.in",
    discipline: "Financial Economics",
    area: "Banking",
    topic:
      "Agricultural Extension Services and their impact on Agricultural Productivity in Western U.P",
    url: "#",
  },
  {
    img: dp,
    name: "Laal Veer Aditya",
    email: "nagendra.kumar@hs.iitr.ac.in",
    discipline: "Financial Economics",
    area: "Banking",
    topic:
      "Agricultural Extension Services and their impact on Agricultural Productivity in Western U.P",
    url: "#",
  },
  {
    img: dp,
    name: "Laal Veer Aditya",
    email: "nagendra.kumar@hs.iitr.ac.in",
    discipline: "Financial Economics",
    area: "Banking",
    topic:
      "Agricultural Extension Services and their impact on Agricultural Productivity in Western U.P",
    url: "#",
  },
];
export default function PhdCard() {
  return (
    <div className="d-flex align-items-stretch justify-content-around mt-5">
      {phds.map((item, key) => (
        <div className="phd--card" key={key}>
          <img className="phd--dp" alt={item.name} src={item.img} />
          <h1 className="phd--name">{item.name}</h1>
          <p className="phd--email">
            <img alt="" src={emailLogo} className="mr-1" />
            {item.email}
          </p>
          <div className="phd--label">
            <span>Discipline</span>
            <span>Research Area</span>
          </div>
          <div className="phd--content">
            <span>{item.discipline}</span>
            <span>{item.area}</span>
          </div>
          <div className="phd--hr" />
          <p className="phd--label phd--full">Thesis Topic</p>
          <p
            className="phd--content phd--full mb-5"
            style={{ fontSize: "0.875rem" }}
          >
            {item.topic}
          </p>
          <div className="phd--cta phd--full d-flex justify-content-center">
            <a href={item.url}>Read e-Dissertation →</a>
          </div>
        </div>
      ))}
    </div>
  );
}
