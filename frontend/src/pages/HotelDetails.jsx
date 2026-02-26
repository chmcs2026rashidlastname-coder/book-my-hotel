import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-hot-toast";
import { MapPin, Pencil, Trash2, Home } from "lucide-react";

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHotel();
  }, [id]);

  const fetchHotel = async () => {
    try {
      const res = await api.get(`/hotels/${id}`);
      setHotel(res.data);
    } catch {
      toast.error("Failed to load hotel ❌");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!hotel) return null;

  return (
    <div className="min-h-screen bg-base-200 pt-28 pb-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HERO IMAGE */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img
            src={
              hotel.images?.[0] ||
              "https://images.unsplash.com/photo-1566073771259-6a8506099945"
            }
            alt="hotel"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {hotel.title}
            </h1>
            <div className="flex items-center gap-2 mt-3 text-lg">
              <MapPin size={18} />
              {hotel.location}
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT SIDE - DETAILS */}
          <div className="md:col-span-2 space-y-6">

            <div>
              <span className="badge badge-primary badge-lg mb-4">
                {hotel.category}
              </span>

              <p className="text-lg leading-relaxed text-base-content/80">
                {hotel.description}
              </p>
            </div>

          </div>

          {/* RIGHT SIDE - PRICE CARD */}
          <div>
            <div className="card bg-base-100 shadow-xl p-8 rounded-3xl">

              <div className="text-3xl font-extrabold text-primary mb-4">
                ₹ {hotel.price}
                <span className="text-base font-normal text-base-content/60">
                  {" "} / night
                </span>
              </div>

              <div className="flex flex-col gap-4 mt-6">

                <button
                  className="btn btn-success btn-lg"
                  onClick={() => navigate(`/edit/${hotel._id}`)}
                >
                  <Pencil size={20} />
                  Edit Hotel
                </button>

                <button
                  className="btn btn-outline btn-lg flex items-center gap-2"
                  onClick={() => navigate("/")}
                >
                  <Home size={20} />
                  Back to Home
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}