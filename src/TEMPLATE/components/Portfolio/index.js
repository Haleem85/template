import React from "react";
import "./style.css";

const Portfolio = () => {
  return (
    <div class="portfolio">
      <h2 class="portfolio-title">
        <span>My</span> Portfolio
      </h2>
      <ul class="portfolio-list">
        <li class="portfolio-item active">All</li>
        <li class="portfolio-item">HTML</li>
        <li class="portfolio-item">Photoshop</li>
        <li class="portfolio-item">Wordpress</li>
        <li class="portfolio-item">Mobile</li>
      </ul>

      <div class="box">
        <div>
          <img src="images/Portfolio/portfolio-img1.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img src="images/Portfolio/portfolio-img2.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img src="images/Portfolio/portfolio-img3.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img src="images/Portfolio/portfolio-img4.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img src="images/Portfolio/portfolio-img5.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img src="images/Portfolio/portfolio-img6.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img src="images/Portfolio/portfolio-img7.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
        <div>
          <img src="images/Portfolio/portfolio-img8.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
