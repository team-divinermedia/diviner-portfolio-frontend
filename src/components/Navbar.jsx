import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappLink = "https://wa.me/918347572000?text=I'm%20interested%20in%20Diviner%20Media%20packages";

    const ScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">

                {/* Logo */}
                <button
                    className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-[1.02]"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span
                        className={`text-3xl md:text-[2.15rem] font-semibold tracking-tight font-['Baloo_2','Nunito','Quicksand','Inter',system-ui,-apple-system,sans-serif] ${scrolled ? 'text-slate-900' : 'text-white'}`}
                    >
                        SocialMate
                    </span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => ScrollToSection('services')} className={`font-medium hover:text-orange-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Micro-Services</button>
                    <button onClick={() => ScrollToSection('proof')} className={`font-medium hover:text-orange-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Results</button>
                    <a href="/portfolio/" className={`flex items-center gap-2 font-medium transition-colors hover:text-emerald-500 ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                        <span>Live Feed</span>
                    </a>

                    <Button
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        variant={scrolled ? 'primary' : 'glass'}
                    >
                        Talk to an Expert
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden z-50 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="text-slate-900" /> : <Menu className={`${scrolled ? 'text-slate-900' : 'text-white'}`} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40 md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
                    <button onClick={() => ScrollToSection('services')} className="text-2xl font-semibold text-slate-800">Services</button>
                    <button onClick={() => ScrollToSection('proof')} className="text-2xl font-semibold text-slate-800">Case Studies</button>
                    <a href="/portfolio/" className="flex items-center gap-3 text-2xl font-semibold text-slate-800">
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                        </span>
                        Live Feed
                    </a>
                    <Button href={whatsappLink} variant="primary" className="text-xl px-8 py-4">
                        Open WhatsApp
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
