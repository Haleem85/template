// import BaseNavbar from "../navbar";
import { Tabs, TabPane } from "../../fourthApp/tab";
import Books from "../../Road/Books";
import Main from "../../Road/all";
import Messages from "../DataCrud/Messages";

import { LinkNav, LinkNavPane } from "../../fourthApp/navbar";
import { Bar } from "../BarInstance";
import MouseTracker from "../../Road/MouseTracker/index";
import App from "../App";

const BarInstance = () => {
  return (
    <>
      <Bar
        NavOne="Books"
        NavTwo="Messages"
        linkOne="/books"
        linkTwo="/messages"
        componentOne={Books}
        componentTwo={Messages}
      />
    </>
  );
};
export {
  Messages,
  Tabs,
  TabPane,
  LinkNav,
  LinkNavPane,
  Main,
  Books,
  MouseTracker,
  Bar,
  BarInstance,
};
