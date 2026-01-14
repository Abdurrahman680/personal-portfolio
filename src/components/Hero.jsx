import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="section container">
            <div className="hero-content">
                <div className="hero-text">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-muted mb-4"
                    >
                        Hello, I am
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="title-gradient"
                    >
                        A Creative Developer
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hero-description"
                    >
                        I build wonderful, accessible, and high-performance digital experiences, with a strong focus on crafting premium and user-friendly interfaces.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="hero-btns"
                    >
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero-image"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="hero-blob"></div>
                    {/* Floating Animation Wrapper */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="hero-image-wrapper"
                    >
                        <div className="profile-img-container glass">
                            <img
                                src="/Photo_Abdurrahman.png"
                                alt="Muhammad Abdurrahman"
                                className="profile-img"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
