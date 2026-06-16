import { FiPlus, FiTrash2 } from "react-icons/fi";

const MembersSection = ({ fields, register, append, remove, errors }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Members</h3>

        <button
          type="button"
          onClick={() =>
            append({
              user: "",
              role: "manager",
            })
          }
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#054C73] text-white"
        >
          <FiPlus />
          Add Member
        </button>
      </div>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className=" border rounded-xl p-4 grid md:grid-cols-3 gap-4
          "
        >
          <div>
            <input
              placeholder="Member Name"
              {...register(`members.${index}.user`)}
              className=" w-full border rounded-lg px-3 py-2
              "
            />

            {errors?.members?.[index]?.user && (
              <p className="text-red-500 text-sm mt-1">
                {errors.members[index].user.message}
              </p>
            )}
          </div>

          <select
            {...register(`members.${index}.role`)}
            className=" border rounded-lg px-3 py-2"
          >
            <option value="owner">Owner</option>

            <option value="admin">Admin</option>

            <option value="manager">Manager</option>
          </select>

          <button
            type="button"
            onClick={() => remove(index)}
            className=" flex justify-center items-center rounded-lg border border-red-500 text-red-500"
          >
            <FiTrash2 />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MembersSection;
