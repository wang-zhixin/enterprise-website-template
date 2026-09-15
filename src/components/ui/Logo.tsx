import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  text: string;
  className?: string;
  variant?: 'color' | 'white';
}

export const Logo = ({ text, className = '', variant = 'color' }: LogoProps) => {
  const imageSrc = variant === 'white' ? '/LOGO白色版横.png' : '/112811-01.png';

  return (
    <Link
      href="/"
      className={`relative block h-9 w-44 shrink-0 overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:h-10 sm:w-48 ${className}`}
      aria-label={`${text}首页`}
    >
      <Image
        src={imageSrc}
        alt={text}
        width={3509}
        height={2481}
        priority
        className={`absolute left-1/2 top-1/2 h-auto max-w-none -translate-x-1/2 -translate-y-1/2 ${
          variant === 'white' ? 'w-[148.5%]' : 'w-[186.8%]'
        }`}
      />
    </Link>
  );
};
