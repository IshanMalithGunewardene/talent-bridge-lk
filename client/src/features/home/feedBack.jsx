import React from "react";

function Feedback() {
    const testimonials = [
  {
    name: "Angel Kusuma",
    review:
      "This website is a game-changer for students and freshers looking for internships. The curated internship listings save time, and the clear roadmaps make skill-building straightforward. Highly recommended for anyone serious about career growth!",
    rating: 5,
  },
  {
    name: "Angel Kusuma",
    review:
      "This website is a game-changer for students and freshers looking for internships. The curated internship listings save time, and the clear roadmaps make skill-building straightforward. Highly recommended for anyone serious about career growth!",
    rating: 5,
  },
  {
    name: "Angel Kusuma",
    review:
      "This website is a game-changer for students and freshers looking for internships. The curated internship listings save time, and the clear roadmaps make skill-building straightforward. Highly recommended for anyone serious about career growth!",
    rating: 5,
  },
  {
    name: "Angel Kusuma",
    review:
      "The platform makes internship hunting easy and structured. Highly recommended for career-focused students.",
    rating: 5,
  },
  {
    name: "Angel Kusuma",
    review:
      "Clear roadmaps and curated opportunities save so much time. A must-use website for freshers.",
    rating: 5,
  },

];
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
        Feed Backs on Talent bridge LK
      </h1>
      <p className="text-gray-300 mb-30 text-center">
        Send your feed back what you thought on us
      </p>
      <div className="w-full py-16 bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900 overflow-hidden">
      
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
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/30"></div>

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