import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarSection = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`;

export const Logo = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

export const Input = styled.input`
  position: absolute;
  top: 13px;
  right: 25px;
  display: none;

  &:checked {
    background: url("images/Navbar/close.png") no-repeat;
    background-size: cover;
  }
`;
// export const Label = styled.label`
//   position: absolute;
//   top: 13px;
//   right: 25px;
//  `;
export const Label = styled.label`
  position: absolute;
  top: 13px;
  right: 25px;
  display: block;
  width: 15px;
  height: 15px;
  background: url("/images/Navbar/open.png") no-repeat;
  background-size: cover;
  padding: 20px;
  cursor: pointer;
`;
export const UlList = styled.ul`
  width: 50%;
  float: left;
  list-style-type: none;
  padding: 0%;
`;
export const ListItem = styled.li`
  color: #222;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;
// export const ListItem = styled.li`
//   display: block;
//   color: #222;
//   text-decoration: none;
//   padding: 10px 15px;
//   font-weight: bold;

//   text-align: center;
// `;
export const Anchor = styled(Link)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: #eb5424;
    background-color: ;
  }
`;

export const Container = styled.div`
  width: 85%;
  margin: auto;
`;
// .navbar input {
//   display: none;
// }

// .navbar label {

// }

// .navbar input:checked ~ .ul-list {
//   display: block;
// }

// .navbar input:checked ~ label {

// }

// .navbar .ul-list {

// }

// .navbar .ul-list .list-item {
//   display: inline-block;
// }

// .navbar .ul-list .list-item a {

// }

// .navbar .ul-list .list-item a:hover {
//   color: #eb5424;
// }
