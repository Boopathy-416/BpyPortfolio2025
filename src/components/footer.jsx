import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'
import { Twitter, Youtube, Instagram } from 'lucide-react'


gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const sectionRef = useRef(null)
  const audioRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)
  
  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !buttonRef.current) return
    
    const text = "Discover\n what a website \n can truly - achieve!"
    const lines = text.split('\n')
    
    // Clear existing content and create animated spans
    textRef.current.innerHTML = lines
      .map(line => {
        return `
          <div class="overflow-hidden">
            <div class="line pointer-events-none">
              ${Array.from(line)
                .map(char => `<span class="inline-block   opacity-0">${char}</span>`)
                .join('')}
            </div>
          </div>
        `
      })
      .join('')
    
    const chars = textRef.current.querySelectorAll('span')
    
    // Hide button initially
    gsap.set(buttonRef.current, { opacity: 0, y: 20 })
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse'
      }
    })
    
    // Animate each character
    tl.to(chars, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: {
        amount: 1.5,
        from: 'start'
      }
    })
    // Reveal button after text animation
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out'
    })
  }, [])

  const handleClick = () => {
    if (!buttonRef.current || !audioRef.current) return
    
    // Play sound effect
    audioRef.current.currentTime = 0
    audioRef.current.play()
    
    // Button burst animation
    gsap.to(buttonRef.current, {
      scale: 1.2,
      duration: 0.1,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    })
    
    // Confetti burst effect
    const rect = buttonRef.current.getBoundingClientRect()
    const x = (rect.left + rect.right) / 2 / window.innerWidth
    const y = (rect.top + rect.bottom) / 2 / window.innerHeight
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#FFD700', '#FFA500', '#FF4500']
    })
  }

  return (
    <section 
      
      className=" bg-[#000] "
    >
      <div
      ref={sectionRef}
       className="container min-h-screen flex flex-col items-center justify-center p-4 ">
      <div 
        ref={textRef}
        className="text-black transition-all hover:tracking-tighter bg-[#ececec] hover:bg-black hover:rounded-[100%] hover:py-[10%] hover:text-white shadow-[0_10px_50px_rgba(255,255,255,0.5)] p-5 md:p-10 rounded-xl  text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-12 text-center"
        style={{
          transition: " ease-in 1s",
          fontFamily:"objectsans"
        }}
      />
      
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="relative px-8 py-3 transition-all  text-lg font-medium text-white bg-black rounded-md 
                   overflow-hidden transition-transform hover:tracking-widest hover:scale-105 active:scale-95"
                   style={{
                    transition: " ease-in 0.4s",
                     fontFamily:"objectsans"
                  }} >
        <span className="relative z-10 leading-loose font-bold ">GET IN TOUCH</span>
        <div className="absolute inset-0  bg-gradient-to-r from-white/40  via-black/20 to-white/20 
                        animate-[shine_2s_infinite]" 
        />
      </button>

      <audio
        ref={audioRef}
        src="/assets/audio/pop.wav"
        preload="auto"
      />
   </div>
    
        <div className="container flex h-14 items-center justify-between bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdqbm42ZmFka3FpNTd1Y2NyNTN0N3gxYjI0dzk2czdpemszYjU2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3q3SUqPnxZGQpMNcjc/giphy.gif')] bg-cover px-4 md:px-6"
        style={{
          fontFamily:"objectsans",
          letterSpacing:"0.06em"
        }}>
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2">
          <img 
            src="/assets/icon.png" 
            alt="Bpy Logo" 
            width={100} 
            className="h-auto w-[50px] md:w-[50px]"
          />
        </Link>

        {/* Copyright Text */}
        <p className="text-sm md:text-sm text-muted-foreground font-extrabold hidden sm:block">
          Copyright © {new Date().getFullYear()}. All rights reserved - Made by BPY-Portfolio 
        </p>
        
        {/* Mobile Copyright - Shows only on small screens */}
        <p className="text-xs text-muted-foreground sm:hidden">
          © {new Date().getFullYear()} BPY-Portfolio 
        </p>

        {/* Social Icons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link 
            href="#" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
          <Link 
            href="#" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
          <Link 
            href="#" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
          <Link 
            href="#" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="TikTok"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="h-4 w-4 md:h-5 md:w-5 fill-current"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
