import React from 'react';
import { motion } from 'framer-motion';

import csharp from '../assets/icon/csharp.png';
import css3 from '../assets/icon/css3.png';
import figma from '../assets/icon/figma.png';
import git from '../assets/icon/git.png';
import javascript from '../assets/icon/javascript.png';
import reactjs from '../assets/icon/react.png';

const Job = () => {
  const skills = [
    { name: 'C#', icon: csharp },
    { name: 'JavaScript', icon: javascript },
    { name: 'React', icon: reactjs },
    { name: 'CSS', icon: css3 },
    { name: 'Git', icon: git },
    { name: 'Figma', icon: figma },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0B0022] text-white flex flex-col items-center py-16 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a{" "}
          <span className="text-[#7127BA] font-semibold">
            Backend & Frontend Developer
          </span>
          <br />
          who builds scalable systems and elegant user interfaces.
        </p>
      </motion.div>

      {/* Skills */}
      <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.15 }}
            className="p-3 bg-[#1A0838] rounded-full shadow-lg shadow-[#7127BA]/20"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Center Orb */}
      <div className="relative w-[450px] h-[350px] flex items-center justify-center mt-20">

        {/* Outer glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute inset-0 bg-[#7127BA] blur-[160px] opacity-40 rounded-full"
        />

        {/* Main orb */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          className="relative w-56 h-56 bg-[#2C1250] rounded-full border border-[#7127BA]/50
                     flex items-center justify-center shadow-[0_0_30px_#7127BA55]"
        >
          <div className="absolute w-40 h-40 bg-[#7127BA] opacity-25 blur-2xl rounded-full" />

          {/* Center Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white text-6xl font-bold drop-shadow-[0_0_15px_white]"
          >
            &lt;/&gt;
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default Job;
