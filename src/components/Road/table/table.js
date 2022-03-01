import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import { Button } from "./Button";
import MouseTracker from "./MouseTracker";
const isSearched = (searchTerm) => (item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());
export const Table = ({ list, pattern, onDismiss }) => (
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
