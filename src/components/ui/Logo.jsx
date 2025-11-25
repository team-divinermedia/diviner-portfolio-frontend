import React, { useId } from 'react';

const Logo = ({ className = "w-10 h-10", variant = "spark" }) => {
    const uid = useId().replace(/:/g, '');
    const gradId = `dm-grad-${uid}`;
    const glowId = `dm-glow-${uid}`;
    const accentId = `dm-accent-${uid}`;

    if (variant === "wave") {
        return (
            <svg
                className={className}
                viewBox="0 0 72 72"
                role="img"
                aria-label="Diviner Media logo"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                </defs>
                <circle cx="36" cy="36" r="28" fill={`url(#${gradId})`} />
                <path
                    d="M18 18c8 0 12 4 20 4s12-4 20-4"
                    stroke="#0f172a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.85"
                />
                <path
                    d="M18 30c8 0 12 4 20 4s12-4 20-4"
                    stroke="#0f172a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.8"
                />
                <path
                    d="M18 42c8 0 12 4 20 4s12-4 20-4"
                    stroke="#0f172a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.75"
                />
                <path
                    d="M18 54c8 0 12 4 20 4s12-4 20-4"
                    stroke="#0f172a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.7"
                />
            </svg>
        );
    }

    if (variant === "lightning") {
        return (
            <svg
                className={className}
                viewBox="0 0 80 64"
                role="img"
                aria-label="Diviner Media logo"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#16a34a" />
                    </linearGradient>
                </defs>
                <path
                    d="M10 30c0-4.4 3.6-8 8-8h47c3.3 0 6 2.7 6 6.1 0 2-0.9 3.9-2.4 5.1L49 56.5c-2.6 2.1-6.5 0.3-6.5-3V41H32c-2.6 0-4.3-2.8-3.1-5.1l6.8-11.9H18c-4.4 0-8-3.6-8-8Z"
                    fill={`url(#${gradId})`}
                />
            </svg>
        );
    }

    if (variant === "arcmark") {
        return (
            <svg
                className={className}
                viewBox="0 0 72 72"
                role="img"
                aria-label="Diviner Media logo"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff7b39" />
                        <stop offset="100%" stopColor="#ffb347" />
                    </linearGradient>
                </defs>
                <path
                    d="M12 12h22v22C23.85 34 12 22.15 12 12Z"
                    fill={`url(#${gradId})`}
                />
                <path
                    d="M30 12h14c9.94 0 18 8.06 18 18s-8.06 18-18 18H30c5.5-5.9 9-13 9-21.5 0-5-1.3-9.7-3.6-14.5Z"
                    fill={`url(#${gradId})`}
                />
                <path
                    d="M42 12 22 44"
                    stroke="#0f172a"
                    strokeWidth="5"
                    strokeLinecap="round"
                    opacity="0.9"
                />
            </svg>
        );
    }

    if (variant === "highlight") {
        return (
            <svg
                className={className}
                viewBox="0 0 220 56"
                role="img"
                aria-label="Diviner Media logo"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff7b39" />
                        <stop offset="100%" stopColor="#ffb347" />
                    </linearGradient>
                </defs>
                <text
                    x="8"
                    y="36"
                    fill="#ffffff"
                    fontFamily="'Inter', system-ui, -apple-system, sans-serif"
                    fontSize="28"
                    fontWeight="800"
                    letterSpacing="0.6"
                >
                    diviner
                </text>
                <rect x="120" y="10" width="90" height="36" rx="10" fill={`url(#${gradId})`} />
                <text
                    x="135"
                    y="36"
                    fill="#0f172a"
                    fontFamily="'Inter', system-ui, -apple-system, sans-serif"
                    fontSize="26"
                    fontWeight="800"
                >
                    media
                </text>
            </svg>
        );
    }

    if (variant === "dotsight") {
        return (
            <svg
                className={className}
                viewBox="0 0 96 32"
                role="img"
                aria-label="Diviner Media logo"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                </defs>
                <g fill={`url(#${gradId})`}>
                    <circle cx="12" cy="16" r="6" />
                    <circle cx="28" cy="16" r="6" opacity="0.85" />
                    <circle cx="44" cy="16" r="6" opacity="0.7" />
                </g>
                <text
                    x="56"
                    y="20"
                    fill="#0f172a"
                    fontFamily="'Inter', system-ui, -apple-system, sans-serif"
                    fontSize="16"
                    fontWeight="800"
                >
                    diviner
                </text>
            </svg>
        );
    }

    if (variant === "orbit") {
        return (
            <svg
                className={className}
                viewBox="0 0 64 64"
                role="img"
                aria-label="Diviner Media logo"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient id={gradId} cx="50%" cy="40%" r="70%">
                        <stop offset="0%" stopColor="#ffb347" />
                        <stop offset="100%" stopColor="#ff7b39" />
                    </radialGradient>
                    <linearGradient id={accentId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7dd3fc" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="26" fill={`url(#${gradId})`} />
                <circle cx="32" cy="32" r="18" fill="white" opacity="0.12" />
                <path
                    d="M20 32c0-6.6 5.4-12 12-12h6c5 0 9 4 9 9s-4 9-9 9h-6v-8h6.5"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path
                    d="M16 33c6 6 18 12 30 6"
                    stroke={`url(#${accentId})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                />
                <circle cx="46" cy="22" r="3" fill="white" />
                <circle cx="22" cy="44" r="2.5" fill="white" opacity="0.9" />
            </svg>
        );
    }

    if (variant === "shield") {
        return (
            <svg
                className={className}
                viewBox="0 0 64 64"
                role="img"
                aria-label="Diviner Media logo"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff7b39" />
                        <stop offset="100%" stopColor="#ffb347" />
                    </linearGradient>
                    <linearGradient id={glowId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7dd3fc" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>
                <path
                    d="M32 4 12 14v16c0 13 8.5 24.7 20 30 11.5-5.3 20-17 20-30V14L32 4Z"
                    fill={`url(#${gradId})`}
                    stroke="white"
                    strokeWidth="1.5"
                    opacity="0.98"
                />
                <path
                    d="M23 20h11c6 0 10 4 10 10s-4 10-10 10H23V20Z"
                    fill="white"
                    opacity="0.12"
                />
                <path
                    d="M25 22h8c4.97 0 9 4.03 9 9s-4.03 9-9 9h-8V22Z"
                    fill="white"
                />
                <path
                    d="M32.5 26.5c3 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5H29v-11h3.5Z"
                    fill={`url(#${gradId})`}
                />
                <path
                    d="M18 46c5.5 2 12.5 2 18 0"
                    stroke={`url(#${glowId})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.9"
                />
            </svg>
        );
    }

    // Default spark variant
    return (
        <svg
            className={className}
            viewBox="0 0 64 64"
            role="img"
            aria-label="Diviner Media logo"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff7b39" />
                    <stop offset="100%" stopColor="#ffb347" />
                </linearGradient>
                <linearGradient id={glowId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#74b3ff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.7" />
                </linearGradient>
            </defs>
            <rect x="4" y="4" width="56" height="56" rx="16" fill={`url(#${gradId})`} />
            <circle cx="22" cy="22" r="6" fill="white" opacity="0.15" />
            <path
                d="M22 18c11 0 20 9 20 20 0 4.4-1.8 6-5.5 6H22V18Z"
                fill="white"
                opacity="0.15"
            />
            <path
                d="M24 20h10c8 0 14 6 14 14s-6 14-14 14H24V20Z"
                fill="white"
                opacity="0.08"
            />
            <path
                d="M25 22h7c6 0 11 5 11 11s-5 11-11 11h-7V22Z"
                fill="white"
            />
            <path
                d="M33 26.5c3 0 5.5 2.5 5.5 5.5S36 37.5 33 37.5H30V26.5h3Z"
                fill={`url(#${gradId})`}
            />
            <path
                d="M18 46c8.5 3 19.5 3 28 0"
                stroke={`url(#${glowId})`}
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.9"
            />
            <circle cx="44" cy="20" r="3" fill="white" />
            <circle cx="20" cy="44" r="2.5" fill="white" opacity="0.9" />
        </svg>
    );
};

const LogoWordmark = ({ className = "text-white", variant = "spark" }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        <Logo variant={variant} />
        <div className="leading-tight">
            <div className="font-extrabold text-lg tracking-tight">Diviner Media</div>
            <div className="text-xs uppercase tracking-[0.18em] opacity-80">Social Growth</div>
        </div>
    </div>
);

export { Logo, LogoWordmark };
