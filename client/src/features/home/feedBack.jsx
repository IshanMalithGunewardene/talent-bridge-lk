import React from 'react';
import { testimonials } from '../../assets/assests';
function Feedback() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Feed Backs on Talent Bridge LK
            </h1>

            <p className="text-gray-300 mb-16 text-center">
                Send your feedback about what you think of us
            </p>

            <div className="w-full py-16 bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900 overflow-hidden">
                {/* Scrolling Container */}
                <div className="flex w-max animate-scroll gap-8 px-8">
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[350px] max-w-[350px] p-8 rounded-2xl 
              backdrop-blur-lg bg-white/10 border border-white/20 
              text-white shadow-lg"
                        >
                            {/* Profile Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-white shadow-lg"
                            />

                            {/* Name */}
                            <h3 className="text-lg font-semibold text-center mb-4">{item.name}</h3>

                            {/* Review */}
                            <p className="text-sm leading-relaxed text-center mb-6">
                                {item.review}
                            </p>

                            {/* Stars */}
                            <div className="flex justify-center gap-1 text-yellow-400 text-xl">
                                {[...Array(item.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Feedback;
