import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import MyComponent from "./MyComponent";

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: MyComponent,
});
