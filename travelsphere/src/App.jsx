import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Search from "./Search";   
import Weather from "./Weather";
import BudgetPlanner from "./BudgetPlanner";
import BudgetResult from "./BudgetResult";
import MyJourneys from "./MyJourneys";
import About from "./About";
import Description from "./Description";
import Booking from "./Booking";
import AdminDashboard from "./AdminDashboard";
import AdminPackages from "./AdminPackages";
import AddPackage from "./AddPackage";
import AdminBookings from "./AdminBookings";
import AdminAbout from "./AdminAbout";
import Profile from "./Profile";
import EditProfile from "./EditProfile";




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

        <Route path="/journeys" element={<MyJourneys />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/description/:id" element={<Description />} />

        <Route path="/booking/:id" element={<Booking />} />
        
        <Route path="/admin" element={<AdminDashboard/>} />

        <Route path="/admin/packages" element={<AdminPackages />} />

        <Route path="/admin/add" element={<AddPackage />} />

        <Route path="/admin/bookings" element={<AdminBookings />} />

        <Route path="/admin/about" element={<AdminAbout />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;

/* This is App.jsx */