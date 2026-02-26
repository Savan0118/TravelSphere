import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Search from "./Search";   // ✅ ADD THIS

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />

        <Route path="/search" element={<Search />} />   {/* ✅ ADD THIS */}

      </Routes>

    </BrowserRouter>

  );

}

export default App;