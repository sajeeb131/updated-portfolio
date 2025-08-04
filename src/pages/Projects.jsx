import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import './Projects.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  
  // Project data
  const projects = [
    {
      id: 'marvel',
      title: 'Marvel-Be You',
      description: 'A website where your brand can find the best influencer to advertise your product.',
      image: require('../assets/marvel.png'),
      category: ['web', 'frontend'],
      technologies: ['javascript', 'react'],
      link: '/404',
      isExternal: false
    },
    {
      id: 'speaksail',
      title: 'SpeakSail',
      description: 'A platform for primary school students to learn and practice their English language skills.',
      image: require('../assets/speaksail.png'),
      category: ['web', 'fullstack'],
      technologies: ['javascript', 'react', 'nodejs'],
      link: 'https://speaksail-client.onrender.com/',
      isExternal: true
    },
    {
      id: 'clarex',
      title: 'Clarex Ltd.',
      description: 'A place where athletes can connect with each other and find the best training facilities.',
      image: require('../assets/Clarex_co.png'),
      category: ['web', 'frontend'],
      technologies: ['javascript', 'react'],
      link: 'https://clarex.co/',
      isExternal: true
    }
  ];

  // Filter categories
  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const handleProjectFilter = (category) => {
    setActiveFilter(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      
      if (category === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter((project) => project.category.includes(category)));
      }
    }, 500);
  };

  return (
    <main>
      <Navbar />
      <div className='projects-container'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="projects-header"
        >
          <h1 className=''>Projects</h1>
          <p>Here are some of my notable projects that showcase my skills and experience.</p>
        </motion.div>

        <motion.div 
          className="projects-filter"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => handleProjectFilter(category.key)}
              className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="projects-cards"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Projects;