import React from "react";
import Certificateone from './image/certificateone.jpg'; 
import Certificatetwo from './image/certificatetwo.jpg'; 
import Certificatethree from './image/certificatethree.jpg'; 
import Certificatefour from './image/certificatefour.jpg'; 
import './certificate.css';
import {
    BrowserRouter as Router,
    Route, Link, NavLink, Routes
} from "react-router-dom";

class Certificate extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <body><>
                <div class='heading'>
                    <div class='jumbotron text-center' id="heading">
                        <h1 class="myname">Vasanth Vijay K</h1>
                        <p class="myoccupation">FrontEnd Developer</p>


                        <ul class="nav nav-pills nav-justified" id="navigation">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/project">Project</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link active" to="/certificate">Certificate</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link active" to="/contact">Contact</Link>
                            </li>

                        </ul>
                    </div>
                    <div class="container-fluid">
                        <div class='row'>
                            <div class="col-sm-8 boxshadow" >
                                <div >
                                    <img src={Certificateone}
                                        class="mx-auto d-block img-responsive rounded"
                                        alt="my photo"
                                        width="830px"
                                        height="750px" 
                                        />
                                </div>
                                <br></br>

                            </div>
                            <div class="col-sm-4" >
                                <div id="border">
                                    <h3>TCS iON Career Edge - Young Professional</h3>
                                    <br/>
                                    <p><strong>Through this Cource I gained my Knowledge in Communication, Presentation, Softskills and someother skills  </strong> </p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="container-fluid">
                        <div class='row'>
                            <div class="col-sm-8 boxshadow" >
                                <div >
                                    <img src={Certificatetwo}
                                        class="mx-auto d-block img-responsive rounded"
                                        alt="my photo"
                                        width="830px"
                                        height="750px" 
                                        />
                                </div>
                                <br></br>

                            </div>
                            <div class="col-sm-4" >
                                <div id="border">
                                    <h3>Infosys | Springboard - Introduction of Cyber Security</h3>
                                    <br/>
                                    <p><strong>Cyber Security is the Protection of internet connection includes hardware, software and data from Cyber attacks    </strong> </p>
                                    
                                    <p><strong>Fundamental Concept like CIA traid, List of Injuctions, Vulnerablity, IT Security Layers, SQL Injection</strong> </p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="container-fluid">
                        <div class='row'>
                            <div class="col-sm-8 boxshadow" >
                                <div >
                                    <img src={Certificatethree}
                                        class="mx-auto d-block img-responsive rounded"
                                        alt="my photo"
                                        width="830px"
                                        height="750px" 
                                        />
                                </div>
                                <br></br>

                            </div>
                            <div class="col-sm-4" >
                                <div id="border">
                                    <h3>Udemy-YouAccel Training</h3>
                                    <br/>
                                    <p><strong>Basic Level Of HTML, CSS, JavaScript  </strong> </p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="container-fluid">
                        <div class='row'>
                            <div class="col-sm-8 boxshadow" >
                                <div >
                                    <img src={Certificatefour}
                                        class="mx-auto d-block img-responsive rounded"
                                        alt="my photo"
                                        width="830px"
                                        height="750px" 
                                        />
                                </div>
                                <br></br>

                            </div>
                            <div class="col-sm-4" >
                                <div id="border">
                                    <h3>linkedin - Structured Query Language</h3>
                                    <br/>
                                    <p><strong>SQL can be used in relational as well as multidimensional databases. Every database management system uses the SQL as database programming language. SQL commands are the instructions used to communicate with a database to perform tasks, functions, and queries with data.  </strong> </p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    
                    <div class="jumbotron text-center" id="footer">
                        <ul class="nav justify-content-center">
                        <li class="nav-item boxshadow">
                                <a href={"https://www.linkedin.com/in/vasanth-vijay-k-996000159" } target="_blank" class="fa fa-linkedin nav-link fa-lg" style={{color:"blue"}}/>                              

                            </li>
                            <li class="nav-item boxshadow">
                                <a href={"mailto:vasanthvijaykvv124@gmail.com"} target="_blank" class="fa fa-envelope nav-link fa-lg" style={{color:"blue"}}/>                               

                            </li>
                            <li class="nav-item boxshadow">
                                <a href={"https://github.com/vasanthvijaykvv"} target="_blank" class="fa fa-github nav-link fa-lg" style={{color:"blue"}}/>                              

                            </li>

                        </ul>

                    </div>
                </div>
            </>
            </body>
        );
    }
}
export default Certificate