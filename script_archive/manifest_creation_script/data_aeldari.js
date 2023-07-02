window.data = window.data || {};
window.data.AE = {
  "id": "AE",
  "link": "https://game-datacards.eu",
  "name": "Aeldari",
  "is_subfaction": false,
  "parent_id": "",
  "enhancements": [
    {
      "name": "Fate’s Messenger",
      "description": "Aeldari model only. Once per turn, just after making a Hit roll, a Wound roll, or a saving throw for a model in the bearer’s unit, you can treat the result as an unmodified roll of 6 instead.",
      "keywords": ["Aeldari"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Reader of the Runes",
      "description": "Aeldari Psyker model only. In your Command phase, you can select one dice in your Fate dice pool, re-roll it, then add it back to your Fate dice pool displaying the result you just rolled.",
      "keywords": ["Aeldari", "Psyker"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "The Phoenix Gem",
      "description": "Aeldari model only. The first time the bearer is destroyed, roll one D6: on a 2+, keep it to one side. At the end of the phase, set the bearer back up again, as close as possible to its previous position and not within Engagement Range of any enemy models, with its full wounds remaining.",
      "keywords": ["Aeldari"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "The Weeping Stones",
      "description": "Aeldari model only. Each time the bearer’s unit destroys an enemy unit, roll one D6 and add it to your Fate dice pool displaying the result you just rolled.",
      "keywords": ["Aeldari"],
      "excludes": [],
      "cost": "15"
    }
  ],
  "datasheets": [
    {
      "id": "a45ca96b-644e-570a-916e-7e8fd860b06b",
      "name": "Asurmen",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Dire Avengers",
      "composition": ["1 Asurmen – Epic Hero"],
      "loadout": "This model is equipped with: the Bloody Twins; the Sword of Asur.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "120"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "3+",
          "info": ""
        },
        "other": [
          {
            "name": "Hand of Asuryan",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll."
          },
          {
            "name": "Tactical Acumen",
            "description": "Once per turn, you can target this model’s unit with the Fire Overwatch Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase."
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
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Asurmen"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "The Bloody Twins",
              "keywords": ["assault", "lethal hits", "pistol"],
              "range": "24\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
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
              "name": "The Sword of Asur",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
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
        "Phoenix Lord",
        "Asurmen"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "0debaad1-ddae-5650-8b46-e72bf0dcf222",
      "name": "Autarch",
      "faction_id": "AE",
      "leader": "This model can be attached to the following units: ■ Guardian Defenders ■ Storm Guardians",
      "composition": ["1 Autarch"],
      "loadout": "This model is equipped with: shuriken pistol; star glaive.",
      "wargear": [
        "This model’s shuriken pistol can be replaced with one of the following: ◦ 1 death spinner ◦ 1 Dragon fusion gun ◦ 1 Reaper launcher",
        "This model’s star glaive can be replaced with 1 Scorpion chainsword.",
        "This model can be equipped with 1 Howling Banshee mask.",
        "If this model is not equipped with 1 Howling Banshee mask, this model’s shuriken pistol and star glaive can be replaced with all of the following: ◦ 1 fusion pistol ◦ 1 Banshee blade ◦ 1 mandiblasters"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "65"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Howling Banshee Mask",
            "description": "The bearer’s unit has the Fights First ability."
          },
          {
            "name": "Mandiblasters",
            "description": "Melee weapons equipped by the bearer have the [DEVASTATING WOUNDS] ability when targeting units without the Monster or Vehicle keywords."
          }
        ],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Superlative Strategist",
            "description": "Once per turn, you can target this model’s unit with a Stratagem even if you have already used that Stratagem on a different unit this phase."
          },
          {
            "name": "Path of Command",
            "description": "At the start of your Command phase, if this model is your Warlord and is on the battlefield, you gain 1CP."
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
          "t": "3",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Autarch"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Death spinner",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Dragon fusion gun",
              "keywords": ["assault", "melta 3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Fusion pistol",
              "keywords": ["assault", "melta 2", "pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "8",
              "ap": "-4",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Reaper launcher – starshot",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Reaper launcher – starswarm",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Banshee blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scorpion chainsword",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Star glaive",
              "keywords": [],
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
      "keywords": ["Infantry", "Character", "Grenades", "Autarch"],
      "factions": ["Aeldari"]
    },
    {
      "id": "67ce1dec-dce4-5323-be1b-e118c347213f",
      "name": "Autarch Skyrunner",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Windriders",
      "composition": ["1 Autarch Skyrunner"],
      "loadout": "This model is equipped with: laser lance; twin shuriken catapult.",
      "wargear": [
        "This model’s laser lance can be replaced with one of the following: ◦ 1 Dragon fusion gun ◦ 1 Banshee blade"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Path of Command",
            "description": "At the start of your Command phase, if this model is your Warlord, you gain 1CP."
          },
          {
            "name": "Ride the Wind",
            "description": "While this model is leading a unit, each time that unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit."
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
          "m": "14\"",
          "t": "4",
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "Autarch Skyrunner"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Dragon fusion gun",
              "keywords": ["assault", "melta 3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Laser lance",
              "keywords": ["assault"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "4",
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
              "name": "Banshee blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Laser lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Fly",
        "Autarch",
        "Autarch Skyrunner"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "78b09f0d-6943-5caa-9c6f-683f9ddfe3c5",
      "name": "Autarch Wayleaper",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Autarch Wayleaper"],
      "loadout": "This model is equipped with: shuriken pistol; star glaive.",
      "wargear": [
        "This model’s shuriken pistol can be replaced with one of the following: ◦ 1 death spinner ◦ 1 Dragon fusion gun ◦ 1 Reaper launcher",
        "This model’s star glaive can be replaced with 1 Scorpion chainsword.",
        "This model can be equipped with 1 Howling Banshee mask.",
        "If this model is not equipped with 1 Howling Banshee mask, this model’s shuriken pistol and star glaive can be replaced with all of the following: ◦ 1 fusion pistol ◦ 1 Banshee blade ◦ 1 mandiblasters"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Howling Banshee Mask",
            "description": "The bearer has the Fights First ability."
          },
          {
            "name": "Mandiblasters",
            "description": "Melee weapons equipped by the bearer have the [DEVASTATING WOUNDS] ability when targeting units without the Monster or Vehicle keywords."
          }
        ],
        "core": ["Deep Strike", "Lone Operative"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Indomitable Strength of Will (Aura)",
            "description": "While a friendly Aeldari unit is within 6\" of this model, each time that unit takes a Battle-shock or Leadership test, add 1 to that test."
          },
          {
            "name": "Path of Command",
            "description": "At the start of your Command phase, if this model is your Warlord and is on the battlefield, you gain 1CP."
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
          "m": "14\"",
          "t": "3",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Autarch Wayleaper"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Death spinner",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Dragon fusion gun",
              "keywords": ["assault", "melta 3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Fusion pistol",
              "keywords": ["assault", "melta 2", "pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "8",
              "ap": "-4",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Reaper launcher – starshot",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Reaper launcher – starswarm",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Banshee blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scorpion chainsword",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Star glaive",
              "keywords": [],
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
        "Jump Pack",
        "Fly",
        "Grenades",
        "Autarch Wayleaper"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "08f53265-923c-5309-8ced-573127f1defa",
      "name": "Avatar Of Khaine",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Avatar of Khaine – Epic Hero"],
      "loadout": "This model is equipped with: the Wailing Doom",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "295"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Molten Form",
            "description": "Each time an attack is allocated to this model, halve the Damage characteristic of that attack."
          },
          {
            "name": "The Bloody-Handed (Aura)",
            "description": "While a friendly Aeldari unit is within 6\" of this model, add 1 to Advance and Charge rolls made for that unit."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "2+",
          "w": "14",
          "ld": "6+",
          "oc": "5",
          "name": "Avatar Of Khaine"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "The Wailing Doom",
              "keywords": ["sustained hits d3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "The Wailing Doom – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6+2"
            },
            {
              "name": "The Wailing Doom – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Daemon",
        "Avatar of Khaine"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "723f90b5-bacb-5347-8a66-8eb48e0ffdaa",
      "name": "Baharroth",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Swooping Hawks",
      "composition": ["1 Baharroth – Epic Hero"],
      "loadout": "This model is equipped with: Fury of the Tempest; the Shining Blade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "125"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Cry of the Wind",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll."
          },
          {
            "name": "Cloudstrider",
            "description": "In your Shooting phase, after this model’s unit has shot, if it is not within Engagement Range of any enemy units, that unit can make a Normal move of up to 6\" as if it were your Movement phase. If it does, until the end of the turn, that unit is not eligible to declare a charge."
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
          "m": "14\"",
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Baharroth"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Fury of the Tempest",
              "keywords": ["assault", "lethal hits"],
              "range": "24\"",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
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
              "name": "The Shining Blade",
              "keywords": ["sustained hits 1"],
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
        "Jump Pack",
        "Fly",
        "Grenades",
        "Phoenix Lord",
        "Baharroth"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "b1db34cb-2c3b-5f15-991f-9581c9cf3423",
      "name": "Cobra",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Cobra"],
      "loadout": "This model is equipped with: D-impaler; shuriken cannon; wraithbone hull.",
      "wargear": [
        "This model’s shuriken cannon can be replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "415"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "D-rift",
            "description": "In your Shooting phase, just after selecting a target for this model’s D-impaler, roll one D6 for the target unit and every other unit within 3\" of that unit: on a 5+, the unit being rolled for is struck by a D-rift. After this model has finished making its attacks against that target unit this phase, each unit struck by a D-rift this phase suffers D3 mortal wounds."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "11",
          "sv": "2+",
          "w": "24",
          "ld": "6+",
          "oc": "8",
          "name": "Cobra"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "D-impaler",
              "keywords": ["blast", "devastating wounds"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "4"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Fly", "Cobra"],
      "factions": ["Aeldari"]
    },
    {
      "id": "cf793a0d-edbd-55f6-946b-3021177779f1",
      "name": "Corsair Voidreavers",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Voidreaver Felarch", "4-9 Corsair Voidreavers"],
      "loadout": "Every model is equipped with: shuriken pistol; Aeldari power sword",
      "wargear": [
        "The Voidreaver Felarch’s shuriken pistol can be replaced with one of the following: ◦ 1 neuro disruptor ◦ 1 shuriken rifle",
        "The Voidreaver Felarch can be equipped with: ◦ 1 mistshield",
        "All of the Corsair Voidreavers in this unit can each have their shuriken pistol and Aeldari power sword replaced with 1 shuriken rifle.",
        "For every 5 models in this unit, 1 Corsair Voidreaver’s Aeldari power sword or shuriken rifle can be replaced with one of the following: ◦ 1 Corsair blaster ◦ 1 Corsair shredder",
        "If this unit contains 10 models, 1 Corsair Voidreaver’s shuriken rifle can be replaced with one of the following: ◦ 1 shuriken cannon ◦ 1 wraithcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "70"
        },
        {
          "models": "10",
          "cost": "140"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Mistshield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": ["Scouts 7\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Reavers of the Void",
            "description": "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Hit roll instead."
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
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "2",
          "name": "Corsair Voidreavers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Corsair blaster",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-4",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Corsair shredder",
              "keywords": ["assault", "torrent"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Neuro disruptor",
              "keywords": ["anti-infantry 2+", "assault", "pistol"],
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken rifle",
              "keywords": ["assault", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Wraithcannon",
              "keywords": ["devastating wounds"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "14",
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
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Grenades",
        "Anhrathe",
        "Corsair Voidreavers"
      ],
      "factions": ["Aeldari"],
      "ledBy": ["Prince Yriel", "The Visarch", "Yvraine"]
    },
    {
      "id": "e9ea6d32-6a27-5001-b786-4eed3a007a31",
      "name": "Corsair Voidscarred",
      "faction_id": "AE",
      "leader": "",
      "composition": [
        "This unit can contain a maximum of 10 models.",
        "1 Voidscarred Felarch",
        "4-9 Corsair Voidscarred",
        "0-1 Shade Runner",
        "0-1 Soul Weaver",
        "0-1 Way Seeker"
      ],
      "loadout": "Every Corsair Voidscarred and Voidscarred Felarch is equipped with: shuriken pistol; Aeldari power sword. A Shade Runner is equipped with: shuriken pistol; paired Hekatarii blades. A Soul Weaver is equipped with: shuriken pistol; Aeldari power sword; channeller stones. A Way Seeker is equipped with: shuriken pistol; Executioner; witch staff.",
      "wargear": [
        "Any number of Corsair Voidscarred can each have their shuriken pistol and Aeldari power sword replaced with 1 shuriken rifle.",
        "The Voidscarred Felarch’s shuriken pistol can be replaced with one of the following: ◦ 1 neuro disruptor ◦ 1 shuriken rifle",
        "The Voidscarred Felarch can be equipped with 1 mistshield.",
        "For every 5 models in this unit, 1 Corsair  Voidscarred’s shuriken rifle can be replaced with one of the following:",
        "◦ 1 Corsair blaster ◦ 1 Corsair shredder",
        "If this unit contains 10 models, 1 Corsair Voidscarred’s shuriken rifle can be replaced with one of the following: ◦ 1 shuriken cannon ◦ 1 wraithcannon",
        "If this unit contains 10 models, 1 Corsair Voidscarred’s shuriken rifle can be replaced with 1 Ranger long rifle.  If this unit contains 10 models, 1 Corsair Voidscarred’s Aeldari power sword can be  replaced with 1 fusion pistol.  1 Corsair Voidscarred model equipped with a shuriken pistol and Aeldari power sword can be equipped with 1 Faolchú."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "90"
        },
        {
          "models": "10",
          "cost": "180"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Channeller Stones",
            "description": "Once per turn, the first time a saving throw is failed for the bearer’s unit, change the Damage characteristic of that attack to 0."
          },
          {
            "name": "Faolchú",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability."
          },
          {
            "name": "Mistshield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": ["Scouts 7\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Piratical Raiders",
            "description": "At the start of the battle, select one unit from your opponent’s army. Each time a model in this unit makes an attack that targets that unit, that attack has the [LETHAL HITS] and [PRECISION] abilities."
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
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "Corsair Voidscarred"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Corsair blaster",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-4",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Corsair shredder",
              "keywords": ["assault", "torrent"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Executioner",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Fusion pistol",
              "keywords": ["assault", "melta 2", "pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Neuro disruptor",
              "keywords": ["anti-infantry 2+", "assault", "pistol"],
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
              "name": "Ranger long rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
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
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken rifle",
              "keywords": ["assault", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Wraithcannon",
              "keywords": ["devastating wounds"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "14",
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
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Paired Hekatarii blades",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "3",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Witch staff",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Anhrathe", "Corsair Voidscarred"],
      "factions": ["Aeldari"],
      "ledBy": ["Prince Yriel", "The Visarch", "Yvraine"]
    },
    {
      "id": "8a6759ff-6329-522a-a734-a677658dfa40",
      "name": "Crimson Hunter",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Crimson Hunter"],
      "loadout": "This model is equipped with: 2 starcannons; pulse laser; wraithbone hull.",
      "wargear": [
        "This model’s 2 starcannons can be replaced with 2 bright lances."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Skyhunter",
            "description": "Each time this model makes a ranged attack that targets a unit that can Fly, add 1 to the Hit roll and add 1 to the Wound roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "8",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "0",
          "name": "Crimson Hunter"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Pulse laser",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Aircraft", "Crimson Hunter"],
      "factions": ["Aeldari"]
    },
    {
      "id": "5f7a4231-39b5-5746-b5a0-c1adb7fa87f1",
      "name": "Dark Reapers",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Dark Reaper Exarch", "4-9 Dark Reapers"],
      "loadout": "Every model is equipped with: Reaper launcher.",
      "wargear": [
        "The Dark Reaper Exarch’s Reaper launcher can be replaced with 1 of the following: ◦ 1 Aeldari missile launcher ◦ 1 shuriken cannon ◦ 1 tempest launcher"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75"
        },
        {
          "models": "10",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Inescapable Accuracy",
            "description": "Each time a model in this unit makes a ranged attack, you can ignore any or all modifiers to that attack’s Ballistic Skill characteristic and to the Hit roll."
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
          "ld": "6+",
          "oc": "1",
          "name": "DARK REAPER"
        },
        {
          "m": "6\"",
          "t": "3",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "DARK REAPER EXARCH"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": ["ignores cover"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast", "ignores cover"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Reaper launcher – starshot",
              "keywords": ["ignores cover"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Reaper launcher – starswarm",
              "keywords": ["ignores cover"],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["ignores cover", "sustained hits 1"],
              "range": "24\"",
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
              "name": "Tempest launcher",
              "keywords": ["blast", "indirect fire"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Dark Reapers"],
      "factions": ["Aeldari"],
      "ledBy": ["Maugan Ra"]
    },
    {
      "id": "df8d1aa0-9916-5aad-82c7-7385c70f3822",
      "name": "Death Jester",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Death Jester"],
      "loadout": "This model is equipped with: shrieker cannon; Jester’s blade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "70"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Lone Operative"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Death is Not Enough",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks destroyed an enemy model, that enemy model’s unit must take a Battle-shock test."
          },
          {
            "name": "Cruel Amusement",
            "description": "In your Shooting phase, one model from your army with this ability can use it. If they do, until the end of the phase, select one of the following abilities to apply to that model’s shrieker cannon: ■ [IGNORES COVER] ■ [PRECISION] ■ [SUSTAINED HITS 3]"
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
          "m": "8\"",
          "t": "3",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Death Jester"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Shrieker cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "6",
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
              "name": "Jester’s blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Harlequins", "Death Jester"],
      "factions": ["Aeldari"]
    },
    {
      "id": "1aa15be4-e8f8-516d-bcc3-1cce97f1143c",
      "name": "Dire Avengers",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Dire Avenger Exarch", "4-9 Dire Avengers"],
      "loadout": "Every model is equipped with: Avenger shuriken catapult.",
      "wargear": [
        "The Dire Avenger Exarch’s Avenger shuriken catapult can be replaced with 1 shuriken pistol and one of the following: ◦ 1 diresword ◦ 1 power glaive",
        "If this unit’s Dire Avenger Exarch is equipped with 1 Avenger shuriken catapult, it can be equipped with 1 additional Avenger shuriken catapult.",
        "The Dire Avenger Exarch’s shuriken pistol can be replaced with: ◦ 1 shimmershield"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "70"
        },
        {
          "models": "10",
          "cost": "140"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Shimmershield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Defence Tactics",
            "description": "Each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+, or unmodified Hit rolls of 4+ instead if this unit is within range of an objective marker you control."
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
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "DIRE AVENGER"
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "DIRE AVENGER EXARCH"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Avenger shuriken catapult",
              "keywords": ["assault", "lethal hits"],
              "range": "18\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Diresword",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power glaive",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Dire Avengers"],
      "factions": ["Aeldari"],
      "ledBy": ["Asurmen"]
    },
    {
      "id": "07769191-da02-50bd-b2dd-3c3a4e90c01a",
      "name": "Eldrad Ulthran",
      "faction_id": "AE",
      "leader": "This model can be attached to the following units: ■ Guardian Defenders ■ Storm Guardians ■ Warlock Conclave",
      "composition": ["1 Eldrad Ulthran – Epic Hero"],
      "loadout": "This model is equipped with: shuriken pistol; Mind War; the Staff of Ulthamar and witchblade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Diviner of Futures",
            "description": "At the start of the battle, when making your first Strands of Fate roll, roll an additional three D6 (this means that roll will consist of fifteen D6)."
          },
          {
            "name": "Doom (Psychic)",
            "description": "At the start of your Shooting phase, you can select one enemy unit within 18\" of and visible to this Psyker and roll one D6: on a 2+, until the end of the turn, each time a friendly Aeldari model makes an attack that targets that enemy unit, add 1 to the Wound roll."
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Eldrad Ulthran"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Mind War",
              "keywords": ["anti-character 4+", "precision", "psychic"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "The Staff of Ulthamar and witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "3",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
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
        "Farseer",
        "Eldrad Ulthran"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "2ece8450-cd96-54db-9eea-f29ec2b1616d",
      "name": "Falcon",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Falcon"],
      "loadout": "This model is equipped with: pulse laser; scatter laser; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s scatter laser can be replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 shuriken cannon ◦ 1 starcannon",
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
      ],
      "transport": "This model has a transport capacity of 6 Aeldari Infantry models. Each Wraith Construct model takes the space of 2 models. It cannot transport Jump Pack models.",
      "points": [
        {
          "models": "1",
          "cost": "140"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Fire Support",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the turn, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Falcon"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Pulse laser",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Transport", "Fly", "Falcon"],
      "factions": ["Aeldari"]
    },
    {
      "id": "05ee8795-7154-5b71-bac6-a5d0f00b9d14",
      "name": "Farseer",
      "faction_id": "AE",
      "leader": "This model can be attached to the following units: ■ Guardian Defenders ■ Storm Guardians ■ Warlock Conclave",
      "composition": ["1 Farseer"],
      "loadout": "This model is equipped with: shuriken pistol; Eldritch Storm; witchblade.",
      "wargear": [
        "This model’s witchblade can be replaced with 1 singing spear."
      ],
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
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Branching Fates (Psychic)",
            "description": "Once per turn, when you use a Fate dice to substitute a roll made for a model or unit within 12\" of a Farseer model from your army, one model from your army with this ability can use it. If it does, the result of that Fate dice is first changed to a 6."
          },
          {
            "name": "Fortune (Psychic)",
            "description": "In your Command phase, you can roll one D6: on a 2+, select one friendly Aeldari unit within 12\" of this Psyker. Until the start of your next Command phase, each time an attack targets that unit, subtract 1 from the Wound roll."
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
          "t": "3",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Farseer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Eldritch Storm",
              "keywords": ["blast", "psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Singing spear",
              "keywords": ["assault", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Character", "Infantry", "Psyker", "Farseer"],
      "factions": ["Aeldari"]
    },
    {
      "id": "08f7afa4-1e01-54f1-a3ac-854d1be37640",
      "name": "Farseer Skyrunner",
      "faction_id": "AE",
      "leader": "This model can be attached to the following units: ■ Warlock Skyrunner Conclave ■ Windriders",
      "composition": ["1 Farseer Skyrunner"],
      "loadout": "This model is equipped with: shuriken pistol; twin shuriken catapult; Eldritch Storm; witchblade.",
      "wargear": [
        "This model’s witchblade can be replaced with 1 singing spear."
      ],
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
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Branching Fates (Psychic)",
            "description": "Once per turn, when you use a Fate dice to substitute a roll made for a model or unit within 12” of a Farseer model from your army, one model from your army with this ability can use it. If it does, the result of that Fate dice is first changed to a 6."
          },
          {
            "name": "Guide (Psychic)",
            "description": "In your Command phase, you can roll one D6: on a 2+, select one friendly Aeldari unit within 12\" of this Psyker. Until the start of your next Command phase, each time a model in that unit makes an attack, you can re-roll the Hit roll."
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
          "m": "14\"",
          "t": "4",
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "Farseer Skyrunner"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Eldritch Storm",
              "keywords": ["blast", "psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Singing spear",
              "keywords": ["assault", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Fly",
        "Psyker",
        "Farseer",
        "Farseer Skyrunner"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "dd651ab0-2c1d-548b-bfc2-9720ebf428ed",
      "name": "Fire Dragons",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Fire Dragon Exarch", "4-9 Fire Dragons"],
      "loadout": "Every model is equipped with: Dragon fusion gun; close combat weapon.",
      "wargear": [
        "The Fire Dragon Exarch’s Dragon fusion gun can be replaced with 1 of the following: ◦ 1 Dragon’s breath flamer ◦ 1 firepike"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "85"
        },
        {
          "models": "10",
          "cost": "170"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Assured Destruction",
            "description": "Each time a model in this unit makes a ranged attack that targets a Monster or Vehicle unit, re-roll a Wound roll of 1 and re-roll a Damage roll of 1."
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
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "FIRE DRAGON"
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "FIRE DRAGON EXARCH"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Dragon fusion gun",
              "keywords": ["assault", "melta 3"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Dragon’s breath flamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Firepike",
              "keywords": ["melta 3"],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Fire Dragons"],
      "factions": ["Aeldari"],
      "ledBy": ["Fuegan"]
    },
    {
      "id": "34ab4d87-ae76-58d1-96b7-eb47d553562e",
      "name": "Fire Prism",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Fire Prism"],
      "loadout": "This model is equipped with: prism cannon; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "125"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Crystal Matrix",
            "description": "Each time this model is selected to shoot, you can re-roll one Hit roll and you can re-roll one Wound roll when resolving those attacks."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Fire Prism"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Prism cannon – dispersed pulse",
              "keywords": ["blast"],
              "range": "60\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            },
            {
              "name": "Prism cannon – focused lances",
              "keywords": ["linked fire"],
              "range": "60\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "18",
              "ap": "-4",
              "damage": "6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Fire Prism"],
      "factions": ["Aeldari"]
    },
    {
      "id": "147ca91a-b950-53fd-988f-b9f657b1f38f",
      "name": "Fuegan",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Fire Dragons",
      "composition": ["1 Fuegan – Epic Hero"],
      "loadout": "This model is equipped with: Searsong; the Fire Axe.",
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
        "core": ["Feel No Pain 5+", "Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Burning Lance",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll."
          },
          {
            "name": "Unquenchable Resolve",
            "description": "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining."
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
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Fuegan"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Searsong – beam",
              "keywords": ["sustained hits d3"],
              "range": "12\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            },
            {
              "name": "Searsong – lance",
              "keywords": ["melta 6"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "14",
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
              "name": "The Fire Axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-4",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Phoenix Lord",
        "Fuegan"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "dff35a09-3399-56d0-8c16-3801f800357d",
      "name": "Guardian Defenders",
      "faction_id": "AE",
      "leader": "",
      "composition": ["10 Guardian Defenders", "1 Heavy Weapon Platform"],
      "loadout": "Every Guardian Defender is equipped with: shuriken catapult; close combat weapon. The Heavy Weapon Platform is equipped with: shuriken cannon; close combat weapon.",
      "wargear": [
        "The Heavy Weapon Platform can replace its shuriken cannon with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "11",
          "cost": "110"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Defenders of Fate",
            "description": "At the end of your Command phase, for each objective marker you control that has one or more units from your army with this ability within range of it, roll one D6 and add it to your Fate dice pool displaying the result you just rolled."
          },
          {
            "name": "Crewed Platform",
            "description": "When the last Guardian Defender model in this unit is destroyed, any remaining Heavy Weapon Platform models in this unit are also destroyed."
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
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "2",
          "name": "GUARDIAN DEFENDER"
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "0",
          "name": "HEAVY WEAPON PLATFORM"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Shuriken catapult",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
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
              "skill": "3+",
              "strength": "3",
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
        "Guardians",
        "Guardian Defenders"
      ],
      "factions": ["Aeldari"],
      "ledBy": [
        "Autarch",
        "Eldrad Ulthran",
        "Farseer",
        "Prince Yriel",
        "The Visarch",
        "Warlock",
        "Yvraine"
      ]
    },
    {
      "id": "66e01aea-5635-5298-9471-a3bb4f982a95",
      "name": "Hemlock Wraithfighter",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Hemlock Wraithfighter"],
      "loadout": "This model is equipped with: 2 heavy D-scythes; wraithbone hull.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "155"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Mindshock Pod (Aura, Psychic)",
            "description": "While an enemy unit is within 9\" of this model, subtract 1 from Battle-shock and Leadership tests taken for that unit."
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
          "m": "20+\"",
          "t": "8",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "0",
          "name": "Hemlock Wraithfighter"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy D-scythe",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "12",
              "ap": "-4",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Psyker",
        "Wraith Construct",
        "Hemlock Wraithfighter"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "4988e545-1f39-50ea-b46e-10b13d972a25",
      "name": "Hornet",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Hornet"],
      "loadout": "This model is equipped with: 2 Hornet pulse lasers; wraithbone hull.",
      "wargear": [
        "Each of this model’s Hornet pulse lasers can be replaced with one of the following: ◦ Aeldari missile launcher ◦ Bright lance ◦ Scatter laser ◦ Shuriken cannon ◦ Starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Lightning Assault",
            "description": "Each time this model ends a Normal move, you can select one enemy unit (excluding Monster and Vehicle units) that it moved over during that move, then roll six D6: for each 4+, that enemy unit suffers 1 mortal wound."
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
          "m": "14\"",
          "t": "7",
          "sv": "3+",
          "w": "8",
          "ld": "6+",
          "oc": "2",
          "name": "Hornet"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Hornet pulse laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Hornet"],
      "factions": ["Aeldari"]
    },
    {
      "id": "f919ee87-1632-5d48-baf1-39f3534a169a",
      "name": "Howling Banshees",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Howling Banshee Exarch", "4-9 Howling Banshees"],
      "loadout": "Every model is equipped with: shuriken pistol; Banshee blade.",
      "wargear": [
        "The Howling Banshee Exarch’s Banshee blade can be replaced with 1 of the following: ◦ 1 executioner ◦ 1 triskele",
        "The Howling Banshee Exarch’s shuriken pistol and Banshee blade can be replaced with 1 mirrorswords."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "85"
        },
        {
          "models": "10",
          "cost": "170"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Fights First"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Acrobatic",
            "description": "This unit is eligible to declare a charge in a turn in which it Advanced or Fell Back."
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
          "m": "8\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "HOWLING BANSHEE"
        },
        {
          "m": "8\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "HOWLING BANSHEE EXARCH"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Triskele",
              "keywords": ["assault"],
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
              "name": "Banshee blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Executioner",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Mirrorswords",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Triskele",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "3",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Howling Banshees"],
      "factions": ["Aeldari"],
      "ledBy": ["Jain Zar"]
    },
    {
      "id": "623547c2-3a7d-5d0a-8200-4b05dc98caa6",
      "name": "Illic Nightspear",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Rangers",
      "composition": ["1 Illic Nightspear – Epic Hero"],
      "loadout": "This model is equipped with: Voidbringer; shuriken pistol; Aeldari power sword.",
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
        "core": ["Infiltrators", "Leader", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "*  This model has a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Bringer of the True Death",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Wound roll."
          },
          {
            "name": "Hunter Unseen",
            "description": "This model’s unit can only be selected as the target of a ranged attack if the attacking model is within 12\"."
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
          "t": "3",
          "sv": "5+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Illic Nightspear"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Voidbringer",
              "keywords": ["devastating wounds", "heavy", "precision"],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Epic Hero", "Illic Nightspear"],
      "factions": ["Aeldari"]
    },
    {
      "id": "17fe1673-7bbc-5b85-a8b3-b42ba995f059",
      "name": "Irillyth",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Shadow Spectres",
      "composition": ["1 Irillyth – Epic Hero"],
      "loadout": "This model is equipped with: Spear of Starlight.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "105"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader", "Deep Strike", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Reaper of Souls",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll."
          },
          {
            "name": "Shadow of Death (Aura)",
            "description": "While an enemy unit is within 6\" of this model, each time that unit takes a Battle-shock or Leadership test, subtract 1 from that test."
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
          "m": "12\"",
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Irillyth"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Spear of Starlight",
              "keywords": [],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "4"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Spear of Starlight",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Phoenix Lord",
        "Irillyth"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "750c6e6e-773d-591a-8e2a-f2e26b2e4573",
      "name": "Jain Zar",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Howling Banshees",
      "composition": ["1 Jain Zar – Epic Hero"],
      "loadout": "This model is equipped with: the Silent Death; the Blade of Destruction.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "105"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Fights First", "Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Storm of Silence",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll."
          },
          {
            "name": "Whirling Death",
            "description": "Once per turn, you can target this model’s unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase."
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
          "m": "8\"",
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Jain Zar"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "The Silent Death",
              "keywords": ["assault"],
              "range": "12\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
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
              "name": "The Blade of Destruction – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "2"
            },
            {
              "name": "The Blade of Destruction – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Phoenix Lord",
        "Jain Zar"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "124bb7b9-7b78-5721-ae9a-323dce700218",
      "name": "Karandras",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Striking Scorpions",
      "composition": ["1 Karandras – Epic Hero"],
      "loadout": "This model is equipped with: Arhra’s Bane; Isirmathil; the Scorpion’s Bite.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "The Scorpion’s Bite",
            "description": "Melee weapons equipped by the bearer have the [DEVASTATING WOUNDS] ability when targeting units without the Titanic keyword."
          }
        ],
        "core": ["Infiltrators", "Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Shadow Hunter",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll."
          },
          {
            "name": "Sustained Assault",
            "description": "Each time this model makes a melee attack, if it made a Charge move this turn, a successful unmodified Hit roll of 4+ scores a Critical Hit."
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
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Karandras"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Arhra’s Bane",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "5",
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
              "name": "Arhra’s Bane",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Isirmathil",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "6",
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
        "Phoenix Lord",
        "Karandras"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "60d3e229-db6d-5088-b786-2abc8017df6f",
      "name": "Lynx",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Lynx"],
      "loadout": "This model is equipped with: Lynx pulsar; shuriken cannon; wraithbone hull.",
      "wargear": [
        "This model’s shuriken cannon can be replaced with one of the following: ◦ Aeldari missile launcher ◦ Bright lance ◦ Scatter laser ◦ Starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "155"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Speed of Vaul",
            "description": "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 9\" to the Move characteristic of this model."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-5 WOUNDS REMAINING",
          "description": "While this model has 1-5 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "16",
          "ld": "6+",
          "oc": "4",
          "name": "Lynx"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Lynx pulsar",
              "keywords": ["assault"],
              "range": "48\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "16",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Lynx"],
      "factions": ["Aeldari"]
    },
    {
      "id": "a3dff7ee-a03f-5c56-b1fb-259bc952131e",
      "name": "Maugan Ra",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Dark Reapers",
      "composition": ["1 Maugan Ra"],
      "loadout": "This model is equipped with: the Maugetar.",
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
        "core": [],
        "faction": ["Leader", "Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Harvester of Souls",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll."
          },
          {
            "name": "Face of Death",
            "description": "Each time this model makes an attack that targets a unit that is Below Half-strength, you can re-roll the Hit roll and you can re-roll the Wound roll."
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
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Maugan Ra"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "The Maugetar",
              "keywords": ["devastating wounds", "ignores cover"],
              "range": "36\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "7",
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
              "name": "The Maugetar",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
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
        "Phoenix Lord",
        "Maugan Ra"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "d06e11cd-84bf-5174-8f23-096d8322ee71",
      "name": "Night Spinner",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Night Spinner"],
      "loadout": "This model is equipped with: doomweaver; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "140"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Monofilament Web",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks made with its doomweaver scored a hit against an enemy unit, that enemy unit is pinned until the end of your opponent’s next turn. While a unit is pinned, subtract 2 from that unit’s Move characteristic and that unit cannot Advance."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Night Spinner"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Doomweaver",
              "keywords": [
                "blast",
                "devastating wounds",
                "indirect fire",
                "twin-linked"
              ],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "7",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Night Spinner"],
      "factions": ["Aeldari"]
    },
    {
      "id": "078ab98e-cae4-54b3-8913-e195f79c5e4c",
      "name": "Nightwing",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Nightwing"],
      "loadout": "This model is equipped with: twin bright lance; twin shuriken cannon; wraithbone hull.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Hover"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Interceptor",
            "description": "Each time this model makes a ranged attack that targets a unit that can Fly, add 1 to the Hit roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "8",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "0",
          "name": "Nightwing"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Twin bright lance",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin shuriken cannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Aircaft", "Fly", "Nightwing"],
      "factions": ["Aeldari"]
    },
    {
      "id": "0239a89d-d163-59e4-837c-334d92d94c71",
      "name": "Phantom Titan",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Phantom Titan"],
      "loadout": "This model is equipped with: D-bombard; Phantom pulsar; Phantom starcannon; voidstorm missile launcher; Phantom feet.",
      "wargear": [
        "This model’s D-bombard can be replaced with one of the following: ◦ 2 Phantom starcannons and 1 wraith glaive ◦ 1 Phantom starcannon, 1 pulse laser and 1 wraith glaive ◦ 2 pulse lasers and 1 wraith glaive ◦  1 Phantom pulsar",
        "This model’s Phantom pulsar can be replaced with one of the following: ◦ 1 D-bombard ◦ 2 Phantom starcannons and 1 wraith glaive ◦ 1 Phantom starcannon, 1 pulse laser and 1 wraith glaive ◦ 2 pulse lasers and 1 wraith glaive",
        "This model’s Phantom starcannon can be replaced with 1 pulse laser."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "2100"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "* Against ranged attacks only"
        },
        "other": [
          {
            "name": "Titanic Advance",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there."
          },
          {
            "name": "Towering Wraith Construct",
            "description": "Each time you target this model with a Stratagem, you must spend three times that Stratagem’s stated CP cost to do so."
          },
          {
            "name": "Flawless Poise",
            "description": "This model is eligible to shoot and declare a charge in a turn in which it Fell Back."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-16 WOUNDS REMAINING",
          "description": "While this model has 1-16 wounds remaining, subtract 10 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "14",
          "sv": "2+",
          "w": "55",
          "ld": "6+",
          "oc": "20",
          "name": "Phantom Titan"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "D-bombard",
              "keywords": ["blast", "devastating wounds"],
              "range": "72\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "20",
              "ap": "-4",
              "damage": "2D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Phantom pulsar",
              "keywords": [],
              "range": "120\"",
              "attacks": "8",
              "skill": "3+",
              "strength": "18",
              "ap": "-4",
              "damage": "6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Phantom starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Pulse laser",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Voidstorm missile launcher",
              "keywords": [],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Phantom feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "4"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Wraith glaive – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "18",
              "ap": "-4",
              "damage": "12"
            },
            {
              "name": "Wraith glaive – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "4"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Towering",
        "Walker",
        "Wraith Construct",
        "Phantom Titan"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "3d23908b-2375-537d-92c2-66b388b7374c",
      "name": "Prince Yriel",
      "faction_id": "AE",
      "leader": "This model can be attached to the following units: ■ Corsair Voidreavers ■ Corsair Voidscarred ■ Guardian Defenders ■ Storm Guardians",
      "composition": ["1 Prince Yriel – Epic Hero"],
      "loadout": "This model is equipped with: the Eye of Wrath; the Spear of Twilight.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Hero of Iyanden",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit."
          },
          {
            "name": "Prince of Corsairs",
            "description": "If your army includes this model, after both players have deployed their armies, select up to three Aeldari units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves."
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
          "t": "3",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Prince Yriel"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "The Eye of Wrath",
              "keywords": ["assault"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "The Spear of Twilight",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Epic Hero", "Prince Yriel"],
      "factions": ["Aeldari"]
    },
    {
      "id": "854a02eb-6a01-5734-a1b6-43a5de76571f",
      "name": "Rangers",
      "faction_id": "AE",
      "leader": "",
      "composition": ["5-10 Rangers"],
      "loadout": "Every model is equipped with: Ranger long rifle; shuriken pistol; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "55"
        },
        {
          "models": "10",
          "cost": "110"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "*  Models in this unit have a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Path of the Outcast",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6\" as if it were your Movement phase."
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
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "Rangers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Ranger long rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Rangers"],
      "factions": ["Aeldari"],
      "ledBy": ["Illic Nightspear"]
    },
    {
      "id": "b3bccfe6-2efd-5765-8c51-58307e0eaffc",
      "name": "Revenant Titan",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Revenant Titan"],
      "loadout": "This model is equipped with: cloudburst missile launcher; Revenant pulsar; sonic lance; Revenant feet.",
      "wargear": [
        "This model’s Revenant pulsar can be replaced with 1 sonic lance.",
        "This model’s sonic lance can be replaced with 1 Revenant pulsar."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "1100"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "* Against ranged attacks only"
        },
        "other": [
          {
            "name": "Titanic Advance",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there."
          },
          {
            "name": "Towering Wraith Construct",
            "description": "Each time you target this model with a Stratagem, you must spend twice that Stratagem’s stated CP cost to do so."
          },
          {
            "name": "Revenant Jet Pack",
            "description": "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 8\" to the Move characteristic of this model."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, subtract 8 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "16\"",
          "t": "13",
          "sv": "2+",
          "w": "30",
          "ld": "6+",
          "oc": "16",
          "name": "Revenant Titan"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Cloudburst missile launcher",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Revenant pulsar",
              "keywords": ["assault"],
              "range": "60\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "4"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Sonic lance",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+",
                "assault",
                "torrent"
              ],
              "range": "18\"",
              "attacks": "D6+6",
              "skill": "N/A",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Revenant feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "10",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Towering",
        "Walker",
        "Fly",
        "Wraith Construct",
        "Revenant Titan"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "29269392-e970-54c3-9de3-6a76745ec6d8",
      "name": "Scorpion",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Scorpion"],
      "loadout": "This model is equipped with: shuriken cannon; twin Scorpion pulsar; wraithbone hull.",
      "wargear": [
        "This model’s shuriken cannon can be replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "410"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Lanced Obliteration",
            "description": "Each time an attack made with this model’s twin Scorpion pulsar destroys an enemy model that has the Deadly Demise ability, that model’s Deadly Demise ability inflicts mortal wounds on a D6 roll of 4+ instead of on a 6."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "11",
          "sv": "2+",
          "w": "24",
          "ld": "6+",
          "oc": "8",
          "name": "Scorpion"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin Scorpion pulsar",
              "keywords": ["twin-linked"],
              "range": "60\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "18",
              "ap": "-3",
              "damage": "5"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Titanic", "Fly", "Scorpion"],
      "factions": ["Aeldari"]
    },
    {
      "id": "80ce60b7-660e-58e9-8c48-7b1686e1e309",
      "name": "Shadow Spectres",
      "faction_id": "AE",
      "leader": "",
      "composition": ["0-1 Shadow Spectre Exarch", "5-10 Shadow Spectres"],
      "loadout": "Every model is equipped with: prism rifle; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "80"
        },
        {
          "models": "10",
          "cost": "160"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Shade of Twilight",
            "description": "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, this unit is not eligible to declare a charge."
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
          "m": "12\"",
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "SHADOW SPECTRE"
        },
        {
          "m": "12\"",
          "t": "3",
          "sv": "5+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "SHADOW SPECTRE EXARCH"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Prism rifle – dispersed",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            },
            {
              "name": "Prism rifle – focused",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Jump Pack", "Fly", "Shadow Spectres"],
      "factions": ["Aeldari"],
      "ledBy": ["Irillyth"]
    },
    {
      "id": "1b5d57e8-e866-5fa1-a017-dd224ae1a3c3",
      "name": "Shadowseer",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Troupe",
      "composition": ["1 Shadowseer"],
      "loadout": "This model is equipped with: shuriken pistol; miststave.",
      "wargear": [
        "This model’s shuriken pistol can be replaced with 1 neuro disruptor."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "60"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Fog of Dreams (Psychic)",
            "description": "While this model is leading a unit, models in that unit have the Stealth ability."
          },
          {
            "name": "Twilight Pathways (Psychic)",
            "description": "At the start of your Movement phase, one model from your army with this ability can use it. If it does, until the end of the turn, you can re-roll Advance rolls made for that model’s unit and that model’s unit is eligible to declare a charge in a turn in which it Advanced."
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
          "m": "8\"",
          "t": "3",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Shadowseer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Neuro disruptor",
              "keywords": ["anti-infantry 2+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Miststave",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Psyker",
        "Grenades",
        "Harlequins",
        "Shadowseer"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "f5f48c3a-78bc-5ecc-81f1-9de5a9b5bd12",
      "name": "Shining Spears",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Shining Spear Exarch", "2-5 Shining Spears"],
      "loadout": "Every model is equipped with: laser lance; twin shuriken catapult.",
      "wargear": [
        "The Shining Spear Exarch’s laser lance can be replaced with one of the following: ◦ 1 paragon sabre ◦ 1 star lance",
        "The Shining Spear Exarch’s twin shuriken catapult can be replaced with 1 shuriken cannon.",
        "The Shining Spear Exarch can be equipped with 1 shimmershield."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "120"
        },
        {
          "models": "6",
          "cost": "240"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Shimmershield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Aerobatic Grace",
            "description": "Each time an attack targets this unit, subtract 1 from the Hit roll."
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
          "m": "14\"",
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "SHINING SPEAR"
        },
        {
          "m": "14\"",
          "t": "4",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "SHINING SPEAR EXARCH"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Laser lance",
              "keywords": ["assault"],
              "range": "6\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Star lance",
              "keywords": ["assault"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Laser lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Paragon sabre",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Star lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Shining Spears"],
      "factions": ["Aeldari"]
    },
    {
      "id": "d336eae8-70ca-574e-9717-99835426785d",
      "name": "Shroud Runners",
      "faction_id": "AE",
      "leader": "",
      "composition": ["3-6 Shroud Runners"],
      "loadout": "Every model is equipped with: Ranger long rifle; scatter laser; shuriken pistol; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "80"
        },
        {
          "models": "6",
          "cost": "160"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 9\"", "Stealth"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "*  Models in this unit have a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Target Acquisition",
            "description": "At the start of your Shooting phase, select one enemy unit within 12\" of and visible to this unit. Until the end of the phase, ranged weapons equipped by friendly Aeldari models have the [LETHAL HITS] ability when targeting that unit."
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
          "m": "14\"",
          "t": "4",
          "sv": "4+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Shroud Runners"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Ranger long rifle",
              "keywords": ["precision"],
              "range": "36\"",
              "attacks": "1",
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
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Shroud Runners"],
      "factions": ["Aeldari"]
    },
    {
      "id": "9cd7492d-eeef-53d2-9819-7853fac13cc1",
      "name": "Skathach Wraithknight",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Skathach Wraithknight"],
      "loadout": "This model is equipped with: inferno lance; titanic feet; scattershield.",
      "wargear": [
        "This model’s inferno lance can be replaced with 1 deathshroud cannon.",
        "This model’s scattershield can be replaced with one of the following: ◦ 1 inferno lance ◦ 1 deathshroud cannon",
        "This model can be equipped with up to two of the following: ◦ 1 scatter laser ◦ 1 shuriken cannon ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "385"
        }
      ],
      "abilities": {
        "wargear": {
          "name": "Scattershield",
          "description": "The bearer has a 4+ invulnerable save."
        },
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Agile",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over other models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there."
          },
          {
            "name": "Webway Shunt Generator",
            "description": "Once per battle, at the end of your opponent’s turn, if this model is not within Engagement Range of one or more enemy units, you can remove this model from the battlefield and place it into Strategic Reserves."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "2+",
          "w": "18",
          "ld": "6+",
          "oc": "10",
          "name": "Skathach Wraithknight"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Deathshroud cannon – dispersed",
              "keywords": ["blast", "devastating wounds"],
              "range": "12\"",
              "attacks": "3D6",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            },
            {
              "name": "Deathshroud cannon – focused",
              "keywords": ["blast", "devastating wounds"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno lance",
              "keywords": ["melta 2"],
              "range": "24\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "12",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Titanic feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Towering",
        "Walker",
        "Wraith Construct",
        "Skathach Wraithknight"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "220255f7-7940-52f9-802b-2354b0943d98",
      "name": "Skyweavers",
      "faction_id": "AE",
      "leader": "",
      "composition": ["2-4 Skyweavers"],
      "loadout": "Every model is equipped with: shuriken cannon; star bolas; close combat weapon.",
      "wargear": [
        "Any number of models can each have their shuriken cannon replaced with 1 Skyweaver haywire cannon.",
        "Any number of models can each have their star bolas replaced with 1 zephyrglaive."
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "95"
        },
        {
          "models": "4",
          "cost": "190"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Scything Swipes",
            "description": "Each time this unit ends a Normal move, you can select one enemy unit (excluding Monster and Vehicle units) that it moved over during that move. If you do, roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound."
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
          "m": "14\"",
          "t": "4",
          "sv": "4+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Skyweavers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Star bolas",
              "keywords": [],
              "range": "12\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Skyweaver haywire cannon",
              "keywords": ["anti-vehicle 4+", "devastating wounds"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "-1",
              "damage": "3"
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
              "attacks": "4",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Zephyrglaive",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Smoke", "Harlequins", "Skyweavers"],
      "factions": ["Aeldari"]
    },
    {
      "id": "ce7717de-ecfc-57bc-809a-5644eaac1162",
      "name": "Solitaire",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Solitaire – Epic Hero"],
      "loadout": "This model is equipped with: Solitaire weapons.",
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
        "core": ["Fights First", "Lone Operative"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "3+",
          "info": ""
        },
        "other": [
          {
            "name": "Blitz",
            "description": "Once per battle, in your Movement phase, this model can use this ability before it makes a Normal move. If it does, until the end of the turn, add 2D6\" to this model’s Move characteristic and add 3 to this model’s Attacks characteristic."
          },
          {
            "name": "Blur of Movement",
            "description": "This model is eligible to declare a charge in a turn in which it Advanced."
          }
        ],
        "special": [
          {
            "name": "PATH OF DAMNATION",
            "description": "This model cannot be your Warlord."
          }
        ],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "3",
          "sv": "6+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Solitaire"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Solitaire weapons",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "9",
              "skill": "2+",
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
        "Harlequins",
        "Solitaire"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "da7696c5-35af-571b-8891-c7f8e87f0353",
      "name": "Spiritseer",
      "faction_id": "AE",
      "leader": "This model can be attached to the following units: ■ Wraithblades ■ Wraithguard ■ Wraithlord",
      "composition": ["1 Spiritseer"],
      "loadout": "This model is equipped with: shuriken pistol; witch staff.",
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
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Spirit Mark",
            "description": "While this model is leading a unit, weapons in that unit have the [LETHAL HITS] ability and each time a model in that unit makes an attack, add 1 to the Hit roll."
          },
          {
            "name": "Tears of Isha (Psychic)",
            "description": "While this model is leading a unit, in the Command phase, you can return 1 destroyed Bodyguard model to that unit."
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
          "t": "3",
          "sv": "6+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Spiritseer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Witch staff",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "3",
              "ap": "0",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": ["Character", "Infantry", "Psyker", "Spiritseer"],
      "factions": ["Aeldari"]
    },
    {
      "id": "a2ab60bb-cde1-5c04-9a9e-ab83e75b5b83",
      "name": "Starweaver",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Starweaver"],
      "loadout": "This model is equipped with: 2 shuriken cannons; close combat weapon.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 6 Harlequins Infantry models.",
      "points": [
        {
          "models": "1",
          "cost": "80"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Firing Deck 6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Rapid Embarkation",
            "description": "At the end of the Fight phase, if there are no models currently embarked within this Transport, you can select one friendly Harlequins Infantry unit that has 6 or fewer models that is wholly within 6\" of this Transport. Unless that unit is within Engagement Range of one or more enemy units, it can embark within this Transport."
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
          "m": "14\"",
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Starweaver"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Dedicated Transport",
        "Smoke",
        "Fly",
        "Harlequins",
        "Starweaver"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "f439bfc5-13ef-56e7-a954-091dedf6b831",
      "name": "Storm Guardians",
      "faction_id": "AE",
      "leader": "",
      "composition": ["10 Storm Guardians", "1 Serpent’s Scale Platform"],
      "loadout": "Every Storm Guardian is equipped with: shuriken pistol; Guardian combat weapon. The Serpent’s Scale Platform is equipped with: Guardian combat weapon; Serpent shield.",
      "wargear": [
        "Up to 2 Storm Guardians can each have their shuriken pistol and Guardian combat weapon replaced with 1 Aeldari flamer.",
        "Up to 2 Storm Guardians can each have their shuriken pistol and Guardian combat weapon replaced with 1 Guardian fusion gun.",
        "Up to 2 Storm Guardians can each have their Guardian combat weapon replaced with 1 Aeldari power sword."
      ],
      "transport": "",
      "points": [
        {
          "models": "11",
          "cost": "115"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Serpent Shield",
            "description": "Models in the bearer’s unit have a 5+ invulnerable save."
          }
        ],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Stormblades",
            "description": "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn."
          },
          {
            "name": "Crewed Platform",
            "description": "When the last Storm Guardian model in this unit is destroyed, any remaining Serpent’s Scale Platform models in this unit are also destroyed."
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
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "2",
          "name": "STORM GUARDIAN"
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "0",
          "name": "SERPENT’S SCALE PLATFORM"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari flamer",
              "keywords": ["assault", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Guardian fusion gun",
              "keywords": ["assault", "melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Guardian combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
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
        "Guardians",
        "Storm Guardians"
      ],
      "factions": ["Aeldari"],
      "ledBy": [
        "Autarch",
        "Eldrad Ulthran",
        "Farseer",
        "Prince Yriel",
        "The Visarch",
        "Warlock"
      ]
    },
    {
      "id": "8b475d6d-ea2c-53f6-8ab3-4e31da4ddc2c",
      "name": "Striking Scorpions",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Striking Scorpion Exarch", "4-9 Striking Scorpions"],
      "loadout": "Every model is equipped with: shuriken pistol; Scorpion chainsword; mandiblasters.",
      "wargear": [
        "The Striking Scorpion Exarch’s Scorpion chainsword can be replaced with 1 Scorpion’s claw.",
        "The Striking Scorpion Exarch’s shuriken pistol and Scorpion chainsword can be replaced with 1 biting blade."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75"
        },
        {
          "models": "10",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Mandiblasters",
            "description": "Melee weapons equipped by the bearer have the [DEVASTATING WOUNDS] ability when targeting units without the Monster or Vehicle keywords."
          }
        ],
        "core": ["Infiltrators"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [],
        "special": [],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "7\"",
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "STRIKING SCORPION"
        },
        {
          "m": "7\"",
          "t": "3",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "STRIKING SCORPION EXARCH"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Scorpion’s claw",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Biting blade",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scorpion chainsword",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Scorpion’s claw",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Striking Scorpions"],
      "factions": ["Aeldari"],
      "ledBy": ["Karandras"]
    },
    {
      "id": "4b91cd9c-5102-53f1-9df5-83ac8622bc1e",
      "name": "Support Weapons",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Support Weapon"],
      "loadout": "This model is equipped with: shadow weaver; shuriken catapult; close combat weapon.",
      "wargear": [
        "Any number of models can each have their shadow weaver replaced with one of the following: ◦ 1 D-cannon ◦ 1 vibro cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "85"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Artillery Barrage",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit (excluding Monster and Vehicle untis) that was hit by one or more of those attacks. Until the start of your next turn, while this unit is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll."
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
          "m": "3\"",
          "t": "6",
          "sv": "4+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Support Weapons"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "D-cannon",
              "keywords": [
                "blast",
                "devastating wounds",
                "heavy",
                "indirect fire"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shadow weaver",
              "keywords": [
                "blast",
                "devastating wounds",
                "heavy",
                "indirect fire"
              ],
              "range": "48\"",
              "attacks": "D6+2",
              "skill": "3+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken catapult",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Vibro cannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "8",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Support Weapons"],
      "factions": ["Aeldari"]
    },
    {
      "id": "54f6fc00-6f4a-5639-82fc-f3a31357345b",
      "name": "Swooping Hawks",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Swooping Hawk Exarch", "4-9 Swooping Hawks"],
      "loadout": "Every model is equipped with: lasblaster; close combat weapon.",
      "wargear": [
        "The Swooping Hawk Exarch’s lasblaster can be replaced with 1 Hawk’s talon.",
        "The Swooping Hawk Exarch can be equipped with 1 Aeldari power sword."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75"
        },
        {
          "models": "10",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Skyleap",
            "description": "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove this unit from the battlefield and place it into Strategic Reserves."
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
          "m": "14\"",
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "SWOOPING HAWK"
        },
        {
          "m": "14\"",
          "t": "3",
          "sv": "4+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "SWOOPING HAWK EXARCH"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Hawk’s talon",
              "keywords": ["assault", "lethal hits"],
              "range": "24\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Lasblaster",
              "keywords": ["assault", "lethal hits"],
              "range": "24\"",
              "attacks": "4",
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
              "name": "Aeldari power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Jump Pack",
        "Fly",
        "Grenades",
        "Swooping Hawks"
      ],
      "factions": ["Aeldari"],
      "ledBy": ["Baharroth"]
    },
    {
      "id": "ebc4b618-c08e-5c19-9633-3a9c63bc3ec3",
      "name": "The Visarch",
      "faction_id": "AE",
      "leader": "This model can be attached to the following units: ■ Corsair Voidreavers ■ Corsair Voidscarred ■ Guardian Defenders ■ Kabalite Warriors (see Drukhari) ■ Storm Guardians ■ Troupe ■ Wyches (see Drukhari) You can attach this unit to one of the above units, even if Yvraine has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Visarch – Epic Hero"],
      "loadout": "This model is equipped with: Asu-var, the Sword of Silent Screams.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "90"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Way of the Blade",
            "description": "While this model is leading a unit, that unit has the Fights First ability."
          },
          {
            "name": "Champion of Ynnead",
            "description": "Each time this model is selected to fight, select one of the abilities below for Asu-var, the Sword of Silent Screams, to gain until the end of the phase: ■ [  SUSTAINED HITS 2] ■ [DEVASTATING WOUNDS] ■ [  LETHAL HITS]"
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
          "m": "8\"",
          "t": "3",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "The Visarch"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Asu-var, the Sword of Silent Screams",
              "keywords": ["precision"],
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
        "Ynnari",
        "The Visarch"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "2906941e-fa4b-5aa4-bb53-72cf83da47f1",
      "name": "The Yncarne",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Yncarne – Epic Hero"],
      "loadout": "This model is equipped with: swirling soul energy; Vilith-zhar, the Sword of Souls.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "270"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Inevitable Death",
            "description": "Once per phase, if this model is on the battlefield, when another unit is destroyed, just after removing the last model in that unit, you can remove this model from the battlefield and set it up again as close as possible to where that destroyed model was and not within Engagement Range of any enemy models."
          },
          {
            "name": "Deathly Form",
            "description": "Each time an attack is allocated to this model, halve the Damage characteristic of that attack."
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
          "m": "10\"",
          "t": "10",
          "sv": "2+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "The Yncarne"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Swirling soul energy",
              "keywords": ["ignores cover", "psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
              "strength": "7",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Vilith-zhar, the Sword of Souls – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "12",
              "ap": "-4",
              "damage": "D6+1"
            },
            {
              "name": "Vilith-zhar, the Sword of Souls – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
              "strength": "6",
              "ap": "-4",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Fly",
        "Psyker",
        "Daemon",
        "Ynnari",
        "The Yncarne"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "1238411f-7d33-52d3-8fdc-4259230538fe",
      "name": "Troupe",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Lead Player", "4-11 Players"],
      "loadout": "Every model is equipped with: shuriken pistol; Harlequin’s blade.",
      "wargear": [
        "Any number of models can each have their Harlequin’s blade replaced with 1 Harlequin’s special weapon.",
        "The Lead Player’s Harlequin’s blade can be replaced with 1 Aeldari power sword.",
        "If this unit contains 10 or fewer models: ◦  Up to two models can each have their shuriken pistol replaced with 1 neuro disruptor ◦  Up to two models can each have their shuriken pistol replaced with 1 fusion pistol",
        "If this unit contains 11 or more models: ◦  Up to four models can each have their shuriken pistol replaced with 1 neuro disruptor ◦  Up to four models can each have their shuriken pistol replaced with 1 fusion pistol"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "75"
        },
        {
          "models": "6",
          "cost": "90"
        },
        {
          "models": "11",
          "cost": "165"
        },
        {
          "models": "12",
          "cost": "180"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Harlequin Assault",
            "description": "Each time this unit makes a Charge move, until the end of the turn, each time a model in this unit makes a melee attack, add 1 to the Wound roll."
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
          "m": "8\"",
          "t": "3",
          "sv": "6+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "Troupe"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Fusion pistol",
              "keywords": ["assault", "melta 2", "pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-4",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Neuro disruptor",
              "keywords": ["anti-infantry 2+", "assault", "pistol"],
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
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Aeldari power sword",
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
              "name": "Harlequin’s blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Harlequin’s special weapon",
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
      "keywords": ["Infantry", "Grenades", "Harlequins", "Troupe"],
      "factions": ["Aeldari"],
      "ledBy": ["Shadowseer", "The Visarch"]
    },
    {
      "id": "058d7578-2cb1-5b5e-bc57-f17c171ea9f0",
      "name": "Troupe Master",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Troupe Master"],
      "loadout": "This model is equipped with: shuriken pistol; Troupe Master’s blade.",
      "wargear": [
        "This model’s shuriken pistol can be replaced with one of the following: ◦ 1 fusion pistol ◦ 1 neuro disruptor",
        "This model’s Troupe Master’s blade can be replaced with 1 Harlequin’s special weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "55"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Choreographer of War",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability."
          },
          {
            "name": "Cegorach’s Favour",
            "description": "Once per turn, when you use a Fate dice to substitute a Hit roll, a Wound roll or a saving throw made for this model, you can first change the result of that Fate dice to a 6."
          }
        ],
        "special": [
          {
            "name": "TROUPE MASTER",
            "description": "If this model is your Warlord, Troupe units from your army have the Battleline keyword."
          }
        ],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "3",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Troupe Master"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Fusion pistol",
              "keywords": ["assault", "melta 2", "pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "8",
              "ap": "-4",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Neuro disruptor",
              "keywords": ["anti-infantry 2+", "assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Harlequin’s special weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Troupe Master’s blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Harlequins",
        "Troupe Master"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "587ed562-f847-58b6-9366-8e9245b9ac6f",
      "name": "Voidweaver",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Voidweaver"],
      "loadout": "This model is equipped with: 2 shuriken cannons; Voidweaver haywire cannon; close combat weapon.",
      "wargear": [
        "This model’s Voidweaver haywire cannon can be replaced with 1 prismatic cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Devastating Assault",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test."
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
          "m": "14\"",
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Voidweaver"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Prismatic cannon – dispersed pulse",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Prismatic cannon – focused lances",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "4"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Voidweaver haywire cannon",
              "keywords": ["anti-vehicle 4+", "devastating wounds"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "3"
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
              "attacks": "4",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Smoke", "Harlequins", "Voidweaver"],
      "factions": ["Aeldari"]
    },
    {
      "id": "303e56a0-4c0f-50c9-bfa4-e57d30bf2b0a",
      "name": "Vypers",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Vyper"],
      "loadout": "This model is equipped with: shuriken cannon; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "Any number of models can each have their shuriken cannon replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Harassment Fire",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover."
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
          "m": "14\"",
          "t": "6",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Vypers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Vypers"],
      "factions": ["Aeldari"]
    },
    {
      "id": "91d66514-b08f-545c-ab78-e48c999d8e90",
      "name": "War Walkers",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 War Walker"],
      "loadout": "This model is equipped with: 2 shuriken cannons; War Walker feet.",
      "wargear": [
        "Each model can have each shuriken cannon it is equipped with replaced with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "95"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 9\""],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Power Field",
            "description": "Each time a ranged attack targets this unit, subtract 1 from the Wound roll."
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
          "m": "10\"",
          "t": "7",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "War Walkers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "War Walker feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "War Walkers"],
      "factions": ["Aeldari"]
    },
    {
      "id": "c9393df2-5191-5d34-b260-5dbafbfa7deb",
      "name": "Warlock",
      "faction_id": "AE",
      "leader": "This model can be attached to the following units: ■ Guardian Defenders ■ Storm Guardians You can attach this model to one of the above units, even if one other Leader unit (excluding Warlock units) has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Warlock"],
      "loadout": "This model is equipped with: Destructor; shuriken pistol; witchblade.",
      "wargear": [
        "This model’s witchblade can be replaced with 1 singing spear."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "45"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Runes of Fortune (Psychic)",
            "description": "In your Command phase, select one of the following to take effect until the start of your next Command phase: ■  Quicken: Each time this model’s unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in that unit. ■  Restrain: Each time an enemy unit declares a charge, if this model’s unit is selected as a target of that charge, subtract 2 from the Charge roll. The same enemy unit can only be affected in this way once per phase."
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
          "t": "3",
          "sv": "6+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Warlock"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Destructor",
              "keywords": ["psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Singing spear",
              "keywords": ["assault", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Psyker", "Warlock"],
      "factions": ["Aeldari"]
    },
    {
      "id": "9a4c27e9-42d1-5228-8f74-43a7871b709e",
      "name": "Warlock Conclave",
      "faction_id": "AE",
      "leader": "",
      "composition": ["2-4 Warlocks"],
      "loadout": "Every model is equipped with: Destructor; shuriken pistol; witchblade.",
      "wargear": [
        "Any number of models can each have their witchblade replaced with 1 singing spear."
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "60"
        },
        {
          "models": "4",
          "cost": "120"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Protect (Psychic)",
            "description": "While a Farseer model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll."
          },
          {
            "name": "Warlock Conclave",
            "description": "Models in this unit have the Feel No Pain 4+ ability against Psychic Attacks."
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
          "t": "3",
          "sv": "6+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Warlock Conclave"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Destructor",
              "keywords": ["psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Singing spear",
              "keywords": ["psychic", "assault"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Psyker", "Warlocks", "Warlock Conclave"],
      "factions": ["Aeldari"],
      "ledBy": ["Eldrad Ulthran", "Farseer"]
    },
    {
      "id": "60c8afc3-c477-588d-9d8e-829c6f110d4b",
      "name": "Warlock Skyrunner",
      "faction_id": "AE",
      "leader": "This model can be attached to the following unit: ■ Windriders You can attach this unit to the above unit, even if one other Leader unit (excluding Warlock units) has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Warlock Skyrunner"],
      "loadout": "This model is equipped with: Destructor; shuriken pistol; twin shuriken catapult; witchblade.",
      "wargear": [
        "This model’s witchblade can be replaced with 1 singing spear."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "55"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Leader", "Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Runes of Battle (Psychic)",
            "description": "In your Command phase, select one of the following to take effect until the start of your next Command phase: ■  Conceal: Models in this model’s unit have the Stealth ability. ■  Reveal: Ranged weapons equipped by models in this model’s unit have the [IGNORES COVER] ability."
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
          "m": "14\"",
          "t": "4",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Warlock Skyrunner"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Destructor",
              "keywords": ["psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Singing spear",
              "keywords": ["assault", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Fly",
        "Psyker",
        "Warlock",
        "Warlock Skyrunner"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "83cb9507-f3bb-598b-8eed-8672a2ef2f13",
      "name": "Warlock Skyrunner Conclave",
      "faction_id": "AE",
      "leader": "",
      "composition": ["2-3 Warlock Skyrunners"],
      "loadout": "Every model is equipped with: Destructor; shuriken pistol; twin shuriken catapult; witchblade.",
      "wargear": [
        "Any number of models can each have their witchblade replaced with 1 singing spear."
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "100"
        },
        {
          "models": "3",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Protect (Psychic)",
            "description": "While a Farseer model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll."
          },
          {
            "name": "Warlock Conclave",
            "description": "Models in this unit have the Feel No Pain 4+ ability against Psychic Attacks."
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
          "m": "14\"",
          "t": "4",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Warlock Skyrunner Conclave"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Destructor",
              "keywords": ["psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken pistol",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Singing spear",
              "keywords": ["assault", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Singing spear",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Witchblade",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Fly",
        "Psyker",
        "Warlocks",
        "Warlock Skyrunner Conclave"
      ],
      "factions": ["Aeldari"],
      "ledBy": ["Farseer Skyrunner"]
    },
    {
      "id": "b0c7ed8d-7e1f-516a-b729-3d124ff20265",
      "name": "Warp Hunter",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Warp Hunter"],
      "loadout": "This model is equipped with: D-flail; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "130"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Devastating Assault",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-4 WOUNDS REMAINING",
          "description": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "Warp Hunter"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "D-flail – blast",
              "keywords": ["blast", "devastating wounds"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "12",
              "ap": "-4",
              "damage": "3"
            },
            {
              "name": "D-flail – rift",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D3",
              "skill": "N/A",
              "strength": "12",
              "ap": "-4",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "3",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Warp Hunter"],
      "factions": ["Aeldari"]
    },
    {
      "id": "2e5ac6c6-6fa1-5004-b268-249397354dd6",
      "name": "Warp Spiders",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Warp Spider Exarch", "4-9 Warp Spiders"],
      "loadout": "Every model is equipped with: death spinner; close combat weapon.",
      "wargear": [
        "The Warp Spider Exarch can be equipped with 1 additional death spinner and 1 powerblades."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "100"
        },
        {
          "models": "10",
          "cost": "200"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Flickerjump",
            "description": "In your Movement phase, when this unit makes a Normal move, it can make a flickerjump. If it does, until the end of the phase, its Move characteristic is changed to 24\" but you must roll one D6 after this unit ends that move: on a 1, this unit suffers 1 mortal wound. This unit is not eligible to declare a charge in the same turn in which it makes a flickerjump."
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
          "m": "12\"",
          "t": "3",
          "sv": "3+",
          "w": "1",
          "ld": "6+",
          "oc": "1",
          "name": "WARP SPIDER"
        },
        {
          "m": "12\"",
          "t": "3",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "WARP SPIDER EXARCH"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Death spinner",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Powerblades",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Jump Pack", "Fly", "Warp Spiders"],
      "factions": ["Aeldari"]
    },
    {
      "id": "09b47c07-47b5-53d3-8758-9a4705bbb61a",
      "name": "Wave Serpent",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Wave Serpent"],
      "loadout": "This model is equipped with: twin shuriken cannon; twin shuriken catapult; wraithbone hull.",
      "wargear": [
        "This model’s twin shuriken cannon can be replaced with one of the following: ◦ 1 twin Aeldari missile launcher ◦ 1 twin bright lance ◦ 1 twin scatter laser ◦ 1 twin starcannon",
        "This model’s twin shuriken catapult can be replaced with 1 shuriken cannon."
      ],
      "transport": "This model has a transport capacity of 12 Aeldari Infantry models. Each Wraith Construct model takes the space of 2 models. It cannot transport Jump Pack models.",
      "points": [
        {
          "models": "1",
          "cost": "120"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Wave Serpent Shield",
            "description": "Once per battle, you can select one enemy unit that is within 12\" of and visible to this model and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds and must take a Battle-shock test."
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
          "m": "14\"",
          "t": "9",
          "sv": "3+",
          "w": "13",
          "ld": "6+",
          "oc": "2",
          "name": "Wave Serpent"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Twin Aeldari missile launcher – starshot",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Twin Aeldari missile launcher – sunburst",
              "keywords": ["blast", "twin-linked"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin bright lance",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin scatter laser",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin shuriken cannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "24\"",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin starcannon",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Wraithbone hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Dedicated Transport",
        "Fly",
        "Wave Serpent"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "e92afdeb-bee6-5c0a-bfc5-453ab2f9baa8",
      "name": "Windriders",
      "faction_id": "AE",
      "leader": "",
      "composition": ["3-9 Windriders"],
      "loadout": "Every model is equipped with: twin shuriken catapult; close combat weapon.",
      "wargear": [
        "Any number of models can each have their twin shuriken catapult replaced with one of the following: ◦ 1 scatter laser ◦ 1 shuriken cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "80"
        },
        {
          "models": "6",
          "cost": "160"
        },
        {
          "models": "9",
          "cost": "240"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Swift Demise",
            "description": "Each time a model in this unit makes a ranged attack that targets the closest eligible target, re-roll a Hit roll of 1. If the target of that attack is within range of an objective marker your opponent controls, you can re-roll the Hit roll instead."
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
          "m": "14\"",
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "Windriders"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Twin shuriken catapult",
              "keywords": ["assault", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Fly", "Windriders"],
      "factions": ["Aeldari"],
      "ledBy": ["Autarch Skyrunner", "Farseer Skyrunner", "Warlock Skyrunner"]
    },
    {
      "id": "9c9af29d-b7a3-5de1-8ff6-41a86a998ca7",
      "name": "Wraithblades",
      "faction_id": "AE",
      "leader": "",
      "composition": ["5-10 Wraithblades"],
      "loadout": "Every model is equipped with: ghostswords.",
      "wargear": [
        "All of the models in this unit can each have their ghostswords replaced with 1 ghostaxe and 1 forceshield."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "170"
        },
        {
          "models": "10",
          "cost": "340"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Forceshield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Malevolent Souls",
            "description": "Each time a model in this unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play."
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
          "t": "7",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Wraithblades"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Ghostaxe",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Ghostswords",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Wraith Construct", "Wraithblades"],
      "factions": ["Aeldari"],
      "ledBy": ["Spiritseer"]
    },
    {
      "id": "527e915f-9575-5968-99bf-04dae1d145d0",
      "name": "Wraithguard",
      "faction_id": "AE",
      "leader": "",
      "composition": ["5-10 Wraithguard"],
      "loadout": "Every model is equipped with: wraithcannon; close combat weapon.",
      "wargear": [
        "All of the models in this unit can each have their wraithcannon replaced with 1 D-scythe."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "155"
        },
        {
          "models": "10",
          "cost": "310"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "War Construct",
            "description": "Once per battle round, when an enemy unit targets this unit, after that unit has finished making its attacks, this unit can shoot as if it were your Shooting phase. When doing so, this unit’s ranged weapons have the [PISTOL] ability."
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
          "t": "7",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Wraithguard"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Wraithcannon",
              "keywords": ["devastating wounds"],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "D-scythe",
              "keywords": [],
              "range": "12\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "10",
              "ap": "-4",
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
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Wraith Construct", "Wraithguard"],
      "factions": ["Aeldari"],
      "ledBy": ["Spiritseer"]
    },
    {
      "id": "fd526d7e-34b9-517a-bab1-b7baa1e1c1e4",
      "name": "Wraithknight",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Wraithknight"],
      "loadout": "This model is equipped with: titanic ghostglaive; titanic feet; scattershield.",
      "wargear": [
        "This model’s titanic ghostglaive can be replaced with one of the following: ◦ 1 heavy wraithcannon ◦ 1 suncannon",
        "This model’s scattershield can be replaced with 1 heavy wraithcannon.",
        "This model can be equipped with up to two of the following: ◦ 1 scatter laser ◦ 1 shuriken cannon ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "370"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Scattershield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": ["Deadly Demise D6"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Agile",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over other models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there."
          },
          {
            "name": "Wraithbone Form",
            "description": "Each time an attack is allocated to this model, subtract 1 from that attack’s Damage characteristic."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "2+",
          "w": "18",
          "ld": "6+",
          "oc": "10",
          "name": "Wraithknight"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy wraithcannon",
              "keywords": ["blast", "devastating wounds"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "20",
              "ap": "-4",
              "damage": "2D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Suncannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Titanic feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Titanic ghostglaive – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "16",
              "ap": "-3",
              "damage": "6"
            },
            {
              "name": "Titanic ghostglaive – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "15",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Towering",
        "Walker",
        "Wraith Construct",
        "Wraithknight"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "97d00630-43f0-5063-9c3b-a23f407385bf",
      "name": "Wraithlord",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Wraithlord"],
      "loadout": "This model is equipped with: 2 shuriken catapults; wraithbone fists.",
      "wargear": [
        "Each of this model’s shuriken catapults can be replaced with 1 Aeldari flamer.",
        "This model can be equipped with 1 ghostglaive.",
        "This model can be equipped with up to two of the following: ◦  1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 shuriken cannon ◦ 1 starcannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Fated Hero",
            "description": "Each time this model destroys an enemy unit, roll one D6 and add it to your Fate dice pool displaying the result you just rolled."
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
          "m": "8\"",
          "t": "11",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Wraithlord"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Aeldari flamer",
              "keywords": ["assault", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken catapult",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Ghostglaive – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6+1"
            },
            {
              "name": "Ghostglaive – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Wraithbone fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Walker", "Wraith Construct", "Wraithlord"],
      "factions": ["Aeldari"],
      "ledBy": ["Spiritseer"]
    },
    {
      "id": "63e5a52c-23e4-54df-ac74-250e04a3f859",
      "name": "Wraithseer",
      "faction_id": "AE",
      "leader": "",
      "composition": ["1 Wraithseer"],
      "loadout": "This model is equipped with: destructor; ghostspear. SPIRIT BOND If a Spiritseer model from your army with the Leader ability can be attached to a Wraithlord, it can be attached to this unit instead.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 Aeldari missile launcher ◦ 1 bright lance ◦ 1 scatter laser ◦ 1 shuriken cannon ◦ 1 starcannon ◦ 1 Wraithseer D-cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Horrify (Psychic)",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That enemy unit must take a Battle-shock test."
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
          "m": "8\"",
          "t": "11",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Wraithseer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Aeldari missile launcher – starshot",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Aeldari missile launcher – sunburst",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Bright lance",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Destructor",
              "keywords": ["psychic", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Scatter laser",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shuriken cannon",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Starcannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Wraithseer D-cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "14",
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
              "name": "Ghostspear – strike",
              "keywords": ["anti-infantry 2+", "precision", "psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            },
            {
              "name": "Ghostspear – sweep",
              "keywords": ["anti-infantry 2+", "psychic"],
              "range": "Melee",
              "attacks": "12",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Psyker",
        "Walker",
        "Wraith Construct",
        "Wraithseer"
      ],
      "factions": ["Aeldari"]
    },
    {
      "id": "4fe3eb62-3ab8-50a4-bbbc-2886a6cef808",
      "name": "Yvraine",
      "faction_id": "AE",
      "leader": "This model can be attached to the following units: ■ Corsair Voidscarred ■ Corsair Voidreavers ■ Guardian Defenders ■ Kabalite Warriors (see Drukhari) ■ Storm Guardians ■ Troupe ■ Wyches (see Drukhari)",
      "composition": ["1 Yvraine – Epic Hero"],
      "loadout": "This model is equipped with: Storm of Whispers; Kha-vir, the Sword of Sorrows.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "100"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Strands of Fate"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Herald of Ynnead",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability."
          },
          {
            "name": "Word of the Phoenix (Psychic)",
            "description": "While this model is leading a unit, in your Command phase, you can roll one D6: on a 2+, D3 destroyed Bodyguard models are returned to that unit."
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
          "m": "8\"",
          "t": "3",
          "sv": "6+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Yvraine"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Storm of Whispers",
              "keywords": ["anti-infantry 2+", "devastating wounds", "psychic"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "2+",
              "strength": "2",
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
              "name": "Kha-vir, the Sword of Sorrows",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Ynnari",
        "Psyker",
        "Yvraine"
      ],
      "factions": ["Aeldari"]
    }
  ],
  "colours": {
    "banner": "#0a353a",
    "header": "#347379"
  }
}
