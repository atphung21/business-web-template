import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from "./components/landingPage/LandingPage";
import { BecomeAnAgentPage } from './pages/BecomeAnAgentPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FaqPage } from './pages/FaqPage';
import { MeetTheFounderPage } from './pages/MeetTheFounderPage';
import { MeetTheAgentsPage } from './pages/MeetTheAgentsPage';
import { MedicarePlansPage } from './pages/MedicarePlansPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { EmployerSponsoredPlansPage } from './pages/EmployerSponsoredPlansPage';
import { FinalExpensePlansPage } from './pages/FinalExpensePlansPage';
import { HealthInsurance101Page } from './pages/HealthInsurance101Page';
import { IndividualAndFamilyPlansPage } from './pages/IndividualAndFamilyPlansPage';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/become-an-agent" element={<BecomeAnAgentPage />} />
                    <Route path="/testimonials" element={<TestimonialsPage title={'Testimonials'} description={'"The work isn\'t done when you\'re happy; the work is done when your client is smiling." - Trent W. Nelson'} />} />
                    <Route path="/faq" element={<FaqPage title={'Frequently Asked Questions'} />} />
                    <Route path="/meet-the-founder" element={<MeetTheFounderPage />} />
                    <Route path="/meet-the-agents" element={<MeetTheAgentsPage />} />
                    <Route path="/medicare-plans" element={<MedicarePlansPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                    <Route path="/final-expense-plans" element={<FinalExpensePlansPage />} />
                    <Route path="/employer-sponsored-plans" element={<EmployerSponsoredPlansPage />} />
                    <Route path="/individual-family-plans" element={<IndividualAndFamilyPlansPage />} />
                    <Route path="/health-insurance-101" element={<HealthInsurance101Page />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
