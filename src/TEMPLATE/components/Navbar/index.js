import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
} from "./style";

export const Navbar = () => {
  return (
    <NavbarSection>
      {/* <Router> */}
      <Logo>
        <LogoText>Ultra Profile</LogoText>
      </Logo>
      {/* <Input> </Input> */}
      {/* <Label for={Input}></Label> */}
      <UlList>
        <ListItem>
          <Anchor to="/">Home</Anchor>
        </ListItem>
        <ListItem>
          <Anchor to="/Work">Work</Anchor>
        </ListItem>
        <ListItem>
          <Anchor to="/portfolio">Portfolio</Anchor>
        </ListItem>
        <ListItem>
          <Anchor to="#">Resume</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="#">About</Anchor>
        </ListItem>
        <ListItem>
          <Anchor to="/portfolio">Contact</Anchor>
        </ListItem>
      </UlList>
    </NavbarSection>
  );
};
