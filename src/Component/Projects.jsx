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

const projects = [
    {
        title: 'System HRIS',
        description: 'Saya membuat system HRIS untuk memudahkan karyawan untuk melakukan absensi datang maupun pulang dengan mudah.',
        image: '/Hris.png',
        tags: ['React.js', 'Tailwind CSS'],
        type: 'frontend',
    },
    {
        title: 'Testing Automation',
        description: 'Saya melakukan scenario testing pada aplikasi secara berulang untuk memastikan aplikasi berjalan dengan baik.',
        image: '/Qa.jpeg',
        tags: ['Robot Framework', 'Selenium'],
        type: 'qa',
    },
    {
        title: 'Financial Tracker',
        description: 'Saya membuat financial tracker untuk memanajemen keuangan dengan mudah.',
        image: '/FinancialTracker.jpeg',
        tags: ['React.js', 'Tailwind CSS'],
        type: 'frontend',
    },
    {
        title: 'Prediksi Hasil Panen',
        description: 'Saya membuat tampilan front end untuk melihat prediksi hasil panen padi dengan menggunakan pendekatan AI untuk melihat prediksi hasil panen.',
        image: '/hasilpanen.jpeg',
        tags: ['React.js', 'Tailwind CSS'],
        type: 'frontend',
    },
]

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative bg-slate-50 text-slate-900 py-24 px-6 overflow-hidden"
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
                viewport={{ once: false, amount: 0.1 }}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
                        Projects
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                            Karya & Project
                        </span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Beberapa project yang pernah saya kerjakan di bidang frontend
                        development dan quality assurance.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/60 transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            <div className="relative aspect-video overflow-hidden bg-slate-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                        e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 text-slate-400">
                        <svg class="w-12 h-12 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span class="text-xs font-bold uppercase tracking-wider">No Image</span>
                      </div>
                    `
                                    }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            <div className="p-5 md:p-6 flex flex-col flex-1">
                                <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${project.type === 'frontend'
                                                    ? 'bg-blue-50 text-blue-600 border-blue-100'
                                                    : 'bg-cyan-50 text-cyan-600 border-cyan-100'
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}