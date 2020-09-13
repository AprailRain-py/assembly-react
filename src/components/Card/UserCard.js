import React from "react";
import TweetCard from "./TweetsWithURL";
import Heading from "./Heading";
import Domain from "./Domain";
import Container from "../HOC/wrapper";
import Tweet from "./Tweets";

const userCard = (props) => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{`Welcome, ${props.userName}`}</h1>
        <Heading totaltweets={props.urlTweets}></Heading>
      </div>
      <Container heading="User's Tweet with URL"></Container>
      <div class="row">
        <TweetCard totalUser={props.usersWithUrl}></TweetCard>
      </div>
      <Container heading="Domains shared"></Container>
      <div class="row">
        <Domain domainURL={props.domainURL}></Domain>
      </div>
      <div class="row">
        <Tweet tweetsList={props.tweets}></Tweet>
      </div>
    </div>
  );
};

export default userCard;
