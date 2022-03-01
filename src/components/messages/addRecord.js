// * ----- addRecords.js -----*/
import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./style.css";

export default class addRecords extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="float-right"
          color="primary"
          onClick={this.props.toggleNewRecordModal}>
          Add Message
        </Button>
        <Modal
          isOpen={this.props.newRecordModal}
          toggle={this.props.toggleNewRecordModal}>
          <ModalHeader toggle={this.props.toggleNewRecordModal}>
            Add new Message
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                className="input"
                id="firstName"
                name="firstName"
                value={this.props.newRecordData.firstName}
                onChange={this.props.onChangeAddRecordHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                className="input"
                id="lastName"
                name="lastName"
                value={this.props.newRecordData.lastName}
                onChange={this.props.onChangeAddRecordHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className="input"
                id="email"
                name="email"
                value={this.props.newRecordData.email}
                onChange={this.props.onChangeAddRecordHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="msg">Message</Label>
              <Input
                type="textarea"
                className="textarea"
                id="msg"
                name="msg"
                value={this.props.newRecordData.msg}
                onChange={this.props.onChangeAddRecordHandler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.addRecord()}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleNewRecordModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
