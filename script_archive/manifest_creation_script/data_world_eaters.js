window.data = window.data || {};
window.data.WE = {
  "id": "WE",
  "link": "https://game-datacards.eu",
  "name": "World Eaters",
  "is_subfaction": false,
  "parent_id": "",
  "enhancements": [
    {
      "name": "Battle-lust",
      "description": " World Eaters model only. You can select the bearer’s unit for the Heroic Intervention Stratagem for  0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.",
      "keywords": ["World Eaters"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Berzerker Glaive",
      "description": "World Eaters model only. Add 1 to the Attacks and Damage characteristics of melee weapons equipped by the bearer. Each time the bearer ends a Charge move, roll one D3; until the end of the turn, add the result of that roll to the Attacks and Damage characteristics of those melee weapons instead.",
      "keywords": ["World Eaters"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "Favoured of Khorne",
      "description": "World Eaters model only. Each time you make a Blessings of Khorne roll, before doing anything else, the bearer can use this Enhancement. If it does, discard all of the dice from that roll and make a new Blessings of Khorne roll. This new roll does not count as a re-roll, so any rules that enable you to re-roll or manipulate individual dice (e.g. Icon of Khorne) can still be used.",
      "keywords": ["World Eaters"],
      "excludes": [],
      "cost": "30"
    },
    {
      "name": "Helm of Brazen Ire",
      "description": "World Eaters model only. Each time an attack  is allocated to the bearer, halve the Damage characteristic of that attack.",
      "keywords": ["World Eaters"],
      "excludes": [],
      "cost": "25"
    }
  ],
  "datasheets": [
    {
      "id": "39a6eb68-07ea-563e-a629-bd72b89b4dc7",
      "name": "Angron",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 Angron – Epic Hero"],
      "loadout": "This model is equipped with: Samni’arius and Spinegrinder.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "415"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Deep Strike"],
        "faction": ["Blessings of Khorne"],
        "primarch": [
          {
            "name": "WRATHFUL PRESENCE",
            "abilities": [
              {
                "name": "Glorious Bloodletting (Aura)",
                "description": "While a friendly World Eaters unit is within 6\" of this model, each time a Charge roll is made for that unit, add 1 to the roll."
              },
              {
                "name": "Infectious Rage (Aura)",
                "description": "While a friendly World Eaters unit that is below its Starting Strength is within 6\" of this model, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit. For the purposes of this ability, if a unit has a Starting Strength of 1, it is considered to be below its Starting Strength while it has lost one or more wounds."
              },
              {
                "name": "Righteous Slaughter (Aura)",
                "description": "While a friendly World Eaters unit is within 6\" of this model, each time a model in that unit makes an attack, you can re-roll the Hit roll."
              }
            ]
          }
        ],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Reborn in Blood",
            "description": "Each time you make a Blessings of Khorne roll, if this model is destroyed, you can use a triple 6 from that roll to use this ability. If you do, this model is no longer destroyed and is placed into Reserves with its full wounds remaining."
          },
          {
            "name": "Wrathful Presence",
            "description": "At the start of your Charge phase, select one Wrathful Presence ability (see left). Until the start of your next Charge phase, this model has that ability."
          }
        ],
        "special": [
          {
            "name": "SUPREME COMMANDER",
            "description": "If this model is in your army, it must be your Warlord."
          }
        ],
        "damaged": {
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "11",
          "sv": "2+",
          "w": "16",
          "ld": "5+",
          "oc": "6",
          "name": "Angron"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Samni’arius and Spinegrinder – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+2"
            },
            {
              "name": "Samni’arius and Spinegrinder – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "18",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Fly",
        "Character",
        "Epic Hero",
        "Chaos",
        "Khorne",
        "Daemon",
        "Primarch",
        "Angron"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "cfa88513-93d0-5a70-b068-6059ecc48138",
      "name": "Eightbound",
      "faction_id": "WE",
      "leader": "",
      "composition": [
        "1 Eightbound Champion",
        "2-5 Eightbound The Eightbound Champion model is equipped with: lacerators."
      ],
      "loadout": "Every Eightbound model is equipped with: Eightbound eviscerators.",
      "wargear": [
        "The Eightbound Champion’s lacerators can be replaced with 1 heavy chainglaive."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "155"
        },
        {
          "models": "6",
          "cost": "310"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 6\""],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Beacons of Rage (Aura)",
            "description": "While a friendly World Eaters unit is within 6\" of this unit, each time a model in that unit makes a melee attack, re-roll a Wound roll of 1. If that attack targets a unit that is Below Half-strength, you can re-roll the Wound roll instead."
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
          "t": "6",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Eightbound"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Eightbound eviscerators",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Heavy chainglaive",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "7",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Lacerators",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Chaos", "Khorne", "Daemon", "Eightbound"],
      "factions": ["World Eaters"],
      "ledBy": ["Lord Invocatus", "World Eaters Lord On Juggernaut"]
    },
    {
      "id": "d9e28d2d-c9cf-57ee-8343-7dc622678ab4",
      "name": "Exalted Eightbound",
      "faction_id": "WE",
      "leader": "",
      "composition": [
        "1 Exalted Eightbound Champion",
        "2-5 Exalted Eightbound"
      ],
      "loadout": "Every model is equipped with: Eightbound eviscerator; Eightbound chainfist.",
      "wargear": [
        "The Exalted Eightbound Champion’s Eightbound eviscerator and Eightbound chainfist can be replaced with one of the following: ◦ 1 paired Eightbound chainfists ◦ 1 heavy chainglaive"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "180"
        },
        {
          "models": "6",
          "cost": "360"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Feel No Pain 6+"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Overwhelming Wrath (Aura)",
            "description": "Each time an enemy unit within 6\" of this unit is selected to Fall Back, that unit must take a Leadership test. If that test is failed, that unit must Remain Stationary this phase instead."
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
          "t": "6",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Exalted Eightbound"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Eightbound chainfist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Eightbound eviscerator",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Heavy chainglaive",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Paired Eightbound chainfists",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Chaos",
        "Khorne",
        "Daemon",
        "Exalted Eightbound"
      ],
      "factions": ["World Eaters"],
      "ledBy": ["Lord Invocatus", "World Eaters Lord On Juggernaut"]
    },
    {
      "id": "d03e0726-20ac-5498-99ac-6732e375a337",
      "name": "Jakhals",
      "faction_id": "WE",
      "leader": "",
      "composition": [
        "1 Jakhal Pack Leader, 1 Dishonoured and 8 Jakhals or:",
        "1 Jakhal Pack Leader, 2 Dishonoured and 17 Jakhals"
      ],
      "loadout": "The Jakhal Pack Leader and every Jakhal is equipped with: autopistol; Jakhal chainblades. Every Dishonoured is equipped with: Dishonoured chainblades.",
      "wargear": [
        "For every 10 models in this unit, 1 Jakhal’s Jakhal chainblades can be replaced with 1 mauler chainblade.",
        "Any number of Dishonoured models can each have their Dishonoured chainblades replaced with 1 skullsmasher.",
        "For every 10 models in this unit, 1 Jakhal can be equipped with 1 icon of Khorne."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "75"
        },
        {
          "models": "20",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Icon of Khorne",
            "description": "Each time you make a Blessings of Khorne roll, if the bearer’s unit is within range of an objective marker you control, you can re-roll one of the dice."
          }
        ],
        "core": ["Feel No Pain 6+"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Objective Ravaged",
            "description": "At the end of your Command phase, if this unit is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn."
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
          "sv": "6+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Jakhals"
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
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Jakhal chainblades",
              "keywords": ["sustained hits 1"],
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
              "name": "Dishonoured chainblades",
              "keywords": ["sustained hits 1"],
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
              "name": "Mauler chainblade",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Skullsmasher",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Battleline", "Chaos", "Khorne", "Jakhals"],
      "factions": ["World Eaters"]
    },
    {
      "id": "a0490c2c-9890-57f4-b242-bb089d42bd3a",
      "name": "Khârn The Betrayer",
      "faction_id": "WE",
      "leader": "This model can be attached to the following unit: ■ Khorne Berzerkers",
      "composition": ["1 Khârn the Betrayer – Epic Hero"],
      "loadout": "This model is equipped with: Khârn’s plasma pistol; Gorechild.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "95"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Legendary Killer",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1."
          },
          {
            "name": "The Betrayer",
            "description": "At the end of your Charge phase, if this model is leading a unit and that unit is not within Engagement Range of one or more enemy units, you must take a Leadership test for this model. If that test is failed, one Bodyguard model of your choice in that unit is destroyed."
          },
          {
            "name": "Berzerker Frenzy",
            "description": "If this model is destroyed by a melee attack, if it has not fought this phase, do not remove it from play. It can fight after the attacking model’s unit has finished making its attacks, and is then removed from play."
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
          "t": "4",
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Khârn The Betrayer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Khârn’s plasma pistol",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Gorechild",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Grenades",
        "Chaos",
        "Khorne",
        "Khârn the Betrayer"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "c7cdcaef-03ab-5051-ac97-17286d4bcb34",
      "name": "Khorne Berzerkers",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 Khorne Berzerker Champion", "4-9 Khorne Berzerkers"],
      "loadout": "Every model is equipped with: bolt pistol; Berzerker chainblade.",
      "wargear": [
        "The Khorne Berzerker Champion’s bolt pistol can be replaced with 1 plasma pistol.",
        "For every 5 models in this unit, 1 Khorne Berzerker’s bolt pistol can be replaced with 1 plasma pistol.",
        "For every 5 models in this unit, 1 Khorne Berzerker’s Berzerker chainblade can be replaced with 1 Khornate eviscerator.",
        "1 model can be equipped with 1 icon of Khorne."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "115"
        },
        {
          "models": "10",
          "cost": "230"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Icon of Khorne",
            "description": "Each time you make a Blessings of Khorne roll, if the bearer’s unit is within range of an objective marker you control, you can re-roll one of the dice."
          }
        ],
        "core": [],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Blood Surge",
            "description": "Each time an enemy unit is selected to shoot, after that unit has finished making its attacks, if any models from this unit were destroyed as a result of those attacks, this unit can make a Blood Surge move. To do so, roll one D6: this unit can be moved a number of inches up to the result, but this unit must finish that move as close as possible to the closest enemy unit (excluding Aircraft). When doing so, those models can be moved within Engagement Range of that enemy unit. A unit cannot make a Blood Surge move while it is Battle-shocked."
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
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "Khorne Berzerkers"
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Berzerker chainblade",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Khornate eviscerator",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Grenades",
        "Chaos",
        "Khorne",
        "Berzerkers"
      ],
      "factions": ["World Eaters"],
      "ledBy": [
        "Khârn The Betrayer",
        "Lord Invocatus",
        "World Eaters Lord On Juggernaut",
        "World Eaters Master Of Executions"
      ]
    },
    {
      "id": "76e4a353-b80c-5294-a3aa-df5a9c382696",
      "name": "Khorne Lord Of Skulls",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 Khorne Lord of Skulls"],
      "loadout": "This model is equipped with: gorestorm cannon; Hades gatling cannon; great cleaver of Khorne.",
      "wargear": [
        "This model’s gorestorm cannon can be replaced with one of the following: ◦ 1 daemongore cannon ◦ 1 ichor cannon",
        "This model’s Hades gatling cannon can be replaced with 1 skullhurler."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "420"
        },
        {
          "models": "1",
          "cost": "420"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Blessed Slaughter",
            "description": "Each time you make a Blessings of Khorne roll, for each enemy unit destroyed by this model in the previous battle round, you can add 1 to or subtract 1 from one of the dice rolled (each dice can only be modified in this way once, and a dice cannot be modified below 1 or above 6)."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "13",
          "sv": "3+",
          "w": "24",
          "ld": "6+",
          "oc": "8",
          "name": "Khorne Lord Of Skulls"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Daemongore cannon",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Gorestorm cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Hades gatling cannon",
              "keywords": ["sustained hits 1"],
              "range": "48\"",
              "attacks": "12",
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
              "name": "Ichor cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "2D6",
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
              "name": "Skullhurler",
              "keywords": [],
              "range": "60\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "14",
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
              "name": "Great cleaver of Khorne – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "8"
            },
            {
              "name": "Great cleaver of Khorne – sweep",
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
        "Vehicle",
        "Titanic",
        "Towering",
        "Chaos",
        "Khorne",
        "Daemon",
        "Lord of Skulls"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "bfeb3ccf-b548-5794-91ea-ef93e2b96063",
      "name": "Lord Invocatus",
      "faction_id": "WE",
      "leader": "This model can be attached to the following units: ■ Eightbound ■ Exalted Eightbound ■ Khorne Berzerkers",
      "composition": ["1 Lord Invocatus – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Coward’s Bane, Juggernaut’s bladed horn.",
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
        "core": ["Leader", "Scouts 6\""],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Counter-attacks",
            "description": "While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Fell Back."
          },
          {
            "name": "Road of Eight Bloody Steps",
            "description": "At the start of the battle, before any moves are made using the Scouts ability, you can select up to two friendly World Eaters Infantry units within 6\" of this model that do not have the Scouts ability. Until the end of the battle, all models in the selected units have the Scouts 6\" ability."
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
          "t": "6",
          "sv": "2+",
          "w": "8",
          "ld": "6+",
          "oc": "2",
          "name": "Lord Invocatus"
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
              "name": "Coward’s Bane",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Juggernaut’s bladed horn",
              "keywords": ["extra attacks", "lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Epic Hero",
        "Grenades",
        "Chaos",
        "Khorne",
        "Lord Invocatus"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "81be3c7a-4460-500f-ad9f-ac91d21f2fb2",
      "name": "World Eaters Chaos Spawn",
      "faction_id": "WE",
      "leader": "",
      "composition": ["2 Chaos Spawn"],
      "loadout": "Every model is equipped with: hideous mutations.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "65"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Regenerating Monstrosities",
            "description": "At the start of each player’s Command phase, one model in this unit regains up to D3 lost wounds."
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
          "t": "5",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "World Eaters Chaos Spawn"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Hideous mutations",
              "keywords": [],
              "range": "Melee",
              "attacks": "D6+2",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Beast", "Chaos", "Khorne", "Spawn"],
      "factions": ["World Eaters"]
    },
    {
      "id": "4fbc3727-5371-588b-a09e-a5b2b7661d60",
      "name": "World Eaters Daemon Prince",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Daemon Prince"],
      "loadout": "This model is equipped with: infernal cannon; hellforged weapons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "220"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Infernal Fortitude (Aura)",
            "description": "While a friendly World Eaters Infantry unit is within 6\" of this model, models in that unit have a 4+ invulnerable save."
          },
          {
            "name": "Devastating Assault",
            "description": "Each time this model makes a Charge move, until the end of the turn, its hellforged weapons have the [DEVASTATING WOUNDS] ability."
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
          "t": "10",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "World Eaters Daemon Prince"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Infernal cannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Hellforged weapons – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            },
            {
              "name": "Hellforged weapons – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Chaos",
        "Khorne",
        "Daemon",
        "Daemon Prince"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "79872903-e82a-53fc-a479-118db50964c2",
      "name": "World Eaters Daemon Prince With Wings",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Daemon Prince with Wings"],
      "loadout": "This model is equipped with: infernal cannon; hellforged weapons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "215"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Bloodied Terror",
            "description": "At the start of the Fight phase, each enemy unit within Engagement Range of this model must take a Battle-shock test."
          },
          {
            "name": "Oath to Khorne",
            "description": "At the start of the battle, select one unit from your opponent’s army to be this model’s sworn foe. Each time this model makes an attack that targets that sworn foe, you can re-roll the Hit roll and you can re-roll the Wound roll. If, at the end of the battle, that sworn foe has not been destroyed, this model is destroyed."
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
          "t": "9",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "World Eaters Daemon Prince With Wings"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Infernal cannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Hellforged weapons – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            },
            {
              "name": "Hellforged weapons – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "14",
              "skill": "2+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Fly",
        "Chaos",
        "Khorne",
        "Daemon",
        "Daemon Prince"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "0dd975a0-338d-5778-8dc3-dcd76b0beca7",
      "name": "World Eaters Defiler",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Defiler"],
      "loadout": "This model is equipped with: Defiler cannon; reaper autocannon; twin heavy flamer; Defiler claws.",
      "wargear": [
        "This model’s twin heavy flamer can be replaced with one of the following: ◦ 1 havoc launcher ◦ 1 Defiler scourge",
        "This model’s reaper autocannon can be replaced with one of the following: ◦ 1 twin heavy bolter ◦ 1 twin lascannon",
        "This model can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 combi-weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "210"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Scuttling Walker",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can be moved over friendly Monster and Vehicle models as if they were not there. This model can move over terrain features that are 4\" or less in height as if they were not there."
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
          "m": "8\"",
          "t": "10",
          "sv": "3+",
          "w": "14",
          "ld": "6+",
          "oc": "5",
          "name": "World Eaters Defiler"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Defiler cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "10",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Reaper autocannon",
              "keywords": ["devastating wounds", "sustained hits 1"],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Twin heavy flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
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
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Defiler claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "16",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Defiler scourge",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "12",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Smoke",
        "Chaos",
        "Khorne",
        "Daemon",
        "Defiler"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "cec61990-041e-5754-b96f-4d81dae02134",
      "name": "World Eaters Forgefiend",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Forgefiend"],
      "loadout": "This model is equipped with: 2 Hades autocannons; 1 Forgefiend jaws.",
      "wargear": [
        "This model’s 2 Hades autocannons can be replaced with 2 ectoplasma cannons.",
        "This model’s Forgefiend jaws can be replaced with 1 ectoplasma cannon and 1 Forgefiend claws."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Furious Onslaught",
            "description": "In your Shooting phase, after this model has finished making its attacks, if one or more of those attacks scored a hit against an enemy Infantry unit, that Infantry unit must take a Battle-shock test."
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
          "m": "8\"",
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "World Eaters Forgefiend"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Ectoplasma cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Hades autocannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Forgefiend claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Forgefiend jaws",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "7",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Chaos",
        "Khorne",
        "Daemon",
        "Forgefiend"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "25ede58e-24b8-5b41-89f5-cf37dd296364",
      "name": "World Eaters Helbrute",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Helbrute"],
      "loadout": "This model is equipped with: missile launcher; multi-melta; close combat weapon.",
      "wargear": [
        "This model’s multi-melta can be replaced with one of the following: ◦ 1 Helbrute plasma cannon ◦ 1 twin autocannon ◦ 1 twin heavy bolter ◦ 1 twin lascannon ◦ 1 Helbrute fist",
        "This model’s missile launcher can be replaced with one of the following: ◦ 1 Helbrute fist ◦ 1 Helbrute hammer ◦ 1 power scourge",
        "For each Helbrute fist this model is equipped with, it can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 heavy flamer"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Frenzy",
            "description": "Each time an enemy unit targets this model, after that unit has finished making its attacks, this model can either shoot as if it were your Shooting phase or fight as if it were the Fight phase."
          },
          {
            "name": "Helbrute Fists",
            "description": "If this model is equipped with two Helbrute fists, those weapons have the [TWIN-LINKED] ability."
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
          "t": "9",
          "sv": "2+",
          "w": "8",
          "ld": "6+",
          "oc": "3",
          "name": "World Eaters Helbrute"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Helbrute plasma cannon",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Missile launcher – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Twin autocannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
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
              "attacks": "5",
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
              "name": "Helbrute fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Helbrute hammer",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "4+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Power scourge",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Chaos", "Khorne", "Helbrute"],
      "factions": ["World Eaters"]
    },
    {
      "id": "b36b533e-f9ad-580d-8826-fd0cd3fd7819",
      "name": "World Eaters Heldrake",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Heldrake"],
      "loadout": "This model is equipped with: Hades autocannon; Heldrake claws.",
      "wargear": [
        "This model’s Hades autocannon can be replaced with 1 baleflamer."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "215"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Swooping Predator",
            "description": "Each time this model ends a Normal move, you can select one enemy unit that it moved over during that move and roll two D6: for each 4+, that enemy unit suffers D3 mortal wounds."
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
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "0",
          "name": "World Eaters Heldrake"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Baleflamer",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Hades autocannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Heldrake claws",
              "keywords": ["anti-fly 2+", "devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Chaos",
        "Khorne",
        "Daemon",
        "Heldrake"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "a592e52f-ae58-58d4-ba55-fb0611066f78",
      "name": "World Eaters Land Raider",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Land Raider"],
      "loadout": "This model is equipped with: 2 soulshatter lascannons; twin heavy bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 combi-weapon",
        "This model can be equipped with 1 havoc launcher."
      ],
      "transport": "This model has a transport capacity of 12 World Eaters Infantry models. Each Eightbound, Exalted Eightbound and Terminator model takes up the space of 2 models.",
      "points": [
        {
          "models": "1",
          "cost": "255"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Assault Ramp",
            "description": "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn."
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
          "w": "16",
          "ld": "6+",
          "oc": "5",
          "name": "World Eaters Land Raider"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Soulshatter lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Armoured tracks",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Smoke",
        "Chaos",
        "Khorne",
        "Land Raider"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "065b5f13-4615-577e-8b4f-f453b55d7309",
      "name": "World Eaters Lord On Juggernaut",
      "faction_id": "WE",
      "leader": "This model can be attached to the following units: ■ Eightbound ■ Exalted Eightbound ■ Khorne Berzerkers",
      "composition": ["1 World Eaters Lord on Juggernaut"],
      "loadout": "This model is equipped with: plasma pistol; exalted chainblade; Juggernaut’s bladed horn.",
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
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Aggressive Advance",
            "description": "While this model is leading a unit, you can re-roll any or all of the following rolls made for that unit: Advance rolls; Charge rolls; Blood Surge rolls (see Khorne Berzerkers)."
          },
          {
            "name": "Bloody Stampede",
            "description": "Each time this model’s unit ends a Charge move, select one enemy unit within Engagement Range of this model and roll one D6: on a 2-3, that enemy unit suffers 1 mortal wound; on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds."
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
          "t": "6",
          "sv": "2+",
          "w": "7",
          "ld": "6+",
          "oc": "2",
          "name": "World Eaters Lord On Juggernaut"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Exalted chainblade",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Juggernaut’s bladed horn",
              "keywords": ["extra attacks", "lance"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Grenades",
        "Chaos",
        "Khorne",
        "Lord on Juggernaut"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "4589dbe5-a6fc-5a57-b3e1-1cfc93921ecf",
      "name": "World Eaters Master Of Executions",
      "faction_id": "WE",
      "leader": "This model can be attached to the following unit: ■ Khorne Berzerkers",
      "composition": ["1 World Eaters Master of Executions"],
      "loadout": "This model is equipped with: bolt pistol; axe of dismemberment.",
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
        "core": ["Leader"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Trophy Taker",
            "description": "While this model is leading a unit, models in that unit have the Fights First ability."
          },
          {
            "name": "Murderous Swing",
            "description": "Each time this model makes a melee attack that targets a Character unit, you can re-roll the Hit roll and you can re-roll the Wound roll."
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
          "t": "4",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "World Eaters Master Of Executions"
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
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Axe of dismemberment",
              "keywords": ["devastating wounds", "precision"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Chaos",
        "Khorne",
        "Master of Executions"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "a2477841-2f7f-500d-be28-1242ed236ec9",
      "name": "World Eaters Maulerfiend",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Maulerfiend"],
      "loadout": "This model is equipped with: lasher tendrils; Maulerfiend fists.",
      "wargear": [
        "This model’s lasher tendrils can be replaced with 2 magma cutters."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "175"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "The Scent of Blood",
            "description": "Each time you make a Charge roll for this model, if one or more of the targets of that charge are below their Starting Strength, add 2 to that roll. Each time this model makes a melee attack that targets an enemy unit that is below its Starting Strength, add 1 to the Hit roll."
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
          "m": "10\"",
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "3",
          "name": "World Eaters Maulerfiend"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Magma cutter",
              "keywords": ["melta 2"],
              "range": "6\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
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
              "name": "Lasher tendrils",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Maulerfiend fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Chaos",
        "Khorne",
        "Daemon",
        "Maulerfiend"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "9fa76b7e-e47d-5a66-b616-a4642e705964",
      "name": "World Eaters Predator Annihilator",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Predator Annihilator"],
      "loadout": "This model is equipped with: Predator twin lascannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 lascannons",
        "This model can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 combi-weapon",
        "This model can be equipped with 1 havoc launcher."
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
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Annihilator",
            "description": "Each time this model makes a ranged attack that targets a Monster or Vehicle unit, re-roll a Damage roll of 1."
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
          "m": "10\"",
          "t": "10",
          "sv": "3+",
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "World Eaters Predator Annihilator"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "48\"",
              "attacks": "3",
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
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Predator twin lascannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Armoured tracks",
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
        "Smoke",
        "Chaos",
        "Khorne",
        "Predator Annihilator"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "c790af14-8da5-5f23-854a-5f42ce5920e1",
      "name": "World Eaters Predator Destructor",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Predator Destructor"],
      "loadout": "This model is equipped with: Predator autocannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 lascannons",
        "This model can be equipped with one of the following: ◦ 1 combi-bolter ◦ 1 combi-weapon",
        "This model can be equipped with 1 havoc launcher."
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
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Destructor",
            "description": "Each time a ranged attack made by this model targets an enemy Infantry unit, improve the Armour Penetration characteristic of that attack by 1."
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
          "m": "10\"",
          "t": "10",
          "sv": "3+",
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "World Eaters Predator Destructor"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
              "range": "48\"",
              "attacks": "3",
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
              "name": "Lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Predator autocannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "9",
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
              "name": "Armoured tracks",
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
        "Smoke",
        "Chaos",
        "Khorne",
        "Predator Destructor"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "1a5c5d9b-cba4-5366-ae9f-727f20c67411",
      "name": "World Eaters Rhino",
      "faction_id": "WE",
      "leader": "",
      "composition": ["1 World Eaters Rhino"],
      "loadout": "This model is equipped with: combi-bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 additional combi-bolter ◦ 1 combi-weapon",
        "This model can be equipped with 1 havoc launcher."
      ],
      "transport": "This model has a transport capacity of 12 World Eaters Infantry models. It cannot transport Eightbound or Terminator models.",
      "points": [
        {
          "models": "1",
          "cost": "85"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Self Repair",
            "description": "At the start of your Command phase, this model regains 1 lost wound."
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
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "6+",
          "oc": "2",
          "name": "World Eaters Rhino"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Havoc launcher",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
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
              "name": "Armoured tracks",
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
        "Smoke",
        "Chaos",
        "Khorne",
        "Rhino"
      ],
      "factions": ["World Eaters"]
    },
    {
      "id": "f15f19fc-0c00-51c2-aaf3-6951f8587d6c",
      "name": "World Eaters Terminator Squad",
      "faction_id": "WE",
      "leader": "",
      "composition": [
        "1 World Eaters Terminator Champion",
        "4-9 World Eaters Terminators"
      ],
      "loadout": "Every model is equipped with: combi-bolter; accursed weapon.",
      "wargear": [
        "For every 5 models in this unit, 1 World Eaters Terminator’s combi-bolter can be replaced with one of the following: ◦ 1 heavy flamer ◦ 1 reaper autocannon",
        "Any number of models can each have their combi-bolter replaced with 1 combi-weapon.",
        "For every 5 models in this unit, 1 model’s combi-bolter and accursed weapon can be replaced with 1 paired accursed weapons.",
        "For every 5 models in this unit, up to 3 models can each have their accursed weapon replaced with 1 power fist.",
        "For every 5 models in this unit, 1 model’s accursed weapon can be replaced with 1 chainfist."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "195"
        },
        {
          "models": "10",
          "cost": "390"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Blessings of Khorne"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Bloody Fury",
            "description": "Each time a model in this unit makes an attack, add 1 to the Hit roll if this unit is below its Starting Strength, and add 1 to the Wound roll as well if this unit is Below Half-strength."
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
          "t": "5",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "World Eaters Terminator Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Combi-bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Heavy flamer",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Reaper autocannon",
              "keywords": ["devastating wounds", "sustained hits 1"],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
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
              "name": "Accursed weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Paired accursed weapons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Chaos",
        "Khorne",
        "Terminator",
        "Terminator Squad"
      ],
      "factions": ["World eaters"]
    }
  ],
  "colours": {
    "banner": "#611013",
    "header": "#4d161a"
  }
}