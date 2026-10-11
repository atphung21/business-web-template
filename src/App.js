import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import PackagesPage from "./pages/PackagesPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ClientsPage from "./pages/ClientsPage";
import FaqPage from "./pages/FaqPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import WorkPage from "./pages/WorkPage";
import BlackjackPage from "./pages/BlackjackPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/packages" element={<PackagesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/work/:slug" element={<WorkPage />} />
      <Route path="/blackjack" element={<BlackjackPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
