// app/components/RevealOnScroll.tsx
'use client';

import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  /** Direzione di ingresso */
  from?: 'bottom' | 'top' | 'left' | 'right';
  /** Distanza in px */
  distance?: number;
  /** Durata in secondi */
  duration?: number;
  className?: string;
};

export default function RevealOnScroll({
  children,
  delay = 0,
  from = 'bottom',
  distance = 40,
  duration = 0.7,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.1, rootMargin: '-80px 0px -80px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Calcola la trasformazione iniziale in base alla direzione
  const getInitialTransform = (): string => {
    switch (from) {
      case 'bottom':
        return `translateY(${distance}px)`;
      case 'top':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(-${distance}px)`;
      case 'right':
        return `translateX(${distance}px)`;
      default:
        return `translateY(${distance}px)`;
    }
  };

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0)' : getInitialTransform(),
    transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}