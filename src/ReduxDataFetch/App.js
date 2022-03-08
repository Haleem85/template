// import React from "react";

// class App extends React.Component {
//   state = {};
//   render() {
//     return (
//       <StyledApp>
//         <aside>
//           <Clap />
//         </aside>
//         <main>
//           <Article />
//         </main>
//       </StyledApp>
//     );
//   }
// }
// export default App;
import React from "react";
import NewComp from "./NewCamp";
import "./App.css";

class App extends React.Component {
  styles = {
    fontStyle: "bold",

    color: "teal",
  };

  render() {
    return (
      <div className="App">
        <h1 style={this.styles}> Welcome </h1>

        <NewComp />
      </div>
    );
  }
}

export default App;
