import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation/Navigation";
import UserCard from "../components/Card/UserCard";

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
  console.log(props.location.state);
  return (
    <div className="container-fluid">
      <Navigation
        userName={props.location.state == null ? "" : user.userName}
        imgSrc={props.location.state == null ? "" : user.photo}
        altText={props.location.state == null ? "" : user.name}
        logoutControl={logout}
      ></Navigation>
      <UserCard
        userName={props.location.state == null ? "" : ""}
        urlTweets={
          props.location.state == null
            ? null
            : props.location.state.user.tweetHasLink
        }
        usersWithUrl={
          props.location.state == null
            ? null
            : props.location.state.user.userWithMostURL
        }
        domainURL={
          props.location.state == null
            ? null
            : props.location.state.user.domainWithURL
        }
      ></UserCard>

      {/* {props.location.state.user.userWithMostURL.map((u, i) => {
        return (
          <div key={i}>
            <p>
              {u.name} has shared {u.count} urls
            </p>
          </div>
        );
      })} */}

      {/* {props.location.state.user.domainWithURL.map((d, i) => {
        return (
          <div key={i}>
            <p>
              {d.domain} has being shared {d.count} times
            </p>
          </div>
        );
      })}

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
      })} */}
    </div>
  );
}
