import React from "react";
const container = (props) => {
  return (
    <div className="row">
      <div className="col-lg-12 mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">{props.heading}</h6>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default container;
