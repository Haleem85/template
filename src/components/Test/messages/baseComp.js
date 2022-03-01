import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import apiClient from "./Services/api";
import AddMessage from "./addMessages";
import EditMessage from "./editMessage";
// import Table from "../../Road/table";
// import { TableContainer } from "../../Road/TableContainer";
// import MessagesDetails from "../../Road/TableContainer";
// import "bootstrap/dist/css/bootstrap.css";

import "./style.css";

// function settMessages() {
//   apiClient.get("/api/book").then((response) => {
//     if (response.status === 200) {
//       setState({
//         messages: response.data.data ? response.data.data : [],
//       });
//     }
//     if (response.data.status === "failed" && response.data.success === false) {
//       setState({
//         noDataFound: response.data.book,
//       });
//     }
//   });
// }

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessageData, setNewMessageData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    msg: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState("");
  const [editMessageModal, setEditMessageModal] = useState(false);
  const [newMessageModal, setNewMessageModal] = useState(false);
  const [editMessageData, setEditMessageData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    msg: "",
    // editMessageModal: false,
    noDataFound: "",
  });
  useEffect(() => {
    getMessages();
  });
  // const getMessages=()=>{ setMessages()};
  // componentDidMount() {
  //   this.getMessages();
  // }
  getMessages = () => {
    apiClient.get("/api/message").then((response) => {
      if (response.status === 200) {
        setState({
          messages: response.data.data ? response.data.data : [],
        });
      }
      if (
        response.data.status === "failed" &&
        response.data.success === false
      ) {
        setState({
          noDataFound: response.data.book,
        });
      }
    });
  };

  const toggleNewMessageModal = () => {
    setState({
      newMessageModal: !newMessageModal,
    });
  };
  const onChangeAddMessageHandler = (e) => {
    let { newMessageData } = newMessageData;
    newMessageData[e.target.name] = e.target.value;
    setState({ newMessageData });
  };
  const addMessage = () => {
    apiClient.post("/api/create-book", newMessageData).then((response) => {
      const { messages } = messages;
      const newMessages = [...messages];
      newMessages.push(response.data);
      setState(
        {
          messages: newMessages,
          newMessageModal: false,
          newMessageData: {
            title: "",
            author: "",
          },
        },
        () => this.getMessages()
      );
    });
  };
  const toggleEditMessageModal = () => {
    setState({
      editMessageModal: !editMessageModal,
    });
  };

  const onChangeEditMessageHandler = (e) => {
    let { editMessageData } = editMessageData;
    editMessageData[e.target.name] = e.target.value;
    setState({ editMessageData });
  };

  const editMessage = (id, firstName, lastName, email, msg) => {
    setState({
      editMessageData: { id, firstName, lastName, email, msg },
      // editMessageModal: !editMessageModal,
    });
  };

  const updateMessage = () => {
    let { id, firstName, lastName, email, msg } = editMessageData;
    setState({
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
        getMessages();
        setState({
          editMessageModal: false,
          editMessageData: { firstName, lastName, email, msg },
          isLoading: false,
        });
      })
      .catch((error) => {
        setState({ isLoading: false });
        console.log(error.response);
      });
  };

  const deleteMessage = (id) => {
    setState({
      isLoading: true,
    });
    apiClient
      .delete("/api/message" + id)
      .then((response) => {
        setState({
          isLoading: false,
        });
        this.getMessages();
      })
      .catch((error) => {
        setState({
          isLoading: false,
        });
      });
  };
  // render() {
  const { noDataFound } = editMessageData.noDataFound;
  // const { header1, header2 } = p;
  // const { columns } = this.props;
  // const data = this.getMessages();
  // const col1
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
              // onClick={() =>
              //   editMessage(
              //     message.id,
              //     message.firstName,
              //     message.lastName,
              //     message.email,
              //     message.msg
              //   )
              // }
            >
              Edit
            </Button>
            <Button
              className=" btn btn-danger"
              // onClick={() => deleteMessage(message.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  }

  if (isLoading) {
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
      {/* 
      <AddMessage
        toggleNewMessageModal={toggleNewMessageModal}
        newMessageModal={newMessageModal}
        onChangeAddMessageHandler={onChangeAddMessageHandler}
        addMessage={addMessage}
        newMessageData={newMessageData}
      /> */}

      {/* <EditMessage
        toggleEditMessageModal={toggleEditMessageModal}
        // editMessageModal=setState(false)}
        onChangeEditMessageHandler={onChangeEditMessageHandler}
        editMessage={editMessage}
        editMessageData={editMessageData}
        updateMessage={updateMessage}
      /> */}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            {/* <th>Fu</th> */}
            <th>Email</th>
            <th className="textarea">Message</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        {messages.length === 0 ? (
          <tbody>{noDataFound}</tbody>
        ) : (
          <tbody>{messagesDetails}</tbody>
        )}
      </Table>
    </div>
  );
  // }
};
export default Messages;
