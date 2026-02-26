import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddHotel from "./pages/AddHotel";
import EditHotel from "./pages/EditHotel";
import HotelDetails from "./pages/HotelDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-24 px-6 bg-base-200 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddHotel />} />
          <Route path="/edit/:id" element={<EditHotel />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}