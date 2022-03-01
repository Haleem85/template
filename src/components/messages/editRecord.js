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

export default class editRecord extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { col1, col2, col3, col4 } = this.props;
    const { title1, title2, title3, title4 } = this.props;
    return (
      <div>
        <Modal
          isOpen={this.props.editRecordModal}
          toggle={this.props.toggleEditRecordModal}>
          <ModalHeader toggle={this.props.toggleEditRecordModal}>
            Update Message
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                className="input"
                id="firstName"
                name="firstName"
                value={this.props.editRecordData.firstName}
                onChange={this.props.onChangeEditRecordHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                className="input"
                id="lastName"
                name="lastName"
                value={this.props.editRecordData.lastName}
                onChange={this.props.onChangeEditRecordHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className="input"
                id="email"
                name="email"
                value={this.props.editRecordData.email}
                onChange={this.props.onChangeEditRecordHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="msg">Message</Label>
              <Input
                type="textarea"
                className="textarea"
                id="msg"
                name="msg"
                value={this.props.editRecordData.msg}
                onChange={this.props.onChangeEditRecordHandler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.updateRecord}>
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditRecordModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
