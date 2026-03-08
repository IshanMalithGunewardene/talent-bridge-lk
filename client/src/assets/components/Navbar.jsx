import React from 'react';
import { supabase } from '../../lib/supabaseClient';

function Navbar({ onSignIn, session, loading }) {
    const handleSignOut = async () => {
        await supabase.auth.signOut();
    };

    return (
        <div className="flex justify-between items-center px-8 py-4 text-white">
            {/* Brand */}
            <div className="text-xl font-bold tracking-wide cursor-pointer select-none">
                Talentbridge LK
            </div>

            {/* Nav links + auth button */}
            <div className="flex gap-10 items-center">
                <ul className="flex gap-10 items-center text-[0.95rem] text-white/90">
                    <li className="hover:text-white cursor-pointer transition-colors">
                        Home
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors">
                        Jobs/Interns
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors">
                        About us
                    </li>
                </ul>

                {/* Don't render auth button until session state is resolved */}
                {!loading && (
                    session ? (
                        /* Logged-in state: avatar initial + Sign out */
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-sm font-semibold select-none">
                                {session.user?.email?.[0]?.toUpperCase() ?? '?'}
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm hover:bg-white/20 transition-all duration-200"
                            >
                                Sign out
                            </button>
                        </div>
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
