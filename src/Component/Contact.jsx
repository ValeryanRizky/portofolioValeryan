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

const contacts = [
    {
        label: 'Email',
        value: 'rizkyvaleryan5@gmail.com',
        href: 'mailto:rizkyvaleryan5@gmail.com',
        color: 'blue',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        value: 'ValeryanRizky',
        href: 'https://github.com/ValeryanRizky',
        color: 'slate',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        value: 'Valeryan Rizky',
        href: 'https://www.linkedin.com/in/valeryan-rizky-41932b326',
        color: 'cyan',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
        ),
    },
]

const colorMap = {
    blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        text: 'text-blue-600',
        hoverBorder: 'hover:border-blue-300',
        hoverShadow: 'hover:shadow-blue-100/60',
        glow: 'from-blue-500 to-cyan-400',
    },
    cyan: {
        bg: 'bg-cyan-50',
        border: 'border-cyan-100',
        text: 'text-cyan-600',
        hoverBorder: 'hover:border-cyan-300',
        hoverShadow: 'hover:shadow-cyan-100/60',
        glow: 'from-cyan-500 to-blue-400',
    },
    slate: {
        bg: 'bg-slate-100',
        border: 'border-slate-200',
        text: 'text-slate-700',
        hoverBorder: 'hover:border-slate-400',
        hoverShadow: 'hover:shadow-slate-200/60',
        glow: 'from-slate-700 to-slate-500',
    },
}

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative bg-white text-slate-900 pt-24 pb-40 px-6 overflow-hidden"
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
                className="relative max-w-4xl mx-auto z-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
                        Contact
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                            Mari Terhubung
                        </span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Punya pertanyaan, ingin berkolaborasi, atau sekadar ingin menyapa?
                        Hubungi saya lewat salah satu kanal di bawah ini.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-3 gap-5">
                    {contacts.map((contact) => {
                        const c = colorMap[contact.color]
                        return (
                            <motion.a
                                key={contact.label}
                                href={contact.href}
                                target={contact.href.startsWith('http') ? '_blank' : undefined}
                                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className={`group relative bg-white rounded-2xl p-6 border border-slate-200 ${c.hoverBorder} ${c.hoverShadow} hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center text-center`}
                            >
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r ${c.glow} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className={`relative w-14 h-14 rounded-2xl ${c.bg} ${c.border} border ${c.text} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                    {contact.icon}
                                </div>

                                <p className={`text-[10px] font-bold uppercase tracking-widest ${c.text} mb-1.5`}>
                                    {contact.label}
                                </p>

                                <p className="font-semibold text-slate-900 text-sm leading-snug break-all px-2">
                                    {contact.value}
                                </p>

                                <div className={`mt-4 flex items-center gap-1 text-xs font-bold ${c.text} opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                                    <span>Kunjungi</span>
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </motion.a>
                        )
                    })}
                </div>
            </motion.div>
        </section>
    )
}