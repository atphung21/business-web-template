import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from "./components/landingPage/LandingPage";


// Page Components
const About = () => <h1>About Page</h1>;
const Services = () => <h1>Services Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
    return (
        <Router>
            <div>
                {/* Routes for Page Navigation */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
