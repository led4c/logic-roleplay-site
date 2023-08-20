import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

// export const META_URL = 'https://led4c.github.io/logic-roleplay-site/'
export const META_URL = 'https://www.logicprojekt.cf'
export const META_TITLE = "Logic Roleplay";
export const META_DESCRIPTION = "Logic Roleplay is a GTA V server on the FiveM platform with basic roleplaying";
export const META_KEYWORDS = 'Logic Roleplay, Logic Roleplay Id, Logic Projekt, Logic FiveM, Logic Roleplay Indonesian, FiveM, GTA V, GTA V Roleplay, Logical, led4c, GTA V Roleplay Indonesian'
export const LOCAL_CODE = 'en-US'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    titleTemplate: 'Logic Roleplay',
    description: META_DESCRIPTION,
    themeConfig: {
        siteTitle: false, // "Logic Roleplay",
        logo: "/image/logo/logic-text.png",
        // logo: "/image/logo/logo_256.png",
        outlineTitle: "Page Contents",
        lastUpdatedText: "Last Update",
        returnToTopLabel: "Back to Top",
        langMenuLabel: "Change Language",
        notFound: {
            title: "Page Not Found",
            quote: "Looks like you're lost, you should go back to the homepage.",
            linkLabel: "Home",
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/led4c/" },
            { icon: "discord", link: "https://discord.gg/UdrSdHaPYc" },
        ],
        docFooter: {
            prev: "Previous page",
            next: "Next page",
        },
        // editLink: {
        //     pattern: 'https://github.com/led4c/logic-roleplay-site/edit/main/docs/:path',
        //     text: "Edit this page",
        // },
        nav: nav(),
        sidebar: sidebar(),
        footer: footer(),
    },
};

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Home",
            link: "/en/",
        },
        {
            text: 'Community',
            items: [
                {
                    text: 'Job',
                    items: [
                        {
                            text: 'Main Job',
                            link: '/en/community/joblist/main-job/police',
                        },
                        {
                            text: 'Side Job',
                            link: '/en/community/joblist/side-job/slaughterer',
                        },
                    ],
                },
                {
                    text: 'Criminals',
                    items: [
                        {
                            text: 'Category Faction',
                            link: '/en/community/faction/faction-category/biker',
                        },
                        {
                            text: 'Commmunity Faction',
                            link: '/en/community/faction/faction-player/biker/biker-sample',
                        },
                    ],
                },
            ],
        },
        {
            text: "About Us",
            items: [
                {
                    text: "About Us",
                    link: "/en/about/about",
                },
                {
                    text: "Contact",
                    link: "/en/about/contact",
                },
                {
                    text: "Team",
                    link: "/en/about/team",
                },
            ],
        },
    ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return {
        // @ts-ignore
        "/en/logical": [
            {
                text: "Roleplaying",
                collapsed: true,
                items: [
                    {
                        text: "What is roleplay?",
                        link: "/en/logical/rules/what-is-roleplay",
                    },
                    { text: "Server Rules", link: "/en/logical/rules/server-rules" },
                    {
                        text: "In-Game Rules",
                        link: "/en/logical/rules/in-game-rules",
                    },
                    { text: "Banned", link: "/en/logical/rules/banned" },
                ],
            },
            {
                text: "How to play?",
                collapsed: true,
                items: [
                    {
                        text: "System Requirement",
                        link: "/en/logical/how-to-play/system-requirements",
                    },
                    {
                        text: "FiveM Installation",
                        link: "/en/logical/how-to-play/fivem-installation",
                    },
                    { text: "Join Server", link: "/en/logical/how-to-play/join-server" },
                ],
            },
        ],
        "/en/community/joblist": [
            {
                text: "Main Job",
                collapsed: true,
                items: [
                    { text: "Police", link: "/en/community/joblist/main-job/police" },
                    { text: "EMS", link: "/en/community/joblist/main-job/ems" },
                    { text: "Mechanic", link: "/en/community/joblist/main-job/mechanic" },
                    { text: "Merchant", link: "/en/community/joblist/main-job/merchant" },
                    { text: "Taxi", link: "/en/community/joblist/main-job/taxi" },
                ],
            },
            {
                text: "Side Job",
                collapsed: true,
                items: [
                    { text: "Slaughterer", link: "/en/community/joblist/side-job/slaughterer" },
                    { text: "Milkman", link: "/en/community/joblist/side-job/milkman" },
                    { text: "Miner", link: "/en/community/joblist/side-job/miner" },
                    { text: "Tailor", link: "/en/community/joblist/side-job/tailor" },
                    { text: "Lumberjack", link: "/en/community/joblist/side-job/lumberjack" },
                    { text: "Fisherman", link: "/en/community/joblist/side-job/fisherman" },
                ],
            },
        ],
        "/en/community/faction": [
            {
                text: "Category Faction",
                collapsed: true,
                items: [
                    { text: "Biker", link: "/en/community/faction/faction-category/biker" },
                    { text: "Mafia", link: "/en/community/faction/faction-category/mafia" },
                    { text: "Gangster", link: "/en/community/faction/faction-category/gangster" },
                    { text: "Cartel", link: "/en/community/faction/faction-category/cartel" },
                    { text: "Yakuza", link: "/community/faction/faction-category/yakuza" },
                ],
            },
            {
                text: "Community Faction",
                collapsed: true,
                items: [
                    { 
                        collapsed: true, 
                        text: "Biker", 
                        items: [
                            { text: "Biker Sample", link: "/community/faction/faction-player/biker/biker-sample" },
                        ],
                    },
                    { 
                        collapsed: true, 
                        text: "Mafia", 
                        items: [
                            { text: "Mafia Sample", link: "/community/faction/faction-player/mafia/mafia-sample" },
                        ],
                    },
                    { 
                        collapsed: true, 
                        text: "Gangster", 
                        items: [
                            { text: "Gangster Sample", link: "/community/faction/faction-player/gangster/gangster-sample" },
                        ],
                    },
                    { 
                        collapsed: true, 
                        text: "Cartel", 
                        items: [
                            { text: "Cartel Sample", link: "/community/faction/faction-player/cartel/cartel-sample" },
                        ],
                    },
                    { 
                        collapsed: true, 
                        text: "Yakuza", 
                        items: [
                            { text: "Yakuza Sample", link: "/community/faction/faction-player/yakuza/yakuza-sample" },
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
