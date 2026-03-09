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
        <div className=" w-full min-h-screen ">
            <div className="relative overflow-hidden rounded-2xl">
                {/* background */}
                <div className="absolute inset-0 bg-linear-to-r from-[#0b0f1a] via-[#2a0b3a] to-[#0b2a6a]" />
                <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
                <div className="absolute -left-24 top-1/2 h-90 w-90 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -right-24 top-1/2 h-90 w-90 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

                {/* content */}
                <div className="relative mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-16 md:px-14">
                    {/* left */}
                    <div className="flex items-start">
                        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Need Help <span className="opacity-90">?</span>
                        </h2>
                    </div>

                    {/* right */}
                    <div className="md:justify-self-end w-full max-w-lg">
                        <h3 className="ttext-4xl font-semibold tracking-tight text-white md:text-5xl whitespace-nowrap">
                            Frequent Ask Questions
                        </h3>

                        <div className="mt-6 space-y-3">
                            {faqs.map((q, idx) => (
                                <button
                                    key={idx}
                                    className="group flex w-full items-center justify-between gap-4 rounded-xl px-2 py-2 text-left"
                                    type="button"
                                >
                                    <span className="text-base font-medium text-white/85 transition group-hover:text-white">
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
    );
}
