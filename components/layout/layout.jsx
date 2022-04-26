import { Fragment } from "react";

import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation /> <main> {props.children} </main>{" "}
    </div>
  );
}

export default Layout;
