window.data = window.data || {};
window.data.CK = {
  "id": "QT",
  "link": "https://game-datacards.eu",
  "name": "Chaos Knights",
  "is_subfaction": false,
  "parent_id": "",
  "enhancements": [
    {
      "name": "Lord of Dread",
      "description": "Chaos Knights model only. At the start of the Fight phase, you can select one enemy unit within Engagement Range of the bearer; that enemy unit must take a Battle-shock test.",
      "keywords": ["Chaos Knights"],
      "excludes": [],
      "cost": "35"
    },
    {
      "name": "Aura of Terror",
      "description": "Chaos Knights model only. If you control an objective marker at the end of your Command phase, and the bearer is within range of that objective marker, that objective marker is said to be Tainted and remains under your control even if you have no models within range of it, until your opponent controls it at the start or end of any turn. In addition, while an objective marker is Tainted and under your control and the Despair Dread ability is active for your army, that objective marker has the Despair Dread ability as if it was a Chaos Knights model from your army (so subtract 1 from Battle-shock and Leadership tests taken for enemy units within 12\" of it).",
      "keywords": ["Chaos Knights"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "The Traitor's Mark",
      "description": "Chaos Knights model only. The Doom and Darkness ability is active for the bearer from the first battle round onwards, instead of from the third.",
      "keywords": ["Chaos Knights"],
      "excludes": [],
      "cost": "30"
    },
    {
      "name": "Panoply of the Cursed Knights",
      "description": "Chaos Knights model only. Each time an attack is made against the bearer, subtract 1 from the Armour Penetration characteristic of that attack.",
      "keywords": ["Chaos Knights"],
      "excludes": [],
      "cost": "40"
    }
  ],
  "datasheets": [
    {
      "id": "9aeb4b86-6943-5c7d-83f3-7905812009fb",
      "name": "Chaos Acastus Knight Asterius",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Chaos Acastus Knight Asterius"],
      "loadout": "This model is equipped with: 2 Asterius volkite culverins; karacnos mortar battery; 2 twin conversion beam cannons; titanic feet.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "730"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Against ranged attacks only"
        },
        "other": [
          {
            "name": "Sunderer of Fortresses",
            "description": "Each time this model makes an attack that targets a Vehicle, improve the Strength and Damage characteristics of that attack by 1 (if that attack targets a Fortification, improve the Strength and Damage characteristics of that attack by 2 instead)."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "13",
          "sv": "2+",
          "w": "30",
          "ld": "6+",
          "oc": "10",
          "name": "Chaos Acastus Knight Asterius"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Asterius volkite culverin",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Karacnos mortar battery",
              "keywords": [
                "anti-infantry 2+",
                "blast",
                "ignores cover",
                "indirect fire"
              ],
              "range": "48\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin conversion beam cannon",
              "keywords": ["conversion", "twin-linked", "sustained hits d3"],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "16",
              "ap": "-2",
              "damage": "6"
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
              "attacks": "6",
              "skill": "4+",
              "strength": "10",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Chaos",
        "Acastus",
        "Knight Asterius"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "87fe6616-97c6-552e-a920-7ed1404de503",
      "name": "Chaos Acastus Knight Porphyrion",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Chaos Acastus Knight Porphyrion"],
      "loadout": "This model is equipped with: 2 Acastus autocannons; Acastus ironstorm missile pod; 2 twin magna lascannons; titanic feet.",
      "wargear": [
        "This model’s 2 Acastus autocannons can each be replaced with one of the following: ◦ 2 lascannons ◦  1 Acastus autocannon and 1 lascannon",
        "This model’s Acastus ironstorm missile pod can be replaced with 1 helios defence missiles."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "645"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Against ranged attacks only"
        },
        "other": [
          {
            "name": "Bastion of Firepower",
            "description": "Each time this model Remains Stationary, until the end of the turn, ranged weapons equipped by this model have the [LETHAL HITS] ability."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-10 WOUNDS REMAINING",
          "description": "While this model has 1-10 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "13",
          "sv": "2+",
          "w": "30",
          "ld": "6+",
          "oc": "10",
          "name": "Chaos Acastus Knight Porphyrion"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Acastus Autocannon",
              "keywords": [],
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
              "name": "Acastus ironstorm missile pod",
              "keywords": ["blast", "heavy", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+6",
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
              "name": "Helios defence missiles",
              "keywords": ["anti-fly 2+", "heavy"],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
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
              "name": "Twin magna lascannon",
              "keywords": ["blast", "twin-linked"],
              "range": "72\"",
              "attacks": "D6",
              "skill": "3+",
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
              "name": "Titanic feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "10",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Chaos",
        "Acastus",
        "Knight Porphyrion"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "4982d1aa-990c-54c1-bbd3-f3b6fd7114b9",
      "name": "Chaos Cerastus Knight Acheron",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Chaos Cerastus Knight Acheron"],
      "loadout": "This model is equipped with: Acheron flame cannon; twin heavy bolter; reaper chainfist.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "405"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Against ranged attacks only"
        },
        "other": [
          {
            "name": "Searing Flames",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks made with an Acheron flame cannon. Until the end of the phase, that enemy unit cannot have the Benefit of Cover."
          },
          {
            "name": "Unrestrained Terror (Aura)",
            "description": "While a friendly War Dog model is within 6\" of this model, it is affected by this ability. At the start of the Fight phase, each enemy unit within Engagement Range of one or more War Dog units affected by this ability must take a Battle-shock test."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "12",
          "sv": "3+",
          "w": "25",
          "ld": "6+",
          "oc": "10",
          "name": "Chaos Cerastus Knight Acheron"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Acheron flame cannon",
              "keywords": ["ignores cover", "torrent"],
              "range": "18\"",
              "attacks": "2D6",
              "skill": "N/A",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
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
              "name": "Reaper chainfist – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "name": "Reaper chainfist – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Chaos",
        "Cerastus",
        "Knight Acheron"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "60c910a2-d7a1-56ab-a0e8-30668b6fd184",
      "name": "Chaos Cerastus Knight Atrapos",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Chaos Cerastus Knight Atrapos"],
      "loadout": "This model is equipped with: Atrapos lascutter; graviton singularity cannon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "405"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Macro-extinction Protocols",
            "description": "Each time this model makes an attack that targets a Monster or Vehicle unit, add 1 to the Hit roll. If that target is Titanic or Towering, add 1 to the Wound roll as well."
          },
          {
            "name": "Consumed with Hunger (Aura)",
            "description": "While a friendly War Dog model is within 6\" of this model, each time that War Dog model makes an attack that targets a Titanic or Towering unit, you can re-roll the Hit roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "12",
          "sv": "3+",
          "w": "25",
          "ld": "6+",
          "oc": "10",
          "name": "Chaos Cerastus Knight Atrapos"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Atrapos lascutter – low intensity",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "name": "Atrapos lascutter – high intensity",
              "keywords": ["sustained hits 1"],
              "range": "24\"",
              "attacks": "D6",
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
              "name": "Graviton singularity cannon – contained",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+1"
            },
            {
              "name": "Graviton singularity cannon – singularity",
              "keywords": ["blast", "devastating wounds", "hazardous"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Atrapos lascutter – low intensity",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            },
            {
              "name": "Atrapos lascutter – high intensity",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "4"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Chaos",
        "Cerastus",
        "Knight Atrapos"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "995fc602-35eb-5678-8bc7-330dde3d6043",
      "name": "Chaos Cerastus Knight Castigator",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Chaos Cerastus Knight Castigator"],
      "loadout": "This model is equipped with: Castigator bolt cannon; tempest warblade.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "420"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Against ranged attacks only"
        },
        "other": [
          {
            "name": "Storm of Bolts",
            "description": "In your Shooting phase, after this model has shot, select one unit (excluding Monsters and Vehicles) hit by one or more of those attacks. Until the start of your next turn, while this model is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll."
          },
          {
            "name": "Offerings for the Dark Gods (Aura)",
            "description": "While a friendly War Dog model is within 6\" of this model, ranged weapons equipped by that War Dog model have the [SUSTAINED HITS 1] ability."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "12",
          "sv": "3+",
          "w": "25",
          "ld": "6+",
          "oc": "10",
          "name": "Chaos Cerastus Knight Castigator"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Castigator bolt cannon",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "18",
              "skill": "3+",
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
              "name": "Tempest warblade – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "name": "Tempest warblade – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Chaos",
        "Cerastus",
        "Knight Castigator"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "7f6bfc29-fcfa-52f2-9325-89b3a40ca7fb",
      "name": "Chaos Cerastus Knight Lancer",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Chaos Cerastus Knight Lancer"],
      "loadout": "This model is equipped with: Cerastus shock lance.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "405"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Shock Charge",
            "description": "You can target this model with the Tank Shock Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase."
          },
          {
            "name": "Dark Fervour (Aura)",
            "description": "While a friendly War Dog model is within 6\" of this model, ranged weapons equipped by that War Dog model have the [ASSAULT] ability."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "12",
          "sv": "3+",
          "w": "25",
          "ld": "6+",
          "oc": "10",
          "name": "Chaos Cerastus Knight Lancer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Cerastus shock lance",
              "keywords": ["assault", "sustained hits 2"],
              "range": "12\"",
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
              "name": "Cerastus shock lance – strike",
              "keywords": ["lance"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "name": "Cerastus shock lance – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "10",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Chaos",
        "Cerastus",
        "Knight Lancer"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "1b82d27a-e20c-5519-bb31-ccd07632dfb2",
      "name": "Chaos Questoris Knight Magaera",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Chaos Questoris Knight Magaera"],
      "loadout": "This model is equipped with: lightning cannon; phased plasma-fusil; reaper chainsword.",
      "wargear": [
        "This model’s reaper chainsword can be replaced with 1 hekaton siege claw and 1 twin rad cleanser."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "405"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Huntmaster (Aura)",
            "description": "While a friendly War Dog model is within 6\" of this model, each time that War Dog model makes a ranged attack, you can ignore any or all modifiers to that attack’s Ballistic Skill characteristic and/or to the Hit roll."
          },
          {
            "name": "Repair Auto-simulacra",
            "description": "At the end of your Command phase, this model regains up to D3 lost wounds."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Chaos Questoris Knight Magaera"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Lightning cannon",
              "keywords": ["sustained hits 2"],
              "range": "48\"",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Phased plasma-fusil",
              "keywords": ["rapid fire 2"],
              "range": "24\"",
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
              "name": "Twin rad cleanser",
              "keywords": [
                "anti-infantry 2+",
                "ignores cover",
                "torrent",
                "twin-linked"
              ],
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
              "name": "Hekaton siege claw – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "name": "Hekaton siege claw – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Chaos",
        "Abhorrent",
        "Knight Magaera"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "66438df6-4536-5965-ab70-1c441c893f87",
      "name": "Chaos Questoris Knight Styrix",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Chaos Questoris Knight Styrix"],
      "loadout": "This model is equipped with: graviton crusher; volkite chierovile; reaper chainsword.",
      "wargear": [
        "This model’s reaper chainsword can be replaced with 1 hekaton siege claw and 1 twin rad cleanser."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "440"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Huntmaster (Aura)",
            "description": "While a friendly War Dog model is within 6\" of this model, each time that War Dog model makes a ranged attack, you can ignore any or all modifiers to that attack’s Ballistic Skill characteristic and/or to the Hit roll."
          },
          {
            "name": "Grav-pinned",
            "description": "In your Shooting phase, after this model has shot, if an enemy Infantry unit was hit by one or more of those attacks made with a graviton crusher, until the end of your opponent’s next turn, that enemy unit is grav-pinned. While a unit is grav-pinned, subtract 2 from that unit’s Move characteristic and subtract 2 from Advance and Charge rolls made for that unit."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-7 WOUNDS REMAINING                                                                                      characteristic and subtract 2 from Advance and Charge rolls",
          "description": "made for that unit."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Chaos Questoris Knight Styrix"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Graviton crusher",
              "keywords": ["anti-vehicle 2+", "blast"],
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
              "name": "Twin rad cleanser",
              "keywords": [
                "anti-infantry 2+",
                "ignores cover",
                "torrent",
                "twin-linked"
              ],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Volkite chierovile",
              "keywords": ["devastating wounds"],
              "range": "30\"",
              "attacks": "9",
              "skill": "3+",
              "strength": "12",
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
              "name": "Hekaton siege claw – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "name": "Hekaton siege claw – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "DAMAGED: 1-7 WOUNDS REMAINING",
              "keywords": []
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Character",
        "Titanic",
        "Towering",
        "Chaos",
        "Abhorrent",
        "Knight Styrix"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "d95540c7-c761-55d4-8e56-4a80c738b11d",
      "name": "Knight Abominant",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Knight Abominant"],
      "loadout": "This model is equipped with: diabolus heavy stubber; volkite combustor; balemace; electroscourge.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "395"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Vortex Terrors (Psychic)",
            "description": "At the start of your Shooting phase, select one enemy unit within 12\" of this model. That enemy unit must take a Battle-shock test."
          },
          {
            "name": "Warp Storms (Psychic)",
            "description": "At the end of your Movement phase, roll one D6 for each enemy unit within 9\" of this model: on a 3+, that enemy unit suffers D3 mortal wounds."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Abominant"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Diabolus heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Volkite combustor",
              "keywords": ["devastating wounds"],
              "range": "30\"",
              "attacks": "9",
              "skill": "3+",
              "strength": "12",
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
              "name": "Balemace",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Electroscourge",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "9",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "titanic",
        "Towering",
        "Abhorrent",
        "Psyker",
        "Character",
        "Chaos",
        "Knight Abominant"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "b3020c8a-0fda-5b0a-842c-528e42effcd7",
      "name": "Knight Desecrator",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Knight Desecrator"],
      "loadout": "This model is equipped with: desecrator laser destructor; diabolus heavy stubber; reaper chainsword.",
      "wargear": [
        "This model’s reaper chainsword can be replaced with 1 warpstrike claw."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "390"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Obsessive Ruthlessness",
            "description": "Each time this model makes a ranged attack against a Monster or Vehicle unit, that attack has the [DEVASTATING WOUNDS] ability."
          },
          {
            "name": "Taskmaster (Aura)",
            "description": "While a friendly War Dog model is within 9\" of this model, each time that War Dog model makes a ranged attack, re-roll a Hit roll of 1."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Desecrator"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Desecrator laser destructor",
              "keywords": [],
              "range": "72\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "18",
              "ap": "-4",
              "damage": "D6+3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Diabolus heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
              "skill": "2+",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Warpstrike claw – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "name": "Warpstrike claw – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Abhorrent",
        "Character",
        "Chaos",
        "Knight Desecrator"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "d2c6cdcb-8507-5301-ac2a-c20aae1a28e2",
      "name": "Knight Despoiler",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Knight Despoiler"],
      "loadout": "This model is equipped with: daemonbreath meltagun; reaper chainsword; titanic feet; warpstrike claw.",
      "wargear": [
        "This model’s daemonbreath meltagun can be replaced with 1 diabolus heavy stubber.",
        "This model’s reaper chainsword can be replaced with 1 of the following: ◦ 1 daemonbreath thermal cannon ◦  1 despoiler gatling cannon and 1 heavy darkflamer ◦  1 despoiler battle cannon and 1 diabolus heavy stubber",
        "This model’s warpstrike claw can be replaced with 1 of the following: ◦ 1 daemonbreath thermal cannon ◦  1 despoiler gatling cannon and 1 heavy darkflamer ◦  1 despoiler battle cannon and 1 diabolus heavy stubber",
        "This model can be equipped with one of the following: ◦ 1 havoc missile pod ◦ 1 ruinspear rocket pod ◦ 1 hellstorm autocannons"
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
        "core": ["Deadly Demise D6"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Dread Dominion (Aura)",
            "description": "While a friendly War Dog is within 9\" of this model, each time that War Dog takes a Battle-shock test, add 1 to that test."
          },
          {
            "name": "Seething Hatred",
            "description": "Each time this model is selected to shoot or fight, you can re-roll one Hit roll or you can re-roll one Wound roll when resolving those attacks."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Despoiler"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Daemonbreath meltagun",
              "keywords": ["melta 2"],
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
              "name": "Daemonbreath thermal cannon",
              "keywords": ["blast", "melta 6"],
              "range": "24\"",
              "attacks": "2D3",
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
              "name": "Despoiler battle cannon",
              "keywords": ["blast", "rapid fire d6+3"],
              "range": "72\"",
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
              "name": "Despoiler gatling cannon",
              "keywords": [],
              "range": "36\"",
              "attacks": "18",
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
              "name": "Havoc missile pod",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+1",
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
              "name": "Heavy darkflamer",
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
              "name": "Diabolus heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Ruinspear rocket pod",
              "keywords": [],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Hellstorm autocannons",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Titanic feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Warpstrike claw – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "name": "Warpstrike claw – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Abhorrent",
        "Character",
        "Chaos",
        "Knight Despoiler"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "e5aa2527-8533-569f-9950-635260e41ad5",
      "name": "Knight Rampager",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Knight Rampager"],
      "loadout": "This model is equipped with: diabolus heavy stubber; reaper chainsword; warpstrike claw.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "395"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Bloodlust",
            "description": "Each time this model makes a Charge move, until the end of the turn, its melee weapons have the [SUSTAINED HITS 1] ability. In addition, once per battle, this model is eligible to declare a charge in a turn in which it Advanced."
          },
          {
            "name": "Frenzied Rampage (Aura)",
            "description": "While a friendly War Dog model is within 9\" of this model, each time that War Dog model makes a melee attack, re-roll a Hit roll of 1."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "12",
          "sv": "3+",
          "w": "22",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Rampager"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Diabolus heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Reaper chainsword – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "6"
            },
            {
              "name": "Reaper chainsword – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "18",
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
              "name": "Warpstrike claw – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "20",
              "ap": "-3",
              "damage": "8"
            },
            {
              "name": "Warpstrike claw – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "2+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Abhorrent",
        "Character",
        "Chaos",
        "Knight Rampager"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "0f79c94c-49d6-5184-8897-cffbdcd3ac8b",
      "name": "Knight Tyrant",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 Knight Tyrant"],
      "loadout": "This model is equipped with: brimstone volcano lance; ectoplasma decimator; 2 gheiststrike missile launchers; 2 twin daemonbreath meltaguns; twin desecrator cannon; titanic feet.",
      "wargear": [
        "This model’s brimstone volcano lance and ectoplasma decimator can be replaced with 1 darkflame cannon and 1 warpshock harpoon.",
        "This model’s 2 gheiststrike missile launchers and twin desecrator cannon can be replaced with 1 gheiststrike missile launcher and 2 twin desecrator cannons."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "485"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Harbingers of Dread", "Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Infernal Aegis (Aura)",
            "description": "While a friendly War Dog model is within 6\" of this model, that War Dog model has the Benefit of Cover."
          },
          {
            "name": "Bastion of Corruption",
            "description": "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of this model."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 5 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "13",
          "sv": "2+",
          "w": "24",
          "ld": "6+",
          "oc": "10",
          "name": "Knight Tyrant"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Brimstone volcano lance",
              "keywords": ["blast"],
              "range": "60\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "20",
              "ap": "-5",
              "damage": "D6+8"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Darkflame cannon",
              "keywords": ["ignores cover", "torrent"],
              "range": "18\"",
              "attacks": "3D6",
              "skill": "N/A",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Ectoplasma decimator – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Ectoplasma decimator – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Gheiststrike missile launcher",
              "keywords": ["anti-titanic 4+", "devastating wounds"],
              "range": "72\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "12",
              "ap": "-6",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin daemonbreath meltagun",
              "keywords": ["melta 2", "twin-linked"],
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
              "name": "Twin desecrator cannon",
              "keywords": ["blast", "twin-linked"],
              "range": "36\"",
              "attacks": "D6",
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
              "name": "Warpshock harpoon",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+",
                "devastating wounds"
              ],
              "range": "18\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "24",
              "ap": "-6",
              "damage": "12"
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
              "attacks": "4",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Character",
        "Chaos",
        "Knight Tyrant"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "c7cbf1c7-f75f-5c73-9740-47797bb1eb17",
      "name": "War Dog Brigand",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 War Dog Brigand"],
      "loadout": "This model is equipped with: avenger chaincannon; daemonbreath spear; diabolus heavy stubber; armoured feet.",
      "wargear": [
        "This model’s diabolus heavy stubber can be replaced with 1 havoc multi-launcher."
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
        "faction": ["Harbingers of Dread"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Brigand",
            "description": "Each time this model makes a ranged attack that targets the closest eligible enemy unit, improve the Armour Penetration characteristic of that attack by 1."
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
          "m": "12\"",
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "8",
          "name": "War Dog Brigand"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Avenger chaincannon",
              "keywords": [],
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
              "name": "Daemonbreath spear",
              "keywords": ["melta 4"],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "12",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Diabolus heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Havoc multi-launcher",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "2+",
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
              "name": "Armoured feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
        "Battleline",
        "Chaos",
        "War Dog",
        "Brigand"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "5108c12c-83c1-55aa-914b-599a6c51e060",
      "name": "War Dog Executioner",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 War Dog Executioner"],
      "loadout": "This model is equipped with: diabolus heavy stubber; 2 War Dog autocannons; armoured feet.",
      "wargear": [
        "This model’s diabolus heavy stubber can be replaced with 1 daemonbreath meltagun."
      ],
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
        "faction": ["Harbingers of Dread"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Executioner",
            "description": "Each time this model makes an attack that targets a unit Below Half-strength, add 1 to the Hit roll."
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
          "m": "12\"",
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "8",
          "name": "War Dog Executioner"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Daemonbreath meltagun",
              "keywords": ["melta 2"],
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
              "name": "Diabolus heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "War Dog autocannon",
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
              "name": "Armoured feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
        "Battleline",
        "Chaos",
        "War Dog",
        "Executioner"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "208a6a2a-3186-5629-b390-e1f0d4f16fb4",
      "name": "War Dog Huntsman",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 War Dog Huntsman"],
      "loadout": "This model is equipped with: daemonbreath spear; diabolus heavy stubber; reaper chaintalon.",
      "wargear": [
        "This model’s diabolus heavy stubber can be replaced with 1 daemonbreath meltagun."
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
        "faction": ["Harbingers of Dread"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Huntsman",
            "description": "Each time this model makes an attack against a Monster or Vehicle unit, re-roll a Wound roll of 1 and re-roll a Damage roll of 1."
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
          "m": "12\"",
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "8",
          "name": "War Dog Huntsman"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Daemonbreath meltagun",
              "keywords": ["melta 2"],
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
              "name": "Daemonbreath spear",
              "keywords": ["melta 4"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Diabolus heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Reaper chaintalon – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "3"
            },
            {
              "name": "Reaper chaintalon – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Battleline",
        "Chaos",
        "War Dog",
        "Huntsman"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "3aab31ea-3f13-507e-8e41-0a59f4966b7a",
      "name": "War Dog Karnivore",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 War Dog Karnivore"],
      "loadout": "This model is equipped with: diabolus heavy stubber; reaper chaintalon; slaughterclaw.",
      "wargear": [
        "This model’s diabolus heavy stubber can be replaced with 1 havoc multi-launcher."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Harbingers of Dread"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* This model has a 5+ invulnerable save against ranged attacks."
        },
        "other": [
          {
            "name": "Karnivore",
            "description": "You can re-roll Charge rolls made for this model."
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
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "8",
          "name": "War Dog Karnivore"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Diabolus heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Havoc multi-launcher",
              "keywords": ["blast", "indirect fire"],
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
              "name": "Reaper chaintalon – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "10",
              "ap": "-3",
              "damage": "3"
            },
            {
              "name": "Reaper chaintalon – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Slaughterclaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Battleline",
        "Chaos",
        "War Dog",
        "Karnivore"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "0ef085b1-f322-524a-9b3b-c51c8368e67d",
      "name": "War Dog Moirax",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 War Dog Moirax"],
      "loadout": "This model is equipped with: graviton pulsar; volkite veuglaire; armoured feet.",
      "wargear": [
        "This model’s volkite veuglaire can be replaced with one of the following: ◦ 1 siege claw and 1 rad cleanser ◦ 1 graviton pulsar ◦ 1 lightning lock ◦ 1 conversion beam cannon",
        "This model’s graviton pulsar can be replaced with one of the following; ◦ 1 siege claw and 1 rad cleanser ◦ 1 lightning lock ◦ 1 conversion beam cannon ◦ 1 volkite veuglaire"
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
        "core": ["Deadly Demise D3"],
        "faction": ["Harbingers of Dread"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "* Against ranged attacks only"
        },
        "other": [
          {
            "name": "Protection Protocols",
            "description": "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase."
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
          "m": "12\"",
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "8",
          "name": "War Dog Moirax"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Conversion beam cannon",
              "keywords": ["conversion", "sustained hits d3"],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Lightning lock",
              "keywords": ["sustained hits 2"],
              "range": "36\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Rad cleanser",
              "keywords": ["anti-infantry 2+", "ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Volkite veuglaire",
              "keywords": ["devastating wounds"],
              "range": "36\"",
              "attacks": "4",
              "skill": "3+",
              "strength": "8",
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
              "name": "Armoured feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Siege claw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Battleline",
        "Chaos",
        "War Dog",
        "Moirax"
      ],
      "factions": ["Chaos Knights"]
    },
    {
      "id": "f8eccaeb-7d1b-5b88-9262-14480900acc1",
      "name": "War Dog Stalker",
      "faction_id": "QT",
      "leader": "",
      "composition": ["1 War Dog Stalker"],
      "loadout": "This model is equipped with: avenger chaincannon; diabolus heavy stubber; slaughterclaw.",
      "wargear": [
        "This model’s avenger chaincannon can be replaced with 1 daemonbreath spear.",
        "This model’s diabolus heavy stubber can be replaced with 1 havoc multi-launcher.",
        "This model’s slaughterclaw can be replaced with 1 reaper chaintalon."
      ],
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
        "faction": ["Harbingers of Dread"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Stalker",
            "description": "Each time this model makes an attack that targets an enemy unit, if there are no other units from your opponent’s army within 6\" of that target, add 1 to the Wound roll."
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
          "m": "12\"",
          "t": "10",
          "sv": "3+",
          "w": "12",
          "ld": "7+",
          "oc": "8",
          "name": "War Dog Stalker"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Avenger chaincannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "12",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Daemonbreath spear",
              "keywords": ["melta 4"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Havoc multi-launcher",
              "keywords": ["blast", "indirect fire"],
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
              "name": "Diabolus heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
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
              "name": "Reaper chaintalon – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "3"
            },
            {
              "name": "Reaper chaintalon – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Slaughterclaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Battleline",
        "Character",
        "Chaos",
        "War Dog",
        "Stalker"
      ],
      "factions": ["Chaos Knights"]
    }
  ],
  "colours": {
    "banner": "#102824",
    "header": "#49584c"
  }
}