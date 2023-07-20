import "./board.css";
import { schoolLists } from "./education";
import { personDetail } from "./detail";
import { useState } from "react";

export default function Board({ display = true, head, education }) {
  const name = head.Name;
  return (
    <section id="board">
      <div className="header">
        <h1>{name}</h1>
        <a href="">{head.Email}</a>
        <a href="">{head.Phone}</a>
        <a href="">{head.Address}</a>
      </div>
      {/* <main>{education[0].schoolName}</main> */}
      <main>
        <h2>Education</h2>
        {education.map((school) => {
          return (
            <div key={school.id} className="school">
              <div>
                <p>{school.start + "  " + school.end}</p>
                <p>{school.schoolLocation}</p>
              </div>
              <div>
                <h3>{school.schoolName}</h3>
                <p>{school.degreeType}</p>
              </div>
            </div>
          );
        })}
      </main>
      <main>
        <h2>Professional Experience</h2>
      </main>
    </section>
  );
}
