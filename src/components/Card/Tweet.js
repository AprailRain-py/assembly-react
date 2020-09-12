import React from "react";

const tweetCard = (props) => {
  let loop;
  if (props.totalUser == null) {
    loop = [{ name: "yogesh", count: 2 }];
  } else {
    loop = props.totalUser;
  }
  console.log(loop);
  return loop.map((u, i) => {
    return (
      <div key={i} className="col-xl-3 col-md-6 mb-4">
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
              <div className="col-auto">
                <i className="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default tweetCard;