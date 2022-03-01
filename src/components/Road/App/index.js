import React from "react";
import "./index.css";
// import CommentList from "../comments";
// import { Main } from "../api";
import Example from "../functions/users";

// const variable1 = JSON.parse('["title":""]');
// const variable2 = JSON.parse('["author: ""]');
// const variables=["author"]

// let title = [];
// let author = [];
const App = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Author",
        accessor: "author",
      },
    ],
    []
  );
  const numb = 5;
  return <Example number={numb} />;
};

export default App;
