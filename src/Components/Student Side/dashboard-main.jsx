import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import StudentProfile from "../Teacher Side/Pages/student-profile";
import StudentsList from "../Teacher Side/Pages/students-list";
import HomeWorkPage from "./Pages/home-wrok-page";
import StudentDashboardView from "./Pages/s-dashboard-view";

export default class StudentDashboardMain extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-main">
          <div className="side-nav-bar">
            <div className=" text-center">
              <h3>Project Name</h3>
            </div>
            <ul className=" ">
              <Link to="/student" className="no-style">
                <li className="py-3">Dashboard</li>
              </Link>
              <Link to="/student/homework" className="no-style">
                <li className="py-3">Home Work</li>
              </Link>
              <li className="py-3">Time table</li>
            </ul>
          </div>

          <div className="dashboard-view px-5 py-5">
            <Routes>
              <Route path="/" exact element={<StudentDashboardView />}></Route>
              <Route path="/homework" exact element={<HomeWorkPage />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
