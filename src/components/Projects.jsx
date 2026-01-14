import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'LearnifyAi',
        description: 'An AI-powered learning platform using the MERN stack with Clerk Authentication.',
        tags: ['MERN Stack', 'Clerk Auth', 'React', 'MongoDB'],
        link: 'https://github.com/Abdurrahman680',
        image: '/LearnifyAi.png'
    },
    {
        title: 'Noorayn Academy',
        description: 'A comprehensive educational platform built with the MERN stack.',
        tags: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
        link: 'https://noorayn-academy-mk2o.vercel.app/',
        image: '/nooraynAcademy.png'
    }
];

const smallProjects = [
    {
        title: 'Ezitech Institute Landing Page',
        description: 'A responsive landing page clone for Ezitech Institute.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/Abdurrahman680',
        image: '/EzitechInstitute.png'
    },
    {
        title: 'Analog Clock',
        description: 'A real-time analog clock with smooth animations.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/Abdurrahman680',
        image: '/analogClock.png'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="section-title"
            >
                Featured Projects
            </motion.h2>

            <div className="projects-grid featured-projects">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="project-card glass"
                    >
                        {project.image ? (
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                        ) : (
                            <div className="project-image-placeholder"></div>
                        )}
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="project-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">
                                View Project
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="section-title small-projects-title"
            >
                Small Projects
            </motion.h2>

            <div className="projects-grid">
                {smallProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="project-card glass"
                    >
                        {project.image ? (
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                        ) : (
                            <div className="project-image-placeholder"></div>
                        )}
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="project-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">
                                View Code
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
