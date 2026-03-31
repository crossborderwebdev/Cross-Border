'use client';
import { usePathname, useParams } from 'next/navigation';
import DesktopHeader from './desktop/DesktopHeader';
import MobileHeader from './mbl/MobileHeader';
import { navigationData } from '@/public/data/dummyData';
import { locales, localeText, getContactUsUrl } from '@/lib/helper/navigationHelper';

const HeaderController = ({ children = navigationData }) => {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string || 'en-US';

  // Use a helper function to keep this file clean
  const contactUsUrl = getContactUsUrl(pathname, currentLocale);

  return (
    <>
      {/* <div className="block lg:hidden pt-[74px]">
        <MobileHeader
          data={children.props.links}
          locales={locales}
          localeText={localeText}
          contactUsUrl={contactUsUrl}
        />
      </div> */}
      <div className="hidden lg:block pt-[80px]">
        <DesktopHeader
          data={children.props.links}
          locales={locales}
          localeText={localeText}
          contactUsUrl={contactUsUrl}
        />
      </div>
    </>
  );
};

export default HeaderController;