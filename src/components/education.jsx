import { useState } from "react";
import "./education.css";

export const schoolLists = [
  {
    id: 0,
    schoolName: "UCSD",
    degreeType: "(BS) Economics",
    start: "08/2021",
    end: "present",
    schoolLocation: "CA",
  },
  {
    id: 1,
    schoolName: "UCLA",
    degreeType: "(BS) Math-Computer Science",
    start: "08/2021",
    end: "present",
    schoolLocation: "CA",
  },
];

export default function Education({ onSave }) {
  const [expand, setExpand] = useState(false);
  const [add, setAdd] = useState(false);
  const [state, setState] = useState(true);

  function handleExpand() {
    expand ? setExpand(false) : setExpand(true);
  }

  function handleAdd() {
    setAdd(true);
    setState(true);
  }

  function handleState() {
    state ? setState(false) : setState(true);
  }

  if (expand) {
    return (
      <section>
        <header>
          <h1>Education</h1>
          <button href="" onClick={handleExpand}>
            &#x2191;
          </button>
        </header>
        {schoolLists.map((list) => {
          return (
            <div key={list.id} className="list">
              <h3>{list.schoolName}</h3>
              <div className="degree">{list.degreeType}</div>
            </div>
          );
        })}
        {add && <Add status={state} state={handleState} onSave={onSave} />}
        <div className="btnContainer">
          <button onClick={handleAdd}>+ Education</button>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <header>
          <h1>Education</h1>
          <button href="" onClick={handleExpand}>
            &#8595;
          </button>
        </header>
      </section>
    );
  }
}

function Add({ status, state, onSave }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  function handleSave() {
    const list = {
      id: schoolLists[schoolLists.length - 1].id + 1,
      schoolName: school,
      degreeType: degree,
      start: startDate,
      end: endDate,
      schoolLocation: location,
    };
    schoolLists.push(list);
    onSave(schoolLists);
    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    state();
  }

  if (status) {
    return (
      <div className="add-school">
        <h3>School</h3>
        <input
          placeholder="Enter School / University"
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <h3>Degree</h3>
        <input
          placeholder="Enter Degree / Field of Study"
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        <div className="date">
          <div>
            <h3>Start Date</h3>
            <input
              placeholder="Enter Start Date"
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <h3>End Date</h3>
            <input
              placeholder="Enter End Date"
              type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <h3>
          Location <span>optional</span>
        </h3>
        <input
          placeholder="Enter Location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="btnWrapper">
          <button onClick={state}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    );
  }
}
