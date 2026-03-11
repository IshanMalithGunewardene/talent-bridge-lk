import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

// Must match the keys in roleConfig inside jobs_and_interns.jsx
const ROLE_CATEGORIES = [
    'Frontend Developer',
    'Backend Developer',
    'DevOps Engineer',
    'Android Developer',
    'QA Engineer',
    'AI Agent Developer',
    'iOS Developer',
    'Software Architect',
    'Business Intelligence',
];

const EMPTY_FORM = {
    title: '',
    company: '',
    role_category: ROLE_CATEGORIES[0],
    type: 'Full-time',
    location: '',
    deadline: '',
    apply_email: '',
    about: '',
    requirements: '',   // newline-separated → array on save
    skills: '',         // comma-separated → array on save
};

// ── Small reusable input ──────────────────────────────────────────────────────
function Field({ label, hint, children }) {
    return (
        <div>
            <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-1.5">
                {label}
                {hint && <span className="ml-1.5 text-white/30 normal-case font-normal tracking-normal">{hint}</span>}
            </label>
            {children}
        </div>
    );
}

const inputCls = "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white/85 text-sm placeholder-white/25 focus:outline-none focus:border-emerald-400/50 focus:bg-white/8 transition-all";
const selectCls = "w-full bg-[#0e2a2e] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-400/50 transition-all appearance-none cursor-pointer";
const textareaCls = `${inputCls} resize-none`;

// ── Job posting card ──────────────────────────────────────────────────────────
function PostingCard({ job, onDelete }) {
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        if (!window.confirm('Delete this posting?')) return;
        setDeleting(true);
        await supabase.from('job_postings').delete().eq('id', job.id);
        onDelete(job.id);
    };

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5 flex items-start gap-4">
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                        <p className="text-white font-semibold text-[0.95rem]">{job.title}</p>
                        <p className="text-white/50 text-xs mt-0.5">{job.company} · {job.location}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 flex-wrap">
                        <span className="text-[0.7rem] px-2.5 py-1 rounded-full border border-emerald-400/25 bg-emerald-500/10 text-emerald-300 font-medium">
                            {job.role_category}
                        </span>
                        <span className="text-[0.7rem] px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-white/60 font-medium">
                            {job.type}
                        </span>
                    </div>
                </div>
                <p className="text-white/30 text-[0.7rem] mt-2">📅 Closes {job.deadline}</p>
            </div>
            <button
                onClick={handleDelete}
                disabled={deleting}
                className="shrink-0 w-8 h-8 rounded-full bg-red-500/10 hover:bg-red-500/25 border border-red-500/20 flex items-center justify-center text-red-400 hover:text-red-300 transition-all disabled:opacity-40"
            >
                {deleting ? (
                    <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                ) : (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                )}
            </button>
        </div>
    );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function RecruiterDashboard({ session }) {
    const [postings, setPostings] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const userId = session?.user?.id;

    // ── Fetch this recruiter's postings ──────────────────────────────────────
    useEffect(() => {
        if (!userId) return;
        supabase
            .from('job_postings')
            .select('*')
            .eq('recruiter_id', userId)
            .order('created_at', { ascending: false })
            .then(({ data }) => { setPostings(data ?? []); setLoadingPosts(false); });
    }, [userId]);

    const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

    // ── Submit new posting ────────────────────────────────────────────────────
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); setSuccess('');

        const required = ['title', 'company', 'location', 'deadline', 'apply_email'];
        const missing = required.filter((k) => !form[k].trim());
        if (missing.length) { setError(`Please fill in: ${missing.join(', ')}`); return; }

        setSaving(true);
        const { data, error: err } = await supabase
            .from('job_postings')
            .insert({
                recruiter_id: userId,
                title:         form.title.trim(),
                company:       form.company.trim(),
                role_category: form.role_category,
                type:          form.type,
                location:      form.location.trim(),
                deadline:      form.deadline.trim(),
                apply_email:   form.apply_email.trim(),
                about:         form.about.trim() || null,
                requirements:  form.requirements.trim()
                                   ? form.requirements.split('\n').map((s) => s.trim()).filter(Boolean)
                                   : [],
                skills:        form.skills.trim()
                                   ? form.skills.split(',').map((s) => s.trim()).filter(Boolean)
                                   : [],
            })
            .select()
            .single();

        setSaving(false);
        if (err) { setError(err.message); return; }
        setPostings((p) => [data, ...p]);
        setForm(EMPTY_FORM);
        setShowForm(false);
        setSuccess('Job posted successfully!');
        setTimeout(() => setSuccess(''), 4000);
    };

    const removePosting = (id) => setPostings((p) => p.filter((j) => j.id !== id));

    return (
        <div className="min-h-screen w-screen overflow-x-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[#041A1C] -z-10" />
            <div className="absolute top-1/3 left-1/4 w-125 h-125 bg-emerald-700 rounded-full blur-[180px] opacity-20 pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-blue-700 rounded-full blur-[180px] opacity-20 pointer-events-none -z-10" />

            <div className="w-[92vw] sm:w-[88vw] mx-auto pt-10 pb-20">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-white">Recruiter Dashboard</h1>
                        <p className="text-white/45 text-sm mt-1">
                            {session?.user?.user_metadata?.full_name ?? session?.user?.email} · Manage your job postings
                        </p>
                    </div>
                    <button
                        onClick={() => { setShowForm((v) => !v); setError(''); }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-900/30 shrink-0"
                    >
                        <svg className={`w-4 h-4 transition-transform duration-200 ${showForm ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        {showForm ? 'Cancel' : 'Post a Job'}
                    </button>
                </div>

                {/* Success banner */}
                {success && (
                    <div className="mb-6 px-4 py-3 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {success}
                    </div>
                )}

                {/* ── Post Job Form ── */}
                {showForm && (
                    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 space-y-5">
                        <h2 className="text-white font-bold text-lg mb-1">New Job Posting</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Field label="Job Title">
                                <input className={inputCls} value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="e.g. Frontend Developer Intern" />
                            </Field>
                            <Field label="Company">
                                <input className={inputCls} value={form.company} onChange={(e) => set('company', e.target.value)} placeholder="e.g. Acme Pvt Ltd" />
                            </Field>
                            <Field label="Role Category">
                                <div className="relative">
                                    <select className={selectCls} value={form.role_category} onChange={(e) => set('role_category', e.target.value)}>
                                        {ROLE_CATEGORIES.map((r) => <option key={r} value={r} className="bg-[#0e2a2e] text-white">{r}</option>)}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </Field>
                            <Field label="Job Type">
                                <div className="relative">
                                    <select className={selectCls} value={form.type} onChange={(e) => set('type', e.target.value)}>
                                        <option value="Full-time" className="bg-[#0e2a2e] text-white">Full-time</option>
                                        <option value="Part-time" className="bg-[#0e2a2e] text-white">Part-time</option>
                                        <option value="Internship" className="bg-[#0e2a2e] text-white">Internship</option>
                                        <option value="Contract" className="bg-[#0e2a2e] text-white">Contract</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </Field>
                            <Field label="Location">
                                <input className={inputCls} value={form.location} onChange={(e) => set('location', e.target.value)} placeholder="e.g. Colombo / Remote" />
                            </Field>
                            <Field label="Application Deadline">
                                <input className={inputCls} type="date" value={form.deadline} onChange={(e) => set('deadline', e.target.value)} />
                            </Field>
                            <Field label="Apply Email">
                                <input className={inputCls} type="email" value={form.apply_email} onChange={(e) => set('apply_email', e.target.value)} placeholder="careers@yourcompany.lk" />
                            </Field>
                            <Field label="Skills" hint="(comma-separated)">
                                <input className={inputCls} value={form.skills} onChange={(e) => set('skills', e.target.value)} placeholder="React, Node.js, Git" />
                            </Field>
                        </div>

                        <Field label="About Company" hint="(optional)">
                            <textarea className={textareaCls} rows={3} value={form.about} onChange={(e) => set('about', e.target.value)} placeholder="Brief description of your company..." />
                        </Field>

                        <Field label="Requirements" hint="(one per line)">
                            <textarea className={textareaCls} rows={4} value={form.requirements} onChange={(e) => set('requirements', e.target.value)} placeholder={"1+ year of React experience\nStrong CSS skills\nGood communication"} />
                        </Field>

                        {error && (
                            <p className="text-red-400 text-sm flex items-center gap-1.5">
                                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 8v4m0 4h.01"/></svg>
                                {error}
                            </p>
                        )}

                        <div className="flex gap-3 pt-1">
                            <button
                                type="submit"
                                disabled={saving}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-white/10 disabled:text-white/30 text-white text-sm font-semibold transition-all duration-200"
                            >
                                {saving ? (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                                        Posting…
                                    </>
                                ) : 'Publish Job'}
                            </button>
                            <button type="button" onClick={() => { setShowForm(false); setError(''); }} className="px-6 py-2.5 rounded-xl bg-white/8 hover:bg-white/15 text-white/70 hover:text-white text-sm font-medium transition-all">
                                Cancel
                            </button>
                        </div>
                    </form>
                )}

                {/* ── Posted Jobs List ── */}
                <div>
                    <h2 className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
                        Your Postings <span className="text-white/30 font-normal normal-case">({postings.length})</span>
                    </h2>

                    {loadingPosts ? (
                        <div className="flex items-center gap-3 py-10 text-white/30 text-sm">
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                            Loading…
                        </div>
                    ) : postings.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-white/40 font-medium">No postings yet</p>
                            <p className="text-white/25 text-sm mt-1">Click "Post a Job" to publish your first listing</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {postings.map((job) => (
                                <PostingCard key={job.id} job={job} onDelete={removePosting} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
