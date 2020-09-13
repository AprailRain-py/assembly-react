import React from "react";

const heading = (props) => {
  return (
    <div class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm bg-info">
      <i class="h3 mb-0 text-white-50"></i>{" "}
      {`Tweets with URLs ${props.totaltweets}`}
    </div>
  );
};

export default heading;
