import { useEffect, useState } from "react";
import { FaTimes, FaUpload } from "react-icons/fa";

export default function UpdateEvent({ isOpen, onClose, event }) {
  const [formData, setFormData] = useState({
    thumbnail: null,
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    registrationDeadline: "",
    maxCapacity: "",
    price: "",
    discount: "",
    meetingLink: "",
    venue: {
      address: "",
      city: "",
      state: "",
      country: "",
    },
  });

  const [thumbnailPreview, setThumbnailPreview] = useState("");

  useEffect(() => {
    if (!event) return;

    setFormData({
      thumbnail: event.thumbnail || null,
      title: event.title || "",
      description: event.description || "",
      startDate: event.startDateTime ? event.startDateTime.slice(0, 16) : "",
      endDate: event.endDateTime ? event.endDateTime.slice(0, 16) : "",
      registrationDeadline: event.registrationDeadline
        ? event.registrationDeadline.slice(0, 16)
        : "",
      maxCapacity: event.maxParticipants || "",
      price: event?.pricing?.amount===0 ? 0 : event?.pricing?.amount || "",
      discount: event?.pricing?.discount===0? 0 : event?.pricing.discount || "",
      meetingLink: event.onlineLink || "",
      venue: {
        address: event?.venue?.address || "",
        city: event?.venue?.city || "",
        state: event?.venue?.state || "",
        country: event?.venue?.country || "",
      },
    });

    setThumbnailPreview(event.thumbnail);
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVenueChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      venue: {
        ...prev.venue,
        [name]: value,
      },
    }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      thumbnail: file,
    }));

    setThumbnailPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // TODO:
    // API Integration Later
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-4">
          <h2 className="text-xl font-bold text-[#333333]">Update Event</h2>

          <button
            onClick={onClose}
            className="rounded-md p-2 transition hover:bg-gray-100"
          >
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          {/* Thumbnail */}
          <div>
            <label className="mb-2 block font-medium">Thumbnail</label>

            <div className="space-y-4">
              {thumbnailPreview && (
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail Preview"
                  className="h-56 w-full rounded-lg object-cover border"
                />
              )}

              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed p-4 hover:bg-gray-50">
                <FaUpload />

                <span>Upload New Thumbnail</span>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleThumbnailChange}
                />
              </label>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="mb-2 block font-medium">Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block font-medium">Description</label>

            <textarea
              rows={6}
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          {/* Dates */}
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block font-medium">Start Date</label>

              <input
                type="datetime-local"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">End Date</label>

              <input
                type="datetime-local"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Registration Deadline
              </label>

              <input
                type="datetime-local"
                name="registrationDeadline"
                value={formData.registrationDeadline}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />
            </div>
          </div>

          {/* Capacity, Price & Discount */}
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block font-medium">Max Capacity</label>

              <input
                type="number"
                name="maxCapacity"
                value={formData.maxCapacity}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Price</label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Discount%</label>

              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />
            </div>
          </div>

          {/* Online Event */}
          {event.mode === "online" && (
            <div>
              <label className="mb-2 block font-medium">Meeting Link</label>

              <input
                type="url"
                name="meetingLink"
                value={formData.meetingLink}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />
            </div>
          )}

          {/* Offline Event */}
          {event.mode === "offline" && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Venue Details</h3>

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.venue.address}
                onChange={handleVenueChange}
                className="w-full rounded-lg border p-3"
              />

              <div className="grid gap-4 md:grid-cols-3">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.venue.city}
                  onChange={handleVenueChange}
                  className="rounded-lg border p-3"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.venue.state}
                  onChange={handleVenueChange}
                  className="rounded-lg border p-3"
                />

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.venue.country}
                  onChange={handleVenueChange}
                  className="rounded-lg border p-3"
                />
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-5 py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-[#054C73] px-5 py-3 text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
