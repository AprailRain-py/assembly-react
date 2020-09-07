import React, { useState, useEffect } from "react";

export default function Home(props) {
  const [user, setUser] = useState({});
  useEffect(() => {
    // if Home page is loaded directly
    if (!props.location.state) {
      alert("an error occured");
      props.history.push("/");
    } else {
      setUser(props.location.state.user);
    }
  }, [props.location.state, props.history]);

  const logout = () => {
    //   logout function
    setUser({});
    alert("user logged out");
    props.history.push("/");
  };
  console.log("Set user from state", props.location.state.user.tweet.tweets);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div>
            <h1>Welcome {user.userName}!</h1>
            <img className="img-thumbnail" alt={user.name} src={user.photo} />
            {/* <p>{user.homeTimeLine}</p> */}
          </div>
        </div>
        <div className="col-lg-6">
          <button className="mb-4" onClick={logout}>
            {" "}
            Logout{" "}
          </button>
        </div>
      </div>

      {props.location.state.user.tweet.tweets.map((data) => {
        return (
          <div key={data._id} className="row">
            <div className="col-lg-12">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <span className="m-0 font-weight-bold text-primary mr-4">
                    {data.whoTweeted}
                  </span>
                  <span className="m-0 font-weight-bold text-primary mr-4">
                    #{data.hashTags}
                  </span>
                  <span className="m-0 font-weight-bold text-primary">
                    {data.urls}
                  </span>
                </div>
                <div className="card-body">{data.tweets}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
