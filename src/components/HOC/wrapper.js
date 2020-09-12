import React from "react";
const container = (props) => {
  return (
    <div class="row">
      <div class="col-lg-12 mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">{props.heading}</h6>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default container;
