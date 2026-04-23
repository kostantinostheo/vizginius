import React, { useState, useEffect } from 'react';

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${progress}%`,
                height: '3px',
                background: 'linear-gradient(90deg, #60a5fa, #34d399, #60a5fa)',
                backgroundSize: '200% 100%',
                zIndex: 9999,
                transition: 'width 0.08s linear',
                pointerEvents: 'none',
            }}
        />
    );
}
