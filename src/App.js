import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MainRoutes } from "./Constants/routes";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {MainRoutes.map(({ Component, path }) => (
            <Route element={<Component />} path={path} key={path} />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
