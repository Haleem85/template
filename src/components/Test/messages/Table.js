import React from "react";
// import { Table, Button } from "reactstrap";

const Search = ({ value, onChange, children }) => {
  // do something
  return (
    <form>
      {children} <input type="text" value={value} onChange={onChange} />
    </form>
  );
};
const Table = ({ list, pattern, onDismiss }) => (
  <div className="table">
    {list.filter(isSearched(pattern)).map((item) => (
      <div key={item.objectID} className="table-row">
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline">
            Dismiss
          </Button>
        </span>
      </div>
    ))}
  </div>
);
class Display extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.color}</p>
        <p> {this.props.num}</p>
        <p> {this.props.size}</p>
      </div>
    );
  }
}
class Label extends React.Component {
  render() {
    return <Display {...this.props} />;
  }
}
class Shirt extends React.Component {
  render() {
    return <Label {...this.props} />;
  }
}

export default Shirt;
