import React from "react";
import "./style.css";
import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioTitleSpan,
  PortfolioList,
  PortfolioItem,
  ImageWrapper,
  Image,
  Overlay,
  OverlaySpan,
} from "./style";

const Portfolio = () => {
  return (
    <PortfolioSection>
      <PortfolioTitle>
        <PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className="Box">
        <ImageWrapper>
          <Image
            src={require("../../images/Portfolio/portfolio-img1.jpg")}
            alt=""
          />
          <Overlay>
            <span>Show Image</span>
          </Overlay>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={require("../../images/Portfolio/portfolio-img2.jpg")}
            alt=""
          />
          <Overlay>
            <span>Show Image</span>
          </Overlay>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={require("../../images/Portfolio/portfolio-img3.jpg")}
            alt=""
          />
          <Overlay>
            <span>Show Image</span>
          </Overlay>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={require("../../images/Portfolio/portfolio-img4.jpg")}
            alt=""
          />
          <Overlay>
            <span>Show Image</span>
          </Overlay>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={require("../../images/Portfolio/portfolio-img5.jpg")}
            alt=""
          />
          <Overlay>
            <span>Show Image</span>
          </Overlay>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={require("../../images/Portfolio/portfolio-img6.jpg")}
            alt=""
          />
          <Overlay>
            <span>Show Image</span>
          </Overlay>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={require("../../images/Portfolio/portfolio-img7.jpg")}
            alt=""
          />
          <Overlay>
            <span>Show Image</span>
          </Overlay>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={require("../../images/Portfolio/portfolio-img8.jpg")}
            alt=""
          />
          <Overlay>
            <span>Show Image</span>
          </Overlay>
        </ImageWrapper>
      </div>
    </PortfolioSection>
  );
};

export default Portfolio;
