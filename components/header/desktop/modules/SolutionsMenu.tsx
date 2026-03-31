'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { hrefWithUtmParams, parseDataAttributes, useLocationSearch } from '@/lib/helper/helper';

interface SolutionsMenuProps {
  content: any;
  closeMenu: () => void;
}

const SolutionsMenu = ({ content, closeMenu }: SolutionsMenuProps) => {
  const { locationSearch } = useLocationSearch();
  const params = useParams();
  const currentLocale = (params?.locale as string) || 'en-US';

  // 1. Filter and Merge tabs based on Locale (Memoized for performance)
  const allTabs = useMemo(() => {
    const dynamicTabs = content.navigationColumnsCollection?.items || [];
    const tabs = [...dynamicTabs];
    return tabs;
  }, [content, currentLocale]);

  const [activeTabId, setActiveTabId] = useState(allTabs[0]?.sys?.id);

  const activeTabData = useMemo(() =>
    allTabs.find((item) => item.sys.id === activeTabId),
    [allTabs, activeTabId]
  );

  const getUrl = (item: any) => {
    if (item?.externalUrl) return item.externalUrl;
    if (item?.pageReference?.slug) return `/${item.pageReference.slug}`;
    return '#';
  };

  const renderTabContent = () => {
    return (
      <div className="flex justify-between gap-[30px]">
        <div className="flex-[3] max-w-[665px] flex flex-col items-start">
          <div className="flex flex-wrap gap-4">
            {activeTabData?.navigationItemsCollection?.items.map((item: any, idx: number) => (
              <Link
                key={item.sys.id}
                href={hrefWithUtmParams(getUrl(item), locationSearch.search)}
                target={item.openInNewTab ? "_blank" : "_self"}
                onClick={closeMenu}
                className={`flex items-center gap-3 p-[9px] rounded-lg transition-colors duration-400 w-[calc(50%-10px)] hover:bg-[#F7F6F5] ${idx === 0 ? 'flex-1 !w-full bg-[#F7F6F5]' : 'bg-white'}`}
                {...parseDataAttributes(item?.dataAttributes)}
              >
                <div className="flex-shrink-0 w-[55px] h-[55px] bg-white border border-[#D1CDCA] rounded-lg flex items-center justify-center">
                  <Image src={item.icon?.url} alt="" width={24} height={24} />
                </div>
                <div className="flex flex-col">
                  <h4 className="m-0 text-base font-medium text-[#222222]">{item.linkText || ""}</h4>
                  <p className={`m-0 mt-1 text-sm font-light text-[#969696] leading-[1.2] max-w-[250px] ${idx === 0 ? '!max-w-[300px]' : ''}`}>
                    {item.description || ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Promo Column */}
        <div className="w-[257px] h-[375px] flex flex-col gap-10 justify-between">
          <div className='flex flex-col gap-5'>
            <div className="w-full aspect-[257/148] relative rounded-xl overflow-hidden bg-[#D9D9D9]">
              {activeTabData.ctaImage?.url && (
                <Image
                  src={activeTabData.ctaImage.url}
                  alt="Promo"
                  fill
                  className="object-cover"
                  sizes="257px"
                />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-normal leading-tight text-[#0D0D0D] line-clamp-2">
                {activeTabData?.pageReference?.seo?.title}
              </p>
              <p className="text-sm text-[#121212] line-clamp-3">
                {activeTabData?.pageReference?.seo?.description}
              </p>
            </div>
          </div>

          <Link
            href={hrefWithUtmParams(`/resources/customer-stories${getUrl(activeTabData)}`, locationSearch?.search)}
            onClick={closeMenu}
            className="bg-[#111] text-white px-4 py-3 rounded-md font-medium flex justify-center items-center gap-2 transition-all hover:bg-[#595959]"
            {...parseDataAttributes(activeTabData?.dataAttributes)}
          >
            {activeTabData.ctaButton || ''}
            <Image
              src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg"
              alt="" width={6} height={6}
            />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[95vw] max-w-[1345px] bg-white rounded-[15px] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
      <div className="flex p-[35px]">
        {/* Sidebar */}
        <aside className="flex-[0_0_284px] bg-[#F7F6F5] rounded-xl p-[15px] flex flex-col gap-[2px]">
          {allTabs.map((tab: any) => (
            <button
              key={tab.sys.id}
              className={`flex justify-between items-center px-[30px] py-[15px] cursor-pointer rounded-lg font-medium text-left transition-all duration-400 ${activeTabId === tab.sys.id
                ? 'bg-white border-[#A6A3A0] border shadow-[0_4px_10px_rgba(0,0,0,0.05)] text-black'
                : 'bg-transparent border border-transparent text-[#1a1a1a]'
                }`}
              onMouseEnter={() => setActiveTabId(tab.sys.id)}
              {...parseDataAttributes(tab?.dataAttributes)}
            >
              {tab.title}
              {activeTabId === tab.sys.id && <span className="text-black">→</span>}
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 pl-[35px]">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default SolutionsMenu;