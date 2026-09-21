import { useEffect, useRef, useState } from 'react';

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function useIsOpen(): boolean {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const time = hour + minute / 60;

      if (day === 0) { setIsOpen(false); return; }
      if (day === 6) { setIsOpen(time >= 8 && time < 12); return; }
      if (day === 4) { setIsOpen(time >= 7.5 && time < 19); return; }
      if (day === 5) { setIsOpen(time >= 7.5 && time < 17); return; }
      setIsOpen(time >= 7.5 && time < 18);
    };
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  return isOpen;
}
