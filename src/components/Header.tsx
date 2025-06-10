import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-800'}`}
            whileHover={{ scale: 1.05 }}
          >
            Akshansh Maurya
          </motion.h1>
          <ul className="flex space-x-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className={`${
                    isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900'
                  } transition-colors`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;