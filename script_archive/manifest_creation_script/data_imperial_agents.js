window.data = window.data || {};
window.data.AoI = {
  "id": "AoI",
  "link": "https://game-datacards.eu",
  "name": "Agents of the Imperium",
  "is_subfaction": false,
  "parent_id": "",
  "datasheets": [
    {
      "id": "91aed3a7-1ae0-56b8-9c64-3265b497a0df",
      "name": "Callidus Assassin",
      "faction_id": "AoI",
      "leader": "",
      "composition": ["1 Callidus Assassin – Epic Hero"],
      "loadout": "This model is equipped with: neural shredder; phase sword and poison blades.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "115"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [
          "Deep Strike",
          "Fights First",
          "Infiltrators",
          "Lone Operative"
        ],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Reign of Confusion",
            "description": "Once per battle, after your opponent uses a Stratagem, this model can use this ability. If it does, until the end of the battle, the CP cost your opponent must pay to use that Stratagem again is increased by 1CP."
          },
          {
            "name": "Polymorphine",
            "description": "At the end of your opponent’s turn, if this model is not within Engagement Range of any enemy units, you can remove it from the battlefield and then, in the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models. If the battle ends and this model is not on the battlefield, it is destroyed."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "4",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Callidus Assassin"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Neural shredder",
              "keywords": ["anti-infantry 2+", "precision", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Phase sword and poison blades",
              "keywords": ["lethal hits", "precision"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
              "ap": "-4",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Imperium",
        "Callidus Assassin"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "c7e7c652-94cb-5c31-aaf9-487b39d8c5e2",
      "name": "Culexus Assassin",
      "faction_id": "AoI",
      "leader": "",
      "composition": ["1 Culexus Assassin – Epic Hero"],
      "loadout": "This model is equipped with: animus speculum; life-draining touch.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "85"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Lone Operative", "Stealth"],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Abomination",
            "description": "This model has the Feel No Pain 2+ ability against Psychic Attacks."
          },
          {
            "name": "Soulless Horror (Aura)",
            "description": "While an enemy unit is within 6\" of this model, worsen that unit’s Leadership characteristic by 1, or by 2 instead if that unit is a Psyker. In addition, once per battle, at the start of any Command phase, this model can use this ability. If it does, each enemy unit within 6\" of this model must take a Battle-shock test."
          }
        ],
        "special": [
          {
            "name": "Psychic Assassin",
            "description": "Each time you select a Psyker unit as the target for this weapon, until those attacks are resolved, change the Attacks characteristic of this weapon to 6."
          }
        ],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "4",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Culexus Assassin"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Animus speculum",
              "keywords": [
                "anti-psyker 2+",
                "assault",
                "precision",
                "psychic assassin"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Life-draining touch",
              "keywords": ["anti-psyker 2+", "devastating wounds", "precision"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Grenades",
        "Imperium",
        "Culexus Assassin"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "82566d83-6c6d-51fa-8bd5-b64877fffebb",
      "name": "Eversor Assassin",
      "faction_id": "AoI",
      "leader": "",
      "composition": ["1 Eversor Assassin – Epic Hero"],
      "loadout": "This model is equipped with: executioner pistol; power sword and neuro gauntlet.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Lone Operative", "Scouts 9\""],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Frenzon",
            "description": "In your Command phase, select one of the effects below to apply until the start of your next Command phase: ■  Adrenal Surge: This model is eligible to shoot and declare a charge in a turn in which it Advanced. ■  Predatory Focus: This model’s weapons have the [PRECISION] ability. ■  Killing Rampage: This model’s weapons have the [SUSTAINED HITS 3] ability."
          },
          {
            "name": "Sentinel Array",
            "description": "Once per battle round, you can target this model with the Fire Overwatch or Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "9\"",
          "t": "4",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Eversor Assassin"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Executioner pistol",
              "keywords": ["anti-infantry 3+", "pistol"],
              "range": "12\"",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Power sword and neuro gauntlet",
              "keywords": ["anti-infantry 3+"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Grenades",
        "Imperium",
        "Eversor Assassin"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "5a9b9c02-d23d-5319-bd02-f29cdab04a6f",
      "name": "Exaction Squad",
      "faction_id": "AoI",
      "leader": "",
      "composition": [
        "1 Proctor-Exactant",
        "4-9 Exaction Vigilants",
        "0-1 Cyber-mastiff Every Proctor-Exactant and Exaction Vigilant is equipped with: Arbites combat shotgun; Arbites shotpistol; close combat weapon."
      ],
      "loadout": "The Cyber-mastiff is equipped with: mechanical bite.",
      "wargear": [
        "For every 5 models in this unit, up to 2 Exaction Vigilants can each have their Arbites combat shotguns replaced with one of the following (duplicates are not allowed): ◦ 1 executioner shotgun ◦ 1 Arbites grenade launcher ◦ 1 heavy stubber ◦ 1 webber",
        "1 Exaction Vigilant that is equipped with an Arbites combat shotgun can be equipped with 1 excruciator maul.*",
        "1 other Exaction Vigilant that is equipped with an Arbites combat shotgun can be equipped with 1 Arbites medi-kit.*",
        "1 other Exaction Vigilant that is equipped with an Arbites combat shotgun can be equipped with 1 soulguilt scanner.*",
        "The Proctor-Exactant can be equipped with 1 nuncio aquila. *  That model’s Arbites combat shotgun cannot be replaced."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "35"
        },
        {
          "models": "11",
          "cost": "75"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Arbites Medi-kit",
            "description": "Models in the bearer’s unit have the Feel No Pain 5+ ability."
          },
          {
            "name": "Nuncio Aquila (Aura)",
            "description": "While an enemy unit is within 3\" of the bearer, each time that unit takes a Battle-shock test, subtract 1 from that test."
          },
          {
            "name": "Soulguilt Scanner",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability."
          }
        ],
        "core": [],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Imperial Law",
            "description": "At the start of the first battle round, select one enemy unit to be this unit’s quarry. Each time a model in this unit makes an attack that targets its quarry, add 1 to the Hit roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Exaction Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Arbites combat shotgun",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Arbites grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Arbites grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Arbites shotpistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Executioner shotgun",
              "keywords": ["ignores cover", "precision"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Webber",
              "keywords": ["assault", "devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Excruciator maul",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Mechanical bite",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Imperium",
        "Retinue",
        "Exaction Squad"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "77016539-3dc1-5d1b-a9a4-8c4830429c71",
      "name": "Imperial Navy Breachers",
      "faction_id": "AoI",
      "leader": "",
      "composition": ["1 Navis Sergeant-at-Arms", "9 Navis Armsmen"],
      "loadout": "One Navis Armsman is equipped with: Navis las-volley; close combat weapon. One other Navis Armsman is equipped with: Navis heavy shotgun; close combat weapon; endurant shield. Every other model is equipped with: Navis shotgun; close combat weapon.",
      "wargear": [
        "The Navis Sergeant-at-Arms’ Navis shotgun can be replaced with one of the following: ◦ 1 autopistol and 1 chainsword ◦ 1 bolt pistol and 1 power weapon",
        "1 Navis Armsman’s Navis las-volley can be replaced with one of the following: ◦ 1 meltagun ◦ 1 plasma gun",
        "1 Navis Armsman’s Navis shotgun can be replaced with 1 autopistol and 1 power weapon.",
        "1 Navis Armsman’s Navis shotgun can be replaced with 1 autopistol and 1 chainfist.",
        "1 Navis Armsman can be equipped with 1 demolition charge and 1 grenade belts."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "105"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Endurant Shield",
            "description": "The bearer has a 4+ invulnerable save."
          },
          {
            "name": "Grenade Belts",
            "description": "The bearer has the Smoke keyword, and each time you select the bearer’s unit as the target of the Grenade Stratagem, roll one additional D6 when resolving that Stratagem."
          }
        ],
        "core": [],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Breaching Team",
            "description": "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Wound roll instead."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "8+",
          "oc": "2",
          "name": "Imperial Navy Breachers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Autopistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Demolition charge",
              "keywords": ["assault", "blast", "hazardous", "one shot"],
              "range": "6\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Meltagun",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Navis heavy shotgun",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Navis las-volley",
              "keywords": [],
              "range": "18\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Navis shotgun",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Imperium",
        "Navis Imperialis",
        "Retinue",
        "Imperial Navy Breachers"
      ],
      "factions": ["Agents of the Imperium"],
      "ledBy": ["Rogue Trader Entourage"]
    },
    {
      "id": "97b523fd-b753-5103-b5e9-04aa7ee7f477",
      "name": "Inquisitor",
      "faction_id": "AoI",
      "leader": "This model can be attached to the following units: ■ Imperium Battleline Infantry ■ Inquisitorial Henchmen",
      "composition": ["1 Inquisitor"],
      "loadout": "This model is equipped with: bolt pistol; Inquisitorial melee weapon; blessed wardings.",
      "wargear": [
        "This model’s bolt pistol can be replaced with 1 combi-weapon.",
        "This model’s blessed wardings can be replaced with 1 psychic gifts and 1 Psychic Shock Wave.",
        "If this model is equipped with 1 psychic gifts, its Inquisitorial melee weapon can be replaced with 1 force weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "55"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Blessed Wardings",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds."
          },
          {
            "name": "Psychic Gifts",
            "description": "The bearer has the Psyker keyword."
          }
        ],
        "core": ["Leader"],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Authority of the Inquisition",
            "description": "While this model is leading a unit, it can embark within any Transport that its Bodyguard unit can embark within."
          },
          {
            "name": "Power of the Rosette",
            "description": "Each time you target this model’s unit with a Stratagem, roll one D6: on a 3+, you gain 1CP."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Inquisitor"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Combi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Psychic Shock Wave",
              "keywords": ["devastating wounds", "psychic", "torrent"],
              "range": "18\"",
              "attacks": "2D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Inquisitorial melee weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Imperium",
        "Inquisitor"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "0a6dcec2-75d1-555e-9372-d49a60189f2e",
      "name": "Inquisitor Coteaz",
      "faction_id": "AoI",
      "leader": "This model can be attached to the following units: ■ Imperium Battleline Infantry ■ Inquisitorial Henchmen",
      "composition": ["1 Inquisitor Coteaz – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Psychic Blast; Nemesis daemon hammer.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Authority of the Inquisition",
            "description": "While this model is leading a unit, it can embark within any Transport that its Bodyguard unit can embark within."
          },
          {
            "name": "Malefic Wardings (Psychic)",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability against Psychic Attacks and attacks made by Daemon models."
          },
          {
            "name": "Spy Network",
            "description": "Each time your opponent gains a CP as the result of an ability, roll one D6: on a 2+, you also gain 1CP."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Inquisitor Coteaz"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bolt pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Psychic Blast",
              "keywords": ["anti-infantry 4+", "devastating wounds", "psychic"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Nemesis daemon hammer",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Psyker",
        "Imperium",
        "Inquisitor",
        "Coteaz"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "f8ed00c8-b411-560a-9126-d8bad2200a16",
      "name": "Inquisitor Eisenhorn",
      "faction_id": "AoI",
      "leader": "This model can be attached to the following units: ■ Imperium Battleline Infantry ■ Inquisitorial Henchmen",
      "composition": ["1 Inquisitor Eisenhorn – Epic Hero"],
      "loadout": "This model is equipped with: artificer bolt pistol; Mind Assault; runestaff and Barbarisater",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 6+", "Leader"],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Authority of the Inquisition",
            "description": "While this model is leading a unit, it can embark within any Transport that its Bodyguard unit can embark within."
          },
          {
            "name": "Malus Codicium",
            "description": "While this model is leading a unit, double the Attacks characteristic of weapons equipped by Daemonhost models in that unit."
          },
          {
            "name": "Dominate Will (Psychic)",
            "description": "At the start of your opponent’s Shooting phase, select one enemy Infantry unit that is within 12\" of and visible to this model and roll one D6: on a 1, this model suffers D3 mortal wounds; on a 2-5, until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll; on a 6, until the end of the phase, that unit is not eligible to shoot."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Inquisitor Eisenhorn"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Artificer bolt pistol",
              "keywords": [],
              "range": "12\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Mind Assault",
              "keywords": [
                "devastating wounds",
                "precision",
                "psychic",
                "sustained hits 1"
              ],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Runestaff and Barbarisater",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Psyker",
        "Grenades",
        "Imperium",
        "Inquisitor",
        "Eisenhorn"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "23ba73f2-1cfd-5bf9-9409-0adf6fbe3e45",
      "name": "Inquisitor Greyfax",
      "faction_id": "AoI",
      "leader": "This model can be attached to the following units: ■ Imperium Battleline Infantry ■ Inquisitorial Henchmen",
      "composition": ["1 Inquisitor Greyfax – Epic Hero"],
      "loadout": "This model is equipped with: Castigation; condemnor stake; master-crafter power sword.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Authority of the Inquisition",
            "description": "While this model is leading a unit, it can embark within any Transport that its Bodyguard unit can embark within."
          },
          {
            "name": "Psyoculum",
            "description": "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ANTI-PSYKER 4+] ability."
          },
          {
            "name": "No Escape",
            "description": "Each time an enemy unit (excluding Monster and Vehicle units) that is within Engagement Range of one or more units with this ability is selected to Fall Back, models in that enemy unit must take Desperate Escape tests as if their unit was Battle-shocked. When doing so, if that enemy unit is also Battle-shocked by other means, subtract 1 from each of those Desperate Escape tests."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "3+",
          "w": "4",
          "ld": "4+",
          "oc": "1",
          "name": "Inquisitor Greyfax"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Castigation",
              "keywords": [
                "anti-character 4+",
                "devastating wounds",
                "precision",
                "psychic"
              ],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Condemnor stake",
              "keywords": [
                "anti-psyker 2+",
                "devastating wounds",
                "precision",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Master-crafted power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Psyker",
        "Grenades",
        "Imperium",
        "Inquisitor",
        "Greyfax"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "164eb5c0-341e-5ce8-a80b-4ea96b74521d",
      "name": "Inquisitor Karamazov",
      "faction_id": "AoI",
      "leader": "",
      "composition": ["1 Inquisitor Karamazov – Epic Hero"],
      "loadout": "This model is equipped with: master-crafted multi-melta; master-crafted power sword.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "130"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Throne of Judgement (Aura)",
            "description": "While a friendly unit is within 6\" of this model, add 1 to Battle-shock and Leadership tests taken for that unit. While an enemy unit is within 6\" of this model, subtract 1 from Battle-shock and Leadership tests taken for that enemy unit."
          },
          {
            "name": "Dread Reputation",
            "description": "At the start of your Shooting phase, select one enemy unit within 12\" of this model. That unit must take a Battle-shock test."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "5\"",
          "t": "8",
          "sv": "3+",
          "w": "9",
          "ld": "6+",
          "oc": "3",
          "name": "Inquisitor Karamazov"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Master-crafted multi-melta",
              "keywords": ["melta 3"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "10",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Master-crafted power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Epic Hero",
        "Imperium",
        "Inquisitor",
        "Karamazov"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "6dc851be-1f06-524c-936d-5de230184396",
      "name": "Inquisitorial Henchmen",
      "faction_id": "AoI",
      "leader": "",
      "composition": [
        "4-10 Inquisitorial Acolytes",
        "0-2 Gun Servitors",
        "0-2 Mystics",
        "0-1 Jokaero Weaponsmith",
        "0-1 Daemonhost"
      ],
      "loadout": "Every Inquisitorial Acolyte is equipped with: Acolyte firearm; Acolyte melee weapon. Every Gun Servitor is equipped with: heavy bolter; Acolyte melee weapon. Every Mystic is equipped with: Acolyte firearm; Acolyte melee weapon. A Jokaero Weaponsmith is equipped with: Jokaero weapons; Acolyte melee weapon. A Daemonhost is equipped with: Unholy Gaze; warp grasp.",
      "wargear": [
        "1 Inquisitorial Acolyte can be equipped with 1 plasma pistol.",
        "1 Inquisitorial Acolyte can be equipped with 1 eviscerator.",
        "1 Gun Servitor’s heavy bolter can be replaced with one of the following: ◦ 1 multi-melta ◦ 1 plasma cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "40"
        },
        {
          "models": "6",
          "cost": "60"
        },
        {
          "models": "10",
          "cost": "100"
        },
        {
          "models": "14",
          "cost": "140"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Acolytes",
            "description": "While an Inquisitor model is leading this unit, each time an attack is made against this unit, subtract 1 from the Wound roll."
          },
          {
            "name": "Mystics",
            "description": "While an Inquisitor model is leading this unit, enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12” of one or more of this unit’s Mystic models."
          },
          {
            "name": "Jokaero",
            "description": "While an Inquisitor model is leading this unit, if it contains a Jokaero model, each time a model in this unit makes a ranged attack, add 1 to the Wound roll."
          },
          {
            "name": "Daemonhost",
            "description": "While an Inquisitor model is leading this unit, if it contains a Daemonhost model, models in this unit have a 5+ invulnerable save."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Inquisitorial Henchmen"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Acolyte firearm",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Jokaero weapons",
              "keywords": [],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Multi-melta",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "5+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Plasma cannon – standard",
              "keywords": ["heavy", "blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous", "heavy"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            },
            {
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Unholy Gaze",
              "keywords": ["psychic", "sustained hits d3"],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Acolyte melee weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Eviscerator",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Warp grasp",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Imperium",
        "Retinue",
        "Inquisitorial Henchmen"
      ],
      "factions": ["Agents of the Imperium"],
      "ledBy": [
        "Inquisitor",
        "Inquisitor Coteaz",
        "Inquisitor Eisenhorn",
        "Inquisitor Greyfax",
        "Lord Inquisitor Kyria Draxus"
      ]
    },
    {
      "id": "dbe01a5d-8877-5c07-9f77-7e79241694e4",
      "name": "Lord Inquisitor Kyria Draxus",
      "faction_id": "AoI",
      "leader": "This model can be attached to the following units: ■ Imperium Battleline Infantry ■ Inquisitorial Henchmen",
      "composition": ["1 Lord Inquisitor Kyria Draxus – Epic Hero"],
      "loadout": "This model is equipped with: Dirgesinger; Psychic Tempest; power fist.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Authority of the Inquisition",
            "description": "While this model is leading a unit, it can embark within any Transport that its Bodyguard unit can embark within."
          },
          {
            "name": "Xenos Hunter",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack that targets an enemy unit (excluding Imperium and Chaos units), add 1 to the Hit roll."
          },
          {
            "name": "Psychic Veil (Psychic)",
            "description": "In your Command phase, this Psyker can use this ability. If it does, roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2+, until the start of your next Command phase, this Psyker’s unit can only be selected as the target of a ranged attack if the attacking model is within 18\"."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Lord Inquisitor Kyria Draxus"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Dirgesinger",
              "keywords": ["anti-infantry 4+", "devastating wounds", "assault"],
              "range": "18\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Psychic Tempest",
              "keywords": ["indirect fire", "psychic", "sustained hits 2"],
              "range": "18\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Psyker",
        "Grenades",
        "Imperium",
        "Inquisitor",
        "Lord Inquisitor Kyria Draxus"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "3782157e-f35b-531b-b70f-b0bbf33c1915",
      "name": "Rogue Trader Entourage",
      "faction_id": "AoI",
      "leader": "This unit can be attached to the following units: ■ Imperial Navy Breachers ■ Voidsmen-at-Arms",
      "composition": ["1 Rogue Trader", "3 Rogue Trader Specialists"],
      "loadout": "The Rogue Trader is equipped with: household pistol; monomolecular cane-rapier. One Rogue Trader Specialist is equipped with: dartmask; Death Cult power blade. One other Rogue Trader Specialist is equipped with: voltaic pistol; close combat weapon. One other Rogue Trader Specialist is equipped with: laspistol; close combat weapon; healing serum.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "105"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Healing Serum",
            "description": "Models in the bearer’s unit have the Feel No Pain 5+ ability."
          }
        ],
        "core": ["Infiltrators", "Leader"],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Backroom Deals",
            "description": "While this unit is leading a unit, models in that unit have the Infiltrators ability."
          },
          {
            "name": "Warrant of Trade",
            "description": "If your army includes one or more units with this ability, after players have deployed, select D3 Imperium Battleline units from your army and redeploy them. You can use this ability to place those selected units into Strategic Reserves, regardless of how many units are already in Strategic Reserves. If both players have abilities that redeploy"
          },
          {
            "name": "units, roll off",
            "description": "the winner chooses who redeploys units first."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "ROGUE TRADER"
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "SPECIALIST"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Dartmask",
              "keywords": ["anti-infantry 2+", "pistol", "precision"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "2",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Household pistol",
              "keywords": ["pistol", "devastating wounds"],
              "range": "12\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Voltaic pistol",
              "keywords": ["pistol", "sustained hits 2"],
              "range": "12\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Death Cult power blade",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Monomolecular cane-rapier",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "Grenades",
        "Imperium",
        "Navis Imperialis",
        "Retinue",
        "Rogue Trader Entourage",
        "ROGUE TRADER:",
        "Character"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "bd0c66bf-5fa0-5c52-8ce4-88858b2d8c5f",
      "name": "Subductor Squad",
      "faction_id": "AoI",
      "leader": "",
      "composition": [
        "1 Proctor-Subductor",
        "9 Subductors",
        "0-1 Cyber-mastiff"
      ],
      "loadout": "Every Proctor-Subductor and Subductor is equipped with: Arbites shotpistol; shock maul. The Cyber-mastiff is equipped with: mechanical bite.",
      "wargear": [
        "The Proctor-Subductor can be equipped with 1 nuncio aquila."
      ],
      "transport": "",
      "points": [
        {
          "models": "11",
          "cost": "110"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Nuncio Aquila (Aura)",
            "description": "While an enemy unit is within 3\" of the bearer, each time that unit takes a Battle-shock test, subtract 1 from that test."
          }
        ],
        "core": [],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "*Excluding the Cyber-mastiff."
        },
        "other": [
          {
            "name": "Dedication to Duty",
            "description": "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Subductor Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Arbites shotpistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Mechanical bite",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shock maul",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Imperium",
        "Retinue",
        "Subductor Squad"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "353ff980-8867-549a-bec2-bb1841817d7d",
      "name": "Vigilant Squad",
      "faction_id": "AoI",
      "leader": "",
      "composition": ["1 Proctor-Vigilant", "9 Vigilants", "0-1 Cyber-mastiff"],
      "loadout": "Every Proctor-Vigilant and Vigilant is equipped with: Arbites combat shotgun; Arbites shotpistol; close combat weapon. The Cyber-mastiff is equipped with: mechanical bite.",
      "wargear": [
        "Up to 2 Vigilants can each have their Arbites combat shotgun replaced with one of the following (duplicates are not allowed): ◦ 1 executioner shotgun ◦ 1 Arbites grenade launcher ◦ 1 heavy stubber ◦ 1 webber",
        "The Proctor-Vigilant can be equipped with 1 nuncio aquila."
      ],
      "transport": "",
      "points": [
        {
          "models": "11",
          "cost": "105"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Nuncio Aquila (Aura)",
            "description": "While an enemy unit is within 3\" of the bearer, each time that unit takes a Battle-shock test, subtract 1 from that test."
          }
        ],
        "core": [],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Merciless Judgement",
            "description": "Each time a model in this unit makes a ranged attack that targets a unit that is Below Half-strength, add 1 to the Wound roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Vigilant Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Arbites combat shotgun",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Arbites grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Arbites grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Arbites shotpistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Executioner shotgun",
              "keywords": ["ignores cover", "precision"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Webber",
              "keywords": ["assault", "devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Mechanical bite",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Grenades",
        "Imperium",
        "Retinue",
        "Vigilant Squad"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "6b4fbdf3-01ad-59ee-be4a-56c5b779b07c",
      "name": "Vindicare Assassin",
      "faction_id": "AoI",
      "leader": "",
      "composition": ["1 Vindicare Assassin – Epic Hero"],
      "loadout": "This model is equipped with: exitus pistol; exitus rifle; Vindicare combat knife.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Lone Operative", "Stealth"],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Deadshot",
            "description": "Each time this model makes a ranged attack, if a Critical Hit is scored, add 3 to the Damage characteristic of that attack. After this model has resolved its ranged attacks, select one enemy unit that was hit by one or more of those attacks. That unit must take a Battle-shock test."
          },
          {
            "name": "Shieldbreaker",
            "description": "Once per battle, when selecting targets for this model’s exitus rifle, it can fire a shieldbreaker round. If it does, until the end of the phase, each time this model makes an attack with that weapon, no saving throws of any kind can be made against that attack."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "4",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Vindicare Assassin"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Exitus pistol",
              "keywords": [
                "devastating wounds",
                "ignores cover",
                "pistol",
                "precision"
              ],
              "range": "12\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Exitus rifle",
              "keywords": [
                "devastating wounds",
                "ignores cover",
                "heavy",
                "precision"
              ],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "7",
              "ap": "-3",
              "damage": "D3+3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Vindicare combat knife",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Smoke",
        "Imperium",
        "Vindicare Assassin"
      ],
      "factions": ["Agents of the Imperium"]
    },
    {
      "id": "be68fcbd-8764-576e-8e7f-f1d5b8ed089b",
      "name": "Voidsmen-at-arms",
      "faction_id": "AoI",
      "leader": "",
      "composition": ["1 Voidmaster", "4-8 Voidsmen", "0-1 Canid"],
      "loadout": "The Voidmaster is equipped with: artificer shotgun; laspistol; close combat weapon. For every 5 models in this unit, 1 Voidsman is equipped with: laspistol; Voidsman rotor cannon; close combat weapon. Every other Voidsman is equipped with: lasgun; laspistol; close combat weapon. The Canid is equipped with: vicious bite.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "40"
        },
        {
          "models": "10",
          "cost": "80"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Assigned Agents"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Masters of Close Confines",
            "description": "Each time a model in this unit makes a ranged attack that targets the closest eligible target, that attack has the [LETHAL HITS] ability."
          }
        ],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "8+",
          "oc": "2",
          "name": "Voidsmen-at-arms"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Artificer shotgun",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Lasgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Laspistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Voidsman rotor cannon",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "24\"",
              "attacks": "6",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Vicious bite",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Grenades",
        "Imperium",
        "Navis Imperialis",
        "Retinue",
        "Voidsmen-at-Arms"
      ],
      "factions": ["Agents of the Imperium"],
      "ledBy": ["Rogue Trader Entourage"]
    }
  ],
  "colours": {
    "banner": "#1a3445",
    "header": "#244b6a"
  }
}