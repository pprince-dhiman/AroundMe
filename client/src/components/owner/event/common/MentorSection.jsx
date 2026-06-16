import { FiPlus, FiTrash2 } from "react-icons/fi";

const MentorSection = ({
  mentorFields,
  addMentor,
  deleteMentor,
  register,
  errors,
}) => {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-medium">Add Mentors</h2>
        <button
          className="flex items-center gap-2 my-3 px-3 py-2 rounded-lg bg-[#054C73] text-white"
          type="button"
          onClick={() => addMentor({ name: "", role: "" })}
        >
          <FiPlus />
          New Mentor
        </button>
      </div>
      <div className="my-3">
        {mentorFields?.map((field, index) => (
          <div
            key={field.id}
            className=" border rounded-xl p-4 grid md:grid-cols-5 gap-4 my-3"
          >
            <div className="md:col-span-2">
              <input
                {...register(`mentors.${index}.name`)}
                placeholder="Mentor Name"
                className="w-full border rounded-lg px-3 py-2"
              />

              {errors?.mentors?.[index]?.name && (
                <div className="text-red-500 text-sm">
                  {errors.mentors[index].name.message}
                </div>
              )}
            </div>
            <div className="md:col-span-2 pl-3">
              <span className="text-md text-gray-600">Role: </span>
              <select
                {...register(`mentors.${index}.role`)}
                className=" border rounded-lg px-3 py-2 w-[80%]"
              >
                <option value="">-Select-</option>
                <option value="Mentor">Mentor</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Tech Lead">Tech Lead</option>
                <option value="Founder">Founder</option>
                <option value="AI Engineer">AI Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Designer">Designer</option>
              </select>
              {errors?.mentors?.[index]?.role && (
                <div className="text-red-500 text-sm">
                  {errors?.mentors?.[index]?.role?.message}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => deleteMentor(index)}
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

export default MentorSection;