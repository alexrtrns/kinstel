import React from 'react';

export function HeroIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 341.33"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="hero-illustration-title"
      role="img"
      {...props}
    >
      <title id="hero-illustration-title">Illustration of a website and performance metrics</title>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Main browser window */}
      <rect x="20" y="20" width="472" height="301.33" rx="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
      <rect x="20" y="20" width="472" height="40" rx="12" ry="12" fill="hsl(var(--secondary))" />
      <circle cx="40" cy="40" r="6" fill="#f87171" />
      <circle cx="60" cy="40" r="6" fill="#fbbd23" />
      <circle cx="80" cy="40" r="6" fill="#34d399" />
      
      {/* Content inside browser */}
      <rect x="40" y="80" width="150" height="12" rx="4" fill="hsl(var(--primary))" />
      <rect x="40" y="110" width="400" height="8" rx="3" fill="hsl(var(--muted))" />
      <rect x="40" y="130" width="380" height="8" rx="3" fill="hsl(var(--muted))" />
      <rect x="40" y="150" width="350" height="8" rx="3" fill="hsl(var(--muted))" />

      {/* Abstract chart element */}
      <g transform="translate(300, 180)">
        <path d="M0,100 C20,80 40,120 60,100 S100,60 120,80 L120,120 L0,120 Z" fill="url(#grad1)" opacity="0.2" />
        <path d="M0,100 L20,90 L40,110 L60,100 L80,110 L100,80 L120,85" stroke="url(#grad1)" strokeWidth="4" fill="none" />
        <circle cx="20" cy="90" r="3" fill="hsl(var(--accent))" />
        <circle cx="100" cy="80" r="3" fill="hsl(var(--primary))" />
      </g>
      
      {/* Floating card */}
      <g transform="translate(40, 200)">
        <rect width="200" height="80" rx="8" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1.5" />
        <rect x="15" y="15" width="40" height="20" rx="4" fill="hsl(var(--accent))" opacity="0.3" />
        <path d="M20 30 L35 18" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
        <text x="65" y="28" fontFamily="sans-serif" fontSize="12" fill="hsl(var(--foreground))" fontWeight="bold">Increased Leads</text>
        <text x="65" y="48" fontFamily="sans-serif" fontSize="24" fill="hsl(var(--primary))" fontWeight="bold">+300%</text>
      </g>
    </svg>
  );
}
