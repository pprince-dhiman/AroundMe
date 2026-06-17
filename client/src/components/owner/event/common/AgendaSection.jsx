import React from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import FormInput from "../../organization/FormInput";

const AgendaSection = ({
  agendaFields,
  addAgenda,
  deleteAgenda,
  register,
  errors,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Agendas</h3>

        <button
          type="button"
          onClick={() => addAgenda("")}
          className="flex items-center gap-2 my-3 px-3 py-2 rounded-lg bg-[#054C73] text-white"
        >
          <FiPlus />
          New Agenda
        </button>
      </div>

      <div className="space-y-3">
        {agendaFields?.map((field, index) => (
          <div
            key={field.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start p-4 border border-gray-200 rounded-xl bg-white"
          >
            {/* Start Time */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Start Time
              </label>
              <input
                type="time"
                {...register(`agenda.${index}.startTime`, {
                  required: "Start time is required",
                })}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#054C73] focus:ring-2 focus:ring-[#054C73]/20"
              />
            </div>

            {/* End Time */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">End Time</label>
              <input
                type="time"
                {...register(`agenda.${index}.endTime`, {
                  required: "End time is required",
                })}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#054C73] focus:ring-2 focus:ring-[#054C73]/20"
              />
            </div>

            {/* Agenda Title */}
            <div className="md:col-span-7">
              <label className="block text-sm font-medium mb-1">
                Agenda Title
              </label>
              <input
                {...register(`agenda.${index}.title`, {
                  required: "Agenda title is required",
                })}
                placeholder="Opening Ceremony, Team Formation, etc."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-[#054C73] focus:ring-2 focus:ring-[#054C73]/20"
              />

              {errors?.agenda?.[index]?.title && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.agenda[index].title.message}
                </p>
              )}
            </div>

            {/* Delete */}
            <div className="md:col-span-1 flex items-end h-full">
              <button
                type="button"
                onClick={() => deleteAgenda(index)}
                className="w-full md:w-10 h-10 flex items-center justify-center rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaSection;
