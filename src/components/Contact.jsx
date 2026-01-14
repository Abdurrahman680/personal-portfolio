import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your form submission logic (e.g., API call, email service)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        setFormData({
            fullName: '',
            email: '',
            message: ''
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="contact" className="contact-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="contact-header"
                >
                    <h2 className="title-gradient">Contact Me</h2>
                    <p className="contact-subtitle">
                        Feel free to contact me for projects, internships, freelance work, or collaboration.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="contact-content"
                >
                    {/* Contact Form */}
                    <motion.div variants={itemVariants} className="contact-form-wrapper glass">
                        <h3 className="form-title">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div variants={itemVariants} className="contact-info-wrapper">
                        <div className="contact-info glass">
                            <h3 className="info-title">Get in Touch</h3>

                            <div className="info-grid">
                                {/* Email */}
                                <motion.a
                                    href="mailto:itsrahman.developer@gmail.com"
                                    className="info-item"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="info-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="info-content">
                                        <h4>Email</h4>
                                        <p>itsrahman.developer@gmail.com</p>
                                    </div>
                                </motion.a>

                                {/* WhatsApp */}
                                <motion.div
                                    className="info-item"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="info-icon">
                                        <FaWhatsapp />
                                    </div>
                                    <div className="info-content">
                                        <h4>WhatsApp</h4>
                                        <p>+92 330-9316883</p>
                                        <p>+92 329-5209043</p>
                                    </div>
                                </motion.div>

                                {/* Location */}
                                <motion.div
                                    className="info-item"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="info-icon">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="info-content">
                                        <h4>Location</h4>
                                        <p>Pakistan</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Social Links */}
                            <div className="social-section">
                                <h4 className="social-title">Connect With Me</h4>
                                <div className="social-links">
                                    <motion.a
                                        href="https://github.com/Abdurrahman680"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/muhammad-abdurrahman-9471b1252"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaLinkedin />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.instagram.com/abdurrahman_developer?igsh=bWYxMWVlZWcycmNw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaInstagram />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Muhammad Abdurrahman. Built with React & Passion.</p>
            </footer>
        </section>
    );
};

export default Contact;
