export default defineI18nConfig(() => ({
    locales: [
        { code: 'en', name: 'English', file: 'en.js', iso: 'en', dir: 'ltr' }
    ],
    detectBrowserLanguage: {
        useCookie: true,
        fallbackLocale: 'en',
    },
    defaultDirection: 'ltr',
    defaultLocale: 'en',
    langDir: 'lang',
    lazy: true,
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    vueI18nLoader: true,
    strategy: 'prefix_except_default'
}))