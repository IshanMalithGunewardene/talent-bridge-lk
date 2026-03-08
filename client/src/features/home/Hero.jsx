import React, { useRef } from 'react';
import devopsIcon from './assets/devops-icon.svg';
import dataAnalystIcon from './assets/data-analyst-icon.svg';
import mlIcon from './assets/ml-icon.svg';

const trendingCards = [
    { label: 'DevOps Engineer', icon: devopsIcon },
    { label: 'Data Analyst', icon: dataAnalystIcon },
    { label: 'Machine Learning', icon: mlIcon },
    { label: 'DevOps Engineer', icon: devopsIcon },
    { label: 'Data Analyst', icon: dataAnalystIcon },
    { label: 'Machine Learning', icon: mlIcon },
];

const Hero = () => {
    const sliderRef = useRef(null);

    const scroll = (dir) => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: dir === 'left' ? -280 : 280,
            behavior: 'smooth',
        });
    };

    return (
        <div className="flex flex-col h-full justify-center">
            {/* ── Hero text + search ── */}
            <div className="flex flex-col items-center text-center gap-4 flex-1 justify-center">
                <h1 className="text-5xl font-bold leading-tight tracking-tight">
                    Meet Talentbridge LK
                </h1>
                <p className="text-[1rem] text-white/60">
                    Search for better intern or job and learn to qualified
                </p>

                {/* Search bar */}
                <div className="flex items-center w-full max-w-130 bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-1 py-1 mt-2">
                    <input
                        type="text"
                        className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm pl-5 pr-3 py-2 focus:outline-none"
                        placeholder="find any job or intern you want"
                    />
                    <button className="flex items-center gap-2 bg-white text-black rounded-full px-6 py-2 font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-sm shrink-0">
                        {/* magnifier icon */}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="7" />
                            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                        </svg>
                        Search
                    </button>
                </div>

                {/* hint */}
                <p className="text-xs text-white/40 self-start ml-[calc(50%-260px)]">
                    Ex : React Internships
                </p>
            </div>

            {/* ── Trending section ── */}
            <div className="pb-10">
                <p className="text-[1.05rem] font-semibold text-white/80 mb-3">
                    Trending internships/jobs
                </p>

                {/* Slider wrapper */}
                <div className="relative flex items-center">
                    {/* Left arrow */}
                    <button
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                        className="absolute -left-10 z-20 flex items-center justify-center w-8 h-8 rounded-full
                                   bg-white/5 hover:bg-white/15 border border-white/15
                                   text-white/70 hover:text-white transition-all shrink-0"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Track */}
                    <div
                        ref={sliderRef}
                        className="flex items-center gap-4 w-full h-25
                                   px-4 rounded-2xl
                                   bg-white/10 backdrop-blur-md border border-white/10
                                   overflow-x-auto scroll-smooth no-scrollbar"
                    >
                        {trendingCards.map((card, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3
                                           min-w-50 max-w-57.5 h-17
                                           px-4 bg-white rounded-xl
                                           shadow-sm border border-gray-100
                                           cursor-pointer hover:shadow-md transition-shadow shrink-0"
                            >
                                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 shrink-0">
                                    <img src={card.icon} alt={card.label} className="w-7 h-7 object-contain" />
                                </div>
                                <span className="text-gray-800 font-semibold text-sm leading-tight">
                                    {card.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                        className="absolute -right-10 z-20 flex items-center justify-center w-8 h-8 rounded-full
                                   bg-white/5 hover:bg-white/15 border border-white/15
                                   text-white/70 hover:text-white transition-all shrink-0"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;

