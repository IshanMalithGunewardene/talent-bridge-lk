import React, { useEffect } from 'react';

const qaList = [
    {
        q: 'What is the purpose of Talentbridge LK ?',
        a: 'Talentbridge LK connects top professionals and freelancers with businesses across Sri Lanka. Our goal is to bridge the gap between talented individuals and organizations seeking specialized skills, fostering a thriving professional community.'
    },
    {
        q: 'How do I apply for opportunities?',
        a: 'Simply create an account, complete your professional profile with your skills and experience, and browse the available job or project listings. You can apply directly through the platform with just a few clicks.'
    },
    {
        q: 'Is Talentbridge LK free for job seekers?',
        a: 'Yes, creating a profile and applying for opportunities is completely free for job seekers and freelancers. We only charge a small service fee to employers for posting premium listings.'
    },
    {
        q: 'How can employers post a job?',
        a: 'Employers can register for a company account, verify their business details, and navigate to the "Post a Job" section. We offer various packages depending on the visibility and duration you need for your listing.'
    }
];

export default function FaqAnswers({ onBack }) {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-[#041A1C] overflow-y-auto w-screen min-h-screen">
            {/* Background elements matched to Hero theme */}
            <div className="absolute top-0 left-1/2 -translate-x-[60%] -translate-y-[55%]
                            w-162.5 h-162.5 bg-purple-700 rounded-full blur-[160px] opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-[35%] -translate-y-[40%]
                            w-150 h-150 bg-blue-700 rounded-full blur-[160px] opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/70 hover:text-white mb-10 transition-colors w-max cursor-pointer text-lg"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </button>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
                    Frequently Asked Questions
                </h1>

                <div className="space-y-6">
                    {qaList.map((item, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                {item.q}
                            </h3>
                            <p className="text-white/80 leading-relaxed text-lg">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
