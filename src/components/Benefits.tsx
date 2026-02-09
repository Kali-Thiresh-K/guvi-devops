import { motion } from 'framer-motion';
import { Section } from './Section';
import { Card } from './Card';
import { Trophy, Users, Rocket, Zap, BookOpen, Award } from 'lucide-react';

const benefits = [
    { icon: <Trophy className="w-6 h-6 text-yellow-400" />, title: 'Industry Recognized', desc: 'Certification from HCL GUVI & Kongu Engineering College.' },
    { icon: <Users className="w-6 h-6 text-blue-400" />, title: 'Expert Mentors', desc: 'Learn from seasoned DevOps engineers and architects.' },
    { icon: <Rocket className="w-6 h-6 text-red-400" />, title: 'Career Growth', desc: 'High demand skills that boost your salary potential.' },
    { icon: <Zap className="w-6 h-6 text-purple-400" />, title: 'Hands-on Labs', desc: 'Real-world infrastructure setup and deployment.' },
    { icon: <BookOpen className="w-6 h-6 text-green-400" />, title: 'Comprehensive Material', desc: 'Access to recorded sessions and study guides.' },
    { icon: <Award className="w-6 h-6 text-orange-400" />, title: 'Placement Support', desc: 'Mock interviews and resume building sessions.' }
];

export function Benefits() {
    return (
        <Section id="benefits">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-heading mb-4"
                    >
                        Unlock Your <span className="text-primary">Potential</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="flex items-start gap-4 hover:bg-white/5 transition-colors">
                                <div className="p-2 bg-white/5 rounded-lg">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                                    <p className="text-sm text-gray-400">{benefit.desc}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
