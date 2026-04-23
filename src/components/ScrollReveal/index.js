import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ScrollReveal({ children, delay = 0, className = '' }) {
    const ref = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`reveal-section ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
