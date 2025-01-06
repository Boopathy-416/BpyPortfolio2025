import { Link } from "react-router-dom"


export default function ContactForm() {
  return (
    <div className=" text-white min-h-screen " style={{
      paddingLeft:"5rem",
      paddingRight:"5rem"
    }}>
     
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div style={{
            fontFamily: 'Marlboro',
            letterSpacing:"0.06em"
          }}>
            <h1 className="text-4xl font-bold mb-4">CONTACT</h1>
            <p className="text-gray-300 mb-8">
              Ready to elevate your visual presence? I&apos;m here to bring your creative visions to life. Feel free to reach out
            </p>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-gray-400">Location</h2>
                <p>Tirupur, TamilNadu</p>
              </div>
              
              <div>
                <h2 className="text-gray-400">Phone:</h2>
                <p>+91 70944 29166</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-gray-400">First Name</label>
                <input
                  id="firstName"
                  placeholder="Your First Name"
                  className="bg-transparent border-gray-700 text-white p-2 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-gray-400">Last Name</label>
                <input
                  id="lastName"
                  placeholder="Your Last Name"
                  className="bg-transparent border-gray-700 text-white p-2 rounded-md"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-400">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-gray-700 text-white p-2 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-400">Select Service</label>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="graphic-design" name="service" value="graphic-design" className="text-gray-500" />
                  <label htmlFor="graphic-design" className="text-gray-400">Graphic Design</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="3d-modeling" name="service" value="3d-modeling" className="text-gray-500" />
                  <label htmlFor="3d-modeling" className="text-gray-400">3D Modeling&Animation</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="video-editing" name="service" value="video-editing" className="text-gray-500" />
                  <label htmlFor="video-editing" className="text-gray-400">Video Editing</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="video-production" name="service" value="video-production" className="text-gray-500" />
                  <label htmlFor="video-production" className="text-gray-400">Video Production</label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-gray-400">Message</label>
              <textarea
                id="message"
                placeholder="Write your message here"
                className="bg-transparent border-gray-700 text-white p-2 rounded-md min-h-[120px]"
              />
            </div>

            <button className="w-32 bg-white text-black hover:bg-gray-200 p-2 rounded-md">
              SUBMIT
            </button>
            
            <p className="text-sm text-gray-400">
              By submitting this form you read and agree to the{" "}
              <Link href="#" className="underline text-white">Terms & Conditions</Link> and our{" "}
              <Link href="#" className="underline text-white">privacy policy</Link>.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <p className="text-gray-400">All rights reserved @BPY CREATION</p>
          <div className="space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
