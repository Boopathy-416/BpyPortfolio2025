import Scene from "../functionality/ThreeDModel";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black p-5 lg:px-20 md:px-20">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
              style={{
                fontFamily: "objectsans",
              }}
            >
              About Me
            </h1>
            <div
              className="space-y-4 text-[#d5d5d5] "
              style={{
                fontFamily: "Marvel",
              }}
            >
              <p
                className="text-4xl first-line:uppercase first-line:tracking-widest
                first-letter:text-7xl first-letter:font-bold first-letter:text-[#d5d5d5]
                first-letter:mr-3 first-letter:float-left  "
              >
                I’m a passionate <mark> Frontend Developer</mark>
                and UI/UX Designer dedicated to crafting visually stunning and
                user-centric digital experiences. With a keen eye for detail and
                a love for clean, modern design, I transform ideas into
                intuitive, responsive interfaces.
              </p>
              <hr />
              <p className="text-2xl ">
                Although I began my journey as a B.E. Mechanical Engineer, my
                passion for coding and design led me to transition into the
                world of web development. Driven by creativity and a
                problem-solving mindset, I now specialize in building scalable,
                responsive web applications that blend aesthetics with
                functionality.
              </p>
              <hr />
              <p
                style={{
                  backgroundImage:
                    "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXdkN2JlcGswZWw1bGZydm9xMGhuYWh0Mnp4MHVhMGZjbnVlNzZyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2Je3ktsieOfOGa1G/giphy.webp')",
                  letterSpacing: "0.04em",
                }}
                className="text-slate-500 leading-7 mt-2 text-2xl"
              >
                Leveraging technologies like{" "}
                <mark className="bg-[#d5d5d5]">
                  React.js, JavaScript, and Tailwind CSS,
                </mark>{" "}
                I create sleek, user-friendly interfaces that deliver seamless
                experiences. My engineering background equips me with analytical
                thinking and a structured approach to tackling complex
                challenges in web development.
              </p>
            </div>
            <div
              class="group flex items-center"
              style={{
                fontFamily: "objectsans",
              }}
            >
              <img
                class="shrink-0 h-12 w-22 rounded-full"
                src="https://media.giphy.com/media/wNjw8sSZpA6EjNjFCG/giphy.gif?cid=ecf05e4738ey6m54dv2v2ub8b2hn3nftr2zxpsrthrfnbtqv&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt=""
              />
              <div class="ltr:ml-3 rtl:mr-3">
                <p class="text-3xl font-medium text-slate-300 group-hover:text-white">
                
                </p>
                <p class="text-sm font-medium text-slate-500 group-hover:text-slate-300">
                 
                </p>
            <button
              style={{
                fontFamily: "kungfu",
                textAlign:"center",
                transition: " ease-in 1s",
                letterSpacing: "0.04em",
              }}
              className="bg-black text-white px-8 py-3 transition-all shadow-[0_10px_50px_rgba(255,255,255,0.5)] rounded-md hover:bg-gray-800 hover:text-[#d2fb51] hover:scale-75 translate-x-4  transition-colors"
            >
              Let’s connect
            </button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
         <Scene />
          </div>
        </div>
      </div>
    </div>
  );
}
