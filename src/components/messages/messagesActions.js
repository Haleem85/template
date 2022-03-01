// import React from "react";
import apiClient from "./Services/api";

export const getMessages = () => {
  apiClient.get("/api/message").then((response) => {
    if (response.status === 200) {
      this.setState({
        messages: response.data.data ? response.data.data : [],
      });
    }
    if (response.data.status === "failed" && response.data.success === false) {
      this.setState({
        noDataFound: response.data.message,
      });
    }
  });
};

export const toggleNewMessageModal = () => {
  this.setState({
    newMessageModal: !this.state.newMessageModal,
  });
};
export const onChangeAddMessageHandler = (e) => {
  let { newMessageData } = this.state;
  newMessageData[e.target.name] = e.target.value;
  this.setState({ newMessageData });
};
export const addMessage = () => {
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

export const toggleEditMessageModal = () => {
  this.setState({
    editMessageModal: !this.state.editMessageModal,
  });
};

export const onChangeEditMessageHandler = (e) => {
  let { editMessageData } = this.state;
  editMessageData[e.target.name] = e.target.value;
  this.setState({ editMessageData });
};

export const editMessage = (id, firstName, lastName, email, msg) => {
  this.setState({
    editMessageData: { id, firstName, lastName, email, msg },
    editMessageModal: !this.state.editMessageModal,
  });
};

export const updateMessage = () => {
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

export const deleteMessage = (id) => {
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
