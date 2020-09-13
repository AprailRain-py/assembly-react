import React from "react";

const tweetCard = (props) => {
  return props.totalUser.map((u, i) => {
    return (
      <div key={i} className="col-xl-2 col-md-3 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {u.name}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {u.count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default tweetCard;
