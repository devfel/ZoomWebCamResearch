import App from "./App";
import AppSmallCam from "./AppSmallCam";
import AppBigCam from "./AppBigCam";
import {HashRouter as Router, Route, Routes} from "react-router-dom";

function Render() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/ZoomWebCamResearch" element={<App/>}/>
        <Route exact path="/small" element={<AppSmallCam/>}/>
        <Route exact path="/ZoomWebCamResearch/big" element={<AppBigCam/>}/>
      </Routes>
    </Router>
  );
}

export default Render;