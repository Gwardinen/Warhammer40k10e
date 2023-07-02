window.data = window.data || {};
window.data.AC = {
  "id": "AC",
  "link": "https://game-datacards.eu",
  "name": "Adeptus Custodes",
  "is_subfaction": false,
  "parent_id": "",
  "enhancements": [
    {
      "name": "UNSTOPPABLE DESTROYER",
      "description": "■ Adeptus Custodes model only (excluding Anathema Psykana models). Each time the bearer ends a Charge move, select one enemy unit within Engagement Range of the bearer and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds. ■ Once per battle, after the bearer’s unit ends a Charge move, all enemy units within 6\" of the bearer must take a Battle-shock test.",
      "keywords": ["Adeptus Custodes"],
      "exclusions": ["Anathema Psykana"],
      "cost": "25"
    },
    {
      "name": "INSPIRATIONAL EXEMPLAR",
      "description": "■ Adeptus Custodes model only (excluding Anathema Psykana models). The bearer has a Leadership characteristic of 5+. ■ Once per battle, at the start of any phase, you can select one friendly Adeptus Custodes unit that is Battle-shocked and within 12\" of the bearer; that unit is no longer Battle-shocked.",
      "keywords": ["Adeptus Custodes"],
      "exclusions": ["Anathema Psykana"],
      "cost": "10"
    },
    {
      "name": "VEILED BLADE",
      "description": "■ Adeptus Custodes model only (excluding Anathema Psykana models). Add 2 to the Attacks characteristic of the bearer’s melee weapons. ■ Once per battle, at the start of any Command phase, triple the bearer’s Objective Control characteristic until the end of the turn.",
      "keywords": ["Adeptus Custodes"],
      "exclusions": ["Anathema Psykana"],
      "cost": "25"
    },
    {
      "name": "CEASELESS HUNTER",
      "description": "■ Adeptus Custodes model only (excluding Anathema Psykana models). The bearer’s unit is eligible to shoot and declare a charge in a turn in which it Fell Back. ■ Once per battle, when an enemy unit ends a Normal,Advance or Fall Back move within 9\" of the bearer, if the bearer’s unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\".",
      "keywords": ["Adeptus Custodes"],
      "exclusions": ["Anathema Psykana"],
      "cost": "30"
    }
  ],
  "datasheets": [
    {
      "id": "d711fcf3-cd9c-56e2-936f-3e7d7ce404f1",
      "name": "Agamatus Custodians",
      "faction_id": "AC",
      "leader": "",
      "composition": ["3-6 Agamatus Custodians"],
      "loadout": "Every model is equipped with: lastrum bolt cannon; interceptor lance.",
      "wargear": [
        "Any number of models can each have their lastrum bolt cannon replaced with one of the following: ◦ 1 adrathic devastator ◦ 1 twin las-pulsar"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "280"
        },
        {
          "models": "6",
          "cost": "560"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Turbo-boost",
            "description": "Each time this unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit."
          },
          {
            "name": "Implacable Vanguard",
            "description": "Once per battle, in your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, this unit is not eligible to declare a charge."
          }
        ],
        "special": [
          {
            "name": "JETBIKE OUTRIDERS",
            "description": "If a model from your army with the Leader ability can be attached to a Vertus Praetors unit, it can be attached to this unit instead."
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
          "t": "6",
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "2",
          "name": "Agamatus Custodians"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Adrathic devastator",
              "keywords": [],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Lastrum bolt cannon",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin las-pulsar",
              "keywords": ["twin-linked"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "9",
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
              "name": "Interceptor lance",
              "keywords": ["lance"],
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
      "keywords": ["Mounted", "Fly", "Imperium", "Agamatus Custodians"],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "2973a1e7-49ab-5c6f-a61f-0abefe87bfe5",
      "name": "Aleya",
      "faction_id": "AC",
      "leader": "This model can be attached to the following units: ■ Prosecutors ■ Vigilators ■ Witchseekers",
      "composition": ["1 Aleya – Epic Hero"],
      "loadout": "This model is equipped with: Somnus.",
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
        "core": ["Feel No Pain 5+", "Leader", "Scouts 6\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Tactical Perception",
            "description": "While this model is leading a unit, models in that unit have the Fights First ability."
          },
          {
            "name": "Tenacious Spirit",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength."
          },
          {
            "name": "Daughter of the Abyss",
            "description": "This model has the Feel No Pain 3+ ability against Psychic Attacks."
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
          "name": "Aleya"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Somnus",
              "keywords": ["anti-psyker 4+", "devastating wounds"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Epic Hero", "Imperium", "Aleya"],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "1d52b4a3-4514-5a3e-adab-3594c2a60fa0",
      "name": "Allarus Custodians",
      "faction_id": "AC",
      "leader": "",
      "composition": ["2-6 Allarus Custodians"],
      "loadout": "Every model is equipped with: balistus grenade launcher; guardian spear.",
      "wargear": [
        "Any number of models can each have their guardian spear replaced with 1 castellan axe.",
        "1 model’s guardian spear can be replaced with 1 vexilla and 1 misericordia."
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "130"
        },
        {
          "models": "3",
          "cost": "195"
        },
        {
          "models": "5",
          "cost": "325"
        },
        {
          "models": "6",
          "cost": "390"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Vexilla",
            "description": "Add 1 to the Objective Control characteristic of models in the bearer’s unit."
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Slayers of Tyrants",
            "description": "Each time a model in this unit makes an attack that targets a Character, Monster or Vehicle unit, you can re-roll the Wound roll."
          },
          {
            "name": "From Golden Light",
            "description": "Once per battle, at the end of your opponenet’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield. In the Reinforcements step of your next Movement phase, set it up anywhere on the battlefield that is more than 9\" horizontally away from all enemy models."
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
          "t": "7",
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "2",
          "name": "Allarus Custodians"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Balistus grenade launcher",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Castellan axe",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Guardian spear",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Castellan axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Guardian spear",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Misericordia",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Terminator", "Imperium", "Allarus Custodians"],
      "factions": ["Adeptus Custodes"],
      "ledBy": ["Shield-captain In Allarus Terminator Armour"]
    },
    {
      "id": "2e5ba22b-8a92-5e30-aa84-5610a5081445",
      "name": "Anathema Psykana Rhino",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Anathema Psykana Rhino"],
      "loadout": "This model is equipped with: storm bolter; armoured tracks.",
      "wargear": ["This model can be equipped with 1 hunter-killer missile."],
      "transport": "This model has a transport capacity of 12 Anathema Psykana Infantry models.",
      "points": [
        {
          "models": "1",
          "cost": "75"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Daughters of the Abyss",
            "description": "This model has the Feel No Pain 3+ ability against Psychic Attacks."
          },
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
          "name": "Anathema Psykana Rhino"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
        "Imperium",
        "Anathema Psykana",
        "Rhino"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "fd3600e1-2b97-5ed3-9d4f-d943b864caf1",
      "name": "Aquilon Custodians",
      "faction_id": "AC",
      "leader": "",
      "composition": ["3-6 Aquilon Custodians"],
      "loadout": "Every model is equipped with: lastrum storm bolter; solerite power gauntlet.",
      "wargear": [
        "Any number of models can each have their lastrum storm bolter replaced with one of the following: ◦ 1 infernus firepike ◦ 1 twin adrathic destructor",
        "Any number of models can each have their solerite power gauntlet replaced with 1 solerite power talon."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "230"
        },
        {
          "models": "6",
          "cost": "460"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Heavy Assault Infantry",
            "description": "Each time a model in this unit makes a ranged attack that targets the closest eligible target, re-roll a Wound roll of 1."
          },
          {
            "name": "From Golden Light",
            "description": "Once per battle, at the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves."
          }
        ],
        "special": [
          {
            "name": "LIONS OF THE EMPEROR",
            "description": "If a model from your army with the Leader ability can be attached to an Allarus Custodians unit, it can be attached to this unit instead."
          }
        ],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "5\"",
          "t": "7",
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "2",
          "name": "Aquilon Custodians"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Infernus firepike",
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
              "name": "Lastrum storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin adrathic destructor",
              "keywords": ["twin-linked"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Solerite power gauntlet",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Solerite power talon",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Terminator", "Imperium", "Aquilon Custodians"],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "b8ed7302-d7b0-5075-bfde-8077f6e2f414",
      "name": "Ares Gunship",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Ares Gunship"],
      "loadout": "This model is equipped with: 2 arachnus heavy blaze cannons; arachnus magna-blaze cannon; armoured hull.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "580"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Hover"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Infernus Firebombs",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move. Until the end of the turn, models in that unit cannot have the Benefit of Cover. In addition, roll one D6 for each model in that unit: for each 6, that unit suffers 1 mortal wound."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "12",
          "sv": "2+",
          "w": "22",
          "ld": "6+",
          "oc": "0",
          "name": "Ares Gunship"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Arachnus heavy blaze cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "2+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Arachnus magna-blaze cannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "18",
              "ap": "-4",
              "damage": "D6+6"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "9",
              "skill": "4+",
              "strength": "9",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Aircraft", "Fly", "Imperium", "Ares Gunship"],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "e3d44ca2-252c-517f-8702-19e20f311930",
      "name": "Blade Champion",
      "faction_id": "AC",
      "leader": "This model can be attached to the following units: ■ Custodian Guard ■ Custodian Wardens",
      "composition": ["1 Blade Champion"],
      "loadout": "This model is equipped with: vaultswords.",
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
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Martial Inspiration",
            "description": "While this model is leading a unit, you can re-roll Advance and Charge rolls made for that unit. In addition, once per battle, this model’s unit is eligible to declare a charge in a turn in which it Advanced."
          },
          {
            "name": "Legacy of Combat",
            "description": "You can target this model’s unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase."
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
          "t": "6",
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Blade Champion"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Vaultswords – Behemor",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Vaultswords – Hurricanus",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "9",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            },
            {
              "name": "Vaultswords – Victus",
              "keywords": ["devastating wounds"],
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
      "keywords": ["Infantry", "Character", "Imperium", "Blade Champion"],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "67a406c1-4870-58e0-a260-38b87888d4a1",
      "name": "Caladius Grav-tank",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Caladius Grav-tank"],
      "loadout": "This model is equipped with: twin iliastus accelerator cannon; twin lastrum bolt cannon; armoured hull.",
      "wargear": [
        "This model’s twin iliastus accelerator cannon can be replaced with 1 twin arachnus heavy blaze cannon."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Advanced Firepower",
            "description": "Each time this model makes an attack with its twin iliastus accelerator cannon that targets an enemy unit (excluding Monsters and Vehicles), that attack has the [LETHAL HITS] ability. Each time this model makes an attack with its twin arachnus heavy blaze cannon that targets an enemy Monster or Vehicle unit, that attack has the [LETHAL HITS] ability."
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
          "t": "11",
          "sv": "2+",
          "w": "14",
          "ld": "6+",
          "oc": "4",
          "name": "Caladius Grav-tank"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Twin arachnus heavy blaze cannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "4",
              "skill": "2+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin iliastus accelerator cannon",
              "keywords": ["rapid fire 4", "twin-linked"],
              "range": "48\"",
              "attacks": "4",
              "skill": "2+",
              "strength": "10",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin lastrum bolt cannon",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "6",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Imperium", "Caladius Grav-tank"],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "f0073ee1-10b4-5ece-a72c-9e22f7eadab5",
      "name": "Contemptor-achillus Dreadnought",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Contemptor-Achillus Dreadnought"],
      "loadout": "This model is equipped with: 2 lastrum storm bolters; Achillus dreadspear.",
      "wargear": [
        "This model’s 2 lastrum storm bolters can be replaced with one of the following: ◦ 2 infernus incinerators ◦ 2 twin adrathic destructors ◦ 1 lastrum storm bolter and 1 infernus incinerator ◦ 1 lastrum storm bolter and 1 twin adrathic destructor ◦ 1 infernus incinerator and 1 twin adrathic destructor"
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
        "core": ["Deadly Demise 1"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Dread Foe",
            "description": "Each time this model is selected to fight, you can select one enemy unit within Engagement Range of it and roll one D6, adding 2 to the result if this model made a Charge move this turn: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers 3 mortal wounds."
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
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Contemptor-achillus Dreadnought"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Achillus dreadspear",
              "keywords": [],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Infernus incinerator",
              "keywords": ["torrent", "ignores cover"],
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
              "name": "Lastrum storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin adrathic destructor",
              "keywords": ["twin-linked"],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Achillus dreadspear",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "12",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Imperium",
        "Contemptor-Achillus Dreadnought"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "134142f6-2a60-56ed-8dfd-21373c195102",
      "name": "Contemptor-galatus Dreadnought",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Contemptor-Galatus Dreadnought"],
      "loadout": "This model is equipped with: Galatus warblade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "175"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Galatus Shield",
            "description": "Each time a melee attack targets this model, subtract 1 from the Wound roll."
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
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Contemptor-galatus Dreadnought"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Galatus warblade",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "6",
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
              "name": "Galatus warblade",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Imperium",
        "Contemptor-Galatus Dreadnought"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "f0b82110-5f91-5f45-9280-d686ae2823cd",
      "name": "Coronus Grav-carrier",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Coronus Grav-carrier"],
      "loadout": "This model is equipped with: twin arachnus blaze cannon; twin lastrum bolt cannon; armoured hull.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 8 Adeptus Custodes Infantry models.",
      "points": [
        {
          "models": "1",
          "cost": "200"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Fire Support",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll."
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
          "m": "12\"",
          "t": "12",
          "sv": "2+",
          "w": "16",
          "ld": "6+",
          "oc": "5",
          "name": "Coronus Grav-carrier"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Twin arachnus blaze cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "8",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin lastrum bolt cannon",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "6",
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
              "name": "Armoured hull",
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
        "Fly",
        "Imperium",
        "Coronus Grav-carrier"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "923d8a4f-3a80-5328-bd04-8d3bcee4d6e2",
      "name": "Custodian Guard",
      "faction_id": "AC",
      "leader": "",
      "composition": ["4-10 Custodian Guard"],
      "loadout": "Every model is equipped with: guardian spear.",
      "wargear": [
        "Any number of models can each have their guardian spear replaced with 1 sentinel blade and 1 praesidium shield.",
        "1 model’s guardian spear can be replaced with one of the following: ◦ 1 vexilla and 1 misericordia ◦ 1 vexilla, 1 misericordia and 1 praesidium shield"
      ],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "180"
        },
        {
          "models": "5",
          "cost": "225"
        },
        {
          "models": "9",
          "cost": "405"
        },
        {
          "models": "10",
          "cost": "450"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Praesidium Shield",
            "description": "Add 1 to the bearer’s Wounds characteristic."
          },
          {
            "name": "Vexilla",
            "description": "Add 1 to the Objective Control characteristic of models in the bearer’s unit."
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Stand Vigil",
            "description": "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. While this unit is within range of an objective marker you control, you can re-roll the Wound roll instead."
          },
          {
            "name": "Sentinel Storm",
            "description": "Once per battle, in your Shooting phase, after this unit has shot, it can shoot again."
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
          "t": "6",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Custodian Guard"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Guardian spear",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Sentinel blade",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "2",
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
              "name": "Guardian spear",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Misericordia",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Sentinel blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Battleline", "Imperium", "Custodian Guard"],
      "factions": ["Adeptus Custodes"],
      "ledBy": [
        "Blade Champion",
        "Shield-captain",
        "Trajann Valoris",
        "Valerian"
      ]
    },
    {
      "id": "550e4175-7149-5870-a7b3-58e842cfce32",
      "name": "Custodian Guard With Adrasite And Pyrithite Spears",
      "faction_id": "AC",
      "leader": "",
      "composition": ["5 Custodian Guard with Adrasite and Pyrithite Spears"],
      "loadout": "Every model is equipped with: adrasite spear.",
      "wargear": [
        "Any number of models can each have their adrasite spear replaced with 1 pyrithite spear."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "325"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Stand Vigil",
            "description": "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. While this unit is within range of an objective marker you control, you can re-roll the Wound roll instead."
          },
          {
            "name": "No Foe Shall Stand",
            "description": "Once per battle, at the start of your Shooting phase, this unit can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [LETHAL HITS] and [IGNORES COVER] abilities."
          }
        ],
        "special": [
          {
            "name": "CUSTODIAN GUARD",
            "description": "If a model from your army with the Leader ability can be attached to a Custodian Guard unit, it can be attached to this unit instead."
          }
        ],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "6",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Custodian Guard With Adrasite And Pyrithite Spears"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Adrasite spear",
              "keywords": [],
              "range": "18\"",
              "attacks": "1",
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
              "name": "Pyrithite spear",
              "keywords": ["melta 2"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Adrasite spear",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Pyrithite spear",
              "keywords": [],
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
      "keywords": ["Infantry", "Imperium", "Custodian Guard with Adrasite and"],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "84afd6cb-2f70-5b2d-87ee-e5c581b96817",
      "name": "Custodian Wardens",
      "faction_id": "AC",
      "leader": "",
      "composition": ["3-6 Custodian Wardens"],
      "loadout": "Every model is equipped with: guardian spear.",
      "wargear": [
        "Any number of models can each have their guardian spear replaced with 1 castellan axe.",
        "1 model can be equipped with 1 vexilla."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "150"
        },
        {
          "models": "6",
          "cost": "300"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Vexilla",
            "description": "Add 1 to the Objective Control characteristic of models in the bearer’s unit."
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Resolute Will",
            "description": "While a Character is leading this unit, each time an attack targets this unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll."
          },
          {
            "name": "Living Fortress",
            "description": "Once per battle, at the start of any phase, this unit can use this ability. If it does, until the end of the phase, models in this unit have the Feel No Pain 4+ ability."
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
          "t": "6",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Custodian Wardens"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Castellan axe",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Guardian spear",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Castellan axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Guardian spear",
              "keywords": [],
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
      "keywords": ["Infantry", "Imperium", "Custodian Wardens"],
      "factions": ["Adeptus Custodes"],
      "ledBy": [
        "Blade Champion",
        "Shield-captain",
        "Trajann Valoris",
        "Valerian"
      ]
    },
    {
      "id": "1502c79d-c7ba-5714-8de1-c24b51efefd8",
      "name": "Knight-centura",
      "faction_id": "AC",
      "leader": "This model can be attached to the following units: ■ Prosecutors ■ Vigilators ■ Witchseekers",
      "composition": ["1 Knight-Centura"],
      "loadout": "This model is equipped with: executioner greatblade.",
      "wargear": [
        "This model’s executioner greatblade can be replaced with one of the following: ◦ 1 master-crafted boltgun ◦ 1 Witchseeker flamer"
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
        "core": ["Leader", "Scouts 6\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Seeker’s Instincts",
            "description": "While this model is leading a unit, add 2\" to the Move characteristic of models in that unit and add 2 to Advance and Charge rolls made for that unit."
          },
          {
            "name": "Daughter of the Abyss",
            "description": "This model has the Feel No Pain 3+ ability against Psychic Attacks."
          },
          {
            "name": "Corner the Quarry",
            "description": "Each time an enemy unit (excluding Monsters and Vehicles) that is within Engagement Range of this model’s unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests."
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
          "name": "Knight-centura"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Master-crafted boltgun",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Witchseeker flamer",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Executioner greatblade",
              "keywords": ["anti-psyker 4+", "devastating wounds"],
              "range": "Melee",
              "attacks": "3",
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
        "Imperium",
        "Anathema Psykana",
        "Knight-Centura"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "335a4762-5e7e-5012-9ff2-9d53d3f8a66d",
      "name": "Orion Assault Dropship",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Orion Assault Dropship"],
      "loadout": "This model is equipped with: 2 arachnus heavy blaze cannons; 2 twin lastrum bolt cannons; 2 spiculus heavy bolt launchers; armoured hull.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 12 Adeptus Custodes Infantry models. This model can also transport 1 Venerable Contemptor Dreadnought, 1 Contemptor-Achillus Dreadnought or 1 Contemptor Galatus-Dreadnought; while doing so, its transport capacity is reduced to 6 Adeptus Custodes Infantry models.",
      "points": [
        {
          "models": "1",
          "cost": "690"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Hover"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Assault Dropship",
            "description": "If a unit disembarks from this Transport before it moves, until the end of the turn, that unit is eligible to charge in a turn in which it Advanced."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "12",
          "sv": "2+",
          "w": "22",
          "ld": "6+",
          "oc": "0",
          "name": "Orion Assault Dropship"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Arachnus heavy blaze cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "2+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Spiculus heavy bolt launcher",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+6",
              "skill": "2+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin lastrum bolt cannon",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "6",
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
              "name": "Armoured hull",
              "keywords": [],
              "range": "Melee",
              "attacks": "9",
              "skill": "4+",
              "strength": "9",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Aircraft",
        "Fly",
        "Imperium",
        "Orion Assault Dropship"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "5d5d209e-d797-5a54-b0c4-2ce818faa24b",
      "name": "Pallas Grav-attack",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Pallas Grav-attack"],
      "loadout": "This model is equipped with: twin arachnus blaze cannon; armoured hull.",
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
        "core": ["Deadly Demise D3"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Merciless Hunter",
            "description": "In your Shooting phase, each time this model makes an attack that targets an enemy unit that is Below Half-strength, add 1 to the Wound roll."
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
          "t": "8",
          "sv": "2+",
          "w": "9",
          "ld": "6+",
          "oc": "2",
          "name": "Pallas Grav-attack"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Twin arachnus blaze cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "8",
              "skill": "2+",
              "strength": "5",
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
              "name": "Armoured hull",
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
      "keywords": ["Vehicle", "Fly", "Imperium", "Pallas Grav-attack"],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "c88e2168-63a7-58d4-92f7-599f8240099a",
      "name": "Prosecutors",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Prosecutor Sister Superior", "3-9 Prosecutors"],
      "loadout": "Every model is equipped with: boltgun; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "40"
        },
        {
          "models": "5",
          "cost": "50"
        },
        {
          "models": "9",
          "cost": "90"
        },
        {
          "models": "10",
          "cost": "100"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Daughters of the Abyss",
            "description": "Models in this unit have the Feel No Pain 3+ ability against Psychic Attacks."
          },
          {
            "name": "Purity of Execution",
            "description": "Each time a model in this unit makes a ranged attack that targets a Psyker unit, that attack has the [PRECISION] and [DEVASTATING WOUNDS] abilities."
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
          "oc": "2",
          "name": "Prosecutors"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Boltgun",
              "keywords": ["rapid fire 1"],
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
        "Battleline",
        "Imperium",
        "Anathema Psykana",
        "Prosecutors"
      ],
      "factions": ["Adeptus Custodes"],
      "ledBy": ["Aleya", "Knight-centura"]
    },
    {
      "id": "6faae4f4-5ef4-5bba-9bd3-17a82eb610f9",
      "name": "Sagittarum Custodians",
      "faction_id": "AC",
      "leader": "",
      "composition": ["5 Sagittarum Custodians"],
      "loadout": "Every model is equipped with: adrastus bolt caliver; misericordia.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "250"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Saturation Volleys",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit (excluding Monsters and Vehicles) hit by one or more of those attacks. Until the start of your next turn, while this unit is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll."
          },
          {
            "name": "Disintegration Beams",
            "description": "Once per battle, at the start of your Shooting phase, this unit can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability."
          }
        ],
        "special": [
          {
            "name": "CUSTODIAN GUARD",
            "description": "If a model from your army with the Leader ability can be attached to a Custodian Guard unit, it can be attached to this unit instead."
          }
        ],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "6",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Sagittarum Custodians"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Adrastus bolt caliver",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
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
              "name": "Misericordia",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Sagittarum Custodians"],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "7e5fe5ef-d517-5317-a4a3-532012b2ab27",
      "name": "Shield-captain",
      "faction_id": "AC",
      "leader": "This model can be attached to the following units: ■ Custodian Guard ■ Custodian Wardens",
      "composition": ["1 Shield-Captain"],
      "loadout": "This model is equipped with: guardian spear.",
      "wargear": [
        "This model’s guardian spear can be replaced with one of the following: ◦ 1 castellan axe ◦ 1 sentinel blade ◦ 1 sentinel blade and 1 praesidium shield"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "120"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Praesidium shield",
            "description": "Add 1 to the bearer’s Wounds characteristic."
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Master of the Stances",
            "description": "At the start of the Fight phase, select one Ka’tah Stance. Until the end of the phase, that stance is active for this model’s unit in addition to the one that is active. Once per battle, at the start of the Fight phase, all stances are active for this model’s unit until the end of the phase."
          },
          {
            "name": "Strategic Mastery",
            "description": "Once per battle round, you can select one model from your army with this ability. That model’s unit can be targeted with a Stratagem for 0CP, even if that Stratagem has already targeted another unit from your army this phase."
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
          "t": "6",
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Shield-captain"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Castellan axe",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Guardian spear",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Sentinel blade",
              "keywords": ["assault", "pistol"],
              "range": "12\"",
              "attacks": "2",
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
              "name": "Castellan axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Guardian spear",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Sentinel blade",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Imperium", "Shield-Captain"],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "4bff1d84-eb9d-5f8f-80c2-4eef6bc38553",
      "name": "Shield-captain In Allarus Terminator Armour",
      "faction_id": "AC",
      "leader": "This model can be attached to the following unit: ■ Allarus Custodians",
      "composition": ["1 Shield-Captain in Allarus Terminator Armour"],
      "loadout": "This model is equipped with: balistus grenade launcher; guardian spear.",
      "wargear": [
        "This model’s guardian spear can be replaced with 1 castellan axe."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "120"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Defiant to the Last",
            "description": "If this model is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 2+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play."
          },
          {
            "name": "Strategic Mastery",
            "description": "Once per battle round, you can select one model from your army with this ability and target that model’s unit with a Stratagem for 0CP, even if that Stratagem has already been used on another unit from your army this phase."
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
          "t": "7",
          "sv": "2+",
          "w": "7",
          "ld": "6+",
          "oc": "2",
          "name": "Shield-captain In Allarus Terminator Armour"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Balistus grenade launcher",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Castellan axe",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Guardian spear",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Castellan axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Guardian spear",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
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
        "Imperium",
        "Terminator",
        "Shield-Captain"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "e803a504-7890-5595-8868-d52189fbe26e",
      "name": "Shield-captain On Dawneagle Jetbike",
      "faction_id": "AC",
      "leader": "This model can be attached to the following unit: ■ Vertus Praetors",
      "composition": ["1 Shield-Captain on Dawneagle Jetbike"],
      "loadout": "This model is equipped with: salvo launcher; interceptor lance.",
      "wargear": [
        "This model’s salvo launcher can be replaced with 1 Vertus hurricane bolter."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "145"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Sweeping Advance",
            "description": "While this model is leading a unit, each time that unit Consolidates, each model in that unit can move up to 6\" instead of up to 3\". In addition, once per battle, at the end of the Fight phase, if this model’s unit is within Engagement Range of one or more enemy units, it can Fall Back as if it were your Movement phase or, if it is not within Engagement Range of one or more enemy units, it can make a Normal move as if it were your Movement phase."
          },
          {
            "name": "Strategic Mastery",
            "description": "Once per battle round, you can select one model from your army with this ability and target that model’s unit with a Stratagem for 0CP, even if that Stratagem has already been used on another unit from your army this phase."
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
          "w": "7",
          "ld": "6+",
          "oc": "2",
          "name": "Shield-captain On Dawneagle Jetbike"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Vertus hurricane bolter",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Salvo launcher",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Interceptor lance",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Fly",
        "Imperium",
        "Dawneagle Jetbike",
        "Shield-Captain"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "20c06da2-729f-52ce-8989-b2b98ea909b3",
      "name": "Telemon Heavy Dreadnought",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Telemon Heavy Dreadnought"],
      "loadout": "This model is equipped with: 2 iliastus accelerator culverins; spiculus bolt launcher; armoured feet.",
      "wargear": [
        "This model’s 2 iliastus accelerator culverins can be replaced with one of the following: ◦ 2 arachnus storm cannons ◦ 2 Telemon caestus and 2 twin plasma projectors ◦ 1 iliastus accelerator culverin and 1 arachnus storm cannon ◦ 1 iliastus accelerator culverin, 1 Telemon caestus and 1 twin plasma projector ◦ 1 arachnus storm cannon, 1 Telemon caestus and 1 twin plasma projector"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "235"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Guardian Eternal",
            "description": "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack."
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
          "sv": "2+",
          "w": "12",
          "ld": "6+",
          "oc": "4",
          "name": "Telemon Heavy Dreadnought"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Arachnus storm cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "12",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Iliastus accelerator culverin",
              "keywords": [],
              "range": "48\"",
              "attacks": "4",
              "skill": "2+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Spiculus bolt launcher",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+3",
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
              "name": "Twin plasma projector",
              "keywords": ["torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D3",
              "skill": "N/A",
              "strength": "7",
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
              "name": "Armoured feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Telemon caestus",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Imperium",
        "Telemon Heavy Dreadnought"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "8d484fc2-0de6-5a20-b6fb-888f23a18b3f",
      "name": "Trajann Valoris",
      "faction_id": "AC",
      "leader": "This model can be attached to the following units: ■ Custodian Guard ■ Custodian Wardens",
      "composition": ["1 Trajann Valoris – Epic Hero"],
      "loadout": "This model is equipped with: Watcher’s Axe.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "145"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Feel No Pain 5+", "Leader"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Captain-General",
            "description": "While this model is leading a unit, you can ignore any or all modifiers to the characteristics of models in that unit and/or to any roll or test made for models in that unit (excluding modifiers to saving throws)."
          },
          {
            "name": "Moment Shackle",
            "description": "Once per battle, at the start of the Fight phase, you can select one of the following to take effect until the end of the phase: ■  This model’s Watcher’s Axe melee weapon has an Attacks characteristic of 12. ■  This model has a 2+ invulnerable save. ■ Models in this model’s unit have the Fights First ability."
          }
        ],
        "special": [
          {
            "name": "SUPREME COMMANDER",
            "description": "If this model is in your army, it must be your Warlord."
          }
        ],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "6\"",
          "t": "6",
          "sv": "2+",
          "w": "7",
          "ld": "5+",
          "oc": "2",
          "name": "Trajann Valoris"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Watcher’s Axe",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
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
              "name": "Watcher’s Axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "10",
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
        "Imperium",
        "Trajann Valoris"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "12edb3d1-de71-5dce-8515-c95f86fa9b05",
      "name": "Valerian",
      "faction_id": "AC",
      "leader": "This model can be attached to the following units: ■ Custodian Guard ■ Custodian Wardens",
      "composition": ["1 Valerian – Epic Hero"],
      "loadout": "This model is equipped with: Gnosis.",
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
        "core": ["Feel No Pain 6+", "Leader"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Golden Laurels",
            "description": "While this model is leading a unit, each time a melee attack targets that unit, worsen the Armour Penetration characteristic of that attack by 1."
          },
          {
            "name": "Hero of Lion’s Gate",
            "description": "Once per battle round, you can re-roll one Hit roll, one Wound roll or one saving throw made for this model. In addition, once per battle, after making a Hit roll, Wound roll or saving throw for this model, you can change the result of that roll to an unmodified 6."
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
          "t": "6",
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Valerian"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Gnosis",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Gnosis",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "8",
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
        "Imperium",
        "Shield-Captain",
        "Valerian"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "d9fb2942-b113-5191-8a92-f7b99cce3504",
      "name": "Venatari Custodians",
      "faction_id": "AC",
      "leader": "",
      "composition": ["3-6 Venatari Custodians"],
      "loadout": "Every model is equipped with: Venatari lance.",
      "wargear": [
        "Any number of models can each have their Venatari lance replaced with 1 kinetic destroyer and 1 tarsus buckler."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "235"
        },
        {
          "models": "6",
          "cost": "470"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Tarsis Buckler",
            "description": "The bearer has a Wounds characteristic of 4."
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Strike from the Skies",
            "description": "This unit is eligible to shoot and declare a charge in a turn in which it Fell Back."
          },
          {
            "name": "Swooping Dive",
            "description": "Once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase."
          }
        ],
        "special": [
          {
            "name": "JUMP PACKS",
            "description": "This unit cannot embark within a Venerable Land Raider."
          }
        ],
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
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Venatari Custodians"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kinetic destroyer",
              "keywords": ["pistol", "sustained hits 1"],
              "range": "12\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Venatari lance",
              "keywords": ["assault"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Tarsis buckler",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Venatari lance",
              "keywords": ["lance"],
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
        "Fly",
        "Jump Pack",
        "Imperium",
        "Venatari Custodians"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "cf2b9789-37cf-5eaf-bd1f-6b126b5173b2",
      "name": "Venerable Contemptor Dreadnought",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Venerable Contemptor Dreadnought"],
      "loadout": "This model is equipped with: combi-bolter; multi-melta; Contemptor combat weapon.",
      "wargear": [
        "This model’s multi-melta can be replaced with 1 Kheres-pattern assault cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "185"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Unyielding Ancient",
            "description": "The first time this model is destroyed, remove it from play without resolving its Deadly Demise ability. Then, at the end of the phase, roll one D6: on a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with D6 wounds remaining."
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
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Venerable Contemptor Dreadnought"
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
              "name": "Kheres-pattern assault cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
              "skill": "2+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
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
              "skill": "2+",
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
              "name": "Contemptor combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Imperium",
        "Venerable Contemptor Dreadnought"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "bf47a8d1-d746-5e58-a1f7-46863e3c0f38",
      "name": "Venerable Land Raider",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Venerable Land Raider"],
      "loadout": "This model is equipped with: 2 godhammer lascannons; twin heavy bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter."
      ],
      "transport": "This model has a transport capacity of 6 Adeptus Custodes Infantry models.",
      "points": [
        {
          "models": "1",
          "cost": "260"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Martial Ka’tah"],
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
          "name": "Venerable Land Raider"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Godhammer lascannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Hunter-killer missile",
              "keywords": ["one shot"],
              "range": "48\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Storm bolter",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Twin heavy bolter",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "36\"",
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
        "Imperium",
        "Transport",
        "Smoke",
        "Venerable Land Raider"
      ],
      "factions": ["Adeptus Custodes"]
    },
    {
      "id": "e3558fff-5623-5899-8bb0-e6a2aa3881cd",
      "name": "Vertus Praetors",
      "faction_id": "AC",
      "leader": "",
      "composition": ["2-6 Vertus Praetors"],
      "loadout": "Every model is equipped with: salvo launcher; interceptor lance.",
      "wargear": [
        "Any number of models can each have their salvo launcher replaced with 1 Vertus hurricane bolter."
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "180"
        },
        {
          "models": "3",
          "cost": "270"
        },
        {
          "models": "5",
          "cost": "450"
        },
        {
          "models": "6",
          "cost": "540"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Martial Ka’tah"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Turbo-boost",
            "description": "Each time this unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit."
          },
          {
            "name": "Quicksilver Execution",
            "description": "Once per battle, after this unit ends an Advance move, you can select one enemy unit (excluding Monster and Vehicle units) that it moved over during that move, then roll one D6 for each model in this unit: for each 2+, that enemy unit suffers 2 mortal wounds."
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
          "w": "4",
          "ld": "6+",
          "oc": "2",
          "name": "Vertus Praetors"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Salvo launcher",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Vertus hurricane bolter",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Interceptor lance",
              "keywords": ["lance"],
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
      "keywords": ["Mounted", "Fly", "Imperium", "Vertus Praetors"],
      "factions": ["Adeptus Custodes"],
      "ledBy": ["Shield-captain On Dawneagle Jetbike"]
    },
    {
      "id": "a625fffb-42af-51c1-99a0-20a2f699b2fa",
      "name": "Vigilators",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Vigilator Sister Superior", "3-9 Vigilators"],
      "loadout": "Every model is equipped with: executioner greatblade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "60"
        },
        {
          "models": "5",
          "cost": "75"
        },
        {
          "models": "9",
          "cost": "135"
        },
        {
          "models": "10",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Daughters of the Abyss",
            "description": "Models in this unit have the Feel No Pain 3+ ability against Psychic Attacks."
          },
          {
            "name": "Deft Parry",
            "description": "Each time a melee attack targets this unit, subtract 1 from the Hit roll."
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
          "name": "Vigilators"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Executioner greatblade",
              "keywords": ["anti-psyker 4+", "devastating wounds"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Anathema Psykana", "Vigilators"],
      "factions": ["Adeptus Custodes"],
      "ledBy": ["Aleya", "Knight-centura"]
    },
    {
      "id": "9232d973-cdd6-519b-a8da-4c68e578ca7f",
      "name": "Witchseekers",
      "faction_id": "AC",
      "leader": "",
      "composition": ["1 Witchseeker Sister Superior", "3-9 Witchseekers"],
      "loadout": "Every model is equipped with: Witchseeker flamer; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "60"
        },
        {
          "models": "5",
          "cost": "75"
        },
        {
          "models": "9",
          "cost": "135"
        },
        {
          "models": "10",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Scouts 6\""],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Daughters of the Abyss",
            "description": "Models in this unit have the Feel No Pain 3+ ability against Psychic Attacks."
          },
          {
            "name": "Sanctified Flames",
            "description": "Each time this unit shoots, after it has shot, select one enemy unit that was hit by one or more of those attacks. That unit must take a Battle-shock test."
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
          "name": "Witchseekers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Witchseeker flamer",
              "keywords": ["ignores cover", "torrent"],
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
        }
      ],
      "keywords": ["Infantry", "Imperium", "Anathema Psykana", "Witchseekers"],
      "factions": ["Adeptus Custodes"],
      "ledBy": ["Aleya", "Knight-centura"]
    }
  ],
  "colours": {
    "banner": "#6a0e19",
    "header": "#6d5035"
  }
}