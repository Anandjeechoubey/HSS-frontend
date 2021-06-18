import React, { useState } from "react";
import dp1 from "assets/images/phd_award.png";
import dp2 from "assets/images/khyati.jpeg";
import dp3 from "assets/images/profile-placeholder.png";
import emailLogo from "assets/images/email-logo.png";
import Button from "react-bootstrap/Button";

const phds = [
  {
    img: dp1,
    name: "Laal Veer Aditya",
    email: "nagendra.kumar@hs.iitr.ac.in",
    discipline: "Financial Economics",
    supervisors: "Prof. Binod Mishra & Prof. P. Jha",
    topic:
      "PARADIGM OF POWER POLITICS AND LANGUAGE  IN THE NOVELS OF ARUNDHATI ROY AND ARAVIND ADIGA",
    url: "#",
  },
  {
    img: dp2,
    name: "Khyati Kapil",
    email: "",
    discipline: "Psychology",
    supervisors: "Prof. Ram Manohar Singh & Prof. Renu Rastogi",
    topic:
      " EFFECT OF LEADER-MEMBER EXCHANGE AND WORK ENGAGEMENT ON OCB: ROLE OF JOB EMBEDDEDNESS",
    url: "#",
  },
  {
    img: dp3,
    name: "Laal Veer Aditya",
    email: "nagendra.kumar@hs.iitr.ac.in",
    discipline: "Financial Economics",
    supervisors: "Prof. Ram Manohar Singh & Prof. Renu Rastogi",
    topic:
      "Agricultural Extension Services and their impact on Agricultural Productivity in Western U.P",
    url: "#",
  },
  {
    img: dp3,
    name: "Laal Veer Aditya",
    email: "nagendra.kumar@hs.iitr.ac.in",
    discipline: "Financial Economics",
    supervisors: "Prof. Ram Manohar Singh & Prof. Renu Rastogi",
    topic:
      "Agricultural Extension Services and their impact on Agricultural Productivity in Western U.P",
    url: "#",
  },
  {
    img: dp3,
    name: "Laal Veer Aditya",
    email: "nagendra.kumar@hs.iitr.ac.in",
    discipline: "Financial Economics",
    supervisors: "Prof. Ram Manohar Singh & Prof. Renu Rastogi",
    topic:
      "Agricultural Extension Services and their impact on Agricultural Productivity in Western U.P",
    url: "#",
  },
  {
    img: dp3,
    name: "Laal Veer Aditya",
    email: "nagendra.kumar@hs.iitr.ac.in",
    discipline: "Financial Economics",
    supervisors: "Prof. Ram Manohar Singh & Prof. Renu Rastogi",
    topic:
      "Agricultural Extension Services and their impact on Agricultural Productivity in Western U.P",
    url: "#",
  },
];
export default function PhdCard() {
  const [showAll, setShowAll] = useState(false);

  console.log(showAll);
  return (
    <>
      <div className="phd--grid mt-5">
        {phds.map((item, key) => {
          if (key > 2 && !showAll) return null;

          return (
            <div className="phd--card" key={key}>
              <img className="phd--dp" alt={item.name} src={item.img} />
              <h1 className="phd--name">{item.name}</h1>
              <p className="phd--email">
                <img alt="" src={emailLogo} className="mr-1" />
                {item.email}
              </p>
              <div className="phd--label">
                <span>Discipline</span>
                <span>Supervisor(s)</span>
              </div>
              <div className="phd--content">
                <span>{item.discipline}</span>
                <span>{item.supervisors}</span>
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
          );
        })}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="outline-primary" onClick={() => setShowAll(!showAll)}>
          View {showAll ? "Less" : "More"}
        </Button>
      </div>
    </>
  );
}
