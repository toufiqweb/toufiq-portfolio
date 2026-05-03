'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Magnetic from './Magnetic';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="w-full py-32  relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 relative z-10">

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
              className="font-headline-xl text-4xl sm:text-6xl md:text-headline-xl text-white uppercase select-none pointer-events-none absolute whitespace-nowrap tracking-[0.2em]"
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


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
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
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-white max-w-2xl">
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
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container-high transition-transform group-hover:scale-110 group-hover:border-primary">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p className="font-label-sm text-neutral-500 uppercase">Email me at</p>
                <p className="font-headline-md text-xl text-white">hello@rb-frontend.dev</p>
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-container border border-white/5 orange-halo"
            >
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="font-label-sm text-tertiary uppercase">Available for new projects</span>
            </motion.div>

            {/* Abstract Image Decor */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="relative pt-8"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida/ADBb0uhljSneqrj_5BU5kvuB9cOWnaXl3Nbng958us854E84DTj1zMnXCxBvAHTxGaf8J3lQdjmnbmvgB3Fq-jdX1BWTihBZlt4jynIf5pl7dv6N0tHN_4OkdshMd4x09RTHnVKiyKnpDDrMcDdCgG7A7FsWnxXwzaCSeTPPe1Cx4hZnijwNsZ48teSmryX28viCQcO0wh6fVFjiZ4ORFLiZ2famOFmZy16GGdCb-YzE5vlwAOWuxYGA3l5raK-IiC8BVCcNV5XavG0Z4bA"
                alt="Technical workspace"
                width={500}
                height={300}
                className="rounded-xl border border-white/10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 w-full max-w-md object-cover aspect-video"
                unoptimized
              />
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-10 rounded-2xl relative"
          >
            {/* Subtle glow behind card */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full"></div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="font-label-sm text-neutral-400 block mb-2 uppercase">Full Name</label>
                  <input
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white font-body-md form-input-focus transition-all placeholder:text-neutral-700"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="font-label-sm text-neutral-400 block mb-2 uppercase">Email Address</label>
                  <input
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white font-body-md form-input-focus transition-all placeholder:text-neutral-700"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <label className="font-label-sm text-neutral-400 block mb-2 uppercase">Subject</label>
                <input
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white font-body-md form-input-focus transition-all placeholder:text-neutral-700"
                  placeholder="Project Inquiry"
                  type="text"
                  required
                />
              </div>
              <div className="relative">
                <label className="font-label-sm text-neutral-400 block mb-2 uppercase">Message</label>
                <textarea
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white font-body-md form-input-focus transition-all resize-none placeholder:text-neutral-700"
                  placeholder="Tell me about your project..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <Magnetic strength={0.1}>
                <button
                  className="w-full py-5 bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container font-headline-md rounded-lg hover:shadow-[0_0_30px_rgba(255,87,51,0.4)] transition-all active:scale-[0.98] mt-4"
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
