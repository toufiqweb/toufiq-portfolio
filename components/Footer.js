'use client';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Footer() {


  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];


  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/toufiqweb' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/toufiq-alahe-dev' },
    { name: 'Discord', icon: FaDiscord, href: 'https://discord.com/users/toufiq7367' },
    { name: 'Email', icon: MdEmail, href: 'mailto:toufiqalahe.dev@gmail.com' },
  ];



  return (
    <footer className="relative w-full py-16 mt-24 border-t border-white/5 bg-background overflow-hidden">

      {/* Glow (uses theme primary) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center overflow-hidden">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline-xl mb-6 bg-gradient-to-b from-on-surface via-on-surface to-on-surface/20 bg-clip-text text-transparent">
            Toufiq Alahe
          </h2>

          <p className="text-on-surface/70 text-body-lg leading-relaxed mb-10">
            Frontend Developer focused on building modern, responsive, and user-friendly web interfaces using React, Next.js, and Tailwind CSS. Passionate about writing clean code and continuously improving skills.
          </p>

          <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-semibold halo-ring active:scale-95 transition">
            Download Resume
          </button>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-16 pt-12 border-t border-outline/20"
        >

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs uppercase tracking-widest text-on-surface/50 mb-6">
              Quick_Links
            </h3>

            <ul className="space-y-3">
              {navLinks.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    className="text-on-surface/60 hover:text-on-surface transition flex items-center"
                  >
                    <span className="text-primary mr-2">/</span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center">
            <h3 className="text-xs uppercase tracking-widest text-on-surface/50 mb-6">
              Social_Linkage
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Magnetic strength={0.3}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container border border-outline/20 text-on-surface/60 hover:text-on-surface hover:bg-surface-container-high transition"
                      aria-label={item.name}
                    >
                      <span className="material-symbols-outlined">
                        <item.icon size={20} />
                      </span>
                    </a>
                  </Magnetic>
                </motion.div>
              ))}
            </div>
          </div>


          {/* Legal */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xs uppercase tracking-widest text-on-surface/50 mb-6">
              Legal
            </h3>

            <div className="space-y-2 text-right">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Project Notes', href: '#' },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xs text-on-surface/40 hover:text-primary uppercase tracking-widest block transition"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full mt-16 pt-6 border-t border-outline/20 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left"
        >

          {/* Left Section */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-on-surface/40 tracking-widest uppercase">

            <span className="text-center sm:text-left">
              © 2026 Toufiq Alahe. All rights reserved.
            </span>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              System Online
            </div>

            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
              Open for Opportunities
            </span>

          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-2 sm:gap-6 text-xs text-on-surface/40">

            <span className="text-center sm:text-left">
              Performance: Optimized
            </span>

            <span className="text-center sm:text-left">
              Built with Next.js + Passion
            </span>

          </div>

        </motion.div>
      </div>
    </footer>
  );
}