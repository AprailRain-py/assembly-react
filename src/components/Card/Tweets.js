import React from "react";

const tweets = (props) => {
  return props.tweetsList.map((data, i) => {
    return (
      <div key={i} className="col-lg-8 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {`${data.whoTweeted} | #${data.hashTags} | ${data.urls}`}
            </h6>
          </div>
          <div className="card-body">
            <p>{data.tweets}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default tweets;
