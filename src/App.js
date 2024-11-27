import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/register" style={{ margin: "0 10px" }}>Register</Link>
        <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
