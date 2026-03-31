'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hrefWithUtmParams, parseDataAttributes, useLocationSearch } from '@/lib/helper/helper';

interface IndustriesMenuProps {
    content: any;
    closeMenu: () => void;
}

const IndustriesMenu = ({ content, closeMenu }: IndustriesMenuProps) => {
    const { locationSearch } = useLocationSearch();

    // Memoize tabs to prevent re-calculation on every hover
    const tabs = useMemo(() => content.navigationColumnsCollection?.items || [], [content]);

    const [activeTabId, setActiveTabId] = useState(tabs[0]?.sys?.id);

    const activeTabData = useMemo(() =>
        tabs.find((item: any) => item.sys.id === activeTabId),
        [tabs, activeTabId]
    );

    const getUrl = (item: any) => {
        if (item?.externalUrl) return item.externalUrl;
        if (item?.pageReference?.slug) return `/${item.pageReference.slug}`;
        return '#';
    };

    return (
        <div className="w-[95vw] max-w-[1345px] bg-white rounded-[15px] shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
            <div className="flex p-[35px]">

                {/* Left Sidebar */}
                <aside className="flex-[0_0_284px] bg-[#F7F6F5] rounded-xl p-[15px] flex flex-col gap-[2px]">
                    {tabs.map((col: any) => (
                        <button
                            key={col.sys.id}
                            className={`flex justify-between items-center px-[30px] py-[15px] rounded-lg font-medium text-left transition-all duration-300 ${activeTabId === col.sys.id
                                ? 'bg-white border-[#A6A3A0] border shadow-[0_4px_10px_rgba(0,0,0,0.05)] text-black'
                                : 'border border-transparent text-[#1a1a1a] hover:bg-white/50'
                                }`}
                            onMouseEnter={() => setActiveTabId(col.sys.id)}
                            {...parseDataAttributes(col?.dataAttributes)}
                        >
                            {col.title}
                            {activeTabId === col.sys.id && <span className="ml-2">→</span>}
                        </button>
                    ))}
                </aside>

                {/* Industry Grid Area */}
                <main className="flex-1 pl-[35px]">
                    <div className="flex justify-between gap-[30px]">
                        <div className="flex-[3] max-w-[665px]">
                            <div className="flex flex-wrap gap-4">
                                {activeTabData?.navigationItemsCollection?.items.map((item: any) => (
                                    <Link
                                        key={item.sys.id}
                                        href={hrefWithUtmParams(getUrl(item), locationSearch?.search)}
                                        target={item.openInNewTab ? "_blank" : "_self"}
                                        onClick={closeMenu}
                                        className="group flex items-center gap-3 p-3 rounded-lg w-[calc(50%-8px)] transition-colors duration-300 hover:bg-[#F7F6F5]"
                                        {...parseDataAttributes(item?.dataAttributes)}
                                    >
                                        <div className="flex-shrink-0 w-[55px] h-[55px] bg-[#F7F6F5] group-hover:bg-white border border-transparent group-hover:border-[#D1CDCA] rounded-lg flex items-center justify-center transition-colors">
                                            <Image
                                                src={item.icon?.url || "https://images.ctfassets.net/h83dujey17us/1Hu2ASdCdH3K6WfE2ygz8O/146949c577a609668b4b7527bf29b446/searchIcon.svg"}
                                                alt=""
                                                width={24}
                                                height={24}
                                                loading="lazy"
                                            />
                                        </div>
                                        <h4 className="text-base font-medium text-[#1a1a1a]">{item.linkText}</h4>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Case Study Promo Card */}
                        <div className="w-[257px] h-[375px] flex flex-col gap-10 justify-between">
                            <div className='flex flex-col gap-5'>
                                <div className="w-full aspect-[257/148] relative rounded-xl overflow-hidden bg-[#D9D9D9]">
                                    {activeTabData?.ctaImage && (
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
                                {activeTabData?.ctaButton || 'Learn More'}
                                <Image
                                    src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg"
                                    alt="" width={6} height={6}
                                />
                            </Link>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default IndustriesMenu;