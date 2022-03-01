import React, { PropTypes } from "react";
// import React from "react";
import { Table, Button } from "reactstrap";
import apiClient from "./Services/api";
import AddRecord from "./addRecord";
import EditRecord from "./editRecord";
import "bootstrap/dist/css/bootstrap.css";

// const tableInitiator = (
//   rowDetails,
//   noDataFound = "",
//   allRecordsName = "messages",
//   singleRecordName = "message"
// ) => {
//   return (
//     <DataTable
//       rowDetails={rowDetails}
//       noDataFound
//       allRecordsName
//       singleRecordName
//     />
//   );
// };

// function DataTable(props) {
//   const rowDetails = props.rowDetails;
//   const noDataFound = "";
//   //   // let records = "";
//   const allRecordsName = allRecordsName;
//   const singleRecordName = singleRecordName;
//   // const newRecordData =
//   // const dataList = allRecordsName;
//   // const columns = this.setState({});
//   // const newRecordData = props.newRecordData;
//   // this.setState({ allRecordsName, newRecordData });
//   //  {allRecordsName, newRecordData, col1, col2, col3, col4}
//   // let tableBody = "";
//   return (
//     <Table>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           {/* <th>Full Name</th> */}
//           <th>Email</th>
//           <th className="textarea">Message</th>
//           <th className="actions">Actions</th>
//         </tr>
//       </thead>
//       {allRecordsName.length === 0 ? (
//         <tbody>{noDataFound}</tbody>
//       ) : (
//         <tbody>{rowDetails}</tbody>
//       )}
//     </Table>
//   );
// }
// const tableHeaders = (className = "headers", col1, col2, col3, col4) => {
//   <tr className="headers" key={singleRecordName.id}>
//     <td>{singleRecordName.id}</td>
//     <td>{singleRecordName.col1}</td>
//     <td>{singleRecordName.col2}</td>
//     <td>{singleRecordName.col3}</td>
//     <td className="textareaFont">{singleRecordName.col4}</td>
//     <td className="actions">
//       <Button
//         // color="success"
//         // color="success"
//         className="btn btn-success"
//         size="sm"
//         onClick={() =>
//           this.editRecord(
//             singleRecordName.id,
//             singleRecordName.col1,
//             singleRecordName.col2e,
//             singleRecordName.col3,
//             singleRecordName.col4
//           )
//         }>
//         Edit
//       </Button>
//       <Button
//         className=" btn btn-danger"
//         onClick={() => this.deleteMessage(singleRecordName.id)}>
//         Delete
//       </Button>
//     </td>
//   </tr>;
// };
class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecordsName: [],
      singleRecordName: "",
      newRecordData: {
        col1: "",
        col2: "",
        col3: "",
        col4: "",
      },
      isLoading: false,
      newRecordModal: false,
      editRecordData: {
        id: "",
        col1: this.props.col1,
        col2: this.props.col2,
        col3: this.props.col3,
        col4: this.props.col4,
        editRecordModal: false,
        noDataFound: "",
      },
      // col1: this.col1,

      title1: this.props.title1,
      title2: this.props.title2,
      title3: this.props.title3,
      title4: this.props.title4,

      // col2: this.col2,
      // col3: this.col3,
      // col4: this.col4,
    };
  }
  componentDidMount() {
    // const { col1, col2, col3, col4 } = this.props;
    this.getRecords();
  }

  getRecords() {
    apiClient.get("/api/message").then((response) => {
      if (response.status === 200) {
        this.setState({
          allRecordsName: response.data.data ? response.data.data : [],
        });
      }
      if (
        response.data.status === "failed" &&
        response.data.success === false
      ) {
        this.setState({
          noDataFound: response.data.singleRecordName,
        });
      }
    });
  }

  toggleNewRecordModal = () => {
    this.setState({
      newRecordModal: !this.state.newRecordModal,
    });
  };
  onChangeAddRecordHandler = (e) => {
    let { newRecordData } = this.state;
    newRecordData[e.target.name] = e.target.value;
    this.setState({ newRecordData });
  };
  addRecord = () => {
    apiClient
      .post("/api/create-message", this.state.newRecordData)
      .then((response) => {
        const { records } = this.state;
        const newRecords = [...records];
        newRecords.push(response.data);
        this.setState(
          {
            records: newRecords,
            newRecordModal: false,
            newRecordData: {
              id: "",
              col1: "",
              col2: "",
              col3: "",
              col4: "",
            },
          },
          () => this.getRecords()
        );
      });
  };
  toggleEditRecordModal = () => {
    this.setState({
      editRecordModal: !this.state.editRecordModal,
    });
  };

  onChangeEditRecordHandler = (e) => {
    let { editRecordData } = this.state;
    editRecordData[e.target.name] = e.target.value;
    this.setState({ editRecordData });
  };

  editRecord = (id, col1, col2, col3, col4) => {
    this.setState({
      editRecordData: {
        id,
        col1,
        col2,
        col3,
        col4,
      },
      editRecordModal: !this.state.editRecordModal,
    });
    const { title1, title2, title3, title4 } = this.props;
  };

  updateRecord = () => {
    let { id, col1, col2, col3, col4 } = this.state.editRecordData;
    this.setState({
      isLoading: true,
    });
    apiClient
      .post("/api/create-message", {
        col1,
        col2,
        col3,
        col4,
        id,
      })
      .then((response) => {
        this.getRecords();
        this.setState({
          editRecordModal: false,
          editRecordData: { col1, col2, col3, col4 },
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
        this.getRecords();
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
      });
  };
  render() {
    const {
      newRecordData,
      editRecordData,
      noDataFound,
      allRecordsName,
      singleRecordName,
      title1,
      title2,
      title3,
      title4,
    } = this.state;
    let recordsDetails = [];
    if (allRecordsName.length) {
      recordsDetails = allRecordsName.map((singleRecordName) => {
        return (
          <tr key={singleRecordName.id}>
            <td>{singleRecordName.id}</td>
            <td>{singleRecordName.firstName}</td>
            <td>{singleRecordName.lastName}</td>
            <td>{singleRecordName.email}</td>
            <td className="textareaFont">{singleRecordName.msg}</td>
            <td className="actions">
              <Button
                // color="success"
                // color="success"
                className="btn btn-success"
                size="sm"
                onClick={() =>
                  this.editRecord(
                    singleRecordName.id,
                    singleRecordName.col1,
                    singleRecordName.col2e,
                    singleRecordName.col3,
                    singleRecordName.col4
                  )
                }>
                Edit
              </Button>
              <Button
                className=" btn btn-danger"
                onClick={() => this.deleteMessage(singleRecordName.id)}>
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

        <AddRecord
          toggleNewRecordModal={this.toggleNewRecordModal}
          newRecordModal={this.state.newRecordModal}
          onChangeAddRecordHandler={this.onChangeAddRecordHandler}
          addRecord={this.addRecord}
          newRecordData={newRecordData}
        />

        <EditRecord
          toggleEditRecordModal={this.toggleEditRecordModal}
          editRecordModal={this.state.editRecordModal}
          onChangeEditRecordHandler={this.onChangeEditRecordHandler}
          editRecord={this.editRecord}
          editRecordData={editRecordData}
          updateRecord={this.updateRecord}
        />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>{this.props.title1}</th>
              <th>{this.props.title2}</th>
              {/* <th>Full Name</th> */}
              <th>{this.props.title3}</th>
              <th className="textarea">{this.props.title4}</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          {allRecordsName.length === 0 ? (
            <tbody>{noDataFound}</tbody>
          ) : (
            <tbody>{recordsDetails}</tbody>
          )}
        </Table>
        {/* <DataTable
          // rowDetails={recordsDetails}
          allRecordsName="messages"
          singleRecordName="message"
        /> */}
        {/* <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th> */}
        {/* <th>Full Name</th> */}
        {/* <th>Email</th>
               <th className="textarea">Message</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          {records.length === 0 ? (
            <tbody>{noDataFound}</tbody>
          ) : (
            <tbody>{recordsDetails}</tbody>
          )}
        </Table> */}
      </div>
    );
  }
}

export const TableInstance = () => {
  return (
    <TableContainer
      allRecordsName="messages"
      singleRecordName="message"
      col1="firstName"
      col2="lastName"
      col3="email"
      col4="msg"
      title1="First Name"
      title2="Last Name"
      title3="Email"
      title4="Message"
    />
  );
};
