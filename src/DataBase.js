import Assassin from "./img/Assassin.webp";
import Slayer from "./img/Slayer.webp";
import Exalted from "./img/Exalted.webp";

export const LEGION = [
    {
        id: 1,
        cardImage: Assassin,
        buildName: "CoC Shadow Ice Nova Cyclone",
        patchName: "Patch: 3.7 Legion (Outdated)",
        bossDamage: "Boss Damage: 4/10",
        clearSpeed: "Clear Speed: 6/10",
        survability: "Suvability: 3/10",
        leagueMechanic: "League Mechanic: 8/10",
        pro: "Pro: Spin to win,Explosions,Stun Immunity",
        cons: "Cons: Squishy,Expensive,Elemental Reflect maps",
        core: "Core:Mandatory uniques:Cospri's Malice,The Pandemonius,Carcass Jack,Lycosidae 100% crit chance, under 7 attack speed per second",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Cospri%27s_Malice",
                nameUnique: "Cospri's Malice",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Pandemonius",
                nameUnique: "The Pandemonius",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Carcass_Jack",
                nameUnique: "Carcass Jack",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Lycosidae",
                nameUnique: "Lycosidae"
            }

        ],
        investment: "Investment 5 Exalted Orbs",
        exaltedPng: Exalted,
        content: "Nothing",
        youtubeGameplay: "https://www.youtube.com/watch?v=V2CBJ6gugIQ&ab_channel=Medse"
    },

    {
        id: 2,
        cardImage: Slayer,
        buildName: "Cyclone Slayer Two-Handed Sword",
        patchName: "Patch: 3.7 Legion (Outdated)",
        bossDamage: "Boss Damage: 7/10",
        clearSpeed: "Clear Speed: 7/10",
        survability: "Suvability: 7/10",
        leagueMechanic: "League Mechanic: 7/10",
        pro: "Pro: Spin to win,Stun Immunity,Area of Effect,20% More damage ascendency node,Huge Leech,Begginer friendly",
        cons: "Cons: Melee build,Physical Reflect maps",
        core: "Core:Full rare or: Starforge,Abyssus,Carcass Jack,Belly of the Beast,Carnage Heart,Devoto's Devotion",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Starforge",
                nameUnique: "Starforge",
                linkUnique1: "https://www.poewiki.net/wiki/Abyssus",
                nameUnique1: "Abyssus",
                linkUnique2: "https://www.poewiki.net/wiki/Belly_of_the_Beast",
                nameUnique2: "Carcass Jack",
                linkUnique3: "https://www.poewiki.net/wiki/Carcass_Jack",
                nameUnique3: "Belly of the Beast",
                linkUnique4: "https://www.poewiki.net/wiki/Carnage_Heart",
                nameUnique4: "Carnage Heart",
                linkUnique5: "https://www.poewiki.net/wiki/Devoto%27s_Devotion",
                nameUnique5: "Devoto's Devotion",
            }
        ],
        investment: "Investment: 4 Exalted Orb",
        exaltedPng: Exalted,
        content: "Guardians,Shaper,Elder",
        youtubeGameplay: "https://www.youtube.com/watch?v=g01ibiX5Q1k&ab_channel=Jonlaw98"
    },
];