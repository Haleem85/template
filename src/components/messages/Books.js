// import React from "react";

// // import axios from "axios";
// import apiClient from "../Services/api";
// const Books = () => {
//     const [books, setBooks] = React.useState([]);

//     React.useEffect(() => {
//         apiClient
//             .get("/api/book")

//         .then((response) => {
//             setBooks(response.data);
//         })

//         .catch((error) => console.error(error));
//     }, []);

//     const bookList = books.map((book) => ( <
//         li key = { book.id } > { " " } { book.id } { book.title } { " " } <
//         /li>
//     ));

//     return <ul > { bookList } < /ul>;
// };

// export default Books;
import React from "react";
import apiClient from "./Services/api";

const Books = (props) => {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    if (props.loggedIn) {
      apiClient
        .get("/api/book")
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, [props.loggedIn]);
  const bookList = books.map((book) => (
    <div key={book.id} className="list-group-item">
      <h5> {book.title} </h5> <small> {book.author} </small>{" "}
    </div>
  ));
  if (props.loggedIn) {
    return <div className="list-group"> {bookList} </div>;
  }
  return <div className="alert alert-warning"> You are not logged in . </div>;
};

export default Books;
