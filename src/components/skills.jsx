import { useRef, useState, useEffect } from "react";
import { Save, Undo, Pencil, Eraser, Palette } from "lucide-react";
import gsap from "gsap";
import catSound from "/assets/audio/woww.wav"; // Add your cat sound file

export default function DrawingCanvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("black");
  const [lineWidth, setLineWidth] = useState(5);
  const bubbleRef = useRef(null);
  const audioRef = useRef(new Audio(catSound));
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    gsap.set(bubbleRef.current, { opacity: 0, scale: 0 });

    const handleMouseEnter = () => {
      gsap.to(bubbleRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "bounce.out",
      });
      audioRef.current.play();
    };

    const handleMouseLeave = () => {
      gsap.to(bubbleRef.current, { opacity: 0, scale: 0, duration: 0.3 });
    };

    const image = document.getElementById("hover-image");
    image.addEventListener("mouseenter", handleMouseEnter);
    image.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      image.removeEventListener("mouseenter", handleMouseEnter);
      image.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvas = () => {
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div
      id="skills"
      className="relative overflow-hidden h-screen w-full flex flex-col px-4 items-center justify-center bg-black"
    >
      {/* Particle effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white opacity-50 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          />
        ))}
      </div>
      {/* Top-left Image */}

      <h1 className="md:text-5xl text-2xl  text-center font-['robot'] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 py-4 opacity-80 mb-2">
        Showcase Your Talent
      </h1>
      <img
        src="/assets/paint.svg"
        alt="Top Left"
        className="hidden md:block absolute top-5 left-5 w-20 h-20"
      />

      {/* Bottom-right Image */}

      {/* Image */}
      <img
        id="hover-image"
        src="https://media.giphy.com/media/wKFY1XaNEainm/giphy.gif"
        alt="Bottom Right"
        className="hidden md:block absolute bottom-5 right-5 w-40 h-50"
      />

      {/* Speech Bubble */}
      <div
        ref={bubbleRef}
        className="absolute bottom-1/3 right-5 bg-border-4 text-white p-3 rounded-lg shadow-lg flex items-center justify-center"
      >
        <svg
          width="100"
          height="50"
          viewBox="0 0 100 50"
          className="absolute -bottom-3 right-2"
        >
          <path
            d="M10,50 Q50,-10 90,50"
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <span className="text-sm font-bold">Woww Nice One!</span>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={700}
        height={400}
        className="bg-white border-4 z-40  rounded-lg shadow-xl p-5 cursor-crosshair"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      ></canvas>

      {/* Tools */}
      <div className="absolute bottom-0 z-50 flex gap-4 bg-gradient-to-r border-4 border-black from-pink-500 via-yellow-500 to-blue-500 p-3 rounded-full mb-2 md:mb-0  md:shadow-lg md:shadow-slate-600">
        <button
          onClick={() => setColor("black")}
          className="p-2 bg-gray-200 rounded-full"
        >
          <Pencil color="black" />
        </button>
        <button
          onClick={() => setColor("white")}
          className="p-2 bg-gray-200 rounded-full"
        >
          <Eraser color="white" />
        </button>
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        <button onClick={saveCanvas} className="p-2 bg-gray-200 rounded-full">
          <Save color="black" />
        </button>
        <button onClick={clearCanvas} className="p-2 bg-gray-200 rounded-full">
          <Undo color="black" />
        </button>
      </div>
    </div>
  );
}
