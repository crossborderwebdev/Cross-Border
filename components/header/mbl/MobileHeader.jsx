import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenuDrawer from './MobileMenuDrawer';
import styles from './MobileHeader.module.scss';
import { hrefWithUtmParams, parseDataAttributes, useLocationSearch } from '@/lib/helper/helper';

const MobileHeader = ({ data, localeText, contactUsUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { locationSearch } = useLocationSearch();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.mobileHeader}>
      <div className={styles.container}>
        <Link
          href={hrefWithUtmParams('/', locationSearch)}
        >
          <a
            className={styles.logoWrapper}
            data-track-click-label="globalnav1:logo"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="https://images.ctfassets.net/h83dujey17us/4yaRlTL19o9VSqVeTa3mSV/215ef45913d5fa7b8f50269441cf10bd/corpay.svg"
              alt="Corpay"
              width={141}
              height={44}
              priority
            />
          </a>
        </Link>

        <Image
          src="https://images.ctfassets.net/h83dujey17us/ie3NsSAwOxapauay0NBg1/7e0fe41b54c638f5b2543b266edf0bf4/hamburger.svg"
          alt="Hamburger Menu"
          width={25}
          height={18}
          onClick={toggleMenu}
        />
      </div>

      <MobileMenuDrawer
        isOpen={isOpen}
        onClose={toggleMenu}
        navigationData={data}
        localeText={localeText}
        contactUsUrl={contactUsUrl}
      />
    </header>
  );
};

export default MobileHeader;