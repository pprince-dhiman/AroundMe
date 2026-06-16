const DateInput = ({ label, error, required = false, ...props }) => {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-[#333333]">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        {...props}
        className=" w-full rounded-lg border  border-gray-300 px-4 py-2.5 outline-none transition focus:border-[#054C73] focus:ring-2  focus:ring-[#054C73]/20"
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default DateInput;
