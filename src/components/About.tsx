import { motion } from 'framer-motion';
import { Section } from './Section';
import { Card } from './Card';
import { Code2, Globe, Laptop } from 'lucide-react';

const features = [
    {
        icon: <Code2 className="w-8 h-8 text-primary" />,
        title: 'Infrastructure as Code',
        description: 'Learn to manage and provision infrastructure through code using Terraform and Ansible.'
    },
    {
        icon: <Globe className="w-8 h-8 text-secondary" />,
        title: 'CI/CD Pipelines',
        description: 'Master the art of automated deployment with Jenkins, GitLab CI, and GitHub Actions.'
    },
    {
        icon: <Laptop className="w-8 h-8 text-accent" />,
        title: 'Container Orchestration',
        description: 'Deep dive into Docker and Kubernetes for scalable application deployment.'
    }
];

export function About() {
    return (
        <Section id="about" className="bg-background/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-heading mb-4"
                    >
                        Why <span className="text-primary">DevOps?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Bridge the gap between development and operations. Accelerate delivery, ensure reliability, and build scalable systems.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="h-full">
                                <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
