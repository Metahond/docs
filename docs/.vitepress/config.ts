import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'en-US',
    title: 'Metahond Development – Documentation',
    titleTemplate: 'Metahond Development',
    description: 'Documentation for Metahond Development projects.',
    appearance: true,
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    ],
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'Metahond Development',
        nav: [
            { text: 'Home', link: '/', activeMatch: '/' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Metahond/docs' },
        ],
        sidebar: {
            '/': sidebar()
        },
        footer: {
            message: 'Made with ❤️ by Metahond',
            copyright: '© 2022-present Metahond'
        },
    }
});

function sidebar() {
    return [
        {
            text: 'General Information',
            items: [{ text: 'Introduction', link: '/' }],
        },
        {
            text: 'Color Util',
            items: [
                {
                    text: 'Library',
                    link: 'https://deno.land/x/color_util',
                },
                {
                    text: 'Documentation',
                    link: 'https://deno.land/x/color_util/mod.ts',
                },
            ],
        },
        {
            text: 'Socials',
            items: [
                { text: 'Website', link: 'https://metahond.codes' },
                { text: 'GitHub', link: 'https://github.com/Metahond' },
                { text: 'Instagram', link: 'https://instagram.com/metahond' },
                { text: 'Support Discord', link: 'https://discord.metahond.codes' },
            ],
        },
        {
            text: 'Legal',
            items: [
                { text: 'Imprint', link: './imprint' }
            ]
        }
    ];
}
