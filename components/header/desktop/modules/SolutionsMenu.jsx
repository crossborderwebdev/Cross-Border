import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/SolutionsMenu.module.scss';
import { hrefWithUtmParams, parseDataAttributes, useLocationSearch } from '@/lib/helper/helper';
import { useRouter } from 'next/router';

const SolutionsMenu = ({ content, closeMenu }) => {
  const { locationSearch } = useLocationSearch();
  const router = useRouter();

  // Hardcoded IDs
  const FUEL_FLEET_ID = 'hardcoded-fuel-fleet';
  const WORKFORCE_ID = 'hardcoded-workforce';
  const COMMERCIAL_CARDS_ID = '6lh8T8NM13WGjNxkwk0ipH';
  const FULL_AP_ID = '5oTbnoR1J5WE7lhj675mPu';

  // 1. Filter and Merge tabs based on Locale
  const dynamicTabs = content.navigationColumnsCollection?.items || [];

  const allTabs = [...dynamicTabs];

  // Add Fuel & Fleet for US and French Canada
  if (router.locale === 'en-US' || router.locale === 'fr-CA') {
    allTabs.push({
      sys: { id: FUEL_FLEET_ID },
      title: router.locale === "fr-CA" ? "Solutions pour les flottes" : 'Fuel & Fleet Cards',
      dataAttributes: "data-track-click-label='globalnav3:fuel_fleet'"
    });
  }

  // Add Workforce only for US
  if (router.locale === 'en-US') {
    allTabs.push({
      sys: { id: WORKFORCE_ID },
      title: 'Workforce Lodging',
      dataAttributes: "data-track-click-label='globalnav3:workforce_travel'"
    });
  }

  const [activeTabId, setActiveTabId] = useState(allTabs[0]?.sys?.id);

  const activeTabData = dynamicTabs.find(
    (item) => item.sys.id === activeTabId
  );

  const getUrl = (item) => {
    if (item?.externalUrl) return item.externalUrl;
    if (item?.pageReference?.slug) return `/${item.pageReference.slug}`;
    return '#';
  };

  const renderTabContent = () => {
    // --- Layout for Fuel & Fleet (Hardcoded) ---
    if (activeTabId === FUEL_FLEET_ID) {
      return (
        <div className={styles.flexContentWrapper}>
          <div className={styles.linkColumn}>
            <div className={styles.singleLinkView}>
              <h4>Corpay One Fuel & Fleet Cards</h4>
              <p>Fuel cards built for different business needs. Save on fuel costs, streamline expense reports, and control fleet spending across all of our fuel card options.</p>
              <a
                href={`https://cp.corpayone.com/fuel/` + locationSearch.search}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className={styles.textLinkBtn}
                {...parseDataAttributes("data-track-click-label='globalnav4:cp1_universal_fuel_card'")}
              >
                Visit Corpay One <span>→</span>
              </a>
            </div>
          </div>
          <div className={styles.promoColumn}>
            <div className={styles.imageBox}>
              <Image
                src="https://images.ctfassets.net/h83dujey17us/3wtafxWxgnhA879in8Gv9M/42566f1b70fdf227b49a7c6435c74da1/fuelPromoImg.png"
                alt="Fuel promo" width={257} height={372} className={styles.fuelimg}
              />
            </div>
          </div>
        </div>
      );
    }

    // --- Layout for Workforce Lodging (Hardcoded) ---
    if (activeTabId === WORKFORCE_ID) {
      return (
        <div className={styles.flexContentWrapper}>
          <div className={styles.linkColumn}>
            <div className={styles.singleLinkView}>
              <h4>Corporate Lodging & Travel</h4>
              <p>Built to scale and ready to respond: lodging solutions for workforce travel, project-based work, high-volume demand, and disaster recovery crews.</p>
              <a
                href={`https://www.corpaylodging.com/get-started/corpay?_gl=1*vpuwt0*_gcl_au*MTc1NjY2NDQwNy4xNzUxNDgyOTk4${locationSearch.search}`}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className={styles.textLinkBtn}
                {...parseDataAttributes("data-track-click-label='globalnav4:corporate_lodging'")}
              >
                Visit Corpay Lodging <span>→</span>
              </a>
            </div>
          </div>
          <div className={styles.promoColumn}>
            <div className={styles.imageBox}>
              <Image
                src="https://images.ctfassets.net/h83dujey17us/3wtafxWxgnhA879in8Gv9M/42566f1b70fdf227b49a7c6435c74da1/fuelPromoImg.png"
                alt="Workforce promo" width={257} height={372} className={styles.fuelimg}
              />
            </div>
          </div>
        </div>
      );
    }

    // --- Dynamic Contentful Layout ---
    const showBottomSection = activeTabId === COMMERCIAL_CARDS_ID || activeTabId === FULL_AP_ID;

    return (
      <div className={styles.flexContentWrapper}>
        <div className={styles.linksColumn}>
          <div className={styles.topLinksRow}>
            {activeTabData?.navigationItemsCollection?.items.map((item, idx) => (
              <Link
                href={hrefWithUtmParams(getUrl(item), locationSearch)}
                key={item.sys.id}
                target={item.openInNewTab ? "_blank" : "_self"}
              >
                <a
                  onClick={closeMenu}
                  className={`${styles.navCard} ${idx === 0 ? styles.featured : ''}`}
                  {...parseDataAttributes(item?.dataAttributes)}
                >
                  <div className={styles.iconBox}>
                    <Image
                      src={item.icon?.url}
                      alt="" width={24} height={24}
                    />
                  </div>
                  <div className={styles.cardInfo}>
                    <h4>{item.linkText || ""}</h4>
                    <p>{item.description || ""}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          {showBottomSection && (router.locale === "en-US" || router.locale === "fr-CA") && (
            <div className={styles.bottomLinksSection}>
              <Link href={hrefWithUtmParams('/corpay-complete', locationSearch)}>
                <a
                  onClick={closeMenu}
                  className={styles.navCard}
                  data-track-click-label={"globalnav4:corpay_complete"}
                >
                  <div className={styles.iconBox}><Image src={'https://images.ctfassets.net/h83dujey17us/3tqimWRWIXUN22vmWUsgqr/a917f9d51da1266a76ab85f85c2d6a30/corpay_complete_tick_icon.svg'} alt="" width={24} height={24} /></div>
                  <div className={styles.cardInfo}>
                    <h4>Corpay Complete</h4>
                    <p>All your payments. All your cards. One scalable, mobile-ready system.</p>
                  </div>
                </a>
              </Link>
            </div>
          )}
        </div>
        <div className={styles.promoColumn}>
          <div className={styles.imageBox}>
            <Image
              src={activeTabData?.ctaImage?.url}
              alt="Promo" width={257} height={282} className={styles.img}
            />
          </div>
          <Link
            href={hrefWithUtmParams(getUrl(activeTabData), locationSearch)}
          >
            <a
              onClick={closeMenu}
              className={styles.blackBtn}
              {...parseDataAttributes(activeTabData?.dataAttributes)}
            >
              {activeTabData?.ctaButton}
              <Image src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg" alt="" width={8} height={10} />
            </a>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.megaMenuContainer}>
      <div className={styles.flexWrapper}>
        <aside className={styles.sidebar}>
          {allTabs.map((tab) => (
            <button
              key={tab.sys.id}
              className={`${styles.sideTab} ${activeTabId === tab.sys.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveTabId(tab.sys.id)}
              {...parseDataAttributes(tab?.dataAttributes)}
            >
              {tab.title}
              {activeTabId === tab.sys.id && <span className={styles.activeArrow}>→</span>}
            </button>
          ))}
        </aside>
        <main className={styles.mainContent}>{renderTabContent()}</main>
      </div>
    </div>
  );
};

export default SolutionsMenu;