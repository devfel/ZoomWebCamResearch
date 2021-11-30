import React from "react";
import App from "./App";
import AppSmallCam from "./AppSmallCam";
import AppBigCam from "./AppBigCam";
const routes = {
  "/ZoomWebCamResearch/": () => <App />,
  "/ZoomWebCamResearch/small": () => <AppSmallCam />,
  "/ZoomWebCamResearch/big": () => <AppBigCam />
};
export default routes;