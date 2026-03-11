import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import userProfileIcon from './assets/user_profile.svg';

const LANGUAGES = [
    { code: 'en', label: 'English',  native: 'English' },
    { code: 'si', label: 'Sinhala',  native: 'සිංහල' },
    { code: 'ta', label: 'Tamil',    native: 'தமிழ்' },
];

export default function UserSettings({ session, onNavigate }) {
    const [signingOut, setSigningOut]       = useState(false);
    const [language, setLanguage]           = useState('en');
    const [notifs, setNotifs]               = useState({
        newJobs:      true,
        internships:  true,
        appUpdates:   false,
        newsletter:   false,
    });

    const email       = session?.user?.email ?? '';
    const displayName = session?.user?.user_metadata?.full_name
        ?? session?.user?.user_metadata?.name
        ?? email.split('@')[0];
    const joinedAt    = session?.user?.created_at
        ? new Date(session.user.created_at).toLocaleDateString('en-LK', { year: 'numeric', month: 'long', day: 'numeric' })
        : null;

    const handleSignOut = async () => {
        setSigningOut(true);
        await supabase.auth.signOut();
        onNavigate?.('home');
    };

    const toggleNotif = (key) =>
        setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <div className="min-h-screen w-screen overflow-x-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[#041A1C] -z-10" />
            <div className="absolute top-1/3 left-1/4 w-125 h-125 bg-purple-700 rounded-full blur-[160px] opacity-35 pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-2/3 w-100 h-100 bg-blue-700 rounded-full blur-[160px] opacity-30 pointer-events-none -z-10" />

            <div className="w-[90vw] max-w-2xl mx-auto pt-12 pb-20">

                {/* Back */}
                <button
                    onClick={() => onNavigate?.('home')}
                    className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-10 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                </button>

                {/* ── Profile card ── */}
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                    {/* Banner */}
                    <div className="h-28 bg-linear-to-r from-purple-800/60 via-blue-800/50 to-purple-800/60" />

                    {/* Avatar + name */}
                    <div className="px-4 sm:px-8 pb-8">
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12 mb-6">
                            {/* Avatar */}
                            <div className="w-24 h-24 rounded-full bg-[#0b1225] border-4 border-[#041A1C] flex items-center justify-center shadow-xl overflow-hidden">
                                <img src={userProfileIcon} alt="Profile" className="w-16 h-16 opacity-85" />
                            </div>
                            {/* Sign out button in card */}
                            <button
                                onClick={handleSignOut}
                                disabled={signingOut}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:border-red-400/50 text-sm font-medium transition-all duration-200 disabled:opacity-50"
                            >
                                {signingOut ? (
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                                    </svg>
                                )}
                                {signingOut ? 'Signing out…' : 'Sign out'}
                            </button>
                        </div>

                        <h1 className="text-white text-2xl font-bold leading-tight capitalize">{displayName}</h1>
                        <p className="text-white/45 text-sm mt-1">{email}</p>
                        {joinedAt && <p className="text-white/30 text-xs mt-1">Member since {joinedAt}</p>}
                    </div>
                </div>

                {/* ── Language ── */}
                <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
                    <div className="flex items-center gap-2 mb-4">
                        {/* Globe icon */}
                        <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
                        </svg>
                        <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Language</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {LANGUAGES.map(({ code, label, native }) => (
                            <button
                                key={code}
                                onClick={() => setLanguage(code)}
                                className={`flex flex-col items-center gap-1 py-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                                    language === code
                                        ? 'bg-violet-600/30 border-violet-400/50 text-white shadow-lg shadow-violet-900/30'
                                        : 'bg-white/4 border-white/10 text-white/55 hover:bg-white/8 hover:text-white/80 hover:border-white/20'
                                }`}
                            >
                                <span className="text-xl leading-none">
                                    {code === 'en' ? '🇬🇧' : code === 'si' ? '🇱🇰' : '🇱🇰'}
                                </span>
                                <span className="font-semibold">{label}</span>
                                <span className={`text-[0.7rem] ${language === code ? 'text-violet-300' : 'text-white/35'}`}>
                                    {native}
                                </span>
                            </button>
                        ))}
                    </div>
                    {language !== 'en' && (
                        <p className="mt-3 text-white/30 text-xs text-center">
                            Full translation coming soon — currently displaying in English
                        </p>
                    )}
                </div>

                {/* ── Notifications ── */}
                <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
                    <div className="flex items-center gap-2 mb-4">
                        {/* Bell icon */}
                        <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Notifications</p>
                    </div>
                    <div className="space-y-1">
                        <NotifRow
                            label="New job listings"
                            description="Get notified when new jobs match your profile"
                            enabled={notifs.newJobs}
                            onToggle={() => toggleNotif('newJobs')}
                        />
                        <NotifRow
                            label="New internships"
                            description="Alerts for fresh internship openings"
                            enabled={notifs.internships}
                            onToggle={() => toggleNotif('internships')}
                        />
                        <NotifRow
                            label="App updates"
                            description="Platform news and feature announcements"
                            enabled={notifs.appUpdates}
                            onToggle={() => toggleNotif('appUpdates')}
                        />
                        <NotifRow
                            label="Newsletter"
                            description="Weekly digest of top opportunities"
                            enabled={notifs.newsletter}
                            onToggle={() => toggleNotif('newsletter')}
                            last
                        />
                    </div>
                </div>

                {/* ── Session / Sign out ── */}
                <div className="mt-6 bg-red-500/5 border border-red-500/20 rounded-2xl px-6 py-5">
                    <p className="text-red-400/70 text-xs uppercase tracking-widest font-semibold mb-4">Session</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                            <p className="text-white/70 text-sm font-medium">Sign out of Talentbridge LK</p>
                            <p className="text-white/35 text-xs mt-0.5">You will be returned to the home page</p>
                        </div>
                        <button
                            onClick={handleSignOut}
                            disabled={signingOut}
                            className="px-5 py-2 rounded-xl bg-red-600/20 hover:bg-red-600/35 border border-red-500/30 text-red-400 text-sm font-medium transition-all duration-200 disabled:opacity-50"
                        >
                            {signingOut ? 'Signing out…' : 'Sign out'}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

// ── Notification row with toggle ──────────────────────────────────────────────
function NotifRow({ label, description, enabled, onToggle, last = false }) {
    return (
        <div className={`flex items-center justify-between gap-4 py-3.5 ${!last ? 'border-b border-white/8' : ''}`}>
            <div className="min-w-0">
                <p className="text-white/75 text-sm font-medium">{label}</p>
                <p className="text-white/35 text-xs mt-0.5">{description}</p>
            </div>
            {/* Toggle */}
            <button
                onClick={onToggle}
                aria-pressed={enabled}
                className={`relative shrink-0 w-11 h-6 rounded-full border transition-all duration-250 focus:outline-none ${
                    enabled
                        ? 'bg-violet-600 border-violet-500 shadow-md shadow-violet-900/40'
                        : 'bg-white/10 border-white/20'
                }`}
            >
                <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-250 ${
                        enabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
            </button>
        </div>
    );
}
