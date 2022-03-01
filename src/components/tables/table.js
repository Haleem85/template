import React, { Component } from "react";
import { isSearched } from "../conversion/isSearched";
import Button from "../Buttons/normalButton";
import { largeColumn, midColumn, smallColumn } from "../columns/style";

export default class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map((item) => (
          <div key={item.objectID}>
            <span style={{ largeColumn }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ midColumn }}>{item.author}</span>
            <span style={{ smallColumn }}>{item.num_comments}</span>
            <span style={{ smallColumn }}>{item.points}</span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
