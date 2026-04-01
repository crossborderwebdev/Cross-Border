// components/header/HeaderController.tsx
import DesktopHeader from './desktop/DesktopHeader';
import MobileHeader from './mbl/MobileHeader';
import { navigationData } from '@/public/data/dummyData';
import { locales, localeText } from '@/lib/helper/navigationHelper';

// This is a Server Component now
const HeaderController = ({ locale }: { locale: string }) => {
  // Since this is on the server, we fetch the data directly
  const data = navigationData.props.links;

  return (
    <>
      <div className="block lg:hidden pt-[74px]">
        <MobileHeader
          data={data}
          locales={locales}
          localeText={localeText}
          currentLocale={locale}
        />
      </div>
      <div className="hidden lg:block pt-[80px]">
        <DesktopHeader
          data={data}
          locales={locales}
          localeText={localeText}
          currentLocale={locale}
        />
      </div>
    </>
  );
};

export default HeaderController;