import { FiPlus, FiTrash2 } from "react-icons/fi";

const ProblemSection = ({
  problemFields,
  addProblem,
  deleteProblem,
  register,
  errors,
}) => {
  return (
    <div className="my-5 ">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Problem Statement</h2>
        <button
          type="button"
          onClick={() => addProblem("")}
          className="flex items-center gap-2 my-3 px-3 py-2 rounded-lg bg-[#054C73] text-white"
        >
          <FiPlus />
          Problem Statement
        </button>
      </div>

      <div>
        {problemFields?.map((field, index) => (
          <div
            key={field.id}
            className=" border rounded-xl p-4 grid grid-cols-10 gap-5 my-3"
          >
            <input
              {...register(`problemStatements.${index}`)}
              placeholder="Enter new Problem statement..."
              className=" w-full border rounded-lg px-3 py-2 border-gray-500 col-span-9"
            />
            {errors.problemStatements?.[index] && (
              <div className="text-sm text-red-500">
                {errors.problemStatements?.[index].message}
              </div>
            )}

            <button
              type="button"
              onClick={() => deleteProblem(index)}
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

export default ProblemSection;
