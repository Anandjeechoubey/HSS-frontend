import React from "react";

function Announcements({ list }) {
  return (
    <div>
      {list.map((item, index) => (
        <a className="ann--wrapper" href={item.link} key={index}>
          <p className="ann--spons">{item.spons}</p>
          <h2 className="ann--title">{item.title}</h2>
          <p className="ann--date">{item.date}</p>
        </a>
      ))}
    </div>
  );
}

export default Announcements;
