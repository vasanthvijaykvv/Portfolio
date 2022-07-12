import React from "react";
import Profilepic from './image/profilepic.jpg';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route, Link, NavLink, Routes
} from "react-router-dom";

class Home extends React.Component {
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
                                <a class="nav-link active" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/project">Project</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/certificate">Certificate</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                    <div class="container">
                        <div class='row'>
                            <div class="col-sm-4" >
                                <div class="rounded-circle">
                                    <img src={Profilepic}
                                        class="rounded-circle mx-auto d-block"
                                        alt="my photo"
                                        width="130px"
                                        height="150px" />
                                </div>
                                <br></br>

                            </div>
                            <div class="col-sm-8">
                                <h2 class="myskills">Career Objective</h2>
                                <br></br>
                                <p class="skills">
                                    To work in a professional environment where I can find myself in a decisive opportunities for creating value added career for myself and extend quality service to my organization.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="myskills">Technical Skills</h2>
                                <br></br>
                                <ul>
                                    <li>Programming Language - C, C# </li>
                                    <li>Front End Languages - HTML5 , CSS , JavaScript , BootStrap-4, Sass, ReactJS </li>
                                    <li>Database - MYSQL </li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <h2 class="myskills">Internship and Certification</h2>
                                <br></br>
                                <ul class="skills">
                                    <li>
                                        Infosys | Springboard - Introduction of Cyber Security
                                    </li>
                                    <li> TCS iON Career Edge - Young Professional</li>
                                    <li>Udemy-HTML, CSS3, JAVASCRIPT</li>
                                </ul>
                            </div>
                            <br></br>
                            <div class="col-sm-12">
                                <h2 class="myskills">My Projects</h2>
                                <br></br>
                                <table class="table table-dark   table-striped">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Programming Language</th>
                                            <th>Project Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Chess Board</td>
                                            <td>Html5, CSS3</td>
                                            <td>
                                                <a href={"https://vasanthvijaykvv.github.io/ChessBoard/"}>Click here</a>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>Digital Clock</td>
                                            <td>Html5, CSS3, React JS</td>
                                            <td>
                                                <a href={"https://vasanthvijaykvv.github.io/Digital-clock/"}>Click here</a>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>Movie Ticket Booking</td>
                                            <td>Html5, CSS3, React JS, BootStrap-4</td>
                                            <td>
                                                <a href={"https://vasanthvijaykvv.github.io/Movie-ticket/"}>Click here</a>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>Portfolio</td>
                                            <td>Html5, CSS3, React JS, BootStrap-4</td>
                                            <td>
                                                <a href={"https://vasanthvijaykvv.github.io/Portfolio/"}>Click here</a>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-sm-12">
                                <h2 class="myskills">My EDucation Qualification</h2>
                                <br></br>
                                <table class="table table-dark  table-striped">
                                    <thead>
                                        <tr>
                                            <th>Degree</th>
                                            <th>School/College</th>
                                            <th>Year of Passing</th>
                                            <th>Percentage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>B.E (Mechanical Eng)</td>
                                            <td>Sri SaiRam Institute Of Technology</td>
                                            <td>2019</td>
                                            <td> 65</td>

                                        </tr>
                                        <tr>
                                            <td>12 th</td>
                                            <td>Pachamuthu Matric highersecondary School</td>
                                            <td>2015</td>
                                            <td> 81</td>
                                        </tr>
                                        <tr>
                                            <td>10 th</td>
                                            <td>Adarsh Matric highersecondary School</td>
                                            <td>2013</td>
                                            <td> 86.8</td>

                                        </tr>
                                    </tbody>
                                </table>
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
export default Home