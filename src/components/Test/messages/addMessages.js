// * ----- addMessages.js -----*/
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

export default class addMessages extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="float-right"
          color="primary"
          onClick={this.props.toggleNewMessageModal}>
          Add Message
        </Button>
        <Modal
          isOpen={this.props.newMessageModal}
          toggle={this.props.toggleNewMessageModal}>
          <ModalHeader toggle={this.props.toggleNewMessageModal}>
            Add new Message
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                className="input"
                id="firstName"
                name="firstName"
                value={this.props.newMessageData.firstName}
                onChange={this.props.onChangeAddMessageHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                className="input"
                id="lastName"
                name="lastName"
                value={this.props.newMessageData.lastName}
                onChange={this.props.onChangeAddMessageHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className="input"
                id="email"
                name="email"
                value={this.props.newMessageData.email}
                onChange={this.props.onChangeAddMessageHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="msg">Message</Label>
              <Input
                type="textarea"
                className="textarea"
                id="msg"
                name="msg"
                value={this.props.newMessageData.msg}
                onChange={this.props.onChangeAddMessageHandler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.addMessage()}>
              Add
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.props.toggleNewMessageModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
