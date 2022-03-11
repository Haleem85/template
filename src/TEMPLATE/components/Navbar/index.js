import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import "./style.css";
import {
  NavbarSection,
  Logo,
  LogoText,
  Label,
  Input,
  UlList,
  ListItem,
  Anchor,
  Container,
} from "./style";

export const Navbar = () => {
  return (
    <NavbarSection>
      <Router>
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        {/* <Input> </Input> */}
        {/* <Label for={Input}></Label> */}
        <UlList>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem>
            <Link to="/contact">Contact</Link>
          </ListItem>
        </UlList>
      </Router>
    </NavbarSection>
  );
};
