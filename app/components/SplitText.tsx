// app/components/SplitText.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  text: string;
  className?: string;
  /** Ritardo iniziale (s) */
  delay?: number;
  /** Ritardo tra una parola e l'altra (s) */
  stagger?: number;
};

export default function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.08,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <span
            className="inline-block transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: isVisible ? 'translateY(0%)' : 'translateY(100%)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${delay + i * stagger}s`,
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </span>
  );
}