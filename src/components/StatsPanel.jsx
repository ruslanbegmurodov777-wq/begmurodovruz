import React from "react";
import "./StatsPanel.css";

const StatsPanel = () => {
  return (
    <div className="stats-panel">
      {/* Chap taraf */}
      <div>
        <h2>Portfolio — Statistika</h2>
        <p>
          Ishlar, mijozlar, ko‘nikmalar va darajalar — vizual va dinamika bilan.
        </p>

        {/* Info cards */}
        <div className="stats-grid">
          <div className="stats-card">
            <h3>22</h3>
            <span>Projects</span>
            <div className="progress">
              <div style={{ width: "40%" }}></div>
            </div>
          </div>
          <div className="stats-card">
            <h3>18</h3>
            <span>Clients</span>
            <div className="progress">
              <div style={{ width: "35%" }}></div>
            </div>
          </div>
          <div className="stats-card">
            <h3>1</h3>
            <span>Years Coding</span>
            <div className="progress">
              <div style={{ width: "25%" }}></div>
            </div>
          </div>
          {/* <div className="stats-card">
            <h3>987</h3>
            <span>Completed Tasks</span>
            <div className="progress">
              <div style={{ width: "84%" }}></div>
            </div>
          </div> */}
          <div className="stats-card">
            <h3>4.8/5</h3>
            <span>Average Rating</span>
            <div className="progress">
              <div style={{ width: "62%" }}></div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills">
          <h3>Skills</h3>

          <div className="skill">
            <div className="skill-label">
              <span>HTML</span> <span>95%</span>
            </div>
            <div className="skill-bar">
              <div style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-label">
              <span>CSS</span> <span>90%</span>
            </div>
            <div className="skill-bar">
              <div style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-label">
              <span>JavaScript</span> <span>80%</span>
            </div>
            <div className="skill-bar">
              <div style={{ width: "82%" }}></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-label">
              <span>React</span> <span>70%</span>
            </div>
            <div className="skill-bar">
              <div style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-label">
              <span>Node.js</span> <span>78%</span>
            </div>
            <div className="skill-bar">
              <div style={{ width: "78%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* O‘ng taraf */}
      <div className="dev-level">
        <h4>Developer Level</h4>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Full-Stack Junior → Mid
        </p>

        <div className="dev-tags">
          <span>Fast Learner</span>
          <span>Problem Solver</span>
          <span>Team Player</span>
        </div>

        <div className="dev-cards">
          <div className="dev-card">
            <div className="meter" style={{ "--percent": 78 }}></div>
            <div className="meter-label">Frontend 78%</div>
          </div>

          <div className="dev-card">
            <div className="meter" style={{ "--percent": 72 }}></div>
            <div className="meter-label">Backend 72%</div>
          </div>

          <div className="dev-card">
            <div className="meter" style={{ "--percent": 65 }}></div>
            <div className="meter-label">UX 65%</div>
          </div>

          <div className="dev-card">
            <div className="meter" style={{ "--percent": 70 }}></div>
            <div className="meter-label">UI Design 70%</div>
          </div>
        </div>

        <div className="dev-info">
          <span>
            Open Source: <strong>8 repos</strong>
          </span>
          <span>
            Certifications: <strong>3</strong>
          </span>
          <span>
            Preferred Stack: <strong>React • Node • MongoDB</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
