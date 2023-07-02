window.data = window.data || {};
window.data.ADM = {
  "id": "AdM",
  "link": "https://game-datacards.eu",
  "name": "Adeptus Mechanicus",
  "is_subfaction": false,
  "parent_id": "",
  "enhancements": [
    {
      "name": "Archived Purge Protocols",
      "description": "Skitarii Marshal model only. At the start of the battle round, you can select one friendly Skitarii unit within 12\" of the bearer. Until the start of the next battle round, if the Protector Imperative is active for your army, the Conqueror Imperative is active for that unit instead, and if the Conqueror Imperative is active for your army, the Protector Imperative is active for that unit instead.",
      "keywords": ["Skitarii Marshal"],
      "excludes": [],
      "cost": "10"
    },
    {
      "name": "Excoriating Emanation",
      "description": "Adeptus Mechanicus model only. While the bearer is leading a unit, models in that unit have the Stealth ability.",
      "keywords": ["Adeptus Mechanicus"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "Master Annihilator",
      "description": "Adeptus Mechanicus model only. While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
      "keywords": ["Adeptus Mechanicus"],
      "excludes": [],
      "cost": "35"
    },
    {
      "name": "Omni-steriliser",
      "description": "Adeptus Mechanicus model only. Add 3 to the Attacks characteristic of the bearer's ranged weapons. In addition, the bearer's ranged weapons have the [ANTI-INFANTRY 2+] and [ANTI-MONSTER 4+] abilities.",
      "keywords": ["Adeptus Mechanicus"],
      "excludes": [],
      "cost": "20"
    }
  ],
  "datasheets": [
    {
      "id": "91f25fb4-4f2b-56e8-a5ef-911b61833a59",
      "name": "Archaeopter Fusilave",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1 Archaeopter Fusilave"],
      "loadout": "This model is equipped with: cognis heavy stubber array; armoured hull; command uplink.",
      "wargear": [
        "This model’s command uplink can be replaced with 1 chaff launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaff Launcher",
            "description": "The bearer has the Smoke keyword."
          },
          {
            "name": "Command Uplink",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
          }
        ],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Bomb Rack",
            "description": "Each time this model finishes a Normal move, you can select one enemy unit it moved across and roll six D6: for each 3+, that unit suffers 1 mortal wound."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-3 WOUNDS REMAINING",
          "description": "While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Archaeopter Fusilave"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Cognis heavy stubber array",
              "keywords": ["rapid fire 9", "sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "9",
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
      "keywords": [
        "Vehicle",
        "Aircraft",
        "Fly",
        "Imperium",
        "Skitarii",
        "Archaeopter Fusilave"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "a4830798-deae-5bf2-9f49-4b5e5e5bd4bb",
      "name": "Archaeopter Stratoraptor",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1 Archaeopter Stratoraptor"],
      "loadout": "This model is equipped with: 2 cognis heavy stubbers; 2 heavy phosphor blasters; twin cognis lascannon; armoured hull; command uplink.",
      "wargear": [
        "This model’s command uplink can be replaced with 1 chaff launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "165"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaff Launcher",
            "description": "The bearer has the Smoke keyword."
          },
          {
            "name": "Command Uplink",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
          }
        ],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Strafing Run",
            "description": "Each time this model makes a ranged attack that targets an enemy unit (excluding units that can Fly), add 1 to the Hit roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-3 WOUNDS REMAINING",
          "description": "While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Archaeopter Stratoraptor"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Cognis heavy stubber",
              "keywords": ["rapid fire 3", "sustained hits 1"],
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
              "name": "Heavy phosphor blaster",
              "keywords": ["ignores cover"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Twin cognis lascannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
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
      "keywords": [
        "Vehicle",
        "Aircraft",
        "Fly",
        "Imperium",
        "Skitarii",
        "Archaeopter Stratoraptor"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "b8f2f15a-f7ca-5d18-a8fd-9532d26292c7",
      "name": "Archaeopter Transvector",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1 Archaeopter Transvector"],
      "loadout": "This model is equipped with: cognis heavy stubber array; armoured hull; command uplink.",
      "wargear": [
        "This model’s command uplink can be replaced with 1 chaff launcher."
      ],
      "transport": "This model has a transport capacity of 11 Skitarii Infantry or Tech-Priest Infantry models. It cannot transport Jump Pack or Kataphron models.",
      "points": [
        {
          "models": "1",
          "cost": "155"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Chaff Launcher",
            "description": "The bearer has the Smoke keyword."
          },
          {
            "name": "Command Uplink",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
          }
        ],
        "core": ["Deadly Demise D3", "Deep Strike", "Hover"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Aerial Deployment",
            "description": "If this model starts the game in Hover mode and in Strategic Reserves, it can be set up in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-3 WOUNDS REMAINING",
          "description": "While this model has 1-3 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "7+",
          "oc": "0",
          "name": "Archaeopter Transvector"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Cognis heavy stubber array",
              "keywords": ["rapid fire 9", "sustained hits 1", "twin-linked"],
              "range": "36\"",
              "attacks": "9",
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
      "keywords": [
        "Vehicle",
        "Aircraft",
        "Transport",
        "Fly",
        "Imperium",
        "Skitarii",
        "Archaeopter Transvector"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "3f62892a-43a7-59c6-89b7-405b1e72cbd6",
      "name": "Belisarius Cawl",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1 Belisarius Cawl – Epic Hero"],
      "loadout": "This model is equipped with: solar atomiser; arc scourge; Cawl’s Omnissian axe; mechadendrite hive.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "185"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [
          {
            "name": "CANTICLES OF THE OMNISSIAH",
            "abilities": [
              {
                "name": "Invocation of Machine Vengeance (Aura)",
                "description": "While a friendly Adeptus Mechanicus unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1."
              },
              {
                "name": "Mantra of Discipline (Aura)",
                "description": "While a friendly Adeptus Mechanicus unit is within 6\" of this model, each time you take a Battle-shock or Leadership test for that unit, you can re-roll that test."
              },
              {
                "name": "Shroudpsalm (Aura)",
                "description": "While a friendly Adeptus Mechanicus unit is within 6\" of this model, that unit has the Stealth ability."
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
            "name": "Canticles of the Omnissiah",
            "description": "At the start of the battle round, select one of the abilities in the Canticles of the Omnissiah section (see left). Until the start of the next battle round, this model has that ability."
          },
          {
            "name": "Mechanicus Bodyguard",
            "description": "While this model is within 3\" of one or more other friendly Adeptus Mechanicus units, this model has the Lone Operative ability."
          },
          {
            "name": "Self-repair Mechanisms",
            "description": "At the start of your Command phase, this model regains up to D3 lost wounds."
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
          "t": "8",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Belisarius Cawl"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Solar atomiser",
              "keywords": ["blast", "melta d3"],
              "range": "18\"",
              "attacks": "D3",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Arc scourge",
              "keywords": [
                "anti-vehicle 4+",
                "devastating wounds",
                "extra attacks"
              ],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Cawl’s Omnissian axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Mechadendrite hive",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Imperium",
        "Tech-Priest",
        "Belisarius Cawl"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "4cf53304-aa75-538d-ac25-d186e6cbee2c",
      "name": "Corpuscarii Electro-priests",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["5-10 Corpuscarii Electro-Priests"],
      "loadout": "Every model is equipped with: electrostatic gauntlets.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "65"
        },
        {
          "models": "10",
          "cost": "130"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Feel No Pain 5+"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Electro-infusion",
            "description": "While a Character model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll."
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
          "sv": "7+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Corpuscarii Electro-priests"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Electrostatic gauntlets",
              "keywords": ["pistol", "sustained hits 2"],
              "range": "12\"",
              "attacks": "3",
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
              "name": "Electrostatic gauntlets",
              "keywords": ["sustained hits 2"],
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
      "keywords": ["Infantry", "Imperium", "Electro-Priests", "Corpuscarii"],
      "factions": ["Adeptus Mechanicus"],
      "ledBy": [
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "53661916-dc81-5293-919b-5c31b0bf7e36",
      "name": "Cybernetica Datasmith",
      "faction_id": "AdM",
      "leader": "This model must be attached to the following unit: ■ Kastelan Robots You must attach this model to a Kastelan Robots unit, even if one or more other Cybernetica Datasmith models have already been attached to it. In such cases, if that Bodyguard unit is destroyed, the Leader units attached to it become separate units with their original Starting Strengths. If you cannot attach this model to a Kastelan Robots unit, this model cannot be deployed and counts as having been destroyed during the first battle round.",
      "composition": ["1 Cybernetica Datasmith"],
      "loadout": "This model is equipped with: archeotech pistol; power fist.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "35"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Battle Protocols",
            "description": "In your Command phase, if this model is leading a Kastelan Robots unit, it can set that unit’s battle protocol. If it does, take a Leadership test for this model; if that test is passed, that unit enters a protocol of your choice from those listed below. Once a unit enters a protocol, it remains in that protocol until it enters a different one. ■  Protector Protocol: Add 2 to the Attacks characteristic of ranged weapons equipped by Kastelan Robot models in that unit. ■  Conqueror Protocol: Add 2 to the Attacks characteristic of melee weapons equipped by Kastelan Robot models in that unit. ■  Aegis Protocol: Add 1 to the Toughness characteristic of Kastelan Robot models in that unit."
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
          "sv": "2+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Cybernetica Datasmith"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
        "Character",
        "Imperium",
        "Tech-Priest",
        "Cybernetica Datasmith"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "f6c2e253-82e2-54bf-9125-5e195516b349",
      "name": "Fulgurite Electro-priests",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["5-10 Fulgurite Electro-Priests"],
      "loadout": "Every model is equipped with: electroleech stave.",
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
        "core": ["Feel No Pain 5+"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Electro-infusion",
            "description": "While a Character model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll."
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
          "sv": "7+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Fulgurite Electro-priests"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Electroleech stave",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Electro-Priests", "Fulgurite"],
      "factions": ["Adeptus Mechanicus"],
      "ledBy": [
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "1ac9768e-3ffe-539f-900d-1f33f9087eb2",
      "name": "Ironstrider Ballistarii",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1-3 Ironstrider Ballistarii"],
      "loadout": "Every model is equipped with: twin cognis autocannon; Ironstrider feet.",
      "wargear": [
        "Any number of models can each have their twin cognis autocannon replaced with 1 twin cognis lascannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "50"
        },
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
        "core": ["Deadly Demise 1"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Elevated Strider",
            "description": "This unit is eligible to shoot and declare a charge in a turn in which it Fell Back, and you can re-roll Desperate Escape tests taken for models in this unit."
          },
          {
            "name": "Broad Spectrum Data-tether",
            "description": "Each time you select this unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
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
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Ironstrider Ballistarii"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Twin cognis autocannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin cognis lascannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Ironstrider feet",
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
      "keywords": [
        "Vehicle",
        "Walker",
        "Smoke",
        "Imperium",
        "Skitarii",
        "Ironstrider Ballistarii"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "11fd9afc-58f4-5280-94a2-7f30776436af",
      "name": "Kastelan Robots",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["2-4 Kastelan Robots"],
      "loadout": "Every model is equipped with: incendine combustor; twin Kastelan fist.",
      "wargear": [
        "Any number of models can each have their twin Kastelan fist replaced with one of the following: ◦  1 Kastelan phosphor blaster and 1 Kastelan fist ◦ 1 twin Kastelan phosphor blaster and 1 close combat weapon",
        "Any number of models can each have their incendine combustor replaced with 1 heavy phosphor blaster."
      ],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "215"
        },
        {
          "models": "4",
          "cost": "430"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Robotic Bodyguard",
            "description": "While a Cybernetica Datasmith model is leading this unit, that model has the Feel No Pain 4+ ability."
          },
          {
            "name": "Repulsor Grid",
            "description": "Each time a ranged attack is allocated to a Kastelan Robot model in this unit, on an unmodified saving throw of 6, the attacking unit suffers 1 mortal wound after it has finished making its attacks."
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
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Kastelan Robots"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy phosphor blaster",
              "keywords": ["ignores cover"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Incendine combustor",
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
              "name": "Kastelan phosphor blaster",
              "keywords": ["ignores cover"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin Kastelan phosphor blaster",
              "keywords": ["ignores cover", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Kastelan fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin Kastelan fist",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Imperium", "Kastelan Robots"],
      "factions": ["Adeptus Mechanicus"],
      "ledBy": ["Cybernetica Datasmith"]
    },
    {
      "id": "8277da97-bfc9-5597-99dc-cbed85744e0e",
      "name": "Kataphron Breachers",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["3-6 Kataphron Breachers"],
      "loadout": "Every model is equipped with: heavy arc rifle; arc claw.",
      "wargear": [
        "Any number of models can each have their heavy arc rifle replaced with 1 torsion cannon.",
        "Any number of models can each have their arc claw replaced with 1 hydraulic claw."
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
        "wargear": [],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Breaching Command",
            "description": "Each time a model in this unit makes an attack, re-roll a Hit roll of 1. While this unit is within 6” of one or more friendly Adeptus Mechanicus Battleline units, you can re-roll the Hit roll instead."
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
          "sv": "3+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Kataphron Breachers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy arc rifle",
              "keywords": ["anti-vehicle 4+", "rapid fire 2"],
              "range": "36\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Torsion cannon",
              "keywords": ["anti-infantry 2+", "blast"],
              "range": "48\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "6",
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
              "name": "Arc claw",
              "keywords": ["anti-vehicle 4+"],
              "range": "Melee",
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
              "name": "Hydraulic claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Kataphron", "Breachers"],
      "factions": ["Adeptus Mechanicus"],
      "ledBy": [
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "c1893b52-e426-59c4-aa4d-0a03e4b329ad",
      "name": "Kataphron Destroyers",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["3-6 Kataphron Destroyers"],
      "loadout": "Every model is equipped with: heavy grav-cannon; phosphor blaster; close combat weapon.",
      "wargear": [
        "Any number of models can each have their heavy grav-cannon replaced with 1 Kataphron plasma culverin.",
        "Any number of models can each have their phosphor blaster replaced with 1 cognis flamer."
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
        "wargear": [],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Sentinel Directives",
            "description": "Each time you target this unit with the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 5+ when resolving that Stratagem."
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Kataphron Destroyers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Cognis flamer",
              "keywords": ["ignores cover", "torrent"],
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
              "name": "Heavy grav-cannon",
              "keywords": ["anti-vehicle 2+"],
              "range": "30\"",
              "attacks": "4",
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
              "name": "Kataphron plasma culverin – standard",
              "keywords": [],
              "range": "36\"",
              "attacks": "4",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Kataphron plasma culverin – supercharge",
              "keywords": ["hazardous"],
              "range": "36\"",
              "attacks": "4",
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
              "name": "Phosphor blaster",
              "keywords": ["ignores cover", "rapid fire 1"],
              "range": "24\"",
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
              "name": "Close combat weapon",
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
      "keywords": ["Infantry", "Imperium", "Kataphron", "Destroyers"],
      "factions": ["Adeptus Mechanicus"],
      "ledBy": [
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "99cde65d-31e7-523a-9791-8fe0f1e1c965",
      "name": "Onager Dunecrawler",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1 Onager Dunecrawler"],
      "loadout": "This model is equipped with: eradication beamer; Dunecrawler legs.",
      "wargear": [
        "This model’s eradication beamer can be replaced with one of the following: ◦ 1 daedalus missile launcher and 1 Icarus array ◦  1 neutron laser and 1 cognis heavy stubber ◦ 1 twin Onager heavy phosphor blaster",
        "This model can be equipped with 1 additional cognis heavy stubber.",
        "This model can be equipped with one of the following: ◦ 1 broad spectrum data-tether ◦ 1 smoke launchers"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "140"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Broad spectrum data-tether",
            "description": "Each time you select the bearer as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
          },
          {
            "name": "Smoke launchers",
            "description": "The bearer has the Smoke keyword."
          }
        ],
        "core": ["Deadly Demise D3"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Dunecrawler",
            "description": "This model can be moved over terrain features that are 4\" or less in height as if they were not there."
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
          "w": "11",
          "ld": "7+",
          "oc": "3",
          "name": "Onager Dunecrawler"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Cognis heavy stubber",
              "keywords": ["rapid fire 3", "sustained hits 1"],
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
              "name": "Daedalus missile launcher",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Eradication beamer – dissipated",
              "keywords": ["blast", "sustained hits d3"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Eradication beamer – focused",
              "keywords": ["blast", "sustained hits d3"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "9",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Heavy phosphor blaster",
              "keywords": ["ignores cover"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Neutron laser",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Icarus array",
              "keywords": ["anti-fly 4+", "twin-linked"],
              "range": "48\"",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin Onager heavy phosphor blaster",
              "keywords": ["ignores cover", "twin-linked"],
              "range": "36\"",
              "attacks": "4",
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
              "name": "Dunecrawler legs",
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
        "Walker",
        "Imperium",
        "Skitarii",
        "Onager Dunecrawler"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "b745d158-f5fd-54c0-8564-e1a67b432621",
      "name": "Pteraxii Skystalkers",
      "faction_id": "AdM",
      "leader": "",
      "composition": [
        "1 Pteraxii Skystalker Alpha",
        "4-9 Pteraxii Skystalkers"
      ],
      "loadout": "The Pteraxii Skystalker Alpha model is equipped with: flechette blaster; taser goad. Every Pteraxii Skystalker model is equipped with: flechette carbine; close combat weapon.",
      "wargear": ["None"],
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
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Ride the Thermals",
            "description": "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can do one of the following: ■  Make a Normal move of up to 6\". ■  Make a Normal move of up to 12\", provided every model in this unit ends that move wholly within 6\" of one or more friendly Adeptus Mechanicus Battleline units. In either case, if it does, until the end of the turn, this unit is not eligible to declare a charge."
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
          "t": "4",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Pteraxii Skystalkers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Flechette blaster",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "5",
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
              "name": "Flechette carbine",
              "keywords": [],
              "range": "18\"",
              "attacks": "6",
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
              "name": "Taser goad",
              "keywords": ["sustained hits 2"],
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
        "Infantry",
        "Fly",
        "Jump Pack",
        "Grenades",
        "Imperium",
        "Skitarii",
        "Pteraxii Skystalkers"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "c2cae0ff-1d6d-54ad-8f3f-f2b1b18f5450",
      "name": "Pteraxii Sterylizors",
      "faction_id": "AdM",
      "leader": "",
      "composition": [
        "1 Pteraxii Sterylizor Alpha",
        "4-9 Pteraxii Sterylizors"
      ],
      "loadout": "The Pteraxii Sterylizor Alpha model is equipped with: flechette blaster; Pteraxii talons; taser goad. Every Pteraxii Sterylizor model is equipped with: phosphor torch; Pteraxii talons.",
      "wargear": ["None"],
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
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Searing Conflagration",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit (excluding Monsters and Vehicles) that was hit by one or more of this unit’s phosphor torches this phase and roll one D6, adding 3 to the result if this unit is within 6\" of one or more friendly Adeptus Mechanicus Battleline units. On a 4+, until the end of your opponent’s next turn, that enemy unit is aflame. While a unit is aflame, subtract 2\" from its Move characteristic and subtract 2 from Advance and Charge rolls made for it."
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
          "t": "4",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Pteraxii Sterylizors"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Flechette blaster",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "5",
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
              "name": "Phosphor torch",
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
              "name": "Pteraxii talons",
              "keywords": [],
              "range": "Melee",
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
              "name": "Taser goad",
              "keywords": ["sustained hits 2"],
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
        "Infantry",
        "Fly",
        "Jump Pack",
        "Imperium",
        "Skitarii",
        "Pteraxii Sterylizors"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "70269b85-1b31-543f-8c14-697547dafe48",
      "name": "Serberys Raiders",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1 Serberys Raider Alpha", "2-5 Serberys Raiders"],
      "loadout": "The Serberys Raider Alpha model is equipped with: archeotech pistol; galvanic carbine; cavalry sabre and clawed limbs. Every Serberys Raider model is equipped with: galvanic carbine; cavalry sabre and clawed limbs.",
      "wargear": [
        "1 Serberys Raider can be equipped with 1 enhanced data-tether."
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
        "wargear": [
          {
            "name": "Enhanced data-tether",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
          }
        ],
        "core": ["Scouts 9\""],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Tactica Obliqua",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can do one of the following: ■  Make a Normal move of up to D6\". ■  Make a Normal move of up to 6\", provided every model in this unit ends that move wholly within 6\" of one or more friendly Adeptus Mechanicus Battleline units."
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
          "t": "4",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "Serberys Raiders"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Galvanic carbine",
              "keywords": ["devastating wounds"],
              "range": "18\"",
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
              "name": "Cavalry sabre and clawed limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Imperium", "Skitarii", "Serberys Raiders"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "766d924f-db7c-5ccf-866d-5ed47c6bdfbe",
      "name": "Serberys Sulphurhounds",
      "faction_id": "AdM",
      "leader": "",
      "composition": [
        "1 Serberys Sulphurhound Alpha",
        "2-5 Serberys Sulphurhounds"
      ],
      "loadout": "The Serberys Sulphurhound Alpha model is equipped with: phosphor blast pistol; sulphur breath; cavalry arc maul; clawed limbs. Every Serberys Sulphurhound model is equipped with: twin phosphor pistols; sulphur breath; clawed limbs.",
      "wargear": [
        "For every 3 models in this unit, 1 Serberys Sulphurhound’s twin phosphor pistols can be replaced with 1 phosphor blast carbine and 1 phosphor pistol."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "65"
        },
        {
          "models": "6",
          "cost": "130"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Line-breakers",
            "description": "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6 for each model in this unit, adding 2 to the result if this unit started its Charge move within 6\" of one or more friendly Adeptus Mechanicus Battleline units. For each 4+, that enemy unit suffers 1 mortal wound."
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
          "t": "4",
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "Serberys Sulphurhounds"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Phosphor blast carbine",
              "keywords": ["blast", "ignores cover"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Phosphor blast pistol",
              "keywords": ["ignores cover", "pistol"],
              "range": "12\"",
              "attacks": "D3",
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
              "name": "Phosphor pistol",
              "keywords": ["ignores cover", "pistol"],
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
              "name": "Sulphur breath",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "9\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin phosphor pistols",
              "keywords": ["ignores cover", "pistol", "twin-linked"],
              "range": "12\"",
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
              "name": "Cavalry arc maul",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Clawed limbs",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Imperium", "Skitarii", "Serberys Sulphurhounds"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "98f32d4e-f2e4-5b8a-a274-bf31c4467a77",
      "name": "Servitors",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["4 Servitors"],
      "loadout": "Every model is equipped with: Servitor’s servo-arm.",
      "wargear": [
        "Up to 2 models can each have their Servitor’s servo-arm replaced with one of the following: ◦ 1 heavy bolter and 1 Servitor’s tools ◦ 1 multi-melta and 1 Servitor’s tools ◦ 1 plasma cannon and 1 Servitor’s tools"
      ],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "50"
        },
        {
          "models": "4",
          "cost": "50"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Mindlock",
            "description": "While a Tech-Priest model is leading this unit, improve the Ballistic Skill and Weapon Skill characteristics of ranged and melee weapons equipped by Servitor models in this unit by 1."
          }
        ],
        "special": [
          {
            "name": "SERVITOR RETINUE",
            "description": "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a Tech-Priest Enginseer model (a unit cannot have more than one Servitors unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly."
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
          "t": "3",
          "sv": "4+",
          "w": "1",
          "ld": "8+",
          "oc": "0",
          "name": "Servitors"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
              "skill": "6+",
              "strength": "5",
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
              "skill": "6+",
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
              "skill": "6+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma cannon – supercharge",
              "keywords": ["heavy", "blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "6+",
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
              "name": "Servitor’s servo-arm",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Servitor’s tools",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Servitors"],
      "factions": ["Adeptus Mechanicus"],
      "ledBy": ["Tech-priest Enginseer"]
    },
    {
      "id": "3b98c029-9ae1-54d3-a3c4-f008382cca2b",
      "name": "Sicarian Infiltrators",
      "faction_id": "AdM",
      "leader": "",
      "composition": [
        "1 Sicarian Infiltrator Princeps",
        "4-9 Sicarian Infiltrators"
      ],
      "loadout": "Every model is equipped with: stubcarbine; power weapon.",
      "wargear": [
        "Any number of models can each have their stubcarbine and power weapon replaced with 1 flechette blaster and 1 taser goad."
      ],
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
        "core": ["Infiltrators", "Stealth"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Neurostatic Interference (Aura)",
            "description": "While an enemy unit is within 6\" of this unit, each time a Battle-shock or Leadership test is taken for that unit, subtract 1 from that test. While this unit is within 6\" of one or more friendly Adeptus Mechanicus Battleline units, subtract 2 from that test instead."
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
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Sicarian Infiltrators"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Flechette blaster",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "5",
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
              "name": "Stubcarbine",
              "keywords": ["pistol"],
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
        },
        {
          "profiles": [
            {
              "name": "Taser goad",
              "keywords": ["sustained hits 2"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Skitarii", "Sicarian Infiltrators"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "ed740a5b-3573-596f-845e-81c03469e598",
      "name": "Sicarian Ruststalkers",
      "faction_id": "AdM",
      "leader": "",
      "composition": [
        "1 Sicarian Ruststalker Princeps",
        "4-9 Sicarian Ruststalkers"
      ],
      "loadout": "Every model is equipped with: transonic razor and chordclaw.",
      "wargear": [
        "Any number of Sicarian Ruststalkers can each have their transonic razor and chordclaw replaced with 1 transonic blades.",
        "The Sicarian Ruststalker Princeps’ transonic razor and chordclaw can be replaced with 1 transonic blades and chordclaw."
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
        "core": ["Stealth"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Optimised Gait",
            "description": "Add 1 to Advance and Charge rolls made for this unit. While this unit is within 6\" of one or more friendly Adeptus Mechanicus Battleline units, add 2 to Advance and Charge rolls made for this unit instead."
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
          "sv": "4+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Sicarian Ruststalkers"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Transonic blades",
              "keywords": ["devastating wounds", "precision"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Transonic blades and chordclaw",
              "keywords": [
                "anti-infantry 3+",
                "devastating wounds",
                "precision"
              ],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Transonic razor and chordclaw",
              "keywords": ["anti-infantry 3+", "precision"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Skitarii", "Sicarian Ruststalkers"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "5a618444-fd19-5bba-b585-7d8618bdb84e",
      "name": "Skitarii Marshal",
      "faction_id": "AdM",
      "leader": "This model can be attached to the following units: ■ Skitarii Rangers ■ Skitarii Vanguard",
      "composition": ["1 Skitarii Marshal"],
      "loadout": "This model is equipped with: archeotech pistol; control stave.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "45"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Control Stave",
            "description": "The bearer’s unit can still be selected as the target of a Stratagem while Battle-shocked."
          }
        ],
        "core": ["Leader"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Control Edict",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, you can re-roll the Hit roll."
          },
          {
            "name": "Servo-skull Uplink",
            "description": "Once per turn, you can select this model’s unit for a Stratagem even if that Stratagem has already been used on another unit from your army this phase."
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
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Skitarii Marshal"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Control stave",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Imperium", "Skitarii", "Marshal"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "dce7d828-db1b-5c95-9190-0fe0b05960bc",
      "name": "Skitarii Rangers",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1 Skitarii Ranger Alpha", "9 Skitarii Rangers"],
      "loadout": "Every model is equipped with: galvanic rifle; close combat weapon.",
      "wargear": [
        "The Skitarii Ranger Alpha can be equipped with 1 Alpha combat weapon.",
        "The Skitarii Ranger Alpha’s galvanic rifle can be replaced with 1 archeotech pistol.",
        "1 Skitarii Ranger’s galvanic rifle can be replaced with 1 arc rifle.",
        "1 Skitarii Ranger’s galvanic rifle can be replaced with 1 plasma caliver.",
        "1 Skitarii Ranger’s galvanic rifle can be replaced with 1 transuranic arquebus.",
        "1 Skitarii Ranger equipped with a galvanic rifle can be equipped with one of the following: ◦ 1 enhanced data-tether* ◦ 1 omnispex* *  That model’s galvanic rifle cannot be replaced."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "125"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Enhanced data-tether",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
          },
          {
            "name": "Omnispex",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability."
          }
        ],
        "core": ["Scouts 6\""],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Objective Scouted",
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
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "Skitarii Rangers"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Arc rifle",
              "keywords": [
                "anti-vehicle 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "30\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Galvanic rifle",
              "keywords": [],
              "range": "30\"",
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
              "name": "Plasma caliver – standard",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma caliver – supercharge",
              "keywords": ["hazardous"],
              "range": "30\"",
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
              "name": "Transuranic arquebus",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
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
              "name": "Alpha combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
        }
      ],
      "keywords": ["Infantry", "Battleline", "Imperium", "Skitarii", "Rangers"],
      "factions": ["Adeptus Mechanicus"],
      "ledBy": [
        "Skitarii Marshal",
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "545bfcca-d944-54d6-b612-1fbf1e59eee9",
      "name": "Skitarii Vanguard",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1 Skitarii Vanguard Alpha", "9 Skitarii Vanguard"],
      "loadout": "Every model is equipped with: radium carbine; close combat weapon.",
      "wargear": [
        "The Skitarii Vanguard Alpha can be equipped with 1 Alpha combat weapon.",
        "The Skitarii Vanguard Alpha’s radium carbine can be replaced with 1 archeotech pistol.",
        "1 Skitarii Vanguard’s radium carbine can be replaced with 1 arc rifle.",
        "1 Skitarii Vanguard’s radium carbine can be replaced with 1 plasma caliver.",
        "1 Skitarii Vanguard’s radium carbine can be replaced with 1 transuranic arquebus.",
        "1 Skitarii Vanguard equipped with a radium carbine can be equipped with one of the following: ◦ 1 enhanced data-tether* ◦ 1 omnispex* *  That model’s radium carbine cannot be replaced."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "100"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Enhanced data-tether",
            "description": "Each time you select the bearer’s unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
          },
          {
            "name": "Omnispex",
            "description": "Ranged weapons equipped by models in the bearer’s unit have the [IGNORES COVER] ability."
          }
        ],
        "core": [],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Rad-saturation (Aura)",
            "description": "While an enemy unit (excluding Vehicle units) is within 3\" of this unit, subtract 1 from the Objective Control characteristic of models in that unit."
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
          "ld": "7+",
          "oc": "2",
          "name": "Skitarii Vanguard"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Arc rifle",
              "keywords": [
                "anti-vehicle 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "30\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Plasma caliver – standard",
              "keywords": [],
              "range": "30\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma caliver – supercharge",
              "keywords": ["hazardous"],
              "range": "30\"",
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
              "name": "Radium carbine",
              "keywords": ["anti-infantry 4+"],
              "range": "18\"",
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
              "name": "Transuranic arquebus",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "7",
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
              "name": "Alpha combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Imperium",
        "Skitarii",
        "Vanguard"
      ],
      "factions": ["Adeptus Mechanicus"],
      "ledBy": [
        "Skitarii Marshal",
        "Tech-priest Dominus",
        "Tech-priest Enginseer",
        "Tech-priest Manipulus",
        "Technoarcheologist"
      ]
    },
    {
      "id": "140f2de9-984b-5fa2-9c66-4cd4fde3c1be",
      "name": "Skorpius Disintegrator",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1 Skorpius Disintegrator"],
      "loadout": "This model is equipped with: belleros energy cannon; 3 cognis heavy stubbers; disruptor missile launcher; armoured hull.",
      "wargear": [
        "This model’s belleros energy cannon can be replaced with 1 ferrumite cannon."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Broad Spectrum Data-tether",
            "description": "Each time you select this model as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
          },
          {
            "name": "Blistering Salvoes",
            "description": "Each time this model makes an attack with a belleros energy cannon that targets an Infantry unit, add 1 to the Hit roll. Each time this model makes an attack with a ferrumite cannon that targets a Monster or Vehicle unit, add 1 to the Hit roll."
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
          "sv": "2+",
          "w": "12",
          "ld": "7+",
          "oc": "3",
          "name": "Skorpius Disintegrator"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Belleros energy cannon",
              "keywords": ["blast", "indirect fire"],
              "range": "36\"",
              "attacks": "2D6",
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
              "name": "Cognis heavy stubber",
              "keywords": ["rapid fire 3", "sustained hits 1"],
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
              "name": "Disruptor missile launcher",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Ferrumite cannon",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6"
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
      "keywords": ["Vehicle", "Imperium", "Skitarii", "Skorpius Disintegrator"],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "dc18d2fa-e4ee-5be2-97a7-c62d66da93aa",
      "name": "Skorpius Dunerider",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1 Skorpius Dunerider"],
      "loadout": "This model is equipped with: cognis heavy stubber array; armoured hull.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 12 Adeptus Mechanicus Infantry models. It cannot transport Jump Pack or Kataphron models.",
      "points": [
        {
          "models": "1",
          "cost": "80"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Broad Spectrum Data-tether",
            "description": "Each time you select this model as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
          },
          {
            "name": "Dunerider",
            "description": "Units can disembark from this Transport after it has Advanced. Units that do so count as having made a Normal move that phase, and cannot declare a charge in the same turn, but can otherwise act normally in the remainder of the turn."
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
          "w": "11",
          "ld": "7+",
          "oc": "2",
          "name": "Skorpius Dunerider"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Cognis heavy stubber array",
              "keywords": ["rapid fire 9", "sustained hits 1"],
              "range": "36\"",
              "attacks": "9",
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
      "keywords": [
        "Vehicle",
        "Transport",
        "Dedicated Transport",
        "Imperium",
        "Skitarii",
        "Skorpius Dunerider"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "6a0662fc-5077-5df6-ae33-776050a450ba",
      "name": "Sydonian Dragoons",
      "faction_id": "AdM",
      "leader": "",
      "composition": ["1-3 Sydonian Dragoons"],
      "loadout": "Every model is equipped with: taser lance.",
      "wargear": [
        "Any number of models can each have their taser lance replaced with 1 radium jezzail and 1 Ironstrider feet.",
        "Any number of models can each be equipped with 1 phosphor serpenta."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75"
        },
        {
          "models": "2",
          "cost": "150"
        },
        {
          "models": "3",
          "cost": "225"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Stealth"],
        "faction": ["Doctrina Imperatives"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Elevated Strider",
            "description": "This unit is eligible to shoot and declare a charge in a turn in which it Fell Back, and you can re-roll Desperate Escape tests taken for models in this unit."
          },
          {
            "name": "Broad Spectrum Data-tether",
            "description": "Each time you select this unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP."
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
          "w": "7",
          "ld": "7+",
          "oc": "2",
          "name": "Sydonian Dragoons"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Phosphor serpenta",
              "keywords": ["ignores cover"],
              "range": "18\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Radium jezzail",
              "keywords": ["anti-infantry 3+", "heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "4+",
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
              "name": "Ironstrider feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Taser lance",
              "keywords": ["anti-walker 2+", "lance", "sustained hits 2"],
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
      "keywords": [
        "Imperium",
        "Vehicle",
        "Walker",
        "Skitarii",
        "Sydonian Dragoons"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "4ee67673-d09b-59b6-ab04-659b15cc35a6",
      "name": "Tech-priest Dominus",
      "faction_id": "AdM",
      "leader": "This model can be attached to the following units: ■ Corpuscarii Electro-Priests ■ Fulgurite Electro-Priests ■ Kataphron Breachers ■ Kataphron Destroyers ■ Skitarii Rangers ■ Skitarii Vanguard",
      "composition": ["1 Tech-Priest Dominus"],
      "loadout": "This model is equipped with: macrostubber; volkite blaster; Omnissian axe.",
      "wargear": [
        "This model’s macrostubber can be replaced with 1 phosphor serpenta.",
        "This model’s volkite blaster can be replaced with 1 eradication ray."
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
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Lord of the Machine Cult",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability. If that unit has the Electro-Priests keyword, models in that unit have the Feel No Pain 4+ ability instead."
          },
          {
            "name": "Data-spike",
            "description": "At the start of the Fight phase, you can select one enemy Vehicle unit within Engagement Range of this model’s unit and roll one D6: on a 4+, that enemy unit suffers D6 mortal wounds and, until the end of the phase, the Weapon Skill characteristic of melee weapons equipped by that enemy unit is worsened by 1."
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
          "sv": "2+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Tech-priest Dominus"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Eradication ray – dissipated",
              "keywords": [],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            },
            {
              "name": "Eradication ray – focused",
              "keywords": [],
              "range": "12\"",
              "attacks": "D3",
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
              "name": "Macrostubber",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "5",
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
              "name": "Phosphor serpenta",
              "keywords": ["ignores cover"],
              "range": "18\"",
              "attacks": "1",
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
              "name": "Volkite blaster",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
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
              "name": "Omnissian axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Imperium",
        "Infantry",
        "Character",
        "Tech-Priest",
        "Dominus"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "8d5f2317-c4d1-5591-8a54-7f153f91e212",
      "name": "Tech-priest Enginseer",
      "faction_id": "AdM",
      "leader": "This model can be attached to the following units: ■ Corpuscarii Electro-Priests ■ Fulgurite Electro-Priests ■ Kataphron Breachers ■ Kataphron Destroyers ■ Servitors ■ Skitarii Rangers ■ Skitarii Vanguard",
      "composition": ["1 Tech-Priest Enginseer"],
      "loadout": "This model is equipped with: archeotech pistol; Omnissian axe; servo-arm.",
      "wargear": ["None"],
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
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Enginseer",
            "description": "While this model is within 3\" of one or more friendly Adeptus Mechanicus Vehicle units, unless it is leading a unit, this model has the Lone Operative ability."
          },
          {
            "name": "Omnissiah’s Blessing",
            "description": "In your Command phase, select one friendly Adeptus Mechanicus model within 3\" of this model. That model regains up to D3 lost wounds and, if it is a Vehicle model, until the start of your next Command phase, that model has a 4+ invulnerable save. Each model can only be selected for this ability once per Command phase."
          },
          {
            "name": "Vengeance for the Omnissiah",
            "description": "If a friendly Adeptus Mechanicus Vehicle model is destroyed within 12\" of this model, until the end of the battle, this model’s Omnissian axe has an Attacks characteristic of 6."
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Tech-priest Enginseer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Omnissian axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Servo-arm",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Imperium",
        "Infantry",
        "Character",
        "Tech-Priest",
        "Enginseer"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "7fc12fcd-9030-53ac-9a4c-bc5b861368f3",
      "name": "Tech-priest Manipulus",
      "faction_id": "AdM",
      "leader": "This model can be attached to the following units: ■ Corpuscarii Electro-Priests ■ Fulgurite Electro-Priests ■ Kataphron Breachers ■ Kataphron Destroyers ■ Skitarii Rangers ■ Skitarii Vanguard",
      "composition": ["1 Tech-Priest Manipulus"],
      "loadout": "This model is equipped with: magnarail lance; Omnissian staff.",
      "wargear": [
        "This model’s magnarail lance can be replaced with 1 transonic cannon."
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
        "core": ["Leader"],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Galvanic Field",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability."
          },
          {
            "name": "Defend the Divine Work",
            "description": "Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, all models in this model’s unit have a 4+ invulnerable save."
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
          "sv": "2+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Tech-priest Manipulus"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Magnarail lance",
              "keywords": ["heavy"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Transonic cannon",
              "keywords": ["devastating wounds", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "4",
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
              "name": "Omnissian staff",
              "keywords": [],
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
        "Imperium",
        "Infantry",
        "Character",
        "Tech-Priest",
        "Manipulus"
      ],
      "factions": ["Adeptus Mechanicus"]
    },
    {
      "id": "0f22e6a2-5162-5a89-847d-54d8b9a931f1",
      "name": "Technoarcheologist",
      "faction_id": "AdM",
      "leader": "This model can be attached to the following units: ■ Corpuscarii Electro-Priests ■ Fulgurite Electro-Priests ■ Kataphron Breachers ■ Kataphron Destroyers ■ Skitarii Rangers ■ Skitarii Vanguard",
      "composition": ["1 Technoarcheologist"],
      "loadout": "This model is equipped with: archeotech pistol; servo-arc claw.",
      "wargear": ["None"],
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
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Seekers of Divine Arcana",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit."
          },
          {
            "name": "Cogitative Instincts",
            "description": "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" horizontally of this model."
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Technoarcheologist"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Archeotech pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
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
              "name": "Servo-arc claw",
              "keywords": ["anti-vehicle 4+", "devastating wounds"],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "8",
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
        "Tech-Priest",
        "Technoarcheologist"
      ],
      "factions": ["Adeptus Mechanicus"]
    }
  ],
  "colours": {
    "banner": "#5d1615",
    "header": "#9f2628"
  }
}