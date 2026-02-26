import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-hot-toast";
import HotelCard from "../components/HotelCard";
import DeleteModal from "../components/DeleteModal";
import {
  Eye,
  Pencil,
  Trash2,
  MapPin,
  Hotel,
} from "lucide-react";

export default function Home() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const navigate = useNavigate();

  // ✅ Debounced fetch (prevents API spam)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchHotels();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search, location, category]);

  const fetchHotels = async () => {
    try {
      setLoading(true);
      const res = await api.get(
        `/hotels?search=${search}&location=${location}&category=${category}`
      );
      setHotels(res.data);
    } catch {
      toast.error("Failed to load hotels ❌");
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-base-200">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-primary/20 via-base-200 to-primary/10 pt-28 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Hotel size={42} className="text-primary" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary">
              Book My Hotel
            </h1>
          </div>

          <p className="text-base md:text-lg text-base-content/70">
            Discover comfort, luxury and unforgettable stays.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="bg-base-100/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Search hotels..."
              className="input input-bordered w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <input
              type="text"
              placeholder="Location"
              className="input input-bordered w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <select
              className="select select-bordered w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Luxury">Luxury</option>
              <option value="Budget">Budget</option>
              <option value="Resort">Resort</option>
              <option value="Business">Business</option>
              <option value="Hostel">Hostel</option>
            </select>

          </div>
        </div>
      </div>

      {/* HOTEL GRID */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">

          {loading && (
            <div className="flex justify-center mt-12">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          )}

          {!loading && (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

              {hotels.length === 0 && (
                <p className="text-center col-span-full text-base-content/60">
                  No hotels found
                </p>
              )}

              {hotels.map((hotel) => (
                <HotelCard
  key={hotel._id}
  hotel={hotel}
  setSelectedId={setSelectedId}
  formatDateTime={formatDateTime}
/>
              ))}

            </div>
          )}

        </div>
      </div>

      {/* DELETE MODAL */}
      <DeleteModal
  selectedId={selectedId}
  setSelectedId={setSelectedId}
  fetchHotels={fetchHotels}
/>
              
            

          
    </div>
  );
}