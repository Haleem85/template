import React from "react";

// export default class Button extends React.Component {
//   render() {
//     const { onClick, className = "", children } = this.props;
//     return (

//     );
//   }
// }

export const Button = ({ onClick, className = "", children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);
