import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import { Table } from "./table";
import { list } from "./list";
import { Search } from "./search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: "",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss(id) {
    const isNotId = (item) => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }
  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }
  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Search
          </Search>
        </div>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}
export default App;
