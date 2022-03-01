// import React, { Component } from "react";
// import isSearched from "../conversion/isSearched";

// const isSearched = (searchTerm) => (item) =>
//   item.title.toLowerCase().includes(searchTerm.toLowerCase());

export const Search = ({ value, onChange, children }) => {
  // do something
  return (
    <form>
      {children} <input type="text" value={value} onChange={onChange} />
    </form>
  );
};
