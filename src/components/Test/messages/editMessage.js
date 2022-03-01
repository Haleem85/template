/* ------- editStudent.js ----------- */

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

export default class editMessage extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.editMessageModal}
          toggle={this.props.toggleEditMessageModal}>
          <ModalHeader toggle={this.props.toggleEditMessageModal}>
            Update Message
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                className="input"
                id="firstName"
                name="firstName"
                value={this.props.editMessageData.firstName}
                onChange={this.props.onChangeEditMessageHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                className="input"
                id="lastName"
                name="lastName"
                value={this.props.editMessageData.lastName}
                onChange={this.props.onChangeEditMessageHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className="input"
                id="email"
                name="email"
                value={this.props.editMessageData.email}
                onChange={this.props.onChangeEditMessageHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="msg">Message</Label>
              <Input
                type="textarea"
                className="textarea"
                id="msg"
                name="msg"
                value={this.props.editMessageData.msg}
                onChange={this.props.onChangeEditMessageHandler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.updateMessage}>
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditMessageModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
