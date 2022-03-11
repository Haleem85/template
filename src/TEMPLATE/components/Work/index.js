import React from "react";
import axios from "axios";
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

class Work extends React.Component {
  state = {
    works: [],
  };
  componentDidMount() {
    axios.get("/js/data.json").then((res) => {
      this.setState({ works: res.data.works });
    });
  }
  render() {
    const { works } = this.state;
    const worksList = works.map((workItem) => {
      return (
        <WorkPart number={workItem.id} key={workItem.id}>
          <WorkPartIcon className={workItem.icon_name}></WorkPartIcon>
          <WorkPartTitle>{workItem.title}</WorkPartTitle>
          <WorkPartLine />
          <WorkPartDesc>{workItem.body}</WorkPartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <WorkSpan>My</WorkSpan> Work
          </WorkTitle>
          {/* <WorkPart number="1">
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
          </WorkPart> */}
          {worksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
