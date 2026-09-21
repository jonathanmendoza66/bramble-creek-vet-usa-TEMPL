import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className = '', id, dark }: SectionProps) {
  const { ref, isVisible } = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding ${dark ? 'bg-primary-900 text-white' : ''} ${className}`}
    >
      <div
        className={`container-app transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, light }: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg sm:text-xl max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-primary-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
