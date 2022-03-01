import React, { Component } from "react";

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.editData = this.editData.bind(this);
    this.editDataSubmit = this.editDataSubmit.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }
  deleteData() {
    const { id } = this.props.data;
    this.props.deleteData(id);
  }
  editData() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit,
    }));
  }
  editDataSubmit() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit,
    }));
    this.props.editDataSubmit(
      this.props.data.id,
      this.nameInput.value,
      this.gradeInput.value,
      this.schoolInput.value
    );
  }
  render() {
    const { name, grade, school } = this.props.data;
    return this.state.isEdit === true ? (
      <tr className="bg-warning" key={this.props.index}>
        <td>
          <input
            ref={(nameInput) => (this.nameInput = nameInput)}
            defaultValue={name}
          />
        </td>
        <td>
          <input
            defaultValue={grade}
            ref={(gradeInput) => (this.gradeInput = gradeInput)}
          />
        </td>
        <td>
          <input
            ref={(schoolInput) => (this.schoolInput = schoolInput)}
            defaultValue={school}
          />
        </td>
        <td>
          <i className="far fa-save" onClick={this.editDataSubmit}></i>
        </td>
        <td>
          <i className="fas fa-trash"></i>
        </td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td>{name}</td>
        <td>{grade}</td>
        <td>{school}</td>
        <td>
          <i className="far fa-edit" onClick={this.editData}></i>
        </td>
        <td>
          <i className="fas fa-trash" onClick={this.deleteData}></i>
        </td>
      </tr>
    );
  }
}
