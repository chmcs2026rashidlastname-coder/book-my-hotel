import { Eye, Pencil, Trash2, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HotelCard({ hotel, setSelectedId, formatDateTime }) {
  const navigate = useNavigate();

  return (
    <div
      className="card bg-base-100 shadow-xl hover:shadow-2xl 
                 hover:-translate-y-3 transition-all duration-500 
                 rounded-3xl"
    >
      {/* IMAGE */}
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
        {/* TITLE + CATEGORY */}
        <div className="flex justify-between items-center">
          <h2 className="card-title text-lg">
            {hotel.title}
          </h2>
          <div className="badge badge-primary badge-outline">
            {hotel.category}
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-base-content/70 line-clamp-2">
          {hotel.description}
        </p>

        {/* PRICE + LOCATION */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-primary">
            ₹ {hotel.price}
          </span>

          <span className="flex items-center gap-1 text-sm">
            <MapPin size={14} />
            {hotel.location}
          </span>
        </div>

        {/* DATE INFO */}
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

        {/* ACTION BUTTONS WITH TOOLTIP */}
        <div className="flex items-center gap-5 mt-6">

          {/* VIEW */}
          <div className="tooltip tooltip-top z-50" data-tip="View">
            <button
              className="btn btn-sm btn-info btn-outline rounded-full p-2"
              onClick={() => navigate(`/hotel/${hotel._id}`)}
            >
              <Eye size={18} />
            </button>
          </div>

          {/* EDIT */}
          <div className="tooltip tooltip-top z-50" data-tip="Edit">
            <button
              className="btn btn-sm btn-success btn-outline rounded-full p-2"
              onClick={() => navigate(`/edit/${hotel._id}`)}
            >
              <Pencil size={18} />
            </button>
          </div>

          {/* DELETE */}
          <div className="tooltip tooltip-top z-50" data-tip="Delete">
            <button
              className="btn btn-sm btn-error btn-outline rounded-full p-2"
              onClick={() => setSelectedId(hotel._id)}
            >
              <Trash2 size={18} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}