import React, { useEffect, useState } from 'react'
import boy from '../assets/boy.png'
import CardDemo from '../components/CardDemo'
import Job from './Job'
import Contact from './Contact'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { BookOpen, Cog } from 'lucide-react'
import icon from "../assets/icon/icon.png"
import Mess from "../assets/icon/MessCup.png"
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "../animations/variants";


const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Java Full Stack","Web Developer", "Web Designer", "Backend Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <motion.div
      className="w-full min-h-screen bg-[#0B0022] text-white"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >

      {/* HERO SECTION */}
      <motion.div
        className="flex items-center justify-center gap-10 pt-28"
        variants={fadeInUp}
      >

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
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 text-sm mb-1"
          >
            Hello! I Am <span className="text-[#7127BA]">Akash</span>
          </motion.p>
          <p>
            <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
              <span className="wrap">{text}</span>
            </span>
          </p>


          {/* Main Heading */}
          <h2 className="font-bold text-4xl leading-snug">
            Builds powerful <br />
            <span className="relative inline-block px-3">
              {/* text */}
              <span className="text-[#7127BA] relative z-10">
                backend & frontend
              </span>

              {/* oval outline */}
              <span
                className="
          absolute inset-0 border border-[#7127BA] rounded-full
          -left-1 -right-1 -top-1 -bottom-1 opacity-75
        "
              ></span>
            </span>
          </h2>

          <p className="text-gray-400 mt-3">
            Because great applications need both solid logic and smooth user experiences.
          </p>
        </div>

      </motion.div>

      {/* ABOUT SECTION */}
      <motion.div
        className="mt-20 mx-auto max-w-2xl text-center"
        variants={fadeInUp}
      >

        <h1 className="text-3xl font-semibold">I'm a Software Engineer.|</h1>

        <h2 className="text-gray-300 mt-1">
          Currently, I'm a Software Engineer at{" "}
          <Link to="https://www.gi-de.com/en/">
            <span className="text-blue-400">@Giesecke devrient</span>
          </Link>
        </h2>

        <p className="mt-4 text-gray-400 leading-relaxed">
          A self-taught Backend and Frontend Developer with 3+ years of hands-on experience in building scalable web applications.
          I create reliable, high-performance systems with clean APIs and intuitive user interfaces, balancing technical excellence with real business needs.
        </p>
      </motion.div>

      {/* WORK EXPERIENCE */}
      {/* WORK EXPERIENCE */}
      <div className="mt-20 px-20 relative pt-10 mb-20">

        {/* PURPLE GLOW BACKGROUND */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                  bg-[#7127BA] opacity-50 blur-[150px] rounded-full pointer-events-none">
        </div>

        <h1 className="text-2xl font-semibold mb-6 text-white relative z-10">
          Project
        </h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <CardDemo
            title="Test Battle"
            des="A free competitive exam platform to practice mock tests, improve accuracy, and prepare smarter—without paying anything."
            btnLink="https://zesty-scone-f06cb7.netlify.app"
            icon={<BookOpen size={40} className="text-[#4F228D]" />}
          />
          <CardDemo
            title="Crypto Manager"
            des="A professional cryptography utility that provides encryption, decryption, and data conversion tools in a clean and user-friendly desktop interface."
            btnLink="https://github.com/akashUnknow/cryptoManagerDesktop"
            icon={<img src={icon} alt="Java Logo" className="w-16 h-16 object-contain" />}
          />
          <CardDemo
            title="MessCoupon"
            des="MessCoupon is a Java-based application developed to manage mess coupons and meal records efficiently.
It helps users and administrators track coupon usage"
            btnLink="https://github.com/akashUnknow/MessCupFX"
            icon={<img src={Mess} alt="Java Logo" className="w-16 h-16 object-contain" />}
          />
          <CardDemo
            title="Mech Guru"
            des="Mech Guru is an automobile-focused learning platform that simplifies mechanical concepts and helps users understand vehicle systems, troubleshooting."
            btnLink="https://beamish-chebakia-a9ffab.netlify.app/"
            icon={<Cog size={40} className="text-[#4F228D]" />}
          />
        </motion.div>

      </div>
      <div className="">
        <Job />
      </div>
      <div>
        <Contact />
      </div>
      <motion.div variants={fadeInUp}>
        <Footer />
      </motion.div>



    </motion.div>
  )
}

export default Home
