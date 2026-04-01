'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileMenuDrawer from './MobileMenuDrawer';
import { hrefWithUtmParams, useLocationSearch } from '@/lib/helper/helper';
import { getContactUsUrl } from '@/lib/helper/navigationHelper';

interface Locale {
  code: string;
  label: string;
  fullName: string;
}

interface MobileHeaderProps {
  data: any;
  locales: Locale[];
  localeText: Record<string, any>;
  currentLocale: string;
}

const MobileHeader = ({ data, locales, localeText, currentLocale }: MobileHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { locationSearch } = useLocationSearch();
  const pathname = usePathname();

  // 1. Memoized logic to prevent layout shifts on hydration
  const contactUsUrl = useMemo(() =>
    getContactUsUrl(pathname, currentLocale),
    [pathname, currentLocale]);

  const translations = useMemo(() =>
    localeText[currentLocale] || localeText['en-US'],
    [localeText, currentLocale]);

  // Prevent background scroll (UX/CWV Improvement)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full h-[74px] bg-white border-b border-[#f0f0f0] z-[2000] flex items-center">
      <div className="w-full px-5 flex justify-between items-center">

        {/* Logo - Priority set for LCP optimization */}
        <Link
          href={hrefWithUtmParams('/', locationSearch.search)}
          className="flex items-center"
          data-track-click-label="globalnav1:logo"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="https://images.ctfassets.net/h83dujey17us/4yaRlTL19o9VSqVeTa3mSV/215ef45913d5fa7b8f50269441cf10bd/corpay.svg"
            alt="Corpay"
            width={141}
            height={44}
            priority // High priority for mobile LCP
            className="w-auto h-auto"
          />
        </Link>

        {/* Animated Hamburger Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="relative w-[30px] h-5 flex flex-col justify-between p-0 bg-transparent border-none cursor-pointer group"
          onClick={toggleMenu}
        >
          <span
            className={`block w-full h-[2px] bg-[#1a1a1a] transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-y-[-2px]' : ''
              }`}
          />
          <span
            className={`block w-full h-[2px] bg-[#1a1a1a] transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-full'
              }`}
          />
          <span
            className={`block w-full h-[2px] bg-[#1a1a1a] transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-y-[2px]' : ''
              }`}
          />
        </button>
      </div>

      {/* Drawer Component */}
      <MobileMenuDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navigationData={data}
        locales={locales}
        localeText={localeText}
        currentLocale={currentLocale}
        contactUsUrl={contactUsUrl}
      />
    </header>
  );
};

export default MobileHeader;