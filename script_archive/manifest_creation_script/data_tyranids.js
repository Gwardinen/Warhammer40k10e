window.data = window.data || {};
window.data.tyr = {
  "id": "TYR",
  "link": "https://game-datacards.eu",
  "name": "Tyranids",
  "is_subfaction": false,
  "parent_id": "",
  "enhancements": [
    {
      "name": "Adaptive Biology",
      "description": "Tyranids model only. The bearer has the Feel No Pain 5+ ability. At the start of any turn, if the bearer has fewer than its starting number of wounds remaining, until the end of the battle, it has the Feel No Pain 4+ ability instead.",
      "keywords": ["Tyranids"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "Alien Cunning",
      "description": "Tyranids model only. After both players have deployed their armies, select up to three Tyranids units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves.",
      "keywords": ["Tyranids"],
      "excludes": [],
      "cost": "30"
    },
    {
      "name": "Perfectly Adapted",
      "description": "Tyranids model only. Once per turn, you can re-roll one Hit roll, one Wound roll, one Damage roll, one Advance roll, one Charge roll or one saving throw made for the bearer.",
      "keywords": ["Tyranids"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Synaptic Linchpin",
      "description": "Tyranids model only. While a friendly Tyranids unit is within 9\" of the bearer, that unit is within Synapse Range of your army.",
      "keywords": ["Tyranids"],
      "excludes": [],
      "cost": "10"
    }
  ],
  "datasheets": [
    {
      "id": "82098053-7629-50ba-ac7d-8b3df944f84f",
      "name": "Barbed Hierodule",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Barbed Hierodule"],
      "loadout": "This model is equipped with: 2 bio-cannons; Hierodule scything talons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "305"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Overgrown Barbs",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit (excluding Titanic units) that was hit by one or more of those attacks. Until the start of your next turn, while this model is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "12",
          "sv": "2+",
          "w": "18",
          "ld": "8+",
          "oc": "5",
          "name": "Barbed Hierodule"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bio-cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "9",
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
              "name": "Hierodule scything talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "14",
              "ap": "-2",
              "damage": "D3+3"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Barbed Hierodule"],
      "factions": ["Tyranids"]
    },
    {
      "id": "f9800d2a-a62c-5ad0-9374-39169c572515",
      "name": "Barbgaunts",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["5-10 Barbgaunts"],
      "loadout": "Every model is equipped with: bio-cannon; xenos claws and teeth.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "50"
        },
        {
          "models": "10",
          "cost": "100"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Disruption Bombardment",
            "description": "In your Shooting phase, after this unit has shot, if an enemy Infantry unit was hit by one or more of those attacks made by this unit’s bio-cannons, until the end of your opponent’s next turn, that enemy unit is disrupted. While a unit is disrupted, subtract 2 from its Move characteristic, and subtract 2 from Advance and Charge rolls made for it."
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
          "sv": "4+",
          "w": "2",
          "ld": "8+",
          "oc": "1",
          "name": "Barbgaunts"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bio-cannon",
              "keywords": ["blast", "heavy"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "4+",
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
              "name": "Xenos claws and teeth",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Great Devourer", "Barbgaunts"],
      "factions": ["Tyranids"]
    },
    {
      "id": "5408a2a2-0dd1-55ab-9280-6d893fd9a60c",
      "name": "Biovores",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1-3 Biovores"],
      "loadout": "Every model is equipped with: Spore Mine launcher; chitin-barbed limbs.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "40"
        },
        {
          "models": "2",
          "cost": "80"
        },
        {
          "models": "3",
          "cost": "120"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Seed Spore Mines",
            "description": "In your Shooting phase, each time this unit is selected to shoot, it can use this ability instead of making any attacks with its ranged weapons. If it does, you can add a new Spore Mines unit to your army and set it up anywhere on the battlefield that is within 48\" of this unit but more than 9\" horizontally away from all enemy units. That Spore Mines unit contains 1 model for each model in this unit."
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
          "t": "6",
          "sv": "4+",
          "w": "4",
          "ld": "8+",
          "oc": "1",
          "name": "Biovores"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Spore Mine launcher",
              "keywords": [
                "blast",
                "devastating wounds",
                "heavy",
                "indirect fire"
              ],
              "range": "48\"",
              "attacks": "D3",
              "skill": "4+",
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
              "name": "Chitin-barbed limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Great Devourer", "Biovores"],
      "factions": ["Tyranids"]
    },
    {
      "id": "521dd839-5fa0-5e3d-aa1d-b635fc1b20f0",
      "name": "Broodlord",
      "faction_id": "TYR",
      "leader": "This model can be attached to the following unit: ■ Genestealers",
      "composition": ["1 Broodlord"],
      "loadout": "This model is equipped with: Broodlord claws and talons.",
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
        "core": ["Leader", "Scouts 8\""],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Vicious Insight",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability."
          },
          {
            "name": "Hypnotic Gaze (Psychic)",
            "description": "At the start of the Fight phase, select one enemy unit within Engagement Range of this model. Until the end of the phase, each time a model in that unit makes an attack, subtract 1 from the Hit roll."
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
          "w": "6",
          "ld": "7+",
          "oc": "1",
          "name": "Broodlord"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Broodlord claws and talons",
              "keywords": ["devastating wounds", "twin-linked"],
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
        "Psyker",
        "Great Devourer",
        "Broodlord"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "28b62847-0a45-5cf7-a498-0ed2ab794f82",
      "name": "Carnifexes",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1-2 Carnifexes"],
      "loadout": "Every model is equipped with: Carnifex scything talons; Carnifex extra scything talons; xenos claws and teeth.",
      "wargear": [
        "Any number of models can each have their Carnifex extra scything talons replaced with one of the following: ◦ 1 deathspitters with slimer maggots ◦ 1 devourers with brainleech worms ◦ 1 heavy venom cannon ◦ 1 stranglethorn cannon ◦ 1 Carnifex crushing claws",
        "Any number of models can each have their Carnifex scything talons replaced with one of the following: ◦ 1 deathspitters with slimer maggots ◦ 1 devourers with brainleech worms ◦ 1 Carnifex crushing claws",
        "Any number of models can each be equipped with 1 bio-plasma.",
        "Any number of models can each be equipped with 1 spine banks."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "125"
        },
        {
          "models": "2",
          "cost": "250"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Blistering Assault",
            "description": "Each time an enemy unit is selected to shoot, after that unit has shot, if any models from this unit lost one or more wounds as a result of those attacks, this unit can make a Blistering Assault move. To do so, roll one D6, adding 2 to the result: each model in this unit can be moved a distance in inches up to the result, but this unit must finish that move as close as possible to the closest enemy unit. When doing so, those models can be moved within Engagement Range of that enemy unit. Each unit can only make one Blistering Assault move per phase."
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
          "t": "9",
          "sv": "2+",
          "w": "8",
          "ld": "8+",
          "oc": "3",
          "name": "Carnifexes"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bio-plasma",
              "keywords": ["assault", "blast"],
              "range": "12\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Deathspitters with slimer maggots",
              "keywords": [],
              "range": "24\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Devourers with brainleech worms",
              "keywords": [],
              "range": "18\"",
              "attacks": "12",
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
              "name": "Heavy venom cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Spine banks",
              "keywords": ["assault"],
              "range": "6\"",
              "attacks": "5",
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
              "name": "Stranglethorn cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+1",
              "skill": "4+",
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
              "name": "Carnifex crushing claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Carnifex extra scything talons",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Carnifex scything talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Xenos claws and teeth",
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
      "keywords": ["Monster", "Great Devourer", "Carnifexes"],
      "factions": ["Tyranids"],
      "ledBy": ["Old One Eye"]
    },
    {
      "id": "624f081f-0912-5c5d-a443-b8b558de9a1f",
      "name": "Deathleaper",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Deathleaper – Epic Hero"],
      "loadout": "This model is equipped with: Lictor claws and talons.",
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
        "core": ["Fights First", "Infiltrators", "Lone Operative", "Stealth"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Feeder Tendrils",
            "description": "Each time this model destroys an enemy Character model, you gain 1CP."
          },
          {
            "name": "Fear of the Unseen (Aura)",
            "description": "While an enemy unit is within 6\" of this model, worsen the Leadership characteristic of models in that unit by 1. In addition, in the Battle-shock step of your opponent’s Command phase, if such an enemy unit is below its Starting Strength, it must take a Battle-shock test."
          }
        ],
        "special": [
          {
            "name": "HUNTER ORGANISM",
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
          "m": "8\"",
          "t": "6",
          "sv": "4+",
          "w": "7",
          "ld": "7+",
          "oc": "1",
          "name": "Deathleaper"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Lictor claws and talons",
              "keywords": ["precision"],
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
        "Infantry",
        "Character",
        "Epic Hero",
        "Great Devourer",
        "Deathleaper"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "b31924b6-d882-5eda-92c7-003cea05d7c1",
      "name": "Exocrine",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Exocrine"],
      "loadout": "This model is equipped with: bio-plasmic cannon; powerful limbs.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "135"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Symbiotic Targeting",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly Tyranids model makes an attack that targets that unit, re-roll a Hit roll of 1."
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
          "ld": "8+",
          "oc": "4",
          "name": "Exocrine"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bio-plasmic cannon",
              "keywords": ["blast", "heavy"],
              "range": "36\"",
              "attacks": "D6+3",
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
              "name": "Powerful limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "7",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Exocrine"],
      "factions": ["Tyranids"]
    },
    {
      "id": "c1b0580d-173f-5441-856d-a5262b91c0f2",
      "name": "Gargoyles",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["10-20 Gargoyles"],
      "loadout": "Every model is equipped with: fleshborer; blinding venom.",
      "wargear": ["None"],
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
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Winged Swarm",
            "description": "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move of up to 6\". If it does, until the end of the turn, this unit is not eligible to declare a charge."
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
          "sv": "6+",
          "w": "1",
          "ld": "8+",
          "oc": "2",
          "name": "Gargoyles"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Fleshborer",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Blinding venom",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
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
        "Fly",
        "Great Devourer",
        "Endless Multitude",
        "Gargoyles"
      ],
      "factions": ["Tyranids"],
      "ledBy": ["Winged Tyranid Prime"]
    },
    {
      "id": "a2e7de56-15c2-56ab-ae84-c2ddb15cf630",
      "name": "Genestealers",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["5-10 Genestealers"],
      "loadout": "Every model is equipped with: Genestealer claws and talons.",
      "wargear": ["None"],
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
        "wargear": [],
        "core": ["Scouts 8\""],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Vanguard Predator",
            "description": "Each time a model in this unit makes an attack, re-roll a Wound roll of 1. If the target is within range of an objective marker, you can re-roll the Wound roll instead."
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
          "t": "4",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Genestealers"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Genestealer claws and talons",
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
      "keywords": ["Infantry", "Great Devourer", "Genestealers"],
      "factions": ["Tyranids"],
      "ledBy": ["Broodlord"]
    },
    {
      "id": "f1ca1132-af5d-5073-9411-2fa0a02d5c20",
      "name": "Harpy",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Harpy"],
      "loadout": "This model is equipped with: stinger salvoes; twin stranglethorn cannon; scything wings.",
      "wargear": [
        "This model’s twin stranglethorn cannon can be replaced with 1 twin heavy venom cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "170"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Spore Mine Cysts",
            "description": "Each time this model ends a Normal move, you can do one of the following: ■  Select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound. ■  Add a new Spore Mines unit containing D3 models to your army and set it up anywhere on the battlefield that is within 6\" of this model and more than 9\" horizontally away from all enemy units."
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
          "ld": "8+",
          "oc": "0",
          "name": "Harpy"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Stinger salvoes",
              "keywords": [],
              "range": "24\"",
              "attacks": "8",
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
              "name": "Twin heavy venom cannon",
              "keywords": ["blast", "twin-linked"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin stranglethorn cannon",
              "keywords": ["blast", "twin-linked"],
              "range": "36\"",
              "attacks": "D6+1",
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
              "name": "Scything wings",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Fly", "Aircraft", "Great Devourer", "Harpy"],
      "factions": ["Tyranids"]
    },
    {
      "id": "566eaac5-daad-5c8e-833d-a8c69749d04c",
      "name": "Harridan",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Harridan"],
      "loadout": "This model is equipped with: 2 dire bio-cannons; gargantuan scything talons.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 20 Gargoyles models and 1 Winged Tyranid Prime model.",
      "points": [
        {
          "models": "1",
          "cost": "655"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6", "Hover"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Frenzied Metabolism",
            "description": "Each time this model is selected to shoot, you can use this ability. If you do, until the end of the phase, each time this model makes an attack, add 1 to the Wound roll. After resolving those attacks, roll one D6: on a 2+, this model suffers D3 mortal wounds."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "10",
          "sv": "3+",
          "w": "30",
          "ld": "8+",
          "oc": "0",
          "name": "Harridan"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Dire bio-cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+6",
              "skill": "3+",
              "strength": "10",
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
              "name": "Gargantuan scything talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Fly",
        "Aircraft",
        "Transport",
        "Great Devourer",
        "Harridan"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "b7f8d67b-a254-50e3-b8bf-38346df1546f",
      "name": "Haruspex",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Haruspex"],
      "loadout": "This model is equipped with: grasping tongue; ravenous maw; shovelling claws.",
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
        "core": ["Deadly Demise D3"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Grisly Spectacle",
            "description": "Each time this model is selected to fight, after resolving its attacks, if one or more enemy units were destroyed by those attacks, each enemy unit within 6\" of this model must take a Battle-shock test."
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
          "t": "11",
          "sv": "3+",
          "w": "14",
          "ld": "8+",
          "oc": "4",
          "name": "Haruspex"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Grasping tongue",
              "keywords": ["precision"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Ravenous maw",
              "keywords": [],
              "range": "Melee",
              "attacks": "14",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shovelling claws",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Haruspex"],
      "factions": ["Tyranids"]
    },
    {
      "id": "56dcf747-9ed9-5ee6-b4cc-5b4dc564324f",
      "name": "Hierophant",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Hierophant"],
      "loadout": "This model is equipped with: bio-plasma torrent; 2 dire bio-cannons; lashwhip pods; titanic scything talons.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 20 Tyranids Infantry models. Each model with a Wounds characteristic of more than 1 takes up the space of 3 models. This model cannot transport models that can Fly.",
      "points": [
        {
          "models": "1",
          "cost": "810"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Apex-beast",
            "description": "Each time this model makes an attack that targets a unit that is Battle-shocked, add 1 to the Hit roll."
          },
          {
            "name": "Stalking Forward",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over models (excluding Titanic models) and terrain features that are 4\" or less in height as if they were not there."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, subtract 6 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "14",
          "sv": "2+",
          "w": "30",
          "ld": "8+",
          "oc": "12",
          "name": "Hierophant"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bio-plasma torrent",
              "keywords": ["assault", "torrent"],
              "range": "12\"",
              "attacks": "3D6",
              "skill": "N/A",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Dire bio-cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+6",
              "skill": "3+",
              "strength": "10",
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
              "name": "Lashwhip pods",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "10",
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
              "name": "Titanic scything talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "20",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Titanic",
        "Towering",
        "Transport",
        "Great Devourer",
        "Hierophant"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "6aee35fc-ced8-5243-a844-4ed9638eb360",
      "name": "Hive Crone",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Hive Crone"],
      "loadout": "This model is equipped with: drool cannon; stinger salvoes; tentaclids; scything wings; thorax spur.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "200"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Airborne Predator",
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
          "t": "9",
          "sv": "3+",
          "w": "12",
          "ld": "8+",
          "oc": "0",
          "name": "Hive Crone"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Drool cannon",
              "keywords": ["torrent"],
              "range": "12\"",
              "attacks": "2D6",
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
              "name": "Stinger salvoes",
              "keywords": [],
              "range": "24\"",
              "attacks": "8",
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
              "name": "Tentaclids",
              "keywords": ["anti-vehicle 4+", "devastating wounds"],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
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
              "name": "Scything wings",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thorax spur",
              "keywords": ["anti-fly 2+", "extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Fly",
        "Aircraft",
        "Great Devourer",
        "Hive Crone"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "f652fcb5-9711-533f-ae7c-498aff0f2ba2",
      "name": "Hive Guard",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["3-6 Hive Guard"],
      "loadout": "Every model is equipped with: shockcannon; xenos claws and teeth.",
      "wargear": [
        "Any number of models can each have their shockcannon replaced with 1 impaler cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "100"
        },
        {
          "models": "6",
          "cost": "200"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Defensive Stance",
            "description": "Each time you target this unit with the Fire Overwatch Stratagem, while resolving that Stratagem, hits are scored on unmodified Hit rolls of 5+, or unmodified Hit rolls of 4+ instead if this unit is within range of an objective marker."
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
          "sv": "3+",
          "w": "4",
          "ld": "8+",
          "oc": "1",
          "name": "Hive Guard"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Impaler cannon",
              "keywords": ["heavy", "indirect fire"],
              "range": "36\"",
              "attacks": "4",
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
              "name": "Shockcannon",
              "keywords": ["anti-vehicle 2+"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
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
              "name": "Xenos claws and teeth",
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
      "keywords": ["Infantry", "Great Devourer", "Hive Guard"],
      "factions": ["Tyranids"]
    },
    {
      "id": "8d9221f9-a074-5b1d-8d02-53e272a832d0",
      "name": "Hive Tyrant",
      "faction_id": "TYR",
      "leader": "This model can be attached to the following unit: ■ Tyrant Guard",
      "composition": ["1 Hive Tyrant"],
      "loadout": "This model is equipped with: monstrous bonesword and lash whip; monstrous scything talons.",
      "wargear": [
        "This model’s monstrous bonesword and lash whip can be replaced with one of the following: ◦ 1 heavy venom cannon ◦ 1 stranglethorn cannon ◦ 1 monstrous scything talons",
        "This model’s monstrous scything talons can be replaced with one of the following: ◦ 1 heavy venom cannon* ◦ 1 stranglethorn cannon* *  This model cannot be equipped with both a stranglethorn cannon and a heavy venom cannon. This model cannot be equipped with more than 1 heavy venom cannon, and it cannot be equipped with more than 1 stranglethorn cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "220"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Leader"],
        "faction": ["Shadow in the Warp", "Synapse"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Will of the Hive Mind",
            "description": "Once per turn, one friendly Tyranids unit within 12\" of one or more models with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase."
          },
          {
            "name": "Onslaught (Aura, Psychic)",
            "description": "While a friendly Tyranids unit is within 6\" of this model, ranged weapons equipped by models in that unit have the [ASSAULT] ability."
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
          "ld": "7+",
          "oc": "3",
          "name": "Hive Tyrant"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy venom cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Stranglethorn cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+1",
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
              "name": "Monstrous bonesword and lash whip",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Monstrous scything talons",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "4",
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
        "Psyker",
        "Great Devourer",
        "Synapse",
        "Hive Tyrant"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "b6d511cb-c07b-5e74-9aaf-0d2e07b841b3",
      "name": "Hormagaunts",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["10-20 Hormagaunts"],
      "loadout": "Every model is equipped with: Hormagaunt talons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "70"
        },
        {
          "models": "20",
          "cost": "140"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Bounding Leap",
            "description": "This unit is eligible to declare a charge in a turn in which it Advanced."
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
          "t": "3",
          "sv": "5+",
          "w": "1",
          "ld": "8+",
          "oc": "2",
          "name": "Hormagaunts"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Hormagaunt talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Great Devourer",
        "Endless Multitude",
        "Hormagaunts"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "0d3bc100-533c-5a07-93e5-b6e944c037fb",
      "name": "Lictor",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Lictor"],
      "loadout": "This model is equipped with: Lictor claws and talons.",
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
        "core": ["Fights First", "Infiltrators", "Lone Operative", "Stealth"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Feeder Tendrils",
            "description": "Each time this model destroys an enemy Character model, you gain 1CP."
          },
          {
            "name": "Pheromone Trail",
            "description": "Once per battle round, you can target one model with this ability with the Rapid Ingress Stratagem for 0CP."
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
          "t": "6",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "1",
          "name": "Lictor"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Lictor claws and talons",
              "keywords": ["precision"],
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
      "keywords": ["Infantry", "Great Devourer", "Lictor"],
      "factions": ["Tyranids"]
    },
    {
      "id": "34f8493b-83eb-5afb-9215-8cf8d720adba",
      "name": "Maleceptor",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Maleceptor"],
      "loadout": "This model is equipped with: psychic overload; massive scything talons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "165"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Shadow in the Warp", "Synapse"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Encephalic Diffusion (Aura, Psychic)",
            "description": "While an enemy unit is within 6\" of this model, each time a model in that unit makes an attack, subtract 1 from the Hit roll, and, if that enemy unit is Below Half-strength, subtract 1 from the Wound roll as well."
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
          "t": "11",
          "sv": "3+",
          "w": "14",
          "ld": "7+",
          "oc": "4",
          "name": "Maleceptor"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Psychic overload",
              "keywords": ["blast", "psychic"],
              "range": "18\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "10",
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
              "name": "Massive scything talons – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6+1"
            },
            {
              "name": "Massive scything talons – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Psyker",
        "Great Devourer",
        "Synapse",
        "Maleceptor"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "22c5eef9-80de-594a-be01-19174a72b2a9",
      "name": "Mawloc",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Mawloc"],
      "loadout": "This model is equipped with: distensible jaw; Mawloc scything talons.",
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
        "core": ["Deep Strike"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Terror From The Deep",
            "description": "Each time this unit is set up on the battlefield using the Deep Strike ability, roll one D6 for each enemy unit within 12\" of this model: on a 2-4, that unit suffers D3 mortal wounds; on a 5+, that unit suffers 3 mortal wounds and must take a Battle-shock test."
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
          "t": "10",
          "sv": "3+",
          "w": "14",
          "ld": "8+",
          "oc": "4",
          "name": "Mawloc"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Distensible jaw",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "extra attacks"
              ],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Mawloc scything talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "16",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Mawloc"],
      "factions": ["Tyranids"]
    },
    {
      "id": "413eff40-c743-561f-b8b6-d4a66638abfb",
      "name": "Mucolid Spores",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1-2 Mucolid Spores"],
      "loadout": "Every model is equipped with: nothing.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "45"
        },
        {
          "models": "2",
          "cost": "90"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Bio-minefield",
            "description": "Enemy units cannot start or end an Advance move within 6\" of this unit."
          },
          {
            "name": "Floating Death",
            "description": "Each time an enemy unit ends a move within 3\" of a model in this unit, and each time a model in this unit ends a move within 3\" of an enemy unit, roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D6 mortal wounds. The model in this unit that caused that roll is then destroyed."
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
          "m": "4\"",
          "t": "4",
          "sv": "7+",
          "w": "3",
          "ld": "8+",
          "oc": "0",
          "name": "Mucolid Spores"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [],
      "keywords": ["Beast", "Fly", "Great Devourer", "Mucolid Spores"],
      "factions": ["Tyranids"]
    },
    {
      "id": "f314346e-a318-5ce8-9dd4-3a9b35b22acd",
      "name": "Neurogaunts",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1-2 Neurogaunt Nodebeasts*", "10-20 Neurogaunts"],
      "loadout": "Every model is equipped with: xenos claws and teeth. * This unit can only contain 2 Neurogaunt Nodebeasts if it contains 20 Neurogaunts.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "11",
          "cost": "45"
        },
        {
          "models": "22",
          "cost": "90"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Neurocytes",
            "description": "While this unit is within Synapse Range of your army, it has the Synapse keyword."
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
          "ld": "8+",
          "oc": "1",
          "name": "Neurogaunts"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Xenos claws and teeth",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Great Devourer",
        "Endless Multitude",
        "Neurogaunts"
      ],
      "factions": ["Tyranids"],
      "ledBy": ["Neurotyrant"]
    },
    {
      "id": "690228cc-b07b-5d25-9643-7b50d9db5d5d",
      "name": "Neurotyrant",
      "faction_id": "TYR",
      "leader": "This model can be attached to the following units: ■ Neurogaunts ■ Tyrant Guard",
      "composition": ["1 Neurotyrant"],
      "loadout": "This model is equipped with: psychic scream; Neurotyrant claws and lashes.",
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
        "core": ["Leader"],
        "faction": ["Synapse", "Shadow in the Warp"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Node Lash (Psychic)",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll. If the target is Battle-shocked, add 1 to the Wound roll as well."
          },
          {
            "name": "Psychic Terror (Psychic)",
            "description": "If one or more Neurotyrants from your army are on the battlefield when you unleash the Shadow in the Warp, subtract 1 from the Battle-shock test each enemy unit on the battlefield must take as a result."
          },
          {
            "name": "Synaptic Relays",
            "description": "In your Command phase, you can select up to two friendly Tyranids units within 12\" of this model’s unit. Until the start of your next Command phase, the selected units are always considered to be within Synapse Range of your army. Designer’s Note: Place a Synaptic Relay token next to each selected unit to remind you."
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
          "t": "8",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Neurotyrant"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Psychic scream",
              "keywords": ["ignores cover", "psychic", "torrent"],
              "range": "18\"",
              "attacks": "2D6",
              "skill": "N/A",
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
              "name": "Neurotyrant claws and lashes",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
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
        "Psyker",
        "Great Devourer",
        "Synapse",
        "Neurotyrant"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "da6d41eb-57dc-5006-8015-d05579b5a4f6",
      "name": "Old One Eye",
      "faction_id": "TYR",
      "leader": "This model can be attached to the following unit: ■ Carnifexes",
      "composition": ["1 Old One Eye – Epic Hero"],
      "loadout": "This model is equipped with: Old One Eye’s claws and talons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "140"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+", "Leader"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Alpha Leader",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll."
          },
          {
            "name": "Unstoppable Monster",
            "description": "At the start of each player’s Command phase, this model regains up to D3 lost wounds."
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
          "t": "9",
          "sv": "2+",
          "w": "9",
          "ld": "8+",
          "oc": "3",
          "name": "Old One Eye"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Old One Eye’s claws and talons – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+1"
            },
            {
              "name": "Old One Eye’s claws and talons – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Great Devourer",
        "Old One Eye"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "599b2db7-f531-5ac3-9e6e-ed8a7081c02d",
      "name": "Parasite Of Mortrex",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Parasite of Mortrex"],
      "loadout": "This model is equipped with: barbed ovipositor; clawed limbs.",
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
        "core": ["Deep Strike", "Lone Operative", "Stealth"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Parasitic Infection",
            "description": "Each time an Infantry model is destroyed by an attack made with this model’s barbed ovipositor, after this model has finished making its attacks, you can add one new Ripper Swarms unit to your army consisting of D3 models and set it up within 3\" of this model. If you do, that Ripper Swarms unit can be set up within Engagement Range of the destroyed model’s unit (but not within Engagement Range of any other enemy units)."
          },
          {
            "name": "It Itches!",
            "description": "At the start of the Fight phase, select one enemy unit within Engagement Range of this model. That enemy unit must take a Battle-shock test."
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
          "t": "5",
          "sv": "4+",
          "w": "5",
          "ld": "8+",
          "oc": "1",
          "name": "Parasite Of Mortrex"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Barbed ovipositor",
              "keywords": ["anti-infantry 3+", "extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "2+",
              "strength": "3",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Clawed limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Fly",
        "Great Devourer",
        "Parasite of Mortrex"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "d5a50301-0327-56f8-8e31-1741c01c7b28",
      "name": "Psychophage",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Psychophage"],
      "loadout": "This model is equipped with: psychoclastic torrent; talons and betentacled maw.",
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
        "core": ["Deadly Demise 1", "Feel No Pain 5+"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Bio-stimulus (Aura)",
            "description": "While a friendly Tyranids unit is within 6\" of this model, models in that unit have the Feel No Pain 6+ ability."
          },
          {
            "name": "Feeding Frenzy",
            "description": "Each time this model makes a melee attack that targets a unit that is below its Starting Strength, add 1 to the Hit roll. If that target is also Below Half-strength, add 1 to the Wound roll as well."
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
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "8+",
          "oc": "3",
          "name": "Psychophage"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Psychoclastic torrent",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Talons and betentacled maw",
              "keywords": ["anti-psyker 2+", "devastating wounds"],
              "range": "Melee",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Psychophage"],
      "factions": ["Tyranids"]
    },
    {
      "id": "719c228c-1866-557f-a039-98eba8de59bf",
      "name": "Pyrovores",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1-3 Pyrovores"],
      "loadout": "Every model is equipped with: flamespurt; chitin-barbed limbs.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "30"
        },
        {
          "models": "2",
          "cost": "60"
        },
        {
          "models": "3",
          "cost": "90"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Burning Spray",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, that enemy unit cannot have the Benefit of Cover."
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
          "t": "6",
          "sv": "3+",
          "w": "4",
          "ld": "8+",
          "oc": "1",
          "name": "Pyrovores"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Flamespurt",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6+1",
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
              "name": "Chitin-barbed limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Great Devourer", "Pyrovores"],
      "factions": ["Tyranids"]
    },
    {
      "id": "cc767c7b-3110-509f-814e-98d9c58d1964",
      "name": "Raveners",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["3-6 Raveners"],
      "loadout": "Every model is equipped with: Ravener claws and talons.",
      "wargear": [
        "Any number of models can each be equipped with 1 thoracic bio-weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "75"
        },
        {
          "models": "6",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Death From Below",
            "description": "At the end of your opponent’s turn, if this unit is not within Engagement Range of one or more enemy units, you can remove it from the battlefield and place it into Strategic Reserves."
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
          "t": "5",
          "sv": "4+",
          "w": "3",
          "ld": "8+",
          "oc": "1",
          "name": "Raveners"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Thoracic bio-weapon",
              "keywords": [],
              "range": "12\"",
              "attacks": "3",
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
              "name": "Ravener claws and talons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Great Devourer", "Raveners"],
      "factions": ["Tyranids"]
    },
    {
      "id": "ab44d828-ed62-5627-afa5-70fcdadf98a0",
      "name": "Ripper Swarms",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["3-6 Ripper Swarms"],
      "loadout": "Every model is equipped with: xenos claws and teeth.",
      "wargear": [
        "All models in this unit can each be equipped with 1 spinemaws."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "35"
        },
        {
          "models": "6",
          "cost": "70"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Chitinous Horrors (Aura)",
            "description": "While an enemy unit is within Engagement Range of this unit, halve the Objective Control characteristic of models in that enemy unit."
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
          "t": "2",
          "sv": "6+",
          "w": "4",
          "ld": "8+",
          "oc": "0",
          "name": "Ripper Swarms"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Spinemaws",
              "keywords": ["pistol"],
              "range": "6\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Xenos claws and teeth",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "5+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Swarm", "Great Devourer", "Ripper Swarms"],
      "factions": ["Tyranids"]
    },
    {
      "id": "e4f63729-38f9-5035-9bdb-916d83b58539",
      "name": "Screamer-killer",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Screamer-Killer"],
      "loadout": "This model is equipped with: bio-plasmic scream; Screamer-Killer talons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "180"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Death Scream",
            "description": "In your Shooting phase, after this model has shot, select one unit hit by one or more of those attacks. That unit must take a Battle-shock test, subtracting 1 from that test."
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
          "t": "9",
          "sv": "2+",
          "w": "10",
          "ld": "8+",
          "oc": "3",
          "name": "Screamer-killer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bio-plasmic scream",
              "keywords": ["assault", "blast"],
              "range": "18\"",
              "attacks": "D6+3",
              "skill": "4+",
              "strength": "8",
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
              "name": "Screamer-killer talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Screamer-Killer"],
      "factions": ["Tyranids"]
    },
    {
      "id": "1c91f934-1556-543b-96e8-826242b407c6",
      "name": "Scythed Hierodule",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Scythed Hierodule"],
      "loadout": "This model is equipped with: bio-acid spray; Hierodule scything talons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "305"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Irresistible Force",
            "description": "This model is eligible to declare a charge in a turn in which it Fell Back."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-6 WOUNDS REMAINING",
          "description": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "12",
          "sv": "2+",
          "w": "18",
          "ld": "8+",
          "oc": "5",
          "name": "Scythed Hierodule"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bio-acid spray",
              "keywords": ["torrent"],
              "range": "18\"",
              "attacks": "3D6",
              "skill": "N/A",
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
              "name": "Hierodule scything talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "3+",
              "strength": "14",
              "ap": "-2",
              "damage": "D3+3"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Scythed Hierodule"],
      "factions": ["Tyranids"]
    },
    {
      "id": "041d0bee-aee2-5ac5-9311-6dface0f50db",
      "name": "Spore Mines",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["3-6 Spore Mines"],
      "loadout": "Every model is equipped with: nothing.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "50"
        },
        {
          "models": "6",
          "cost": "100"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Bio-minefield",
            "description": "Enemy units cannot start or end an Advance move within 6\" of this unit."
          },
          {
            "name": "Floating Death",
            "description": "Each time an enemy unit ends a move within 3\" of a model in this unit, and each time a model in this unit ends a move within 3\" of an enemy unit, roll one D6: on a 2-5, that enemy unit suffers 1 mortal wound; on a 6, that enemy unit suffers D3 mortal wounds. The model in this unit that caused that roll is then destroyed."
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
          "m": "4\"",
          "t": "1",
          "sv": "7+",
          "w": "1",
          "ld": "8+",
          "oc": "0",
          "name": "Spore Mines"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [],
      "keywords": ["Beast", "Fly", "Great Devourer", "Spore Mines"],
      "factions": ["Tyranids"]
    },
    {
      "id": "1f163976-4455-58f4-b61b-5d9c2fd09f6a",
      "name": "Sporocyst",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Sporocyst"],
      "loadout": "This model is equipped with: Sporocyst bio-weapons; flensing whips.",
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
        "core": ["Deadly Demise D3"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Seed Mucolids",
            "description": "In your Shooting phase, each time this model is selected to shoot, it can use this ability instead of making any attacks with its ranged weapons. If it does, you can add a new Mucolid Spores unit containing 1 model to your army and set it up anywhere on the battlefield that is within 18\" of this model but more than 9\" horizontally away from all enemy units."
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
          "m": "-",
          "t": "10",
          "sv": "3+",
          "w": "10",
          "ld": "8+",
          "oc": "0",
          "name": "Sporocyst"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Sporocyst bio-weapons",
              "keywords": ["hive defences"],
              "range": "24\"",
              "attacks": "5",
              "skill": "4+",
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
              "name": "Flensing whips",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Sporocyst"],
      "factions": ["Tyranids"]
    },
    {
      "id": "00fb3f2f-b6be-50ac-935d-eed391fe6ac1",
      "name": "Termagants",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["10-20 Termagants"],
      "loadout": "Every model is equipped with: fleshborer; xenos claws and teeth.",
      "wargear": [
        "All models in this unit can each have their fleshborer replaced with 1 Termagant devourer.",
        "All models in this unit can each have their fleshborer replaced with 1 Termagant spinefists."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "60"
        },
        {
          "models": "20",
          "cost": "120"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Skulking Horrors",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to D6\"."
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
          "w": "1",
          "ld": "8+",
          "oc": "2",
          "name": "Termagants"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Fleshborer",
              "keywords": ["assault"],
              "range": "18\"",
              "attacks": "1",
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
              "name": "Termagant spinefists",
              "keywords": ["assault", "pistol", "twin-linked"],
              "range": "12\"",
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
              "name": "Termagant devourer",
              "keywords": [],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Xenos claws and teeth",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
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
        "Great Devourer",
        "Endless Multitude",
        "Termagants"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "505ab8d4-2791-5d03-9052-6e1a43dde98c",
      "name": "Tervigon",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Tervigon"],
      "loadout": "This model is equipped with: stinger salvoes; massive scything talons.",
      "wargear": [
        "This model’s massive scything talons can be replaced with 1 massive crushing claws."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "200"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Shadow in the Warp", "Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Spawn Termagants",
            "description": "In your Command phase, you can select one friendly Termagants unit within 6\" of this model and return up to D3+3 destroyed Termagant models to that unit. A Termagants unit cannot be selected for this ability more than once per phase."
          },
          {
            "name": "Brood Progenitor (Aura, Psychic)",
            "description": "While a friendly Termagants unit is within 6\" of this model, ranged weapons equipped by models in that unit have the [LETHAL HITS] ability."
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
          "t": "11",
          "sv": "2+",
          "w": "16",
          "ld": "7+",
          "oc": "5",
          "name": "Tervigon"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Stinger salvoes",
              "keywords": [],
              "range": "24\"",
              "attacks": "8",
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
              "name": "Massive crushing claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Massive scything talons – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Massive scything talons – sweep",
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
      "keywords": [
        "Monster",
        "Character",
        "Psyker",
        "Great Devourer",
        "Synapse",
        "Tervigon"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "98de8243-66f7-535c-94ec-28a17277255b",
      "name": "The Swarmlord",
      "faction_id": "TYR",
      "leader": "This model can be attached to the following unit: ■ Tyrant Guard",
      "composition": ["1 Swarmlord – Epic Hero"],
      "loadout": "This model is equipped with: synaptic pulse; bone sabres.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "250"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Leader"],
        "faction": ["Shadow in the Warp", "Synapse"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Hive Commander",
            "description": "At the start of your Command phase, if this model is on the battlefield, you gain 1CP."
          },
          {
            "name": "Malign Presence",
            "description": "Once per battle, after your opponent uses a Stratagem, if this model is your Warlord and is on the battlefield, it can use this ability. If it does, until the end of the battle, increase that Stratagem’s cost to your opponent by 1CP."
          },
          {
            "name": "Domination of the Hive Mind",
            "description": "While a friendly Tyranids unit is within 9\" of this model, that unit is within your army’s Synapse Range."
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
          "ld": "7+",
          "oc": "3",
          "name": "The Swarmlord"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Synaptic pulse",
              "keywords": ["psychic", "torrent"],
              "range": "18\"",
              "attacks": "D6+3",
              "skill": "N/A",
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
              "name": "Bone sabres",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Psyker",
        "Great Devourer",
        "Synapse",
        "The Swarmlord"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "d71c0768-ad7f-5d9e-9cb8-e849dbc083f2",
      "name": "Toxicrene",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Toxicrene"],
      "loadout": "This model is equipped with: massive toxic lashes.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "200"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Grasping Tendrils",
            "description": "Each time an enemy unit (excluding Titanic units) within Engagement Range of one or more units from your army with this ability is selected to Fall Back, you can roll one D6: on a 3+, that enemy unit must Remain Stationary instead."
          },
          {
            "name": "Hypertoxic Miasma (Aura)",
            "description": "At the end of your Movement phase, roll one D6 for each enemy unit within 6\" of this model: on a 2-3, that unit suffers 1 mortal wound; on a 4-5, that unit suffers D3 mortal wounds; on a 6, that unit suffers D6 mortal wounds."
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
          "t": "11",
          "sv": "3+",
          "w": "14",
          "ld": "8+",
          "oc": "4",
          "name": "Toxicrene"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Massive toxic lashes",
              "keywords": ["anti-infantry 2+"],
              "range": "9\"",
              "attacks": "2D6",
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
              "name": "Massive toxic lashes",
              "keywords": ["anti-infantry 2+"],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Toxicrene"],
      "factions": ["Tyranids"]
    },
    {
      "id": "6c4e1665-c826-50e4-8db9-304ca1d6fb74",
      "name": "Trygon",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Trygon"],
      "loadout": "This model is equipped with: bio-electric pulse; Trygon scything talons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "180"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Subterranean Tunnels",
            "description": "Each time this model is set up on the battlefield using the Deep Strike ability, it can be set up anywhere on the battlefield that is more than 3\" horizontally away from all enemy units. When doing so, if this model is set up within 9\" of one or more enemy units, until the end of the turn, it is not eligible to declare a charge."
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
          "t": "10",
          "sv": "3+",
          "w": "14",
          "ld": "8+",
          "oc": "4",
          "name": "Trygon"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bio-electric pulse",
              "keywords": ["sustained hits 2"],
              "range": "12\"",
              "attacks": "6",
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
              "name": "Trygon scything talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Trygon"],
      "factions": ["Tyranids"]
    },
    {
      "id": "18355c44-85fc-575f-873f-963f19a561b6",
      "name": "Tyranid Warriors With Melee Bio-weapons",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Tyranid Prime", "2-5 Tyranid Warriors"],
      "loadout": "Every model is equipped with: bio-weapons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "90"
        },
        {
          "models": "6",
          "cost": "180"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Shadow in the Warp", "Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Adrenalised Onslaught",
            "description": "At the start of the Fight phase, you can select one of the following abilities to apply to models in this unit until the end of the phase: ■  Aggression Imperative: Each time a model in this unit makes a melee attack, re-roll a Hit roll of 1. ■  Preservation Imperative: Each time a saving throw is made for a model in this unit, re-roll a saving throw of 1."
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
          "t": "5",
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "2",
          "name": "Tyranid Warriors With Melee Bio-weapons"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Bio-weapons",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
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
        "Synapse",
        "Tyranid Warriors with Melee Bio-weapons"
      ],
      "factions": ["Tyranids"],
      "ledBy": ["Winged Tyranid Prime"]
    },
    {
      "id": "7cf26389-f7e6-5bb5-83db-4e93a8ade176",
      "name": "Tyranid Warriors With Ranged Bio-weapons",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Tyranid Prime", "2-5 Tyranid Warriors"],
      "loadout": "Every model is equipped with: devourer; bio-weapons.",
      "wargear": [
        "Any number of models can each have their devourer replaced with one of the following: ◦ 1 deathspitter ◦ 1 spinefists",
        "For every 3 models in this unit, 1 model’s devourer can be replaced with 1 barbed strangler.",
        "For every 3 models in this unit, 1 model’s devourer can be replaced with 1 venom cannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "70"
        },
        {
          "models": "6",
          "cost": "140"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Shadow in the Warp", "Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Adaptable Predators",
            "description": "This unit is eligible to shoot and declare a charge in a turn in which it Fell Back."
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
          "t": "5",
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "2",
          "name": "Tyranid Warriors With Ranged Bio-weapons"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Barbed strangler",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+1",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Deathspitter",
              "keywords": [],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Devourer",
              "keywords": [],
              "range": "18\"",
              "attacks": "5",
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
              "name": "Spinefists",
              "keywords": ["assault", "pistol", "twin-linked"],
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
              "name": "Venom cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "9",
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
              "name": "Bio-weapons",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Synapse",
        "Tyranid Warriors with Ranged Bio-weapons"
      ],
      "factions": ["Tyranids"],
      "ledBy": ["Winged Tyranid Prime"]
    },
    {
      "id": "fd1b3b32-8417-51ca-876f-082d5eef9851",
      "name": "Tyrannocyte",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Tyrannocyte"],
      "loadout": "This model is equipped with: Tyrannocyte bio-weapons; flensing whips.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 20 Tyranids Infantry models, or 1 Tyranids Monster model with a Wounds characteristic of 12 or less. Each Infantry model with a Wounds characteristic of more than 1 takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "105"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Aerial Seeding",
            "description": "This model must start the battle in Reserves, but neither it nor any units embarked within it are counted towards any limits placed on the maximum number of Reserves units you can start the battle with. This model can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules. Any units embarked within this model must immediately disembark after it has been set up on the battlefield, and they must be set up more than 9\" away from all enemy models. After this model has been set up on the battlefield, no units can embark within it."
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
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "8+",
          "oc": "2",
          "name": "Tyrannocyte"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Tyrannocyte bio-weapons",
              "keywords": [],
              "range": "24\"",
              "attacks": "5",
              "skill": "4+",
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
              "name": "Flensing whips",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Fly",
        "Transport",
        "Dedicated Transport",
        "Great Devourer",
        "Tyrannocyte"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "718f867e-0cfd-52ef-a8df-b2687ddcac88",
      "name": "Tyrannofex",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Tyrannofex"],
      "loadout": "This model is equipped with: fleshborer hive; stinger salvoes; powerful limbs.",
      "wargear": [
        "This model’s fleshborer hive can be replaced with one of the following: ◦ 1 acid spray ◦ 1 rupture cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "200"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Resilient Organism",
            "description": "Each time an attack is allocated to this model, subtract 1 from the Damage characteristic of that attack."
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
          "m": "9\"",
          "t": "12",
          "sv": "2+",
          "w": "16",
          "ld": "8+",
          "oc": "5",
          "name": "Tyrannofex"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Acid spray",
              "keywords": ["torrent"],
              "range": "18\"",
              "attacks": "D6+6",
              "skill": "N/A",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Fleshborer hive",
              "keywords": ["heavy", "sustained hits 1", "twin-linked"],
              "range": "24\"",
              "attacks": "20",
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
              "name": "Rupture cannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "18",
              "ap": "-4",
              "damage": "2D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Stinger salvoes",
              "keywords": [],
              "range": "24\"",
              "attacks": "8",
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
              "name": "Powerful limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "8",
              "ap": "0",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Monster", "Great Devourer", "Tyrannofex"],
      "factions": ["Tyranids"]
    },
    {
      "id": "38c53884-d96b-5972-8a17-740d18d07a31",
      "name": "Tyrant Guard",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["3-6 Tyrant Guard"],
      "loadout": "Every model is equipped with: scything talons and rending claws.",
      "wargear": [
        "Any number of models can each have their scything talons and rending claws replaced with one of the following: ◦ 1 bone cleaver, lash whip and rending claws ◦ 1 crushing claws and rending claws"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "95"
        },
        {
          "models": "6",
          "cost": "190"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Guardian Organism",
            "description": "While a Character model is leading this unit, that Character has the Feel No Pain 5+ ability."
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
          "t": "8",
          "sv": "3+",
          "w": "4",
          "ld": "8+",
          "oc": "1",
          "name": "Tyrant Guard"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Bone cleaver, lash whip and rending claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
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
              "name": "Crushing claws and rending claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Scything talons and rending claws",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Great Devourer", "Tyrant Guard"],
      "factions": ["Tyranids"],
      "ledBy": ["Hive Tyrant", "Neurotyrant", "The Swarmlord"]
    },
    {
      "id": "2e0c66ae-f16b-54cf-bb28-daf55aac09c5",
      "name": "Venomthropes",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["3-6 Venomthropes"],
      "loadout": "Every model is equipped with: toxic lashes.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "70"
        },
        {
          "models": "6",
          "cost": "140"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Stealth"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Foul Spores (Aura)",
            "description": "While a friendly Tyranids unit is within 6\" of this unit, each time a ranged attack targets that unit, models in that unit have the Benefit of Cover against that attack. In addition, while a friendly Tyranids unit (excluding Monsters) is within 6\" of this unit, models in that unit have the Stealth ability."
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
          "t": "5",
          "sv": "4+",
          "w": "3",
          "ld": "8+",
          "oc": "1",
          "name": "Venomthropes"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Toxic lashes",
              "keywords": ["anti-infantry 2+"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Fly", "Great Devourer", "Venomthropes"],
      "factions": ["Tyranids"]
    },
    {
      "id": "e072d88d-2084-536a-97bc-206e99ae6d3c",
      "name": "Von Ryan’s Leapers",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["3-6 Von Ryan’s Leapers"],
      "loadout": "Every model is equipped with: Leaper’s talons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "75"
        },
        {
          "models": "6",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Fights First", "Infiltrators", "Stealth"],
        "faction": ["Synapse"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Pouncing Leap",
            "description": "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already used that Stratagem on a different unit this phase."
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
          "t": "5",
          "sv": "4+",
          "w": "3",
          "ld": "8+",
          "oc": "1",
          "name": "Von Ryan’s Leapers"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Leaper’s talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Great Devourer", "Von Ryan’s Leapers"],
      "factions": ["Tyranids"]
    },
    {
      "id": "0d7e8129-da97-5e33-80e4-012f62c438c7",
      "name": "Winged Hive Tyrant",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Winged Hive Tyrant"],
      "loadout": "This model is equipped with: monstrous bonesword and lash whip; Tyrant talons.",
      "wargear": [
        "This model’s monstrous bonesword and lash whip can be replaced with one of the following: ◦ 1 heavy venom cannon ◦ 1 stranglethorn cannon ◦ 1 monstrous scything talons"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "195"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Shadow in the Warp", "Synapse"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Will of the Hive Mind",
            "description": "Once per turn, one friendly Tyranids unit within 12\" of one or more models with this ability can be targeted with a Stratagem for 0CP, even if another unit from your army has already been targeted with that Stratagem this phase."
          },
          {
            "name": "Paroxysm (Psychic)",
            "description": "At the start of the Fight phase, you can select one enemy unit within 12\" of and visible to this model and roll one D6: on a 1, this Psyker suffers D3 mortal wounds; on a 2+, until the end of the phase, subtract 1 from the Attacks characteristic of weapons equipped by models in that unit."
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
          "ld": "7+",
          "oc": "3",
          "name": "Winged Hive Tyrant"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy venom cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Stranglethorn cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+1",
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
              "name": "Monstrous bonesword and lash whip",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Monstrous scything talons",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Tyrant talons",
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
      "keywords": [
        "Monster",
        "Character",
        "Psyker",
        "Fly",
        "Great Devourer",
        "Synapse",
        "Winged Hive Tyrant"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "792bad62-c549-5721-8184-f4c025cc6f8a",
      "name": "Winged Tyranid Prime",
      "faction_id": "TYR",
      "leader": "This model can be attached to the following units: ■ Gargoyles ■ Tyranid Warriors with melee Bio-weapons ■ Tyranid Warriors with Ranged Bio-weapons",
      "composition": ["1 Winged Tyranid Prime"],
      "loadout": "This model is equipped with: Prime talons.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Shadow in the Warp", "Synapse"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Alpha Warrior",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability."
          },
          {
            "name": "Death Blow",
            "description": "If this model is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play."
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
          "t": "5",
          "sv": "4+",
          "w": "6",
          "ld": "7+",
          "oc": "1",
          "name": "Winged Tyranid Prime"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Prime talons",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Fly",
        "Great Devourer",
        "Synapse",
        "Winged Tyranid Prime"
      ],
      "factions": ["Tyranids"]
    },
    {
      "id": "63bb6521-6679-5ee4-83b0-09f3131380f5",
      "name": "Zoanthropes",
      "faction_id": "TYR",
      "leader": "",
      "composition": ["1 Neurothrope", "2-5 Zoanthropes"],
      "loadout": "Every model is equipped with: Warp Blast; xenos claws and teeth.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "90"
        },
        {
          "models": "6",
          "cost": "180"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Shadow in the Warp", "Synapse"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Spirit Leech (Aura, Psychic)",
            "description": "While this unit contains a Neurothrope, while an enemy unit is within 6\" of this unit, each time that enemy unit fails a Battle-shock test, it suffers D3 mortal wounds and one model in this unit regains up to D3 lost wounds."
          },
          {
            "name": "Warp Field (Aura, Psychic)",
            "description": "While a friendly Tyranids unit is within 6\" of this unit, models in that unit have a 6+ invulnerable save."
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
          "sv": "5+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Zoanthropes"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Warp Blast – witchfire",
              "keywords": ["blast", "psychic"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "D3"
            },
            {
              "name": "Warp Blast – focused witchfire",
              "keywords": ["lethal hits", "psychic"],
              "range": "24\"",
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
              "name": "Xenos claws and teeth",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "5+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Psyker",
        "Fly",
        "Great Devourer",
        "Synapse",
        "Zoanthropes"
      ],
      "factions": ["Tyranids"]
    }
  ],
  "colours": {
    "banner": "#411f41",
    "header": "#381a3a"
  }
}