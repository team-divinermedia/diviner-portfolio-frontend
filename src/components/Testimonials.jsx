import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const marqueeClients = [
        { name: "Madras Filter Co.", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=madras-filter" },
        { name: "Namma Fitness", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=namma-fitness" },
        { name: "Lassi Lane", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=lassi-lane" },
        { name: "Bazaar Threads", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=bazaar-threads" },
        { name: "Pixel Paan Shop", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=pixel-paan" },
        { name: "Chai Circuit", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=chai-circuit" },
        { name: "Dilli Deliveries", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=dilli-deliveries" },
        { name: "Ladoo Labs", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=ladoo-labs" },
    ];

    const testimonials = [
        {
            text: "They took over reels and WhatsApp replies in Hinglish. Footfall jumped in 3 weeks without any discounts.",
            author: "Rajesh K.",
            role: "Cafe Owner, Bandra",
            business: "Kettle & Kulhad",
            logo: "https://api.dicebear.com/7.x/shapes/svg?seed=kettle-kulhad",
            avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80"
        },
        {
            text: "Consistent templates, Tamil + English captions, and daily stories. Our DMs finally feel like a brand and not a side hustle.",
            author: "Nidhi S.",
            role: "Boutique Owner, Chennai",
            business: "Kala Couture",
            logo: "https://api.dicebear.com/7.x/shapes/svg?seed=kala-couture",
            avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80"
        },
        {
            text: "The 15-Day Revival package actually worked. Engagement doubled, and they even handled gym leads on WhatsApp.",
            author: "Amit P.",
            role: "Gym Trainer, Pune",
            business: "PulseFit Studio",
            logo: "https://api.dicebear.com/7.x/shapes/svg?seed=pulsefit-studio",
            avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=120&q=80"
        }
    ];

    return (
        <section id="proof" className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl font-bold text-slate-900">Trusted by growing businesses</h2>
            </div>

            {/* Marquee */}
            <div className="relative flex overflow-x-hidden group mb-20">
                <div className="animate-marquee whitespace-nowrap flex gap-16 text-slate-300 font-bold text-4xl uppercase items-center">
                    {[...marqueeClients, ...marqueeClients].map((client, i) => (
                        <span key={`${client.name}-${i}`} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 rounded-full bg-white shadow ring-1 ring-slate-200 overflow-hidden flex items-center justify-center">
                                <img src={client.logo} alt={client.name} className="w-full h-full object-contain p-2" />
                            </div>
                            <span className="text-lg md:text-xl tracking-wide">{client.name}</span>
                        </span>
                    ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
            </div>

            {/* Testimonials Grid */}
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                            <div className="absolute -top-4 left-8 bg-orange-500 text-white p-2 rounded-lg shadow-lg shadow-orange-500/20">
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                                </div>
                            </div>

                            <p className="text-slate-600 italic mb-8 mt-4 leading-relaxed">"{t.text}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden ring-2 ring-slate-100">
                                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{t.author}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">{t.role}</div>
                                    <div className="text-xs text-slate-400 font-semibold flex items-center gap-2 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-white border border-slate-200 overflow-hidden flex items-center justify-center">
                                            <img src={t.logo} alt={t.business} className="w-full h-full object-contain p-1" />
                                        </div>
                                        <span>{t.business}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
