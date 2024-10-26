import { FaSearch, FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../context/context";

function SearchBar() {
  const { show } = useContext(Context);

  return (
    <div className={`w-full bg-[#525252] px-8 md:px-14 py-4 flex items-center justify-between ${show && 'fixed translate-y-[-565%] z-50'} duration-200 ease-in-out`}>
        <div className="flex items-center gap-2 w-[50%]">
            <FaSearch className="text-lg"/>
            <input type="text"  placeholder="Search by Address or Area" className="bg-[#525252] w-full py-1 px-2 text-md text-xs font-karla font-semibold" />
        </div>
        <div className="flex items-center gap-4 text-slate-300 hover:animate-pulse cursor-pointer">
            <h1 className="font-karla font-semibold text-xs"> BOOK AN APPOINTMENT </h1>
            <FaArrowRight  className="text-md md:text-xl"/>
        </div>
    </div>
  )
}

export default SearchBar;