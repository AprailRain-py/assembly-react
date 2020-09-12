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
      <div className="row">
        <TweetCard totalUser={props.usersWithUrl}></TweetCard>
      </div>
      <div className="row">
        <Container heading="Domains shared">
          <Domain domainURL={props.domainURL}></Domain>
        </Container>
      </div>
    </div>
  );
};

export default userCard;
