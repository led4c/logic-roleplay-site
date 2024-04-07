import { defineConfig } from "vitepress";
import { idConfig } from "./locales/id";
import { enConfig } from "./locales/en";

export default defineConfig({
    lastUpdated: true,
    base: '/logic-roleplay-site/',
    cleanUrls: true,
    sitemap: {
        hostname: 'https://led4c.github.io/logic-roleplay-site/',
        // hostname: 'https://www.logicprojekt.cf',
    },
    themeConfig: {
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "Pencarian",
                        buttonAriaLabel: "Apa yang ingin kamu cari?",
                    },
                    modal: {
                        noResultsText: "Tidak ada hasil untuk",
                        resetButtonTitle: "Reset pencarian",
                        footer: {
                            selectText: "Pilih",
                            navigateText: "Navigasi",
                            closeText: "Tutup",
                        },
                    },
                },
                locales: {
                    en: {
                        translations: {
                            button: {
                                buttonText: "Search",
                                buttonAriaLabel: "What are you looking for?",
                            },
                            modal: {
                                noResultsText: "No result for",
                                resetButtonTitle: "Reset search",
                                footer: {
                                    selectText: "Select",
                                    navigateText: "Navigate",
                                    closeText: "Close",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    locales: {
        root: {
            label: "Indonesia",
            lang: "id-ID",
            link: "/",
            ...idConfig,
        },
        en: {
            label: "English",
            lang: "en-US",
            link: "/en/",
            ...enConfig,
        },
    },
    head: [
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover',
            },
        ],
        [
            'meta',
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'lack-translucent',
            },
        ],
        [
            'meta',
            {
                name: 'applicable-device',
                content: 'pc,mobile',
            },
        ],
        [
            'meta',
            {
                name: 'google',
                content: 'notranslate',
            },
        ],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        [
            'link',
            {
                rel: 'icon',
                href: `/logic-roleplay-site/image/logo/favicon-32x32.png`,
                type: 'image/png',
            },
        ],
        [
            'link',
            {
                rel: 'alternate',
                href: `/image/logo/favicon.ico`,
                type: 'image/x-icon',
            },
        ],
        [
            'link',
            {
                rel: 'alternate',
                href: `/logic-roleplay-site/feed.rss`,
                type: 'application/rss',
            },
        ],
    ],
});
