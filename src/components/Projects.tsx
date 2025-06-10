import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Sahi Jawab v2",
    description: "Multi-chatbot web app integrating OpenAI, Gemini, and Anthropic APIs. Winner of the RPC Hackathon at SJB Institute of Technology, Bangalore.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["OpenAI", "Gemini", "FastAPI", "Python"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Brain Tumor Detection System",
    description: "A full-stack AI project for medical image analysis and early tumor detection using advanced deep learning techniques.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["AI", "Deep Learning", "Medical Imaging", "Python"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Deepfake Detection System",
    description: "Researching robust AI solutions to detect synthetic images with high accuracy using state-of-the-art machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Machine Learning", "Computer Vision", "Python", "TensorFlow"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Speech Therapy Assistant",
    description: "AI-driven speech therapy platform using NLP and adaptive learning to provide personalized therapy sessions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["NLP", "AI", "React", "FastAPI"],
    links: {
      github: "#",
      live: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="relative">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string) => (
          <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <motion.a
          href={project.links.github}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <FaGithub /> Code
        </motion.a>
        <motion.a
          href={project.links.live}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <FaExternalLinkAlt /> Live Demo
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default Projects;