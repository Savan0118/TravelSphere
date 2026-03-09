import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Search from "./Search";   
import Weather from "./Weather";
import BudgetPlanner from "./BudgetPlanner";
import BudgetResult from "./BudgetResult";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />

        <Route path="/search" element={<Search />} />   

        <Route path="/weather" element={<Weather />} />

        <Route path="/budget" element={<BudgetPlanner />} />

        <Route path="/budget-result" element={<BudgetResult />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;

/* This is App.jsx */