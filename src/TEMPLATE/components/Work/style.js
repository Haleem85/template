/*
    ===============================
            Work Styles
    ===============================
*/

import styled from "styled-components";
export const WorkSection = styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff;
`;

export const WorkTitle = styled.h2`
  font-size: 30px;
  margin-left: 2%;
`;

export const WorkSpan = styled.span`
  font-weight: normal;
`;

export const WorkPart = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: ${(props) => (props.number == 1 ? "0%" : "5%")};
  @media (max-width: 575px) {
    width: 100%;
    float: none;
    margin-left: 0;
  }
`;
export const WorkLastPart = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: 5%;
  @media (max-width: 575px) {
    width: 100%;
    float: none;
    margin-left: 0;
  }
`;

export const WorkFirstPart = styled.div`
  margin-left: 0;
`;

export const WorkPartIcon = styled.i`
  color: #888;
  margin-bottom: 20px;
`;

export const WorkPartTitle = styled.h4`
  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px;
`;

export const WorkPartLine = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`;

export const WorkPartDesc = styled.p`
  font-size: 14px;
  color: #888;
  padding: 20px;
`;
