import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const linkBase =
    'hover:text-teal-300 cursor-pointer transition-colors duration-200';
    const activeClass = 'text-teal-300';
    
    return (
        <div className="flex justify-between items-center  px-8 py-4 text-white">
            <div className="text-2xl font-semibold tracking-wide hover:text-teal-400 transition-colors duration-300">
                Talentbridge LK
            </div>
            <div className="flex gap-10 items-center">
                <div>
                    <ul className="flex gap-10 items-center">
                        <li>
                            <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `${linkBase} ${isActive ? activeClass : ''}`
                            }
                            >
                            Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                            to="/jobs"
                            className={({ isActive }) =>
                                `${linkBase} ${isActive ? activeClass : ''}`
                            }
                            >
                            Jobs
                            </NavLink>
                        </li>

                        <li>
                            {/* Temporarily scroll to about section on home */}
                            <a href="#about" className={linkBase}>
                            About us
                            </a>
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
