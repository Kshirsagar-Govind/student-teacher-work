import React, { useState } from "react";
import TickLogo from "../../Assets/tick-logo.svg";
import CrossLogo from "../../Assets/cross-logo.svg";
import ResultLogo from "../../Assets/result-logo.svg";
import TableLogo from "../../Assets/table-logo.svg";
import CardtLogo from "../../Assets/card-logo.svg";

const tempdata = [
  {
    title: "My Title",
    desc: "something",
    date: "27/05/2022",
    status: false,
  },
  {
    title: "My Title",
    desc: "something",
    date: "27/05/2022",
    status: true,
  },
  {
    title: "My Title",
    desc: "something",
    date: "27/05/2022",
    status: false,
  },
  {
    title: "My Title",
    desc: "something",
    date: "27/05/2022",
    status: true,
  },
];

export default function HomeWorkPage() {
  const [showHomeWrokForm, setShowHomeWrokForm] = useState(false);
  const [tableFormat, toggleTableFromat] = useState(false);
  return (
    <div className="">
      <div class="jumbotron jumbotron-fluid bg-light py-3">
        <div class="container">
          <div className="just-space">
            <span className="d-flex">
              <h3 className="mx-4">My Homework</h3>
              {!tableFormat ? (
                <div
                  onClick={() => toggleTableFromat(!tableFormat)}
                  className="card just-center px-2"
                >
                  <img src={TableLogo} alt="" />
                </div>
              ) : (
                <div
                  onClick={() => toggleTableFromat(!tableFormat)}
                  className="card just-center px-2"
                >
                  <img src={CardtLogo} alt="" />{" "}
                </div>
              )}
            </span>
            <button
              className="btn btn-success"
              onClick={() => setShowHomeWrokForm(true)}
            >
              New Homework
            </button>
          </div>
        </div>
      </div>

      {tableFormat ? (
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {tempdata.map((item) => (
              <tr>
                <td scope="row">{item.title}</td>
                <td>{item.desc}</td>
                <td>{item.date}</td>

                <td>
                  <img src={item.status ? TickLogo : CrossLogo} alt="" />
                </td>
                <td>
                  <button className="btn btn-primary">See Home Work</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="card-container mt-3">
          {tempdata.map((item) => (
            <div className="card px-3 py-3" style={{ width: "25rem" }}>
              <div className="just-space">
                <h5>{item.title}</h5>
                <div className="d-flex">
                  <img src={item.status ? TickLogo : CrossLogo} alt="" />
                </div>
              </div>
              <small className="text-secondary">Submitted on {item.date}</small>
              <p>{item.desc}</p>
              <button className="btn btn-outline-secondary">
                See Home Work
              </button>
            </div>
          ))}
        </div>
      )}

      {showHomeWrokForm ? (
        <div className="dark-back">
          <AddHomeWork close={() => setShowHomeWrokForm(false)} />
        </div>
      ) : null}
    </div>
  );
}

const AddHomeWork = ({ close }) => {
  return (
    <div className="card px-5 py-5" style={{ width: "40%" }}>
      <div className="">
        <div className="just-space">
          <h3>New Addmission </h3>
          <button className="btn btn-outline-secondary" onClick={() => close()}>
            X
          </button>
        </div>
      </div>
      <div className="form">
        <form onSubmit={""}>
          <div className="form-group mt-3 ">
            <label htmlFor="">Title</label>
            <input class="form-control" placeholder="enter title" type="text" />
          </div>

          <div className="form-group mt-3 ">
            <label htmlFor="">Description</label>
            <input
              class="form-control"
              placeholder="enter description"
              type="text"
            />
          </div>

          <div className="form-group mt-3 ">
            <label htmlFor="">Upload Homework PDF</label>
            <input
              class="form-control"
              placeholder="enter password"
              type="file"
            />
          </div>
          <button type="submit" class="mt-3 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
