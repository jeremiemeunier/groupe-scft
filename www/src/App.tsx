import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@infusedui/core/dist/infusedui.style.css";
import "./App.scss";
import ScrollProvider from "@context/ScrollContext";
import GlobalLayout from "@layout/GlobalLayout";

import Home from "@pages/Home";
import PageError404 from "@pages/error/PageError404";
import PageChantier from "@pages/Chantiers";
import PageChantierArticle from "@pages/ChantierArticle";
import PageSocietyLargeProject from "@pages/SocietyLargeProject";

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
            <Route path="/chantiers" element={<PageChantier />} />
            <Route
              path="/chantiers/:chantier"
              element={<PageChantierArticle />}
            />
            <Route
              path="/societe/societe-grands-projets"
              element={<PageSocietyLargeProject />}
            />
            <Route path="*" element={<PageError404 />} />
          </Routes>
        </GlobalLayout>
      </div>
    </ScrollProvider>
  );
};
