import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity, FaChevronDown, FaFileDownload } from 'react-icons/fa';

const Education = () => {
    const [isOpen, setIsOpen] = useState(false);

    const educationData = [
        {
            id: 1,
            level: 'Matriculation',
            institute: 'Iqra Huffaz Secondary School',
            achievement: '80%',
            description: 'Secondary Education',
            icon: FaSchool,
            color: '#a18cd1'
        },
        {
            id: 2,
            level: 'Intermediate (FSc)',
            institute: 'Indus College',
            achievement: '73%',
            description: 'Pre-Engineering / Science',
            icon: FaGraduationCap,
            color: '#d18ca1'
        },
        {
            id: 3,
            level: 'Bachelor of Science in Computer Science',
            institute: 'Institute of Space Technology',
            achievement: 'CGPA: 3.14',
            description: 'Bachelor Degree',
            icon: FaUniversity,
            color: '#fbc2eb'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="education" className="education-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="education-header"
                >
                    <h2 className="title-gradient">Education</h2>
                    <p className="education-subtitle">
                        My academic journey and qualifications
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <div className="education-actions-wrapper">
                    {/* CV Download Button */}
                    <motion.a
                        href="/Muhammad_Abdurrahman_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cv-download-btn glass"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaFileDownload className="cv-icon" />
                        <span>View / Download CV</span>
                    </motion.a>

                    {/* Education Toggle Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="education-toggle-btn glass"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>View Educational Background</span>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="toggle-icon"
                        >
                            <FaChevronDown />
                        </motion.div>
                    </motion.button>
                </div>

                {/* Education Cards */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="education-grid"
                        >
                            {educationData.map((edu) => {
                                const IconComponent = edu.icon;
                                return (
                                    <motion.div
                                        key={edu.id}
                                        variants={cardVariants}
                                        className="education-card glass"
                                        whileHover={{
                                            y: -10,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <div className="education-card-header">
                                            <motion.div
                                                className="education-icon"
                                                style={{
                                                    background: `linear-gradient(135deg, ${edu.color}, #fbc2eb)`
                                                }}
                                                whileHover={{
                                                    rotate: [0, -10, 10, -10, 0],
                                                    transition: { duration: 0.5 }
                                                }}
                                            >
                                                <IconComponent />
                                            </motion.div>
                                            <div className="education-achievement">
                                                {edu.achievement}
                                            </div>
                                        </div>

                                        <div className="education-content">
                                            <h3 className="education-level">{edu.level}</h3>
                                            <p className="education-institute">{edu.institute}</p>
                                            <p className="education-description">{edu.description}</p>
                                        </div>

                                        {/* Decorative gradient bar */}
                                        <div
                                            className="education-card-footer"
                                            style={{
                                                background: `linear-gradient(90deg, ${edu.color}, #fbc2eb)`
                                            }}
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Education;
