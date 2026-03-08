import { useParams, Link } from 'react-router-dom';

function JobDetailsPage() {
  const { id } = useParams();

  // In real app, fetch by id. For now use static content that matches your Figma.
  return (
    <div className="relative flex items-center justify-center px-4">
      {/* background blur */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute w-[900px] h-[900px] bg-purple-700 rounded-full blur-[220px] -left-40 top-0" />
        <div className="absolute w-[900px] h-[900px] bg-blue-700 rounded-full blur-[220px] right-0 bottom-0" />
      </div>

      <div className="max-w-4xl w-full rounded-3xl bg-white/5 border border-white/15 p-10 backdrop-blur-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          FRONT-END DEVELOPER
          <span className="block text-emerald-300 text-2xl mt-1">(Sri Lanka)</span>
        </h1>

        <p className="text-slate-100 mb-6 max-w-3xl">
          Seeking a creative Front-End Developer in Sri Lanka to build dynamic web applications
          using modern frameworks like React or Vue; collaborate with design teams and bring
          innovative web experiences to life.
        </p>

        <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-sm mb-6">
          frontend developer
        </span>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="font-semibold text-lg mb-2">Job Details</h2>
            <ul className="space-y-1 text-sm text-slate-100">
              <li>• Location: Colombo with remote options</li>
              <li>• 3+ years experience</li>
              <li>• React/Vue proficiency</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Benefits</h2>
            <ul className="space-y-1 text-sm text-slate-100">
              <li>• Competitive salary</li>
              <li>• Flexible hours</li>
              <li>• Health insurance</li>
              <li>• Creative work environment</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold mb-2">Key Skills</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {['React', 'Vue.js', 'CSS3', 'JavaScript', 'HTML5', 'Git'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-slate-900/60 border border-white/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="text-slate-200">
            Company: <span className="font-semibold">VueTech CSS3 Sri Lanka</span>
          </p>

          <a
            href="#"
            className="px-4 py-2 rounded-full bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition"
          >
            Apply Now
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-400">Job ID (demo): {id}</p>

        <div className="mt-6">
          <Link to="/jobs" className="text-emerald-300 text-sm underline">
            ← Back to all jobs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
