import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-hot-toast";
import { Save } from "lucide-react";

export default function EditHotel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    category: "",
    images: ""
  });

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await api.get(`/hotels/${id}`);
        const hotel = res.data;

        setForm({
          ...hotel,
          images: hotel.images?.join(",")
        });
      } catch (err) {
        toast.error("Failed to load hotel ❌");
      }
    };

    fetchHotel();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/hotels/${id}`, {
        ...form,
        images: form.images.split(",")
      });

      toast.success("Hotel updated successfully ✏️");
      navigate("/");
    } catch (err) {
      toast.error("Failed to update hotel ❌");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 
                    bg-gradient-to-br 
                    from-base-200 via-base-300 to-base-200 
                    flex justify-center items-center px-8">

      <div className="card w-full max-w-6xl 
                      bg-base-100 shadow-2xl 
                      rounded-3xl p-16">

        <h2 className="text-5xl font-extrabold 
                       text-primary text-center mb-14">
          Edit Hotel
        </h2>

        <form onSubmit={handleSubmit} 
              className="grid md:grid-cols-2 gap-10">

          <input
            name="title"
            value={form.title}
            className="input input-bordered input-lg w-full text-lg"
            onChange={handleChange}
            required
          />

          <input
            name="price"
            type="number"
            value={form.price}
            className="input input-bordered input-lg w-full text-lg"
            onChange={handleChange}
            required
          />

          <input
            name="location"
            value={form.location}
            className="input input-bordered input-lg w-full text-lg"
            onChange={handleChange}
            required
          />

          <select
            name="category"
            value={form.category}
            className="select select-bordered select-lg w-full text-lg"
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Luxury">Luxury</option>
            <option value="Budget">Budget</option>
            <option value="Resort">Resort</option>
            <option value="Business">Business</option>
            <option value="Hostel">Hostel</option>
          </select>

          <textarea
            name="description"
            value={form.description}
            className="textarea textarea-bordered textarea-lg md:col-span-2 w-full text-lg"
            onChange={handleChange}
            required
          />

          <input
            name="images"
            value={form.images}
            className="input input-bordered input-lg md:col-span-2 w-full text-lg"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-success btn-lg md:col-span-2 
                       text-xl font-semibold 
                       hover:scale-105 transition duration-300"
          >
            <Save size={24} />
            Update Hotel
          </button>

        </form>
      </div>
    </div>
  );
}