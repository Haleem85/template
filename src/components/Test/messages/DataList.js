import React, { Component } from "react";
import DataItem from "./DataItem";

export default class DataList extends Component {
  render() {
    let datas = this.props.dataList;
    const trItem = datas.map((item, index) => (
      <DataItem
        key={index}
        tableName={item}
        index={index}
        editDataSubmit={this.props.editDataSubmit}
        deleteData={this.props.deleteData}
      />
    ));
    return <tbody>{trItem}</tbody>;
  }
}
