import React, { Component } from "react";
// import { Table, Button } from "reactstrap";
// import apiClient from "./Services/api";
// import AddMessage from "./addMessages";
// import EditMessage from "./editMessage";
// import "./style.css";
// import { TableInstance } from "./baseComp";
import DataList from "../Test/messages/baseComp";
export default class Messages extends Component {
  // const records = this.props.records;
  render() {
    // const record = ;
    return (
      <DataList
        records={JSON.parse('{"books":"[]"}')}
        record={"book"}
        firstName={"title:''"}
        lastName={"author:''"}
        email={"title:''"}
        msg={"author:''"}
      />
    );
  }
  // render() {
  //   const { newMessageData, editMessageData, noDataFound, messages } =
  //     this.state;
  //   let messagesDetails = [];
  //   if (messages.length) {
  //     messagesDetails = messages.map((message) => {
  //       return (
  //         <tr key={message.id}>
  //           <td>{message.id}</td>
  //           <td>{message.firstName}</td>
  //           <td>{message.lastName}</td>
  //           <td>{message.email}</td>
  //           <td className="textareaFont">{message.msg}</td>
  //           <td className="actions">
  //             <Button
  //               // color="success"
  //               // color="success"
  //               className="btn btn-success"
  //               size="sm"
  //               onClick={() =>
  //                 this.editMessage(
  //                   message.id,
  //                   message.firstName,
  //                   message.lastName,
  //                   message.email,
  //                   message.msg
  //                 )
  //               }>
  //               Edit
  //             </Button>
  //             <Button
  //               className=" btn btn-danger"
  //               onClick={() => this.deleteMessage(message.id)}>
  //               Delete
  //             </Button>
  //           </td>
  //         </tr>
  //       );
  //     });
  //   }

  //   if (this.state.isLoading) {
  //     return (
  //       <div className="spinner-border text-center" role="status">
  //         {" "}
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="tableContainer">
  //       <div className="tableTitle">
  //         <h4>Messages Table</h4>
  //       </div>

  //       <AddMessage
  //         toggleNewMessageModal={this.toggleNewMessageModal}
  //         newMessageModal={this.state.newMessageModal}
  //         onChangeAddMessageHandler={this.onChangeAddMessageHandler}
  //         addMessage={this.addMessage}
  //         newMessageData={newMessageData}
  //       />

  //       <EditMessage
  //         toggleEditMessageModal={this.toggleEditMessageModal}
  //         editMessageModal={this.state.editMessageModal}
  //         onChangeEditMessageHandler={this.onChangeEditMessageHandler}
  //         editMessage={this.editMessage}
  //         editMessageData={editMessageData}
  //         updateMessage={this.updateMessage}
  //       />
  //       <Table>
  //         <thead>
  //           <tr>
  //             <th>#</th>
  //             <th>First Name</th>
  //             <th>Last Name</th>
  //             {/* <th>Full Name</th> */}
  //             <th>Email</th>
  //             <th className="textarea">Message</th>
  //             <th className="actions">Actions</th>
  //           </tr>
  //         </thead>
  //         {messages.length === 0 ? (
  //           <tbody>{noDataFound}</tbody>
  //         ) : (
  //           <tbody>{messagesDetails}</tbody>
  //         )}
  //       </Table>
  //     </div>
  //   );
  // }
}
