import React from "react";
import "./style.css";
import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioTitleSpan,
  PortfolioList,
  PortfolioItem,
  Box,
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
        <li class="portfolio-item active">All</li>
        <li class="portfolio-item">HTML</li>
        <li class="portfolio-item">Photoshop</li>
        <li class="portfolio-item">Wordpress</li>
        <li class="portfolio-item">Mobile</li>
      </PortfolioList>

      <Box>
        <div>
          <img
            src={require("../../images/Portfolio/portfolio-img1.jpg")}
            alt=""
          />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img
            src={require("../../images/Portfolio/portfolio-img2.jpg")}
            alt=""
          />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img
            src={require("../../images/Portfolio/portfolio-img3.jpg")}
            alt=""
          />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img
            src={require("../../images/Portfolio/portfolio-img4.jpg")}
            alt=""
          />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img
            src={require("../../images/Portfolio/portfolio-img5.jpg")}
            alt=""
          />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img
            src={require("../../images/Portfolio/portfolio-img6.jpg")}
            alt=""
          />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img
            src={require("../../images/Portfolio/portfolio-img7.jpg")}
            alt=""
          />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img
            src={require("../../images/Portfolio/portfolio-img8.jpg")}
            alt=""
          />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
      </Box>
    </PortfolioSection>
  );
};

export default Portfolio;
