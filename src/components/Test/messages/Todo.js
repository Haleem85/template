import React from "react";
import EditableBase from "./EditableBase";
class EditableText extends React.Component {
  render() {
    return <span onClick={this.props.startEditing}>{this.props.value}</span>;
  }
} // This is the important line: We pass our EditableText component
// into our EditableBase HOC before the export.
export default EditableBase(EditableText);
