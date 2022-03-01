import apiClient from "./Services/api";
import React from "react";
// export const getMessages = () => {

// import React from "react";

// export default class Button extends React.Component {
//   render() {
//     const { onClick, className = "", children } = this.props;
//     return (

//     );
//   }
// // }

// class getMessages extends React.Component() {
//   // const getMessages = this.getApi();
//   render() {

//     const getMessages
//     const getApi = () => {
//       apiClient.get("/api/message").then((response) => {
//         if (response.status === 200) {
//           this.setState({
//             messages: response.data.data ? response.data.data : [],
//           });
//         }
//         if (
//           response.data.status === "failed" &&
//           response.data.success === false
//         ) {
//           this.setState({
//             noDataFound: response.data.message,
//           });
//         }
//       });
//     };
//     return { getApi };
//   }
// }
// export default getMessages;
export const addMessage = (api = "/api/create-message") => {
  apiClient.post({ api }, this.state.newMessageData).then((response) => {
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
