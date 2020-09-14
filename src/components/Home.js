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
  // console.log(props.location.state);
  return (
    <div className="container-fluid">
      <Navigation
        userName={props.location.state == null ? "" : user.screen_name}
        imgSrc={props.location.state == null ? "" : user.photo}
        altText={props.location.state == null ? "" : user.name}
        logoutControl={logout}
      ></Navigation>
      <UserCard
        userName={props.location.state == null ? "" : user.screen_name}
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
        tweets={
          props.location.state == null
            ? null
            : props.location.state.user.tweet.tweets
        }
      ></UserCard>
    </div>
  );
}
