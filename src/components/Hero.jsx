import React, { useState } from 'react';
import { MessageCircle, Play, Check } from 'lucide-react';
import Button from './ui/Button';
import VideoModal from './VideoModal';

const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const whatsappLink = "https://wa.me/918347572000?text=I'm%20interested%20in%20Diviner%20Media%20packages";

    const handleWhatsAppClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Contact');
            window.fbq('track', 'Lead');
        }
    };

    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
            {/* Video Modal */}
            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoUrl="https://www.youtube.com/embed/UR4jFpvKf5Q"
            />

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800/30 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-blue-100 text-sm font-medium">Taking new clients for January</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                            <span className="inline-block mr-2 align-middle rocket-glide" role="img" aria-label="rocket">🚀</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">Big Brand Marketing.</span> Small Business Budget.
                        </h1>

                        <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Why pay ₹30,000 monthly retainers? Get big-brand impact tailored for small business budgets. Zero contracts. 100% transparency.
                            Professional marketing starting at <strong className="text-white">₹5,000</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                            <Button
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto text-lg py-4 px-8 whitespace-nowrap"
                                icon={MessageCircle}
                                onClick={handleWhatsAppClick}
                            >
                                Get Started on WhatsApp
                            </Button>

                            <div className="flex items-center gap-3 pl-2">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center overflow-hidden ring-2 ring-slate-900">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-left">
                                    <div className="flex text-orange-400 text-xs">
                                        {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                                    </div>
                                    <span className="text-slate-400 text-sm font-medium whitespace-nowrap">Trusted by 100+ Biz</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-slate-400 text-sm font-medium">
                            <span className="flex items-center gap-2"><div className="bg-green-500/10 p-1 rounded-full"><Check size={12} className="text-green-500" /></div> No Contracts</span>
                            <span className="flex items-center gap-2"><div className="bg-green-500/10 p-1 rounded-full"><Check size={12} className="text-green-500" /></div> 7 Days Delivery</span>
                            <span className="flex items-center gap-2"><div className="bg-green-500/10 p-1 rounded-full"><Check size={12} className="text-green-500" /></div> WhatsApp Support</span>
                        </div>
                    </div>

                    {/* Video Placeholder */}
                    <div className="lg:w-1/2 w-full relative group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700 aspect-video bg-slate-800">
                            <img
                                src="/assets/video-thumbnail.png"
                                alt="Diviner Media Team"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform border border-white/20">
                                    <Play fill="white" className="text-white w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Curved separator */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
                <svg className="relative block w-full h-16 md:h-24 text-white rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                </svg>
            </div>
        </header>
    );
};

export default Hero;
