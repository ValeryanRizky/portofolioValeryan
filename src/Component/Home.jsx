import React from 'react'
import { motion } from 'motion/react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}

const imageVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.9 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
}

const techStack = {
    frontend: ['React.js', 'Tailwind CSS'],
    qa: ['Robot Framework', 'Selenium', 'Appium'],
}

const viewportConfig = { once: false, amount: 0.3 }

export default function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-white text-slate-900 flex items-center justify-center px-6 py-20 overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <motion.div
                className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
                animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none"
                animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-300/10 rounded-full blur-3xl pointer-events-none"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center z-10">

                <motion.div
                    className="order-2 md:order-1 text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4"
                    >
                        <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                            Valeryan Rizky
                        </span>
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-3 justify-center md:justify-start mb-6"
                    >
                        <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
                            Front End Developer
                        </h2>
                        <span className="text-slate-300 text-xl md:text-2xl font-light">/</span>
                        <h2 className="text-xl md:text-2xl font-semibold text-cyan-600">
                            Quality Assurance
                        </h2>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-slate-600 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0"
                    >
                        Saya merancang antarmuka web React yang modern dan responsif, sekaligus memastikan kualitas produk tetap terjaga melalui pengujian manual dan automation testing. Kombinasi desain intuitif dan keandalan sistem untuk menghasilkan produk digital terbaik.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 gap-3 max-w-lg mx-auto md:mx-0 mb-8"
                    >
                        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-left">
                            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-3">
                                Frontend
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {techStack.frontend.map((t) => (
                                    <motion.span
                                        key={t}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                        className="px-2.5 py-1 rounded-md bg-white text-blue-700 text-xs font-semibold border border-blue-100 cursor-default"
                                    >
                                        {t}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 text-left">
                            <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider mb-3">
                                Quality Assurance
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {techStack.qa.map((t) => (
                                    <motion.span
                                        key={t}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                        className="px-2.5 py-1 rounded-md bg-white text-cyan-700 text-xs font-semibold border border-cyan-100 cursor-default"
                                    >
                                        {t}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ y: -3, scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="group px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 inline-flex items-center gap-2"
                        >
                            Hubungi Saya
                            <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>
                        </motion.a>

                        <motion.a
                            href="#projects"
                            whileHover={{ y: -3, scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="px-6 py-3 rounded-lg border-2 border-slate-200 hover:border-slate-900 text-slate-900 font-medium"
                        >
                            Lihat Proyek
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex gap-3 justify-center md:justify-start"
                    >
                        <SocialLink href="https://github.com/" label="GitHub" hover="hover:bg-slate-900">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                            </svg>
                        </SocialLink>
                        <SocialLink href="https://linkedin.com/" label="LinkedIn" hover="hover:bg-blue-600">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                            </svg>
                        </SocialLink>
                        <SocialLink href="mailto:email@kamu.com" label="Email" hover="hover:bg-red-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </SocialLink>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    <motion.div
                        className="relative"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <motion.div
                            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-blue-500 via-cyan-500 to-blue-400 opacity-20 blur-2xl pointer-events-none"
                            animate={{ opacity: [0.15, 0.35, 0.15] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-slate-100 rounded-3xl rotate-6"></div>
                        <div className="absolute -inset-4 bg-gradient-to-bl from-cyan-100 to-transparent rounded-3xl -rotate-6"></div>

                        <motion.div
                            className="group relative w-64 h-64 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100"
                            whileHover={{ scale: 1.03, rotate: -1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <motion.img
                                src="/profile.jpeg"
                                alt="Foto Valeryan Rizky"
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>

                        <div className="absolute top-1/2 -right-8 w-3 h-3 rounded-full bg-blue-500 animate-ping"></div>
                        <div className="absolute bottom-1/3 -left-8 w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

function SocialLink({ href, label, children, hover }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className={`w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-700 ${hover} hover:text-white transition-colors`}
        >
            {children}
        </motion.a>
    )
}