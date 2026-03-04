import Navbar from './assets/components/Navbar.jsx';
import RolesGrid from './features/home/RolesGrid.jsx';

function App() {
    return (
        <div>
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
                <div className="w-[90vw] mx-auto  h-full flex flex-col bg-none relative">
                    {/* navigation bar 03 */}
                    <nav className="absolute top-0 left-0 z-40 w-full  p-2">
                        <Navbar />
                    </nav>
                    <Hero />
        <div className="min-h-screen w-full relative overflow-hidden font-sans bg-[#0c1322]">
            {/* Background Ambient Glow Patterns */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-80">
                <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] bg-[#082d33] blur-[140px] rounded-full mix-blend-screen"></div>
                <div className="absolute top-[20%] left-[25%] w-[50%] h-[50%] bg-[#2a134a] blur-[150px] rounded-full mix-blend-screen opacity-90"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#0f214f] blur-[150px] rounded-full mix-blend-screen"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full flex flex-col min-h-screen pb-16">
                <Navbar />
                
                <div className="flex-1 flex flex-col items-center justify-center pt-8">
                    <RolesGrid />
                </div>
            </div>
        </div>
    );
}

export default App;
