import React from 'react';

import frontendIcon from './assets/catorgories_icons/frontend-developer-icon.svg';
import backendIcon from './assets/catorgories_icons/backend-developer-icon.svg';
import devopsIcon from './assets/catorgories_icons/devops-engineer-icon.svg';
import androidIcon from './assets/catorgories_icons/android-developer-icon.svg';
import qaIcon from './assets/catorgories_icons/qa-engineer-icon.svg';
import aiAgentIcon from './assets/catorgories_icons/ai-agent-developer-icon.svg';
import iosIcon from './assets/catorgories_icons/ios-developer-icon.svg';
import architectIcon from './assets/catorgories_icons/software-architect-icon.svg';
import businessIcon from './assets/catorgories_icons/business-intelligence-icon.svg';

const roles = [
    {
        title: 'Frontend Developer',
        icon: <img src={frontendIcon} alt="Frontend Developer" className="w-13 h-13 object-contain" />,
    },
    {
        title: 'Backend Developer',
        icon: <img src={backendIcon} alt="Backend Developer" className="w-13 h-13 object-contain" />,
    },
    {
        title: 'DevOps Engineer',
        icon: <img src={devopsIcon} alt="DevOps Engineer" className="w-13 h-13 object-contain" />,
    },
    {
        title: 'Android Developer',
        icon: <img src={androidIcon} alt="Android Developer" className="w-13 h-13 object-contain" />,
    },
    {
        title: 'QA Engineer',
        icon: <img src={qaIcon} alt="QA Engineer" className="w-13 h-13 object-contain" />,
    },
    {
        title: 'AI Agent Developer',
        icon: <img src={aiAgentIcon} alt="AI Agent Developer" className="w-13 h-13 object-contain" />,
    },
    {
        title: 'iOS Developer',
        icon: <img src={iosIcon} alt="iOS Developer" className="w-13 h-13 object-contain" />,
    },
    {
        title: 'Software Architect',
        icon: <img src={architectIcon} alt="Software Architect" className="w-13 h-13 object-contain" />,
    },
    {
        title: 'Business Intelligence',
        icon: <img src={businessIcon} alt="Business Intelligence" className="w-13 h-13 object-contain" />,
    },
];

const Catogories = () => {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center px-6">
            <div className="w-[90%] max-w-275">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 place-items-center">
                    {roles.map((role, idx) => (
                        <div
                            key={idx}
                            className="w-full max-w-[320px] bg-white rounded-2xl px-6 py-4 flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        >
                            <div className="shrink-0 flex items-center justify-center">
                                {role.icon}
                            </div>
                            <h3 className="text-[#151a2a] font-bold text-[1.1rem] tracking-tight m-0">
                                {role.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Pagination / Slider Indicator */}
                <div className="flex justify-center items-center gap-2 mt-20">
                    <div className="w-8 h-2.5 bg-white rounded-full"></div>
                    <div className="w-2.5 h-2.5 border-2 border-white rounded-full opacity-60"></div>
                    <div className="w-2.5 h-2.5 border-2 border-white rounded-full opacity-60"></div>
                </div>
            </div>
        </div>
    );
};

export default Catogories;
