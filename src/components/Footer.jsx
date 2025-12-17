import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B0022] text-white py-16 border-t border-[#7127BA]/30 relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#7127BA] blur-[180px] opacity-20 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 animate-fadeUp">

        {/* ---- Brand ---- */}
        <div>
          <h2 className="text-3xl font-bold text-[#7127BA] tracking-widest">
            A K A S H
          </h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Building meaningful digital experiences with modern, scalable
            frontend & backend solutions.
          </p>
        </div>

        {/* ---- Contact Info ---- */}
        <div>
          <h3 className="text-xl font-semibold text-[#9f65ff] mb-5">
            Contact
          </h3>

          <a
            href="mailto:akash.unknow@gmail.com"
            className="flex items-center gap-3 mb-4 text-gray-300 hover:text-[#A66BFF] transition"
          >
            <Mail className="w-5 h-5 text-[#7127BA]" />
            akash.unknow@gmail.com
          </a>

          <a
            href="tel:+916398017568"
            className="flex items-center gap-3 mb-4 text-gray-300 hover:text-[#A66BFF] transition"
          >
            <Phone className="w-5 h-5 text-[#7127BA]" />
            +91 63980 17568
          </a>

          <a
            href="https://maps.google.com/?q=Noida,India"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-[#A66BFF] transition"
          >
            <MapPin className="w-5 h-5 text-[#7127BA]" />
            Noida, India
          </a>
        </div>

        {/* ---- Social Links ---- */}
        <div>
          <h3 className="text-xl font-semibold text-[#9f65ff] mb-5">
            Follow Me
          </h3>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, link: "https://github.com/akashUnknow" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/akash-1797051b0/" },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#1A0838] hover:bg-[#7127BA] hover:scale-110 transition-all duration-300 shadow-lg shadow-[#7127BA]/20"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative text-center mt-12 text-gray-400 text-sm">
        © {new Date().getFullYear()} Akash — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
