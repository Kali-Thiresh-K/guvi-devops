import { motion } from 'framer-motion';
import { Section } from './Section';
import { Card } from './Card';

const tools = [
    { name: 'Docker', color: '#2496ED' },
    { name: 'Kubernetes', color: '#326CE5' },
    { name: 'Jenkins', color: '#D24939' },
    { name: 'Git', color: '#F05032' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Terraform', color: '#7B42BC' },
    { name: 'Ansible', color: '#EE0000' },
    { name: 'Prometheus', color: '#E6522C' }
];

export function Tools() {
    return (
        <Section id="tools">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-heading mb-4"
                    >
                        Power Your <span className="text-secondary">Stack</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Master the industry-standard tools used by top tech companies worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Card className="flex flex-col items-center justify-center p-8 text-center border-white/5 hover:border-white/20 group cursor-pointer">
                                {/* Placeholder for tool icons - using text for now */}
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 transition-all duration-300 group-hover:shadow-[0_0_30px_-5px_var(--tool-color)]"
                                    style={{ backgroundColor: `${tool.color}20`, color: tool.color, '--tool-color': tool.color } as React.CSSProperties}
                                >
                                    {tool.name[0]}
                                </div>
                                <h3 className="font-semibold">{tool.name}</h3>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
