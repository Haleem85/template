import React from "react";
import "./style.css";
import {
  WorkSection,
  WorkTitle,
  WorkSpan,
  WorkPart,
  WorkFirstPart,
  WorkPartIcon,
  WorkPartTitle,
  WorkPartLine,
  WorkPartDesc,
  WorkLastPart,
} from "./style";

const Work = () => {
  return (
    <WorkSection>
      <div className="container">
        <WorkTitle>
          <WorkSpan>My</WorkSpan> Work
        </WorkTitle>
        <WorkPart number="1">
          <WorkPartIcon></WorkPartIcon>
          <WorkPartTitle>Mobile Ux 1</WorkPartTitle>
          <WorkPartLine />
          <WorkPartDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Doloribus
            quos omnis voluptas ea ipsam Voluptas
          </WorkPartDesc>
        </WorkPart>
        <WorkPart>
          <WorkPartIcon></WorkPartIcon>
          <WorkPartTitle>Mobile Ux 1</WorkPartTitle>
          <WorkPartLine />
          <WorkPartDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Doloribus
            quos omnis voluptas ea ipsam Voluptas
          </WorkPartDesc>
        </WorkPart>
        <WorkPart>
          <WorkPartIcon></WorkPartIcon>
          <WorkPartTitle>Mobile Ux3</WorkPartTitle>
          <WorkPartLine />
          <WorkPartDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Doloribus
            quos omnis voluptas ea ipsam Voluptas
          </WorkPartDesc>
        </WorkPart>
      </div>
    </WorkSection>
  );
};

export default Work;
