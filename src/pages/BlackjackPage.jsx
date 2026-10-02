import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./BlackjackPage.css";

const blackjackSrc = `${process.env.PUBLIC_URL}/blackjack/index.html`;

const BlackjackPage = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Blackjack Demo | ATP Consulting Services";
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.setAttribute("content", "noindex, nofollow");
  }, []);

  return (
    <div className="blackjack-page">
      <header className="blackjack-page__header">
        <Link to="/" className="blackjack-page__back">
          ← Back to ATP Consulting Services
        </Link>
        <p className="blackjack-page__title">Blackjack Demo</p>
        <span className="blackjack-page__badge">Interactive Demo</span>
      </header>
      <iframe
        key={location.key}
        title="ATP Blackjack — interactive demo"
        src={blackjackSrc}
        className="blackjack-page__frame"
        allow="autoplay"
      />
    </div>
  );
};

export default BlackjackPage;
