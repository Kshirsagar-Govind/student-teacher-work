import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import TickLogo from "../../Assets/tick-logo.svg";
import CrossLogo from "../../Assets/cross-logo.svg";
import ResultLogo from "../../Assets/result-logo.svg";
import ConfirmationPopup from "../../Container/Interrupts/alert-popup";

export default class StudentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileDetails: false,
      attendanceDetails: false,
      homeWorkDetails: true,
    };
  }

  setActive = (value) => {
    this.setState({
      profileDetails: false,
      attendanceDetails: false,
      homeWorkDetails: false,
    });
    switch (value) {
      case 1:
        this.setState({
          profileDetails: true,
        });
        break;

      case 3:
        this.setState({
          attendanceDetails: true,
        });
        break;

      case 2:
        this.setState({
          homeWorkDetails: true,
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <div className="just-space">
          <h2>Student Profile</h2>

          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              window.history.back();
            }}
          >
            Back To List
          </button>
        </div>
        <div className="mt-3">
          <div className="jumbotron  rounded jumbotron-fluid bg-light py-3">
            <div className="container">
              <h1 className="display-5">Govind Kshirsagar</h1>
            </div>
          </div>
          <div className="mt-3">
            <button
              onClick={() => this.setActive(1)}
              type="button"
              className="btn btn-primary mx-2"
            >
              Profile Details
            </button>
            <button
              onClick={() => this.setActive(2)}
              type="button"
              className="btn btn-primary mx-2"
            >
              Home Work
            </button>
            <button
              onClick={() => this.setActive(3)}
              type="button"
              className="btn btn-primary mx-2"
            >
              Attendance Sheet
            </button>
          </div>
        </div>
        {this.state.profileDetails ? (
          <div className="mt-3">
            <ProfileDetails />
          </div>
        ) : this.state.homeWorkDetails ? (
          <div className="mt-3">
            <HomeWorkDetails />
          </div>
        ) : this.state.attendanceDetails ? (
          <div className="mt-3">
            <AttendanceDetails />
          </div>
        ) : (
          <div className="mt-3">
            <ProfileDetails />
          </div>
        )}
      </div>
    );
  }
}

function ProfileDetails() {
  return (
    <div className="">
      <h4 className="text-secondary">Profile Details</h4>
      <div className="">
        <label htmlFor="">Admission Date</label>
        <label htmlFor="" className="mx-5">
          DD/MM/YYYY
        </label>
      </div>

      <div className="">
        <label htmlFor="">Admission Date</label>
        <label htmlFor="" className="mx-5">
          DD/MM/YYYY
        </label>
      </div>

      <div className="">
        <label htmlFor="">Admission Date</label>
        <label htmlFor="" className="mx-5">
          DD/MM/YYYY
        </label>
      </div>
    </div>
  );
}

function HomeWorkDetails() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [msg, setMsg] = useState("Are you Sure?");
  return (
    <div className="">
      <div className="">
        <div className="">
          <h4 className="text-secondary">Home work Details</h4>
        </div>
        <div className="card-container">
          <div className="card px-3 py-3" style={{ width: "25rem" }}>
            <div className="just-space">
              <h5>Home Work Title</h5>
              <div className="d-flex">
                <img
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Approove"
                  src={TickLogo}
                  alt=""
                  onClick={() => {
                    setShowConfirmation(true);
                    setMsg("Approove homework?");
                  }}
                />
                <img
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Reject"
                  src={CrossLogo}
                  alt=""
                  onClick={() => {
                    setShowConfirmation(true);
                    setMsg("Reject homework?");
                  }}
                />
              </div>
            </div>
            <p>Description</p>
            <button className="btn btn-outline-secondary">View Homework</button>
          </div>
          {showConfirmation ? (
            <div className="dark-back">
              <ConfirmationPopup
                cancel={() => setShowConfirmation(false)}
                confirmation_msg={msg}
                desc="?"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function AttendanceDetails() {
  return (
    <div className="">
      <div className="just-space">
        <h4 className="text-secondary">Attendance Details</h4>

        <select name="" id="" style={{ width: "10rem" }}>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
        </select>
      </div>

      <div className="just-space mt-3">
        <table class="table table-striped" style={{ width: "40rem" }}>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">DD/MM/YYYY</td>
              <td>Present</td>
            </tr>

            <tr>
              <td scope="row">DD/MM/YYYY</td>
              <td>Present</td>
            </tr>

            <tr>
              <td scope="row">DD/MM/YYYY</td>
              <td>Present</td>
            </tr>
          </tbody>
        </table>

        <div className="" style={{ width: "30rem" }}>
          <h5>Graph</h5>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}
