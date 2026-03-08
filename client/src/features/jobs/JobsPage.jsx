import { Link } from 'react-router-dom';

const dummyJobs = [
  {
    id: '1',
    title: 'Front-end Developer Intern',
    company: 'AT Digital',
    location: 'Sri Lanka',
    type: 'Full‑time',
  },
  // duplicate a few to fill the grid
  { id: '2', title: 'Front-end Developer Intern', company: 'AT Digital', location: 'Sri Lanka', type: 'Full‑time' },
  { id: '3', title: 'Front-end Developer Intern', company: 'AT Digital', location: 'Sri Lanka', type: 'Full‑time' },
  { id: '4', title: 'Front-end Developer Intern', company: 'AT Digital', location: 'Sri Lanka', type: 'Full‑time' },
  { id: '5', title: 'Front-end Developer Intern', company: 'AT Digital', location: 'Sri Lanka', type: 'Full‑time' },
  { id: '6', title: 'Front-end Developer Intern', company: 'AT Digital', location: 'Sri Lanka', type: 'Full‑time' },
];

function JobsPage() {
  return (
    <div className="relative w-[90vw] mx-auto">
      {/* gradient background like home */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute w-[700px] h-[700px] bg-purple-700 rounded-full blur-[180px] -left-32 top-10" />
        <div className="absolute w-[700px] h-[700px] bg-blue-700 rounded-full blur-[180px] right-0 bottom-10" />
      </div>

      <header className="mb-10">
        <h1 className="text-3xl font-semibold mb-2">Frontend Developer</h1>
        <p className="text-slate-200">
          select your job role related to <span className="text-cyan-300 font-medium">React Jobs</span>
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* left: job cards grid */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-slate-300 mb-2">
            Top jobs/intern available right now
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dummyJobs.map((job) => (
              <Link
                key={job.id}
                to={`/jobs/${job.id}`}
                className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur hover:bg-white/10 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                    {/* simple briefcase icon */}
                    <span className="text-2xl">💼</span>
                  </div>
                  <span className="text-xs text-slate-300">{job.type}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                <p className="text-sm text-slate-300">
                  {job.location} &nbsp;via&nbsp; {job.company}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* right: roadmap box */}
        <aside className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur">
          <h2 className="text-xl font-semibold mb-2">
            Road Map for
          </h2>
          <p className="text-sm text-slate-300 mb-4">
            apply these jobs
          </p>

          <div className="flex flex-wrap gap-2 text-xs">
            {[
              'html',
              'css',
              'Javascript',
              'Responsive design',
              'React',
              'project',
              'Git',
              'Tailwind',
              'Bootstrap',
              'Redux',
              'apply for Internships',
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-100"
              >
                {item}
              </span>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}

export default JobsPage;
