import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
              Gurpinder Singh
            </h2>
            <p className="text-gray-400">
              Frontend Developer crafting digital experiences with React and modern web technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to get updates on my latest projects and insights.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-700 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            &copy; {currentYear} Gurpinder Singh. All rights reserved.
          </p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Crafted with
            <FaHeart className="text-red-500" />
            using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
