// * ----- addrecords.js -----*/
import React, { Component } from "react";
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

export default class addRecord extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="float-right"
          color="primary"
          onClick={this.props.toggleNewRecordModal}>
          Add Record
        </Button>
        <Modal
          isOpen={this.props.newRecordModal}
          toggle={this.props.toggleNewRecordModal}>
          <ModalHeader toggle={this.props.toggleNewRecordModal}>
            Add new record
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                className="input"
                id="firstName"
                name="firstName"
                value={this.props.newRecordData.var1}
                onChange={this.props.onChangeAddRecordHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                className="input"
                id="lastName"
                name="lastName"
                value={this.props.newRecordData.var2}
                onChange={this.props.onChangeAddRecordHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">email</Label>
              <Input
                className="input"
                id="email"
                name="email"
                value={this.props.newRecordData.var3}
                onChange={this.props.onChangeAddRecordHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="msg">Record</Label>
              <Input
                type="textarea"
                className="textarea"
                id="msg"
                name="msg"
                value={this.props.newRecordData.var4}
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
