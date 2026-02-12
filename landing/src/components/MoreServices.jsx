import { useState } from 'react';
import {
    PenTool,
    Calendar,
    FileText,
    Globe,
    MapPin,
    MessageCircle,
    Megaphone,
    Filter,
    Rocket,
    ScanSearch,
    ClipboardCheck,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

const MoreServices = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    const categories = [
        {
            title: "Design & Branding",
            services: [
                { icon: <PenTool size={20} />, name: "Logo & Brand Identity Design", desc: "Get a professional logo, color palette, and fonts that make you stand out." },
                { icon: <Calendar size={20} />, name: "Event Branding", desc: "Banners, flyers, and digital assets to make your corporate events look premium." },
                { icon: <FileText size={20} />, name: "Professional Resumes & Decks", desc: "Stand out to employers or investors with stunning CVs and presentation decks." }
            ]
        },
        {
            title: "Web & Local Presence",
            services: [
                { icon: <Globe size={20} />, name: "Professional Business Website", desc: "A clean, mobile-friendly website that builds trust and showcases your work." },
                { icon: <MapPin size={20} />, name: "Google Business & Local SEO", desc: "Get found on Google Maps so local customers find and call you first." }
            ]
        },
        {
            title: "Marketing & Ads",
            services: [
                { icon: <MessageCircle size={20} />, name: "WhatsApp Chatbots & Automation", desc: "Auto-reply to customers and send automated updates on WhatsApp." },
                { icon: <Megaphone size={20} />, name: "Meta Account Setup", desc: "We set up your Meta ad account and pixel correctly from day one." },
                { icon: <Filter size={20} />, name: "Lead Gen Funnel", desc: "A step-by-step system to turn website visitors into interested leads." },
                { icon: <Rocket size={20} />, name: "Lead Gen Campaigns", desc: "We run and optimize your campaigns to bring a consistent stream of leads." }
            ]
        },
        {
            title: "Strategy & Audits",
            services: [
                { icon: <ScanSearch size={20} />, name: "Monthly Content Strategy", desc: "We analyze your niche to tell you exactly what content will perform best." },
                { icon: <ClipboardCheck size={20} />, name: "Social Media Audit", desc: "A complete audit of your social media to find hidden problems and growth gaps." }
            ]
        }
    ];

    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Check Our More Services</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Comprehensive digital solutions for every stage of your business growth.</p>
                </div>

                <div className="space-y-4">
                    {categories.map((category, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all duration-300">
                            <button
                                onClick={() => toggleCategory(idx)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openCategory === idx ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                                        {idx === 0 ? <PenTool size={20} /> : idx === 1 ? <Globe size={20} /> : idx === 2 ? <Megaphone size={20} /> : <ScanSearch size={20} />}
                                    </span>
                                    <h3 className={`text-lg font-bold transition-colors ${openCategory === idx ? 'text-orange-600' : 'text-slate-900'}`}>
                                        {category.title}
                                    </h3>
                                </div>
                                {openCategory === idx ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-slate-400" />}
                            </button>

                            <div className={`grid transition-all duration-300 ease-in-out ${openCategory === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 grid gap-4">
                                        <div className="h-px bg-slate-100 mb-4"></div>
                                        {category.services.map((service, sIdx) => (
                                            <div key={sIdx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all duration-300 group">
                                                <div className="p-2.5 bg-slate-50 rounded-lg text-slate-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 shadow-sm border border-slate-100 mt-1">
                                                    {service.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-800 text-base mb-1 group-hover:text-orange-600 transition-colors">
                                                        {service.name}
                                                    </h4>
                                                    <p className="text-sm text-slate-500 leading-relaxed">
                                                        {service.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
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

export default MoreServices;
