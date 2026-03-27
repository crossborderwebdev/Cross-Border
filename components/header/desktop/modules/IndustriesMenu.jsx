import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/IndustriesMenu.module.scss';
import { hrefWithUtmParams, parseDataAttributes } from '../../../../util/helper';
import useLocationSearch from '../../../../util/useLocationSearch';

const IndustriesMenu = ({ content, closeMenu }) => {
    // Default to the first industry tab
    const [activeTabId, setActiveTabId] = useState(content.navigationColumnsCollection?.items[0]?.sys.id);
    const { locationSearch } = useLocationSearch();

    const activeTabData = content.navigationColumnsCollection?.items.find(
        (item) => item.sys.id === activeTabId
    );


    // Helper to determine the URL based on the query structure
    const getUrl = (item) => {
        if (item?.externalUrl) return item.externalUrl;
        if (item?.pageReference?.slug) return `/${item.pageReference.slug}`;
        return '#';
    };

    return (
        <div className={styles.megaMenuContainer}>
            <div className={styles.flexWrapper}>

                {/* Left Sidebar */}
                <aside className={styles.sidebar}>
                    {content.navigationColumnsCollection?.items.map((col) => (
                        <button
                            key={col.sys.id}
                            className={`${styles.sideTab} ${activeTabId === col.sys.id ? styles.active : ''}`}
                            onMouseEnter={() => setActiveTabId(col.sys.id)}
                            {...parseDataAttributes(col?.dataAttributes)}
                        >
                            {col.title}
                            {activeTabId === col.sys.id && <span className={styles.activeArrow}>→</span>}
                        </button>
                    ))}
                </aside>

                {/* Industry Grid Area */}
                <main className={styles.mainContent}>
                    <div className={styles.flexContentWrapper}>
                        <div className={styles.linksColumn}>
                            <div className={styles.topLinksRow}>
                                {activeTabData?.navigationItemsCollection?.items.map((item) => (
                                    <Link
                                        href={hrefWithUtmParams(getUrl(item), locationSearch)}
                                        key={item.sys.id}
                                        target={item.openInNewTab ? "_blank" : "_self"}
                                        className={styles.navLinkWrapper}

                                    >
                                        <a
                                            className={styles.navCard}
                                            onClick={closeMenu}
                                            {...parseDataAttributes(item?.dataAttributes)}
                                        >
                                            {/* <div> */}
                                            <div className={styles.iconBox}>
                                                <Image
                                                    src={item.icon?.url || "https://images.ctfassets.net/h83dujey17us/1Hu2ASdCdH3K6WfE2ygz8O/146949c577a609668b4b7527bf29b446/searchIcon.svg"}
                                                    alt="" width={24} height={24}
                                                />
                                            </div>
                                            <div className={styles.cardInfo}>
                                                <h4>{item.linkText}</h4>
                                            </div>
                                            {/* </div> */}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Case Study Promo Card */}
                        <div className={styles.promoColumn}>
                            <div className={styles.caseStudyCard}>
                                {activeTabData?.ctaImage ? (
                                    <div className={styles.imageBox}>
                                        <Image
                                            src={activeTabData?.ctaImage?.url}
                                            alt="Promo" width={257} height={148} objectFit="cover" className={styles.img}
                                        />
                                    </div>
                                ) : (
                                    <div className={styles.placeholderImg}>
                                        {/* Gray placeholder from design */}
                                    </div>
                                )}
                                <div className={styles.caseStudyText}>
                                    <p className={styles.mainDescription}>
                                        {activeTabData?.pageReference?.seo?.title}
                                    </p>
                                    <p className={styles.subDescription}>
                                        {activeTabData?.pageReference?.seo?.description}
                                    </p>
                                </div>
                                <Link href={hrefWithUtmParams(`/resources/customer-stories${getUrl(activeTabData)}`, locationSearch)} className={styles.btnLink}>
                                    <a
                                        onClick={closeMenu}
                                        className={styles.blackBtn}
                                        {...parseDataAttributes(activeTabData?.dataAttributes)}
                                    >
                                        {activeTabData?.ctaButton}
                                        <Image
                                            src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg"
                                            alt="" width={8} height={10}
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default IndustriesMenu;