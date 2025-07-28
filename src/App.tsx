"use client"

import { useState, useEffect } from "react"
import './App.css';
import './index.css';

export default function PersonalWebsite() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsArticles.length)
  }

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsArticles.length) % newsArticles.length)
  }

  const goToNews = (index: number) => {
    setCurrentNewsIndex(index)
  }

  const skills = [
    { name: "Python", level: 85, category: "Backend" },
    { name: "JavaScript/TypeScript", level: 80, category: "Frontend" },
    { name: "React/Next.js", level: 75, category: "Frontend" },
    { name: "Firebase", level: 70, category: "Backend" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "TensorFlow", level: 60, category: "AI/ML" },
    { name: "Linear Algebra", level: 65, category: "Math" },
    { name: "Data Structures", level: 75, category: "CS Theory" },
  ]

  const projects = [
    
    {
      title: "DevmoLink",
      description:
        "Social platform connecting developers with tinder-style matching, featuring real-time chat and event matching.",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "WebRTC"],
      github: "#",
      demo: "https://devmolink.com",
      image: "/devmoLinkOfficialIcon.png",
    },
    
  ]

  const socialStats = [
    { platform: "TikTok", followers: "6.5K", growth: "+15%" },
    { platform: "Instagram", followers: "3.5K", growth: "+12%" },
    { platform: "LinkedIn", followers: "1.2K", growth: "+25%" },
  ]

  const newsArticles = [
    {
      title: "Student Profile",
      publication: "Borderless",
      description: "Featured profile highlighting academic journey and achievements",
      url: "https://borderless.so/p/jumashukurov",
      category: "Profile"
    },
    {
      title: "How a Kyrgyz Teen is Transforming the IT Education Landscape",
      publication: "TechTimes",
      description: "Coverage of innovative contributions to technology education",
      url: "https://www.techtimes.com/articles/307437/20240910/how-a-kyrgyz-teen-is-transforming-the-it-education-landscape.htm",
      category: "Technology"
    },
    {
      title: "Research Publication",
      publication: "Journal for Student Research",
      description: "Academic research contributions and scholarly work",
      url: "https://www.jsr.org/hs/index.php/path/search/authors/view?givenName=Aikhan&familyName=Jumashukurov&affiliation=International%20School%20of%20Kyrgyztan&country=KG&authorName=Jumashukurov%2C%20Aikhan",
      category: "Academic"
    },
    {
      title: "Achievement Coverage",
      publication: "Limon.kg",
      description: "Local news coverage of academic achievements",
      url: "https://limon.kg/ru/news:84105",
      category: "News"
    },
    {
      title: "Five Graduates from Kyrgyzstan Enter Ivy League Universities and MIT",
      publication: "Kaktus Media",
      description: "Coverage of historic achievement in higher education admission",
      url: "https://kaktus.media/doc/525167_piat_vypysknikov_iz_kyrgyzstana_postypili_v_yniversitety_ligi_plusha_i_mit.html",
      category: "Education"
    },
    {
      title: "University Admission Success",
      publication: "AKIpress Education",
      description: "Educational news coverage of university achievements",
      url: "https://bilim.akipress.org/ru/news:2251670",
      category: "Education"
    },
    {
      title: "Press Coverage",
      publication: "AKIpress",
      description: "Press center coverage of notable achievements",
      url: "https://presscenter.akipress.org/news:33506/?from=mportal&place=project",
      category: "Press"
    },
    {
      title: "Historic Success: First Student from Kyrgyzstan Enters Princeton University",
      publication: "Facebook - Education Page",
      description: "Social media coverage of groundbreaking university admission",
      url: "https://www.facebook.com/61551437546623/posts/%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D1%83%D1%81%D0%BF%D0%B5%D1%85-%D0%B2%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82-%D0%B8%D0%B7-%D0%BA%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D1%82%D0%B0%D0%BD%D0%B0-%D0%BF%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B8%D0%BB-%D0%B2-princeton-universit/122188048418047918/",
      category: "Historic"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Custom Styles for Glow Effects */}
      <style>{`
        .glow-orange {
          text-shadow: 0 0 5px #ff9100, 0 0 10px #ff9100, 0 0 15px #ff9100, 0 0 20px #ff9100;
          animation: glow-orange 2s ease-in-out infinite alternate;
        }
        
        .glow-blue {
          text-shadow: 0 0 5px #00b3ff, 0 0 10px #00b3ff, 0 0 15px #00b3ff, 0 0 20px #00b3ff;
          animation: glow-blue 2s ease-in-out infinite alternate;
        }
        
        .glow-cyan {
          text-shadow: 0 0 5px #67e8f9, 0 0 10px #67e8f9, 0 0 15px #67e8f9;
          color: #67e8f9;
        }
        
        .glassmorphic {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .card-glow {
          box-shadow: 0 0 20px rgba(255, 145, 0, 0.3);
          transition: box-shadow 0.3s ease;
        }
        
        .card-glow:hover {
          box-shadow: 0 0 30px rgba(255, 145, 0, 0.5), 0 0 60px rgba(0, 179, 255, 0.3);
        }
        
        @keyframes glow-orange {
          from { text-shadow: 0 0 5px #ff9100, 0 0 10px #ff9100, 0 0 15px #ff9100; }
          to { text-shadow: 0 0 10px #ff9100, 0 0 20px #ff9100, 0 0 30px #ff9100; }
        }
        
        @keyframes glow-blue {
          from { text-shadow: 0 0 5px #00b3ff, 0 0 10px #00b3ff, 0 0 15px #00b3ff; }
          to { text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 30px #00b3ff; }
        }
        
        .progress-glow .bg-primary {
          background: linear-gradient(90deg, #ff9100, #00b3ff);
          box-shadow: 0 0 10px rgba(255, 145, 0, 0.5);
        }

        .btn {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

                 .btn-primary {
           background: #ff9100;
           color: white;
           border: 1px solid #ff9100;
         }

         .btn-primary:hover {
           background: #e68200;
           border-color: #e68200;
           transform: translateY(-1px);
           box-shadow: 0 4px 12px rgba(255, 145, 0, 0.3);
         }

         .btn-outline {
           background: transparent;
           border: 1px solid #67e8f9;
           color: #67e8f9;
         }

                   .btn-outline:hover {
            background: #67e8f9;
            color: #000;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(103, 232, 249, 0.3);
          }

          .btn-outline-orange {
            background: transparent;
            border: 1px solid #ff9100;
            color: #ff9100;
          }

          .btn-outline-orange:hover {
            background: #ff9100;
            color: #000;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(255, 145, 0, 0.3);
          }

        .card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-2px);
        }

        .progress {
          width: 100%;
          height: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.25rem;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #ff9100, #00b3ff);
          border-radius: 0.25rem;
          box-shadow: 0 0 10px rgba(255, 145, 0, 0.5);
          transition: width 0.3s ease;
        }

        .badge {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          background: rgba(103, 232, 249, 0.1);
          color: #67e8f9;
          border: 1px solid rgba(103, 232, 249, 0.3);
          display: inline-block;
        }

        .input {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.375rem;
          color: white;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .textarea {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.375rem;
          color: white;
          resize: vertical;
          min-height: 100px;
        }

                 .textarea::placeholder {
           color: rgba(255, 255, 255, 0.4);
         }

         /* Nerdy Hacker Fonts */
         * {
           font-family: 'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Ubuntu Mono', 'Consolas', 'Courier New', monospace !important;
         }

         /* Import Google Fonts for programming fonts */
         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Fira+Code:wght@300;400;500;600;700&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

         /* Line clamp utilities */
         .line-clamp-2 {
           display: -webkit-box;
           -webkit-line-clamp: 2;
           -webkit-box-orient: vertical;
           overflow: hidden;
         }
         
         .line-clamp-3 {
           display: -webkit-box;
           -webkit-line-clamp: 3;
           -webkit-box-orient: vertical;
           overflow: hidden;
         }
       `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glassmorphic z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">Aikhan Jumashukurov</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Skills", "Content", "News", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white hover:glow-cyan transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10 py-10">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-4 h-4 text-[#67e8f9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-300">Kyrgyzstan → Princeton, NJ</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              
              
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              <span className="glow-orange text-[#ff9100]">Princeton</span>{" "}
              <span className="glow-blue text-[#00b3ff]">Computer Science</span> freshman from Kyrgyzstan <br /> 10k+ social
              followers <br /> Passionate about AI & web development
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                             <button
                 className="btn btn-outline-orange"
                 onClick={() => scrollToSection("projects")}
               >
                View Projects
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </button>
            </div>
            <div className="flex items-center gap-6 mt-8">
              {socialStats.map((stat) => (
                <div key={stat.platform} className="text-center">
                  <div className="text-2xl font-bold glow-cyan">{stat.followers}</div>
                  <div className="text-sm text-gray-400">{stat.platform}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative">
              
              <img
                src="/aikhanpfpBLACKANDWHITE.png"
                alt="Aikhan Jumashukurov"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From the mountains of Kyrgyzstan to the halls of{" "}
              <span className="glow-orange text-[#ff9100]">Princeton</span>, my journey in tech is driven by curiosity
              and a desire to bridge cultures through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card glassmorphic border-l-4 border-l-[#ff9100] card-glow">
              <svg className="w-8 h-8 text-[#ff9100] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">Global Perspective</h3>
              <p className="text-gray-300">
                Growing up in Kyrgyzstan and studying at <span className="glow-orange text-[#ff9100]">Princeton</span>{" "}
                gives me unique insights into how technology can solve problems across different cultures and
                contexts.
              </p>
            </div>

            <div className="card glassmorphic border-l-4 border-l-[#00b3ff] card-glow">
              <svg className="w-8 h-8 text-[#00b3ff] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">Academic Excellence</h3>
              <p className="text-gray-300">
                <span className="glow-blue text-[#00b3ff]">Computer Science</span> freshman at{" "}
                <span className="glow-orange text-[#ff9100]">Princeton University</span>, focusing on AI/ML,
                algorithms, and full-stack development with a strong foundation in mathematics.
              </p>
            </div>

            <div className="card glassmorphic border-l-4 border-l-[#67e8f9] card-glow">
              <svg className="w-8 h-8 text-[#67e8f9] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">Community Builder</h3>
              <p className="text-gray-300">
                Built a community of <span className="glow-cyan">10k+ followers</span> by sharing my university
                admission journey and helping students navigate the complex world of higher education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300">
              Building solutions that matter, from AI-powered study tools to community platforms
            </p>
          </div>

                                <div className="flex justify-center">
             {projects.map((project, index) => (
               <div
                 key={index}
                 className="card glassmorphic group hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-2 card-glow w-full max-w-sm"
               >
                <div className="relative overflow-hidden rounded-t-lg mb-4">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {/* <a href={project.github} className="btn btn-outline flex-1 text-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a> */}
                  <a href={project.demo} className="btn btn-primary flex-1 text-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Learning Journey</h2>
            <p className="text-xl text-gray-300">Continuously growing my technical expertise across multiple domains</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.category}</span>
                    </div>
                    <div className="progress">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Learning Roadmap</h3>
              <div className="space-y-4">
                <div className="card glassmorphic border-l-4 border-l-[#ff9100] card-glow">
                  <h4 className="font-semibold text-white mb-2">Currently Learning</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Advanced TensorFlow & Deep Learning</li>
                    <li>• Linear Algebra & Calculus Applications</li>
                    <li>• System Design Principles</li>
                  </ul>
                </div>

                <div className="card glassmorphic border-l-4 border-l-[#00b3ff] card-glow">
                  <h4 className="font-semibold text-white mb-2">Next Quarter Goals</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Computer Vision with OpenCV</li>
                    <li>• Advanced Algorithms & Data Structures</li>
                    <li>• Cloud Architecture (AWS/GCP)</li>
                  </ul>
                </div>

                <div className="card glassmorphic border-l-4 border-l-[#67e8f9] card-glow">
                  <h4 className="font-semibold text-white mb-2">Long-term Vision</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• AI Research & Publications</li>
                    <li>• Startup Founding Experience</li>
                    <li>• Open Source Contributions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Section */}
      <section id="content" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Content & Community</h2>
            <p className="text-xl text-gray-300">Sharing knowledge and building communities across social platforms</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {socialStats.map((stat, index) => (
              <div
                key={index}
                className="card glassmorphic text-center hover:shadow-lg hover:shadow-cyan-300/30 transition-all duration-300 card-glow"
              >
                <div className="text-3xl font-bold glow-cyan mb-2">{stat.followers}</div>
                <div className="text-gray-300 mb-2">{stat.platform}</div>
                <div className="flex items-center justify-center gap-1 text-[#67e8f9]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm">{stat.growth} this month</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            

            
          </div>
        </div>
      </section>

      {/* News Section - Carousel */}
      <section id="news" className="py-20D">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          

          {/* Carousel Container */}
          <div className="relative w-full max-w-5xl mx-auto px-16">
            {/* Navigation Arrows */}
            <button
              onClick={prevNews}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glassmorphic hover:bg-white/20 transition-all duration-300 group hover:scale-110 flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-[#67e8f9] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextNews}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glassmorphic hover:bg-white/20 transition-all duration-300 group hover:scale-110 flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-[#67e8f9] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Card */}
            <div className="overflow-hidden rounded-xl py-10">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentNewsIndex * 100}%)` }}
              >
                {newsArticles.map((article, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="card glassmorphic group hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 card-glow w-full max-w-3xl mx-auto min-h-[300px] max-h-[400px] flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <span className="badge text-sm">{article.category}</span>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-[#67e8f9] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:glow-cyan transition-all duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <div className="text-base text-[#ff9100] mb-2 font-medium">
                        {article.publication}
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow line-clamp-3">
                        {article.description}
                      </p>
                      
                      <div className="flex justify-center mt-auto">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-orange px-6 py-2 text-sm group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300"
                        >
                          Read Article
                          <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {newsArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToNews(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentNewsIndex
                      ? 'bg-[#ff9100] shadow-lg shadow-orange-500/50'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4">
              <span className="text-gray-400 text-sm">
                {currentNewsIndex + 1} of {newsArticles.length}
              </span>
            </div>
          </div>

          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="flex flex-col items-center text-center">
            <div className="text-white max-w-md">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-[#67e8f9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>ajumashukurov@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-[#67e8f9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Princeton, NJ</span>
                </div>
                
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow My Journey</h4>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://github.com/Lutashi/"
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aikhan-jumashukurov-302599282/"
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                    </svg>
                  </a>
                  <a
                    href="https://t.me/aikhanunitips"
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/jumashukurov"
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://farcaster.xyz/lutashi"
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.24 4.32h1.44V19.2h-1.44V4.32Zm-12.96 0H6.72V19.2H5.28V4.32Zm6.72 2.88c-1.92 0-3.36 1.44-3.36 3.36s1.44 3.36 3.36 3.36 3.36-1.44 3.36-3.36-1.44-3.36-3.36-3.36Zm0 5.28c-1.056 0-1.92-.864-1.92-1.92s.864-1.92 1.92-1.92 1.92.864 1.92 1.92-.864 1.92-1.92 1.92Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glassmorphic border-t border-white/20 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Aikhan Jumashukurov. Building the future, one line of code at a time.
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  )
}
