import React from 'react'
import { motion } from 'motion/react'

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

const skills = {
    frontend: [
        { name: 'React.js', tag: 'Library' },
        { name: 'HTML5', tag: 'Markup' },
        { name: 'JavaScript (ES6+)', tag: 'Language' },
        { name: 'Tailwind CSS', tag: 'Styling' },
    ],
    qa: [
        { name: 'Robot Framework', tag: 'Test Framework' },
        { name: 'Selenium WebDriver', tag: 'Web Automation' },
        { name: 'Appium', tag: 'Mobile Automation' },
        { name: 'Web Automation & Mobile Automation (Android)', tag: 'Testing' },
    ],
}

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative bg-white text-slate-900 py-24 px-6 overflow-hidden"
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
                className="absolute top-40 -left-40 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl pointer-events-none"
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"
                animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                className="relative max-w-6xl mx-auto z-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
                        Skills
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                            Keahlian & Tools
                        </span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Kombinasi kemampuan frontend dan quality assurance yang saya
                        gunakan untuk membangun sekaligus menjaga kualitas produk digital.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">

                    <motion.div variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Frontend</h3>
                        </div>

                        <div className="space-y-3">
                            {skills.frontend.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariants}
                                    whileHover={{ x: 8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="group relative flex items-center gap-4 sm:gap-5 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-colors overflow-hidden"
                                >
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-full group-hover:h-full transition-all duration-500"></div>

                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/60 group-hover:to-transparent transition-all duration-500"></div>

                                    <span className="relative z-10 text-2xl sm:text-3xl font-bold text-slate-200 group-hover:text-blue-500 transition-colors w-9 sm:w-10 shrink-0">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    <div className="relative z-10 flex-1 min-w-0">
                                        <p className="font-semibold text-slate-900 text-base sm:text-lg leading-snug">
                                            {skill.name}
                                        </p>
                                        <p className="text-[10px] sm:text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">
                                            {skill.tag}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Quality Assurance</h3>
                        </div>

                        <div className="space-y-3">
                            {skills.qa.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariants}
                                    whileHover={{ x: 8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="group relative flex items-center gap-4 sm:gap-5 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100/50 transition-colors overflow-hidden"
                                >
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-400 rounded-r-full group-hover:h-full transition-all duration-500"></div>

                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/0 via-cyan-50/0 to-cyan-50/0 group-hover:from-cyan-50/60 group-hover:to-transparent transition-all duration-500"></div>

                                    <span className="relative z-10 text-2xl sm:text-3xl font-bold text-slate-200 group-hover:text-cyan-500 transition-colors w-9 sm:w-10 shrink-0">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    <div className="relative z-10 flex-1 min-w-0">
                                        <p className="font-semibold text-slate-900 text-base sm:text-lg leading-snug">
                                            {skill.name}
                                        </p>
                                        <p className="text-[10px] sm:text-xs text-cyan-600 font-bold uppercase tracking-widest mt-1">
                                            {skill.tag}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}