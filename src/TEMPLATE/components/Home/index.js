import React from "react";
// import "./style.css";
import {
  HomeContainer,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  Span,
  HomeBtn,
} from "./style";

const Home = () => {
  return (
    // <HomeContainer>
    <HomeContainer>
      <HomeInformation>
        <HomeTitle>Haleem</HomeTitle>
        <HomeInfo>Creative Director</HomeInfo>
        <HomeDesc>
          Iam a professional <Span>UX Designer</Span> and Front-End Developer
          creating modern and resposive designs to Web and Mobile. Let us work
          together. Thank you.
        </HomeDesc>
        <HomeBtn> Lets Begin </HomeBtn>
      </HomeInformation>
    </HomeContainer>
  );
};

export default Home;
