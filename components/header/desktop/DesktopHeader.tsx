'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { hrefWithUtmParams, parseDataAttributes } from '@/lib/helper/helper';
import dynamic from 'next/dynamic';
const SolutionsMenu = dynamic(() => import('./modules/SolutionsMenu'), { ssr: false });
const IndustriesMenu = dynamic(() => import('./modules/IndustriesMenu'), { ssr: false });
const SimpleMenu = dynamic(() => import('./modules/SimpleMenu'), { ssr: false });

interface NavigationItem {
  sys: { id: string };
  linkText: string;
  dataAttributes?: any;
  navigationColumnsCollection?: { items: any[] };
  navigationItemsCollection?: { items: any[] };
}

interface Locale {
  code: string;
  label: string;
  fullName: string;
}

interface DesktopHeaderProps {
  data: NavigationItem[];
  locales: Locale[];
  localeText: Record<string, any>;
  contactUsUrl: string;
}

const DesktopHeader = ({ data, locales, localeText, contactUsUrl }: DesktopHeaderProps) => {
  const pathname = usePathname();
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Fallback labels/translations
  const currentLocale = 'en-US'; // This will eventually come from useParams()
  const currentLocaleLabel = locales.find(l => l.code === currentLocale)?.label || 'NA';
  const translationsText = localeText[currentLocale] || localeText['en-US'];

  useEffect(() => {
    const closeAll = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenuId(null);
        setIsLocaleOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', closeAll);
    return () => document.removeEventListener('mousedown', closeAll);
  }, []);

  const handleLocaleChange = (localeCode: string) => {
    // Logic for changing locale will go here once middleware is ready
    setIsLocaleOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[1000] h-20 w-full border-b border-gray-200 bg-white flex items-center font-medium"
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-10">

        {/* Left Section: Logo & Nav */}
        <div className="flex items-center gap-10">
          <div className="flex items-center cursor-pointer">
            <Link href="/" data-track-click-label="globalnav1:logo">
              <Image
                src="https://images.ctfassets.net/h83dujey17us/4yaRlTL19o9VSqVeTa3mSV/215ef45913d5fa7b8f50269441cf10bd/corpay.svg"
                alt="Corpay"
                width={135}
                height={32}
                priority
                onClick={() => setActiveMenuId(null)}
              />
            </Link>
          </div>

          <nav>
            <ul className="flex items-center gap-9 list-none p-0 m-0">
              {data?.map((group) => {
                const hasDropdown = (group.navigationColumnsCollection?.items?.length ?? 0) > 0 ||
                  (group.navigationItemsCollection?.items?.length ?? 0) > 0;
                const isActive = activeMenuId === group.sys.id;

                const isSolutions = group.sys.id === 'pyNMJaJyrujRH3GjuSXvD';
                const isIndustries = group.sys.id === '2kgIzNPOH0sZxP3jqmOJYW';

                return (
                  <li key={group.sys.id}>
                    <button
                      className={`flex items-center gap-1 border-none bg-none p-0 text-base font-normal transition-colors duration-200 hover:text-black ${isActive ? 'text-black font-bold' : 'text-[#121212]'
                        }`}
                      onClick={() => hasDropdown && setActiveMenuId(isActive ? null : group.sys.id)}
                      {...parseDataAttributes(group?.dataAttributes)}
                    >
                      {group.linkText}
                      {hasDropdown && (
                        <span className={`inline-flex items-center justify-center transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                          <Image
                            src="https://images.ctfassets.net/h83dujey17us/grSjMBOSr05AM1qdKha9T/07c1aeb0c3521988752c2d3651cfd5e3/down_black_arrow.svg"
                            alt="arrow"
                            width={7}
                            height={5}
                          />
                        </span>
                      )}
                    </button>

                    {isActive && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4">
                        {isSolutions ? (
                          <SolutionsMenu content={group} closeMenu={() => setActiveMenuId(null)} />
                        ) : isIndustries ? (
                          <IndustriesMenu content={group} closeMenu={() => setActiveMenuId(null)} />
                        ) :
                          <SimpleMenu content={group} closeMenu={() => setActiveMenuId(null)} />
                        }
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right Section: Utilities */}
        <div className="flex items-center justify-end gap-6 grow">
          {/* Search */}
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search"
              className={`border-b border-gray-300 outline-none text-sm transition-all duration-500 ease-in-out ${isSearchOpen ? 'w-[220px] opacity-100 mr-2.5' : 'w-0 opacity-0 invisible'
                }`}
            />
            <button className="bg-none border-none cursor-pointer p-0" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Image
                src="https://images.ctfassets.net/h83dujey17us/1Hu2ASdCdH3K6WfE2ygz8O/146949c577a609668b4b7527bf29b446/searchIcon.svg"
                alt="Search"
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-base font-normal text-[#121212] no-underline"
              data-track-click-label="globalnav1:login"
            >
              {translationsText['Login'] || 'Login'}
            </Link>

            <Link href={contactUsUrl} data-track-click-label="globalnav1:contact">
              <span className="flex items-center gap-1.5 rounded bg-[#111] border border-[#111] px-[18px] py-3 text-white text-base font-medium whitespace-nowrap transition-all duration-300 hover:bg-[#595959]">
                {translationsText['Talk to an expert'] || 'Talk to an expert'}
                <Image
                  src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg"
                  alt="Arrow"
                  width={8}
                  height={10}
                />
              </span>
            </Link>

            {/* Locale Selector */}
            <div className="relative">
              <button className="flex items-center gap-2 border-none bg-none p-0 text-base font-normal cursor-pointer" onClick={() => setIsLocaleOpen(!isLocaleOpen)}>
                <Image
                  src="https://images.ctfassets.net/h83dujey17us/6rHsvg59C8Ymusk3LZOVJn/0d2a480276d00da59c1cff7a260728b2/globeIconNew.svg"
                  alt="Locale"
                  width={24}
                  height={24}
                />
                {currentLocaleLabel}
                <div className={`transition-transform duration-300 ${isLocaleOpen ? 'rotate-180' : ''}`}>
                  <Image
                    src="https://images.ctfassets.net/h83dujey17us/grSjMBOSr05AM1qdKha9T/07c1aeb0c3521988752c2d3651cfd5e3/down_black_arrow.svg"
                    alt="arrow"
                    width={7}
                    height={5}
                  />
                </div>
              </button>

              {isLocaleOpen && (
                <ul className="absolute top-[calc(100%+15px)] right-0 z-[999] min-w-[220px] max-h-[500px] overflow-y-auto rounded-md border border-gray-200 bg-white py-2 shadow-xl list-none">
                  {locales.map((l) => (
                    <li
                      key={l.code}
                      className={`cursor-pointer px-5 py-3 text-sm transition-all duration-200 hover:bg-gray-50 hover:text-[#b01c33] ${currentLocale === l.code ? 'bg-red-50 text-[#b01c33] font-bold border-b-2 border-[#b01c33]' : 'text-gray-600'
                        }`}
                      onClick={() => handleLocaleChange(l.code)}
                    >
                      {l.fullName}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;