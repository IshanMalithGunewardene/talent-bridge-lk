import React, { useState } from 'react';
import userProfileIcon from '../../features/auth/assets/user_profile.svg';

function Navbar({ onSignIn, session, loading, activePage = 'home', onNavigate, userRole }) {
    const [menuOpen, setMenuOpen] = useState(false);

    // Recruiters get a Dashboard link instead of Jobs/Interns
    const navItems = userRole === 'recruiter'
        ? [
            { label: 'Home', page: 'home' },
            { label: 'Dashboard', page: 'recruiter' },
            { label: 'About us', page: 'about' },
          ]
        : [
            { label: 'Home', page: 'home' },
            { label: 'Jobs/Interns', page: 'jobs' },
            { label: 'About us', page: 'about' },
          ];

    const handleNav = (page) => {
        onNavigate?.(page);
        setMenuOpen(false);
    };

    return (
        <div className="text-white">
            {/* ── Desktop / top bar ── */}
            <div className="flex justify-between items-center px-4 sm:px-8 py-4">
                {/* Brand */}
                <div
                    className="text-xl font-bold tracking-wide cursor-pointer select-none"
                    onClick={() => handleNav('home')}
                >
                    Talentbridge LK
                </div>

                {/* Desktop nav links + auth */}
                <div className="hidden md:flex gap-10 items-center">
                    <ul className="flex gap-10 items-center text-[0.95rem] text-white/90">
                        {navItems.map(({ label, page }) => (
                            <li
                                key={page}
                                onClick={() => handleNav(page)}
                                className={`cursor-pointer transition-colors ${
                                    activePage === page
                                        ? 'text-white font-semibold'
                                        : 'text-white/70 hover:text-white'
                                }`}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>

                    {!loading && (
                        session ? (
                            <button
                                onClick={() => handleNav('settings')}
                                title="Account settings"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 flex items-center justify-center transition-all duration-200 overflow-hidden group"
                            >
                                <img src={userProfileIcon} alt="Profile" className="w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ) : (
                            <button
                                onClick={onSignIn}
                                className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300 shadow-md"
                            >
                                Sign in
                            </button>
                        )
                    )}
                </div>

                {/* Mobile: auth icon + hamburger */}
                <div className="flex md:hidden items-center gap-3">
                    {!loading && (
                        session ? (
                            <button
                                onClick={() => handleNav('settings')}
                                className="w-8 h-8 rounded-full bg-white/10 border border-white/25 flex items-center justify-center"
                            >
                                <img src={userProfileIcon} alt="Profile" className="w-5 h-5 opacity-75" />
                            </button>
                        ) : (
                            <button
                                onClick={onSignIn}
                                className="bg-white text-black px-4 py-1.5 rounded-full font-medium text-xs hover:bg-gray-100 transition-all"
                            >
                                Sign in
                            </button>
                        )
                    )}
                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen((o) => !o)}
                        className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                        aria-label="Toggle menu"
                    >
                        <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* ── Mobile dropdown menu ── */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-1">
                    {navItems.map(({ label, page }) => (
                        <button
                            key={page}
                            onClick={() => handleNav(page)}
                            className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                                activePage === page
                                    ? 'bg-white/15 text-white'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Navbar;
