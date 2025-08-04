import React from 'react'
import './project.css'
import { Link, useNavigate } from 'react-router-dom'
import ProjectItem from '../../../components/ProjectItem/ProjectItem'
import marvelImage from '../../../assets/marvel.png'
import ClarexImage from '../../../assets/Clarex_co.png'
import SpeakSail from '../../../assets/speaksail.png'
import { motion } from 'framer-motion'

const Project = () => {
    const navigate = useNavigate();
    const handleNavigate = (project) => {
        switch(project){
            case 'marvel':
                navigate('/404')
                break;
            case 'clarex':
                window.location.href = ('https://clarex.co/')
                break;
            case 'speaksail':
                window.location.href = ('https://speaksail-client.onrender.com/')
                break;
            case 'default':
                return;
        }
    }

    return (
        <section className='text-sky-700 project-container'>
            <article className='project-grid'>
                <div className='flex flex-col items-start gap-3 project-header'>
                    <span className='ubuntu-bold text-white project-header-title'>All Projects</span>
                    <span className='text-gray project-btn'>Here's some of my notable projects.</span>
                    <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        <Link to='/projects' className='text-highlight-green project-link'>
                            See more <span className="arrow">--+</span>
                        </Link>
                    </motion.div>
                </div>
            </article>
            <article className='project-grid' onClick={()=>handleNavigate('marvel')}>
                <ProjectItem 
                    project_name="Marvel-Be You" 
                    project_image={marvelImage} 
                    project_description="A website where your brand can find the best influencer to advertise your product." 
                    project_link='' 
                    technologies_used={''}
                />
            </article>
            <article className='project-grid third-grid' onClick={()=>handleNavigate('speaksail')}>
                <ProjectItem 
                    project_name="SpeakSail" 
                    project_image={SpeakSail} 
                    project_description="A platform for primary school students to learn and practice their English language skills." 
                    project_link='' 
                    technologies_used={''}
                />
            </article>
            <article className='project-grid' onClick={()=>handleNavigate('clarex')}>
                <ProjectItem 
                    project_name="Clarex Ltd." 
                    project_image={ClarexImage} 
                    project_description="A place where athletes can connect with each other and find the best training facilities." 
                    project_link='' 
                    technologies_used=''
                />
            </article>
        </section>
    )
}

export default Project