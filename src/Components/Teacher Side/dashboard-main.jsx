import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../style.css";
import TeacherDashboard from "./Pages/dashboard-view";
import StudentProfile from "./Pages/student-profile";
import StudentsList from "./Pages/students-list";
import Timetable from "./Pages/timetable-page";

export default class DashboardMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentsPage: false,
      dashboardPage: false,
      timetablePage: false,
    };
  }

  componentDidMount() {
    const temp = window.location;
    console.log(temp);
    // this.setActive();
  }

  setActive = (value) => {
    this.setActive({
      studentsPage: false,
      dashboardPage: false,
      timetablePage: false,
    });

    switch (value) {
      case 1:
        this.setActive({
          studentsPage: true,
        });
        break;
      case 2:
        this.setActive({
          dashboardPage: true,
        });
        break;

      case 3:
        this.setActive({
          timetablePage: true,
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="dashboard-main">
        <div className="side-nav-bar">
          <div className=" text-center">
            <h3>Project Name</h3>
          </div>
          <ul className="side-nav-bar-menu">
            <Link
              to="/teacher"
              className="no-style"
              style={{ color: "inherit" }}
            >
              <li className="">Students</li>
            </Link>

            <Link
              to="/teacher/dashboard"
              className="no-style"
              style={{ color: "inherit" }}
            >
              <li className="">Dashboard</li>
            </Link>

            <Link
              to="/teacher/timetable"
              className="no-style"
              style={{ color: "inherit" }}
            >
              <li>Timetable</li>
            </Link>
          </ul>
        </div>

        <div className="dashboard-view px-5 py-5">
          <Routes>
            <Route path="/" element={<StudentsList />}></Route>
            <Route path="/student-profile" exact element={<StudentProfile />} />
            <Route path="/dashboard" exact element={<TeacherDashboard />} />
            <Route path="/timetable" exact element={<Timetable />} />
          </Routes>
        </div>
      </div>
    );
  }
}
