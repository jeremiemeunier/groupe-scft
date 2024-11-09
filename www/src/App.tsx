import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@infusedui/core/dist/infusedui.style.css";
import "./App.scss";

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
  const { me } = useContext(SessionContext);

  return (
    <ScrollProvider>
      <div>
        <GlobalLayout>
          <Header session={me} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:article" element={<Article />} />
            {/* <Route path="*" element={<Error404 />} /> */}
          </Routes>
          <Footer />
        </GlobalLayout>
      </div>
    </ScrollProvider>
  );
};

export default App;
