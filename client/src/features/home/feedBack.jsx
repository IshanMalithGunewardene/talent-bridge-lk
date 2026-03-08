import React from "react";

import nimal from "../../assets/users/nimal.jpg";
import sithumi from "../../assets/users/sithumi.jpg";
import nuwan from "../../assets/users/nuwan.jpg";
import tharushi from "../../assets/users/tharushi.jpg";
import ravindu from "../../assets/users/ravindu.jpg";

function Feedback() {

const testimonials = [
  {
    name: "Nimal Perera",
    image: nimal,
    review:
      "Talent Bridge LK helped me secure my first internship within two months. The roadmap guidance and curated listings saved me hours of searching.",
    rating: 5,
  },
  {
    name: "Sithumi Fernando",
    image: sithumi,
    review:
      "I love how structured and beginner-friendly this platform is. The career paths are clearly explained and very helpful for IT students.",
    rating: 5,
  },
  {
    name: "Nuwan Kumara",
    image: nuwan,
    review:
      "Before using Talent Bridge LK, I was confused about what skills to learn. The roadmap made everything clear.",
    rating: 4,
  },
  {
    name: "Tharushi Silva",
    image: tharushi,
    review:
      "The internship alerts are timely and trustworthy. I applied through this platform and got shortlisted quickly.",
    rating: 5,
  },
  {
    name: "Ravindu Jayasinghe",
    image: ravindu,
    review:
      "Simple design, clear guidance and practical opportunities. This platform bridges students and companies in Sri Lanka.",
    rating: 5,
  },
];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 px-6">

      <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
        Feedback on Talent Bridge LK
      </h1>

      <p className="text-gray-300 mb-16 text-center">
        Send your feedback about what you think of us
      </p>

      <div className="w-full py-16 bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900 overflow-hidden">

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
              <div className="flex justify-center gap-1 text-xl">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-[#FFD700] drop-shadow-md">
                    ★
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

      <button
        className="px-10 py-4 mt-10 text-white font-medium rounded-lg
        border border-cyan-400
        bg-gradient-to-r from-slate-800 to-blue-900
        shadow-[0_0_10px_rgba(34,211,238,0.6)]
        hover:scale-110
        transition duration-300"
      >
        Add Feedback
      </button>

    </section>
  );
}

export default Feedback;