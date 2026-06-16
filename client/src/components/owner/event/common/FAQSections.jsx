import { FiPlus, FiTrash2 } from "react-icons/fi";

const FAQSections = ({ faqsField, register, addFAQ, deleteFAQ, errors }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">FAQs</h3>

        <button
          type="button"
          onClick={() =>
            addFAQ({
              question: "",
              answer: "",
            })
          }
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#054C73] text-white"
        >
          <FiPlus />
          Add FAQ
        </button>
      </div>

      {faqsField?.map((field, index) => (
        <div
          key={field.id}
          className=" border rounded-xl p-4 grid md:grid-cols-9 gap-4"
        >
          <div className="md:col-span-4">
            <input
              placeholder="Question"
              {...register(`FAQs.${index}.question`)}
              className=" w-full border rounded-lg px-3 py-2"
            />

            {errors?.FAQs?.[index]?.question && (
              <p className="text-red-500 text-sm mt-1">
                {errors.FAQs[index].question.message}
              </p>
            )}
          </div>
          <div className="md:col-span-4">
            <input
              placeholder="Answer"
              {...register(`FAQs.${index}.answer`)}
              className=" w-full border rounded-lg px-3 py-2"
            />

            {errors?.FAQs?.[index]?.answer && (
              <p className="text-red-500 text-sm mt-1">
                {errors.FAQs[index].answer.message}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => deleteFAQ(index)}
            className=" flex justify-center items-center rounded-lg border border-red-500 text-red-500"
          >
            <FiTrash2 />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQSections;
