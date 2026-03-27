import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DesktopHeader from './desktop/DesktopHeader';
import MobileHeader from './mbl/MobileHeader';
import dynamic from 'next/dynamic';

// Script Imports
import CookieScript from "../cookie-script/cookiescript"
import MunchkinScript from '../scripts/marketo-munchkin';
import GTMScript from '../scripts/gtm';
import MarketoScript from '../scripts/marketo-forms';
import ZoomInfo from '../cookie-script/zoominfo';
import FactorsAI from '../cookie-script/factors';
import IntellimizeScript from '../cookie-script/intellimize';
import OneTrustScript from '../cookie-script/onetrust';
import HubspotScript from '../scripts/hubspot-forms';
import TrustpilotScript from '../scripts/trust-pilot';
import Prefetch from '../cookie-script/prefetch';
import FeedbucketScript from '../cookie-script/feedbucket';
import DriftListeners from '../scripts/drift-listeners';
import CookiebotScript from '../cookie-script/cookiebot';

const Footer = dynamic(() => import('../footer'), {
  loading: () => <p></p>,
});

const HeaderController = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

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

  const localeText = {
    'en-US': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'fr-CA': {
      'Talk to an expert': 'Parlez à un expert',
      Login: 'Connexion'
    },
    'en-GB': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'en-AU': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'en-NZ': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'en-SG': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    it: {
      'Talk to an expert': 'Parla con un esperto',
      Login: 'Accedere'
    },
    es: {
      'Talk to an expert': 'Hable con un experto',
      Login: 'Acceso'
    },
    'en-CHI': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'en-IE': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    sv: {
      'Talk to an expert': 'Prata med en expert',
      Login: 'Logga in'
    },
    'fr-CH': {
      'Talk to an expert': 'Parlez à un expert',
      Login: 'Connexion'
    },
    'de-CH': {
      'Talk to an expert': 'Mit einem Experten sprechen',
      Login: 'Anmeldung'
    },
    pt: {
      'Talk to an expert': 'Fale com um especialista',
      Login: 'Entrar'
    },
    'en-LU': {
      'Talk to an expert': 'Talk to an expert',
      Login: 'Login'
    },
    'nl-NL': {
      'Talk to an expert': 'Praat met een expert',
      Login: 'Inloggen'
    }
  };

  const marketoFormsURl = [
    '/',
    '/contact-us',
    '/lp',
    '/register-webcast',
    '/preview',
    '/resources/blog',
    '/resources/customer-stories',
    '/resources/newsroom',
    '/resources/info-sheet',
    '/resources/market-analysis',
    '/resources/whitepapers',
    '/resources/webcasts',
    '/resources/podcasts',
    '/resources/whitepapers',
    '/request-demo',
    '/newsletter',
    '/ap-automation',
    '/commercial-cards',
    '/industries',
    '/corpay-complete',
    '/solution-finder'
  ];

  const hubspotFormsURl = [
    '/resources/blog',
    '/resources/customer-stories',
    '/resources/newsroom',
    '/resources/info-sheet',
    '/resources/market-analysis',
    '/resources/whitepapers',
    '/resources/webcasts',
    '/resources/podcasts',
    '/resources/whitepapers',
    '/newsletter',
    '/preview',
    '/lp'
  ];

  const factorsAIUrl = [
    '/ap-automation/payments-automation',
    '/ap-automation/ap-and-invoice-automation',
    '/ap-automation/procure-to-pay',
    '/industries/construction'
  ];

  const oneTrustUrl = [
    '/privacy-policy/unitedstates',
    '/privacy-policy/canada',
    '/global-sites',
    '/crossborder/privacy-policy/australia',
    '/crossborder/privacy-policy/canada',
    '/crossborder/privacy-policy/europe',
    '/crossborder/privacy-policy/jersey',
    '/crossborder/privacy-policy/unitedkingdom',
    '/crossborder/privacy-policy/unitedstates',
    '/crossborder/privacy-policy/singapore',
    '/privacy-notice/crossborder/GLBA',
    '/privacy-policy',
    '/test-do-not-use-in-production-ot-pages',
    '/corpay-complete/privacy-policy',
    '/corpay-complete/uk-tax-strategy',
    '/corpay-complete/carbon-reduction-plan'
  ];

  let contactUsUrl = '/contact-us';

  const apAutomationPaths = [
    '/industries/automotive',
    '/industries/construction',
    '/industries/hospitality',
    '/industries/technology',
    '/industries/wholesale-distribution',
    '/industries/education',
    '/industries/healthcare-biotech',
    '/industries/manufacturing',
    '/industries/retail'
  ];

  const crossBorderPaths = [
    '/industries/financial-markets',
    '/industries/healthcare',
    '/industries/payroll',
    '/industries/relocation',
    '/industries/translation',
    '/industries/entertainment-media',
    '/industries/fintech',
    '/industries/ngos',
    '/industries/professional-services-firms'
  ];

  if (router.asPath.startsWith('/ap-automation') || apAutomationPaths.includes(router.asPath)) {
    contactUsUrl = '/contact-us/ap-automation';
  } else if (router.asPath.startsWith('/cross-border') || crossBorderPaths.includes(router.asPath)) {
    contactUsUrl = '/contact-us/cross-border';
  } else if (router.asPath.startsWith('/commercial-cards')) {
    contactUsUrl = '/contact-us/commercial-cards';
  } else if (router.locale !== 'en-US' && router.locale !== 'fr-CA' && router.locale !== 'en-GB') {
    contactUsUrl = '/contact-us/cross-border';
  }

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) return <div style={{ height: '80px', background: '#dfdddd' }} />;

  return (
    <>
      {/* <Prefetch />
      <CookiebotScript />
      <GTMScript />
      <DriftListeners />
      <CookieScript />
      <IntellimizeScript />
      <TrustpilotScript />

      {process.env.NEXT_PUBLIC_COOKIE_SCRIPT_ENV !== 'prod' && <FeedbucketScript />}

      {marketoFormsURl.some((url) => router.asPath.startsWith(url)) && (
        <>
          <MunchkinScript />
          <MarketoScript />
          <ZoomInfo />
        </>
      )}

      {hubspotFormsURl.some((url) => router.asPath.startsWith(url)) && <HubspotScript />}

      {factorsAIUrl.some((url) => router.asPath === url) && <FactorsAI />}

      {oneTrustUrl.some((url) => router.asPath === url) && (
        <OneTrustScript pathName={router.asPath} />
      )} */}

      {/* Header View Logic */}
      {isMobile ? (
        <MobileHeader
          data={children.props.links}
          locales={locales}
          localeText={localeText}
          contactUsUrl={contactUsUrl}
        />
      ) : (
        <DesktopHeader
          data={children.props.links}
          locales={locales}
          localeText={localeText}
          contactUsUrl={contactUsUrl}
        />
      )}
      <div>{children}</div>
      <Footer
        links={children.props.footerLinks}
        linksGlobal={children.props.footerLinksDefault}
      />
    </>
  );
};

export default HeaderController;