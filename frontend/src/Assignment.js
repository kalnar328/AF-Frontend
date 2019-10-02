import React from "react";
import { BrowserRouter, Router, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewAssignment from "./Components/Assignment/viewAssignment.component";
import AddAssignment from "./Components/Assignment/addAssignment.component";

function Assignment() {
  return (
    <BrowserRouter>
      <div className="container">
        <h2 className="mbr-section-subtitle mbr-light pb-1 mbr-fonts-style display-2">
          Manage Assignment
        </h2>
        <div className="row">
          <AddAssignment AddAssignment />
          <ViewAssignment ViewAssignment />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Assignment;
