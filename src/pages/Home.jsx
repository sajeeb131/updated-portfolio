import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar';
import Header from './parts/header/Header';
import About from './parts/about/About';
import Project from './parts/projects/Project';
import Contact from './parts/contact/Contact';
import Footer from '../components/footer/Footer';
import './style.css'
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className='px-20 py-12 flex flex-col gap-28 home-elements'>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }} 
        >
          <Header />
        </motion.div>

        {/* About */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }} 
        >
          <About />
        </motion.div>

        {/* Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 }}
        >
          <Project />
        </motion.div>

        {/* Contact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6 }}
        >
          <Contact />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8 }}
        >
          <Footer />
        </motion.div>
      </div>
    </main>
  );
};

export default Home;