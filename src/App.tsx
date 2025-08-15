import './App.scss'
import { useThemeInitialization } from './stores/themeStore'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import { portfolioData } from './data'

function App() {
  // Initialize theme on app start
  useThemeInitialization()
  
  // Initialize scroll reveal animations
  useScrollReveal()

  return (
    <div className="app">
      <Navigation />
      
      <main className="app__main">
        <section id="hero">
          <Hero personalInfo={portfolioData.personalInfo} />
        </section>
        
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Education education={portfolioData.education} />
        <Contact personalInfo={portfolioData.personalInfo} />
      </main>
      
      <footer className="app__footer">
        <div className="app__footer-content">
          <p className="app__footer-text">
            © 2024 {portfolioData.personalInfo.name}. Built with React, TypeScript, and SCSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App