import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-hot-toast";
import { Save } from "lucide-react";

export default function AddHotel() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    category: "",
    images: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/hotels", {
        ...form,
        images: form.images
          ? form.images.split(",").map((url) => url.trim())
          : []
      });

      toast.success("Hotel added successfully 🎉");
      navigate("/");
    } catch (err) {
      toast.error("Failed to add hotel ❌");
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
          Add New Hotel
        </h2>

        <form onSubmit={handleSubmit} 
              className="grid md:grid-cols-2 gap-10">

          <input
            name="title"
            value={form.title}
            placeholder="Hotel Name"
            className="input input-bordered input-lg w-full text-lg"
            onChange={handleChange}
            required
          />

          <input
            name="price"
            type="number"
            value={form.price}
            placeholder="Price"
            className="input input-bordered input-lg w-full text-lg"
            onChange={handleChange}
            required
          />

          <input
            name="location"
            value={form.location}
            placeholder="Location"
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
            placeholder="Description"
            className="textarea textarea-bordered textarea-lg md:col-span-2 w-full text-lg"
            onChange={handleChange}
            required
          />

          <input
            name="images"
            value={form.images}
            placeholder="Image URLs (comma separated)"
            className="input input-bordered input-lg md:col-span-2 w-full text-lg"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-primary btn-lg md:col-span-2 
                       text-xl font-semibold 
                       hover:scale-105 transition duration-300 gap-2"
          >
            <Save size={24} />
            Add Hotel
          </button>

        </form>
      </div>
    </div>
  );
}