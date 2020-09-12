import React from "react";
import TweetCard from "./Tweet";
import Heading from "./Heading";
import Domain from "./Domain";
import Container from "../HOC/wrapper";

const userCard = (props) => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{`Welcome, ${props.userName}`}</h1>
        <Heading totaltweets={props.urlTweets}></Heading>
      </div>
      <Container heading="User's Tweet with URL"></Container>
      <TweetCard totalUser={props.usersWithUrl}></TweetCard>

      <Container heading="Domains shared"></Container>
      <Domain domainURL={props.domainURL}></Domain>
    </div>
  );
};

export default userCard;
