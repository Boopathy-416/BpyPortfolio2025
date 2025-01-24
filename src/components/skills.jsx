import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { name: 'GraphQL', icon: ' https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg' },
  { name: 'MongoDB', icon: 'https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png' },
  { name: 'Java', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
  { name: 'Git', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
  { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'JavaScript', icon: ' https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
];

export default function Skills() {
  const containerRef = useRef(null);
  const wheelRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!wheelRef.current) return;

    const wheel = wheelRef.current;
    const itemCount = skills.length;
    const angleStep = 360 / itemCount;

    skills.forEach((_, index) => {
      const item = wheel.children[index];
      const angle = angleStep * index;
      const radius = 200;

      gsap.set(item, {
        x: Math.cos((angle * Math.PI) / 180) * radius,
        y: Math.sin((angle * Math.PI) / 180) * radius,
        rotation: angle,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onUpdate: (self) => {
          const currentRotation = (self.progress * 360) % 360;
          setRotation(currentRotation);
        },
      },
    });

    tl.to(wheel, {
      rotation: 360,
      duration: 1,
      ease: 'ease-in',
    });

    return () => {
      tl.kill();
    };
  }, []);

// const backgroundImageUrl = '/assets/fit gif.gif';

  return (
    <section className=' md:px-20 bg-black ' > 
    <div 
      ref={containerRef} 
      className="relative h-screen text-white  overflow-hidden"
      style={{
        // backgroundImage: 'url("/assets/fit gif.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div 
          ref={wheelRef}
          className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] "
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="absolute w-20 h-20 md:w-60 md:h-60 rounded-full bg-white/30 backdrop-blur-sm
                        flex items-center justify-center text-6xl transform -translate-x-8 -translate-y-8
                        border-1 border-white/0.5 hover:border-white/50 pointer-events-none transition-colors
                        "
              style={{
                transformOrigin: '50% 50%',
              }}
            >
              <img src={skill.icon} alt={skill.name} className="md:w-20 md:h-20 w-10 h-10" />
            </div>
          ))}
        </div>
        <h1 className='text-4xl pointer-events-none md:text-7xl text-end p-2 md:mx-56 justify-end overflow-hidden  transition-all '
        style={{
          fontFamily:"objectsans",
          transition: " ease-in 0.9s",
          // letterSpacing:"0.20em",
          // lineHeight:"2",
        }}>What  I Bring <br />to the Table</h1>
      </div>
    </div>
    </section>
  );
}
