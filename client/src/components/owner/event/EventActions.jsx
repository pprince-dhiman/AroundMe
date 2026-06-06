// components/events/EventActions.jsx

// NEW:
// Sticky action sidebar.
// Update/Delete handlers will be connected later.

import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

export default function EventActions({ onUpdate }) {
  const handleUpdate = () => {
    // console.log("Update clicked");
    onUpdate();
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  return (
    <div className="sticky top-24 h-fit">
        <button
          onClick={handleUpdate}
          className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-black px-4 py-3 text-white"
        >
          <FaEdit />
          Update Event
        </button>

        <button
          onClick={handleDelete}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-white"
        >
          <FaTrash />
          Delete Event
        </button>
    </div>
  );
}