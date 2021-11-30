import App from "./App";
import AppSmallCam from "./AppSmallCam";
import AppBigCam from "./AppBigCam";
import {HashRouter as Router, Route, Routes, Link } from "react-router-dom";

function Render() {
  return (
    <Router>
      <Routes>
        <Route path="/ZoomWebCamResearch/" element={<App/>}/>
        <Route path="/ZoomWebCamResearch/small" element={<AppSmallCam/>}/>
        <Route path="/ZoomWebCamResearch/big" element={<AppBigCam/>}/>
      </Routes>
    </Router>
  );
}

export default Render;