import React from 'react'
import boy from '../assets/boy.png'
import CardDemo from '../components/CardDemo'
import Job from './Job'
import Contact from './Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#0B0022] text-white">

      {/* HERO SECTION */}
      <div className="flex items-center justify-center gap-10 pt-28">

        {/* Avatar Section */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Purple Glow */}
          <div className="absolute inset-0 bg-[#7127BA] blur-3xl opacity-40 rounded-full"></div>

          {/* Rounded Avatar */}
          <img
            src={boy}
            alt="boy"
            className="w-32 h-32 rounded-full object-cover relative z-10"
          />
        </div>

        {/* Text Section */}
        <div>
          <p className="text-gray-300 text-sm mb-1">
            Hello! I Am <span className="text-[#7127BA]">Akash</span>
          </p>

          <p className="text-gray-300 text-sm -mt-1">A Designer who</p>

          {/* Main Heading */}
          <h2 className="font-bold text-4xl leading-snug">
            Judges a book <br />
            by its{" "}
            <span className="relative inline-block px-3">
              {/* text */}
              <span className="text-[#7127BA] relative z-10">cover...</span>

              {/* oval outline */}
              <span className="
                absolute inset-0 border border-[#7127BA] rounded-full
                -left-1 -right-1 -top-1 -bottom-1 opacity-75
              "></span>
            </span>
          </h2>

          <p className="text-gray-400 mt-3">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="mt-20 mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-semibold">I'm a Software Engineer.|</h1>

        <h2 className="text-gray-300 mt-1">
          Currently, I'm a Software Engineer at{" "}
          <span className="text-blue-400">@ Facebook</span>
        </h2>

        <p className="mt-4 text-gray-400 leading-relaxed">
          A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.
        </p>
      </div>

      {/* WORK EXPERIENCE */}
      {/* WORK EXPERIENCE */}
      <div className="mt-20 px-20 relative pt-10 mb-20">

        {/* PURPLE GLOW BACKGROUND */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                  bg-[#7127BA] opacity-50 blur-[150px] rounded-full pointer-events-none">
        </div>

        <h1 className="text-2xl font-semibold mb-6 text-white relative z-10">
          Work Experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <CardDemo />
          <CardDemo />
          <CardDemo />
          <CardDemo />
        </div>

      </div>
      <div className="">
        <Job />
      </div>
      <div>
          <Contact />
      </div>
      <div>
      {/* <Footer /> */}
      <Footer/>
      </div>


    </div>
  )
}

export default Home
