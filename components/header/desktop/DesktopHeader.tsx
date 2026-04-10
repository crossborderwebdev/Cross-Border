'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { parseDataAttributes } from '@/lib/helper/helper';
import { getContactUsUrl } from '@/lib/helper/navigationHelper';
import dynamic from 'next/dynamic';
import Button from '@/components/common/Button';

const SolutionsMenu = dynamic(() => import('./modules/SolutionsMenu'), { ssr: false });
const SimpleMenu = dynamic(() => import('./modules/SimpleMenu'), { ssr: false });

interface DesktopHeaderProps {
  data: any[];
  regionalLocales: any[];
  localeText: Record<string, any>;
  currentLocale: string;
}

const DesktopHeader = ({ data, regionalLocales, localeText, currentLocale }: DesktopHeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();

  // State for UI interactions
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const contactUsUrl = useMemo(() => getContactUsUrl(pathname, currentLocale), [pathname, currentLocale]);
  const locales = regionalLocales.flatMap(region => region.items)

  const currentLocaleLabel = useMemo(() =>
    locales.find(l => l.code === currentLocale)?.label || 'NA',
    [locales, currentLocale]);

  const translationsText = useMemo(() =>
    localeText[currentLocale] || localeText['en-US'],
    [localeText, currentLocale]);

  // Close menus on click outside
  useEffect(() => {
    const closeAll = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenuId(null);
        setIsLocaleOpen(false);
        // setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', closeAll);
    return () => document.removeEventListener('mousedown', closeAll);
  }, []);

  const onSelectLocale = (newLocale: string) => {
    // Set cookie for Middleware to pick up on next request
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    const pathSegments = pathname.split('/');
    // Check if first segment is a known locale
    if (locales.some(l => l.code === pathSegments[1])) {
      pathSegments[1] = newLocale;
    } else {
      pathSegments.splice(1, 0, newLocale);
    }

    const newPath = pathSegments.join('/') || '/';
    router.push(newPath + (window.location.search || ''));
    setIsLocaleOpen(false);
  };

  return (
    <header ref={headerRef} className="fixed top-0 z-[1000] h-20 w-full border-b border-gray-200 bg-white flex items-center font-medium">
      <div className="mx-auto flex w-full max-w-main-container items-center justify-between px-10">

        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src="https://images.ctfassets.net/h83dujey17us/4yaRlTL19o9VSqVeTa3mSV/215ef45913d5fa7b8f50269441cf10bd/corpay.svg"
              alt="Corpay"
              width={126}
              height={27}
              className="h-auto w-auto"
              priority
              onClick={() => setActiveMenuId(null)}
            />
          </Link>

          <nav>
            <ul className="flex items-center gap-9 list-none p-0 m-0">
              {data?.map((group) => {
                const hasDropdown = (group.navigationColumnsCollection?.items?.length ?? 0) > 0 ||
                  (group.navigationItemsCollection?.items?.length ?? 0) > 0;
                const isActive = activeMenuId === group.sys.id;

                return (
                  <li key={group.sys.id}>
                    <button
                      className={`cursor-pointer flex items-center gap-1 border-none bg-none p-0 text-base font-normal transition-colors duration-200 ${isActive ? 'text-black font-bold' : 'text-black'
                        }`}
                      onClick={() => hasDropdown && setActiveMenuId(isActive ? null : group.sys.id)}
                      {...parseDataAttributes(group?.dataAttributes)}
                    >
                      {group.linkText}
                      {hasDropdown && (
                        <span className={`inline-flex items-center justify-center transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                          <Image src="https://images.ctfassets.net/h83dujey17us/grSjMBOSr05AM1qdKha9T/07c1aeb0c3521988752c2d3651cfd5e3/down_black_arrow.svg" alt="" width={7} height={5} />
                        </span>
                      )}
                    </button>

                    {isActive && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4">
                        {/* Logic for choosing menu type */}
                        {group.sys.id === 'pyNMJaJyrujRH3GjuSXvD' || group.sys.id === '2kgIzNPOH0sZxP3jqmOJYW' ? (
                          <SolutionsMenu content={group} closeMenu={() => setActiveMenuId(null)} />
                        ) : (
                          <SimpleMenu content={group} closeMenu={() => setActiveMenuId(null)} />
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-end gap-6 grow">
          {/* Search, Login, and CTA use translationsText */}
          <Link href={contactUsUrl}>
            <Button variant="link" label={`${translationsText['Get in Touch'] || 'Get in Touch'}`} />
          </Link>

          <Link href="/login" className="text-base font-normal text-black">
            <Button variant="primary" label={`${translationsText['Login'] || 'Login'}`} />
          </Link>

          {/* Locale Selector */}
          <div>
            <button className="flex items-center gap-2 cursor-pointer" onClick={() => setIsLocaleOpen(!isLocaleOpen)}>
              <Image src="https://images.ctfassets.net/h83dujey17us/6rHsvg59C8Ymusk3LZOVJn/0d2a480276d00da59c1cff7a260728b2/globeIconNew.svg" alt="" width={24} height={24} />
              {currentLocaleLabel === 'USA' ? 'NA' : currentLocaleLabel}
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
              <div className="absolute top-full left-1/2 z-[1100] w-[920px] -translate-x-1/2 mt-4 rounded-[15px] bg-white p-7 border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
                <div className="flex gap-12">
                  {regionalLocales.map((group) => (
                    <div key={group.region} className="flex-1">
                      <h3 className="text-2xl font-normal text-gray-400 mb-6 font-serif">{group.region}</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {group.items.map((l: any) => {
                          const isActive = currentLocale === l.code;
                          return (
                            <button
                              key={l.code}
                              onClick={() => onSelectLocale(l.code)}
                              className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-lg border text-left transition-all duration-200 group ${isActive
                                ? 'border-gray-200 bg-[#EAEAEA] font-bold'
                                : 'border-[#E1E1E1] hover:border-transparent hover:bg-[#EAEAEA]'
                                }`}
                            >
                              <Image src={l.flag} alt={l.fullName} width={24} height={24} className='w-auto h-auto' />
                              <span className={`text-sm ${isActive ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
                                {l.fullName}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;