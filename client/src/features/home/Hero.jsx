import React from 'react';
import { useRef } from 'react';

const Hero = () => {
    const sliderRef = useRef(null);

    const scroll = (dir) => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: dir === 'left' ? -300 : 300,
            behavior: 'smooth',
        });
    };
    return (
        <div className="flex flex-col h-full border-3 border-orange-500">
            {/* top */}
            <div className="flex-3  border-4 border-green-500">
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-2">
                        Meet Talentbridge LK
                    </h1>
                    <p className="text-sm md:text-base text-gray-300 mb-6">
                        Search for better intern or job and learn to be qualified
                    </p>
                    <div className="flex justify-center items-center bg-white/10 backdrop-blur-md rounded-full p-1 border border-gray-500/30 w-full max-w-md">
                        <input
                            type="text"
                            className="flex-grow bg-transparent text-white placeholder:text-gray-300 text-sm md:text-base pl-4 py-2 rounded-full focus:outline-none"
                            placeholder="Find any job or intern you want"
                        />
                        <button className="bg-white text-black rounded-full px-6 py-2 font-medium text-sm hover:bg-gray-100 shadow-md transition-all duration-300">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div className="flex flex-1 flex-col justify-center items-center border-4 border-purple-500">
                <div className="w-[75vw] mx-auto">
                    <div className="text-[1.1rem] mb-1.5 font-semibold text-gray-200">
                        Trending internships/jobs
                    </div>

                    <div className="relative w-full">
                        {/* Left Arrow (Positioned Outside) */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute -left-12 top-1/2 -translate-y-1/2 z-20
                                                flex items-center justify-center
                                                w-8 h-8 rounded-full
                                                text-white/80 hover:text-white
                                                bg-white/5 hover:bg-white/10
                                                border border-white/10
                                                backdrop-blur-sm transition-all"
                        >
                            ❮
                        </button>

                        {/* Scroll Area (Reduced padding since arrows are outside) */}
                        <div
                            ref={sliderRef}
                            className="flex items-center gap-4
                                                w-full h-[12vw] min-h-[90px] max-h-[120px]
                                                px-4 
                                                rounded-2xl
                                                bg-gradient-to-r from-white/5 via-white/3 to-white/5
                                                border border-white/10
                                                shadow-[0_20px_40px_rgba(0,0,0,0.45)]
                                                overflow-x-auto scroll-smooth no-scrollbar"
                        >
                            {/* CARD 1: DevOps */}
                            <div
                                className="flex items-center gap-3
                                                        min-w-[20vw] max-w-[240px]
                                                        h-[9vw] min-h-[70px] max-h-[90px]
                                                        px-4 bg-white rounded-xl
                                                        shadow-sm border border-gray-100
                                                        text-sm text-gray-900 font-bold shrink-0"
                            >
                                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-violet-50">
                                    <span className="text-xl text-violet-600 mb-1">∞</span>
                                </div>
                                <span className="text-gray-800 font-semibold text-sm">
                                    DevOps Engineer
                                </span>
                            </div>

                            {/* CARD 2: Data Analyst */}
                            <div
                                className="flex items-center gap-3
                                                        min-w-[20vw] max-w-[240px]
                                                        h-[9vw] min-h-[70px] max-h-[90px]
                                                        px-4 bg-white rounded-xl
                                                        shadow-sm border border-gray-100
                                                        text-sm text-gray-900 font-bold shrink-0"
                            >
                                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-sky-50">
                                    <div className="flex items-end gap-[2px]">
                                        <div className="w-1.5 h-2 bg-sky-400 rounded-t-[1px]"></div>
                                        <div className="w-1.5 h-3 bg-sky-500 rounded-t-[1px]"></div>
                                        <div className="w-1.5 h-4 bg-sky-600 rounded-t-[1px]"></div>
                                    </div>
                                </div>
                                <span className="text-gray-800 font-semibold text-sm">
                                    Data Analyst
                                </span>
                            </div>

                            {/* CARD 3: Machine Learning */}
                            <div
                                className="flex items-center gap-3
                                                        min-w-[20vw] max-w-[240px]
                                                        h-[9vw] min-h-[70px] max-h-[90px]
                                                        px-4 bg-white rounded-xl
                                                        shadow-sm border border-gray-100
                                                        text-sm text-gray-900 font-bold shrink-0"
                            >
                                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-50">
                                    <div className="w-5 h-5 border-2 border-indigo-500 rounded flex items-center justify-center">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                    </div>
                                </div>
                                <span className="text-gray-800 font-semibold text-sm">
                                    Machine Learning
                                </span>
                            </div>

                            {/* CARD 4: UI/UX (Extra card to test scrolling) */}
                            <div
                                className="flex items-center gap-3
                                                        min-w-[20vw] max-w-[240px]
                                                        h-[9vw] min-h-[70px] max-h-[90px]
                                                        px-4 bg-white rounded-xl
                                                        shadow-sm border border-gray-100
                                                        text-sm text-gray-900 font-bold shrink-0"
                            >
                                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-pink-50">
                                    <span className="text-pink-500 font-serif italic text-lg">
                                        Ux
                                    </span>
                                </div>
                                <span className="text-gray-800 font-semibold text-sm">
                                    UI/UX Designer
                                </span>
                            </div>
                        </div>

                        {/* Right Arrow (Positioned Outside) */}
                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-12 top-1/2 -translate-y-1/2 z-20
                                                flex items-center justify-center
                                                w-8 h-8 rounded-full
                                                text-white/80 hover:text-white
                                                bg-white/5 hover:bg-white/10
                                                border border-white/10
                                                backdrop-blur-sm transition-all"
                        >
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
