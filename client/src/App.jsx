import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar.jsx';
import Footer from './assets/components/Footer.jsx';
import Hero from './features/home/Hero.jsx';
import Feedback from './features/home/feedBack.jsx';
import HelpFaqSection from './features/home/faq.jsx';
import Catogories from './features/home/catogories.jsx';
import HomePage from './features/home/HomePage.jsx';
import JobsPage from './features/jobs/JobsPage.jsx';
import JobDetailsPage from './features/jobs/JobDetailsPage.jsx';

function App() {
    return (
        <div className="p-0">
            {/* parent wrapper 01 */}
            <div className="h-screen w-screen pt-5">
                {/* background blobs */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                    {/* Purple spread */}
                    <div className="absolute w-[600px] h-[600px] bg-purple-700 rounded-full blur-[160px] -translate-x-32 -translate-y-10"></div>

                    {/* Blue spread */}
                    <div className="absolute w-[600px] h-[600px] bg-blue-700 rounded-full blur-[160px] translate-x-32 translate-y-10"></div>
                </div>

                {/* parent wrapper 02 */}
                <div className="w-[90vw] mx-auto h-full flex flex-col bg-none relative">
                    {/* navigation bar 03 */}
                    <nav className="absolute top-0 left-0 z-40 w-full p-2">
                        <Navbar />
                    </nav>

                    {/* routed main content */}
                    <main className="pt-20 pb-10">
                        <Routes>
                            {/* main landing page hero */}
                            <Route path="/" element={<Hero />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/jobs" element={<JobsPage />} />
                            <Route path="/jobs/:id" element={<JobDetailsPage />} />
                        </Routes>
                    </main>
                </div>
            </div>
            <Catogories />
            <Feedback />
            <HelpFaqSection />
            <Footer />
        </div>
    );
}

export default App;
