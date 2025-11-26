import React from 'react';
import { Layout, Check, ArrowRight, Zap, Calendar, TrendingUp, Briefcase } from 'lucide-react';
import Button from './ui/Button';

const Services = () => {
    const whatsappLink = "https://wa.me/918347572000?text=I'm%20interested%20in%20Diviner%20Media%20packages";

    const handleWhatsAppClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Contact');
        }
    };

    return (
        <section id="services" className="py-24 bg-slate-50 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="mb-12 md:flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Micro-Services</h2>
                        <p className="text-lg text-slate-600 max-w-xl">Pro-quality marketing in bite-sized, affordable packages. Pick exactly what you need.</p>
                    </div>
                    <div className="hidden md:block">
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold text-sm border border-green-200">🔥 Fast 48h Turnaround</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Card 1: Social Graphics (Featured/Large) */}
                    <div className="md:col-span-2 bg-slate-900 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group text-white flex flex-col justify-between border border-slate-800 shadow-2xl shadow-slate-900/10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20 -mr-16 -mt-16 group-hover:opacity-30 transition-opacity"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20">Best Seller</div>
                                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                                    <Layout className="text-slate-300 group-hover:text-white transition-colors" size={24} />
                                </div>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-3">Custom Social Suite</h3>
                            <p className="text-slate-400 mb-8 max-w-sm text-lg">High-end visuals without the high-end retainer. Includes Reels, Posts, and Stories designed for engagement.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col h-full">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-orange-400 font-bold text-2xl">₹5,000</span>
                                        <span className="text-xs text-slate-400 uppercase tracking-wider font-bold bg-white/5 px-2 py-1 rounded">Starter</span>
                                    </div>
                                    <ul className="text-sm text-slate-300 space-y-3 flex-grow">
                                        <li className="flex items-center gap-3"><Check size={14} className="text-green-400 flex-shrink-0" /> 5 Static Posts</li>
                                        <li className="flex items-center gap-3"><Check size={14} className="text-green-400 flex-shrink-0" /> 2 Animated Reels</li>
                                        <li className="flex items-center gap-3"><Check size={14} className="text-green-400 flex-shrink-0" /> 3 Story Series</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col h-full">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-orange-400 font-bold text-2xl">₹8,000</span>
                                        <span className="text-xs text-slate-400 uppercase tracking-wider font-bold bg-white/5 px-2 py-1 rounded">Pro</span>
                                    </div>
                                    <ul className="text-sm text-slate-300 space-y-3 flex-grow">
                                        <li className="flex items-center gap-3"><Check size={14} className="text-green-400 flex-shrink-0" /> 8 Static Posts</li>
                                        <li className="flex items-center gap-3"><Check size={14} className="text-green-400 flex-shrink-0" /> 3 Recorded Reels</li>
                                        <li className="flex items-center gap-3"><Check size={14} className="text-green-400 flex-shrink-0" /> 3 Story Series</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto border-t border-white/10 pt-6">
                            <Button href={whatsappLink} variant="secondary" className="w-full justify-center hover:bg-orange-500 hover:text-white border-none" onClick={handleWhatsAppClick}>
                                Order Now <ArrowRight size={16} />
                            </Button>
                        </div>
                    </div>

                    {/* Card 2: Revival (Tall) */}
                    <div className="md:row-span-2 bg-white border border-slate-200 rounded-[2rem] p-8 relative overflow-hidden group flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Zap size={28} />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-2">15-Day Revival</h3>
                        <p className="text-slate-500 mb-6">Is your page dead? We bring it back to life in 2 weeks flat.</p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                                    <TrendingUp size={16} className="text-green-600" />
                                </div>
                                <span className="text-slate-700 font-medium text-base">Profile Audit & Theme Redesign</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                                    <TrendingUp size={16} className="text-green-600" />
                                </div>
                                <div>
                                    <span className="text-slate-700 font-medium text-base block">15 Days of Content</span>
                                    <span className="text-slate-400 text-sm mt-1 block font-medium">5 Posts • 5 Reels • 5 Stories</span>
                                </div>
                            </li>
                        </ul>

                        <div className="flex-grow relative my-4 min-h-[160px] bg-slate-50 rounded-xl border border-slate-100 p-4">
                            {/* Bars Container */}
                            <div className="absolute bottom-0 left-0 w-full h-[90%] flex items-end justify-around px-4 pb-2 gap-2">
                                {/* Bar 1 */}
                                <div className="w-1/4 flex flex-col justify-end h-full items-center gap-2">
                                    {/* Badge Day 1 */}
                                    <div className="bg-white/60 shadow-sm border border-slate-100/60 px-2 py-1 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 mb-1 whitespace-nowrap">
                                        <TrendingUp size={12} className="text-green-500/60" />
                                        <span className="text-[10px] font-bold text-slate-900/60">+15%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-t-lg h-[30%] group-hover:h-[40%] transition-all duration-500 delay-100"></div>
                                    <span className="text-[10px] text-slate-400 font-medium">Day 1</span>
                                </div>

                                {/* Bar 2 */}
                                <div className="w-1/4 flex flex-col justify-end h-full items-center gap-2">
                                    {/* Badge Day 7 */}
                                    <div className="bg-white/80 shadow-md border border-slate-100/80 px-2.5 py-1 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 mb-1 whitespace-nowrap">
                                        <TrendingUp size={12} className="text-green-500/80" />
                                        <span className="text-[10px] font-bold text-slate-900/80">+60%</span>
                                    </div>
                                    <div className="w-full bg-slate-300 rounded-t-lg h-[50%] group-hover:h-[60%] transition-all duration-500 delay-200"></div>
                                    <span className="text-[10px] text-slate-400 font-medium">Day 7</span>
                                </div>

                                {/* Bar 3 */}
                                <div className="w-1/4 flex flex-col justify-end h-full items-center gap-2">
                                    {/* Badge Day 15 */}
                                    <div className="bg-white shadow-lg border border-slate-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 mb-1 transform group-hover:-translate-y-1 transition-transform duration-500 whitespace-nowrap">
                                        <TrendingUp size={14} className="text-green-500" />
                                        <span className="text-xs font-bold text-slate-900">+120% Reach</span>
                                    </div>
                                    <div className="w-full bg-orange-400 rounded-t-lg h-[70%] group-hover:h-[90%] transition-all duration-500 delay-300 shadow-lg shadow-orange-500/30"></div>
                                    <span className="text-[10px] text-slate-600 font-bold">Day 15</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-100">
                            <span className="text-2xl font-bold text-slate-900 block mb-4">₹7,500 <span className="text-sm text-slate-400 font-normal">/ fix</span></span>
                            <Button href={whatsappLink} variant="secondary" className="w-full justify-center" onClick={handleWhatsAppClick}>Book Now</Button>
                        </div>
                    </div>

                    {/* Card 3: Festive Subscription */}
                    <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                        {/* Light Confetti Background */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-4 right-8 w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="absolute top-10 right-4 w-2 h-2 bg-pink-400 rotate-45"></div>
                            <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div className="absolute bottom-12 right-12 w-2 h-2 bg-green-400 rotate-12"></div>
                            <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            <div className="absolute top-8 left-1/3 w-2 h-2 bg-orange-400 rotate-45"></div>
                        </div>

                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="p-3 bg-pink-50 text-pink-600 rounded-xl group-hover:rotate-12 transition-transform"><Calendar size={24} /></div>
                            <h3 className="font-bold text-slate-900 text-lg">Festive Pack</h3>
                        </div>
                        <p className="text-slate-500 mb-6 text-sm relative z-10">Never miss a holiday. We design posts for every major Indian festival.</p>
                        <div className="flex items-center justify-between relative z-10">
                            <span className="font-bold text-xl">₹8000/- <span className="text-xs font-normal text-slate-400">Yearly</span></span>
                            <a href={whatsappLink} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-orange-500 hover:text-white transition-colors" onClick={handleWhatsAppClick}><ArrowRight size={18} /></a>
                        </div>
                    </div>

                    {/* Card 4: Meta Ads */}
                    <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-md hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:rotate-12 transition-transform"><TrendingUp size={24} /></div>
                            <h3 className="font-bold text-slate-900 text-lg">Meta Ad Campaigns</h3>
                        </div>
                        <p className="text-slate-500 mb-6 text-sm">Stop burning money on "Boost Post". We build proper ad funnels.</p>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-slate-400 block font-medium">Starting From</span>
                                <span className="font-bold text-xl text-slate-900">₹5,000/- <span className="text-sm font-normal text-slate-500">monthly</span></span>
                            </div>
                            <a href={whatsappLink} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-orange-500 hover:text-white transition-colors" onClick={handleWhatsAppClick}><ArrowRight size={18} /></a>
                        </div>
                    </div>

                    {/* Card 5: Agency White Label (Wide) */}
                    <div className="md:col-span-3 bg-[#0f172a] border border-slate-800 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden group">
                        {/* Hexagonal Pattern Background */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-900/0 pointer-events-none"></div>

                        <div className="flex items-center gap-6 relative z-10">
                            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 shadow-2xl shadow-black/20">
                                <Briefcase size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-bold text-2xl mb-2">Are you an Agency?</h3>
                                <p className="text-slate-400 max-w-lg text-lg leading-relaxed">We provide white-label graphics for other marketing agencies. Scale without hiring.</p>
                            </div>
                        </div>
                    </div>
                    <Button href={whatsappLink} className="bg-orange-500 text-white hover:bg-orange-600 border-none relative z-10 whitespace-nowrap px-8 py-4 text-lg font-bold shadow-xl shadow-orange-500/20" onClick={handleWhatsAppClick}>
                        Get Agency Rates
                    </Button>
                </div>

            </div>
        </section >
    );
};

export default Services;
