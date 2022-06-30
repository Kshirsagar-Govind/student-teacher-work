import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

var obj = {
  table: [],
};

export default class StudentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddPopup: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid bg-light py-3 px-5">
          <div className="just-space">
            <h2>Student List</h2>

            <button
              className="btn btn-warning"
              onClick={() => this.setState({ showAddPopup: true })}
            >
              New Admission
            </button>
          </div>
        </div>
        <div className="student-list-table-div mt-4">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Roll No</th>
                <th scope="col">Full Name</th>
                <th scope="col">Admission Date</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              <StudentListRow />
              <StudentListRow />
              <StudentListRow />
              <StudentListRow />
              <StudentListRow />
              <StudentListRow />
              <StudentListRow />
              <StudentListRow />
              <StudentListRow />
              <StudentListRow />
              <StudentListRow />
              <StudentListRow />
            </tbody>
          </table>
        </div>
        {this.state.showAddPopup ? (
          <div className="dark-back ">
            <div className="card px-5 py-5" style={{ width: "40%" }}>
              <div className="just-space">
                <h3>New Addmission </h3>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => this.setState({ showAddPopup: false })}
                >
                  X
                </button>
              </div>
              <div className="form">
                <form onSubmit={""}>
                  <div className="form-group mt-3 ">
                    <label htmlFor="">Full Name</label>
                    <input
                      class="form-control"
                      placeholder="enter full name"
                      type="text"
                    />
                  </div>

                  <div className="form-group mt-3 ">
                    <label htmlFor="">Student Username</label>
                    <input
                      class="form-control"
                      placeholder="enter username"
                      type="text"
                    />
                  </div>

                  <div className="form-group mt-3 ">
                    <label htmlFor="">Student Password</label>
                    <input
                      class="form-control"
                      placeholder="enter password"
                      type="text"
                    />
                  </div>
                  <button type="submit" class="mt-3 btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export function StudentListRow({ student }) {
  return (
    <tr>
      <th scope="row">1</th>
      <td>Govind Kshirsagar</td>
      <td>08/08/2021</td>
      <td>
        <Link to="/teacher/student-profile">
          <button className="btn btn-outline-primary">View Details</button>
        </Link>
      </td>
    </tr>
  );
}
