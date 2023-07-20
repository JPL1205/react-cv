import { useState } from "react";
import Navbar from "./components/nav";
import Detail from "./components/detail";
import Education from "./components/education";
import Board from "./components/board";
import "./App.css";

function App() {
  const [detail, setDetail] = useState({});
  const [education, setEducation] = useState([
    {
      id: "",
      schoolName: "",
      degreeType: "",
      start: "",
      end: "",
      schoolLocation: "",
    },
  ]);
  const handleDetail = (info) => {
    setDetail(info);
  };

  const handleEducation = (info) => {
    setEducation(info);
  };
  console.log(education[0]);
  return (
    <div id="page">
      <div>
        <Navbar />
        <Detail onSave={handleDetail} />
        <Education onSave={handleEducation} />
      </div>
      <div>
        <Board head={detail} education={education} />
      </div>
    </div>
  );
}

export default App;
