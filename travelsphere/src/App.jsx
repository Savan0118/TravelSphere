import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Search from "./Search";   // ✅ ADD THIS
import PackageDetails from "./PackageDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />

        <Route path="/search" element={<Search />} />   {/* ✅ ADD THIS */}

        <Route path="/package/:id" element={<PackageDetails />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;

/* This is App.jsx */