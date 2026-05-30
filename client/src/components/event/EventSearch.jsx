export default function EventSearch({ searchedQry, setSearchedQry }) {
  return (
    <div className="flex flex-col justify-center items-center px-20 gap-10">
      <input
        type="text"
        value={searchedQry}
        onClick={()=> scrollTo(0,230)}
        onChange={(e)=> setSearchedQry(e.target.value)}
        placeholder="Search by event name"
        className="w-full bg-white border border-[#DFE9F4] rounded-md py-4 px-6 pr-14 outline-none focus:border-[#054C73]"
      />
    </div>
  );
}
