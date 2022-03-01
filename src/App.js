// export default App;
import React from "react";
// import "./App.css";
// import Button from "./components/Buttons/normalButton";
// import myList from "./components/data/items";
// import list from "./components/data/list";
// import Table from "./components/tables/table";
// import { Search } from "./components/boxes/search";
import Editable from "./components/Test/reusable/records";
// const list = "./components/data/list";
// const Table = "./components/tables/table";
// // import { isSearched } from "./components/conversion/isSearched";
// const DEFAULT_QUERY = "redux";
// const PATH_BASE = "https://hn.algolia.com/api/v1";
// const PATH_SEARCH = "/search";
// const PARAM_SEARCH = "query=";
// const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

// setSearchTopStories(result) {
// const { hits, page } = result;
// const oldHits = page !== 0
// ? this.state.result.hits
// : [];
// const updatedHits = [
// ...oldHits,
// ...hits
// ];
// this.setState({
// result: { hits: updatedHits, page }
// });
export default class App extends React.Component {
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
// const Search = ({ value, onChange, onSubmit, children }) => {
//   <form onSubmit={onSubmit}>
//     <input type="text" value={value} onChange={onChange} />
//     <button type="submit">{children}</button>
//   </form>;
// };

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       result: null,
//       searchTerm: DEFAULT_QUERY,
//     };
//     this.setSearchTopStories = this.setSearchTopStories.bind(this);
//     this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
//     this.onSearchChange = this.onSearchChange.bind(this);
//     this.onSearchSubmit = this.onSearchSubmit.bind(this);
//     this.onDismiss = this.onDismiss.bind(this);
//   }
//   onDismiss(id) {
//     const isNotId = (item) => item.objectID !== id;
//     const updatedHits = this.state.result.hits.filter(isNotId);
//     this.setState({
//       result: { ...this.state.result, hits: updatedHits },
//     });
//   }
//   fetchSearchTopStories(searchTerm) {
//     fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
//       .then((response) => response.json())
//       .then((result) => this.setSearchTopStories(result))
//       .catch((error) => error);
//   }
//   componentDidMount() {
//     const { searchTerm } = this.state;
//     this.fetchSearchTopStories(searchTerm);
//   }
//   onSearchSubmit() {
//     const { searchTerm } = this.state;
//     this.fetchSearchTopStories(searchTerm);
//   }
//   render() {
//     const { searchTerm, result } = this.state;
// const page = (result && result.page) || 0;
// return (
// <div className="page">
// <div className="interactions">
// { result &&
// <Table
// list={result.hits}
// onDismiss={this.onDismiss}

// />
// }
// <div className="interactions">
// <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1\
// )}>
// More
// </Button>
// </div>
// </div>
// );
// }}
