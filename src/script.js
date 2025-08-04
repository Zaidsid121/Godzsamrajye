import { useState, useEffect } from 'react'
import zaidCharacter from './assets/zaid-character.webp'
import './App.css'

function App() {
  const [glitchEffect, setGlitchEffect] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 200)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-purple-900/20"></div>
      
      {/* Lightning Effects */}
      <div className="absolute inset-0">
        <div className="lightning-1"></div>
        <div className="lightning-2"></div>
        <div className="lightning-3"></div>
      </div>
      
      {/* Smoke/Fog Effect */}
      <div className="absolute inset-0 smoke-effect"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Main Title */}
        <h1 className={`text-6xl md:text-8xl font-black text-center mb-8 title-glow ${glitchEffect ? 'glitch' : ''}`}>
          <span className="text-red-500 drop-shadow-2xl">GODZ</span>
          <span className="text-white drop-shadow-2xl"> </span>
          <span className="text-purple-400 drop-shadow-2xl">SAMRAJYE</span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 subtitle-glow">
          <span className="text-gray-300">OWNERS ~ </span>
          <span className="text-red-400">ZAID</span>
          <span className="text-gray-300"> X </span>
          <span className="text-purple-400">MARCO</span>
        </h2>
        
        {/* Character Image */}
        <div className="relative mb-8 image-container">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-purple-500/30 rounded-full blur-xl"></div>
          <img 
            src={zaidCharacter} 
            alt="ZAID Character" 
            className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-red-500 shadow-2xl character-glow"
          />
          <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-pulse"></div>
        </div>
        
        {/* Character Name */}
        <h3 className={`text-4xl md:text-6xl font-black text-center character-name ${glitchEffect ? 'glitch' : ''}`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-red-500 drop-shadow-2xl">
            ZAID
          </span>
        </h3>
        
        {/* Floating Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
        
      </div>
      
      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-red-500 corner-glow"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-purple-500 corner-glow"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-purple-500 corner-glow"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-red-500 corner-glow"></div>
    </div>
  )
}

export default App

