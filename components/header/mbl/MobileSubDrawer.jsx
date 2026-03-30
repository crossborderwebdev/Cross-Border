import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MobileSubDrawer.module.scss';
import { hrefWithUtmParams, parseDataAttributes, useLocationSearch } from '@/lib/helper/helper';
import { useRouter } from 'next/router';

const MobileSubDrawer = ({ category, isLocaleMode, locales, onBack, onClose, onSelectLocale, currentLocale }) => {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const { locationSearch } = useLocationSearch();
  const router = useRouter();

  const isSolutionsColumn = category?.sys.id === 'pyNMJaJyrujRH3GjuSXvD';
  const baseColumns = category?.navigationColumnsCollection?.items || [];

  // Desktop sync IDs
  const COMMERCIAL_CARDS_ID = '6lh8T8NM13WGjNxkwk0ipH';
  const FULL_AP_ID = '5oTbnoR1J5WE7lhj675mPu';

  const handleBack = () => {
    setOpenAccordionId(null);
    onBack();
  };

  const getUrl = (item) => {
    if (item?.externalUrl) return item.externalUrl;
    if (item?.pageReference?.slug) return `/${item.pageReference.slug}`;
    return '#';
  };

  return (
    <div className={styles.subDrawerWrapper}>
      <button className={styles.backBtn} onClick={handleBack}>
        <Image src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg" alt="Back" width={8} height={12} className={styles.backIcon} />
        Back
      </button>

      <div className={styles.accordionList}>
        {isLocaleMode ? (
          locales.map((l) => (
            <div
              key={l.code}
              className={`${styles.childTitle} ${currentLocale === l.code ? styles.activeLocale : ''}`}
              onClick={() => onSelectLocale(l.code)}
            >
              {l.fullName}
            </div>
          ))
        ) : (
          <>
            {/* 1. Dynamic Map from Contentful */}
            {baseColumns.map((col) => {
              const isExpanded = openAccordionId === col.sys.id;
              const showBottomSection = col.sys.id === COMMERCIAL_CARDS_ID || col.sys.id === FULL_AP_ID;

              return (
                <div key={col.sys.id} className={styles.accordionGroup}>
                  <button
                    className={styles.accordionTrigger}
                    onClick={() => setOpenAccordionId(isExpanded ? null : col.sys.id)}
                    {...parseDataAttributes(col?.dataAttributes)}
                  >
                    <span className={styles.triggerText}>{col.title}</span>
                    <div className={`${styles.chevron} ${isExpanded ? styles.rotate : ''}`}>
                      <Image src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg" alt="" width={6} height={9} />
                    </div>
                  </button>
                  <div className={`${styles.accordionContent} ${isExpanded ? styles.expanded : ''}`}>
                    <div className={styles.contentInner}>
                      {col.navigationItemsCollection?.items.map((item) => (
                        <Link
                          key={item.sys.id}
                          href={hrefWithUtmParams(getUrl(item), locationSearch)}
                        >
                          <a {...parseDataAttributes(item?.dataAttributes)} onClick={onClose}>
                            <h4 className={styles.childTitle}>{item.linkText}</h4>
                          </a>
                        </Link>
                      ))}

                      {/* Integrated Corpay Complete Bottom Section */}
                      {showBottomSection && (router.locale === "en-US" || router.locale === "fr-CA") && (
                        <Link href={hrefWithUtmParams('/corpay-complete', locationSearch)}>
                          <a
                            onClick={onClose}
                            className={styles.corpayCompleteMobileLink}
                            data-track-click-label={"globalnav4:corpay_complete"}
                          >
                            <div className={styles.cardInfo}>
                              <h4 className={styles.childTitle}>Corpay Complete</h4>
                            </div>
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 2. Hardcoded Items at the Bottom */}
            {isSolutionsColumn && (
              <>
                {/* Fuel & Fleet Accordion */}
                {(router.locale === 'en-US' || router.locale === 'fr-CA') && (
                  <div className={styles.accordionGroup}>
                    <button
                      className={styles.accordionTrigger}
                      onClick={() => setOpenAccordionId(openAccordionId === 'fuel-fleet' ? null : 'fuel-fleet')}
                      {...parseDataAttributes("data-track-click-label='globalnav3:fuel_fleet'")}
                    >
                      <span className={styles.triggerText}>
                        {router.locale === "fr-CA" ? "Solutions pour les flottes" : "Fuel & Fleet Cards"}
                      </span>
                      <div className={`${styles.chevron} ${openAccordionId === 'fuel-fleet' ? styles.rotate : ''}`}>
                        <Image src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg" alt="" width={6} height={9} />
                      </div>
                    </button>
                    <div className={`${styles.accordionContent} ${openAccordionId === 'fuel-fleet' ? styles.expanded : ''}`}>
                      <div className={styles.contentInner}>
                        <a
                          {...parseDataAttributes("data-track-click-label='globalnav4:cp1_universal_fuel_card'")}
                          onClick={onClose}
                          rel="noreferrer"
                          target="_blank"
                          href={`https://cp.corpayone.com/fuel/` + locationSearch.search}
                        >
                          <h4 className={styles.childTitle}>Corpay One Fuel & Fleet Cards</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Workforce Lodging Accordion */}
                {router.locale === 'en-US' && (
                  <div className={styles.accordionGroup}>
                    <button
                      className={styles.accordionTrigger}
                      onClick={() => setOpenAccordionId(openAccordionId === 'workforce-lodging' ? null : 'workforce-lodging')}
                      {...parseDataAttributes("data-track-click-label='globalnav3:workforce_travel'")}
                    >
                      <span className={styles.triggerText}>Workforce Lodging</span>
                      <div className={`${styles.chevron} ${openAccordionId === 'workforce-lodging' ? styles.rotate : ''}`}>
                        <Image src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg" alt="" width={6} height={9} />
                      </div>
                    </button>
                    <div className={`${styles.accordionContent} ${openAccordionId === 'workforce-lodging' ? styles.expanded : ''}`}>
                      <div className={styles.contentInner}>
                        <a
                          {...parseDataAttributes("data-track-click-label='globalnav4:corporate_lodging'")}
                          onClick={onClose}
                          rel="noreferrer"
                          target='_blank'
                          href={`https://www.corpaylodging.com/get-started/corpay?_gl=1*vpuwt0*_gcl_au*MTc1NjY2NDQwNy4xNzUxNDgyOTk4${locationSearch.search}`}
                        >
                          <h4 className={styles.childTitle}>Corporate Lodging & Travel</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MobileSubDrawer;