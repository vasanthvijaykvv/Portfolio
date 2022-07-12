import React from "react";
import Chess from "./image/chess.png";
import Clock from "./image/clock.jpg";
import Cinitwo from "./image/cinitwo.jpg";
import Cinithree from "./image/cinithree.jpg";


import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";

class Project extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <body>
        <>
          <div class="heading">
            <div class="jumbotron text-center" id="heading">
              <h1 class="myname">Vasanth Vijay K</h1>
              <p class="myoccupation">FrontEnd Developer</p>

              <ul class="nav nav-pills nav-justified" id="navigation">
                <li class="nav-item">
                  <a class="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/project">
                    Project
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/certificate">
                    Certificate
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-sm-1">
                  <br></br>
                </div>
                <div class="col-sm-8 boxshadow">
                  <div>
                    <img
                      src={Chess}
                      class=" mx-auto d-block img-responsive rounded"
                      alt="my photo"
                      width="450px"
                      height="450px"
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <table class="table table-dark table-striped ">
                    <thead>
                      <tr>
                        <th>
                        <a href={"https://vasanthvijaykvv.github.io/ChessBoard/"}>Click here</a>
                        </th>
                      </tr>
                    </thead>
                  </table>
                  <h3>Chess Board</h3>
                  <p>This Chess Board is designed by using HTML5, CSS3</p>
                </div>
              </div>
            </div>
            <hr />
            <div class="container">
              <div class="row">
                <div class="col-sm-1">
                  <br></br>
                </div>
                <div class="col-sm-8 boxshadow">
                  <div>
                    <img
                      src={Clock}
                      class=" mx-auto d-block img-responsive rounded"
                      alt="my photo"
                      width="500px"
                      height="350px"
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <table class="table table-dark table-striped ">
                    <thead>
                      <tr>
                        <th>
                        <a href={"https://vasanthvijaykvv.github.io/Digital-clock/"}>Click here</a>
                        </th>
                      </tr>
                    </thead>
                  </table>
                  <h3>Digital Clock</h3>
                  <p>
                    This Digital Clock is Programmed by using HTML5, CSS3, React
                    JS
                  </p>
                </div>
              </div>
            </div>
            
            
            <hr />
            <div class=" container-fluid ">
              <div class="row">
                <div class="col-sm-4 boxshadow">
                  <div>
                    <img
                      src={Cinitwo}
                      class=" mx-auto d-block img-responsive rounded"
                      alt="my photo"
                      width="500px"
                      height="350px"
                    />
                  </div>
                </div>
                <div class="col-sm-4 boxshadow">
                  <div>
                    <img
                      src={Cinithree}
                      class=" mx-auto d-block img-responsive rounded"
                      alt="my photo"
                      width="500px"
                      height="350px"
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <table class="table table-dark table-striped ">
                    <thead>
                      <tr>
                        <th>
                        <a href={"https://vasanthvijaykvv.github.io/Movie-ticket/"}>Click here</a>
                        </th>
                      </tr>
                    </thead>
                  </table>
                  <h3>Movie Ticket Booking </h3>
                  <p>
                    This Movie Ticket Booking is Programmed by using HTML5, CSS3, React JS, Bootstrap-4, SweetAlert
                    
                  </p>
                </div>
              </div>
            </div>
            
            <div class="jumbotron text-center" id="footer">
              <ul class="nav justify-content-center ">
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
export default Project;
