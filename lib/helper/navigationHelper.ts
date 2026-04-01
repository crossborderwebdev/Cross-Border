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
            { code: "en-SG", label: "SG", fullName: "Singapore", flag: "/assets/usFlag.png" },
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