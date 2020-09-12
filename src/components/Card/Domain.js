import React from "react";

const domainCard = (props) => {
  return props.domainURL
    .filter((u) => u.count > 0)
    .map((u, i) => {
      return (
        <div key={i} className="col-lg-2 mb-4">
          <div className="card bg-secondary text-white shadow">
            <div className="card-body">
              {u.count}
              <div className="text-white-50 small">{u.domain}</div>
            </div>
          </div>
        </div>
      );
    });
};

export default domainCard;
