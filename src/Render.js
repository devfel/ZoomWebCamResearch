import App from "./App";
import AppSmallCam from "./AppSmallCam";
import AppBigCam from "./AppBigCam";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Render() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/small" element={<AppSmallCam/>}/>
        <Route path="/big" element={<AppBigCam/>}/>
      </Routes>
    </Router>
  );
}

export default Render;
