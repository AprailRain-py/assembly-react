import React from "react";

const cardSecondary = (props) => {
  return (
    <div key={props.key} className="col-lg-3 mb-4">
      <div className="card bg-secondary text-white shadow">
        <div className="card-body">
          {props.count}
          <div className="text-white-50 small">{props.domain}</div>
        </div>
      </div>
    </div>
  );
};

export default cardSecondary;
