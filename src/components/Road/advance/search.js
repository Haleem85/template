import React from "react";
// class Search extends Component {
//   render() {
//     const { value, onChange, onSubmit, children } = this.props;
//     return (
//       <form onSubmit={onSubmit}>
//         <input type="text" value={value} onChange={onChange} />
//         <button type="submit">{children}</button>
//       </form>
//     );
//   }
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h2>Time:{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export const Search = ({ value, onChange, children }) => (
  <div>
    <h2>
      {" "}
      <Clock />{" "}
    </h2>

    <form>
      {children} <input type="text" value={value} onChange={onChange} />
    </form>
  </div>
);
