import React from "react";

import Redux from "react-redux";
class App extends React.Component {
  constructor(props) {
    super(props);
    // First the Parent creates a state for what will be passed
    this.state = { userStatus: "NOT LOGGED IN" };
    this.setStatus = this.setStatus.bind(this);
  }
  // A method is provided for the child component to update the state of the
  // userStatus
  setStatus(username, password) {
    const newUsers = users;
    newUsers.map((user) => {
      if (user.username == username && user.password === password) {
        this.setState({
          userStatus: "LOGGED IN",
        });
      }
    });
  }

  render() {
    return (
      <div>
        {/* the state is passed to the sibling as a props as is updated whenever */}
        {/* the child component changes the input */}
        <Status status={this.state.userStatus} />
        {/* this method is passed to the child component as a props which it  */}
        {/* uses to change the state of the userStatus */}
        <Login handleSubmit={this.setStatus} />
      </div>
    );
  }
}

const LoginComponent = (state = initialState, action) => {
  switch (action.type) {
    // This reducer handles any action with type "LOGIN"
    case "LOGIN":
      return state.map((user) => {
        if (user.username !== action.username) {
          return user;
        }

        if (user.password == action.password) {
          return {
            ...user,
            login_status: "LOGGED IN",
          };
        }
      });
    default:
      return state;
  }
};

const store = Redux.createStore(LoginComponent);

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Status user={this.props.user.name} />
//         <Login login={this.props.setLoginStatus} />
//       </div>
//     );
//   }
// }

export default App;
