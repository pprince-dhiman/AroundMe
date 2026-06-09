import { FiInbox } from "react-icons/fi";

const EmptyState = ({
  text = "No Data Found",
  icon: Icon = FiInbox,
  minHeight = "500px",
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 text-center"
      style={{ minHeight }}
    >
      <Icon className="mb-4 text-6xl text-[#054C73]" />

      <h2 className="text-xl font-semibold text-[#333333]">
        {text}
      </h2>

      <p className="mt-2 text-sm text-[#666666]">
        Nothing to display right now.
      </p>
    </div>
  );
};

export default EmptyState;