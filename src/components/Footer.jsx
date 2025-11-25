import React from 'react';
import { MessageCircle } from 'lucide-react';
import Button from './ui/Button';

const Footer = () => {
    const whatsappLink = "https://wa.me/918347572000?text=I'm%20interested%20in%20Diviner%20Media%20packages";

    return (
        <footer className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -ml-32 -mb-32"></div>

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to upgrade your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">social game?</span></h2>

                <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">Slots for this month are filling up. Lock in your package today and start seeing results.</p>

                <div className="flex flex-col items-center gap-6">
                    <Button
                        href={whatsappLink}
                        className="text-xl px-10 py-5 shadow-orange-500/20"
                        icon={MessageCircle}
                    >
                        Chat on WhatsApp
                    </Button>
                    <p className="text-sm text-slate-500 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Response time: Under 30 mins
                    </p>
                </div>

                <div className="mt-24 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <a
                        href="https://www.divinermedia.com"
                        target="_blank"
                        rel="noreferrer"
                        className="mb-4 md:mb-0 font-medium text-slate-300 text-lg tracking-tight hover:text-white transition-colors"
                    >
                        © by Diviner Media
                    </a>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
