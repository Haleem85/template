/*
    ===============================
            Portfolio Styles
    ===============================
*/
import React from 'react';
import styled from 'styled-components';



export const Portfolio= styled.div`
  background: #f8f8f8;
  padding-top: 20px;
  overflow: hidden;
  
  `; 


export const portfolio-title {
  text-align: center;
  font-size: 35px;
}

export const span {
  font-weight: normal;
}

export const portfolio-list {
  list-style: none;
  text-align: center;
  margin: 20px 0;
}

export const portfolio-item {
  display: inline-block;
  width: 100px;
  padding: 10px;
}

 export const portfolio-item.active {
  background: #eb5424;
  color: #fff;
}

 export const box div {
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;
}
export const img {
  width: 100%;
}

export const box div .overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(235, 84, 36, 0.5);
  font-size: 15px;
  opacity: 0;
}

export const box div .overlay span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid #eb5424;
}

 export const box div:hover .overlay {
  opacity: 1;
}

@media (max-width: 575px) {
  .portfolio .portfolio-list .portfolio-item {
    display: block;
    margin: auto;
  }

  export const box div {
    width: 100%;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .box div {
    width: 50%;
  }
}
