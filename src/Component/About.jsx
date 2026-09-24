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

const education = [
    {
        name: 'Universitas Bina Nusantara',
        level: 'Kuliah',
        period: 'Sekarang',
        logo: '/binus.png',
    },
    {
        name: 'SMK Telkom Jakarta',
        level: 'SMK',
        period: 'Lulus',
        logo: '/telkom.png',
    },
]

const experience = [
    {
        company: 'PT Thinkspedia',
        role: 'Front End Developer',
        period: '6 Bulan',
        type: 'Internship',
        color: 'blue',
        logo: '/thinkspedia.png',
    },
    {
        company: 'PT JBA Indonesia',
        role: 'Quality Assurance',
        type: 'Internship',
        period: '2 Bulan',
        color: 'cyan',
        logo: '/jba.png',
    },
]

export default function About() {
    return (
        <section
            id="about"
            className="relative bg-slate-50 text-slate-900 py-24 px-6 overflow-hidden"
        >

            <div className="absolute top-0 left-0 right-0 h-56 pointer-events-none z-[2]">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-transparent"></div>
                <div className="absolute -top-12 -right-20 w-[600px] h-[300px] bg-blue-300/40 rounded-full blur-3xl"></div>
                <div className="absolute -top-8 right-[15%] w-[400px] h-48 bg-cyan-300/25 rounded-full blur-3xl"></div>
                <div className="absolute top-4 right-[30%] w-[300px] h-32 bg-blue-300/20 rounded-full blur-3xl"></div>
            </div>

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
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
                        Tentang Saya
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                            Pendidikan & Pengalaman
                        </span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Perjalanan saya di dunia teknologi — tumbuh dari dunia akademis hingga turun langsung praktik di industri.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">

                    <motion.div variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.42A12 12 0 0112 21a12 12 0 01-6.16-10.42L12 14z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Pendidikan</h3>
                        </div>

                        <div className="space-y-4">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={edu.name}
                                    variants={itemVariants}
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 transition-colors flex items-center gap-5"
                                >
                                    <div className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                                        <img
                                            src={edu.logo}
                                            alt={`Logo ${edu.name}`}
                                            className="w-full h-full object-contain p-2.5"
                                            onError={(e) => {
                                                e.target.style.display = 'none'
                                                e.target.parentElement.innerHTML = '<span class="text-sm font-bold text-slate-400">LOGO</span>'
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-slate-900 truncate">{edu.name}</p>
                                        <p className="text-sm text-slate-500 mt-0.5">{edu.level} • {edu.period}</p>
                                    </div>
                                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full shrink-0">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Pengalaman</h3>
                        </div>

                        <div className="space-y-4">
                            {experience.map((exp) => (
                                <motion.div
                                    key={exp.company}
                                    variants={itemVariants}
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className={`group bg-white rounded-2xl p-5 border border-slate-200 flex items-center gap-5 transition-colors hover:shadow-lg ${exp.color === 'blue'
                                            ? 'hover:border-blue-300 hover:shadow-blue-100/50'
                                            : 'hover:border-cyan-300 hover:shadow-cyan-100/50'
                                        }`}
                                >
                                    <div className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                                        <img
                                            src={exp.logo}
                                            alt={`Logo ${exp.company}`}
                                            className="w-full h-full object-contain p-2.5"
                                            onError={(e) => {
                                                e.target.style.display = 'none'
                                                e.target.parentElement.innerHTML = '<span class="text-sm font-bold text-slate-400">LOGO</span>'
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-slate-900 truncate">{exp.company}</p>
                                        <p className={`text-sm font-medium mt-0.5 ${exp.color === 'blue' ? 'text-blue-600' : 'text-cyan-600'
                                            }`}>
                                            {exp.role}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">{exp.type} • {exp.period}</p>
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