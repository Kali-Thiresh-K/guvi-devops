import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-xl font-heading font-bold">
                        <img src="/image.png" alt="GUVI Logo" className="h-6 w-auto mix-blend-screen" />
                        <span>GUVI | HCL</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                </div>
                <div className="text-center md:text-left text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} HCL GUVI & Kongu Engineering College. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
