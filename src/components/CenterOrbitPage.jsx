import React from "react";

const CenterOrbitPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* 🔵 ORBIT RING */}
      <div className="absolute w-[350px] h-[350px] rounded-full border border-purple-500/30 animate-spin-slow"></div>

      {/* 🔵 SECOND ORBIT RING */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-purple-500/10 animate-spin-slower"></div>

      {/* 🌟 CENTER CIRCLE WITH GLOW */}
      <div className="relative z-10">
        <div className="w-32 h-32 rounded-full bg-purple-600 shadow-[0_0_80px_20px_rgba(139,92,246,0.6)] flex items-center justify-center text-white font-bold text-xl">
          ME
        </div>

        {/* —— 📌 CONNECTOR LINE —— */}
        <div className="w-[2px] h-32 bg-purple-500 mx-auto"></div>

        {/* —— 📌 SKILLS LABEL —— */}
        <h1 className="text-purple-400 text-3xl font-semibold text-center mt-4 tracking-wide">
          Skills
        </h1>
      </div>

      {/* OPTIONAL FLOATING ORBITING DOTS */}
      <span className="absolute w-4 h-4 bg-purple-400 rounded-full animate-orbit"></span>
      <span className="absolute w-3 h-3 bg-purple-300 rounded-full animate-orbit2"></span>
    </div>
  );
};

export default CenterOrbitPage;
