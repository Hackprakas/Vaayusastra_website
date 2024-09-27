"use client";
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});

export default function CustomCursor() {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                document.body.classList.add('default-cursor');
            } else {
                document.body.classList.remove('default-cursor');
            }
        };

        // Set the initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="hidden lg:block md:block">
            <AnimatedCursor
                innerSize={10}
                outerSize={50}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                trailingSpeed={16}
                innerStyle={{ backgroundColor: 'currentColor' }}
                outerStyle={{ border: '3px solid currentColor' }}
                clickables={[
                    'a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link',
                    {
                        target: '.inverted',
                        innerSize: 12,
                        outerSize: 12,
                        color: '255, 255, 255',
                        outerAlpha: 1,
                        innerScale: 0.7,
                        outerScale: 7,
                        outerStyle: {
                            mixBlendMode: 'difference'
                        }
                    }
                ]}
            />
        </div>
    );
}
