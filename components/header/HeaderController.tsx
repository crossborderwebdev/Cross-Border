// components/header/HeaderController.tsx
import DesktopHeader from './desktop/DesktopHeader';
import MobileHeader from './mbl/MobileHeader';
import { navigationData } from '@/public/data/dummyData';
import { locales, localeText, regionalLocales } from '@/lib/helper/navigationHelper';

const HeaderController = ({ locale }: { locale: string }) => {

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
          regionalLocales={regionalLocales}
          localeText={localeText}
          currentLocale={locale}
        />
      </div>
    </>
  );
};

export default HeaderController;