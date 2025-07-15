import React from 'react';
import './App.css';
import './index.css';

const socials = [
  { name: 'Telegram', href: '#', icon: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 3.75l-3.197 16.013a1.125 1.125 0 01-1.77.708l-4.13-3.005-2.01 1.94a.75.75 0 01-1.27-.37l-1.13-4.52-3.13-1.04a.75.75 0 01.06-1.43l17.25-7.5z" /></svg>
  ) },
  { name: 'Instagram', href: 'https://instagram.com/moonking.mp4', icon: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><rect x="2.25" y="2.25" width="19.5" height="19.5" rx="4.5" /><circle cx="12" cy="12" r="5.25" /><circle cx="18" cy="6" r="1.5" /></svg>
  ) },
  { name: 'GitHub', href: '#', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.11 2.51.32 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" /></svg>
  ) },
  { name: 'Email', href: '#', icon: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.876 1.8l-7.125 5.7a2.25 2.25 0 01-2.748 0l-7.125-5.7a2.25 2.25 0 01-.876-1.8V6.75" /></svg>
  ) },
];

const projects = [
  {
    name: 'Personal Website',
    description: 'This very site, built with React, Vite, and Tailwind CSS.',
    link: '#',
  },
  {
    name: 'Cool App',
    description: 'A creative app that does something awesome.',
    link: '#',
  },
  // Add more projects here
];

function App() {
  return (
    <div className="w-screen min-h-screen bg-black overflow-x-hidden">
      {/* Glassmorphic Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center backdrop-blur-md bg-white/10 border-b border-white/10 py-3 px-6">
        <div className="flex gap-8 text-lg font-mono text-white/80">
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">My Projects</a>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="w-full h-screen flex items-center justify-center pt-20">
        <div className="container flex flex-col items-center justify-center fade-in">
          <h1 className="glitch-text" data-text="Aikhan Jumashukurov">Aikhan Jumashukurov</h1>
          <p className="tagline">Building cool things. Exploring the digital world.</p>
          <div className="links flex flex-row items-center justify-center mt-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full min-h-[60vh] flex flex-col items-center justify-center py-24 fade-in">
        <h2 className="text-4xl font-bold text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl px-4">
          {projects.map((project) => (
            <div key={project.name} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10 shadow-lg hover:scale-[1.03] transition-transform duration-200">
              <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-2">{project.description}</p>
              {project.link && (
                <a href={project.link} className="text-cyan-300 hover:underline text-sm" target="_blank" rel="noopener noreferrer">View Project</a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
