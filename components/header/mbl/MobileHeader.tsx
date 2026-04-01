'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenuDrawer from './MobileMenuDrawer';
import { hrefWithUtmParams, useLocationSearch } from '@/lib/helper/helper';

interface Locale {
  code: string;
  label: string;
  fullName: string;
}

interface MobileHeaderProps {
  data: any; // Ideally, define a strict interface based on your Contentful model
  locales: Locale[];
  localeText: Record<string, any>;
  contactUsUrl: string;
}

const MobileHeader = ({ data, locales, localeText, contactUsUrl }: MobileHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { locationSearch } = useLocationSearch();

  // Prevent background scroll when menu is open (CWV: User Experience)
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
            priority
            className="w-auto h-auto"
          />
        </Link>

        {/* Animated Hamburger Button - CSS Only (No Image Request) */}
        <button
          type="button"
          aria-label="Toggle Menu"
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
        onClose={toggleMenu}
        navigationData={data}
        locales={locales}
        localeText={localeText}
        contactUsUrl={contactUsUrl}
      />
    </header>
  );
};

export default MobileHeader;