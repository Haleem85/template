import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import "./style.css";
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
const dataFile = "";
const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("/js/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);

  const PortfolioImages = images.map(function (imageItem) {
    return (
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  });

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

      <div className="Box">{PortfolioImages}</div>
    </PortfolioSection>
  );
};

export default Portfolio;
