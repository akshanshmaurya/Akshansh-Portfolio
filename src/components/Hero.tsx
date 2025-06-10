import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/67358-521707474.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="container mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Akshansh Maurya
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            <p className="mb-4">
              An 18-year-old Tech Enthusiast and B.Tech (Hons.) 2nd-year student specializing in 
              AI and Data Analytics. Passionate about turning innovative ideas into impactful solutions.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </motion.a>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <motion.a
                href="https://github.com/akshanshmaurya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-gray-200"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/akshansh-maurya-323478289"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-gray-200"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;