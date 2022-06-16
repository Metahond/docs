import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'en-US',
    title: 'Metahond Development – Documentation',
    titleTemplate: false,
    description: 'Documentation for Metahond Development projects.',
    appearance: true,
    themeConfig: {
        siteTitle: 'Metahond Development',
        nav: [
            { text: 'Home', link: '/', activeMatch: '/' },
            { text: 'DevUtils', link: '/devutils/', activeMatch: '/devutils' },
            { text: 'Support Discord', link: 'discord.gg/N3w33WSMRW' },
            { text: 'Github', link: 'https://github.com/Metahond/docs' },
            { text: 'Website', link: 'https://metahond.codes' }
        ],
        sidebar: {
            general: [
                {
                    text: 'General Information',
                    items: [
                        { text: 'Introduction', link: '/introduction/' },
                        { text: 'Socials', link: '/socials/' }
                    ]
                }
            ]
        },
        footer: {
            message: 'Made with ❤️ by Metahond',
            copyright: '© 2022-present Metahond'
        },
        algolia: {
            appId: 'N0TOD6VLJX',
            apiKey: '369b2e951197f8d0ae17acbbe8f36a10',
            indexName: 'docs'
        }
    }
});
