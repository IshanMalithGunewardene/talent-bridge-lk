import React from 'react';
import userProfileIcon from '../../features/auth/assets/user_profile.svg';

function Navbar({ onSignIn, session, loading, activePage = 'home', onNavigate }) {

    const navItems = [
        { label: 'Home', page: 'home' },
        { label: 'Jobs/Interns', page: 'jobs' },
        { label: 'About us', page: 'about' },
    ];

    return (
        <div className="flex justify-between items-center px-8 py-4 text-white">
            {/* Brand */}
            <div
                className="text-xl font-bold tracking-wide cursor-pointer select-none"
                onClick={() => onNavigate?.('home')}
            >
                Talentbridge LK
            </div>

            {/* Nav links + auth button */}
            <div className="flex gap-10 items-center">
                <ul className="flex gap-10 items-center text-[0.95rem] text-white/90">
                    {navItems.map(({ label, page }) => (
                        <li
                            key={page}
                            onClick={() => onNavigate?.(page)}
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

                {/* Don't render auth button until session state is resolved */}
                {!loading && (
                    session ? (
                        /* Logged-in state: profile icon → settings */
                        <button
                            onClick={() => onNavigate?.('settings')}
                            title="Account settings"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 flex items-center justify-center transition-all duration-200 overflow-hidden group"
                        >
                            <img
                                src={userProfileIcon}
                                alt="Profile"
                                className="w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity"
                            />
                        </button>
                    ) : (
                        /* Logged-out state: Sign in button */
                        <button
                            onClick={onSignIn}
                            className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300 shadow-md"
                        >
                            Sign in
                        </button>
                    )
                )}
            </div>
        </div>
    );
}

export default Navbar;
