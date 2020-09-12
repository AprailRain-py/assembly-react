import React from "react";

const domainCard = (props) => {
  return props.domainURL
    .filter((u) => u.count > 0)
    .map((u, i) => {
      return (
        <div key={i} class="col-lg-3 mb-4">
          <div class="card bg-secondary text-white shadow">
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
