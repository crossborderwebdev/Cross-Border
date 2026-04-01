'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hrefWithUtmParams, parseDataAttributes, useLocationSearch } from '@/lib/helper/helper';

interface SimpleGridMenuProps {
  content: any;
  closeMenu: () => void;
}

const SimpleGridMenu = ({ content, closeMenu }: SimpleGridMenuProps) => {
  const { locationSearch } = useLocationSearch();

  const getUrl = (item: any) => {
    if (item?.externalUrl) return item.externalUrl;
    if (item?.pageReference?.slug) return `/${item.pageReference.slug}`;
    return '#';
  };

  // Memoize data parsing for static stability
  const { navItems, promo } = useMemo(() => {
    const navItems1 = content.navigationColumnsCollection?.items?.[0]?.navigationItemsCollection?.items || [];
    const navItems2 = content.navigationColumnsCollection?.items?.[1]?.navigationItemsCollection?.items || [];
    return {
      navItems: [...navItems1, ...navItems2],
      promo: content.navigationColumnsCollection?.items?.[0] || {},
    };
  }, [content]);

  return (
    <div className="w-[95vw] max-w-[1345px] bg-white rounded-[15px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] overflow-hidden z-[1001]">
      <div className="flex p-[35px] gap-[58px]">

        {/* Main Content: 3-Column Grid */}
        <main className="flex-[3]">
          <div className="grid grid-cols-3 gap-x-[25px] gap-y-[10px]">
            {navItems.map((item: any) => (
              <Link
                key={item.sys.id}
                href={hrefWithUtmParams(getUrl(item), locationSearch?.search)}
                target={item.openInNewTab ? "_blank" : "_self"}
                onClick={closeMenu}
                className="group flex items-center gap-4 p-[13px] rounded-lg transition-colors duration-200 hover:bg-[#f7f6f5]"
                {...parseDataAttributes(item?.dataAttributes)}
              >
                <div className="w-[55px] h-[55px] bg-[#f7f6f5] group-hover:bg-white border border-transparent group-hover:border-[#D1CDCA] rounded-lg flex items-center justify-center shrink-0 transition-colors">
                  <Image
                    src={item.icon?.url}
                    alt=""
                    width={24}
                    height={24}
                    className="h-auto w-auto"
                  />
                </div>
                <h4 className="text-base font-medium text-[#1a1a1a] leading-tight">
                  {item.linkText}
                </h4>
              </Link>
            ))}
          </div>
        </main>

        {/* Promo Column */}
        <div className="w-[257px] h-[375px] flex flex-col gap-10 justify-between">
          <div className='flex flex-col gap-5'>
            <div className="w-full aspect-[257/148] relative rounded-xl overflow-hidden bg-[#D9D9D9]">
              {promo.ctaImage?.url && (
                <Image
                  src={promo.ctaImage.url}
                  alt="Promo"
                  fill
                  className="object-cover"
                  sizes="257px"
                />
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-normal leading-tight text-[#0D0D0D] line-clamp-2">
                {promo?.pageReference?.seo?.title}
              </p>
              <p className="text-sm text-[#121212] line-clamp-3">
                {promo?.pageReference?.seo?.description}
              </p>
            </div>
          </div>

          <Link
            href={hrefWithUtmParams(`/resources/customer-stories${getUrl(promo)}`, locationSearch?.search)}
            onClick={closeMenu}
            className="bg-[#111] text-white px-4 py-3 rounded-md font-medium flex justify-center items-center gap-2 transition-all hover:bg-[#595959]"
            {...parseDataAttributes(promo?.dataAttributes)}
          >
            {promo.ctaButton || ''}
            <Image
              src="https://images.ctfassets.net/h83dujey17us/3eOF3iC9tzE3LDLLLmpCqT/2fb34aa275190e062ecb00c666d2f9fe/download_icon_white.svg"
              alt="" width={16} height={16} className="h-auto w-auto"
            />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SimpleGridMenu;