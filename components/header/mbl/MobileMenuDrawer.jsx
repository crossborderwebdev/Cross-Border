import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import MobileSubDrawer from './MobileSubDrawer';
import styles from './MobileMenuDrawer.module.scss';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { hrefWithUtmParams, parseDataAttributes } from '../../../util/helper';
import useLocationSearch from '../../../util/useLocationSearch';

// const AutoComplete = dynamic(() => import('../newAutoComplete'), {
//   loading: () => <p></p>
// });

const MobileMenuDrawer = ({ isOpen, onClose, navigationData, localeText, contactUsUrl }) => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLocaleMode, setIsLocaleMode] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [, setCookie] = useCookies(['region', 'homepageVisited']);
  const { locationSearch } = useLocationSearch();

  useEffect(() => {
    if (!isOpen) {
      setActiveCategory(null);
      setIsLocaleMode(false);
    }
  }, [isOpen]);

  const locales = [
    { code: 'en-US', label: 'NA', fullName: 'Canada and USA' },
    { code: 'fr-CA', label: 'CAN', fullName: 'Canada - Français' },
    { code: 'en-GB', label: 'GBR', fullName: 'United Kingdom' },
    { code: 'en-CHI', label: 'JEY', fullName: 'Channel Islands' },
    { code: 'en-AU', label: 'AUS', fullName: 'Australia' },
    { code: 'en-NZ', label: 'NZL', fullName: 'New Zealand' },
    { code: 'en-SG', label: 'SGP', fullName: 'Singapore' },
    { code: 'it', label: 'ITA', fullName: 'Europe - Italia' },
    { code: 'es', label: 'ESP', fullName: 'Europe - España' },
    { code: 'en-IE', label: 'IRL', fullName: 'Europe - Ireland' },
    { code: 'sv', label: 'SWE', fullName: 'Europe - Sverige' },
    { code: 'de-CH', label: 'DEU', fullName: 'Europe - Deutsch' },
    { code: 'fr-CH', label: 'FRA', fullName: 'Europe - Français' },
    { code: 'pt', label: 'POR', fullName: 'Europe - Português' },
    { code: 'en-LU', label: 'LUX', fullName: 'Europe - Luxembourg' },
    { code: 'nl-NL', label: 'NLD', fullName: 'Europe - Nederland' },
  ];

  const currentLocaleLabel = locales.find(l => l.code === router.locale)?.label || 'NA';
  const translationsText = localeText[router?.locale] || localeText['en-US'];

  const handleBack = () => {
    setActiveCategory(null);
    setIsLocaleMode(false);
  };

  const handleCloseAll = () => {
    onClose();
    setTimeout(() => {
      setActiveCategory(null);
      setIsLocaleMode(false);
    }, 400);
  };

  const onSelectLocale = (localeCode) => {
    setCookie('region', localeCode, { path: '/' });
    setCookie('homepageVisited', localeCode, { path: '/' });
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: localeCode });
    handleCloseAll();
  };

  return (
    <div className={`${styles.drawerContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.drawerContent}>
        <div className={styles.menuBody}>

          {/* Level 1 */}
          <div className={`${styles.levelOne} ${(activeCategory || isLocaleMode) ? styles.hideLeft : ''}`}>
            <nav className={styles.navList}>
              {navigationData?.map((item) => (
                <button
                  key={item.sys.id}
                  className={styles.navCard}
                  onClick={() => setActiveCategory(item)}
                  {...parseDataAttributes(item?.dataAttributes)}
                >
                  <span className={styles.linkText}>{item.linkText}</span>
                  <Image src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg" alt="" width={6} height={9} className={styles.chevronIcon} />
                </button>
              ))}

              <button className={styles.navCard} onClick={() => setIsLocaleMode(true)}>
                <div className={styles.localeGroup}>
                  <Image src="https://images.ctfassets.net/h83dujey17us/6rHsvg59C8Ymusk3LZOVJn/0d2a480276d00da59c1cff7a260728b2/globeIconNew.svg" alt="" width={16} height={16} />
                  <span className={styles.linkText}>{currentLocaleLabel}</span>
                </div>
                <Image src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg" alt="" width={6} height={9} className={styles.chevronIcon} />
              </button>
            </nav>
          </div>

          {/* Level 2: Reusing SubDrawer for both Categories and Locales */}
          <div className={`${styles.levelTwo} ${(activeCategory || isLocaleMode) ? styles.showRight : ''}`}>
            <MobileSubDrawer
              category={activeCategory}
              isLocaleMode={isLocaleMode}
              locales={locales}
              onBack={handleBack}
              onClose={handleCloseAll}
              onSelectLocale={onSelectLocale}
              currentLocale={router.locale}
            />
          </div>
        </div>

        <div className={styles.footerActions}>
          <div>
            {/* <AutoComplete
              autoOpen={true}
              setSearchActive={setSearchActive}
              activateOnClick={true}
            /> */}
          </div>
          <Link href={hrefWithUtmParams('/login', locationSearch)}>
            <a
              data-track-click-label="globalnav1:login"
              className={styles.loginBtn}
            >
              <span>{translationsText['Login'] || 'Login'}</span>
            </a>
          </Link>
          <Link href={hrefWithUtmParams(`/${contactUsUrl}`, locationSearch)}>
            <a
              className={styles.ctaBtn}
              data-track-click-label="globalnav1:contact"
            >
              {translationsText['Talk to an expert'] || 'Talk to an expert'}
              <Image src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg" alt="" width={8} height={12} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;