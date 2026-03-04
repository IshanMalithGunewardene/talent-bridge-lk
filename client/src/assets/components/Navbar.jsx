import React from 'react';

function Navbar() {
    return (
        <div className="flex justify-between items-center  px-8 py-4 text-white">
            <div className="text-2xl font-semibold tracking-wide hover:text-teal-400 transition-colors duration-300">
                Talentbridge LK
            </div>
            <div className="flex gap-10 items-center">
                <div>
                    <ul className="flex gap-10 items-center">
                        <li className="hover:text-teal-300 cursor-pointer transition-colors">
                            Home
                        </li>
                        <li className="hover:text-teal-300 cursor-pointer transition-colors">
                            Jobs
                        </li>
                        <li className="hover:text-teal-300 cursor-pointer transition-colors">
                            About us
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-md">
                        sign in
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
// https://www.youtube.com/watch?v=YxHWB4f5Qx4&pp=ygUnZmFjZWJvb2sgbWVtZSBwYWdlIG1vbmV0aXphdGlvbiBzaW5oYWxh
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
