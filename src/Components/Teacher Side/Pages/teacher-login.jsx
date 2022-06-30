import React from "react";
import { Link } from "react-router-dom";

export default function TeacherLogin() {
  return (
    <div>
      <div className="just-center">
        <div className="" style={{ width: "40%" }}>
          <form action="" style={{ width: "50%" }}>
            <div className="form-group mt-3 ">
              <label htmlFor="">Email</label>
              <input
                class="form-control"
                placeholder="enter email"
                type="text"
              />
            </div>

            <div className="form-group mt-3 ">
              <label htmlFor="">Password</label>
              <input
                class="form-control"
                placeholder="enter password"
                type="password"
              />
            </div>
            <div className="form-group mt-3">
              {/* <input
                type="button"
                className="btn btn-primary"
                value="Signing"
              /> */}
              <Link to="/teacher">Teacher Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
