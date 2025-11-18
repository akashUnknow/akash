import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-[#0B0022] text-white py-16 mt-20 border-t border-[#7127BA]/30">

      {/* Main Footer Container */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ---- Left: Brand ---- */}
        <div>
          <h2 className="text-3xl font-bold text-[#7127BA] tracking-wider">
            A K A S H
          </h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Building meaningful digital experiences with modern & creative UI designs.
          </p>
        </div>

        {/* ---- Middle: Contact Info ---- */}
        <div>
          <h3 className="text-xl font-semibold text-[#9f65ff] mb-4">Contact</h3>

          <div className="flex items-center gap-3 mb-3 text-gray-300">
            <Mail className="w-5 h-5 text-[#7127BA]" />
            <span>akash@example.com</span>
          </div>

          <div className="flex items-center gap-3 mb-3 text-gray-300">
            <Phone className="w-5 h-5 text-[#7127BA]" />
            <span>+91 9876543210</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <MapPin className="w-5 h-5 text-[#7127BA]" />
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>

        {/* ---- Right: Social Links ---- */}
        <div>
          <h3 className="text-xl font-semibold text-[#9f65ff] mb-4">Follow Me</h3>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-[#1A0838] hover:bg-[#7127BA] transition"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-[#1A0838] hover:bg-[#7127BA] transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-[#1A0838] hover:bg-[#7127BA] transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* ---- Bottom Line ---- */}
      <div className="text-center mt-12 text-gray-400 text-sm">
        © {new Date().getFullYear()} Akash — All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
