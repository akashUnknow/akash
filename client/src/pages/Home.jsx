import React from 'react'
import boy from '../assets/boy.jpg'
import CardDemo from '../components/CardDemo'


const Home = () => {
  return (
    <div>
      <div className='flex items-start border-2 border-solid border-white'>
        <div className='ww-10 h-10 mt-28 mx-20'>
          <img src={boy} alt="boy" className='w-20 h-20 rounded-4xl bg-transparent' />
        </div>
        <div className='text-white mt-28'>
          <h1 className='font-bold'>Hello I Am <span className='transition-all duration-300 ease-in-out 
                        hover:text-blue-400 hover:scale-110 cursor-pointer font-light'>Akash</span></h1>
          <h1 className='font-light'>A design who</h1>
          <h2 className="font-bold text-3xl text-white mb-4">
            Judges a book <br />
            by its{" "}
            <span className="relative inline-block px-2 mt-4">
              {/* Text */}
              <span className="relative z-10 text-[#7127BA] cursor-pointer">cover...</span>

              {/* Oval outline */}
              <span
                className="absolute inset-0 border-2 border-[#7127BA] rounded-full 
                 -left-1 -right-1 -top-1 -bottom-1 opacity-70"
              ></span>
            </span>
          </h2>



          <h2>Because if the cover does not impress you what else can?</h2>
        </div>
      </div>
      <div className='border-2 border-solid border-white'>
        <h1>I'm a Software Engineer.| </h1>
        <h2>Currently, I'm a Software Engineer at <span>Facebook</span></h2>
        <p>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.</p>
      </div>
      <div className='border-2 border-solid border-white'>
        <h1>Work Experience</h1>
        <CardDemo />

      </div>

    </div>
  )
}

export default Home