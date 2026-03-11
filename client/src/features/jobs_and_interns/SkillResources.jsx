import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { skillResources } from './dt_/rm.js';

// ── Badge colours per resource type ──────────────────────────────────────────
const TYPE_STYLES = {
    Course: 'bg-violet-600/30 text-violet-300 border border-violet-500/40',
    Video:  'bg-sky-600/30   text-sky-300   border border-sky-500/40',
    Docs:   'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40',
    Book:   'bg-amber-600/30 text-amber-300 border border-amber-500/40',
};

// ── Icons ─────────────────────────────────────────────────────────────────────
function ExternalIcon() {
    return (
        <svg className="w-3.5 h-3.5 ml-1 opacity-60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

function BookOpenIcon() {
    return (
        <svg className="w-4 h-4 mr-2 opacity-70 shrink-0 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    );
}

function LockIcon() {
    return (
        <svg className="w-4 h-4 mr-2 opacity-70 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    );
}

// ── Resource Row ───────────────────────────────────────────────────────────────
function ResourceRow({ item }) {
    const badgeStyle = TYPE_STYLES[item.type] || TYPE_STYLES.Course;
    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 px-4 py-3 rounded-xl bg-white/4 hover:bg-white/9 border border-white/10 hover:border-white/20 transition-all duration-150"
        >
            <span className={`mt-0.5 px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold uppercase tracking-wide shrink-0 ${badgeStyle}`}>
                {item.type}
            </span>
            <span className="flex-1 text-white/80 text-sm leading-snug group-hover:text-white transition-colors">
                {item.title}
            </span>
            <ExternalIcon />
        </a>
    );
}

// ── Main Modal ─────────────────────────────────────────────────────────────────
export default function SkillResources({ skill, onClose, zIndex = 50 }) {
    // Keyboard: Escape to close
    const handleKey = useCallback(
        (e) => { if (e.key === 'Escape') onClose?.(); },
        [onClose],
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKey);
        // Lock body scroll
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = prev;
        };
    }, [handleKey]);

    if (!skill) return null;

    const data = skillResources[skill];

    // Skill exists but no resource entry yet
    if (!data) {
        return createPortal(
            <div
                className="fixed inset-0 flex items-center justify-center p-4"
                style={{ zIndex, backdropFilter: 'blur(6px)', background: 'rgba(4,10,30,0.75)' }}
                onClick={onClose}
            >
                <div
                    className="relative w-full max-w-md rounded-2xl border border-white/15 bg-[#0b1225] p-8 text-center shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <CloseIcon />
                    </button>
                    <div className="text-4xl mb-4">🔍</div>
                    <h2 className="text-xl font-bold text-white mb-2">{skill}</h2>
                    <p className="text-white/50 text-sm">Resources for this skill are coming soon!</p>
                </div>
            </div>,
            document.body,
        );
    }

    const free = data.free ?? [];
    const paid = data.paid ?? [];

    return createPortal(
        <div
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ zIndex, backdropFilter: 'blur(6px)', background: 'rgba(4,10,30,0.78)' }}
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-xl max-h-[88vh] flex flex-col rounded-2xl border border-white/15 bg-[#0b1225] shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── Header ── */}
                <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-white/10 shrink-0">
                    <div>
                        <span className="inline-block px-3 py-0.5 rounded-full bg-violet-600/25 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-2 border border-violet-500/30">
                            Skill Resources
                        </span>
                        <h2 className="text-2xl font-bold text-white leading-tight">{skill}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="mt-1 p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all shrink-0"
                        aria-label="Close"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* ── Scrollable body ── */}
                <div className="overflow-y-auto flex-1 px-6 py-5 space-y-7 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

                    {/* Description */}
                    <p className="text-white/65 text-sm leading-relaxed">{data.description}</p>

                    {/* Free Resources */}
                    {free.length > 0 && (
                        <section>
                            <div className="flex items-center mb-3">
                                <BookOpenIcon />
                                <h3 className="text-sm font-semibold text-white/90 uppercase tracking-widest">
                                    Free Resources
                                </h3>
                                <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-600/20 text-emerald-400 text-[0.65rem] font-bold border border-emerald-500/30">
                                    {free.length}
                                </span>
                            </div>
                            <div className="space-y-2">
                                {free.map((item, i) => (
                                    <ResourceRow key={i} item={item} />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Paid Courses */}
                    {paid.length > 0 && (
                        <section>
                            <div className="flex items-center mb-3">
                                <LockIcon />
                                <h3 className="text-sm font-semibold text-white/90 uppercase tracking-widest">
                                    Paid Courses
                                </h3>
                                <span className="ml-2 px-2 py-0.5 rounded-full bg-amber-600/20 text-amber-400 text-[0.65rem] font-bold border border-amber-500/30">
                                    {paid.length}
                                </span>
                            </div>
                            <div className="space-y-2">
                                {paid.map((item, i) => (
                                    <ResourceRow key={i} item={item} />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Bottom padding */}
                    <div className="h-2" />
                </div>
            </div>
        </div>,
        document.body,
    );
}
