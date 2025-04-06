import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from "./components/landingPage/LandingPage";
import { BecomeAnAgentPage } from './pages/BecomeAnAgentPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FaqPage } from './pages/FaqPage';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/become-an-agent" element={<BecomeAnAgentPage />} />
                    <Route path="/testimonials" element={<TestimonialsPage title={'Testimonials'} description={"The work isn't done when you're happy; the work is done when your client is smiling."} />} />
                    <Route path="/faq" element={<FaqPage title={'Frequently Asked Questions'} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
