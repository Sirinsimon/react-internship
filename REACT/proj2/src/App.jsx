import "./App.css";
import Home from "./Pages/Home.jsx";
import Error from "./Pages/Error.jsx";
import Login from "./Pages/Login.jsx";
import Profile from "./Pages/profile.jsx";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;