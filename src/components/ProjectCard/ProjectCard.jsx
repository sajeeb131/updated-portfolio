import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { id, title, description, image, technologies, link, isExternal } = project;

  // Map technology names to their respective icons
  const techIcons = {
    javascript: <RiJavascriptFill />,
    nodejs: <FaNodeJs />,
    react: <FaReact />,
    php: <FaPhp />,
    mongodb: <BiLogoMongodb />,
    mysql: <GrMysql />,
    docker: <FaDocker />
  };

  // Animation variants
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    hover: { 
      y: -10,
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  const handleClick = () => {
    if (isExternal) {
      window.open(link, '_blank');
    } else {
      // For internal links, we'll use React Router
      // This will be handled by the Link component
    }
  };

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={handleClick}
    >
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          {isExternal ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaExternalLinkAlt />
            </a>
          ) : (
            <Link to={link} className="project-link">
              <FaExternalLinkAlt />
            </Link>
          )}
        </div>
      </div>
      
      <div className="project-content">
        <h3>{title}</h3>
        
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <div key={index} className={`tech-tag ${tech}`}>
              {techIcons[tech]}
              <span>{tech}</span>
            </div>
          ))}
        </div>
        
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;