import React from 'react'
import './projectItem.css'
import { Link } from 'react-router-dom'
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";

const ProjectItem = ({project_name, project_description, project_image, project_link, technologies_used}) => {
   technologies_used=["javascript", "nodejs",  "react"]
  return (
    <main className='project-card-container'>
        <div className="project-image-container">
            <img src={project_image} alt={project_name} />
        </div>
        <div className="px-3 py-3 flex flex-col items-start project-article">
            <div className="flex flex-col items-start w-full pb-2 card-title">
                <h2 className='text-white text-2xl mb-2 ubuntu-bold'>{project_name}</h2>
                <div className={`flex flex-row items-center gap-2 w-fit card-technology`}>
                    {<div className='w-fit flex flex-row gap-1 items-center  px-2  javascript'><RiJavascriptFill /> <span>Javascript</span>
                    </div>}
                    <div className='w-fit flex flex-row gap-1 items-center px-2  react'><FaReact /> React
                    </div>
                    <div className='w-fit flex flex-row gap-1 items-center px-2  node'><FaNodeJs /> Node.js
                    </div>
                </div>
            </div>
            <div className="my-2 text-gray text-start card-info">
                {project_description}
            </div>
        </div>
    </main>
  )
}

export default ProjectItem