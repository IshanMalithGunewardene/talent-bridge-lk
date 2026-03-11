import React, { useState } from "react";
import { createPortal } from "react-dom";
import nimalAvatar from "./assets/feedback_avatars/nimal.svg";
import sithumiAvatar from "./assets/feedback_avatars/sithumi.svg";
import kasunAvatar from "./assets/feedback_avatars/kasun.svg";
import tharushiAvatar from "./assets/feedback_avatars/tharushi.svg";
import ravinduAvatar from "./assets/feedback_avatars/ravindu.svg";

const initialTestimonials = [
  {
    name: "Nimal Perera",
    review:
      "Talent Bridge LK helped me secure my first internship within two months. The roadmap guidance and curated listings saved me hours of searching. It’s perfect for Sri Lankan undergraduates looking to kickstart their careers.",
    rating: 5,
    avatar: nimalAvatar,
  },
  {
    name: "Sithumi Fernando",
    review:
      "I love how structured and beginner-friendly this platform is. The career paths are clearly explained, and the internship updates are very relevant. Highly useful for IT students!",
    rating: 5,
    avatar: sithumiAvatar,
  },
  {
    name: "Kasun Wijesinghe",
    review:
      "Before using Talent Bridge LK, I was confused about what skills to learn. The step-by-step roadmap made everything clear. Now I feel confident about my career direction.",
    rating: 4,
    avatar: kasunAvatar,
  },
  {
    name: "Tharushi Silva",
    review:
      "The internship alerts are timely and trustworthy. I applied through this platform and got shortlisted quickly. It’s very helpful for freshers with no prior experience.",
    rating: 5,
    avatar: tharushiAvatar,
  },
  {
    name: "Ravindu Jayasinghe",
    review:
      "Simple design, clear guidance, and practical opportunities. This website truly bridges the gap between students and companies in Sri Lanka.",
    rating: 5,
    avatar: ravinduAvatar,
  },
];

function Feedback() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", review: "", rating: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.review) return;
    setTestimonials([{ ...formData }, ...testimonials]);
    setIsFormOpen(false);
    setFormData({ name: "", review: "", rating: 5 });
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-gray-700 via-purple-700 to-blue-700 px-6 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4 text-center">
        Feed Backs on Talent bridge LK
      </h1>
      <p className="text-gray-300 mb-6 text-center max-w-lg">
        Send your feed back what you thought on us
      </p>

      <button
        onClick={() => setIsFormOpen(true)}
        className="px-8 py-3 mb-12 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-900/50 cursor-pointer flex items-center gap-2 relative z-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Feedback
      </button>

      {/* Feedback Form Modal rendered in a portal so it escapes parent stacking context */}
      {isFormOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 w-screen h-screen">
          <div className="bg-[#0b1120] border border-white/10 p-8 rounded-2xl w-full max-w-md shadow-2xl relative">
            <h2 className="text-2xl font-bold text-white mb-6">Submit Feedback</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Your Review</label>
                <textarea 
                  value={formData.review}
                  onChange={(e) => setFormData({...formData, review: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
                  placeholder="What did you think about the platform?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className={`text-3xl cursor-pointer hover:scale-110 transition-transform ${formData.rating >= star ? 'text-yellow-400' : 'text-gray-600'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-5 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors cursor-pointer"
                >
                  Post Feedback
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      <div className="w-full py-16 bg-linear-to-br from-teal-700 via-blue-700 to-purple-700 overflow-hidden">
      
      {/* Scrolling Container */}
      <div className="flex w-max animate-scroll gap-8 px-8">
        
        {/* Duplicate testimonials for seamless loop */}
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="min-w-[350px] max-w-[350px] p-8 rounded-2xl 
                       backdrop-blur-lg bg-white/10 border border-white/20 
                       text-white shadow-lg"
          >
            {/* Avatar */}
            {item.avatar ? (
              <img
                src={item.avatar}
                alt={item.name}
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover bg-white/20 border-2 border-white/30"
              />
            ) : (
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/30 flex items-center justify-center text-2xl font-bold text-white">
                {item.name.charAt(0)}
              </div>
            )}

            {/* Name */}
            <h3 className="text-lg font-semibold text-center mb-4">
              {item.name}
            </h3>

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

      {/* Custom Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 80s linear infinite;
          }
        `}
      </style>
    </div>
    </section>
  );
}

export default Feedback;