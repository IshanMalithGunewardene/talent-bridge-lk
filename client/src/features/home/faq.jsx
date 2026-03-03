import React from 'react';

const faqs = [
    'What is purpose of Talentbridge LK ?',
    'What is purpose of Talentbridge LK ?',
    'What is purpose of Talentbridge LK ?',
    'What is purpose of Talentbridge LK ?',
];

const ArrowCircle = () => (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 transition hover:bg-white/10">
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M9 18l6-6-6-6" />
        </svg>
    </span>
);

export default function HelpFaqSection() {
    return (
        <section className="w-full">
            <div className="mx-auto w-full max-w-6xl px-4">
                <div className="relative overflow-hidden rounded-2xl">
                    {/* background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f1a] via-[#2a0b3a] to-[#0b2a6a]" />
                    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
                    <div className="absolute -left-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute -right-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

                    {/* content */}
                    <div className="relative grid gap-10 px-8 py-10 md:grid-cols-2 md:gap-6 md:px-14 md:py-12">
                        {/* left */}
                        <div className="flex items-start">
                            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                                Need Help <span className="opacity-90">?</span>
                            </h2>
                        </div>

                        {/* right */}
                        <div>
                            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                                Frequent Ask Questions
                            </h3>

                            <div className="mt-6 space-y-4">
                                {faqs.map((q, idx) => (
                                    <button
                                        key={idx}
                                        className="group flex w-full items-center justify-between gap-4 rounded-xl px-2 py-2 text-left"
                                        type="button"
                                    >
                                        <span className="text-sm font-medium text-white/80 transition group-hover:text-white">
                                            {q}
                                        </span>
                                        <ArrowCircle />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
