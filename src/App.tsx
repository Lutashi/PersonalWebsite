import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import './index.css';

const socials = [
  { name: 'Telegram', href: 'https://t.me/aikhanunitips', icon: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 3.75l-3.197 16.013a1.125 1.125 0 01-1.77.708l-4.13-3.005-2.01 1.94a.75.75 0 01-1.27-.37l-1.13-4.52-3.13-1.04a.75.75 0 01.06-1.43l17.25-7.5z" /></svg>
  ) },
  { name: 'Instagram', href: 'https://instagram.com/moonking.mp4', icon: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><rect x="2.25" y="2.25" width="19.5" height="19.5" rx="4.5" /><circle cx="12" cy="12" r="5.25" /><circle cx="18" cy="6" r="1.5" /></svg>
  ) },
  { name: 'GitHub', href: 'https://github.com/Lutashi/', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.11 2.51.32 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" /></svg>
  ) },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aikhan-jumashukurov-302599282/', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
  ) },
];

const projects = [
  {
    name: 'Personal Website',
    description: 'This very site, built with React, Vite, and Tailwind CSS.',
    link: '#',
  },

];

const NAME = "Aikhan Jumashukurov";
const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";

function randomizeText(target: string, progress = 0): string {
  return target
    .split("")
    .map((char: string, i: number) => {
      if (char === " ") return " ";
      if (i < progress) return char;
      return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    })
    .join("");
}

function GlitchName() {
  const [display, setDisplay] = useState("");
  const [isCiphering, setIsCiphering] = useState(true);
  const decipherTimeout = useRef<ReturnType<typeof setTimeout>>();

  // Initial decipher animation (slower)
  useEffect(() => {
    let frame = 0;
    const max = NAME.length;
    function animate() {
      if (frame <= max) {
        setDisplay(randomizeText(NAME, frame));
        setIsCiphering(true);
        frame++;
        decipherTimeout.current = setTimeout(animate, 80); // slower: 80ms
      } else {
        setDisplay(NAME);
        setIsCiphering(false);
      }
    }
    animate();
    return () => {
      if (typeof decipherTimeout.current === 'number') {
        clearTimeout(decipherTimeout.current);
      }
    };
  }, []);

  return (
    <h1
      className={`glitch-text${isCiphering ? ' is-ciphering' : ''}`}
      data-text={isCiphering ? display : NAME}
      style={{ cursor: isCiphering ? 'default' : 'pointer' }}
    >
      {display}
    </h1>
  );
}

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
          <GlitchName />
          <p className="tagline">Building cool things. Exploring the digital world.</p>
          <div className="about-me mt-6 max-w-xl text-center text-gray-300 text-lg font-mono">
            <p>
              Studying <span className="neon-blue">Computer Science</span> @ <span className="neon-orange">Princeton</span><br/>
              <br/>
              Learning, building, breaking stuff, repeating.<br/>
              
              I make small things that (hopefully) help people.<br/>
            </p>
          </div>
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
        <h2 className="text-4xl font-bold text-white mb-8 font-mono">My Projects</h2>
        <div className="grid grid-cols-1 justify-center w-full max-w-3xl px-4">
          {projects.map((project) => (
            <div key={project.name} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10 shadow-lg hover:scale-[1.03] transition-transform duration-200 mx-auto mb-8 last:mb-0 font-mono">
              <h3 className="text-2xl font-semibold text-white mb-2 font-mono">{project.name}</h3>
              <p className="text-gray-300 mb-2 font-mono">{project.description}</p>
              {project.link && (
                <a href={project.link} className="text-cyan-300 hover:underline text-sm font-mono" target="_blank" rel="noopener noreferrer">View Project</a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Email at the very bottom */}
      <footer className="w-full flex justify-center items-center py-8 mt-8 select-text">
        <a href="mailto:ajumashukurov@gmail.com" className="flex items-center gap-2 text-gray-200 hover:text-white text-lg font-mono">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.876 1.8l-7.125 5.7a2.25 2.25 0 01-2.748 0l-7.125-5.7a2.25 2.25 0 01-.876-1.8V6.75" /></svg>
          ajumashukurov@gmail.com
        </a>
      </footer>
    </div>
  );
}

export default App;
