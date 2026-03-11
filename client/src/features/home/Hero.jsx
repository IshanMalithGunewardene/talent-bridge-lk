import React, { useRef, useState, useEffect, useCallback } from 'react';
import frontendIcon from './assets/catorgories_icons/frontend-developer-icon.svg';
import backendIcon from './assets/catorgories_icons/backend-developer-icon.svg';
import devopsIcon from './assets/catorgories_icons/devops-engineer-icon.svg';
import androidIcon from './assets/catorgories_icons/android-developer-icon.svg';
import qaIcon from './assets/catorgories_icons/qa-engineer-icon.svg';
import aiAgentIcon from './assets/catorgories_icons/ai-agent-developer-icon.svg';
import iosIcon from './assets/catorgories_icons/ios-developer-icon.svg';
import architectIcon from './assets/catorgories_icons/software-architect-icon.svg';
import businessIcon from './assets/catorgories_icons/business-intelligence-icon.svg';
import { jobData } from '../jobs_and_interns/dt_/dt.js';

// Flatten all jobs from all roles into a single searchable list
const allJobs = Object.entries(jobData).flatMap(([role, listings]) =>
    listings.map((job) => ({ ...job, role }))
);

const trendingCards = [
    { label: 'Frontend Developer',   icon: frontendIcon },
    { label: 'Backend Developer',    icon: backendIcon },
    { label: 'DevOps Engineer',      icon: devopsIcon },
    { label: 'Android Developer',    icon: androidIcon },
    { label: 'QA Engineer',          icon: qaIcon },
    { label: 'AI Agent Developer',   icon: aiAgentIcon },
    { label: 'iOS Developer',        icon: iosIcon },
    { label: 'Software Architect',   icon: architectIcon },
    { label: 'Business Intelligence',icon: businessIcon },
];

const Hero = ({ onSelectRole, onSearch }) => {
    const sliderRef = useRef(null);
    const dropdownRef = useRef(null);

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);
    const [highlighted, setHighlighted] = useState(-1);

    // Live filter: search title, company, role, skills
    useEffect(() => {
        const q = query.trim().toLowerCase();
        if (!q) { setResults([]); setOpen(false); return; }
        const filtered = allJobs.filter((j) =>
            j.title.toLowerCase().includes(q) ||
            j.company.toLowerCase().includes(q) ||
            j.role.toLowerCase().includes(q) ||
            (j.skills ?? []).some((s) => s.toLowerCase().includes(q))
        ).slice(0, 8);
        setResults(filtered);
        setOpen(filtered.length > 0);
        setHighlighted(-1);
    }, [query]);

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const navigateTo = useCallback((job) => {
        setQuery('');
        setOpen(false);
        onSelectRole?.(job.role);
    }, [onSelectRole]);

    const handleSearch = () => {
        const q = query.trim();
        if (!q) return;
        setOpen(false);
        // If a specific dropdown row is highlighted, go straight to that role page
        if (highlighted >= 0 && results[highlighted]) {
            setQuery('');
            onSelectRole?.(results[highlighted].role);
            return;
        }
        // Otherwise open the full search results page with the typed query
        setQuery('');
        onSearch?.(q);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); setHighlighted((h) => Math.min(h + 1, results.length - 1)); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setHighlighted((h) => Math.max(h - 1, -1)); }
        else if (e.key === 'Enter') { e.preventDefault(); handleSearch(); }
        else if (e.key === 'Escape') { setOpen(false); }
    };

    const scroll = (dir) => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: dir === 'left' ? -280 : 280,
            behavior: 'smooth',
        });
    };

    // Badge colour per job type
    const typeBadge = (type) => type === 'Full-time'
        ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25'
        : 'bg-amber-500/15 text-amber-400 border-amber-500/25';

    return (
        <div className="flex flex-col h-full justify-center">
            {/* ── Hero text + search ── */}
            <div className="flex flex-col items-center text-center gap-4 flex-1 justify-center px-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                    Meet Talentbridge LK
                </h1>
                <p className="text-[0.95rem] sm:text-[1rem] text-white/60">
                    Search for better intern or job and learn to qualified
                </p>

                {/* Search bar + dropdown wrapper */}
                <div className="relative w-full max-w-130" ref={dropdownRef}>
                    <div className="flex items-center w-full bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-1 py-1 mt-2">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onFocus={() => results.length > 0 && setOpen(true)}
                            className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm pl-4 sm:pl-5 pr-2 py-2 focus:outline-none min-w-0"
                            placeholder="find any job or intern you want"
                        />
                        <button
                            onClick={handleSearch}
                            className="flex items-center gap-1.5 sm:gap-2 bg-white text-black rounded-full px-4 sm:px-6 py-2 font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-sm shrink-0">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="7" />
                                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                            </svg>
                            <span className="hidden sm:inline">Search</span>
                        </button>
                    </div>

                    {/* ── Live results dropdown ── */}
                    {open && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#3b2f6e]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[min(420px,60vh)]">
                            <p className="text-white/50 text-[0.68rem] font-medium px-4 pt-3 pb-1 uppercase tracking-widest shrink-0">
                                {results.length} result{results.length !== 1 ? 's' : ''} found
                            </p>
                            <ul className="overflow-y-auto flex-1">
                                {results.map((job, idx) => (
                                    <li
                                        key={job.id}
                                        onMouseEnter={() => setHighlighted(idx)}
                                        onMouseLeave={() => setHighlighted(-1)}
                                        onClick={() => navigateTo(job)}
                                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                                            highlighted === idx ? 'bg-white/20' : 'hover:bg-white/10'
                                        }`}
                                    >
                                        {/* Job icon */}
                                        <div className="w-9 h-9 shrink-0 rounded-lg bg-white/20 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                <rect x="2" y="7" width="20" height="14" rx="2" />
                                                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" strokeLinecap="round" />
                                            </svg>
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-white text-sm font-semibold truncate">{job.title}</p>
                                            <p className="text-white/70 text-xs truncate">{job.company} · {job.location}</p>
                                        </div>

                                        {/* Pills */}
                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className={`text-[0.65rem] px-2 py-0.5 rounded-full border font-medium ${typeBadge(job.type)}`}>
                                                {job.type}
                                            </span>
                                            <span className="text-[0.65rem] px-2 py-0.5 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-300 font-medium hidden sm:inline">
                                                {job.role}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="px-4 py-2 border-t border-white/15 shrink-0">
                                <p className="text-white/50 text-[0.65rem]">↑ ↓ to navigate · Enter to go · Esc to close</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* hint */}
                <p className="text-xs text-white/40 self-start sm:ml-[calc(50%-260px)]">
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
                    {/* Left arrow — hidden on mobile (swipe instead) */}
                    <button
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                        className="hidden sm:flex absolute -left-10 z-20 items-center justify-center w-8 h-8 rounded-full
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
                                onClick={() => onSelectRole?.(card.label)}
                                className="flex items-center gap-3
                                           min-w-44 sm:min-w-50 max-w-57.5 h-17
                                           px-4 bg-white rounded-xl
                                           shadow-sm border border-gray-100
                                           cursor-pointer hover:shadow-md transition-shadow shrink-0"
                            >
                                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 shrink-0">
                                    <img src={card.icon} alt={card.label} className="w-7 h-7 object-contain" />
                                </div>
                                <span className="text-gray-800 font-semibold text-xs sm:text-sm leading-tight">
                                    {card.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right arrow — hidden on mobile */}
                    <button
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                        className="hidden sm:flex absolute -right-10 z-20 items-center justify-center w-8 h-8 rounded-full
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

