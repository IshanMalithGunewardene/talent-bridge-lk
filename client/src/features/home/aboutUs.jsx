import React from 'react';

// ── Team members ──────────────────────────────────────────────────────────────
const team = [
    {
        name: 'R.R.N.K. Munasinghe',
        role: 'Team Member',
        bio: 'Dedicated to building innovative solutions that connect Sri Lankan IT undergraduates with the right career opportunities.',
        initials: 'RM',
        gradient: 'from-purple-600 to-blue-600',
    },
    {
        name: 'S.D.I.M. Gunawardhana',
        role: 'Team Member',
        bio: 'Committed to crafting seamless user experiences and ensuring the platform delivers real value to every graduate who uses it.',
        initials: 'SG',
        gradient: 'from-pink-600 to-purple-600',
    },
    {
        name: 'M.R. Jayasinha',
        role: 'Team Member',
        bio: 'Focused on reliable backend systems and data pipelines that keep job listings accurate, timely, and accessible.',
        initials: 'MJ',
        gradient: 'from-teal-600 to-blue-600',
    },
    {
        name: 'K.A.S.S. Karunathilake',
        role: 'Team Member',
        bio: 'Works on curating quality internship and job content while maintaining strong relationships with Sri Lankan tech companies.',
        initials: 'KK',
        gradient: 'from-amber-500 to-pink-600',
    },
    {
        name: 'I.G.A.P. Lakthilina',
        role: 'Team Member',
        bio: 'Drives the vision of the platform forward, ensuring every feature aligns with the needs of Sri Lankan undergraduates.',
        initials: 'IL',
        gradient: 'from-green-600 to-teal-600',
    },
];

// ── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
    { value: '100+', label: 'Job & Intern Listings' },
    { value: '25+', label: 'Partner Companies' },
    { value: '9', label: 'Career Roadmaps' },
    { value: '2026', label: 'Founded' },
];

// ── Values ────────────────────────────────────────────────────────────────────
const values = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16.7.7M1 12h2m18 0h2M4.22 19.78l.7-.7M18.36 5.64l.7-.7" strokeLinecap="round" />
                <circle cx="12" cy="12" r="4" />
            </svg>
        ),
        title: 'Transparency',
        desc: 'Every listing is verified and links directly to the hiring company. No spam, no ghost listings.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
            </svg>
        ),
        title: 'Community First',
        desc: 'Built for Sri Lankan undergraduates. Every feature is designed around the real challenges fresh graduates face.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Actionable Guidance',
        desc: 'Roadmaps tell you exactly what to learn at each step so you can apply with confidence, not guesswork.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Trust & Safety',
        desc: 'Applications go directly via professional email. Your data is never sold or shared with third parties.',
    },
];

// ── About Us Page ─────────────────────────────────────────────────────────────
function AboutUs({ onNavigate }) {
    return (
        <div className="min-h-screen w-screen overflow-x-hidden relative text-white">

            {/* ── Background ── */}
            <div className="absolute inset-0 bg-[#041A1C] -z-10" />
            <div className="absolute top-0 left-1/4 w-150 h-150 bg-purple-700 rounded-full blur-[200px] opacity-30 pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-blue-700 rounded-full blur-[200px] opacity-25 pointer-events-none -z-10" />

            <div className="w-[92vw] sm:w-[88vw] mx-auto pb-24">

                {/* ── Hero ── */}
                <div className="flex flex-col items-center text-center pt-20 pb-16">
                    <span className="text-xs font-semibold tracking-widest uppercase text-purple-400 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-6">
                        About Talent Bridge LK
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
                        Bridging the gap between{' '}
                        <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            talent & opportunity
                        </span>{' '}
                        in Sri Lanka
                    </h1>
                    <p className="text-white/55 text-[1rem] leading-relaxed mt-6 max-w-2xl">
                        Talent Bridge LK was born out of frustration. Finding quality internships and entry-level
                        tech jobs in Sri Lanka was scattered, unreliable, and overwhelming. We built the platform
                        we wished existed when we were undergraduates.
                    </p>
                </div>

                {/* ── Stats strip ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {stats.map(({ value, label }) => (
                        <div key={label} className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl py-7 px-4 text-center">
                            <span className="text-3xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                {value}
                            </span>
                            <span className="text-white/50 text-sm mt-1">{label}</span>
                        </div>
                    ))}
                </div>

                {/* ── Mission ── */}
                <div className="flex flex-col lg:flex-row gap-10 items-center mb-24">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-white/55 leading-relaxed mb-4">
                            We want every Sri Lankan IT undergraduate to walk into their first internship or job
                            interview fully prepared — knowing exactly what skills to build, which companies are
                            hiring right now, and how to apply professionally.
                        </p>
                        <p className="text-white/55 leading-relaxed">
                            Talent Bridge LK aggregates real, time-sensitive listings from Sri Lankan tech companies,
                            pairs them with curated learning roadmaps per career path, and provides a clean,
                            distraction-free experience designed specifically for fresh graduates.
                        </p>
                    </div>

                    {/* Visual card */}
                    <div className="w-full lg:w-96 shrink-0 bg-white/5 border border-white/10 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                    <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13V7m0 0l6-3m-6 3 6 3m0 0 4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 16V4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-white font-semibold">What we cover</span>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Internship & entry-level job listings',
                                'Step-by-step career roadmaps',
                                'Skills required per role',
                                'Direct email application links',
                                'Deadline tracking',
                                'Company profiles',
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2.5 text-white/65 text-sm">
                                    <span className="text-[#4ade80] shrink-0">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── Values ── */}
                <div className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What we stand for</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {values.map(({ icon, title, desc }) => (
                            <div key={title} className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 rounded-2xl p-6 transition-all duration-200">
                                <div className="w-11 h-11 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 mb-4">
                                    {icon}
                                </div>
                                <h3 className="text-white font-semibold mb-2">{title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Team ── */}
                <div className="mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Meet the team</h2>
                    <p className="text-white/45 text-center text-sm mb-10">The people building a better career future for Sri Lankan graduates</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {team.map(({ name, role, bio, initials, gradient }) => (
                            <div key={name} className="flex flex-col bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-200 hover:bg-white/8">
                                {/* Avatar */}
                                <div className={`w-14 h-14 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg mb-4 shrink-0`}>
                                    {initials}
                                </div>
                                <p className="text-white font-semibold text-[0.95rem]">{name}</p>
                                <p className="text-purple-400 text-xs font-medium mt-0.5 mb-3">{role}</p>
                                <p className="text-white/50 text-sm leading-relaxed flex-1">{bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-3xl px-4 sm:px-8 py-10 sm:py-14">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to find your next opportunity?</h2>
                    <p className="text-white/50 max-w-md mb-8 text-sm leading-relaxed">
                        Explore hundreds of internships and entry-level jobs from top Sri Lankan tech companies,
                        all in one place.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => onNavigate?.('jobs')}
                            className="px-8 py-3 rounded-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-900/30"
                        >
                            Browse Jobs & Internships →
                        </button>
                        <button
                            onClick={() => onNavigate?.('home')}
                            className="px-8 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 text-white font-semibold text-sm transition-all duration-200"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutUs;
