import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

// export const META_URL = 'https://led4c.github.io/logic-roleplay-site/'
export const META_URL = 'https://www.logicprojekt.cf'
export const META_TITLE = "Logic Roleplay";
export const META_DESCRIPTION = "Logic Roleplay adalah server GTA V pada platform FiveM dengan basic roleplay";
export const META_KEYWORDS = 'Logic Roleplay, Logic Roleplay Id, Logic Projekt, Logic FiveM, Logic Roleplay Indonesia, FiveM, GTA V, GTA V Roleplay, Logical, led4c, GTA V Roleplay Indonesia'
export const LOCAL_CODE = 'id-ID'

export const idConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    titleTemplate: 'Logic Roleplay',
    description: META_DESCRIPTION,
    themeConfig: {
        siteTitle: false, // "Logic Roleplay",
        logo: "/image/logo/logic-text.png",
        // logo: "/image/logo/logo_256.png",
        outlineTitle: "Isi Halaman",
        lastUpdatedText: "Pembaruan Terakhir",
        returnToTopLabel: "Kembali Ke Atas",
        langMenuLabel: "Ubah Bahasa",
        notFound: {
            title: "Halaman Tidak Ditemukan",
            quote: "Sepertinya kamu tersesat, sebaiknya kembali ke beranda",
            linkLabel: "Beranda",
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/led4c/" },
            { icon: "discord", link: "https://discord.gg/UdrSdHaPYc" },
        ],
        docFooter: {
            prev: "Halaman sebelumnya",
            next: "Halaman berikutnya",
        },
        // editLink: {
        //     pattern: 'https://github.com/led4c/logic-roleplay-site/edit/main/docs/:path',
        //     text: "Edit halaman ini",
        // },
        nav: nav(),
        sidebar: sidebar(),
        footer: footer(),
    },
};

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Beranda",
            link: "/",
        },
        {
            text: 'Komunitas',
            items: [
                {
                    text: 'Pekerjaan',
                    items: [
                        {
                            text: 'Pekerjaan Utama',
                            link: '/community/joblist/main-job/police',
                        },
                        {
                            text: 'Pekerjaan Sampingan',
                            link: '/community/joblist/side-job/slaughterer',
                        },
                    ],
                },
                {
                    text: 'Kriminal',
                    items: [
                        {
                            text: 'Kategori Fraksi',
                            link: '/community/faction/faction-category/biker',
                        },
                        {
                            text: 'Komunitas Fraksi',
                            link: '/community/faction/faction-player/biker/biker-sample',
                        },
                    ],
                },
            ],
        },
        {
            text: "Tentang Kami",
            items: [
                {
                    text: "Tentang Kami",
                    link: "/about/about",
                },
                {
                    text: "Kontak",
                    link: "/about/contact",
                },
                {
                    text: "Tim",
                    link: "/about/team",
                },
            ],
        },
    ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return {
        // @ts-ignore
        "/logical": [
            {
                text: "Roleplaying",
                collapsed: true,
                items: [
                    {
                        text: "Apa itu roleplay?",
                        link: "/logical/rules/what-is-roleplay",
                    },
                    { text: "Peraturan Server", link: "/logical/rules/server-rules" },
                    {
                        text: "Peraturan Dalam Game",
                        link: "/logical/rules/in-game-rules",
                    },
                    { text: "Banned", link: "/logical/rules/banned" },
                ],
            },
            {
                text: "Bagaimana Cara Bermain?",
                collapsed: true,
                items: [
                    {
                        text: "Persyaratan Sistem",
                        link: "/logical/how-to-play/system-requirements",
                    },
                    {
                        text: "Instalasi FiveM",
                        link: "/logical/how-to-play/fivem-installation",
                    },
                    { text: "Join Server", link: "/logical/how-to-play/join-server" },
                ],
            },
        ],
        "/community/joblist": [
            {
                text: "Pekerjaan Utama",
                collapsed: true,
                items: [
                    { text: "Polisi", link: "/community/joblist/main-job/police" },
                    { text: "EMS", link: "/community/joblist/main-job/ems" },
                    { text: "Mekanik", link: "/community/joblist/main-job/mechanic" },
                    { text: "Pedagang", link: "/community/joblist/main-job/merchant" },
                    { text: "Taksi", link: "/community/joblist/main-job/taxi" },
                ],
            },
            {
                text: "Pekerjaan Sampingan",
                collapsed: true,
                items: [
                    { text: "Tukang Ayam", link: "/community/joblist/side-job/slaughterer" },
                    { text: "Tukang Susu", link: "/community/joblist/side-job/milkman" },
                    { text: "Penambang", link: "/community/joblist/side-job/miner" },
                    { text: "Penjahit", link: "/community/joblist/side-job/tailor" },
                    { text: "Penebang Kayu", link: "/community/joblist/side-job/lumberjack" },
                    { text: "Nelayan", link: "/community/joblist/side-job/fisherman" },
                ],
            },
        ],
        "/community/faction": [
            {
                text: "Kategori Fraksi",
                collapsed: true,
                items: [
                    { text: "Biker", link: "/community/faction/faction-category/biker" },
                    { text: "Mafia", link: "/community/faction/faction-category/mafia" },
                    { text: "Gangster", link: "/community/faction/faction-category/gangster" },
                    { text: "Kartel", link: "/community/faction/faction-category/cartel" },
                    { text: "Yakuza", link: "/community/faction/faction-category/yakuza" },
                ],
            },
            {
                text: "Fraksi Komunitas",
                collapsed: true,
                items: [
                    { 
                        collapsed: true, 
                        text: "Biker", 
                        items: [
                            { text: "Biker Sampel", link: "/community/faction/faction-player/biker/biker-sample" },
                        ],
                    },
                    { 
                        collapsed: true, 
                        text: "Mafia", 
                        items: [
                            { text: "Mafia Sampel", link: "/community/faction/faction-player/mafia/mafia-sample" },
                        ],
                    },
                    { 
                        collapsed: true, 
                        text: "Gangster", 
                        items: [
                            { text: "Gangster Sampel", link: "/community/faction/faction-player/gangster/gangster-sample" },
                        ],
                    },
                    { 
                        collapsed: true, 
                        text: "Kartel", 
                        items: [
                            { text: "Kartel Sampel", link: "/community/faction/faction-player/cartel/cartel-sample" },
                        ],
                    },
                    { 
                        collapsed: true, 
                        text: "Yakuza", 
                        items: [
                            { text: "Yakuza Sampel", link: "/community/faction/faction-player/yakuza/yakuza-sample" },
                        ],
                    },
                ],
            },
        ],
    };
}

function footer(): DefaultTheme.Footer {
    const currentYear = new Date().getFullYear();
    const startYear = 2021;

    let yearRange = startYear.toString();
    if (currentYear > startYear) {
        yearRange += ` - ${currentYear}`;
    }

    return {
        message: 'Made With 🤍',
        copyright: `Copyright © ${yearRange} Logic Roleplay - All rights reserved.`
    };
}
