import React from 'react'
import './project.css'
import { Link } from 'react-router-dom'
import ProjectItem from '../../../components/ProjectItem/ProjectItem'
import marvelImage from '../../../assets/marvel.png'
const Project = () => {
  return (
    <section className='text-sky-700 project-container'>
        <article className='project-grid'>
            <div className='flex flex-col items-start project-header'>
                <span className='ubuntu-bold text-white project-header-title'>All Projects</span>
                <span className='text-gray project-btn'>Here's some of my noticable projects.</span>
                <Link to='/projects' className='text-highlight-green'>See more --+ </Link>
            </div>
        </article>
        <article className='project-grid'>
            <ProjectItem project_name="marvel-be you" project_image={marvelImage} project_description="A wesbite where your brand can find the best influencer to advertise your product." project_link='' technologies_used={''}/>
        </article>
        <article className='project-grid third-grid'>
            <ProjectItem project_name="SpeakSail" project_image={marvelImage} project_description="A platform to primary school students to learn and practice their English language skills." project_link='' technologies_used={''}/>
        </article>
        <article className='project-grid'>
            <ProjectItem project_name="AthletiHub" project_image={marvelImage} project_description="A place where athletes can connect with each other and find the best training facilities." project_link='' technologies_used=''/>
        </article>
    </section>
  )
}

export default Project