import React from "react";

const domainCard = (props) => {
  return props.domainURL.map((u, i) => {
    return (
      <div class="col-lg-6 mb-4">
        <div class="card bg-primary text-white shadow">
          <div class="card-body">
            {u.count}
            <div class="text-white-50 small">{u.domain}</div>
          </div>
        </div>
      </div>
    );
  });
};

export default domainCard;
