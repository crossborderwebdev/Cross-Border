import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import SolutionsMenu from './modules/SolutionsMenu';
import styles from './styles/DesktopHeader.module.scss';
import Image from 'next/image';
import IndustriesMenu from './modules/IndustriesMenu';
import SimpleGridMenu from './modules/SimpleMenu';
import dynamic from 'next/dynamic';
import { hrefWithUtmParams, parseDataAttributes } from '../../../util/helper';
import useLocationSearch from '../../../util/useLocationSearch';

// const AutoComplete = dynamic(() => import('../newAutoComplete'), {
//   loading: () => <p></p>
// });

const DesktopHeader = ({ data, locales, localeText, contactUsUrl }) => {
  const router = useRouter();
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);
  const [cookies, setCookie] = useCookies(['']);
  const headerRef = useRef(null);
  const { locationSearch } = useLocationSearch();

  const currentLocaleLabel = locales.find(l => l.code === router.locale)?.label || 'NA';
  const translationsText = localeText[router.locale] || localeText['en-US'];

  useEffect(() => {
    const closeAll = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveMenuId(null);
        setIsLocaleOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', closeAll);
    return () => document.removeEventListener('mousedown', closeAll);
  }, []);

  const handleLocaleChange = (localeCode) => {
    setCookie('region', localeCode, { path: '/' });
    setCookie('homepageVisited', localeCode, { path: '/' });
    router.push(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      { locale: localeCode }
    );
    setIsLocaleOpen(false);
  };

  return (
    <header className={styles.headerContainer} ref={headerRef}>
      <div className={styles.topNav}>

        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <Link href={hrefWithUtmParams('/', locationSearch)}>
              <a data-track-click-label="globalnav1:logo">
                <Image
                  src="https://images.ctfassets.net/h83dujey17us/4yaRlTL19o9VSqVeTa3mSV/215ef45913d5fa7b8f50269441cf10bd/corpay.svg"
                  alt="Corpay"
                  width={135}
                  height={32}
                  onClick={() => setActiveMenuId(null)}
                />
              </a>
            </Link>
          </div>

          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              {data?.map((group) => {
                const hasDropdown = group.navigationColumnsCollection?.items?.length > 0 || group.navigationItemsCollection?.items?.length > 0;
                const isActive = activeMenuId === group.sys.id;

                // Hardcoded IDs for specific layouts
                const isSolutions = group.sys.id === 'pyNMJaJyrujRH3GjuSXvD';
                const isIndustries = group.sys.id === '2kgIzNPOH0sZxP3jqmOJYW';

                return (
                  <li key={group.sys.id} className={styles.navItem}>
                    <button
                      className={`${styles.navButton} ${isActive ? styles.active : ''}`}
                      onClick={() => hasDropdown && setActiveMenuId(isActive ? null : group.sys.id)}
                      {...parseDataAttributes(group?.dataAttributes)}
                    >
                      {group.linkText}
                      {hasDropdown && (
                        <span className={`${styles.chevron} ${isActive ? styles.rotate : ''}`}>
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
                      <>
                        {isSolutions ? (
                          <SolutionsMenu content={group} closeMenu={() => setActiveMenuId(null)} />
                        ) : isIndustries ? (
                          <IndustriesMenu content={group} closeMenu={() => setActiveMenuId(null)} />
                        ) : (
                          <SimpleGridMenu content={group} closeMenu={() => setActiveMenuId(null)} />
                        )}
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className={styles.rightSection}>
          <div className={`${styles.searchWrapper} ${isSearchOpen ? styles.expanded : ''}`}>
            {/* <AutoComplete
              autoOpen={true}
            /> */}
            <input type="text" placeholder="Search" className={styles.searchInput} />
            <button className={styles.iconBtn} onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <span className={styles.searchIcon}>
                <Image
                  src="https://images.ctfassets.net/h83dujey17us/1Hu2ASdCdH3K6WfE2ygz8O/146949c577a609668b4b7527bf29b446/searchIcon.svg"
                  alt="Corpay"
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </div>

          <div className={styles.utils}>
            <Link href={hrefWithUtmParams('/login', locationSearch)}>
              <a
                className={styles.loginLink}
                data-track-click-label="globalnav1:login"
              >
                {translationsText['Login'] || 'Login'}
              </a>
            </Link>
            <Link href={hrefWithUtmParams(`${contactUsUrl}`, locationSearch)}>
              <a
                data-track-click-label="globalnav1:contact"
              >
                <span className={styles.ctaBtn}>
                  {translationsText['Talk to an expert'] || 'Talk to an expert'}
                  <Image
                    src="https://images.ctfassets.net/h83dujey17us/7zieE00PJ8g5R2nK8ZLz0e/1dbf166b844f8ec0890a371042480343/RightArrowWhiteNew.svg"
                    alt="Corpay"
                    width={8}
                    height={10}
                  />
                </span>
              </a>
            </Link>

            <div className={styles.localeSelector}>
              <button className={styles.localeBtn} onClick={() => setIsLocaleOpen(!isLocaleOpen)}>
                <Image
                  src="https://images.ctfassets.net/h83dujey17us/6rHsvg59C8Ymusk3LZOVJn/0d2a480276d00da59c1cff7a260728b2/globeIconNew.svg"
                  alt="Corpay"
                  width={24}
                  height={24}
                />
                {currentLocaleLabel}
                <div className={`${styles.chevron} ${isLocaleOpen ? styles.rotate : ''}`}>
                  <Image
                    src="https://images.ctfassets.net/h83dujey17us/grSjMBOSr05AM1qdKha9T/07c1aeb0c3521988752c2d3651cfd5e3/down_black_arrow.svg"
                    alt="arrow"
                    width={7}
                    height={5}
                  />
                </div>
              </button>
              {isLocaleOpen && (
                <ul className={styles.localeList}>
                  {locales.map((l) => (
                    <li
                      key={l.code}
                      className={router.locale === l.code ? styles.activeLocale : ''}
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