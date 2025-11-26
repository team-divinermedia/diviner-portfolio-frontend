import React from 'react';
import { TrendingUp, Users, Zap } from 'lucide-react';

const PainPoints = () => {
    const points = [
        {
            icon: <TrendingUp size={32} className="text-red-500" />,
            title: "Agencies are Expensive",
            desc: "Most agencies require ₹30k+ monthly retainers and 6-month lock-in contracts."
        },
        {
            icon: <Users size={32} className="text-blue-500" />,
            title: "Freelancers Ghost",
            desc: "Cheap freelancers often lack consistency, miss deadlines, or disappear entirely."
        },
        {
            icon: <Zap size={32} className="text-orange-500" />,
            title: "DIY is Exhausting",
            desc: "You should be running your business, not fighting with Canva and CapCut all day."
        }
    ];

    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-orange-600 tracking-wide uppercase mb-3">The Reality Check</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Is Your Marketing Budget <br className="hidden md:block" /> Holding You Back?</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {points.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 group text-center md:text-left">
                            <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-orange-100 mx-auto md:mx-0">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
