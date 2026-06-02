import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BlackjackPage from "./pages/BlackjackPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blackjack" element={<BlackjackPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
