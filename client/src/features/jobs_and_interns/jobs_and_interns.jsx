import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import suitCase from './assets/suitCase.svg';
import { useJobPostings } from './useJobPostings.js';
import SkillResources from './SkillResources.jsx';
import { useProgress } from './useProgress.js';

// ── Per-role config ───────────────────────────────────────────────────────────

const roleConfig = {
    'Frontend Developer': {
        tag: 'React Jobs',
        roadmap: [
            ['HTML', 'CSS', 'Javascript'],
            ['Responsive Design', 'Project'],
            ['React', 'Git'],
            ['Tailwind', 'Project'],
            ['Redux', 'Bootstrap'],
        ],
    },
    'Backend Developer': {
        tag: 'Node / Python Jobs',
        roadmap: [
            ['Programming Basics', 'Git'],
            ['Node.js / Python'],
            ['REST APIs', 'Databases'],
            ['Auth', 'Testing'],
            ['Docker', 'Deployment'],
        ],
    },
    'DevOps Engineer': {
        tag: 'DevOps Jobs',
        roadmap: [
            ['Linux', 'Bash', 'Git'],
            ['Docker', 'Kubernetes'],
            ['CI/CD Pipelines'],
            ['Cloud (AWS/GCP/Azure)'],
            ['Monitoring', 'IaC'],
        ],
    },
    'Android Developer': {
        tag: 'Android Jobs',
        roadmap: [
            ['Java / Kotlin', 'OOP'],
            ['Android SDK', 'XML Layouts'],
            ['Jetpack', 'Room DB'],
            ['Retrofit', 'Coroutines'],
            ['Play Store Deploy'],
        ],
    },
    'QA Engineer': {
        tag: 'QA / Testing Jobs',
        roadmap: [
            ['Testing Fundamentals'],
            ['Manual Testing', 'Test Cases'],
            ['Selenium / Cypress'],
            ['API Testing', 'Postman'],
            ['CI Integration', 'Reporting'],
        ],
    },
    'AI Agent Developer': {
        tag: 'AI / ML Jobs',
        roadmap: [
            ['Python', 'Math Basics'],
            ['ML Fundamentals'],
            ['LLMs', 'Prompt Engineering'],
            ['LangChain / AutoGen'],
            ['Deploy AI Agents'],
        ],
    },
    'iOS Developer': {
        tag: 'iOS Jobs',
        roadmap: [
            ['Swift', 'Xcode Basics'],
            ['UIKit / SwiftUI'],
            ['Core Data', 'Networking'],
            ['Combine', 'Testing'],
            ['App Store Deploy'],
        ],
    },
    'Software Architect': {
        tag: 'Architecture Jobs',
        roadmap: [
            ['Design Patterns', 'SOLID'],
            ['System Design Basics'],
            ['Microservices', 'APIs'],
            ['Cloud Architecture'],
            ['Tech Leadership'],
        ],
    },
    'Business Intelligence': {
        tag: 'BI / Data Jobs',
        roadmap: [
            ['SQL', 'Excel'],
            ['Data Warehousing'],
            ['Power BI / Tableau'],
            ['ETL Pipelines'],
            ['Reporting', 'Insights'],
        ],
    },
};

// ── Job cards per page ────────────────────────────────────────────────────────

const CARDS_PER_PAGE = 6;

// ── Sub-components ────────────────────────────────────────────────────────────

// ── Job Detail Modal ─────────────────────────────────────────────────────────

function JobModal({ job, onClose }) {
    // Close on Escape key
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
        /* Backdrop */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
            onClick={onClose}
        >
            {/* Modal card — stops click propagation so backdrop click closes but card click doesn't */}
            <div
                className="relative w-full max-w-lg bg-[#071f22] border border-white/10 rounded-2xl p-6 max-h-[88vh] overflow-y-auto no-scrollbar shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white/60 hover:text-white"
                    aria-label="Close"
                >
                    ✕
                </button>

                {/* ── Header ── */}
                <div className="flex items-start gap-4 pr-10">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white/10 rounded-xl">
                        <img src={suitCase} alt="job" className="w-7 h-7 opacity-80" />
                    </div>
                    <div>
                        <h2 className="text-white font-bold text-lg leading-snug">{job.title}</h2>
                        <p className="text-white/50 text-sm mt-0.5">{job.company}</p>
                    </div>
                </div>

                {/* ── Meta pills ── */}
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

                {/* ── About Company ── */}
                {job.about && (
                    <div className="mt-6">
                        <h3 className="text-white/80 text-sm font-semibold mb-1.5">About the Company</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{job.about}</p>
                    </div>
                )}

                {/* ── Requirements ── */}
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

                {/* ── Skills ── */}
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

                {/* ── Apply button ── */}
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

// ── Job Card ──────────────────────────────────────────────────────────────────

function JobCard({ title, company, location, type, deadline, onClick, fromRecruiter }) {
    return (
        <div onClick={onClick} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-4 hover:bg-white/10 transition-all duration-200 cursor-pointer group">
            {/* Icon */}
            <div className="w-11 h-11 shrink-0 flex items-center justify-center bg-white/10 rounded-lg">
                <img src={suitCase} alt="job" className="w-6 h-6 opacity-80" />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                    <p className="text-white text-[0.85rem] font-semibold leading-tight group-hover:text-white/90 truncate">
                        {title}
                    </p>
                    {fromRecruiter && (
                        <span className="shrink-0 text-[0.6rem] px-1.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-semibold uppercase tracking-wide">
                            New
                        </span>
                    )}
                </div>
                <p className="text-white/50 text-xs mt-0.5 truncate">{company} · {location}</p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-white/40 text-[0.7rem]">{type}</span>
                    <span className="text-white/20 text-[0.7rem]">·</span>
                    <span className="text-white/30 text-[0.65rem]">Closes {deadline}</span>
                </div>
            </div>
        </div>
    );
}

function RoadmapTag({ label, onClick, completed, onToggleComplete }) {
    return (
        <span className="relative inline-flex items-center group">
            <span
                onClick={onClick}
                className={`pl-4 py-1.5 rounded-full border text-[0.78rem] font-medium whitespace-nowrap transition-all duration-150 cursor-pointer select-none pr-8 ${
                    completed
                        ? 'border-emerald-400/50 bg-emerald-500/15 text-emerald-300'
                        : 'border-white/20 bg-white/5 text-white/80 hover:bg-violet-600/30 hover:border-violet-400/40 hover:text-white'
                }`}
                title={`View resources for ${label}`}
            >
                {label}
            </span>
            {/* Tick toggle button overlaid on the right of the pill */}
            <button
                onClick={(e) => { e.stopPropagation(); onToggleComplete(); }}
                title={completed ? 'Mark as incomplete' : 'Mark as complete'}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-150 ${
                    completed
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/15 text-white/40 hover:bg-emerald-500/60 hover:text-white'
                }`}
            >
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </button>
        </span>
    );
}

function PaginationDots({ total, active, onSelect }) {
    return (
        <div className="flex items-center gap-2 justify-center mt-6">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onSelect(i)}
                    aria-label={`Page ${i + 1}`}
                    className={`rounded-full transition-all duration-200 ${
                        i === active
                            ? 'w-8 h-3 bg-white'
                            : 'w-3 h-3 bg-white/25 hover:bg-white/40'
                    }`}
                />
            ))}
        </div>
    );
}

// ── Role Resources Modal ──────────────────────────────────────────────────────
// Shows all roadmap skills for the current role as clickable rows.
// Clicking a skill row opens SkillResources for that skill.

function RoleResources({ role, roadmapSkills, onClose }) {
    const [activeSkill, setActiveSkill] = useState(null);

    // Flatten roadmap rows → ordered skill list
    const allSkills = roadmapSkills.flat();

    // Lock body scroll + Escape to close
    const handleKey = useCallback(
        (e) => { if (e.key === 'Escape') { if (activeSkill) setActiveSkill(null); else onClose?.(); } },
        [activeSkill, onClose],
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = prev;
        };
    }, [handleKey]);

    return createPortal(
        <>
            {/* ── Role overview modal ── */}
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                style={{ backdropFilter: 'blur(6px)', background: 'rgba(4,10,30,0.78)' }}
                onClick={onClose}
            >
                <div
                    className="relative w-full max-w-xl max-h-[88vh] flex flex-col rounded-2xl border border-white/15 bg-[#0b1225] shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-white/10 shrink-0">
                        <div>
                            <span className="inline-block px-3 py-0.5 rounded-full bg-violet-600/25 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-2 border border-violet-500/30">
                                Learning Resources
                            </span>
                            <h2 className="text-2xl font-bold text-white leading-tight">{role}</h2>
                            <p className="text-white/45 text-sm mt-1">
                                Click any skill below to view free & paid resources
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="mt-1 p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all shrink-0"
                            aria-label="Close"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Skill list */}
                    <div className="overflow-y-auto flex-1 px-6 py-5 space-y-2">
                        {allSkills.map((skill, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveSkill(skill)}
                                className="group w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/4 hover:bg-violet-600/20 border border-white/10 hover:border-violet-400/40 transition-all duration-150 text-left"
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    {/* Step number */}
                                    <span className="shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[0.6rem] font-bold text-white/50">
                                        {i + 1}
                                    </span>
                                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors truncate">
                                        {skill}
                                    </span>
                                </div>
                                <svg className="w-4 h-4 text-white/30 group-hover:text-violet-300 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        ))}
                        <div className="h-2" />
                    </div>
                </div>
            </div>

            {/* ── Drill-in: individual skill resources (z-60 so it sits above) ── */}
            {activeSkill && (
                <SkillResources skill={activeSkill} onClose={() => setActiveSkill(null)} zIndex={60} />
            )}
        </>,
        document.body,
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

function JobsAndInterns({ role = 'Frontend Developer', onSearch, session }) {
    const [page, setPage] = useState(0);
    const [selectedJob, setSelectedJob] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [showRoleResources, setShowRoleResources] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Live job listings — hardcoded + recruiter postings from Supabase
    const { jobData, loading: jobsLoading } = useJobPostings();

    // Persist progress to Supabase keyed by supabase user id + role
    const userId = session?.user?.id ?? null;
    const { completedSkills, toggleSkill: toggleSkillComplete } = useProgress(userId, role);

    // Reset page when role changes
    useEffect(() => {
        setPage(0);
    }, [role]);

    const handleSearch = () => {
        const q = searchQuery.trim();
        if (q) onSearch?.(q);
    };

    const handleSearchKey = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    const config = roleConfig[role] ?? roleConfig['Frontend Developer'];
    const jobRoleTag = config.tag;
    const roadmapSkills = config.roadmap;

    // Derive listings and pagination — merged hardcoded + Supabase
    const allJobs = jobData[role] ?? jobData['Frontend Developer'];
    const totalPages = Math.ceil(allJobs.length / CARDS_PER_PAGE);
    const start = page * CARDS_PER_PAGE;
    const visibleJobs = allJobs.slice(start, start + CARDS_PER_PAGE);

    return (
        <div className="min-h-screen w-screen overflow-x-hidden relative">
            {/* Background blobs */}
            <div className="absolute inset-0 bg-[#041A1C] -z-10" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2
                            w-125 h-125 bg-purple-700 rounded-full blur-[160px] opacity-40 pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[45%]
                            w-112.5 h-112.5 bg-blue-700 rounded-full blur-[160px] opacity-35 pointer-events-none -z-10" />

            {/* Page content */}
            <div className="w-[88vw] mx-auto pt-10 pb-16">

                {/* ── Header ── */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{role}</h1>
                        <p className="text-white/60 text-sm mt-1">
                            select your job role related to{' '}
                            <span className="text-[#4ade80] font-medium">{jobRoleTag}</span>
                        </p>
                    </div>

                    {/* Search bar */}
                    <div className="flex items-center gap-2 bg-white/6 border border-white/15 rounded-xl px-3 py-2 focus-within:border-violet-400/50 focus-within:bg-white/8 transition-all duration-200 w-full sm:w-72">
                        <svg className="w-4 h-4 text-white/35 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                        </svg>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearchKey}
                            placeholder="Search jobs, roles, skills…"
                            className="flex-1 bg-transparent text-white/80 text-sm placeholder-white/30 outline-none min-w-0"
                        />
                        <button
                            onClick={handleSearch}
                            disabled={!searchQuery.trim()}
                            className="shrink-0 px-3 py-1 rounded-lg bg-violet-600/80 hover:bg-violet-500/90 disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed text-white text-xs font-semibold transition-all duration-150"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* ── Layout: stacks on mobile, side-by-side on lg ── */}
                <div className="flex flex-col lg:flex-row gap-6 items-start">

                    {/* ── Left: job cards ── */}
                    <div className="flex-1 min-w-0 w-full">
                        <p className="text-white/70 text-sm font-medium mb-4">
                            Top jobs/intern available right now
                        </p>

                        {/* 1-col on mobile, 2-col on sm+ */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {jobsLoading
                                ? Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="h-19 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
                                ))
                                : visibleJobs.map((job) => (
                                    <JobCard key={job.id} {...job} fromRecruiter={job.fromRecruiter} onClick={() => setSelectedJob(job)} />
                                ))
                            }
                        </div>

                        {/* Pagination */}
                        <PaginationDots total={totalPages} active={page} onSelect={setPage} />
                    </div>

                    {/* ── Right: Road Map ── */}
                    <div className="w-full lg:w-[320px] lg:shrink-0 bg-white/5 border border-white/10 rounded-2xl px-6 py-6">
                        <h2 className="text-2xl font-bold text-white leading-tight">Road Map for</h2>
                        <p className="text-white/50 text-xs mb-5 mt-0.5">apply these jobs</p>

                        {/* Skill tag rows with step arrows */}
                        <div className="flex flex-col">
                            {roadmapSkills.map((row, rowIdx) => (
                                <React.Fragment key={rowIdx}>
                                    {/* Step number + tags row */}
                                    <div className="flex items-center gap-3">
                                        {/* Step badge */}
                                        <div className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[0.6rem] font-bold select-none transition-all duration-200 ${
                                            row.every((skill) => completedSkills.has(skill))
                                                ? 'border-emerald-400/60 bg-emerald-500/25 text-emerald-300'
                                                : 'border-white/25 bg-white/10 text-white/60'
                                        }`}>
                                            {row.every((skill) => completedSkills.has(skill)) ? (
                                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : rowIdx + 1}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {row.map((skill, i) => (
                                                <RoadmapTag
                                                    key={i}
                                                    label={skill}
                                                    onClick={() => setSelectedSkill(skill)}
                                                    completed={completedSkills.has(skill)}
                                                    onToggleComplete={() => toggleSkillComplete(skill)}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Arrow between steps (not after the last row) */}
                                    {rowIdx < roadmapSkills.length - 1 && (
                                        <div className="flex items-center gap-3 my-1">
                                            {/* Align arrow under the step badge */}
                                            <div className="w-5 flex justify-center">
                                                <svg
                                                    className="w-3.5 h-4 text-white/30"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 5v14M5 15l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            {/* Dashed connector line */}
                                            <div className="flex-1 border-t border-dashed border-white/10" />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* CTA button */}
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={() => setShowRoleResources(true)}
                                className="bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-6 py-2.5 rounded-full hover:bg-violet-600/25 hover:border-violet-400/40 hover:text-white transition-all duration-200"
                            >
                                📚 View Learning Resources
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Job Detail Modal ── */}
            {selectedJob && (
                <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
            )}

            {/* ── Skill Resources Modal ── */}
            {selectedSkill && (
                <SkillResources skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
            )}

            {/* ── Role Resources Modal (opened by "View Learning Resources" button) ── */}
            {showRoleResources && (
                <RoleResources
                    role={role}
                    roadmapSkills={roadmapSkills}
                    onClose={() => setShowRoleResources(false)}
                />
            )}
        </div>
    );
}

export default JobsAndInterns;
