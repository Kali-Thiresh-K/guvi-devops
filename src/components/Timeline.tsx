import { motion } from 'framer-motion';
import { Section } from './Section';

const curriculum = [
    {
        week: 'Week 1-2',
        title: 'Linux & Scripting',
        content: 'Shell scripting, User management, File systems, permissions.'
    },
    {
        week: 'Week 3-4',
        title: 'Version Control & Git',
        content: 'Branching strategies, Merging, Conflict resolution, GitHub workflows.'
    },
    {
        week: 'Week 5-6',
        title: 'Containerization',
        content: 'Docker fundamentals, Images, Containers, Networking, Volumes.'
    },
    {
        week: 'Week 7-8',
        title: 'Orchestration',
        content: 'Kubernetes architecture, Pods, Services, Deployments, Helm.'
    },
    {
        week: 'Week 9-10',
        title: 'CI/CD & Cloud',
        content: 'Jenkins pipelines, AWS basics, EC2, S3, RDS, IAM.'
    }
];

export function Timeline() {
    return (
        <Section id="curriculum" className="bg-background/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-heading mb-4"
                    >
                        Training <span className="text-accent">Roadmap</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 hidden md:block" />

                    <div className="space-y-12">
                        {curriculum.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="w-full md:w-5/12 text-center md:text-left">
                                    <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:text-right' : ''
                                        }`}>
                                        <span className="text-primary font-mono text-sm mb-2 block">{item.week}</span>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.content}</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary z-10 hidden md:flex">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                </div>

                                <div className="w-full md:w-5/12 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
