import { useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { navigation, siteConfig } from '@/config/navigation';
import { NavLink } from './navigation/NavLink';
import { MobileMenu } from './navigation/MobileMenu';
import { Logo } from './ui/Logo';
import { IconButton } from './ui/IconButton';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isOverHero = !isScrolled;

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 24);

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    return () => window.removeEventListener('scroll', updateNavbar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 motion-reduce:transition-none ${
        isScrolled
          ? 'border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-[rgba(0,0,0,0.2)]'
      }`}
    >
      <nav
        className="grid h-20 w-full grid-cols-[1fr_auto] items-center px-6 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-10"
        aria-label="主导航"
      >
        <div className="justify-self-start">
          <Logo
            text={siteConfig.name}
            variant={isOverHero ? 'white' : 'color'}
          />
        </div>

        <div className="justify-self-end lg:hidden">
          <IconButton
            icon={Bars3Icon}
            label="打开主菜单"
            onClick={() => setMobileMenuOpen(true)}
            className={isOverHero ? '!text-white hover:!text-white' : ''}
          />
        </div>

        <div className="hidden items-center gap-x-8 lg:flex xl:gap-x-10">
          {navigation.map((item) => (
            <NavLink key={item.name} href={item.href} inverted={isOverHero}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block" aria-hidden="true" />
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
        siteName={siteConfig.name}
      />
    </header>
  );
};

export default Navbar;
