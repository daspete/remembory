export default {
    css: [
        '~/assets/scss/app.scss'
    ],
    
    plugins: [
        { ssr: false, src: '~plugins/nuxtClientInit' },
        { ssr: true, src: '~plugins/components' }
    ],

    modules: [
        'nuxt-i18n'
    ],

    buildModules: [
        '@nuxtjs/pwa',
        '@nuxtjs/tailwindcss'
    ],

    i18n: {
        locales: [
            { code: 'de', file: 'de.js' },
            { code: 'en', file: 'en.js' }
        ],
        defaultLocale: 'de',
        lazy: true,
        langDir: 'lang/'
    },

    pwa: {
        meta: {
            name: 'Remembory',
            description: 'Simple memory training app',
            theme_color: '#fcba03',
            lang: 'de'
        },
        manifest: {
            name: 'Remembory',
            lang: 'de'
        },
        workbox: {
            runtimeCaching: [
                {
                    urlPattern: 'https://fonts.googleapis.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] }}
                },
                {
                    urlPattern: 'https://fonts.gstatic.com/.*',
                    handler: 'cacheFirst',
                    method: 'GET',
                    strategyOptions: { cacheableResponse: { statuses: [0, 200] }}
                },
            ]
        }
    }
}