import React from "react";

function Feedback() {
  const testimonials = [
    {
      name: "Nimal Perera",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
      review:
        "Talent Bridge LK helped me secure my first internship within two months. The roadmap guidance and curated listings saved me hours of searching. It’s perfect for Sri Lankan undergraduates looking to kickstart their careers.",
      rating: 5,
    },
    {
      name: "Sithumi Fernando",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      review:
        "I love how structured and beginner-friendly this platform is. The career paths are clearly explained, and the internship updates are very relevant. Highly useful for IT students!",
      rating: 5,
    },
    {
      name: "Kasun Wijesinghe",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      review:
        "Before using Talent Bridge LK, I was confused about what skills to learn. The step-by-step roadmap made everything clear. Now I feel confident about my career direction.",
      rating: 4,
    },
    {
      name: "Tharusha Silva",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80",
      review:
        "The internship alerts are timely and trustworthy. I applied through this platform and got shortlisted quickly. It’s very helpful for freshers with no prior experience.",
      rating: 5,
    },
    {
      name: "Ravindu Jayasinghe",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
      review:
        "Simple design, clear guidance, and practical opportunities. This website truly bridges the gap between students and companies in Sri Lanka.",
      rating: 5,
    },
  ];

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

        {/* Animation */}
        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 80s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
          `}
        </style>

      </div>
    </section>
  );
}

export default Feedback;