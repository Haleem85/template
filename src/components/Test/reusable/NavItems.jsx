var React = require("react");

class NavItems extends React.Component {
  getInitialState() {
    return { hover: false };
  }
  mouseOver() {
    this.setState({ hover: true });
  }
  mouseOut() {
    this.setState({ hover: false });
  }
  render() {
    var color = "";
    if (this.props.color) color = this.props.color;

    var styles = {
      color: color,
    };
    return (
      <li
        className={this.state.hover ? "active" : ""}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}>
        <a href={this.props.href} style={styles}>
          {this.props.title}
        </a>
      </li>
    );
  }
}

export { NavItems };
