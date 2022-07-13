import React from "react";

import {
    BrowserRouter as Router,
    Route, Link, NavLink, Routes
} from "react-router-dom";

class Contact extends React.Component {
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
                       <div class="row">
                       <div class="col-sm-3"></div>
                            <div class="col-sm-6">
                                <h2 class="myskills">Contact Details</h2>
                                <br></br>
                                <table class="table table-dark   table-striped">
                                    
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>Vasanth Vijay K</td>                                           

                                        </tr>
                                        <tr>
                                            <td>Mobile no</td>
                                            <td>9043935319, 9080625870</td>                                            

                                        </tr>
                                        <tr>
                                            <td>Email Id</td>
                                            
                                            <td>
                                                <a href={"mailto:vasanthvijaykvv124@gmail.com"} target="_blank">vasanthvijaykvv124@gmail.com</a>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>Github </td>
                                            
                                            <td>
                                                <a href={"https://github.com/vasanthvijaykvv"} target="_blank">Github Link</a>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>linkedin </td>
                                            
                                            <td>
                                                <a href={"https://www.linkedin.com/in/vasanth-vijay-k-996000159" } target="_blank">linkedin Link</a>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-sm-3"></div>
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
            </>
            </body>
        );
    }
}
export default Contact;