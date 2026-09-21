interface LogoProps {
  className?: string;
}

export function Logo({ className = 'w-10 h-10' }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#267155" />
      <path d="M12 27c3-6 6-9 12-9s9 3 12 9c-1.5 4.5-6 7.5-12 7.5s-10.5-3-12-7.5z" fill="#f0f7f4" opacity="0.9" />
      <circle cx="16" cy="16" r="3.5" fill="#edc281" />
      <circle cx="32" cy="16" r="3.5" fill="#edc281" />
      <circle cx="10" cy="22" r="2.8" fill="#edc281" />
      <circle cx="38" cy="22" r="2.8" fill="#edc281" />
      <ellipse cx="24" cy="27" rx="4.5" ry="3.5" fill="#267155" />
    </svg>
  );
}
