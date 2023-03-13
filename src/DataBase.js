// Classes Image
import Assassin from "./img/Assassin.webp";
import Slayer from "./img/Slayer.webp";
import Champion from "./img/Champion.webp";
import Gladiator from "./img/Gladiator.webp";
import Elementalist from "./img/Elementalist.webp";
import Inquisitor from "./img/Inquisitor.webp";
import Necromancer from "./img/Necromancer.webp";
import Ocultist from "./img/Ocultist.webp";
import Raider from "./img/Raider.webp";
import Saboteur from "./img/Saboteur.webp";
import Trickster from "./img/Trickster.webp";
import Deadeye from "./img/Deadeye.webp";
import Juggernaut from "./img/Juggernaut.webp";
// Currency Image
import Exalted from "./img/Exalted.webp";
import Divine from "./img/Divine.webp";

export const LEGION = [
    {
        id: 1,
        cardImage: Assassin,
        buildName: "CoC Shadow Ice Nova Cyclone",
        patchName: "Patch: 3.7 Legion (Outdated)",
        bossDamage: "Boss Damage: 4/10",
        clearSpeed: "Clear Speed: 6/10",
        survability: "Survability: 3/10",
        leagueMechanic: "League Mechanic: 8/10",
        pro: "Pro: Spin to win,Explosions,Stun Immunity",
        cons: "Cons: Squishy,Expensive,Elemental Reflect maps",
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
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 7/10",
        pro: "Pro: Spin to win,Stun Immunity,Area of Effect,20% More damage ascendency node,Huge Leech,Begginer friendly",
        cons: "Cons: Melee build,Physical Reflect maps",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Starforge",
                nameUnique: "Starforge",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Abyssus",
                nameUnique: "Abyssus",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Belly_of_the_Beast",
                nameUnique: "Carcass Jack",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Carcass_Jack",
                nameUnique: "Belly of the Beast",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Carnage_Heart",
                nameUnique: "Carnage Heart",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Devoto%27s_Devotion",
                nameUnique: "Devoto's Devotion",

            }
        ],
        investment: "Investment: 4 Exalted Orb",
        exaltedPng: Exalted,
        content: "Guardians,Shaper,Elder",
        youtubeGameplay: "https://www.youtube.com/watch?v=g01ibiX5Q1k&ab_channel=Jonlaw98"
    },
];

export const METAMORPH = [
    {
        id: 1,
        cardImage: Necromancer,
        buildName: "Zombiemancer Strength Stacking Necromancer",
        patchName: "Patch: 3.9 Metamorph (Outdated)",
        bossDamage: "Boss Damage: 9/10",
        clearSpeed: "Clear Speed: 7/10",
        survability: "Survability: 8/10",
        leagueMechanic: "League Mechanic: 9/10",
        pro: "Pro: Begginer friendly,AFK Playstyle,Tanky",
        cons: "Cons: Physical Reflect maps",
        items: [
            {
                linkUnique: "https://pathofexile.fandom.com/wiki/Geofri%27s_Sanctuary",
                nameUnique: "Geofri's Sanctuary",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Baron",
                nameUnique: "The Baron",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Shaper%27s_Touch",
                nameUnique: "Shaper's Touch",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Astramentis?so=search",
                nameUnique: "Astramentis",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Kingmaker",
                nameUnique: "Kingmaker",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Victario%27s_Flight",
                nameUnique: "Victario's Flight",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Southbound?so=search",
                nameUnique: "Southbound",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Leer_Cast",
                nameUnique: "Leer Cast",
            },
        ],
        investment: "Investment: 40 Exalted Orb",
        exaltedPng: Exalted,
        content: "All",
        youtubeGameplay: "https://www.youtube.com/watch?v=wI5lOHhaqPk&ab_channel=TheGAM3Report1",
    },
    {
        id: 2,
        cardImage: Assassin,
        buildName: "Cobra Lash Claw Poison Assassin",
        patchName: "Patch: 3.9 Metamorph (Outdated)",
        bossDamage: "Boss Damage: 7/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 6/10",
        leagueMechanic: "League Mechanic: 7/10",
        pro: "Pro: Fast playstyle,Begginer friendly",
        cons: "Cons: Poison style,Lacking single target, DOT build",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Bino's_Kitchen_Knife",
                nameUnique: "Bino's Kitchen Knife",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Atziri's_Step",
                nameUnique: "Atziri's Step",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Dendrobate",
                nameUnique: "Dendrobate",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Coralito's_Signature",
                nameUnique: "Coralito's Signature",
            },
        ],
        investment: "Investment: 4 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: Guardians",
        youtubeGameplay: "https://www.youtube.com/watch?v=n8llHL6286c&ab_channel=MoosGamesTV",
    },
    {
        id: 3,
        cardImage: Deadeye,
        buildName: "Iceshot Deadeye",
        patchName: "Patch: 3.9 Metamorph (Outdated)",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 9/10",
        survability: "Survability: 6/10",
        leagueMechanic: "League Mechanic: 8/10",
        pro: "Pro: Fast mapper,Explosions off-screen",
        cons: "Cons: Squishy,Expensive",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Voidfletcher?so=search",
                nameUnique: "Voidfletcher",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Hyrri%27s_Ire",
                nameUnique: "Hyrri's Ire",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Mark_of_the_Elder",
                nameUnique: "Mark of the Elder",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Watcher's_Eye?so=search",
                nameUnique: "Watcher's Eye",
            }
        ],
        investment: "Investment: 22 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: Guardians,Shaper,Elder",
        youtubeGameplay: "https://www.youtube.com/watch?v=Qh1Elsz-_Ic&ab_channel=Meliorne",
    },
    {
        id: 4,
        cardImage: Slayer,
        buildName: "Cyclone Slayer Two-Handed Sword",
        patchName: "Patch: 3.9 Metamorph (Outdated) + Nerfed",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 7/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 7/10",
        pro: "Pro: Spin to win,Stun immunity,Area of effect,20% More damage ascendency node,Huge leech,Begginer friendly",
        cons: "Melee build,Physical reflect maps",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Starforge",
                nameUnique: "Starforge",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Abyssus",
                nameUnique: "Abyssus",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Carcass_Jack ",
                nameUnique: "Carcass Jack",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Belly_of_the_Beast",
                nameUnique: "Belly of the Beast",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Carnage_Heart",
                nameUnique: "Carnage Heart",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Devoto%27s_Devotion",
                nameUnique: "Devoto's Devotion",
            },
        ],
        investment: "Investment: 15 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: Guardians,Shaper,Elder",
        youtubeGameplay: "https://www.youtube.com/watch?v=IHqgu_gMBJw&ab_channel=TheMehmetBozlak",
    },
    {
        id: 5,
        cardImage: Champion,
        buildName: "Facebreaker Cyclone Champion Unarmed",
        patchName: "Patch: 3.9 Metamorph (Not playable anymore)",
        bossDamage: "Boss Damage: 6/10",
        clearSpeed: "Clear Speed: 5/10",
        survability: "Survability: 5/10",
        leagueMechanic: "League Mechanic: 5/10",
        pro: "Pro: No weapons Chad playstyle,Decent boss damage",
        cons: "Cons: 0 area of effect,Squishy,Expensive",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Rigwald%27s_Curse",
                nameUnique: "Rigwald's Curse",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Facebreaker",
                nameUnique: "Facebreaker",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Abyssus",
                nameUnique: "Abyssus",
            },
        ],
        investment: "Investment: 3 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: Guardians",
        youtubeGameplay: "https://www.youtube.com/watch?v=hWG2xJRmsg4&ab_channel=Turtroll",
    },
    {
        id: 6,
        cardImage: Saboteur,
        buildName: "Pyroclast Mine Saboteur",
        patchName: "Patch: 3.9 Metamorph (Outdated)",
        bossDamage: "Boss Damage: 9/10",
        clearSpeed: "Clear Speed: 7/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 9/10",
        pro: "Pro: Melting Bosses",
        cons: "Cons: Piano Playstyle",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Tremor_Rod",
                nameUnique: "Tremor Rod",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Dying_Sun?so=search",
                nameUnique: "Dying Sun",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Shavronne%27s_Wrappings",
                nameUnique: "Shavronne's Wrappings",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Presence_of_Chayula",
                nameUnique: "Presence of Chayula",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Circle_of_Anguish_(Synthesised)",
                nameUnique: "Circle of Anguish",
            },
        ],
        investment: "Investment: 15 Exalted Orb",
        exaltedPng: Exalted,
        content: "All",
        youtubeGameplay: "https://www.youtube.com/watch?v=cC_zqDMfilc&ab_channel=Esoro",
    },
    {
        id: 7,
        cardImage: Deadeye,
        buildName: "Elemental hit Deadeye UNFINISHED",
        patchName: "Patch: 3.9 Metamorph (Not playable anymore)",
        bossDamage: "Boss Damage: N/A",
        clearSpeed: "Clear Speed: N/A",
        survability: "Survability: N/A",
        leagueMechanic: "League Mechanic: N/A",
        pro: "Pro: N/A",
        cons: "Cons: N/A",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Kaom%27s_Heart",
                nameUnique: "Kaom's Heart"
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Taming",
                nameUnique: "The Taming"
            },
        ],
        investment: "Investment: 1 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: Nothing, played 3 hours",
        youtubeGameplay: "https://www.youtube.com/watch?v=ppdiGOREWIc&ab_channel=nicholasmoranu",
    },
    {
        id: 8,
        cardImage: Champion,
        buildName: "Blade Flurry Champion UNFINISHED",
        patchName: "Patch: 3.9 Metamorph (Not playable anymore)",
        bossDamage: "Boss Damage: N/A",
        clearSpeed: "Clear Speed: N/A",
        survability: "Survability: N/A",
        leagueMechanic: "League Mechanic: N/A",
        pro: "Pro: N/A",
        cons: "Cons: N/A",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Paradoxica",
                nameUnique: "Paradoxica",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Farrul%27s_Fur",
                nameUnique: "Farrul's Fur",
            }
        ],
        investment: "Investment: 20 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: N/A, played 10 minutes",
        youtubeGameplay: "https://www.youtube.com/watch?v=3xxX9rB57FA&ab_channel=momotmaxsingeries",
    },
    {
        id: 9,
        cardImage: Assassin,
        buildName: "CoC Assassin Ice Nova Cyclone UNFINISHED",
        patchName: "Patch: 3.9 Metamorph (Outdated)",
        bossDamage: "Boss Damage: N/A",
        clearSpeed: "Clear Speed: N/A",
        survability: "Survability: N/A",
        leagueMechanic: "League Mechanic: N/A",
        pro: "Pro: Spin to win,Explosions,Stun immunity",
        cons: "Cons: Squishy,Expensive,Die a lot,Elemental reflect maps",
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
        investment: "Investment: 4 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: N/A",
        youtubeGameplay: "https://www.youtube.com/watch?v=gZ91rQ3riL0&ab_channel=TheMehmetBozlak",
    }
];

export const DELIRIUM = [
    {
        id: 1,
        cardImage: Champion,
        buildName: "Cyclone Champion Impale",
        patchName: "Patch: 3.10 Delirium (Not playable anymore)",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 7/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 7/10",
        pro: "Pro: Spin to win,Stun immunity,Area of effect,Begginer friendly",
        cons: "Cons: Melee build,Physical reflect maps",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Abyssus",
                nameUnique: "Abyssus",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Paradoxica",
                nameUnique: "Paradoxica",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Devoto%27s_Devotion",
                nameUnique: "Devoto's Devotion",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Ryslatha%27s_Coil",
                nameUnique: "Ryslatha's Coil",
            }
        ],
        investment: "Investment: 15 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: Guardians,Shaper,Elder",
        youtubeGameplay: "https://www.youtube.com/watch?v=13mTRa4Y5RA&ab_channel=Kidze",
    }
];

export const HARVEST = [
    {
        id: 1,
        cardImage: Trickster,
        buildName: "Toxic Rain Trickster",
        patchName: "Patch: 3.11 Harvest (Not playable anymore)",
        bossDamage: "Boss Damage: 7/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 8.5/10",
        pro: "Pro: League starter,Begginer friendly",
        cons: "Cons: DOT Playstyle",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Carcass_Jack",
                nameUnique: "Carcass Jack",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Atziri's_Step",
                nameUnique: "Atziri's Step",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Silverbough",
                nameUnique: "Silverbough",
            }
        ],
        investment: "Investment: 8 Exalted Orb",
        exaltedPng: Exalted,
        content: "Guardians",
        youtubeGameplay: "https://www.youtube.com/watch?v=quNgSWlC5GU&ab_channel=FuzzyDuckzy",
    },
    {
        id: 2,
        cardImage: Champion,
        buildName: "Cyclone Impale min-max",
        patchName: "Patch: 3.11 Harvest (Not playable anymore)",
        bossDamage: "Boss Damage: 10/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 8/10",
        leagueMechanic: "League Mechanic: 10/10",
        pro: "Pro: Destroying All",
        cons: "Cons: Physical Reflect maps",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Saviour",
                nameUnique: "The Saviour",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Paradoxica",
                nameUnique: "Paradoxica",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Ryslatha%27s_Coil",
                nameUnique: "Ryslatha's Coil",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Devoto's_Devotion",
                nameUnique: "Devoto's Devotion",
            }
        ],
        investment: "Investment: 50 Exalted Orb",
        exaltedPng: Exalted,
        content: "All",
        youtubeGameplay: "https://www.youtube.com/watch?v=MMtI00CZapI&ab_channel=Anro",
    }
];

export const ECHOES = [
    {
        id: 1,
        cardImage: Slayer,
        buildName: "Cyclone Slayer Two-Handed Sword",
        patchName: "Patch: 3.13 Ritual (Outdated)",
        bossDamage: "Boss Damage: 9/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 9/10",
        pro: "Pro: Spin to win,Stun immunity,Area of effect,20% More damage ascendency node,Huge leech,Begginer friendly",
        cons: "Cons: Melee build,Physical Reflect maps",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Starforge",
                nameUnique: "Starforge",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Abyssus",
                nameUnique: "Abyssus",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Carnage_Heart",
                nameUnique: "Carnage Heart",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Devoto%27s_Devotion",
                nameUnique: "Devoto's Devotion",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Ryslatha%27s_Coil",
                nameUnique: "Ryslatha's Coil",
            },
        ],
        investment: "Investment: 45 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: All",
        youtubeGameplay: "https://www.youtube.com/watch?v=ivYiKxYHyjg&ab_channel=Zizaran",
    },
    {
        id: 2,
        cardImage: Assassin,
        buildName: "Coc Ice Nova Self's Poison Assassin Farmer",
        patchName: "Patch: 3.13 Ritual (Poison Sextant removed in 3.14)",
        bossDamage: "Boss Damage: 2/10",
        clearSpeed: "Clear Speed: 9/10",
        survability: "Survability: 2/10",
        leagueMechanic: "League Mechanic: 2/10",
        pro: "Pro: Self poison Dunes Legion strategy",
        cons: "Cons: ALL",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Headhunter?so=search",
                nameUnique: "Headhunter",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Golden_Rule",
                nameUnique: "The Golden Rule",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Maw_of_Conquest",
                nameUnique: "Maw of Conquest",
            }
        ],
        investment: "Investment: 100 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: Nothing",
        youtubeGameplay: "https://www.youtube.com/watch?v=tK1jsR_dGlc&ab_channel=DemonOfMirkwood",
    },
    {
        id: 3,
        cardImage: Gladiator,
        buildName: "Bleed Bow Gladiator",
        patchName: " Patch: 3.13 Ritual (Outdated)",
        bossDamage: "Boss Damage: 6/10",
        clearSpeed: "Clear Speed: 7/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 7/10",
        pro: "Pro: Bow style,Explosions,Begginer friendly",
        cons: "Cons: Lacking single target,DOT Playstyle (Unplayable without Assailum)",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Assailum",
                nameUnique: "Assailum",
            },
        ],
        investment: "Investment: 5 Exalted Orb",
        exaltedPng: Exalted,
        content: "N/A",
        youtubeGameplay: "https://www.youtube.com/watch?v=d-x_kL90czU&ab_channel=Esoro",
    }
];

export const ULTIMATUM = [
    {
        id: 1,
        cardImage: Raider,
        buildName: "Toxic Rain Raider (STARTER, UNFINISHED)",
        patchName: "Patch: 3.14 Ultimatum (Outdated)",
        bossDamage: "Boss Damage: N/A",
        clearSpeed: "Clear Speed: N/A",
        survability: "Survability: N/A",
        leagueMechanic: "League Mechanic: N/A",
        pro: "Pro: Fast,Bow Playstyle,Begginer friendly",
        cons: "Cons: DOT Playstyle,Expensive",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Carcass_Jack",
                nameUnique: "Carcass Jack",
            },
        ],
        investment: "Investment: 5 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: N/A",
        youtubeGameplay: "https://www.youtube.com/watch?v=yUXO_ypsSew&ab_channel=BigDucks",
    },
    {
        id: 2,
        cardImage: Ocultist,
        buildName: "CoC Ice Nova Ocultist Ll",
        patchName: "Patch: 3.14 Ultimatum (Outdated, Nerfed CoC gem in 3.15)",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 8/10",
        leagueMechanic: "League Mechanic: 9/10",
        pro: "Pro:Freeze,Explosions,Spin to win",
        cons: "Cons:Elemental reflect maps,Expensive",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Cospri%27s_Malice",
                nameUnique: "Cospri's Malice",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Shavronne%27s_Wrappings",
                nameUnique: "Shavronne's Wrappings",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Presence_of_Chayula",
                nameUnique: "Presence of Chayula",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Prism_Guardian",
                nameUnique: "Prism Guardian",
            }
        ],
        investment: "Investment: 20 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: All",
        youtubeGameplay: "https://www.youtube.com/watch?v=fwYVo93YqBc&ab_channel=TheMehmetBozlak",
    },
    {
        id: 3,
        cardImage: Elementalist,
        buildName: "Burning Arrow Elementalist",
        patchName: "Patch: 3.14 Ultimatum (Not playable anymore)",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 9/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 8/10",
        pro: "Pro: Bow Playstyle, Explosions off-screen,Fast",
        cons: "Cons: Elemental reflect maps,Expensive",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Berek's_Respite?so=search",
                nameUnique: "Berek's Respite",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Xoph%27s_Nurture",
                nameUnique: "Xoph's Nurture",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Primordial_Chain",
                nameUnique: "The Primordial Chain",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Primordial_Eminence?so=search",
                nameUnique: "Primordial Eminence",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Mantra_of_Flames?so=search",
                nameUnique: "Mantra of Flames",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Anima_Stone?so=search",
                nameUnique: "The Anima Stone",
            }
        ],
        investment: "Investment: 20 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: All",
        youtubeGameplay: "https://www.youtube.com/watch?v=dPWzkQAL6Ng&ab_channel=BigDucks",
    },
    {
        id: 4,
        cardImage: Necromancer,
        buildName: "Slave Driver Specter + Zombie Necromancer",
        patchName: "Patch: 3.14 Ultimatum (Outdated + Nerfed)",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 7/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 7/10",
        pro: "Pro: Walking simulator, Begginer friendly",
        cons: "Cons: Reflect maps",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Victario's_Charity",
                nameUnique: "Victario's Charity",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Jinxed_Juju?so=search",
                nameUnique: "The Jinxed Juju",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Triad_Grip?so=search",
                nameUnique: "Triad Grip Cold Conversion",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Unending_Hunger",
                nameUnique: "Unending Hunger",
            }
        ],
        investment: "Investment: 25 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: All",
        youtubeGameplay: "https://www.youtube.com/watch?v=XzJW49MG_jE&t=0s&ab_channel=BalorMage",
    },
    {
        id: 5,
        cardImage: Ocultist,
        buildName: "Winter Orb Ocultist",
        patchName: "Patch: 3.14 Ultimatum (Not playable anymore)",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 9/10",
        survability: "Survability: 6/10",
        leagueMechanic: "League Mechanic: 8/10",
        pro: "Pro: Explsions,Huge clear",
        cons: "Cons: Elemental reflect maps, Expensive",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Void_Battery?so=search",
                nameUnique: "Void Battery",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Badge_of_the_Brotherhood?so=search",
                nameUnique: "Badge of the Brotherhood",
            }
        ],
        investment: "Investment: 20 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: All",
        youtubeGameplay: "https://www.youtube.com/watch?v=LhZrzmfGws4&ab_channel=BalorMage",
    },
    {
        id: 6,
        cardImage: Slayer,
        buildName: "Slayer Cyclone Two-Handed Sword",
        patchName: "Patch: 3.14 Ultimatum (Outdated)",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 7/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 7.5/10",
        pro: "Pro: Spin to win,Stun Immunity,Area of Effect,20% More damage ascendency node,Huge Leech,Begginer friendly",
        cons: "Cons: Physical reflect maps",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Starforge",
                nameUnique: "Starforge",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Abyssus",
                nameUnique: "Abyssus",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Carnage_Heart",
                nameUnique: "Carnage Heart",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Devoto%27s_Devotion",
                nameUnique: "Devoto's Devotion",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Ryslatha%27s_Coil",
                nameUnique: "Ryslatha's Coil",
            },
        ],
        investment: "Investment: 10 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: All",
        youtubeGameplay: "https://www.youtube.com/watch?v=pCkubIA6Nso&ab_channel=TheMehmetBozlak",
    }
];

export const EXPEDITION = [
    {
        id: 1,
        cardImage: Raider,
        buildName: "Spectral Shield Throw Cold Conversion Raider",
        patchName: "Patch: 3.15 Expedition (Not playable anymore)",
        bossDamage: "Boss Damage: 7/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 8/10",
        pro: "Pro:Fast, Begginer friendly",
        cons: "Cons: Melee build,Physical Reflect maps",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Seething_Fury",
                nameUnique: "Seething Fury",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Hrimsorrow",
                nameUnique: "Hrimsorrow",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Darkray_Vectors",
                nameUnique: "Darkray Vectors",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Taming",
                nameUnique: "The Taming",
            }
        ],
        investment: "Investment: 10 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: Guardians,Shaper",
        youtubeGameplay: "https://www.youtube.com/watch?v=E0b8vjstfRA&ab_channel=Crouching_Tuna",
    }
];

export const SIEGE = [
    {
        id: 1,
        cardImage: Inquisitor,
        buildName: "Righteous Fire Inquisitor",
        patchName: "Patch: 3.17 Archnemesis (Outdated)",
        bossDamage: "Boss Damage: 7/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 8/10",
        pro: "Pro: Walking Simulator,League starter, Tanky",
        cons: "Cons: Lacking boss damage",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Legacy_of_Fury",
                nameUnique: "Legacy of Fury",
            },
        ],
        investment: "Investment: 10 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: Guardians,Shaper",
        youtubeGameplay: "https://www.youtube.com/watch?v=GKdRYCt7gJk&ab_channel=Tenkiei",
    }
];

export const SENTINEL = [
    {
        id: 1,
        cardImage: Necromancer,
        buildName: "Skeleton Army Necromancer",
        patchName: "Patch: 3.18 Sentinel (Not playable anymore + Huge nerfs)",
        bossDamage: "Boss Damage: 9/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 8/10",
        leagueMechanic: "League Mechanic: 8/10",
        pro: "Pro: Walking simulator,Melting,Tank",
        cons: "Cons: Spam skeleton gem every 2-3 seconds",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Aegis_Aurora",
                nameUnique: "Aegis Aurora",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Fleshcrafter",
                nameUnique: "Fleshcrafter",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Dead_Reckoning",
                nameUnique: "Dead Reckoning",
            }
        ],
        investment: "Investment: 25 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: All",
        youtubeGameplay: "https://www.youtube.com/watch?v=NHY90I-zqm0&ab_channel=BigDucks",
    },
    {
        id: 2,
        cardImage: Raider,
        buildName: "Spectral Helix Raider",
        patchName: "Patch: 3.18 Sentinel (Outdated)",
        bossDamage: "Boss Damage: N/A",
        clearSpeed: "Clear Speed: N/A",
        survability: "Survability: N/A",
        leagueMechanic: "League Mechanic: N/A",
        pro: "Pro: N/A",
        cons: "Cons: N/A",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/White_Wind",
                nameUnique: "White Wind",
            },
        ],
        investment: "Investment: 1 Exalted Orb",
        exaltedPng: Exalted,
        content: "Content: N/A",
        youtubeGameplay: "https://www.youtube.com/watch?v=5fCkou3f-2c&ab_channel=TelvanniPoE",
    }
];

export const LAKE = [
    {
        id: 1,
        cardImage: Inquisitor,
        buildName: "Spark Inquisitor UNFINISHED",
        patchName: "Patch: 3.19 Lake of Kalandra",
        bossDamage: "Boss Damage: N/A",
        clearSpeed: "Clear Speed: N/A",
        survability: "Survability: N/A",
        leagueMechanic: "League Mechanic: N/A",
        pro: "Pro: N/A",
        cons: "Cons: N/A",
        items: [
            {
                linkUnique: "",
                nameUnique: "Full Rare",
            },
        ],
        investment: "Investment: 3 Divine Orb",
        exaltedPng: Divine,
        content: "Content: N/A",
        youtubeGameplay: "https://www.youtube.com/watch?v=FFn29mT6InU&ab_channel=Goratha",
    }
];

export const SANCTUM = [
    {
        id: 1,
        cardImage: Raider,
        buildName: "Venom Gyre Raider",
        patchName: "Patch: 3.20 The Forbidden Sanctum",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 5/10",
        pro: "Pro: Fast mapper,Cheap",
        cons: "Cons: Squishy,Reflect maps",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Kaom%27s_Spirit",
                nameUnique: "Kaom's Spirit",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Voll%27s_Vision",
                nameUnique: "Voll's Vision",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Taming",
                nameUnique: "The Taming",
            },
        ],
        investment: "Investment: 12 Divine Orb",
        exaltedPng: Divine,
        content: "Content All",
        youtubeGameplay: "https://www.youtube.com/watch?v=0hju-9gFTHM&t=1128s&ab_channel=KobeBlackMamba",
    },
    {
        id: 2,
        cardImage: Elementalist,
        buildName: "Ethereal Knives Elementalist",
        patchName: "Patch: 3.20 The Forbidden Sanctum",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 10/10",
        survability: "Survability: 7/10",
        leagueMechanic: "League Mechanic: 6.5/10",
        pro: "Pro: Fast mapper,Explosions off-screen",
        cons: "Cons: Can't play without uniques, DOT damage",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Gloomfang",
                nameUnique: "Gloomfang",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Polaric_Devastation",
                nameUnique: "Polaric Devastation",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Skin_of_the_Lords",
                nameUnique: "Skin of the Lords",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Obliteration",
                nameUnique: "Obliteration",
            }
        ],
        investment: "Investment: 28 Divine Orb",
        exaltedPng: Divine,
        content: "Content All",
        youtubeGameplay: "https://www.youtube.com/watch?v=04yb0lQDXPk&t=0s&ab_channel=mbXtreme",
    },
    {
        id: 3,
        cardImage: Ocultist,
        buildName: "Death Aura + Caustic Arrow",
        patchName: "Patch: 3.20 The Forbidden Sanctum",
        bossDamage: "Boss Damage: 8/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 8/10",
        leagueMechanic: "League Mechanic: 6/10",
        pro: "Pro: Fast mapper,Walking simulator",
        cons: "Cons: Expensive,DOT damage",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Death%27s_Oath",
                nameUnique: "Death's Oath",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Impresence_(Chaos,_full_power)",
                nameUnique: "Impresence Onyx Amulet",
            }
        ],
        investment: "Investment: 33 Divine Orb",
        exaltedPng: Divine,
        content: "Content All",
        youtubeGameplay: "https://www.youtube.com/watch?v=CqRvLXvRVjo&t=0s&ab_channel=K2Gaming",
    },
    {
        id: 4,
        cardImage: Juggernaut,
        buildName: "Righteous Fire + Fire Trap",
        patchName: "Patch: 3.20 The Forbidden Sanctum",
        bossDamage: "Boss Damage: 6.5/10",
        clearSpeed: "Clear Speed: 7/10",
        survability: "Survability: 9/10",
        leagueMechanic: "League Mechanic: 6/10",
        pro: "Pro: Walking simulator, Tanky, 90%res",
        cons: "Cons: Expensive,Lacking single target damage, Slow",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Immortal_Flesh",
                nameUnique: "Immortal Flesh",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Oriath%27s_End",
                nameUnique: "Oriath's End",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/The_Brass_Dome",
                nameUnique: "The Brass Dome",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Saffell%27s_Frame",
                nameUnique: "Saffell's Frame",
            }, {
                linkUnique: "https://www.poewiki.net/wiki/Legacy_of_Fury",
                nameUnique: "Legacy of Fury",
            },
        ],
        investment: "Investment: 40 Divine Orb",
        exaltedPng: Divine,
        content: "Content All",
        youtubeGameplay: "https://www.youtube.com/watch?v=1aXeQ_k6SuQ&t=0s&ab_channel=K2Gaming",
    },
    {
        id: 5,
        cardImage: Assassin,
        buildName: "CoC Ice Nova Assassin Ll DEAD BUILD",
        patchName: "Patch: 3.20 The Forbidden Sanctum",
        bossDamage: "Boss Damage: 7.5/10",
        clearSpeed: "Clear Speed: 8/10",
        survability: "Survability: 5/10",
        leagueMechanic: "League Mechanic: 6/10",
        pro: "Pro: Spin to win,CoC Chad,Freeze",
        cons: "Cons: Expensive,Glass-Cannon,Reflect maps",
        items: [
            {
                linkUnique: "https://www.poewiki.net/wiki/Presence_of_Chayula",
                nameUnique: "Presence of Chayula",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Cospri%27s_Malice",
                nameUnique: "Cospri's Malice",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Prism_Guardian",
                nameUnique: "Prism Guardian",
            },
            {
                linkUnique: "https://www.poewiki.net/wiki/Shavronne%27s_Wrappings",
                nameUnique: "Shavronne's Wrappings",
            },
        ],
        investment: "Investment: 25 Divine Orb",
        exaltedPng: Divine,
        content: "Content: Guardians",
        youtubeGameplay: "https://www.youtube.com/watch?v=Y_rsXAJkfAQ&t=0s&ab_channel=Scarlight",
    }
];








// {
//     id: ,
//     cardImage: ,
//     buildName: ,
//     patchName: ,
//     bossDamage: ,
//     clearSpeed: ,
//     survability: ,
//     leagueMechanic: ,
//     pro: ,
//     cons: ,
//     items: [
//         {
//             linkUnique: ,
//             nameUnique: ,
//         },
//         {
//             linkUnique: ,
//             nameUnique: ,
//         }
//     ],
//     investment: ,
//     exaltedPng: ,
//     content: ,
//     youtubeGameplay: ,
// }