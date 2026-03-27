import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/SimpleMenu.module.scss';
import { hrefWithUtmParams, parseDataAttributes } from '../../../../util/helper';
import useLocationSearch from '../../../../util/useLocationSearch';

const SimpleGridMenu = ({ content, closeMenu }) => {
  const { locationSearch } = useLocationSearch();

  const getUrl = (item) => {
    if (item?.externalUrl) return item.externalUrl;
    if (item?.pageReference?.slug) return `/${item.pageReference.slug}`;
    return '#';
  };

  const navItems1 = content.navigationColumnsCollection?.items?.[0]?.navigationItemsCollection?.items || [];
  const navItems2 = content.navigationColumnsCollection?.items?.[1]?.navigationItemsCollection?.items || [];
  const navItems = [...navItems1, ...navItems2];
  const promo = content.navigationColumnsCollection?.items?.[0] || {};

  return (
    <div className={styles.megaMenuContainer}>
      <div className={styles.flexWrapper}>

        <main className={styles.mainContent}>
          <div className={styles.linksFlexContainer}>
            {navItems.map((item) => (
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
                  <div className={styles.iconBox}>
                    <Image
                      src={item.icon?.url}
                      alt="" width={24} height={24}
                    />
                  </div>
                  <div className={styles.cardInfo}>
                    <h4>{item.linkText}</h4>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </main>

        {/* Promo Download Card */}
        <aside className={styles.promoColumn}>
          <div className={styles.downloadCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={promo.ctaImage?.url}
                alt="Promo"
                width={257}
                height={148}
                className={styles.promoImg}
              />
            </div>
            <div className={styles.promoText}>
              <h3>{promo?.pageReference?.seo?.title}</h3>
              <p>{promo?.pageReference?.seo?.description}</p>
            </div>
            <Link href={hrefWithUtmParams(`/resources/whitepapers${getUrl(promo)}`, locationSearch)}>
              <a
                className={styles.downloadBtn}
                onClick={closeMenu}
                {...parseDataAttributes(promo?.dataAttributes)}
              >
                {promo.ctaButton}
                <Image
                  src="https://images.ctfassets.net/h83dujey17us/3eOF3iC9tzE3LDLLLmpCqT/2fb34aa275190e062ecb00c666d2f9fe/download_icon_white.svg"
                  alt="" width={16} height={16}
                />
              </a>
            </Link>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default SimpleGridMenu;