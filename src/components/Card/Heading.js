import React from "react";

const heading = (props) => {
  return (
    <a
      href="/"
      class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
    >
      <i class="fas fa-download fa-sm text-white-50"></i> {props.totaltweets}
    </a>
  );
};

export default heading;
