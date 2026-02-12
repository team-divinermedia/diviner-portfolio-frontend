import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import MoreServices from './components/MoreServices';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

/**
 * DIVINER MEDIA - High Performance Landing Page
 * Target: Small Business Owners
 * Stack: React + Tailwind CSS
 */

const App = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
            <Navbar />

            <main>
                <Hero />
                <PainPoints />
                <Services />
                <Testimonials />
                <MoreServices />
            </main>

            <Footer />
        </div>
    );
};

export default App;