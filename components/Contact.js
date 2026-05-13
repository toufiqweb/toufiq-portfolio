'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Magnetic from './Magnetic';
import emailjs from '@emailjs/browser';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  const revealVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send mail to you
      await emailjs.sendForm(
        'service_pf2azad',
        'template_shrxd68',
        e.target,
        'FJcq7e9dZRGyj528M'
      );

      // Send auto reply to sender
      await emailjs.sendForm(
        'service_pf2azad',
        'template_urm4vvu',
        e.target,
        'FJcq7e9dZRGyj528M'
      );

      alert('Message sent successfully!');
      e.target.reset();

    } catch (error) {
      console.log(error);
      alert('Failed to send message');
    }

  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/toufiqweb' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/toufiq-alahe-dev' },
    { icon: FaDiscord, href: 'https://discord.com/users/toufiq7367' },
  ]

  return (
    <section id="contact" className="w-full py-20 sm:py-32 relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header Section */}
        <div className="relative z-10 text-center mb-24 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-headline-md text-xs md:text-sm uppercase tracking-[0.3em] mb-6 block"
          >
            GET IN TOUCH
          </motion.span>
          <div className="relative flex flex-col items-center justify-center mb-6 md:mb-10 px-6 overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.03, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="font-headline-xl text-4xl sm:text-6xl md:text-headline-xl text-on-surface uppercase select-none pointer-events-none absolute whitespace-nowrap tracking-[0.2em]"
            >
              CONTACT
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline-lg text-3xl md:text-headline-lg text-on-surface relative z-10 tracking-tight"
            >
              CON<span className="text-primary">TACT</span>
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-primary mt-4 rounded-full relative z-10"
            />
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left Column: Info */}
          <div className="space-y-12">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="space-y-6"
            >
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface max-w-2xl">
                Let's work together
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities. If you have a project that needs a sophisticated technical touch, let's talk.
              </p>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="flex items-center gap-4 group"
            >
              <div className="md:w-12 w-8 h-8 md:h-12 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container-high transition-transform group-hover:scale-110 group-hover:border-primary">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p className="font-label-sm text-sm md:text-base themed-text-muted uppercase">Email me at</p>
                <p className="font-headline-md text-base md:text-xl text-on-surface break-all">toufiqalahe.dev@gmail.com</p>
              </div>

            </motion.div>
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="flex items-center gap-4 group"
            >
              <div className="md:w-12 w-8 h-8 md:h-12 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container-high transition-transform group-hover:scale-110 group-hover:border-primary">
                <span className="material-symbols-outlined text-primary">call</span>
              </div>
              <div>
                <p className="font-label-sm text-sm md:text-base themed-text-muted uppercase">Call me at</p>
                <p className="font-headline-md text-lg md:text-xl text-on-surface">+8801798800096</p>
              </div>

            </motion.div>


            <motion.div className="flex flex-col gap-4 items-center lg:items-start">
              <div className="flex gap-4">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon;

                  return (
                    <Magnetic key={i} strength={0.4}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container flex items-center justify-center border border-on-surface/5 hover:border-primary/50 hover:bg-primary/5 transition-all group hover:scale-110"
                      >
                        <Icon className="themed-text group-hover:text-primary transition-colors text-xl sm:text-2xl" />
                      </a>
                    </Magnetic>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-container border border-on-surface/5 orange-halo"
            >
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="font-label-sm text-sm md:text-base text-tertiary uppercase">Available for new projects</span>
            </motion.div>


          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl relative"
          >


            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="relative">
                  <label className="font-label-sm themed-text-neutral block mb-2 uppercase">Full Name</label>
                  <input
                    name="from_name"
                    className="w-full bg-transparent px-2 border-b border-on-surface/10 py-3 text-on-surface"
                    placeholder="Your full name"
                    type="text"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="font-label-sm themed-text-neutral block mb-2 uppercase">Email Address</label>
                  <input
                    name="from_email"
                    className="w-full bg-transparent px-2 border-b border-on-surface/10 py-3 text-on-surface"
                    placeholder="Your email address"
                    type="email"
                    required
                  />
                </div>

              </div>

              <div className="relative">
                <label className="font-label-sm themed-text-neutral block mb-2 uppercase">Subject</label>
                <input
                  name="subject"
                  className="w-full bg-transparent px-2 border-b border-on-surface/10 py-3 text-on-surface"
                  placeholder="Subject of your message"
                  type="text"
                  required
                />
              </div>

              <div className="relative">
                <label className="font-label-sm themed-text-neutral block mb-2 uppercase">Message</label>
                <textarea
                  name="message"
                  className="w-full bg-transparent px-2 border-b border-on-surface/10 py-3 text-on-surface resize-none"
                  placeholder="Describe your project or inquiry in detail..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <Magnetic strength={0.1}>
                <button
                  className="w-full py-5 bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container rounded-lg"
                  type="submit"
                >
                  Send Message
                </button>
              </Magnetic>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
