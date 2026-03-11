import React, { useState, useEffect, useRef } from 'react';
import { jobData } from '../jobs_and_interns/dt_/dt.js';
import suitCase from '../jobs_and_interns/assets/suitCase.svg';

// ── Flatten all jobs once ─────────────────────────────────────────────────────
const allJobs = Object.entries(jobData).flatMap(([role, listings]) =>
    listings.map((job) => ({ ...job, role }))
);

const ALL_ROLES = ['All Roles', ...Object.keys(jobData)];
const ALL_TYPES = ['All Types', 'Full-time', 'Part-time'];

// ── Job Detail Modal ──────────────────────────────────────────────────────────
function JobModal({ job, onClose }) {
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    const mailtoHref =
        `mailto:${job.applyEmail}` +
        `?subject=${encodeURIComponent(`Application for ${job.title} at ${job.company}`)}` +
        `&body=${encodeURIComponent(
            `Dear Hiring Team at ${job.company},\n\nI am writing to express my interest in the ${job.title} position.\n\nPlease find my details below:\n\nFull Name: \nPhone: \nLinkedIn: \nPortfolio / GitHub: \n\nI look forward to hearing from you.\n\nBest regards,`
        )}`;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-lg bg-[#071f22] border border-white/10 rounded-2xl p-6 max-h-[88vh] overflow-y-auto no-scrollbar shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white/60 hover:text-white"
                >✕</button>

                {/* Header */}
                <div className="flex items-start gap-4 pr-10">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white/10 rounded-xl">
                        <img src={suitCase} alt="job" className="w-7 h-7 opacity-80" />
                    </div>
                    <div>
                        <h2 className="text-white font-bold text-lg leading-snug">{job.title}</h2>
                        <p className="text-white/50 text-sm mt-0.5">{job.company}</p>
                    </div>
                </div>

                {/* Meta pills */}
                <div className="flex flex-wrap gap-2 mt-5">
                    {[
                        { icon: '📍', text: job.location },
                        { icon: '💼', text: job.type },
                        { icon: '📅', text: `Closes ${job.deadline}` },
                        { icon: '✉️', text: job.applyEmail },
                    ].map(({ icon, text }) => (
                        <span key={text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs">
                            <span>{icon}</span>{text}
                        </span>
                    ))}
                </div>

                {/* About */}
                {job.about && (
                    <div className="mt-6">
                        <h3 className="text-white/80 text-sm font-semibold mb-1.5">About the Company</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{job.about}</p>
                    </div>
                )}

                {/* Requirements */}
                {job.requirements?.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-white/80 text-sm font-semibold mb-2">Requirements</h3>
                        <ul className="space-y-1.5">
                            {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-white/55 text-sm">
                                    <span className="mt-0.5 text-[#4ade80] shrink-0">✓</span>
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Skills */}
                {job.skills?.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-white/80 text-sm font-semibold mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {job.skills.map((sk) => (
                                <span key={sk} className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/70 text-xs font-medium">
                                    {sk}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Apply */}
                <div className="mt-8">
                    <a
                        href={mailtoHref}
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-900/30"
                    >
                        ✉️ Apply Now →
                    </a>
                </div>
            </div>
        </div>
    );
}

// ── Job Result Card ───────────────────────────────────────────────────────────
function ResultCard({ job, query, onClick }) {
    const typeBadge = job.type === 'Full-time'
        ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25'
        : 'bg-amber-500/15 text-amber-400 border-amber-500/25';

    // Highlight matched text
    const highlight = (text) => {
        if (!query) return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i) =>
            regex.test(part)
                ? <mark key={i} className="bg-purple-400/30 text-white rounded px-0.5">{part}</mark>
                : part
        );
    };

    return (
        <div
            onClick={onClick}
            className="group flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl px-5 py-5 cursor-pointer transition-all duration-200"
        >
            {/* Icon */}
            <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white/10 group-hover:bg-white/15 rounded-xl transition-colors">
                <img src={suitCase} alt="job" className="w-6 h-6 opacity-80" />
            </div>

            {/* Body */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                        <p className="text-white font-semibold text-[0.95rem] leading-snug">
                            {highlight(job.title)}
                        </p>
                        <p className="text-white/55 text-xs mt-0.5">
                            {highlight(job.company)} · {job.location}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[0.7rem] px-2.5 py-1 rounded-full border font-medium ${typeBadge}`}>
                            {job.type}
                        </span>
                        <span className="text-[0.7rem] px-2.5 py-1 rounded-full border border-purple-400/25 bg-purple-500/10 text-purple-300 font-medium">
                            {job.role}
                        </span>
                    </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                    {(job.skills ?? []).slice(0, 5).map((sk) => (
                        <span
                            key={sk}
                            className="text-[0.68rem] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60"
                        >
                            {sk}
                        </span>
                    ))}
                </div>

                {/* Deadline */}
                <p className="text-white/30 text-[0.7rem] mt-2.5">📅 Closes {job.deadline}</p>
            </div>
        </div>
    );
}

// ── Main Search Results Page ──────────────────────────────────────────────────
function SearchResults({ initialQuery = '', onBack, onSelectRole }) {
    const inputRef = useRef(null);
    const [query, setQuery] = useState(initialQuery);
    const [liveQuery, setLiveQuery] = useState(initialQuery);
    const [roleFilter, setRoleFilter] = useState('All Roles');
    const [typeFilter, setTypeFilter] = useState('All Types');
    const [selectedJob, setSelectedJob] = useState(null);

    // Sync whenever a new search is triggered from the Hero page
    // (initialQuery prop changes while the component is already mounted)
    useEffect(() => {
        setQuery(initialQuery);
        setLiveQuery(initialQuery);
        setRoleFilter('All Roles');
        setTypeFilter('All Types');
    }, [initialQuery]);

    // Run search whenever liveQuery or filters change
    const results = React.useMemo(() => {
        const q = liveQuery.trim().toLowerCase();
        return allJobs.filter((j) => {
            const matchesQuery = !q ||
                j.title.toLowerCase().includes(q) ||
                j.company.toLowerCase().includes(q) ||
                j.role.toLowerCase().includes(q) ||
                (j.skills ?? []).some((s) => s.toLowerCase().includes(q));
            const matchesRole = roleFilter === 'All Roles' || j.role === roleFilter;
            const matchesType = typeFilter === 'All Types' || j.type === typeFilter;
            return matchesQuery && matchesRole && matchesType;
        });
    }, [liveQuery, roleFilter, typeFilter]);

    // Auto-focus search input on mount
    useEffect(() => { inputRef.current?.focus(); }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setLiveQuery(query);
    };

    // Group results by role for the sidebar summary
    const byRole = React.useMemo(() =>
        results.reduce((acc, j) => {
            acc[j.role] = (acc[j.role] || 0) + 1;
            return acc;
        }, {}),
        [results]
    );

    return (
        <div className="min-h-screen w-screen overflow-x-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[#041A1C] -z-10" />
            <div className="absolute top-1/3 left-1/4 w-125 h-125 bg-purple-700 rounded-full blur-[180px] opacity-30 pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 w-md h-md bg-blue-700 rounded-full blur-[180px] opacity-25 pointer-events-none -z-10" />

            <div className="w-[90vw] mx-auto pt-8 pb-20">

                {/* ── Top bar: back + search ── */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
                    {/* Back button */}
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors shrink-0"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back
                    </button>

                    {/* Search bar */}
                    <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-1 py-1">
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); setLiveQuery(query); } }}
                            className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm pl-5 pr-3 py-2 focus:outline-none"
                            placeholder="Search jobs, roles, companies, skills…"
                        />
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-white text-black rounded-full px-6 py-2 font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-sm shrink-0"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="7" />
                                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                            </svg>
                            Search
                        </button>
                    </form>
                </div>

                {/* ── Filters row ── */}
                <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-3">
                    <span className="text-white/50 text-sm">Filter by:</span>

                    {/* Role filter */}
                    <div className="flex flex-wrap gap-2">
                        {ALL_ROLES.map((r) => (
                            <button
                                key={r}
                                onClick={() => setRoleFilter(r)}
                                className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-150 ${
                                    roleFilter === r
                                        ? 'bg-purple-600 border-purple-500 text-white'
                                        : 'bg-white/5 border-white/15 text-white/60 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-px h-5 bg-white/15 hidden sm:block" />

                    {/* Type filter */}
                    {ALL_TYPES.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTypeFilter(t)}
                            className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-150 ${
                                typeFilter === t
                                    ? t === 'Full-time'
                                        ? 'bg-emerald-600 border-emerald-500 text-white'
                                        : t === 'Part-time'
                                            ? 'bg-amber-600 border-amber-500 text-white'
                                            : 'bg-purple-600 border-purple-500 text-white'
                                    : 'bg-white/5 border-white/15 text-white/60 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
                </div>

                {/* ── Results header ── */}
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h1 className="text-white text-xl font-bold">
                            {liveQuery
                                ? <>Results for <span className="text-purple-400">"{liveQuery}"</span></>
                                : 'All Jobs & Internships'
                            }
                        </h1>
                        <p className="text-white/40 text-sm mt-0.5">
                            {results.length} position{results.length !== 1 ? 's' : ''} found
                        </p>
                    </div>
                </div>

                {/* ── Two-column layout ── */}
                <div className="flex flex-col lg:flex-row gap-6 items-start">

                    {/* ── Left: results grid ── */}
                    <div className="flex-1 min-w-0">
                        {results.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-24 text-center">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-white/30" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <circle cx="11" cy="11" r="7" />
                                        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <p className="text-white/50 font-medium">No jobs found</p>
                                <p className="text-white/30 text-sm mt-1">Try different keywords or clear the filters</p>
                                <button
                                    onClick={() => { setQuery(''); setLiveQuery(''); setRoleFilter('All Roles'); setTypeFilter('All Types'); }}
                                    className="mt-4 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-sm transition-all"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {results.map((job) => (
                                    <ResultCard
                                        key={job.id}
                                        job={job}
                                        query={liveQuery}
                                        onClick={() => setSelectedJob(job)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ── Right: summary sidebar ── */}
                    <div className="w-full lg:w-72 lg:shrink-0 hidden lg:block">

                        {/* Roles breakdown */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-4">
                            <h3 className="text-white font-semibold text-sm mb-4">Results by Role</h3>
                            <div className="space-y-2">
                                {Object.entries(byRole)
                                    .sort((a, b) => b[1] - a[1])
                                    .map(([role, count]) => (
                                        <button
                                            key={role}
                                            onClick={() => setRoleFilter(role)}
                                            className="flex items-center justify-between w-full group"
                                        >
                                            <span className="text-white/60 text-xs group-hover:text-white transition-colors text-left truncate pr-2">
                                                {role}
                                            </span>
                                            <span className="shrink-0 text-[0.65rem] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-medium">
                                                {count}
                                            </span>
                                        </button>
                                    ))}
                                {Object.keys(byRole).length === 0 && (
                                    <p className="text-white/25 text-xs">No results</p>
                                )}
                            </div>
                        </div>

                        {/* View full role page CTA */}
                        {roleFilter !== 'All Roles' && (
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <p className="text-white/70 text-sm font-semibold mb-1">{roleFilter}</p>
                                <p className="text-white/40 text-xs mb-4">See the full roadmap and all listings for this role.</p>
                                <button
                                    onClick={() => onSelectRole?.(roleFilter)}
                                    className="w-full py-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-semibold transition-all duration-200"
                                >
                                    View Role Page →
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Job detail modal */}
            {selectedJob && (
                <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
            )}
        </div>
    );
}

export default SearchResults;
