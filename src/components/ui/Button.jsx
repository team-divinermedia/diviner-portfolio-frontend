import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    icon: Icon,
    href,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 active:scale-95";

    const variants = {
        primary: "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40",
        secondary: "bg-white text-slate-900 border border-slate-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 shadow-sm",
        dark: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent text-slate-600 hover:text-orange-600 hover:bg-orange-50/50",
        glass: "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-orange-600 backdrop-blur-sm"
    };

    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
            {Icon && <Icon size={18} />}
        </Component>
    );
};

export default Button;
