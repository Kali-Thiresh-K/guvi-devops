import { motion } from 'framer-motion';
import { ArrowRight, Server, Cloud, Cpu } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-secondary/20 blur-[120px] rounded-full animate-pulse-slow delay-1000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[40%] bg-accent/20 blur-[100px] rounded-full animate-pulse-slow delay-2000" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

            <div className="relative container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
                    </span>
                    <span className="text-sm font-medium text-gray-300">New Batch Starting Soon</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
                >
                    Master the Future of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient">
                        Modern DevOps
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    Join the elite training program at <span className="text-primary font-semibold">Kongu Engineering College</span>.
                    Master CI/CD, Containerization, and Cloud Infrastructure with hands-on labs and real-world projects.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        size="lg"
                        className="w-full md:w-auto group"
                        onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Register Now
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full md:w-auto"
                        onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Curriculum
                    </Button>
                </motion.div>

                {/* Floating Icons */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 hidden lg:block">
                    <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <Server className="w-12 h-12 text-primary/40" />
                    </motion.div>
                </div>
                <div className="absolute top-1/3 right-10 -z-10 hidden lg:block">
                    <motion.div animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                        <Cloud className="w-16 h-16 text-accent/40" />
                    </motion.div>
                </div>
                <div className="absolute bottom-1/4 left-1/4 -z-10 hidden lg:block">
                    <motion.div animate={{ y: [-12, 12, -12] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                        <Cpu className="w-10 h-10 text-secondary/40" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
