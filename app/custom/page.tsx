import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});

export default function CustomCursor () {
    return (
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
    )
}