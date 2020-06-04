export default {
    plugins: [
        { ssr: false, src: '~plugins/nuxtClientInit' },
        { ssr: true, src: '~plugins/components' }
    ],

    css: [
        '~/assets/scss/app.scss'
    ],

    buildModules: [
        '@nuxtjs/pwa',
        '@nuxtjs/tailwindcss'
    ],

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