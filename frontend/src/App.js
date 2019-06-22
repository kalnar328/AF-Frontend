import React from 'react';
import {BrowserRouter, Router,Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateAdmin from './Components/createAdmin.component';
import ViewAdmin from './Components/viewAdmin.component';

function App() {
  return (
    <BrowserRouter>
        <div className="container">
          <h2 className="mbr-section-subtitle mbr-light pb-1 mbr-fonts-style display-2">
            SII SYSTEM</h2>
            <div className="row">

                {/* <CreateAdmin createAdmin/> */}
                <ViewAdmin viewAdmin/>

            </div>
        </div> 
      </BrowserRouter>
  );
}

export default App;
