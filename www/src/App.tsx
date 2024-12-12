import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@infusedui/core/dist/infusedui.style.css";
import "./App.scss";
import ScrollProvider from "./contexts/ScrollContext";
import GlobalLayout from "@layout/GlobalLayout";
import Home from "@pages/Home";

const App = () => {
  return (
    <Router>
      <div className="teaui root">
        <RouteContainer />
      </div>
    </Router>
  );
};

export default App;

const RouteContainer = () => {
  return (
    <ScrollProvider>
      <div className="teaui body">
        <GlobalLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="*" element={<Error404 />} /> */}
          </Routes>
        </GlobalLayout>
      </div>
    </ScrollProvider>
  );
};
