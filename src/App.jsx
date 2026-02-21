import { useState, useEffect } from 'react'
import profilePic from './assets/ramsey-profile.jpg'
import pataMtaani from './assets/pata-mtaani.png'
import ticTacToe from './assets/Screenshot 2026-02-12 234524.png'
import brandexperts from './assets/BrandExperts.jpg'
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { SiJavascript, SiExpress, SiPostgresql, SiTailwindcss, SiVercel } from 'react-icons/si'
import { MdApi, MdDevices, MdEmail, MdLightMode, MdDarkMode } from 'react-icons/md'
import { TbDeviceMobileCode } from 'react-icons/tb'
import { HiCode } from 'react-icons/hi'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [imageLoaded, setImageLoaded] = useState({})

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-500 ${darkMode
        ? 'bg-gray-950 text-gray-100'
        : 'bg-gradient-to-br from-pink-200 to-purple-300 text-gray-900'
      }`}>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          backdropFilter: 'blur(16px) saturate(160%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          backgroundColor: darkMode ? 'rgba(17, 25, 40, 0.5)' : 'rgba(255, 255, 255, 0.2)',
          border: darkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(99, 102, 241, 0.3)'
        }}
        className="fixed top-6 right-6 z-50 p-4 rounded-full transition-all duration-300"
      >
        {darkMode ? <MdLightMode className="text-2xl" /> : <MdDarkMode className="text-2xl" />}
      </button>

      {/* Hero Section */}
      <header className={`relative overflow-hidden ${darkMode
          ? 'bg-[radial-gradient(circle_at_top,theme(colors.indigo.900),theme(colors.gray.950))]'
          : 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100'
        }`}>

        <div className="container mx-auto px-6 py-20 md:py-32 text-center relative z-10">
          {/* Profile Pic */}
          <div className={`group mx-auto w-48 h-48 md:w-64 md:h-64 rounded-[20%] overflow-hidden border mb-10 transition-all duration-700 hover:scale-110 hover:rotate-1 ${darkMode
              ? 'border-indigo-400/30 shadow-[0_0_80px_rgba(99,102,241,0.35)]'
              : 'border-indigo-300/50 shadow-[0_0_60px_rgba(99,102,241,0.25)]'
            }`}>
            {!imageLoaded.profile && (
              <div className="w-full h-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 animate-pulse" />
            )}
            <img
              src={profilePic}
              alt="Ramsey Anyona"
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded.profile ? 'opacity-100' : 'opacity-0'
                }`}
              onLoad={() => setImageLoaded(prev => ({ ...prev, profile: true }))}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Ramsey Anyona
          </h1>
          <p className={`text-xl md:text-3xl mb-6 ${darkMode ? 'text-indigo-300' : 'text-indigo-600'
            }`}>
            Junior Full-Stack Developer | Nairobi
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
            Building clean, user-focused apps with React, Node.js, PostgreSQL & React Native.
            Quick learner passionate about tools that lift communities.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a
              href="mailto:your.anti.xe17@gmail.com"
              className={`relative inline-flex items-center justify-center px-12 py-5 text-xl font-semibold rounded-full transition-all duration-500 hover:scale-110 active:scale-95 ${darkMode
                  ? 'bg-indigo-600 text-white shadow-[0_0_40px_rgba(168,85,247,0.45)] hover:shadow-[0_0_80px_rgba(236,72,153,0.6)]'
                  : 'bg-indigo-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)]'
                }`}>
              Get in Touch
            </a>
            <a
              href="/Ramsey_Anyona_CV.pdf"
              download
              style={{
                backdropFilter: 'blur(16px) saturate(160%)',
                WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                backgroundColor: darkMode ? 'rgba(17, 25, 40, 0.42)' : 'rgba(255, 255, 255, 0.42)',
                border: darkMode ? '1px solid rgba(255, 255, 255, 0.125)' : '1px solid rgba(99, 102, 241, 0.3)'
              }}
              className="inline-flex items-center gap-2 px-10 py-5 text-xl font-semibold rounded-full transition-all duration-500 hover:scale-110">
              <FaDownload /> Resume
            </a>
          </div>

        </div>

        <div className={`absolute inset-0 pointer-events-none ${darkMode ? 'opacity-10' : 'opacity-20'
          }`}>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-[60%_40%_30%_70%] blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-[40%_60%_70%_30%] blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
      </header>

      {/* About Me */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'
          }`}>About Me</h2>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto opacity-90">
          Hi, I'm Ramsey — a recent Moringa School grad turned junior software developer in Nairobi, passionate about turning ideas into accessible, reliable tech that lifts people up.<br /><br />
          My stack right now: React + JavaScript (ES6+), Node.js/Express, PostgreSQL for full-stack web apps, and I'm actively leveling up with React Native to bring that same smooth experience to mobile. Built responsive task managers, mini e-commerce flows, Pata Mtaani (local service finder), and more during bootcamp — always focusing on clean code, solid UX, and real usability.<br /><br />
          What drives me? Using what I know to create tools that solve everyday problems and maybe even open doors for others in the community. I'm a fast learner, love pair-programming or helping debug in groups, and I'm genuinely excited about growing in a team that values mentorship and impact.<br /><br />
          Outside the editor, I recharge with some casual gaming sessions — nothing intense, just good vibes and a bit of strategy to clear the mind.<br /><br />
          If you're hiring juniors, running open-source projects, or just want to bounce ideas around (especially around APIs, integrations, or mobile), hit me up. I'm ready to contribute, learn fast, and help make tech a little more inclusive and fun for everyone. 🌍💻
        </p>
      </section>

      {/* Skills */}
      <section className={`py-20 px-6 ${darkMode ? 'bg-gray-900/60' : 'bg-blue/30 backdrop-blur-sm'
        }`}>
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'
          }`}>Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {[
            { name: 'React', icon: <FaReact /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'REST APIs', icon: <MdApi /> },
            { name: 'React Native', icon: <TbDeviceMobileCode /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'Vercel', icon: <SiVercel /> },
            { name: 'Responsive Design', icon: <MdDevices /> },
          ].map((skill) => (
            <div
              key={skill.name}
              style={{
                backdropFilter: 'blur(16px) saturate(120%)',
                WebkitBackdropFilter: 'blur(16px) saturate(140%)',
                backgroundColor: darkMode ? 'rgba(47, 58, 78, 0.01)' : 'rgba(255, 255, 255, 0.1',
                border: darkMode ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(99, 102, 241, 0.25)'
              }}
              className="relative p-6 rounded-xl shadow-lg transition-all duration-500 hover:scale-110 text-center font-semibold flex flex-col items-center gap-3">
              <span className={darkMode ? 'text-4xl text-indigo-400' : 'text-4xl text-indigo-600'}>{skill.icon}</span>
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'
          }`}>Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div
            style={{
              backdropFilter: 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: 'blur(16px) saturate(184%)',
              backgroundColor: darkMode ? 'rgba(17, 25, 40, 0.1)' : 'rgba(255, 255, 255, 0.3)',
              border: darkMode ? '1px solid rgba(255, 255, 255, 0.125)' : '1px solid rgba(99, 102, 241, 0.3)'
            }}
            className="rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-indigo-600 relative">
              {!imageLoaded.pata && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 animate-pulse" />
              )}
              <img
                src={pataMtaani}
                alt="Pata Mtaani"
                className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded.pata ? 'opacity-100' : 'opacity-0'
                  }`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, pata: true }))}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Pata Mtaani</h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Hyper-local service marketplace connecting Nairobi residents with trusted neighborhood providers (plumbers, bodas, mama fua, etc.).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100 text-indigo-700'
                  }`}>React</span>
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100 text-indigo-700'
                  }`}>Node.js</span>
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100 text-indigo-700'
                  }`}>PostgreSQL</span>
              </div>
              <div className="flex gap-4">
                <a href="https://pata-mtaani.vercel.app/" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                  }`}>
                  Live Demo →
                </a>
                <a href="https://github.com/RamseyAndrew/pata-mtaani" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 font-medium hover:underline ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                  }`}>
                  <HiCode /> Code
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backdropFilter: 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: 'blur(16px) saturate(184%)',
              backgroundColor: darkMode ? 'rgba(17, 25, 40, 0.1)' : 'rgba(255, 255, 255, 0.3)',
              border: darkMode ? '1px solid rgba(255, 255, 255, 0.125)' : '1px solid rgba(99, 102, 241, 0.3)'
            }}
            className="rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600 relative">
              {!imageLoaded.tictac && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 animate-pulse" />
              )}
              <img
                src={ticTacToe}
                alt="Tic-Tac-Toe"
                className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded.tictac ? 'opacity-100' : 'opacity-0'
                  }`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, tictac: true }))}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Tic-Tac-Toe Game</h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Classic two-player Tic-Tac-Toe with win detection, reset, and clean React state management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100 text-indigo-700'
                  }`}>React</span>
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100 text-indigo-700'
                  }`}>Vite</span>
              </div>
              <div className="flex gap-4">
                <a href="https://tic-tac-toe-ruddy-nu-68.vercel.app/" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                  }`}>
                  Live Demo →
                </a>
                <a href="https://github.com/RamseyAndrew/tic-tac-toe" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 font-medium hover:underline ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                  }`}>
                  <HiCode /> Code
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backdropFilter: 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: 'blur(16px) saturate(184%)',
              backgroundColor: darkMode ? 'rgba(17, 25, 40, 0.1)' : 'rgba(255, 255, 255, 0.3)',
              border: darkMode ? '1px solid rgba(255, 255, 255, 0.125)' : '1px solid rgba(99, 102, 241, 0.3)'
            }}
            className="rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-green-600 to-emerald-600 relative">
              {!imageLoaded.brandexperts && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 animate-pulse" />
              )}
              <img
                src={brandexperts}
                alt="BrandExperts"
                className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded.brandexperts ? 'opacity-100' : 'opacity-0'
                  }`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, brandexperts: true }))}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Brand Experts</h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                A comprehensive B2B field force automation platform designed to streamline sales operations and enhance field team productivity. (In progress)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100 text-indigo-700'
                  }`}>React</span>
                <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100 text-indigo-700'
                  }`}>Vite</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100 text-indigo-700'
                  }`}>Node.Js</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100 text-indigo-700'
                  }`}>PostgreSQL</span>
              </div>
              <div className="flex gap-4">
                <a href="https://berry-o.vercel.app/" target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                  }`}>
                  Live Demo →
                </a>
                <a href="https://github.com/RamseyAndrew/BerryO" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 font-medium hover:underline ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                  }`}>
                  <HiCode /> Code
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 px-6 ${darkMode ? 'bg-gray-900/50' : 'bg-white/30 backdrop-blur-sm'
        }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>Let's Connect</h2>
          <p className={`text-lg mb-10 ${darkMode ? 'opacity-90' : 'text-gray-700'}`}>
            Open to junior roles, collaborations, and tech conversations!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:your.anti.xe17@gmail.com"
              style={{
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(184%)',
                backgroundColor: darkMode ? 'rgba(17, 25, 40, 0.1)' : 'rgba(255, 255, 255, 0.3)',
                border: darkMode ? '1px solid rgba(255, 255, 255, 0.125)' : '1px solid rgba(99, 102, 241, 0.3)'
              }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
              <MdEmail className="text-2xl" />
              <span className="font-medium">Email</span>
            </a>
            <a
              href="https://github.com/RamseyAndrew"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backdropFilter: 'blur(16px) saturate(184%)',
                WebkitBackdropFilter: 'blur(16px) saturate(184%)',
                backgroundColor: darkMode ? 'rgba(17, 25, 40, 0.42)' : 'rgba(255, 255, 255, 0.42)',
                border: darkMode ? '1px solid rgba(255, 255, 255, 0.125)' : '1px solid rgba(99, 102, 241, 0.3)'
              }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
              <FaGithub className="text-2xl" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/ramsey-anyona"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backdropFilter: 'blur(16px) saturate(184%)',
                WebkitBackdropFilter: 'blur(16px) saturate(184%)',
                backgroundColor: darkMode ? 'rgba(17, 25, 40, 0.42)' : 'rgba(255, 255, 255, 0.42)',
                border: darkMode ? '1px solid rgba(255, 255, 255, 0.125)' : '1px solid rgba(99, 102, 241, 0.3)'
              }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
              <FaLinkedin className="text-2xl" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-white/50 backdrop-blur-sm border-indigo-200'
        }`}>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          &copy; {new Date().getFullYear()} Ramsey Anyona. Built with React & Tailwind CSS 🚀
        </p>
      </footer>
    </div>
  )
}

export default App
