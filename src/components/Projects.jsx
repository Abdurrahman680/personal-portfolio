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
                className="title"
                style={{ marginBottom: '3rem' }}
            >
                Featured Projects
            </motion.h2>

            <div className="projects-grid" style={{ marginBottom: '5rem' }}>
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
                            <div style={{ height: '180px', marginBottom: '1rem', overflow: 'hidden', borderRadius: '10px' }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ) : (
                            <div style={{ height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginBottom: '1rem' }}></div>
                        )}
                        <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{project.description}</p>
                        <div className="flex" style={{ gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '20px', background: 'rgba(161, 140, 209, 0.2)', color: '#fff' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                                View Project
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="title"
                style={{ marginBottom: '3rem', fontSize: '2rem' }}
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
                            <div style={{ height: '180px', marginBottom: '1rem', overflow: 'hidden', borderRadius: '10px' }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ) : (
                            <div style={{ height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginBottom: '1rem' }}></div>
                        )}
                        <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{project.description}</p>
                        <div className="flex" style={{ gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '20px', background: 'rgba(161, 140, 209, 0.2)', color: '#fff' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
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
