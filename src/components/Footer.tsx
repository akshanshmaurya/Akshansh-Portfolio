import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Akshansh Maurya</h3>
            <p className="text-gray-400">AI & Data Science Enthusiast</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/akshanshmaurya"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/akshansh-maurya-323478289"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Akshansh Maurya. All rights reserved.</p>
          <p className="mt-2">B.Tech (Hons.) Student | AI & Data Analytics Specialist</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;