function LocationUnavailable() {
  return (
    <div
      className="flex flex-col items-center justify-center border rounded-lg bg-gray-50 text-center"
      style={{ height: "400px", width: "100%" }}
    >
      <div className="text-5xl mb-3">📍</div>

      <h3 className="text-lg font-semibold text-gray-700">
        Location Unavailable
      </h3>

      <p className="text-sm text-gray-500 mt-2 max-w-sm">
        This is an online event. No physical location has been provided by the
        organizer.
      </p>
    </div>
  );
}

export default LocationUnavailable;