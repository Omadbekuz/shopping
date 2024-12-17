import React from "react";

export default function About() {
  const scrollToSection = () => {
    document.getElementById("stats-section").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="app">
      {/* Button */}
      <button className="scroll-btn" onClick={scrollToSection}>
        Go to Stats
      </button>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to My Page</h1>
      </div>

      {/* Target Section */}
      <div id="stats-section" className="stats-container">
        <div className="stat-item">
          <h2>120 k</h2>
          <p>Furniture Sale</p>
        </div>
        <div className="stat-item">
          <h2>98 k</h2>
          <p>
            Review <span className="star">⭐</span> (4.5)
          </p>
        </div>
        <div className="stat-item">
          <h2>125</h2>
          <p>Furniture Categories</p>
        </div>
      </div>
    </div>
  );
}
