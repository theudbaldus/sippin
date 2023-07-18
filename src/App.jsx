import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Random, Results } from "./pages";

const App = () => {

    return (
        <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black bg-black">
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/random" element={<Random />} />
                <Route path="/search/:term" element={<Results />} />
            </Routes>
                        
            <Footer />
        </div>
    );
};

export default App
