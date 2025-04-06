import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from "./components/landingPage/LandingPage";
import { BecomeAnAgentPage } from './pages/BecomeAnAgentPage';
import { TestimonialsPage } from './pages/TestimonialsPage';


const Contact = () => <h1>Contact Page</h1>;

const App = () => {
    return (
        <Router>
            <div>
                {/* Routes for Page Navigation */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/become-an-agent" element={<BecomeAnAgentPage />} />
                    <Route path="/testimonials" element={<TestimonialsPage title={'Testimonials'} description={"The work isn't done when you're happy; the work is done when your client is smiling."} />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
