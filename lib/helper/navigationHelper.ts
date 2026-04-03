export const locales = [
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

export const regionalLocales = [
    {
        region: "Worldwide",
        items: [
            { code: "en-US", label: "USA", fullName: "Canada & USA", flag: "/assets/usFlag.png" },
            { code: "en-AU", label: "AU", fullName: "Australia", flag: "/assets/usFlag.png" },
            { code: "fr-CA", label: "CA", fullName: "Canada-Francais", flag: "/assets/usFlag.png" },
            { code: "en-NZ", label: "NZ", fullName: "New Zealand", flag: "/assets/usFlag.png" },
            { code: "en-GB", label: "UK", fullName: "United Kingdom", flag: "/assets/usFlag.png" },
            { code: "en-SG", label: "SGP", fullName: "Singapore", flag: "/assets/usFlag.png" },
            { code: "en-CHI", label: "JEY", fullName: "Channel Islands", flag: "/assets/usFlag.png" },
        ]
    },
    {
        region: "Europe",
        items: [
            { code: "en-IE", label: "IE", fullName: "Ireland", flag: "/assets/usFlag.png" },
            { code: "it-IT", label: "IT", fullName: "Italia", flag: "/assets/usFlag.png" },
            { code: "pt-PT", label: "PT", fullName: "Português", flag: "/assets/usFlag.png" },
            { code: "es-ES", label: "ES", fullName: "Espana", flag: "/assets/usFlag.png" },
            { code: "sv-SE", label: "SE", fullName: "Sverige", flag: "/assets/usFlag.png" },
            { code: "fr-FR", label: "FR", fullName: "Francais", flag: "/assets/usFlag.png" },
            { code: "de-DE", label: "DE", fullName: "Deutsch", flag: "/assets/usFlag.png" },
            { code: "fr-LU", label: "LU", fullName: "Luxembourg", flag: "/assets/usFlag.png" },
        ]
    }
];

export const localeText = {
    'en-US': {
        'Get in Touch': 'Get in Touch',
        Login: 'Login'
    },
    'fr-CA': {
        'Get in Touch': 'Contactez-nous',
        Login: 'Connexion'
    },
    'en-GB': {
        'Get in Touch': 'Get in Touch',
        Login: 'Login'
    },
    'en-AU': {
        'Get in Touch': 'Get in Touch',
        Login: 'Login'
    },
    'en-NZ': {
        'Get in Touch': 'Get in Touch',
        Login: 'Login'
    },
    'en-SG': {
        'Get in Touch': 'Get in Touch',
        Login: 'Login'
    },
    it: {
        'Get in Touch': 'Mettiti in Contatto',
        Login: 'Accedere'
    },
    es: {
        'Get in Touch': 'Ponte en Contacto',
        Login: 'Acceso'
    },
    'en-CHI': {
        'Get in Touch': 'Get in Touch',
        Login: 'Login'
    },
    'en-IE': {
        'Get in Touch': 'Get in Touch',
        Login: 'Login'
    },
    sv: {
        'Get in Touch': 'Hör av Dig',
        Login: 'Logga in'
    },
    'fr-CH': {
        'Get in Touch': 'Contactez-nous',
        Login: 'Connexion'
    },
    'de-CH': {
        'Get in Touch': 'Kontaktieren Sie Uns',
        Login: 'Anmeldung'
    },
    pt: {
        'Get in Touch': 'Entre em Contato',
        Login: 'Entrar'
    },
    'en-LU': {
        'Get in Touch': 'Get in Touch',
        Login: 'Login'
    },
    'nl-NL': {
        'Get in Touch': 'Neem Contact Op',
        Login: 'Inloggen'
    }
};

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

export const getContactUsUrl = (pathname: string, locale: string): string => {
    if (pathname.startsWith('/ap-automation') || apAutomationPaths.includes(pathname)) {
        return '/contact-us/ap-automation';
    }

    if (pathname.startsWith('/cross-border') || crossBorderPaths.includes(pathname)) {
        return '/contact-us/cross-border';
    }

    if (pathname.startsWith('/commercial-cards')) {
        return '/contact-us/commercial-cards';
    }

    // Locale-based fallback logic
    const crossBorderLocales = ['en-US', 'fr-CA', 'en-GB'];
    if (!crossBorderLocales.includes(locale)) {
        return '/contact-us/cross-border';
    }

    return '/contact-us';
};