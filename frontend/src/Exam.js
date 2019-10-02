import React from "react";
import { BrowserRouter, Router, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewExam from "./Components/Exam/viewExam.component";
import AddExam from "./Components/Exam/addExam.component";

function Exam() {
  return (
    <BrowserRouter>
      <div className="container">
        <h2 className="mbr-section-subtitle mbr-light pb-1 mbr-fonts-style display-2">
          Manage Exam
        </h2>
        <div className="row">
          <AddExam AddExam />
          <ViewExam ViewExam />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Exam;
