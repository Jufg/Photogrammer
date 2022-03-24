import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Error_page_404, Gallery, Home, Imprint, Portfolio, Publications, Wallpaper} from "./pages";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wallpaper" element={<Wallpaper />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/imprint" element={<Imprint />} />
                <Route path="*" element={<Error_page_404 />} />
            </Routes>
        </Router>
    );
}

export default App;
