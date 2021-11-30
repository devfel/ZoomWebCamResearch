import React from "react";
import App from "./App";
import AppSmallCam from "./AppSmallCam";
import AppBigCam from "./AppBigCam";
const routes = {
  "/": () => <App />,
  "/small": () => <AppSmallCam />,
  "/big": () => <AppBigCam />
};
export default routes;