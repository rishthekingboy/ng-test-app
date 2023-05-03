import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/features" element={<h2>Features Page <a href="/details">details</a></h2>} />
      <Route path="/details" element={<h2>Details Page <a href="/details/profile">profile</a></h2>} />
      <Route path="/details/profile" element={<h2>Profile Page <a href="/">Home</a></h2>} />
      <Route
        path="/"
        element={
          <h2>
            Home Page <a href="/features">features</a>
          </h2>
        }
      />
    </Routes>
  );
};

export default App;
