import { FiPlus, FiTrash2 } from "react-icons/fi";

const PreRequisiteSection = ({
  prerequisiteFields,
  addPrerequisite,
  deletePrerequisite,
  register,
  errors,
}) => {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Pre-requisites</h3>

        <button
          type="button"
          onClick={() => addPrerequisite("")}
          className="flex items-center gap-2 my-3 px-3 py-2 rounded-lg bg-[#054C73] text-white"
        >
          <FiPlus />
          New Pre-requisite
        </button>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-5">
        {prerequisiteFields?.map((field, index) => (
          <div
            key={field.id}
            className="col-span-1 border rounded-xl p-4 grid grid-cols-5 gap-2 my-3"
          >
            <div className="col-span-4">
              <input
                placeholder="Describe here"
                {...register(`prerequisites.${index}`)}
                className=" w-full border rounded-lg px-3 py-2 border-gray-500"
              />

              {errors?.prerequisites?.[index] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.prerequisites[index].message}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => deletePrerequisite(index)}
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

export default PreRequisiteSection;
