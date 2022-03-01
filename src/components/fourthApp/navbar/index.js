// Import React
import React, { Component } from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./style.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import other React Component
// import CreateStudent from "./create-student.component";
// import EditStudent from "./edit-student.component";
// import StudentList from "./student-list.component";

// App Component

export class LinkNav extends Component {
  constructor() {
    super();
    this.state = {
      activeNavIndex: 1,
    };
  }
  render() {
    const { children } = this.props;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="justify-content-end">
                  <Nav>
                    {/* <Navbar.Brand> */}
                    {children.map((el, i) => (
                      <Link
                        key={i}
                        className="nav-link"
                        // className={
                        //   this.state.activeTabIndex === el.props.tab
                        //     ? "active link"
                        //     : "Link"
                        // }
                        to={el.props.url}
                        onClick={() =>
                          this.setState({
                            activeNavIndex: parseInt(el.props.url, 5),
                          })
                        }>
                        {el.props.title}{" "}
                      </Link>
                    ))}
                  </Nav>
                </Nav>
              </Container>
            </Navbar>
          </header>
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    {children.map((el, i) => (
                      <Route
                        exact
                        path={el.props.url}
                        component={el.props.component}
                      />
                    ))}
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}
export const LinkNavPane = () => {
  return <div className="nav-link">{this.props.children}</div>;
};

// export const BarContainer = ({ url, title, component, children }) => {
//   // const { children } = this.props;
//       this.state = {
//       activeNavIndex: 0,
//     };
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <Navbar bg="dark" variant="dark">
//             <Container>
//               <Navbar.Brand>
//                 <Link to={url} className="nav-link">
//                   {title}
//                 </Link>
//               </Navbar.Brand>

//               <Nav className="justify-content-end">
//                 <Nav>
//                   {children.map((el, i) => (
//                     <Link
//                       key={i}
//                       className={
//                         this.state.activeNavIndex === el.props.link
//                           ? "active link"
//                           : "link"
//                       }
//                       to={url}
//                       onClick={() =>
//                         this.setState({
//                           activeNavIndex: parseInt(el.props.link, 10),
//                         })
//                       }>
//                       {title}
//                       {""} {el.props.link}{" "}
//                     </Link>
//                   ))}
//                 </Nav>
//                 <Nav>
//                   <Link to={"/"} className="nav-link">
//                     Student List
//                   </Link>
//                 </Nav>{" "}
//               </Nav>
//             </Container>
//           </Navbar>
//         </header>

{
  /* <Container>
  <Row>
    <Col md={12}>
      <div className="wrapper">
        <Switch>
          <Route exact path={url} component={component} />
        </Switch>
      </div>
    </Col>
  </Row>
</Container> */
}
//       </div>
//     </Router>
//   );
// };

// export const Bar = ({ url, title }) => {
//   // const { children } = this.props;
//   // const { url, title } = this.props;

//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <Navbar bg="dark" variant="dark">
//             <Container>
//               <Navbar.Brand>
//                 <Link to={url} className="nav-link">
//                   {title}
//                 </Link>
//               </Navbar.Brand>

//               <Nav className="justify-content-end">
//                 <Nav>
//                   <Link to={url} className="nav-link">
//                     {title}
//                   </Link>
//                 </Nav>

//                 <Nav>
//                   <Link to={"/"} className="nav-link">
//                     Student List
//                   </Link>
//                 </Nav>
//               </Nav>
//             </Container>
//           </Navbar>
//         </header>

//         <Container>
//           <Row>
//             <Col md={12}>
//               <div className="wrapper">
//                 <Switch>
//                   <Route exact path="/" />
//                   <Route path="/create-student" />
//                 </Switch>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </Router>
//   );
// };

// export default Bar;
