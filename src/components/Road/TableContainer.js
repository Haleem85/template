import React, { useState, useCallback, useMemo } from "react";
import { Table, Button } from "reactstrap";
import AddMessage from "../Test/messages/addMessages";
import EditMessage from "../Test/messages/editMessage";
// import "./App.css";
// import "./Button.css";
// import { Table, Button } from "reactstrap";
// // import "bootstrap/dist/css/bootstrap.css";
// import { Table, Button } from "./table";
// import { list } from "./list";
// // import { isSearched } from "./isSearched";
// import apiClient from "../messages/Services/api";
// import DataList from "../Test/messages/baseComp";
// // import * from "./data.json";
// // import axios from "axios";

// // button jsx
// const MyButton = ({ onClick, className = "", children }) => (
//   <button onClick={onClick} className={className} type="button">
//     {children}
//   </button>
// );

export default class MessagesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  render() {
    const { messages } = this.state;
    let messagesDetails = [];
    if (messages.length) {
      messagesDetails = messages.map((message) => {
        return (
          <tr key={message.id}>
            <td>{message.id}</td>
            <td>{message.firstName}</td>
            <td>{message.lastName}</td>
            <td>{message.email}</td>
            <td className="textareaFont">{message.msg}</td>
            <td className="actions">
              <Button
                // color="success"
                // color="success"
                className="btn btn-success"
                size="sm"
                onClick={() =>
                  this.editMessage(
                    message.id,
                    message.firstName,
                    message.lastName,
                    message.email,
                    message.msg
                  )
                }>
                Edit
              </Button>
              <Button
                className=" btn btn-danger"
                onClick={() => this.deleteMessage(message.id)}>
                Delete
              </Button>
            </td>
          </tr>
        );
      });
    }

    if (this.state.isLoading) {
      return (
        <div className="spinner-border text-center" role="status">
          {" "}
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
    return <TableContainer />;
  }
}

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // messages: [],
      newMessageData: {
        firstName: "",
        lastName: "",
        email: "",
        msg: "",
      },
      isLoading: false,
      status: "",
      newMessageModal: false,
      editMessageData: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        msg: "",
        editMessageModal: false,
        noDataFound: "",
      },
    };
  }
  render() {
    let messages = [];
    let messagesDetails = [];
    const { newMessageData } = this.state;
    return (
      <div className="tableContainer">
        <div className="tableTitle">
          <h4>Messages Table</h4>
        </div>

        <AddMessage
          toggleNewMessageModal={this.toggleNewMessageModal}
          newMessageModal={this.newMessageModal}
          onChangeAddMessageHandler={this.onChangeAddMessageHandler}
          addMessage={this.addMessage}
          newMessageData={this.newMessageData}
        />

        <EditMessage
          toggleEditMessageModal={this.toggleEditMessageModal}
          editMessageModal={this.editMessageModal}
          onChangeEditMessageHandler={this.onChangeEditMessageHandler}
          editMessage={this.editMessage}
          editMessageData={this.editMessageData}
          updateMessage={this.updateMessage}
        />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              {/* <th>Full Name</th> */}
              <th>Email</th>
              <th className="textarea">Message</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          {messages.length === 0 ? (
            <tbody>
              <h3>{this.noDataFound}</h3>
            </tbody>
          ) : (
            <tbody>{messagesDetails}</tbody>
          )}
        </Table>
      </div>
    );
  }
}
