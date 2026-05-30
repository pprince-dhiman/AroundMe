import { FiSearch } from "react-icons/fi";

export default function EventSearch({ searchedQry, setSearchedQry }) {
  return (
    <div className="flex flex-col justify-center items-center px-20 gap-10">
      <input
        type="text"
        placeholder="Search events..."
        className="w-full bg-white border border-[#DFE9F4] rounded-md py-4 px-6 pr-14 outline-none focus:border-[#054C73]"
      />

      <button className="flex items-center justify-center gap-1 border px-4 py-2 rounded-xl w-50 cursor-pointer">
        <FiSearch size={18} /> Search
      </button>
    </div>
  );
}
