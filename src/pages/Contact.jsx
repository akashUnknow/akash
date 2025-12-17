import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-[#0B0022] text-white px-6 py-20 flex flex-col items-center overflow-hidden">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center"
      >
        Let's Work <span className="text-[#A66BFF]">Together</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 text-center max-w-xl mt-3"
      >
        Feel free to reach out for collaborations, opportunities or just a friendly chat.
      </motion.p>

      {/* Glow Blob */}
      <div className="absolute top-40 w-[500px] h-[500px] bg-[#7127BA] blur-[200px] opacity-30 rounded-full pointer-events-none"></div>

      {/* MAIN CARD */}
      <div className="mt-16 w-full max-w-5xl flex flex-col md:flex-row gap-10 z-10">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 bg-[#1A0F33]/40 backdrop-blur-xl border border-[#A66BFF]/20 rounded-2xl p-8 shadow-[0_0_30px_#7436FF30]"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          {/* Email */}
          <a
            href="mailto:akash.unknow@gmail.com"
            className="flex items-center gap-4 mb-6 group"
          >
            <div className="w-12 h-12 bg-[#7436FF]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
              <Mail className="text-[#A66BFF]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email Me</p>
              <p className="font-medium group-hover:text-[#A66BFF] transition">
                akash.unknow@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+916398017568"
            className="flex items-center gap-4 mb-6 group"
          >
            <div className="w-12 h-12 bg-[#7436FF]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
              <Phone className="text-[#A66BFF]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Call Me</p>
              <p className="font-medium group-hover:text-[#A66BFF] transition">
                +91 6398017568
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#7436FF]/20 rounded-xl flex items-center justify-center">
              <MapPin className="text-[#A66BFF]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-medium">Noida, India</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 bg-[#1A0F33]/40 backdrop-blur-xl border border-[#A66BFF]/20 rounded-2xl p-8 shadow-[0_0_30px_#7436FF30]"
        >
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <div className="flex flex-col mb-4">
            <label className="text-sm text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              className="bg-[#110826] border border-[#7436FF40] rounded-xl px-4 py-3 outline-none focus:border-[#A66BFF] transition"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              className="bg-[#110826] border border-[#7436FF40] rounded-xl px-4 py-3 outline-none focus:border-[#A66BFF] transition"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm text-gray-300 mb-1">Message</label>
            <textarea
              rows="5"
              className="bg-[#110826] border border-[#7436FF40] rounded-xl px-4 py-3 outline-none focus:border-[#A66BFF] transition"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full mt-3 bg-[#A66BFF] hover:bg-[#8a45ff] transition rounded-xl py-3 flex items-center justify-center gap-2 font-semibold"
          >
            Send Message
            <Send size={18} />
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
