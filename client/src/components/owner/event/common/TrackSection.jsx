import { FiPlus, FiTrash2 } from "react-icons/fi";

const TrackSection = ({
  trackField,
  register,
  addTrack,
  deleteTrack,
  errors,
}) => {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Tracks</h3>

        <button
          type="button"
          onClick={() => addTrack("")}
          className="flex items-center gap-2 my-3 px-3 py-2 rounded-lg bg-[#054C73] text-white"
        >
          <FiPlus />
          New Track
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {trackField?.map((field, index) => (
          <div
            key={field.id}
            className="col-span-1 border rounded-xl p-4 grid grid-cols-4 gap-2 my-3"
          >
            <div className="col-span-3">
              <input
                placeholder="Describe track"
                {...register(`tracks.${index}`)}
                className=" w-full border rounded-lg px-3 py-2 border-gray-500"
              />

              {errors?.tracks?.[index] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.tracks[index].message}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => deleteTrack(index)}
              className=" flex justify-center items-center rounded-lg border border-red-500 text-red-500"
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackSection;
