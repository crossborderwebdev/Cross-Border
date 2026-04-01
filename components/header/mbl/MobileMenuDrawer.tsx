'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams, useRouter, usePathname } from 'next/navigation';
// import { useCookies } from 'react-cookie';
import Link from 'next/link';
import MobileSubDrawer from './MobileSubDrawer';
import { hrefWithUtmParams, parseDataAttributes, useLocationSearch } from '@/lib/helper/helper';

interface LocaleItem {
  code: string;
  label: string;
  fullName: string;
}

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navigationData: any[];
  localeText: any;
  contactUsUrl: string;
  locales: LocaleItem[]; // Now passed from Controller
}

const MobileMenuDrawer = ({
  isOpen,
  onClose,
  navigationData,
  localeText,
  contactUsUrl,
  locales
}: MobileMenuDrawerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [activeCategory, setActiveCategory] = useState<any>(null);
  const [isLocaleMode, setIsLocaleMode] = useState(false);
  // const [, setCookie] = useCookies(['region', 'homepageVisited']);
  const { locationSearch } = useLocationSearch();

  // App Router locale detection
  const currentLocale = (params?.locale as string) || 'en-US';

  useEffect(() => {
    if (!isOpen) {
      setActiveCategory(null);
      setIsLocaleMode(false);
    }
  }, [isOpen]);

  const currentLocaleLabel = locales.find(l => l.code === currentLocale)?.label || 'NA';
  const translationsText = localeText[currentLocale] || localeText['en-US'];

  const handleBack = () => {
    setActiveCategory(null);
    setIsLocaleMode(false);
  };

  const handleCloseAll = () => {
    onClose();
    // Delay resetting state to allow exit animation to finish
    setTimeout(() => {
      setActiveCategory(null);
      setIsLocaleMode(false);
    }, 400);
  };

  const onSelectLocale = (localeCode: string) => {
    // setCookie('region', localeCode, { path: '/' });
    // setCookie('homepageVisited', localeCode, { path: '/' });

    // Logic to swap the locale in the URL path
    const pathSegments = pathname.split('/');
    pathSegments[1] = localeCode; // Replaces the locale segment (e.g., /en-US/blog -> /fr-CA/blog)
    const newPath = pathSegments.join('/') + (locationSearch.search || '');

    router.push(newPath);
    handleCloseAll();
  };

  return (
    <div
      className={`fixed top-[74px] right-0 w-full h-[calc(100vh-74px)] bg-[#F7F6F5] z-[1600] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'
        }`}
    >
      <div className="flex flex-col justify-between h-full p-6 overflow-y-auto overflow-x-hidden">

        <div className="relative w-full">
          {/* Level 1: Main Menu */}
          <div className={`w-full transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${(activeCategory || isLocaleMode) ? '-translate-x-full opacity-0 pointer-events-none h-0 overflow-hidden' : 'translate-x-0 opacity-100'
            }`}>
            <nav className="flex flex-col gap-3">
              {navigationData?.map((item) => (
                <button
                  key={item.sys.id}
                  className="w-full flex justify-between items-center px-6 py-[11px] bg-white border border-[#DBD8D4] rounded-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
                  onClick={() => setActiveCategory(item)}
                  {...parseDataAttributes(item?.dataAttributes)}
                >
                  <span className="text-base font-medium">{item.linkText}</span>
                  <Image
                    src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg"
                    alt="" width={6} height={9} className="brightness-0"
                  />
                </button>
              ))}

              {/* Locale Selector Button */}
              <button
                className="w-full flex justify-between items-center px-6 py-[11px] bg-white border border-[#DBD8D4] rounded-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
                onClick={() => setIsLocaleMode(true)}
              >
                <div className="flex items-center gap-2">
                  <Image src="https://images.ctfassets.net/h83dujey17us/6rHsvg59C8Ymusk3LZOVJn/0d2a480276d00da59c1cff7a260728b2/globeIconNew.svg" alt="" width={16} height={16} />
                  <span className="text-base font-medium">{currentLocaleLabel}</span>
                </div>
                <Image
                  src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg"
                  alt="" width={6} height={9} className="brightness-0"
                />
              </button>
            </nav>
          </div>

          {/* Level 2: Sub-Menu (Triggered via Animation) */}
          <div className={`w-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${(activeCategory || isLocaleMode)
              ? 'translate-x-0 relative'
              : 'translate-x-full absolute top-0'
            }`}>
            <MobileSubDrawer
              category={activeCategory}
              isLocaleMode={isLocaleMode}
              locales={locales}
              onBack={handleBack}
              onClose={handleCloseAll}
              onSelectLocale={onSelectLocale}
              currentLocale={currentLocale}
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-5 flex flex-col gap-[10px]">
          <Link
            href={hrefWithUtmParams('/login', locationSearch.search)}
            className="w-full bg-white border border-[#e0e0e0] rounded-lg font-medium text-[#121212] py-[11px] text-center"
            data-track-click-label="globalnav1:login"
            onClick={handleCloseAll}
          >
            {translationsText['Login'] || 'Login'}
          </Link>

          <Link
            href={hrefWithUtmParams(`/${contactUsUrl}`, locationSearch.search)}
            className="w-full text-base bg-[#111] text-white border border-[#111] rounded-lg font-medium flex items-center justify-center gap-[10px] py-[11px]"
            data-track-click-label="globalnav1:contact"
            onClick={handleCloseAll}
          >
            {translationsText['Talk to an expert'] || 'Talk to an expert'}
            <Image
              src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg"
              alt="" width={8} height={12} className="brightness-0 invert"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;