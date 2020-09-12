import React from "react";
import TweetCard from "./Tweet";
import Heading from "./Heading";

const userCard = (props) => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{`Welcome, ${props.userName}`}</h1>
        <Heading totaltweets={props.urlTweets}></Heading>
      </div>
      <div className="row">
        <TweetCard totalUser={props.usersWithUrl}></TweetCard>
      </div>
      <div className="row">
        <TweetCard totalUser={props.domainURL}></TweetCard>
      </div>
    </div>
  );
};

export default userCard;
