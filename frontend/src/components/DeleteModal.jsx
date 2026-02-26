import { Trash2 } from "lucide-react";
import api from "../services/api";
import { toast } from "react-hot-toast";

export default function DeleteModal({
  selectedId,
  setSelectedId,
  fetchHotels,
}) {
  if (!selectedId) return null;

  return (
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
  );
}