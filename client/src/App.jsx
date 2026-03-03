import Navbar from './assets/components/Navbar.jsx';
import Footer from './assets/components/Footer.jsx';
import Hero from './features/home/Hero.jsx';
import Feedback from './features/home/feedBack.jsx';
function App() {
    return (
        <div>
            {/* parent wrapper 01 */}
            <div className="h-screen w-screen border-2 pt-5 border-red-500 ">
                {/* background blobs */}
                <div className="flex justify-center items-center opacity-88 w-full h-auto absolute top-51 border border-amber-400">
                    <div className="w-50 h-53 bg-purple-800 rounded-full blur-3xl z-10 relative left-14 bottom-13"></div>
                    <div className="w-50 h-40 bg-blue-800 rounded-full blur-3xl z-10"></div>
                </div>
                {/* parent wrapper 02 */}
                <div className="w-[90vw] mx-auto border-4 border-blue-500 h-full flex flex-col relative">
                    {/* navigation bar 03 */}
                    <nav className="absolute top-0 left-0 z-40 w-full border-2 p-2">
                        <Navbar />
                    </nav>
                    <Hero />
                    
                </div>
            </div>
            <Feedback/>
            <Footer />
        </div>
    );
}

export default App;
