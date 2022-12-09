import React from "react";
import './App.css';
import {Routes, Route, HashRouter} from 'react-router-dom';
import {ErrorPage404, Gallery, Home, Imprint, Portfolio, Publications, Wallpaper} from "./pages";

const App = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/wallpaper" element={<Wallpaper/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/publications" element={<Publications/>}/>
                <Route path="/imprint" element={<Imprint/>}/>
                <Route path="*" element={<ErrorPage404/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
