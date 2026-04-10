'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import MobileSubDrawer from './MobileSubDrawer';
import { hrefWithUtmParams, parseDataAttributes, useLocationSearch } from '@/lib/helper/helper';
import Button from '@/components/common/Button';

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
  locales: LocaleItem[];
  currentLocale: string;
}

const MobileMenuDrawer = ({
  isOpen,
  onClose,
  navigationData,
  localeText,
  contactUsUrl,
  locales,
  currentLocale,
}: MobileMenuDrawerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { locationSearch } = useLocationSearch();

  const [activeCategory, setActiveCategory] = useState<any>(null);
  const [isLocaleMode, setIsLocaleMode] = useState(false);

  // Reset state when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setActiveCategory(null);
      setIsLocaleMode(false);
    }
  }, [isOpen]);

  // Memoize labels and translations to prevent re-calculation during animation
  const currentLocaleLabel = useMemo(() =>
    locales.find(l => l.code === currentLocale)?.label || 'NA',
    [locales, currentLocale]);

  const translationsText = useMemo(() =>
    localeText[currentLocale] || localeText['en-US'],
    [localeText, currentLocale]);

  const handleBack = () => {
    setActiveCategory(null);
    setIsLocaleMode(false);
  };

  const handleCloseAll = () => {
    onClose();
    // Reset after transition finishes
    setTimeout(() => {
      setActiveCategory(null);
      setIsLocaleMode(false);
    }, 400);
  };

  const onSelectLocale = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    const pathSegments = pathname.split('/');
    if (locales.some(l => l.code === pathSegments[1])) {
      pathSegments[1] = newLocale;
    } else {
      pathSegments.splice(1, 0, newLocale);
    }

    const newPath = pathSegments.join('/') || '/';
    router.push(newPath + (window.location.search || ''));
  };

  return (
    <div
      className={`fixed top-[74px] right-0 w-full h-[calc(100vh-74px)] bg-[#F7F6F5] z-[1600] transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="flex flex-col justify-between h-full p-6 overflow-y-auto overflow-x-hidden">

        <div className="relative w-full overflow-hidden">
          <div className={`w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${(activeCategory || isLocaleMode)
            ? '-translate-x-full opacity-0 pointer-events-none absolute'
            : 'translate-x-0 opacity-100 relative'
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
                    alt="" width={6} height={10} className="brightness-0 h-auto w-auto"
                  />
                </button>
              ))}

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
                  alt="" width={6} height={10} className="brightness-0 h-auto w-auto"
                />
              </button>
            </nav>
          </div>
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
        <div className="mt-auto pt-5 flex flex-col gap-[10px] bg-[#F7F6F5]">
          <Link
            href={contactUsUrl}
            className="[&_button]:max-lg:w-full"
            onClick={handleCloseAll}
          >
            <Button variant="secondary" label={`${translationsText['Get in Touch'] || 'Get in Touch'}`} />
          </Link>

          <Link
            href={hrefWithUtmParams('/login', locationSearch.search)}
            className="[&_button]:max-lg:w-full"
            onClick={handleCloseAll}
          >
            <Button variant="primary" label={`${translationsText['Login'] || 'Login'}`} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;