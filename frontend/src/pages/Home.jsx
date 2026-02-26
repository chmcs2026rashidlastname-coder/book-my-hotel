import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-hot-toast";
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
                <div
                  key={hotel._id}
                  className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 rounded-3xl"
                >
                  <figure
                    className="overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/hotel/${hotel._id}`)}
                  >
                    <img
                      src={
                        hotel.images?.[0] ||
                        "https://images.unsplash.com/photo-1566073771259-6a8506099945"
                      }
                      alt="hotel"
                      className="w-full aspect-[4/3] object-cover 
                                 hover:scale-110 transition duration-700"
                    />
                  </figure>

                  <div className="card-body">

                    <div className="flex justify-between items-center">
                      <h2 className="card-title text-lg">
                        {hotel.title}
                      </h2>
                      <div className="badge badge-primary badge-outline">
                        {hotel.category}
                      </div>
                    </div>

                    <p className="text-sm text-base-content/70 line-clamp-2">
                      {hotel.description}
                    </p>

                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xl font-bold text-primary">
                        ₹ {hotel.price}
                      </span>

                      <span className="flex items-center gap-1 text-sm">
                        <MapPin size={14} />
                        {hotel.location}
                      </span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-base-300 text-xs">

                      <div className="flex justify-between items-center mb-1">
                        <span className="text-base-content/70">
                          📅 Created
                        </span>
                        <span className="font-medium text-base-content/80">
                          {formatDateTime(hotel.createdAt)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-base-content/70">
                          🔄 Updated
                        </span>
                        <span className="font-medium text-base-content/80">
                          {formatDateTime(hotel.updatedAt)}
                        </span>
                      </div>

                    </div>

                    {/* ✅ CLEAN TOOLTIP BUTTONS */}
                    <div className="flex items-center gap-5 mt-6">

                      <div className="tooltip tooltip-top" data-tip="View">
                        <button
                          aria-label="View Hotel"
                          className="btn btn-sm btn-info btn-outline rounded-full p-2"
                          onClick={() => navigate(`/hotel/${hotel._id}`)}
                        >
                          <Eye size={18} />
                        </button>
                      </div>

                      <div className="tooltip tooltip-top" data-tip="Edit">
                        <button
                          aria-label="Edit Hotel"
                          className="btn btn-sm btn-success btn-outline rounded-full p-2"
                          onClick={() => navigate(`/edit/${hotel._id}`)}
                        >
                          <Pencil size={18} />
                        </button>
                      </div>

                      <div className="tooltip tooltip-top" data-tip="Delete">
                        <button
                          aria-label="Delete Hotel"
                          className="btn btn-sm btn-error btn-outline rounded-full p-2"
                          onClick={() => setSelectedId(hotel._id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>
      </div>

      {/* DELETE MODAL */}
      {selectedId && (
        <dialog className="modal modal-open backdrop-blur-sm">
          <div className="modal-box max-w-2xl p-10 text-center rounded-3xl shadow-2xl">

            <div className="flex justify-center mb-6">
              <div className="bg-error/10 p-6 rounded-full">
                <Trash2 size={56} className="text-error" />
              </div>
            </div>

            <h3 className="text-3xl font-extrabold text-error mb-4">
              Delete Hotel?
            </h3>

            <p className="text-lg text-base-content/70 mb-10">
              This action cannot be undone.
              Are you sure you want to permanently remove this hotel?
            </p>

            <div className="flex justify-center gap-8">

              <button
                className="btn btn-outline btn-lg px-8"
                onClick={() => setSelectedId(null)}
              >
                Cancel
              </button>

              <button
                className="btn btn-error btn-lg px-8"
                onClick={async () => {
                  try {
                    await api.delete(`/hotels/${selectedId}`);
                    toast.success("Hotel deleted successfully 🗑️");
                    setSelectedId(null);
                    fetchHotels();
                  } catch {
                    toast.error("Delete failed ❌");
                  }
                }}
              >
                Yes, Delete
              </button>

            </div>

          </div>
        </dialog>
      )}

    </div>
  );
}