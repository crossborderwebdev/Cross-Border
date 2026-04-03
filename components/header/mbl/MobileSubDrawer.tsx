'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { hrefWithUtmParams, parseDataAttributes, useLocationSearch } from '@/lib/helper/helper';

interface MobileSubDrawerProps {
  category: any;
  isLocaleMode: boolean;
  locales: any[];
  onBack: () => void;
  onClose: () => void;
  onSelectLocale: (code: string) => void;
  currentLocale: string;
}

const MobileSubDrawer = ({
  category,
  isLocaleMode,
  locales,
  onBack,
  onClose,
  onSelectLocale,
  currentLocale
}: MobileSubDrawerProps) => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const { locationSearch } = useLocationSearch();
  const params = useParams();
  const locale = (params?.locale as string) || 'en-US';

  const baseColumns = category?.navigationColumnsCollection?.items || [];

  // Static IDs for syncing specific logic
  const COMMERCIAL_CARDS_ID = '6lh8T8NM13WGjNxkwk0ipH';
  const FULL_AP_ID = '5oTbnoR1J5WE7lhj675mPu';

  const handleBack = () => {
    setOpenAccordionId(null);
    onBack();
  };

  const getUrl = (item: any) => {
    if (item?.externalUrl) return item.externalUrl;
    if (item?.pageReference?.slug) return `/${item.pageReference.slug}`;
    return '#';
  };

  return (
    <div className="flex flex-col bg-[#F7F6F5]">
      {/* Back Button */}
      {(isLocaleMode || category) && <button
        className="flex items-center gap-3 bg-transparent border-none text-base font-medium text-[#1a1a1a] py-4 px-[10px] cursor-pointer"
        onClick={handleBack}
      >
        <Image
          src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg"
          alt="Back" width={6} height={10} className="rotate-180 brightness-0 h-auto w-auto"
        />
        Back
      </button>}

      <div className="flex flex-col gap-2">
        {isLocaleMode ? (
          /* Locale Selection List */
          locales.map((l) => (
            <button
              key={l.code}
              className={`text-left text-base font-semibold m-0 px-6 py-[10px] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all ${currentLocale === l.code
                ? 'bg-white border-2 border-[#b01c33] text-[#b01c33]'
                : 'bg-[#E8E7E6] text-[#111]'
                }`}
              onClick={() => onSelectLocale(l.code)}
            >
              {l.fullName}
            </button>
          ))
        ) : (
          <>
            {/* 1. Dynamic Contentful Columns */}
            {baseColumns.map((col: any) => {
              const isExpanded = openAccordionId === col.sys.id;
              const showBottomSection = col.sys.id === COMMERCIAL_CARDS_ID || col.sys.id === FULL_AP_ID;

              return (
                <div key={col.sys.id} className="flex flex-col">
                  <button
                    className="w-full flex justify-between items-center px-6 py-[11px] bg-white border border-[#DBD8D4] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-[2]"
                    onClick={() => setOpenAccordionId(isExpanded ? null : col.sys.id)}
                    {...parseDataAttributes(col?.dataAttributes)}
                  >
                    <span className="text-base font-medium text-black">{col.title}</span>
                    <div className={`transition-transform duration-400 brightness-0 ${isExpanded ? '-rotate-90' : 'rotate-90'}`}>
                      <Image src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg" alt="" width={6} height={10} className="h-auto w-auto" />
                    </div>
                  </button>

                  {/* Accordion Content with Grid Animation (CLS friendly) */}
                  <div className={`grid transition-all duration-400 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-2 py-3">
                        {col.navigationItemsCollection?.items.map((item: any) => (
                          <Link
                            key={item.sys.id}
                            href={hrefWithUtmParams(getUrl(item), locationSearch.search)}
                            className="text-base font-semibold text-[#111] px-6 py-[10px] bg-[#E8E7E6] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] active:bg-[#dfdedd]"
                            onClick={onClose}
                            {...parseDataAttributes(item?.dataAttributes)}
                          >
                            {item.linkText}
                          </Link>
                        ))}

                        {/* Corpay Complete Specialized Link */}
                        {showBottomSection && (locale === "en-US" || locale === "fr-CA") && (
                          <Link
                            href={hrefWithUtmParams('/corpay-complete', locationSearch.search)}
                            onClick={onClose}
                            className="text-base font-semibold text-[#111] px-6 py-[10px] bg-[#E8E7E6] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                            data-track-click-label="globalnav4:corpay_complete"
                          >
                            Corpay Complete
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default MobileSubDrawer;