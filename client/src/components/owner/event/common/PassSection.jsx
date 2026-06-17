import { FiPlus, FiTrash2 } from "react-icons/fi";

const PassSection = ({ passField, addPass, deletePass, register, errors }) => {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-medium">Passes</h2>
        <button
          className="flex items-center gap-2 my-3 px-3 py-2 rounded-lg bg-[#054C73] text-white"
          type="button"
          onClick={() => addPass({ name: "", role: "" })}
        >
          <FiPlus />
          New Pass
        </button>
      </div>

      <div className="my-3">
        {passField?.map((field, index) => (
          <div
            key={field.id}
            className=" border rounded-xl p-4 grid md:grid-cols-10 gap-4 my-3"
          >
            <div className="md:col-span-3">
              <select
                {...register(`passes.${index}.name`)}
                className=" border rounded-lg px-3 py-2 w-full"
              >
                <option value="general">General Pass</option>
                <option value="student">Student Pass</option>
                <option value="vip">VIP Pass</option>
              </select>

              {errors?.performers?.[index]?.name && (
                <div className="text-red-500 text-sm">
                  {errors.performers[index].name.message}
                </div>
              )}
            </div>
            <div className="md:col-span-3 pl-3">
              <input
                {...register(`passes.${index}.price`)}
                placeholder="Pass price"
                className="w-full border rounded-lg px-3 py-2"
                type="number"
              />

              {errors?.passes?.[index]?.price && (
                <div className="text-red-500 text-sm">
                  {errors.passes[index].price.message}
                </div>
              )}
            </div>

            <div className="col-span-3 pl-3">
              <input
                {...register(`passes.${index}.quantity`)}
                placeholder="Pass quantity"
                type="number"
                className="w-full border rounded-lg px-3 py-2"
              />

              {errors?.passes?.[index]?.quantity && (
                <div className="text-red-500 text-sm">
                  {errors.passes[index].quantity.message}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => deletePass(index)}
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

export default PassSection;
