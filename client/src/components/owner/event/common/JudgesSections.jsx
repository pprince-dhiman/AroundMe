import { FiPlus, FiTrash2 } from "react-icons/fi";

const JudgesSection = ({
  judgesFields,
  addJudges,
  deleteJudges,
  register,
  errors,
}) => {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-medium">Add Judges</h2>
        <button
          className="flex items-center gap-2 my-3 px-3 py-2 rounded-lg bg-[#054C73] text-white"
          type="button"
          onClick={() => addJudges({ name: "", role: "" })}
        >
          <FiPlus />
          New Judge
        </button>
      </div>
      <div className="my-3">
        {judgesFields?.map((field, index) => (
          <div
            key={field.id}
            className=" border rounded-xl p-4 grid md:grid-cols-5 gap-4 my-3"
          >
            <div className="md:col-span-2">
              <input
                {...register(`judges.${index}.name`)}
                placeholder="Judge Name"
                className="w-full border rounded-lg px-3 py-2"
              />

              {errors?.judges?.[index]?.name && (
                <div className="text-red-500 text-sm">
                  {errors.judges[index].name.message}
                </div>
              )}
            </div>
            <div className="md:col-span-2 pl-3">
              <input
                {...register(`judges.${index}.role`)}
                placeholder="Judge Role"
                className="w-full border rounded-lg px-3 py-2"
              />

              {errors?.judges?.[index]?.role && (
                <div className="text-red-500 text-sm">
                  {errors.judges[index].role.message}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => deleteJudges(index)}
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

export default JudgesSection;
