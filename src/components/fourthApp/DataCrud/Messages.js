import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import apiClient from "./api";
import AddMessage from "./addMessages";
import EditMessage from "./editMessage";
import "./style.css";

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
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
  componentDidMount() {
    this.getMessages();
  }
  getMessages() {
    apiClient.get("/api/message").then((response) => {
      if (response.status === 200) {
        this.setState({
          messages: response.data.data ? response.data.data : [],
        });
      }
      if (
        response.data.status === "failed" &&
        response.data.success === false
      ) {
        this.setState({
          noDataFound: response.data.message,
        });
      }
    });
  }

  toggleNewMessageModal = () => {
    this.setState({
      newMessageModal: !this.state.newMessageModal,
    });
  };
  onChangeAddMessageHandler = (e) => {
    let { newMessageData } = this.state;
    newMessageData[e.target.name] = e.target.value;
    this.setState({ newMessageData });
  };
  addMessage = () => {
    apiClient
      .post("/api/create-message", this.state.newMessageData)
      .then((response) => {
        const { messages } = this.state;
        const newMessages = [...messages];
        newMessages.push(response.data);
        this.setState(
          {
            messages: newMessages,
            newMessageModal: false,
            newMessageData: {
              firsName: "",
              lastName: "",
              email: "",
              msg: "",
            },
          },
          () => this.getMessages()
        );
      });
  };
  toggleEditMessageModal = () => {
    this.setState({
      editMessageModal: !this.state.editMessageModal,
    });
  };

  onChangeEditMessageHandler = (e) => {
    let { editMessageData } = this.state;
    editMessageData[e.target.name] = e.target.value;
    this.setState({ editMessageData });
  };

  editMessage = (id, firstName, lastName, email, msg) => {
    this.setState({
      editMessageData: { id, firstName, lastName, email, msg },
      editMessageModal: !this.state.editMessageModal,
    });
  };

  updateMessage = () => {
    let { id, firstName, lastName, email, msg } = this.state.editMessageData;
    this.setState({
      isLoading: true,
    });
    apiClient
      .post("/api/create-message", {
        firstName,
        lastName,
        email,
        msg,
        id,
      })
      .then((response) => {
        this.getMessages();
        this.setState({
          editMessageModal: false,
          editMessageData: { firstName, lastName, email, msg },
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.log(error.response);
      });
  };

  deleteMessage = (id) => {
    this.setState({
      isLoading: true,
    });
    apiClient
      .delete("/api/message/" + id)
      .then((response) => {
        this.setState({
          isLoading: false,
        });
        this.getMessages();
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
      });
  };
  render() {
    const { newMessageData, editMessageData, noDataFound, messages } =
      this.state;
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
    return (
      <div className="tableContainer">
        <div className="tableTitle">
          <h4>Messages Table</h4>
        </div>

        <AddMessage
          toggleNewMessageModal={this.toggleNewMessageModal}
          newMessageModal={this.state.newMessageModal}
          onChangeAddMessageHandler={this.onChangeAddMessageHandler}
          addMessage={this.addMessage}
          newMessageData={newMessageData}
        />

        <EditMessage
          toggleEditMessageModal={this.toggleEditMessageModal}
          editMessageModal={this.state.editMessageModal}
          onChangeEditMessageHandler={this.onChangeEditMessageHandler}
          editMessage={this.editMessage}
          editMessageData={editMessageData}
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
              <h3>{noDataFound}</h3>
            </tbody>
          ) : (
            <tbody>{messagesDetails}</tbody>
          )}
        </Table>
      </div>
    );
  }
}
