import React from 'react';
import ReactDOM from 'react-dom';
import{
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import Home from './Home';
import Project from './project';
import Certificate from './certificate';
import Contact from './contact';
import reportWebVitals from './reportWebVitals';

const routing = (
   <Router>
   <React.Fragment>
     
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
              
        </React.Fragment>
   </Router>
)
reportWebVitals();
ReactDOM.render(routing,document.getElementById("root"));
