import React from 'react';
import { roles } from '../../assets/assests';

const Catogories = () => {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center px-6">
            <div className="w-[90%] max-w-[1100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 place-items-center">
                    {roles.map((role, idx) => (
                        <div
                            key={idx}
                            className="w-full max-w-[320px] bg-white rounded-2xl px-6 py-4 flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        >
                            <div className="flex-shrink-0 flex items-center justify-center">
                                {role.icon}
                            </div>
                            <h3 className="text-[#151a2a] font-bold text-[1.1rem] tracking-tight m-0">
                                {role.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Pagination / Slider Indicator */}
                <div className="flex justify-center items-center gap-2 mt-[5rem]">
                    <div className="w-8 h-2.5 bg-white rounded-full"></div>
                    <div className="w-2.5 h-2.5 border-2 border-white rounded-full opacity-60"></div>
                    <div className="w-2.5 h-2.5 border-2 border-white rounded-full opacity-60"></div>
                </div>
            </div>
        </div>
    );
};

export default Catogories;
