import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Naomy</div>
          <div className="nav-links">
            <a href="#home" className="active">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content animate-fade-in">
            <h1>Crafting Digital <br />Experiences</h1>
            <div className="badge">1 Year Experience</div>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Projects</a>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="section-header">
              <h2>About Me</h2>
            </div>
            <div className="about-grid">
              <div className="glass-card">
                <h3>The Journey</h3>
                <p>
                  With one year of professional experience, I've honed my skills in
                  modern web technologies, focusing on creating seamless user
                  experiences and clean, maintainable code.
                </p>
              </div>
              <div className="glass-card">
                <h3>My Vision</h3>
                <p>
                  I believe in the power of code to solve real-world problems.
                  My goal is to push the boundaries of what's possible on the web.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <div className="section-header">
              <h2>Featured Projects</h2>
            </div>
            <div className="projects-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card project-card">
                  <div className="project-image-placeholder"></div>
                  <div className="project-info">
                    <h3>Project Title {i}</h3>
                    <p>A brief description of the amazing project built with modern tech.</p>
                    <div className="project-tags">
                      <span>React</span>
                      <span>Node.js</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="glass-card contact-container">
              <div className="contact-content">
                <h2>Let's Build Something Together</h2>
                <p>Ready to start your next project? Let's talk.</p>
                <a href="mailto:hello@naomy.dev" className="btn-primary">Send a Message</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Naomy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
