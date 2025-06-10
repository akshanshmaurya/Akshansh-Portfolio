import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              I'm deeply passionate about AI, Machine Learning, and Data Science, constantly exploring 
              ways to turn ideas into impactful solutions. When I'm not coding, you'll find me on the 
              badminton court, competing and pushing my limits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <SkillCard 
                title="AI & ML" 
                icon={<FaBrain className="text-4xl text-blue-600" />}
                items={["Machine Learning", "Neural Networks", "Deep Learning", "NLP"]} 
              />
              <SkillCard 
                title="Programming" 
                icon={<FaCode className="text-4xl text-blue-600" />}
                items={["Python", "Java", "DSA", "OOP"]} 
              />
              <SkillCard 
                title="Web Development" 
                icon={<FaLaptopCode className="text-4xl text-blue-600" />}
                items={["HTML/CSS", "JavaScript", "FastAPI", "Streamlit"]} 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) => (
  <motion.div 
    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="font-semibold text-xl ml-3">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-gray-600 flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default About;