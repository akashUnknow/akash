import React from 'react';

import csharp from '../assets/icon/csharp.png';
import css3 from '../assets/icon/css3.png';
import figma from '../assets/icon/figma.png';
import git from '../assets/icon/git.png';
import javascript from '../assets/icon/javascript.png';
import reactjs from '../assets/icon/react.png';
import CenterOrbitPage from '../components/CenterOrbitPage';

const Job = () => {
  const skills = [
    { name: 'C#', icon: csharp },
    { name: 'CSS3', icon: css3 },
    { name: 'Figma', icon: figma },
    { name: 'Git', icon: git },
    { name: 'JavaScript', icon: javascript },
    { name: 'ReactJS', icon: reactjs },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0B0022] text-white flex flex-col items-center py-16">

      {/* Heading */}
      <div className="text-center max-w-xl">
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm currently looking to join a{" "}
          <span className="text-[#7127BA] font-semibold">
            cross-functional team
          </span>{" "}
          <br />
          that values improving people’s lives through accessible design.
        </p>
      </div>

      {/* Skills Row */}
      <div className="flex items-center justify-center gap-6 mt-10">
        {skills.map((skill) => (
          <div key={skill.name} className="p-2 bg-[#1A0838] rounded-full shadow-lg shadow-[#7127BA]/20">
            <img
              src={skill.icon}
              alt={skill.name}

              className="w-8 h-8 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Center Glowing Orb */}
      <div className="relative w-[450px] h-[350px] flex items-center justify-center mt-20">

        {/* Massive outer purple blur */}
        <div className="absolute inset-0 bg-[#7127BA] blur-[160px] opacity-40 rounded-full"></div>

        {/* Semi-circle glow bottom */}
        <div className="absolute bottom-0 w-[480px] h-[240px] bg-[#7127BA] blur-[120px] opacity-20 rounded-full"></div>

        {/* Main glowing circle */}
        <div className="relative w-56 h-56 bg-[#2C1250] rounded-full border border-[#7127BA]/50 flex items-center justify-center shadow-[0_0_30px_#7127BA55]">

          {/* extra inner glow */}
          <div className="absolute w-40 h-40 bg-[#7127BA] opacity-25 blur-2xl rounded-full"></div>

          {/* Neon Center Icon */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-16 h-16 bg-white opacity-20 blur-xl rounded-full"></div>

            <div className="text-white text-7xl font-bold drop-shadow-[0_0_15px_white] tracking-wider">
              Σ
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Job;
