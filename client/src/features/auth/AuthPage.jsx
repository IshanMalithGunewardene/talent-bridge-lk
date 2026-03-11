import { useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../../lib/supabaseClient';

/**
 * AuthPage — two-step auth overlay.
 * Step 1: choose account type (Job Seeker / Recruiter).
 * Step 2: Supabase Auth UI (email or OAuth).
 * After sign-in, upserts a row in the `profiles` table.
 *
 * @param {function} onClose
 */
function AuthPage({ onClose }) {
    // null = not chosen yet, 'seeker' | 'recruiter'
    const [accountType, setAccountType] = useState(null);

    // Once the user selects a type, save it to localStorage so the
    // auth callback can pick it up after OAuth redirect.
    const choose = (type) => {
        localStorage.setItem('tb_pending_account_type', type);
        setAccountType(type);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-md bg-[#071f22] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

                {/* Close */}
                {onClose && (
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/50 hover:text-white transition"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}

                {/* ── Step 1: Role selection ── */}
                {!accountType ? (
                    <div className="p-8">
                        <h2 className="text-white text-2xl font-bold text-center mb-1">Join Talent Bridge LK</h2>
                        <p className="text-white/45 text-sm text-center mb-8">Choose how you want to use the platform</p>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Job Seeker */}
                            <button
                                onClick={() => choose('seeker')}
                                className="group flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-white/10 bg-white/5 hover:border-purple-400/60 hover:bg-purple-500/10 transition-all duration-200"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center group-hover:bg-purple-500/35 transition-colors">
                                    <svg className="w-7 h-7 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-semibold text-sm">Job Seeker</p>
                                    <p className="text-white/40 text-xs mt-1 leading-relaxed">Find internships & jobs</p>
                                </div>
                            </button>

                            {/* Recruiter */}
                            <button
                                onClick={() => choose('recruiter')}
                                className="group flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-white/10 bg-white/5 hover:border-emerald-400/60 hover:bg-emerald-500/10 transition-all duration-200"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center group-hover:bg-emerald-500/35 transition-colors">
                                    <svg className="w-7 h-7 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-semibold text-sm">Recruiter</p>
                                    <p className="text-white/40 text-xs mt-1 leading-relaxed">Post jobs & find talent</p>
                                </div>
                            </button>
                        </div>
                    </div>
                ) : (
                    /* ── Step 2: Supabase Auth UI ── */
                    <div className="p-6">
                        {/* Back + label */}
                        <div className="flex items-center gap-3 mb-5">
                            <button
                                onClick={() => setAccountType(null)}
                                className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                    <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                                accountType === 'recruiter'
                                    ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300'
                                    : 'bg-purple-500/15 border-purple-400/30 text-purple-300'
                            }`}>
                                {accountType === 'recruiter' ? '💼 Recruiter' : '🔍 Job Seeker'}
                            </span>
                        </div>

                        <Auth
                            supabaseClient={supabase}
                            appearance={{
                                theme: ThemeSupa,
                                variables: {
                                    default: {
                                        colors: {
                                            brand: accountType === 'recruiter' ? '#059669' : '#7c3aed',
                                            brandAccent: accountType === 'recruiter' ? '#047857' : '#6d28d9',
                                        },
                                    },
                                },
                            }}
                            providers={['google', 'github']}
                            redirectTo={`${window.location.origin}`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default AuthPage;
