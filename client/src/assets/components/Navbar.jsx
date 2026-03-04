import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-[90%] max-w-7xl mx-auto py-8 text-white bg-transparent relative z-20">
      <div className="text-[1.25rem] font-bold tracking-wide">Talentbridge LK</div>
      <div className="flex gap-14 items-center">
        <ul className="flex gap-10 items-center text-[0.95rem] text-[#b3b9c5] font-medium tracking-wide">
          <li className="cursor-pointer transition-colors hover:text-white">Home</li>
          <li className="cursor-pointer transition-colors hover:text-white">Jobs/Interns</li>
          <li className="cursor-pointer transition-colors hover:text-white">About us</li>
        </ul>
        <button className="bg-white text-black px-6 py-1.5 rounded-full font-semibold text-[0.9rem] hover:bg-gray-200 transition-all duration-300">Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;