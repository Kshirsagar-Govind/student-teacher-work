import React from "react";

export default function ConfirmationPopup({
  confirmation_msg,
  desc,
  ok,
  cancel,
}) {
  return (
    <div className="px-4 py-4 card" style={{ width: "35%" }}>
      <h5>{confirmation_msg}</h5>
      <p>{desc}</p>
      <div className="just-right">
        <button className="btn btn-primary">Ok</button>
        <button
          className="btn btn-outline-secondary mx-3"
          onClick={() => cancel()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
