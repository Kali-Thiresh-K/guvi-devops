import { motion } from 'framer-motion';
import { Section } from './Section';
import { Button } from './Button';
import { Card } from './Card';

export function Registration() {
    return (
        <Section id="register" className="bg-background/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                            Ready to Start Your <br />
                            <span className="text-primary">DevOps Journey?</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Limited seats available for the upcoming batch. Secure your spot today and transform your career.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">01</div>
                                <div>
                                    <h4 className="font-bold">Register</h4>
                                    <p className="text-sm text-gray-400">Fill out the form with your details</p>
                                </div>
                            </div>
                            <div className="w-0.5 h-8 bg-white/10 ml-6" />
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">02</div>
                                <div>
                                    <h4 className="font-bold">Confirm</h4>
                                    <p className="text-sm text-gray-400">Receive confirmation email</p>
                                </div>
                            </div>
                            <div className="w-0.5 h-8 bg-white/10 ml-6" />
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">03</div>
                                <div>
                                    <h4 className="font-bold">Learn</h4>
                                    <p className="text-sm text-gray-400">Access courseterials and start learning</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 backdrop-blur-xl bg-white/5 border-white/10">
                            <h3 className="text-2xl font-bold mb-6">Register Now</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors text-white" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors text-white" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors text-white" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors text-white" placeholder="+91 98765 43210" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">College / Organization</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors text-white" placeholder="Kongu Engineering College" />
                                </div>
                                <Button className="w-full mt-4" size="lg">
                                    Submit Registration
                                </Button>
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    By registering, you agree to our Terms & Conditions.
                                </p>
                            </form>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
}
