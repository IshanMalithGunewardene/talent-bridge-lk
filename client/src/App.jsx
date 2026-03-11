import { useState, useEffect, useRef } from 'react';
import Navbar from './assets/components/Navbar.jsx';
import Footer from './assets/components/Footer.jsx';
import Hero from './features/home/Hero.jsx';
import Feedback from './features/home/feedBack.jsx';
import HelpFaqSection from './features/home/faq.jsx';
import Catogories from './features/home/catogories.jsx';
import AuthPage from './features/auth/AuthPage.jsx';
import { useAuth } from './features/auth/useAuth.js';
import JobsAndInterns from './features/jobs_and_interns/jobs_and_interns.jsx';
import SearchResults from './features/home/searchResults.jsx';
import AboutUs from './features/home/aboutUs.jsx';
import UserSettings from './features/auth/userSettings.jsx';
import RecruiterDashboard from './features/recruiter/RecruiterDashboard.jsx';

function App() {
    const { session, loading, userRole } = useAuth();
    const [showAuth, setShowAuth] = useState(false);
    const [page, setPage] = useState('home');
    const [selectedRole, setSelectedRole] = useState('Frontend Developer');
    const [searchQuery, setSearchQuery] = useState('');
    const didAutoRedirect = useRef(false);

    const navigateToJobs = (role) => {
        setSelectedRole(role);
        setPage('jobs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navigateToSearch = (query) => {
        setSearchQuery(query);
        setPage('search');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Auto-close the auth overlay once the user successfully signs in
    useEffect(() => {
        if (session) setShowAuth(false);
    }, [session]);

    // Auto-redirect recruiters to their dashboard once after login
    useEffect(() => {
        if (userRole === 'recruiter' && page === 'home' && !didAutoRedirect.current) {
            didAutoRedirect.current = true;
            setPage('recruiter');
        }
    }, [userRole, page]);

    return (
        <div className="p-0 overflow-x-hidden">

            {/* ── Auth overlay — shown when Sign in is clicked and not yet authenticated ── */}
            {showAuth && !session && !loading && (
                <AuthPage onClose={() => setShowAuth(false)} />
            )}

            {page === 'settings' ? (
                /* ── User Settings page ── */
                <>
                    <div className="relative z-10 w-full px-4 sm:w-[88vw] sm:px-0 sm:mx-auto pt-2">
                        <Navbar
                            onSignIn={() => setShowAuth(true)}
                            session={session}
                            loading={loading}
                            activePage={page}
                            onNavigate={setPage}
                            userRole={userRole}
                        />
                    </div>
                    <UserSettings session={session} onNavigate={setPage} />
                    <Footer />
                </>
            ) : page === 'about' ? (
                /* ── About Us page ── */
                <>
                    <div className="relative z-10 w-full px-4 sm:w-[88vw] sm:px-0 sm:mx-auto pt-2">
                        <Navbar
                            onSignIn={() => setShowAuth(true)}
                            session={session}
                            loading={loading}
                            activePage={page}
                            onNavigate={setPage}
                            userRole={userRole}
                        />
                    </div>
                    <AboutUs onNavigate={setPage} />
                    <Footer />
                </>
            ) : page === 'search' ? (
                /* ── Search Results page ── */
                <>
                    <div className="relative z-10 w-full px-4 sm:w-[88vw] sm:px-0 sm:mx-auto pt-2">
                        <Navbar
                            onSignIn={() => setShowAuth(true)}
                            session={session}
                            loading={loading}
                            activePage={page}
                            onNavigate={setPage}
                            userRole={userRole}
                        />
                    </div>
                    <SearchResults
                        initialQuery={searchQuery}
                        onBack={() => setPage('home')}
                        onSelectRole={navigateToJobs}
                    />
                    <Footer />
                </>
            ) : page === 'jobs' ? (
                /* ── Jobs / Interns page ── */
                <>
                    {/* Sticky navbar on the jobs page */}
                    <div className="relative z-10 w-full px-4 sm:w-[88vw] sm:px-0 sm:mx-auto pt-2">
                        <Navbar
                            onSignIn={() => setShowAuth(true)}
                            session={session}
                            loading={loading}
                            activePage={page}
                            onNavigate={setPage}
                            userRole={userRole}
                        />
                    </div>
                    <JobsAndInterns role={selectedRole} onNavigate={setPage} onSearch={navigateToSearch} session={session} />
                    <Footer />
                </>
            ) : page === 'recruiter' ? (
                /* ── Recruiter Dashboard page ── */
                <>
                    <div className="relative z-10 w-full px-4 sm:w-[88vw] sm:px-0 sm:mx-auto pt-2">
                        <Navbar
                            onSignIn={() => setShowAuth(true)}
                            session={session}
                            loading={loading}
                            activePage={page}
                            onNavigate={setPage}
                            userRole={userRole}
                        />
                    </div>
                    <RecruiterDashboard session={session} />
                    <Footer />
                </>
            ) : (
                /* ── Home page ── */
                <>
                    {/* ── Hero Section (full-screen) ── */}
                    <div className="relative h-screen w-screen overflow-hidden">

                        {/* Dark base background */}
                        <div className="absolute inset-0 bg-[#041A1C]" />

                        {/* Purple blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[55%]
                                        w-162.5 h-162.5 bg-purple-700 rounded-full blur-[160px] opacity-55 pointer-events-none" />

                        {/* Blue blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-[40%]
                                        w-150 h-150 bg-blue-700 rounded-full blur-[160px] opacity-50 pointer-events-none" />

                        {/* Content layer */}
                        <div className="relative z-10 w-full px-4 sm:w-[88vw] sm:px-0 sm:mx-auto h-full flex flex-col">

                            {/* Navbar — passes Sign in handler; hides button if already logged in */}
                            <nav className="w-full pt-2">
                                <Navbar
                                    onSignIn={() => setShowAuth(true)}
                                    session={session}
                                    loading={loading}
                                    activePage={page}
                                    onNavigate={setPage}
                                    userRole={userRole}
                                />
                            </nav>

                            {/* Hero fills remaining space */}
                            <div className="flex-1 flex flex-col pb-6">
                                <Hero onSelectRole={navigateToJobs} onSearch={navigateToSearch} />
                            </div>
                        </div>
                    </div>

                    {/* ── Below-fold sections ── */}
                    <Catogories onSelectRole={navigateToJobs} />
                    <Feedback />
                    <HelpFaqSection />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
