window.data = window.data || {};
window.data.sm = {
  "id": "SM",
  "link": "https://game-datacards.eu",
  "name": "Space Marines",
  "is_subfaction": false,
  "parent_id": "",
  "enhancements": [
    {
      "name": "ADEPT OF THE CODEX",
      "description": "Captain model only. At the start of your Command phase, if the bearer is on the battlefield, instead of selecting a Combat Doctrine to be active for your army, you can select the Tactical Doctrine. If you do, until the start of your next Command phase, that doctrine is active for the bearer’s unit only, even if you have already selected that doctrine to be active for your army this battle.",
      "keywords": ["Captain"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "ARTIFICER ARMOUR",
      "description": "Adeptus Astartes model only. The bearer has a Save characteristic of 2+ and the Feel No Pain 5+ ability.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "10"
    },
    {
      "name": "BOLTER DISCIPLINE",
      "description": "Adeptus Astartes model only. While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability. In addition, while the bearer’s unit is under the effects of the Devastator Doctrine, each time a model in that unit makes a ranged attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "THE HONOUR VEHEMENT",
      "description": "Adeptus Astartes model only. Add 1 to the Attacks and Strength characteristics of the bearer’s melee weapons. While the bearer is under the effects of the Assault Doctrine, add 2 to the Attacks and Strength characteristics of the bearer’s melee weapons instead.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "15"
    }
  ],
  "datasheets": [
    {
      "id": "ab5376e1-cfeb-5287-ab51-a51cbd71610b",
      "name": "Adeptus Astartes Armoury",
      "faction_id": "SM",
      "leader": "",
      "composition": [],
      "loadout": "",
      "wargear": [],
      "transport": "",
      "points": [],
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
            "name": "Special Weapons",
            "description": "* If a Captain or Lieutenant model is equipped with this weapon, improve this weapon’s Ballistic Skill characteristic by 1."
          }
        ],
        "special": [
          {
            "name": "WEAPON LISTS",
            "description": "Several Adeptus Astartes models have the option to be equipped with one or more weapons whose profiles are not listed on their datasheet. The profiles for these weapons are instead listed on this card."
          }
        ],
        "damaged": {
          "range": "",
          "description": ""
        }
      },
      "stats": [],
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
              "name": "Boltgun",
              "keywords": [],
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
              "skill": "4+*",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Grav-cannon",
              "keywords": ["anti-vehicle 2+", "heavy"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+*",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
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
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
              "range": "6\"",
              "attacks": "1",
              "skill": "3+*",
              "strength": "8",
              "ap": "-4",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Lascannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Multi-melta",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Missile launcher – frag",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Missile launcher – krak",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Plasma cannon – standard",
              "keywords": ["blast", "heavy"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous", "heavy"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Plasma pistol – standard",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+*",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma pistol – supercharge",
              "keywords": ["hazardous", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+*",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
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
              "skill": "3+*",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": [],
      "factions": [""]
    },
    {
      "id": "a79c6651-690d-51b2-8cc8-d3d52f997ef3",
      "name": "Adrax Agatone",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Adrax Agatone – Epic Hero"],
      "loadout": "This model is equipped with: Drakkis; Malleus Noctum.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Unto the Anvil",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, you can re-roll the Wound roll."
          },
          {
            "name": "Lord of the Pyroclasts",
            "description": "While an enemy unit is within Engagement Range of this model, halve the Objective Control characteristic of models in that enemy unit."
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Adrax Agatone"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Drakkis",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
              "skill": "N/A",
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
              "name": "Malleus Noctum",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
        "Captain",
        "Adrax Agatone"
      ],
      "factions": ["Adeptus Astartes", "Salamanders"]
    },
    {
      "id": "c9e75539-37ab-5990-a16a-952209ccad7a",
      "name": "Aggressor Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Aggressor Sergeant", "2-5 Aggressors"],
      "loadout": "Every model is equipped with: flamestorm gauntlets; power fist.",
      "wargear": [
        "All models in this unit can each have their flamestorm gauntlets replaced with 1 auto boltstorm gauntlets and 1 fragstorm grenade launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "110"
        },
        {
          "models": "6",
          "cost": "220"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Close-quarters Firepower",
            "description": "Each time a model in this unit makes a ranged attack that targets the closest eligible target, improve the Armour Penetration characteristic of that attack by 1."
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
          "ld": "6+",
          "oc": "1",
          "name": "Aggressor Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Auto boltstorm gauntlets",
              "keywords": ["twin-linked"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Flamestorm gauntlets",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
              "range": "12\"",
              "attacks": "D6+1",
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
              "name": "Fragstorm grenade launcher",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Power fist",
              "keywords": ["twin-linked"],
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
      "keywords": ["Infantry", "Imperium", "Gravis", "Aggressor Squad"],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Apothecary Biologis",
        "Captain In Gravis Armour",
        "Iron Father Feirros",
        "Marneus Calgar",
        "Tor Garadon"
      ]
    },
    {
      "id": "0b2a82b9-9440-549a-b1ec-9f740446febf",
      "name": "Ancient In Terminator Armour",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Relic Terminator Squad ■ Terminator Squad ■ Terminator Assault Squad You can attach this model to one of the above units even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Ancient in Terminator Armour"],
      "loadout": "This model is equipped with: storm bolter; power fist.",
      "wargear": [
        "This model’s power fist can be replaced with one of the following: ◦ 1 chainfist ◦ 1 close combat weapon ◦ 1 power weapon ◦ 1 thunder hammer",
        "This model’s storm bolter and power fist can be replaced with one of the following: ◦ 1 twin lightning claws ◦  1 thunder hammer and 1 Terminator storm shield"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "90"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Terminator Storm Shield",
            "description": "The bearer has a Wounds characteristic of 6."
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Astartes Banner",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit."
          },
          {
            "name": "Keep the Banner High",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength."
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Ancient In Terminator Armour"
        }
      ],
      "rangedWeapons": [
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
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power fist",
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
              "name": "Power weapon",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
        "Imperium",
        "Terminator",
        "Ancient"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "7af3435c-e3c2-5096-a4e8-45b5066d0e46",
      "name": "Apothecary Biologis",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Aggressor Squad ■ Eradicator Squad ■ Heavy Intercessor Squad You can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Apothecary Biologis"],
      "loadout": "This model is equipped with: absolvor bolt pistol; close combat weapon.",
      "wargear": ["None"],
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Surgical Precision",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability."
          },
          {
            "name": "Vivispectrum",
            "description": "If this model’s unit destroys an enemy unit as the result of a melee attack, until the end of the battle, this model has an Objective Control characteristic of 9."
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
          "w": "5",
          "ld": "6+",
          "oc": "3",
          "name": "Apothecary Biologis"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Absolvor bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
              "attacks": "1",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Imperium",
        "Gravis",
        "Apothecary Biologis"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "f17f9afa-b67f-54db-94eb-4e3b3cb3eee9",
      "name": "Assault Intercessor Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": [
        "1 Assault Intercessor Sergeant",
        "4-9 Assault Intercessors"
      ],
      "loadout": "Every model is equipped with: heavy bolt pistol; Astartes chainsword.",
      "wargear": [
        "The Assault Intercessor Sergeant’s heavy bolt pistol can be replaced with one of the following: ◦ 1 hand flamer ◦ 1 plasma pistol",
        "The Assault Intercessor Sergeant’s Astartes chainsword can be replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer"
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
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Shock Assault",
            "description": "Each time a model in this unit targets an enemy unit with a melee attack, re-roll a Wound roll of 1. If that enemy unit is within range of an objective marker, you can re-roll the Wound roll instead."
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
          "name": "Assault Intercessor Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Heavy bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
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
        "Battleline",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Assault Intercessor Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Adrax Agatone",
        "Chief Librarian Tigurius",
        "Judiciar",
        "Kor’sarro Khan",
        "Marneus Calgar",
        "Primaris Ancient",
        "Primaris Apothecary",
        "Primaris Captain",
        "Primaris Chaplain",
        "Primaris Company Champion",
        "Primaris Librarian",
        "Primaris Lieutenant",
        "Primaris Techmarine",
        "Uriel Ventris"
      ]
    },
    {
      "id": "90dc3858-29f4-554b-a827-bca98d116bce",
      "name": "Assault Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Assault Sergeant", "4-9 Assault Marines"],
      "loadout": "Every model is equipped with: bolt pistol; Astartes chainsword.",
      "wargear": [
        "The Assault Sergeant’s bolt pistol can be replaced with one of the following: ◦ 1 grav-pistol* ◦ 1 hand flamer* ◦ 1 inferno pistol* ◦ 1 plasma pistol",
        "The Assault Sergeant’s Astartes chainsword can be replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer",
        "The Assault Sergeant can do one of the following: ◦  Replace its bolt pistol and Astartes chainsword with 1 twin lightning claws. ◦  Be equipped with 1 Astartes shield.",
        "Up to 2 Assault Marines can each have their bolt pistol and Astartes chainsword replaced with one of the following: ◦ 1 plasma pistol and 1 Astartes chainsword ◦ 1 flamer ◦ 1 meltagun ◦ 1 plasma gun",
        "For every 5 models in this unit, 1 model’s Astartes chainsword can be replaced with 1 eviscerator. *  The profile for this weapon can be found on the Adeptus Astartes Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "95"
        },
        {
          "models": "10",
          "cost": "190"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Astartes Shield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Chainsword Doctrines",
            "description": "Each time this unit is selected to fight, select one of the following abilities to apply to all Astartes chainswords equipped by models in this unit until the end of the phase: ■ [SUSTAINED HITS 1] ■ [LETHAL HITS] ■ [LANCE]"
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
          "oc": "1",
          "name": "Assault Squad"
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
              "name": "Flamer",
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
              "name": "Meltagun",
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
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Eviscerator",
              "keywords": ["sustained hits 1"],
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Imperium", "Assault Squad"],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Captain",
        "Captain Sicarius",
        "Chaplain",
        "Chaplain Cassius",
        "Librarian",
        "Lieutenant",
        "Vulkan He’stan"
      ]
    },
    {
      "id": "ffb288ee-13d2-5393-89f6-68f103dd09f3",
      "name": "Assault Squad With Jump Packs",
      "faction_id": "SM",
      "leader": "",
      "composition": [
        "1 Assault Sergeant with Jump Pack",
        "4-9 Assault Marines with Jump Packs"
      ],
      "loadout": "Every model is equipped with: bolt pistol; Astartes chainsword.",
      "wargear": [
        "The Assault Sergeant with Jump Pack’s bolt pistol can be replaced with one of the following: ◦ 1 grav-pistol* ◦ 1 hand flamer* ◦ 1 inferno pistol* ◦ 1 plasma pistol",
        "The Assault Sergeant with Jump Pack’s Astartes chainsword can be replaced with one of the following: ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer",
        "The Assault Sergeant with Jump Pack can do one of the following: ◦  Replace its bolt pistol and Astartes chainsword with 1 twin lightning claws. ◦  Be equipped with 1 Astartes shield.",
        "Up to 2 Assault Marines with Jump Packs can each have their bolt pistol and Astartes chainsword replaced with one of the following: ◦ 1 plasma pistol and 1 Astartes chainsword ◦ 1 flamer ◦ 1 meltagun ◦ 1 plasma gun",
        "For every 5 models in this unit, 1 model’s Astartes chainsword can be replaced with 1 eviscerator. *  The profile for this weapon can be found on the Adeptus Astartes Armoury card."
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
            "name": "Astartes Shield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Hammer of Wrath",
            "description": "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound."
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
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Assault Squad With Jump Packs"
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
              "name": "Flamer",
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
              "name": "Meltagun",
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
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Eviscerator",
              "keywords": ["sustained hits 1"],
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
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
        "Grenades",
        "Jump Pack",
        "Fly",
        "Imperium",
        "Assault Squad with Jump Packs"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Captain With Jump Pack",
        "Chaplain With Jump Pack",
        "Kayvaan Shrike",
        "Librarian With Jump Pack"
      ]
    },
    {
      "id": "3bb197f1-8965-5b95-82a2-346099d5beca",
      "name": "Astartes Servitors",
      "faction_id": "SM",
      "leader": "",
      "composition": ["4 Astartes Servitors"],
      "loadout": "Every model is equipped with: Servitor servo-arm.",
      "wargear": [
        "Up to 2 models can each have their Servitor servo-arm replaced with one of the following: ◦ 1 heavy bolter and 1 close combat weapon ◦ 1 multi-melta and 1 close combat weapon ◦  1 plasma cannon and 1 close combat weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "4",
          "cost": "55"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Mindlock",
            "description": "While a Techmarine model is leading this unit, improve the Ballistic Skill and Weapon Skill characteristics of ranged and melee weapons equipped by Astartes Servitor models in this unit by 1."
          }
        ],
        "special": [
          {
            "name": "SERVITOR RETINUE",
            "description": "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a Techmarine. If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly."
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
          "t": "4",
          "sv": "4+",
          "w": "1",
          "ld": "8+",
          "oc": "0",
          "name": "Astartes Servitors"
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
              "name": "Multi-melta",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Plasma cannon – standard",
              "keywords": ["blast", "heavy"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous", "heavy"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Servitor servo-arm",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Astartes Servitors"],
      "factions": ["Adeptus Astartes"],
      "ledBy": ["Primaris Techmarine", "Techmarine"]
    },
    {
      "id": "743808c1-22b5-56a7-8ab2-1782a3ab6995",
      "name": "Astraeus",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Astraeus"],
      "loadout": "This model is equipped with: 2 Astraeus las-rippers; ironhail heavy stubber; storm bolter; twin heavy bolter; twin macro-accelerator cannon; armoured hull.",
      "wargear": [
        "This model’s 2 Astraeus las-rippers can be replaced with 2 plasma eradicators.",
        "This model’s twin heavy bolter can be replaced with 1 twin lascannon.",
        "This model can be equipped with 1 ironhail heavy stubber."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "525"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+2"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Suppression Fire",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more attacks made with its twin macro-accelerator cannon this phase. Until the start of your next turn, while this model is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-8 WOUNDS REMAINING",
          "description": "While this model has 1-8 wounds remaining, subtract 4 from its Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll. *This model has a 5+ invulnerable save against ranged attacks."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "12",
          "sv": "2+",
          "w": "24",
          "ld": "6+",
          "oc": "8",
          "name": "Astraeus"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Astraeus las-ripper",
              "keywords": [],
              "range": "36\"",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Plasma eradicator – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Plasma eradicator – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D6",
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
        },
        {
          "profiles": [
            {
              "name": "Twin macro-accelerator cannon",
              "keywords": ["sustained hits 1", "twin-linked"],
              "range": "72\"",
              "attacks": "12",
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
      "keywords": ["Vehicle", "Titanic", "Imperium", "Astraeus"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "b4346525-fabe-5425-9a10-e229bc80773e",
      "name": "Attack Bike Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1-3 Attack Bikes"],
      "loadout": "Every model is equipped with: bolt pistol; heavy bolter; twin boltgun; close combat weapon.",
      "wargear": [
        "Any number of models can each have their heavy bolter replaced with 1 multi-melta."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "55"
        },
        {
          "models": "2",
          "cost": "110"
        },
        {
          "models": "3",
          "cost": "165"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Outrider Escort",
            "description": "Once per turn, in your opponent’s Shooting phase, when a friendly Adeptus Astartes Mounted unit within 6\" of this unit is selected as the target of an attack, this unit can use this ability. If it does, after that enemy unit has finished making its attacks, this unit can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)."
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
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "Attack Bike Squad"
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
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
              "name": "Twin boltgun",
              "keywords": ["twin-linked"],
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Grenades", "Imperium", "Attack Bike Squad"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "6bf98fa4-49c6-5958-a542-888f09955ffb",
      "name": "Ballistus Dreadnought",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Ballistus Dreadnought"],
      "loadout": "This model is equipped with: Ballistus missile launcher; Ballistus lascannon; twin storm bolter; armoured feet.",
      "wargear": ["None"],
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Ballistus Strike",
            "description": "Each time this model makes a ranged attack that targets a unit that is not Below Half-strength, you can re-roll the Hit roll."
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
          "name": "Ballistus Dreadnought"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Ballistus missile launcher – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Ballistus missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
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
              "name": "Ballistus lascannon",
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
              "name": "Twin storm bolter",
              "keywords": ["rapid fire 2", "twin-linked"],
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
              "name": "Armoured feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "7",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Imperium", "Ballistus Dreadnought"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "dac0bd3a-b8c0-53de-b56c-b16a6444aab0",
      "name": "Bike Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": [
        "1 Biker Sergeant",
        "2-5 Space Marine Bikers",
        "0-1 Attack Bike The Biker Sergeant and every Space Marine Biker"
      ],
      "loadout": "is equipped with: bolt pistol; twin boltgun; close combat weapon. An Attack Bike is equipped with: bolt pistol; heavy bolter; twin boltgun; close combat weapon.",
      "wargear": [
        "The Biker Sergeant’s bolt pistol can be replaced with one of the following: ◦ 1 Astartes chainsword ◦ 1 boltgun* ◦ 1 combi-weapon* ◦ 1 hand flamer ◦ 1 grav-pistol ◦ 1 inferno pistol ◦ 1 plasma pistol ◦ 1 storm bolter*  ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer",
        "Any number of Space Marine Bikers can each have their bolt pistol replaced with 1 Astartes chainsword.",
        "Up to 2 Space Marine Bikers can each have their bolt pistol replaced with one of the following: ◦ 1 flamer ◦ 1 grav-gun ◦ 1 meltagun ◦ 1 plasma gun ◦ 1 plasma pistol",
        "An Attack Bike’s heavy bolter can be replaced with 1 multi-melta.  *  The profile for this weapon can be found on the Adeptus Astartes Armoury card."
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
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Turbo-boost",
            "description": "Each time this unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit."
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
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "SPACE MARINE BIKE"
        },
        {
          "m": "12\"",
          "t": "5",
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "2",
          "name": "ATTACK BIKE"
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
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
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
        },
        {
          "profiles": [
            {
              "name": "Twin boltgun",
              "keywords": ["twin-linked"],
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
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
        },
        {
          "profiles": [
            {
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Grenades", "Imperium", "Bike Squad"],
      "factions": ["Adeptus Astartes"],
      "ledBy": ["Captain On Bike", "Chaplain On Bike"]
    },
    {
      "id": "01dd9844-2d3e-5c90-ad47-5da21d4dd9ff",
      "name": "Bladeguard Ancient",
      "faction_id": "SM",
      "leader": "This model can be attached to the following unit: ■ Bladeguard Veteran Squad You can attach this model to the above unit even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Bladeguard Ancient"],
      "loadout": "This model is equipped with: heavy bolt pistol; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "50"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Astartes Banner",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit."
          },
          {
            "name": "Deeds of Heroism",
            "description": "Once per battle, when this model is selected to fight, it can use this ability. If it does, until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in this model’s unit."
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
          "name": "Bladeguard Ancient"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
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
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Bladeguard Ancient"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "3a13a631-0ca2-5801-91bf-3ed7b2a524ab",
      "name": "Bladeguard Veteran Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": [
        "1 Bladeguard Veteran Sergeant",
        "2-5 Bladeguard Veterans"
      ],
      "loadout": "Every model is equipped with: heavy bolt pistol; master-crafted power weapon.",
      "wargear": [
        "The Bladeguard Veteran Sergeant’s heavy bolt pistol can be replaced with one of the following: ◦ 1 neo-volkite pistol ◦ 1 plasma pistol"
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Bladeguard",
            "description": "At the start of the Fight phase, you can select one of the following abilities to apply to models in this unit until the end of the phase: ■  Swords of the Imperium: Each time a model in this unit makes a melee attack, re-roll a Hit roll of 1. ■  Shields of the Imperium: Each time an invulnerable saving throw is made for a model in this unit, re-roll a saving throw of 1."
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
          "ld": "6+",
          "oc": "1",
          "name": "Bladeguard Veteran Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
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
              "name": "Neo-volkite pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "5",
              "ap": "0",
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
              "name": "Master-crafted power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Bladeguard Veteran Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Bladeguard Ancient",
        "Judiciar",
        "Marneus Calgar",
        "Primaris Captain",
        "Primaris Chaplain",
        "Primaris Company Champion",
        "Primaris Lieutenant"
      ]
    },
    {
      "id": "4633d8b4-dfaa-5c8e-b0e9-740ebc923c28",
      "name": "Brutalis Dreadnought",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Brutalis Dreadnought"],
      "loadout": "This model is equipped with: twin Icarus ironhail heavy stubber; twin heavy bolter; Brutalis bolt rifles; Brutalis fists.",
      "wargear": [
        "This model’s twin heavy bolter can be replaced with 1 twin multi-melta.",
        "This model’s Brutalis fists and Brutalis bolt rifles can be replaced with 1 Brutalis talons."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Brutalis Charge",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-3, that enemy unit suffers D3 mortal wounds; on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6, that enemy unit suffers D3+3 mortal wounds."
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
          "name": "Brutalis Dreadnought"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Brutalis bolt rifles",
              "keywords": ["twin-linked"],
              "range": "24\"",
              "attacks": "4",
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
              "name": "Twin Icarus ironhail heavy stubber",
              "keywords": ["anti-fly 4+", "rapid fire 3", "twin-linked"],
              "range": "36\"",
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
              "name": "Twin multi-melta",
              "keywords": ["melta 2", "twin-linked"],
              "range": "18\"",
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
              "name": "Brutalis fists",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Brutalis talons – strike",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            },
            {
              "name": "Brutalis talons – sweep",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "10",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Imperium",
        "Dreadnought",
        "Brutalis Dreadnought"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "1abbc533-9ffb-5095-8cb4-b8f948061854",
      "name": "Captain",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Tactical Squad ■ Vanguard Veteran Squad",
      "composition": ["1 Captain"],
      "loadout": "This model is equipped with: bolt pistol; master-crafted boltgun; Astartes chainsword.",
      "wargear": [
        "This model’s master-crafted boltgun can be replaced with one of the following: ◦ 1 combi-weapon** ◦ 1 grav-pistol ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 storm bolter** ◦ 1 power fist ◦ 1 relic shield* ◦ 1 relic weapon ◦ 1 thunder hammer",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 close combat weapon and 1 relic shield* ◦ 1 power fist ◦ 1 relic weapon ◦ 1 thunder hammer",
        "This model’s master-crafted boltgun and Astartes chainsword can be replaced with 1 twin lightning claws. * Maximum one per model. **  The profile for this weapon can be found on the Adeptus Astartes Armoury card."
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
            "name": "Relic Shield",
            "description": "The bearer has a Wounds characteristic of 6."
          }
        ],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Rites of Battle",
            "description": "Once per battle round, one unit from your army with this ability can be targeted by a Stratagem for 0CP, even if another unit from your army has already been targeted by that Stratagem this phase."
          },
          {
            "name": "Finest Hour",
            "description": "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by this model and those weapons have the [DEVASTATING WOUNDS] ability."
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
          "name": "Captain"
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
        },
        {
          "profiles": [
            {
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Master-crafted boltgun",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Power fist",
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
              "name": "Relic weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Grenades", "Imperium", "Captain"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "6be6254a-af8a-51f6-a317-0405f91e6963",
      "name": "Captain In Gravis Armour",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Aggressor Squad ■ Eradicator Squad ■ Heavy Intercessor Squad",
      "composition": ["1 Captain in Gravis Armour"],
      "loadout": "This model is equipped with: master-crafted heavy bolt rifle; master-crafted power weapon.",
      "wargear": [
        "This model’s master-crafted heavy bolt rifle and master-crafted power weapon can be replaced with: ◦  1 boltstorm gauntlet, 1 power fist and 1 relic chainsword ◦  1 boltstorm gauntlet, 1 power fist and 1 relic blade ◦  1 boltstorm gauntlet, 1 power fist and 1 relic fist"
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
        "core": [],
        "faction": ["Leader", "Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Rites of Battle",
            "description": "Once per battle round, one unit from your army with this ability can be targeted by a Stratagem for 0CP, even if another unit from your army has already been targeted by that Stratagem this phase."
          },
          {
            "name": "Refuse to Yield",
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
          "m": "6\"",
          "t": "6",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Captain In Gravis Armour"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Boltstorm gauntlet",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "3",
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
              "name": "Master-crafted heavy bolt rifle",
              "keywords": [],
              "range": "30\"",
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
              "name": "Master-crafted power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
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
              "name": "Relic blade",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Relic chainsword",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Relic fist",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "2+",
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
        "Grenades",
        "Imperium",
        "Gravis",
        "Captain"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "3bcd32e4-b4fe-5f5e-8bf4-dba4da3a48b6",
      "name": "Captain In Phobos Armour",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Eliminator Squad ■ Incursor Squad ■ Infiltrator Squad ■ Reiver Squad ■ Scout Squad ■ Scout Sniper Squad",
      "composition": ["1 Captain in Phobos Armour"],
      "loadout": "This model is equipped with: bolt pistol; instigator bolt carbine; combat knife.",
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
        "core": ["Infiltrators", "Leader", "Stealth"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Rites of Battle",
            "description": "Once per battle round, one unit from your army with this ability can be targeted by a Stratagem for 0CP, even if another unit from your army has already been targeted by that Stratagem this phase."
          },
          {
            "name": "Master of Deceit",
            "description": "After both players have deployed their armies and determined who has the first turn, if your army includes one or more models with this ability, you can select up to three friendly Adeptus Astartes Phobos, Adeptus Astartes Scout Squad or Adeptus Astartes Scout Sniper Squad units and redeploy all of those units. When doing so, any of those units can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves."
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
          "name": "Captain In Phobos Armour"
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
        },
        {
          "profiles": [
            {
              "name": "Instigator bolt carbine",
              "keywords": ["precision"],
              "range": "24\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "4",
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
              "name": "Combat knife",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Imperium",
        "Phobos",
        "Captain"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "a61cd885-4d38-5de2-bcd7-d74522a8c9f8",
      "name": "Captain In Terminator Armour",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Relic Terminator Squad ■ Terminator Assault Squad ■ Terminator Squad",
      "composition": ["1 Captain in Terminator Armour"],
      "loadout": "This model is equipped with: storm bolter; relic weapon.",
      "wargear": [
        "This model’s storm bolter can be replaced with one of the following: ◦ 1 combi-weapon ◦ 1 power fist ◦ 1 relic shield* ◦ 1 relic weapon ◦ 1 thunder hammer",
        "This model’s relic weapon can be replaced with one of the following: ◦ 1 chainfist ◦ 1 power fist ◦ 1 relic shield* ◦ 1 thunder hammer",
        "This model’s storm bolter and relic weapon can be replaced with 1 twin lightning claws.",
        "If this model is equipped with a power fist, it can be equipped with 1 auxiliary grenade launcher. * Maximum one per model."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "95"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Auxiliary Grenade Launcher",
            "description": "The bearer has the Grenades keyword."
          },
          {
            "name": "Relic Shield",
            "description": "The bearer has a Wounds characteristic of 7."
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Rites of Battle",
            "description": "Once per battle round, one unit from your army with this ability can be targeted by a Stratagem for 0CP, even if another unit from your army has already been targeted by that Stratagem this phase."
          },
          {
            "name": "The Imperium’s Sword",
            "description": "You can re-roll Charge rolls made for this model’s unit."
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
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Captain In Terminator Armour"
        }
      ],
      "rangedWeapons": [
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
              "ap": "0",
              "damage": "1"
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
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power fist",
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
              "name": "Relic weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
        "Imperium",
        "Terminator",
        "Captain"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "b59a6260-99a9-5bbf-9cdd-6df93aea97e6",
      "name": "Captain On Bike",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Bike Squad ■ Outrider Squad",
      "composition": ["1 Captain on Bike"],
      "loadout": "This model is equipped with: bolt pistol; twin boltgun; Astartes chainsword.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 combi-weapon** ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 master-crafted boltgun  ◦ 1 plasma pistol ◦ 1 storm bolter** ◦ 1 relic shield*  ◦ 1 relic weapon ◦ 1 power fist",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 close combat weapon and 1 relic shield* ◦ 1 power fist ◦ 1 relic weapon",
        "This model’s bolt pistol and Astartes chainsword can be replaced with 1 twin lightning claws. * Maximum one per model.  **  The profile for this weapon can be found on the Adeptus Astartes Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "95"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Relic Shield",
            "description": "The bearer has a Wounds characteristic of 7."
          }
        ],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Swift Assault",
            "description": "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability."
          },
          {
            "name": "Rites of Battle",
            "description": "Once per battle round, one unit from your army with this ability can be targeted by a Stratagem for 0CP, even if another unit from your army has already been targeted by that Stratagem this phase."
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
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Captain On Bike"
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
        },
        {
          "profiles": [
            {
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Master-crafted boltgun",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
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
        },
        {
          "profiles": [
            {
              "name": "Twin boltgun",
              "keywords": ["twin-linked"],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Power fist",
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
              "name": "Relic weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Character", "Grenades", "Imperium", "Captain"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "2ce922b0-d248-5152-bbc2-856ef8e49186",
      "name": "Captain Sicarius",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Sternguard Veteran Squad ■ Tactical Squad ■ Vanguard Veteran Squad",
      "composition": ["1 Captain Sicarius – Epic Hero"],
      "loadout": "This model is equipped with: artisan plasma pistol; Talassarian Tempest Blade.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Lead From the Front",
            "description": "While this model is leading a unit, models in that unit have the Scouts 6\" ability and ranged weapons equipped by models in that unit have the [ASSAULT] ability."
          },
          {
            "name": "Lightning Assault",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model, if this model’s unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\"."
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Captain Sicarius"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Artisan plasma pistol",
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
              "name": "Talassarian Tempest Blade",
              "keywords": ["lethal hits"],
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
        "Imperium",
        "Captain",
        "Sicarius"
      ],
      "factions": ["Adeptus Astartes", "Ultramarines"]
    },
    {
      "id": "dfaa283d-f1f4-55f4-b674-3715eda043c2",
      "name": "Captain With Jump Pack",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad with Jump Packs ■ Vanguard Veteran Squad with Jump Packs",
      "composition": ["1 Captain with Jump Pack"],
      "loadout": "This model is equipped with: bolt pistol; master-crafted boltgun; Astartes chainsword.",
      "wargear": [
        "This model’s master-crafted boltgun can be replaced with one of the following: ◦ 1 combi-weapon** ◦ 1 grav-pistol ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 storm bolter** ◦ 1 power fist ◦ 1 relic shield* ◦ 1 relic weapon ◦ 1 thunder hammer",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 close combat weapon and 1 relic shield* ◦ 1 power fist ◦ 1 relic weapon ◦ 1 thunder hammer",
        "This model’s master-crafted boltgun and Astartes chainsword can be replaced with 1 twin lightning claws. * Maximum one per model. **  The profile for this weapon can be found on the Adeptus Astartes Armoury card."
      ],
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
            "name": "Relic Shield",
            "description": "The bearer has a Wounds characteristic of 6."
          }
        ],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Angel’s Wrath",
            "description": "While this model is leading a unit, each time that unit ends a Charge move, until the end of the turn, add 1 to the Strength characteristic of melee weapons equipped by models in that unit."
          },
          {
            "name": "Rites of Battle",
            "description": "Once per battle round, one unit from your army with this ability can be targeted by a Stratagem for 0CP, even if another unit from your army has already been targeted by that Stratagem this phase."
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
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Captain With Jump Pack"
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
        },
        {
          "profiles": [
            {
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["pistol", "melta 2"],
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
              "name": "Master-crafted boltgun",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "7",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Power fist",
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
              "name": "Relic weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
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
        "Jump Pack",
        "Fly",
        "Grenades",
        "Imperium",
        "Captain"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "5689c57d-bec3-54f4-92dc-d5cca77534f0",
      "name": "Centurion Assault Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Assault Centurion Sergeant", "2-5 Assault Centurions"],
      "loadout": "Every model is equipped with: twin flamer; siege drills; Centurion bolters.",
      "wargear": [
        "Any number of models can each have their twin flamer replaced with 1 twin meltagun.",
        "Any number of models can each have their Centurion bolters replaced with 1 Centurion assault launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "175"
        },
        {
          "models": "6",
          "cost": "350"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Centurion Assault Launcher",
            "description": "The bearer has the Grenades keyword."
          }
        ],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Annihilator Protocols",
            "description": "Melee weapons equipped by models in this unit have the [SUSTAINED HITS 2] ability when targeting Monster, Vehicle or Fortification units."
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
          "t": "7",
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "2",
          "name": "Centurion Assault Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Centurion bolters",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Twin flamer",
              "keywords": ["ignores cover", "torrent", "twin-linked"],
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
              "name": "Twin meltagun",
              "keywords": ["melta 2", "twin-linked"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Siege drills",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Imperium",
        "Centurion",
        "Centurion Assault Squad"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "d08f3b3f-ff1c-557b-b582-d2b5383a97f7",
      "name": "Centurion Devastator Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": [
        "1 Devastator Centurion Sergeant",
        "2-5 Devastator Centurions"
      ],
      "loadout": "Every model is equipped with: grav-cannon; Centurion bolters; Centurion fists.",
      "wargear": [
        "Any number of models can each have their Centurion bolters replaced with 1 Centurion missile launcher.",
        "Any number of models can each have their grav-cannon replaced with one of the following: ◦ 1 twin heavy bolter ◦ 1 twin lascannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "205"
        },
        {
          "models": "6",
          "cost": "410"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Decimator Protocols",
            "description": "Each time a model in this unit makes a ranged attack, re-roll a Hit roll of 1. If the target of that attack is an enemy unit within range of an objective marker, you can re-roll the Hit roll instead."
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
          "t": "7",
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "2",
          "name": "Centurion Devastator Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Centurion bolters",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
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
              "name": "Centurion missile launcher",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Grav-cannon",
              "keywords": ["anti-vehicle 2+"],
              "range": "24\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "6",
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
              "name": "Centurion fists",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Imperium",
        "Centurion",
        "Centurion Devastator Squad"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "617d09bb-af62-5df9-9454-263132cbd00b",
      "name": "Chaplain",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Tactical Squad ■ Vanguard Veteran Squad",
      "composition": ["1 Chaplain"],
      "loadout": "This model is equipped with: bolt pistol; crozius arcanum.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 boltgun ◦ 1 combi-weapon ◦ 1 grav-pistol ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol ◦ 1 storm bolter ◦ 1 power fist"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "70"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Litany of Hate",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll."
          },
          {
            "name": "Spiritual Leader",
            "description": "Once per battle, at the start of any phase, you can select one friendly Adeptus Astartes unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked."
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
          "ld": "5+",
          "oc": "1",
          "name": "Chaplain"
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
              "name": "Boltgun",
              "keywords": [],
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Crozius arcanum",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Grenades", "Imperium", "Chaplain"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "35a9d1d2-73bd-5f29-bf88-afd1782bad21",
      "name": "Chaplain Cassius",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Sternguard Veteran Squad ■ Tactical Squad ■ Tyrannic War Veterans ■ Vanguard Veteran Squad",
      "composition": ["1 Chaplain Cassius – Epic Hero"],
      "loadout": "This model is equipped with: Infernus; artificer crozius.",
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
        "core": ["Feel No Pain 5+", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Catechism of Death",
            "description": "While this model is leading a unit, melee weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability."
          },
          {
            "name": "Inspired Retribution",
            "description": "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play."
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
          "ld": "5+",
          "oc": "1",
          "name": "Chaplain Cassius"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Infernus",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "ignores cover",
                "torrent"
              ],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Artificer crozius",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
        "Epic Hero",
        "Imperium",
        "Chaplain Cassius"
      ],
      "factions": ["Adeptus Astartes", "Ultramarines"]
    },
    {
      "id": "30fe2cd6-9c34-59f5-910e-3f5fcbab2413",
      "name": "Chaplain In Terminator Armour",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Relic Terminator Squad ■ Terminator Assault Squad ■ Terminator Squad",
      "composition": ["1 Chaplain in Terminator Armour"],
      "loadout": "This model is equipped with: storm bolter; crozius arcanum.",
      "wargear": [
        "This model’s storm bolter can be replaced with 1 combi-weapon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "90"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Litany of Hate",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll."
          },
          {
            "name": "Recitation of Faith",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against mortal wounds."
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
          "w": "5",
          "ld": "5+",
          "oc": "1",
          "name": "Chaplain In Terminator Armour"
        }
      ],
      "rangedWeapons": [
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
              "name": "Crozius arcanum",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
        "Imperium",
        "Terminator",
        "Chaplain"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "68e51be1-da54-5873-a47e-242434d86e04",
      "name": "Chaplain On Bike",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Bike Squad ■ Outrider Squad",
      "composition": ["1 Chaplain on Bike"],
      "loadout": "This model is equipped with: absolvor bolt pistol; twin bolt rifle; crozius arcanum.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Litany of Hate",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll."
          },
          {
            "name": "Catechism of Fire",
            "description": "Each time this model’s unit is selected to shoot, you can select one enemy unit within 12\" of and visible to this model. Until the end of the phase, ranged weapons equipped by models in this model’s unit have the [DEVASTATING WOUNDS] ability when targeting that enemy unit."
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
          "sv": "3+",
          "w": "5",
          "ld": "5+",
          "oc": "1",
          "name": "Chaplain On Bike"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Absolvor bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Twin bolt rifle",
              "keywords": ["twin-linked"],
              "range": "24\"",
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
              "name": "Crozius arcanum",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Character", "Grenades", "Imperium", "Chaplain"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "d6954fe8-4a09-5f1e-b9cf-29de7e511081",
      "name": "Chaplain With Jump Pack",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad with Jump Packs ■ Vanguard Veteran Squad with Jump Packs",
      "composition": ["1 Chaplain with Jump Pack"],
      "loadout": "This model is equipped with: bolt pistol; crozius arcanum.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 boltgun ◦ 1 combi-weapon ◦ 1 grav-pistol ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol ◦ 1 storm bolter ◦ 1 power fist"
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Litany of Hate",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll."
          },
          {
            "name": "Exhortation of Rage",
            "description": "Each time this model’s unit is selected to fight, you can select one enemy unit within Engagement Range of this model’s unit and roll one D6: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds."
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
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Chaplain With Jump Pack"
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
              "name": "Boltgun",
              "keywords": [],
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Crozius arcanum",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
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
        "Jump Pack",
        "Fly",
        "Imperium",
        "Chaplain"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "aad0f52c-e204-5ddd-a9db-84b0a4707b2e",
      "name": "Chief Librarian Tigurius",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Chief Librarian Tigurius – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Storm of the Emperor’s Wrath; Rod of Tigurius.",
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
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Hood of Hellfire",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks and mortal wounds."
          },
          {
            "name": "Master of Prescience (Psychic)",
            "description": "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll. In addition, once per battle round, you can target that unit with one of the following Stratagems for 0CP: Counter-offensive; Fire Overwatch; Go to Ground; Heroic Intervention."
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
          "name": "Chief Librarian Tigurius"
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
        },
        {
          "profiles": [
            {
              "name": "Storm of the Emperor’s Wrath – witchfire",
              "keywords": ["blast", "psychic"],
              "range": "18\"",
              "attacks": "D6",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Storm of the Emperor’s Wrath – focused witchfire",
              "keywords": ["blast", "hazardous", "psychic"],
              "range": "18\"",
              "attacks": "2D6",
              "skill": "2+",
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
              "name": "Rod of Tigurius",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "D3"
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
        "Chief Librarian Tigurius"
      ],
      "factions": ["Adeptus Astartes", "Ultramarines"]
    },
    {
      "id": "59dea85f-cc3f-5001-b591-3de575734304",
      "name": "Command Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": [
        "1 Apothecary",
        "1 Company Ancient",
        "1 Company Champion",
        "2 Company Veterans"
      ],
      "loadout": "The Apothecary is equipped with: bolt pistol; Astartes chainsword. The Company Ancient is equipped with: bolt pistol; close combat weapon. The Company Champion is equipped with: bolt pistol; Champion’s blade; Astartes shield. Each Company Veteran is equipped with: bolt pistol; boltgun, close combat weapon.",
      "wargear": [
        "Any number of models can each have their bolt pistol replaced with one of the following: ◦ 1 hand flamer* ◦ 1 grav-pistol* ◦ 1 inferno pistol* ◦ 1 plasma pistol*",
        "Any number of Company Veterans can each have their bolt pistol replaced with 1 Astartes shield.",
        "Any number of Company Veterans can each have  their bolt pistol and boltgun replaced with 1 twin lightning claws.",
        "The Company Ancient’s bolt pistol can be replaced  with one of the following:  ◦ 1 boltgun  ◦ 1 combi-weapon*  *  The profile for this weapon can be found on the Adeptus Astartes Armoury card.",
        "Any number of Company Veterans can each have their boltgun replaced with one of the following: ◦ 1 Astartes chainsword ◦ 1 Astartes shield ◦ 1 combi-weapon* ◦ 1 flamer ◦ 1 heavy bolter*  ◦ 1 heavy flamer* ◦ 1 grav-cannon*  ◦ 1 grav-gun  ◦ 1 lascannon* ◦ 1 meltagun  ◦ 1 missile launcher*  ◦ 1 multi-melta*  ◦ 1 plasma cannon*  ◦ 1 storm bolter* ◦ 1 power fist  ◦ 1 power weapon ◦ 1 thunder hammer"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "165"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Astartes Shield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Narthecium",
            "description": "While this unit contains an Apothecary, in your Command phase, you can return 1 destroyed model (excluding Character models) to this unit."
          },
          {
            "name": "Astartes Banner",
            "description": "While this unit contains a Company Ancient, add 1 to the Objective Control characteristic of models in this unit."
          },
          {
            "name": "Honour or Death",
            "description": "While this unit contains a Company Champion, add 1 to Advance and Charge rolls made for this unit and you can target this unit with the Heroic Intervention Stratagem for 0CP, even if you have already used that Stratagem on a different unit this phase."
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
          "ld": "6+",
          "oc": "1",
          "name": "Command Squad"
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
              "name": "Boltgun",
              "keywords": [],
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
              "name": "Flamer",
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
              "name": "Grav-gun",
              "keywords": ["anti-vehicle 2+"],
              "range": "18\"",
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
              "name": "Meltagun",
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
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Champion’s blade",
              "keywords": ["precision"],
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
        },
        {
          "profiles": [
            {
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Imperium", "Command Squad"],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Captain",
        "Captain Sicarius",
        "Chaplain",
        "Chaplain Cassius",
        "Librarian",
        "Lieutenant",
        "Pedro Kantor",
        "Vulkan He’stan"
      ]
    },
    {
      "id": "f310f757-37da-554b-99e9-8d8936adf269",
      "name": "Contemptor Dreadnought",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Contemptor Dreadnought"],
      "loadout": "This model is equipped with: combi-bolter; multi-melta; Dreadnought combat weapon.",
      "wargear": [
        "This model’s multi-melta can be replaced with 1 Kheres-pattern assault cannon."
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
        "core": ["Deadly Demise 1"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Even In Death, I Serve",
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
          "name": "Contemptor Dreadnought"
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
              "name": "Kheres-pattern assault cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
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
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Dreadnought combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Imperium", "Contemptor Dreadnought"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "5a09a60a-8d85-5328-911f-0f1fd393900a",
      "name": "Darnath Lysander",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Relic Terminator Squad ■ Terminator Assault Squad ■ Terminator Squad",
      "composition": ["1 Darnath Lysander – Epic Hero"],
      "loadout": "This model is equipped with: Fist of Dorn.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Icon of Obstinacy",
            "description": "While this model is leading a unit, each time an attack targets that unit, if the Strength characteristic of that attack is greater than or equal to the Toughness characteristic of that unit, subtract 1 from the Wound roll."
          },
          {
            "name": "Rampart",
            "description": "Once per battle, at the start of any phase, this model can use this ability. If it does, until the end of the phase, this model has a 2+ invulnerable save."
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
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Darnath Lysander"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Fist of Dorn",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "10",
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
        "Imperium",
        "Terminator",
        "Captain",
        "Darnath Lysander"
      ],
      "factions": ["Adeptus Astartes", "Imperial Fists"]
    },
    {
      "id": "89a5bc47-72bc-50c4-a6c0-7952a6d8fb41",
      "name": "Desolation Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Desolation Sergeant", "4-9 Desolation Marines"],
      "loadout": "Every model is equipped with: bolt pistol; castellan launcher; superfrag rocket launcher; close combat weapon.",
      "wargear": [
        "All of the models in this unit can each have their superfrag rocket launcher replaced with 1 superkrak rocket launcher.",
        "The Desolation Sergeant’s superfrag rocket launcher or superkrak rocket launcher can be replaced with 1 vengor launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "120"
        },
        {
          "models": "10",
          "cost": "240"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Targeter Optics",
            "description": "Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the [IGNORES COVER] ability and can ignore the penalty to their Hit rolls when making attacks with Indirect Fire weapons against targets that are not visible to them."
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
          "oc": "1",
          "name": "Desolation Squad"
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
              "name": "Castellan launcher",
              "keywords": ["blast", "indirect fire"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Superfrag rocket launcher",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6+1",
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
              "name": "Superkrak rocket launcher",
              "keywords": ["heavy"],
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
              "name": "Vengor launcher",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
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
        "Tacticus",
        "Desolation Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": ["Primaris Ancient", "Primaris Apothecary", "Primaris Librarian"]
    },
    {
      "id": "f715322f-e40b-5c04-bbee-e34a13203a6b",
      "name": "Devastator Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Devastator Sergeant", "4-9 Devastator Marines"],
      "loadout": "Every model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": [
        "Up to 4 Devastator Marines can each have their boltgun replaced with one of the following: ◦ 1 grav-cannon ◦ 1 heavy bolter ◦ 1 heavy flamer* ◦ 1 lascannon ◦ 1 missile launcher ◦ 1 multi-melta ◦ 1 plasma cannon*",
        "The Devastator Sergeant’s bolt pistol and boltgun can be replaced with 1 twin lightning claws.  *  The profile for this weapon can be found on the Adeptus Astartes Armoury card. ** T his model can only be equipped with two ranged weapons if one of them is a Pistol (and it can only have one Pistol)",
        "The Devastator Sergeant’s bolt pistol and boltgun can be replaced with two different weapons from the following list:** ◦ 1 Astartes chainsword ◦ 1 bolt pistol ◦ 1 boltgun ◦ 1 combi-weapon* ◦ 1 grav-pistol* ◦ 1 hand flamer* ◦ 1 inferno pistol*  ◦ 1 plasma pistol* ◦ 1 storm bolter* ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "120"
        },
        {
          "models": "10",
          "cost": "200"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Signum",
            "description": "Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the [IGNORES COVER] ability."
          },
          {
            "name": "Armorium Cherub",
            "description": "Once per battle, after making a Hit roll for a model in this unit, you can change that roll to an unmodified 6. Designer’s Note: Place an Armorium Cherub token next to the unit, removing it once this ability has been used."
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
          "oc": "1",
          "name": "Devastator Squad"
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
              "name": "Boltgun",
              "keywords": [],
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
              "name": "Grav-cannon",
              "keywords": ["anti-vehicle 2+", "heavy"],
              "range": "24\"",
              "attacks": "3",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "3"
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
              "name": "Lascannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Missile launcher – frag",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Missile launcher – krak",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Multi-melta",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
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
        },
        {
          "profiles": [
            {
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Imperium", "Devastator Squad"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "9ae4aba2-748d-5e1f-96f9-f71efd85a5b6",
      "name": "Dreadnought",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Dreadnought"],
      "loadout": "This model is equipped with: assault cannon; storm bolter; Dreadnought combat weapon.",
      "wargear": [
        "This model’s assault cannon can be replaced with one of the following: ◦ 1 heavy plasma cannon ◦ 1 multi-melta ◦ 1 twin lascannon",
        "This model’s Dreadnought combat weapon and storm bolter can be replaced with one of the following: ◦  1 missile launcher and 1 close combat weapon ◦  1 heavy flamer and 1 Dreadnought combat weapon"
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Wisdom of the Ancients (Aura)",
            "description": "While a friendly Adeptus Astartes Infantry unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1."
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
          "name": "Dreadnought"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Assault cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Heavy plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Heavy plasma cannon – supercharge",
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
              "name": "Dreadnought combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Smoke", "Imperium", "Dreadnought"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "799e25f4-a120-560f-bcec-719ea05533ac",
      "name": "Drop Pod",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Drop Pod"],
      "loadout": "This model is equipped with: storm bolter.",
      "wargear": [
        "This model’s storm bolter can be replaced with 1 deathwind launcher."
      ],
      "transport": "This model has a transport capacity of 10 Adeptus Astartes Infantry models. It cannot transport Jump Pack, Wulfen, Gravis, Centurion or Terminator models.",
      "points": [
        {
          "models": "1",
          "cost": "70"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Drop Pod Assault",
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
          "m": "-",
          "t": "7",
          "sv": "3+",
          "w": "8",
          "ld": "6+",
          "oc": "2",
          "name": "Drop Pod"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Deathwind launcher",
              "keywords": ["blast"],
              "range": "12\"",
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
      "meleeWeapons": [],
      "keywords": ["Vehicle", "Transport", "Imperium", "Drop Pod"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "ad3d4f6f-6c7b-5668-aeef-79be5d3e1b26",
      "name": "Eliminator Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Eliminator Sergeant", "2 Eliminators"],
      "loadout": "Every model is equipped with: bolt pistol; bolt sniper rifle; close combat weapon.",
      "wargear": [
        "The Eliminator Sergeant’s bolt sniper rifle can be replaced with one of the following: ◦ 1 instigator bolt carbine ◦ 1 las fusil",
        "All Eliminators in this unit can each have their bolt sniper rifle replaced with 1 las fusil."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "95"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Infiltrators", "Stealth"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Reposition Under Covering Fire",
            "description": "In your Shooting phase, after this unit has shot, if it contains an Eliminator Sergeant equipped with an instigator bolt carbine, this unit can make a Normal move. If it does so, until the end of the turn, this unit is not eligible to declare a charge."
          },
          {
            "name": "Mark the Target",
            "description": "Each time this unit Remains Stationary, until the start of your next Movement phase, ranged weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability."
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
          "oc": "1",
          "name": "Eliminator Squad"
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
              "name": "Bolt sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Instigator bolt carbine",
              "keywords": ["precision"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Las fusil",
              "keywords": ["heavy"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
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
        "Phobos",
        "Eliminator Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": ["Captain In Phobos Armour", "Librarian In Phobos Armour"]
    },
    {
      "id": "b3a4b88e-2164-580c-8fb1-a5c6e4e8e62a",
      "name": "Eradicator Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Eradicator Sergeant", "2-5 Eradicators"],
      "loadout": "Every model is equipped with: bolt pistol; melta rifle; close combat weapon.",
      "wargear": [
        "For every 3 models in this unit, 1 Eradicator’s melta rifle can be replaced with 1 multi-melta."
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Total Obliteration",
            "description": "Each time a ranged attack made by a model in this unit targets a Monster or Vehicle model, you can re-roll the Hit roll, you can re-roll the Wound roll and you can re-roll the Damage roll."
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
          "ld": "6+",
          "oc": "1",
          "name": "Eradicator Squad"
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
              "name": "Melta rifle",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
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
              "name": "Multi-melta",
              "keywords": ["heavy", "melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "4+",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
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
        "Gravis",
        "Eradicator Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Apothecary Biologis",
        "Captain In Gravis Armour",
        "Iron Father Feirros",
        "Marneus Calgar",
        "Tor Garadon"
      ]
    },
    {
      "id": "ee860940-24a0-5e4d-9e45-7cf2a3d2c096",
      "name": "Firestrike Servo-turrets",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1-2 Firestrike Servo-turrets"],
      "loadout": "Every model is equipped with: twin Firestrike las-talon; close combat weapon.",
      "wargear": [
        "Any number of models can each have their twin Firestrike las-talon replaced with 1 twin Firestrike autocannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80"
        },
        {
          "models": "2",
          "cost": "160"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Sentinel Protocols",
            "description": "Each time you select this unit for the Fire Overwatch Stratagem, hits are scored on unmodified Hit rolls of 4+ when resolving that Stratagem."
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
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Firestrike Servo-turrets"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Twin Firestrike autocannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "3",
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
              "name": "Twin Firestrike las-talon",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "10",
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
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Artillery",
        "Vehicle",
        "Imperium",
        "Firestrike Servo-turrets"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "b22e3ef7-6afa-5dda-8637-067fc98a4e31",
      "name": "Gladiator Lancer",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Gladiator Lancer"],
      "loadout": "This model is equipped with: Lancer laser destroyer; 2 storm bolters; armoured hull.",
      "wargear": [
        "This model’s 2 storm bolters can be replaced with 2 fragstorm grenade launchers.",
        "This model can be equipped with 1 ironhail heavy stubber.",
        "This model can be equipped with 1 Icarus rocket pod."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Aquilon Optics",
            "description": "Each time this model is selected to shoot, you can re-roll one Hit roll, you can re-roll one Wound roll and you can re-roll one Damage roll when resolving its attacks."
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
          "name": "Gladiator Lancer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Fragstorm grenade launcher",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Icarus rocket pod",
              "keywords": ["anti-fly 2+"],
              "range": "24\"",
              "attacks": "D3",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Lancer laser destroyer",
              "keywords": ["heavy"],
              "range": "72\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "14",
              "ap": "-4",
              "damage": "D6+3"
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Gladiator Lancer"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "0fae5944-73f5-5791-b835-ba2938f5d76f",
      "name": "Gladiator Reaper",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Gladiator Reaper"],
      "loadout": "This model is equipped with: 2 tempest bolters; twin heavy onslaught gatling cannon; armoured hull.",
      "wargear": [
        "This model can be equipped with 1 ironhail heavy stubber.",
        "This model can be equipped with 1 Icarus rocket pod."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Rotating Death",
            "description": "This model’s twin heavy onslaught gatling cannon has the [SUSTAINED HITS 2] ability when targeting Infantry units."
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
          "name": "Gladiator Reaper"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Icarus rocket pod",
              "keywords": ["anti-fly 2+"],
              "range": "24\"",
              "attacks": "D3",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Tempest bolter",
              "keywords": ["rapid fire 4"],
              "range": "24\"",
              "attacks": "4",
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
              "name": "Twin heavy onslaught gatling cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "12",
              "skill": "3+",
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Gladiator Reaper"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "6bbb474f-faae-5610-8e6c-941d01509be8",
      "name": "Gladiator Valiant",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Gladiator Valiant"],
      "loadout": "This model is equipped with: 2 multi-meltas; twin las-talon; armoured hull.",
      "wargear": [
        "This model can be equipped with 1 ironhail heavy stubber.",
        "This model can be equipped with 1 Icarus rocket pod."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Ferocious Assault",
            "description": "Each time this model makes an attack with its twin las-talon that targets the closest eligible Monster or Vehicle unit, add 1 to the Hit roll."
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
          "name": "Gladiator Valiant"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Icarus rocket pod",
              "keywords": ["anti-fly 2+"],
              "range": "24\"",
              "attacks": "D3",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Multi-melta",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "10",
              "ap": "-4",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin las-talon",
              "keywords": ["twin-linked"],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "10",
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Gladiator Valiant"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "4d5b4ec3-22a0-5ede-b3e9-9bfd070f2cc8",
      "name": "Hammerfall Bunker",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Hammerfall Bunker"],
      "loadout": "This model is equipped with: Hammerfall heavy bolter array; Hammerfall missile launcher.",
      "wargear": [
        "This model’s Hammerfall heavy bolter array can be replaced with 1 Hammerfall heavy flamer array."
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
        "core": ["Deadly Demise D6"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so."
          },
          {
            "name": "Ceramite Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-4 WOUNDS REMAINING",
          "description": "Ceramite Cover: Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack."
        }
      },
      "stats": [
        {
          "m": "-",
          "t": "12",
          "sv": "2+",
          "w": "14",
          "ld": "6+",
          "oc": "0",
          "name": "Hammerfall Bunker"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Hammerfall heavy bolter array",
              "keywords": [
                "defensive array*",
                "sustained hits 1",
                "twin-linked"
              ],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Hammerfall heavy flamer array",
              "keywords": [
                "defensive array*",
                "ignores cover",
                "torrent",
                "twin-linked"
              ],
              "range": "12\"",
              "attacks": "2D6",
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
              "name": "Hammerfall missile launcher – superfrag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "2D6+2",
              "skill": "4+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Hammerfall missile launcher – superkrak",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "4+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": ["Fortification", "Imperium", "Hammerfall Bunker"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "f5fd658b-bc18-5e73-85d4-94f8678198cd",
      "name": "Heavy Intercessor Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Heavy Intercessor Sergeant", "4-9 Heavy Intercessors"],
      "loadout": "Every model is equipped with: bolt pistol; heavy bolt rifle; close combat weapon.",
      "wargear": [
        "For every 5 models in this unit, 1 Heavy Intercessor’s heavy bolt rifle can be replaced with 1 heavy bolter."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "110"
        },
        {
          "models": "10",
          "cost": "220"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Unyielding in the Face of the Foe",
            "description": "While this unit is within range of an objective marker you control, each time an attack with a Damage characteristic of 1 is allocated to a model in this unit, add 1 to any armour saving throw made against that attack."
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
          "ld": "6+",
          "oc": "2",
          "name": "Heavy Intercessor Squad"
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
              "name": "Heavy bolt rifle",
              "keywords": ["assault", "heavy"],
              "range": "30\"",
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
              "name": "Heavy bolter",
              "keywords": ["assault", "heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
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
        "Gravis",
        "Heavy Intercessor Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Apothecary Biologis",
        "Captain In Gravis Armour",
        "Iron Father Feirros",
        "Marneus Calgar",
        "Tor Garadon"
      ]
    },
    {
      "id": "b0b6ef3b-fb16-5a94-8c40-2ce491728c24",
      "name": "Hellblaster Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Hellblaster Sergeant", "4-9 Hellblasters"],
      "loadout": "Every model is equipped with: bolt pistol; plasma incinerator; close combat weapon.",
      "wargear": [
        "All models in this unit can each have their bolt pistol replaced with 1 plasma pistol."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "125"
        },
        {
          "models": "10",
          "cost": "250"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "For the Chapter!",
            "description": "Each time a model in this unit is destroyed, roll one D6: on a 3+, do not remove it from play. The destroyed model can shoot after the attacking model’s unit has finished making its attacks, and is then removed from play. When resolving these attacks, any Hazardous tests taken for that attack are automatically passed. Designer’s Note: This ability is triggered even when a model in this unit is destroyed as the result of failing a Hazardous test, meaning such a model may be able to shoot twice in the same phase."
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
          "oc": "1",
          "name": "Hellblaster Squad"
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
              "name": "Plasma incinerator – standard",
              "keywords": ["assault", "heavy"],
              "range": "24\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma incinerator – supercharge",
              "keywords": ["assault", "hazardous", "heavy"],
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
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
        "Tacticus",
        "Hellblaster Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Primaris Ancient",
        "Primaris Apothecary",
        "Primaris Captain",
        "Primaris Chaplain",
        "Primaris Librarian",
        "Primaris Lieutenant"
      ]
    },
    {
      "id": "f1a60f26-cbae-5a6f-9aa4-c79c50ef0126",
      "name": "Hunter",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Hunter"],
      "loadout": "This model is equipped with: skyspear missile launcher; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter."
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
        "core": ["Deadly Demise D3"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Hunter Missile Targeting",
            "description": "Each time this model makes an attack with its skyspear missile launcher that targets a Monster or Vehicle unit, that attack scores a hit on an unmodified Hit roll of 2+."
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
          "m": "9\"",
          "t": "11",
          "sv": "3+",
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Hunter"
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
              "name": "Skyspear missile launcher",
              "keywords": ["anti-fly 3+", "devastating wounds", "heavy"],
              "range": "36\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6+2"
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Hunter"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "5fe8f17a-a8fb-5a0a-9b91-d61114df7d56",
      "name": "Impulsor",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Impulsor"],
      "loadout": "This model is equipped with: 2 storm bolters; armoured hull.",
      "wargear": [
        "This model can be equipped with 1 ironhail heavy stubber.",
        "This model’s 2 storm bolters can be replaced with 2 fragstorm grenade launchers.",
        "This model can be equipped with one of the following: ◦ 1 bellicatus missile array ◦ 1 ironhail skytalon array ◦ 1 orbital comms array ◦ 1 shield dome"
      ],
      "transport": "This model has a transport capacity of 6 Tacticus or Phobos Infantry models. It cannot transport Jump Pack models.",
      "points": [
        {
          "models": "1",
          "cost": "95"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Orbital Comms Array (Aura)",
            "description": "While a friendly Adeptus Astartes unit is within 6\" of the bearer, each time you target that unit with a Stratagem, roll one D6: on a 5+, you gain 1CP."
          },
          {
            "name": "Shield Dome",
            "description": "The bearer has a 5+ invulnerable save."
          }
        ],
        "core": ["Deadly Demise D3", "Firing Deck 6"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Assault Vehicle",
            "description": "Units can disembark from this Transport after it has Advanced. Units that do so count as having made a Normal move, and cannot declare a charge that turn."
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
          "ld": "6+",
          "oc": "2",
          "name": "Impulsor"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bellicatus missile array – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Bellicatus missile array – Icarus",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            },
            {
              "name": "Bellicatus missile array – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Fragstorm grenade launcher",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Ironhail skytalon array",
              "keywords": ["anti-fly 4+", "sustained hits 1"],
              "range": "36\"",
              "attacks": "8",
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
        "Impulsor"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "e9978935-9b9f-5858-92c9-381d9378953b",
      "name": "Inceptor Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Inceptor Sergeant", "2-5 Inceptors"],
      "loadout": "Every model is equipped with: assault bolters; close combat weapon.",
      "wargear": [
        "All models in this unit can each have their assault bolters replaced with 1 plasma exterminators."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "115"
        },
        {
          "models": "6",
          "cost": "230"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Meteoric Descent",
            "description": "When this unit is set up on the battlefield using the Deep Strike ability, it can perform a meteoric descent. If it does, this unit can be set up anywhere on the battlefield that is more than 3\" horizontally away from all enemy units, but until the end of the turn, it is not eligible to declare a charge."
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
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Inceptor Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Assault bolters",
              "keywords": [
                "assault",
                "pistol",
                "sustained hits 2",
                "twin-linked"
              ],
              "range": "18\"",
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
              "name": "Plasma exterminators – standard",
              "keywords": ["assault", "pistol", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Plasma exterminators – supercharge",
              "keywords": ["assault", "pistol", "hazardous", "twin-linked"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
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
        "Imperium",
        "Gravis",
        "Inceptor Squad"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "6e3736a3-d5fa-5320-9fc7-1978c08644ef",
      "name": "Incursor Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Incursor Sergeant", "4-9 Incursors"],
      "loadout": "Every model is equipped with: bolt pistol; occulus bolt carbine; paired combat blades.",
      "wargear": ["One Incusor can be equipped with 1 haywire mine."],
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
            "name": "Haywire Mine",
            "description": "Once per battle, at the start of any phase, you can select one enemy unit within 3\" of the bearer and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds, or 2D3 mortal wounds instead if it is a Vehicle unit."
          }
        ],
        "core": ["Scouts 6\""],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Multi-spectrum Array",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit that was hit by one or more attacks made by this unit this phase. Until the end of the phase, each time a friendly Adeptus Astartes unit makes an attack that targets that enemy unit, add 1 to the Hit roll."
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
          "oc": "1",
          "name": "Incursor Squad"
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
              "name": "Occulus bolt carbine",
              "keywords": ["assault", "ignores cover"],
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
              "name": "Paired combat blades",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
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
        "Smoke",
        "Imperium",
        "Phobos",
        "Incursor Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Captain In Phobos Armour",
        "Librarian In Phobos Armour",
        "Lieutenant In Phobos Armour"
      ]
    },
    {
      "id": "777d43b8-ed79-5ba7-83ee-c27e402752da",
      "name": "Infernus Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Infernus Sergeant", "4-9 Infernus Marines"],
      "loadout": "Every model is equipped with: bolt pistol; pyreblaster; close combat weapon.",
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
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Purge the Foe",
            "description": "In your Shooting phase, after this unit has shot, you can select one enemy Infantry unit hit by one or more of those attacks made with a pyreblaster. That enemy unit must take a Battle-shock test."
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
          "oc": "1",
          "name": "Infernus Squad"
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
              "name": "Pyreblaster",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "attacks": "3",
              "skill": "3+",
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
        "Tacticus",
        "Infernus Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Adrax Agatone",
        "Judiciar",
        "Marneus Calgar",
        "Primaris Ancient",
        "Primaris Apothecary",
        "Primaris Captain",
        "Primaris Chaplain",
        "Primaris Company Champion",
        "Primaris Librarian",
        "Primaris Lieutenant",
        "Vulkan He’stan"
      ]
    },
    {
      "id": "fc597ceb-aa47-52f2-8b47-f92bb8b63b3e",
      "name": "Infiltrator Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Infiltrator Sergeant", "4-9 Infiltrators"],
      "loadout": "Every model is equipped with: bolt pistol; marksman bolt carbine; close combat weapon.",
      "wargear": [
        "1 Infiltrator can be equipped with 1 helix gauntlet.*",
        "1 Infiltrator can be equipped with 1 Infiltrator comms array.* * These options cannot be taken on the same model."
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
            "name": "Helix Gauntlet",
            "description": "Models in the bearer’s unit have the Feel No Pain 6+ ability."
          },
          {
            "name": "Infiltrator Comms Array",
            "description": "Each time you target the bearer’s unit with a Stratagem, roll one D6: on a 5+, you gain 1CP."
          }
        ],
        "core": ["Infiltrators"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Omni-scramblers",
            "description": "Enemy units that are set up on the battlefield as Reinforcements cannot be set up within 12\" of this unit."
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
          "oc": "1",
          "name": "Infiltrator Squad"
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
              "name": "Marksman bolt carbine",
              "keywords": ["heavy"],
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
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
        "Smoke",
        "Imperium",
        "Phobos",
        "Infiltrator Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Captain In Phobos Armour",
        "Librarian In Phobos Armour",
        "Lieutenant In Phobos Armour"
      ]
    },
    {
      "id": "ba5159e6-672b-5e6f-a7e1-dd03f49cb4b5",
      "name": "Intercessor Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Intercessor Sergeant", "4-9 Intercessors"],
      "loadout": "Every model is equipped with: bolt pistol; bolt rifle; close combat weapon.",
      "wargear": [
        "The Sergeant’s bolt rifle can be replaced with one of the following: ◦ 1 Astartes chainsword ◦ 1 hand flamer ◦ 1 plasma pistol ◦ 1 power weapon",
        "The Intercessor Sergeant’s close combat weapon can be replaced with one of the following: ◦ 1 Astartes chainsword ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer",
        "For every 5 models in this unit, 1 model equipped with a bolt rifle can be equipped with 1 Astartes grenade launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "95"
        },
        {
          "models": "10",
          "cost": "190"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Objective Secured",
            "description": "If you control an objective marker at the end of your Command phase and this unit is within range of that objective marker, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn."
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
          "name": "Intercessor Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Astartes grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Astartes grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Bolt rifle",
              "keywords": ["assault", "heavy"],
              "range": "24\"",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
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
        "Battleline",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Intercessor Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Adrax Agatone",
        "Chief Librarian Tigurius",
        "Judiciar",
        "Kor’sarro Khan",
        "Marneus Calgar",
        "Primaris Ancient",
        "Primaris Apothecary",
        "Primaris Captain",
        "Primaris Chaplain",
        "Primaris Company Champion",
        "Primaris Librarian",
        "Primaris Lieutenant",
        "Primaris Techmarine",
        "Uriel Ventris"
      ]
    },
    {
      "id": "1ccd047a-ac20-517c-8fdb-4cbf37eca0ad",
      "name": "Invader Atv",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Invader ATV"],
      "loadout": "This model is equipped with: heavy bolt pistol; twin bolt rifle, onslaught gatling cannon; close combat weapon.",
      "wargear": [
        "This model’s onslaught gatling cannon can be replaced with 1 multi-melta."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "80"
        },
        {
          "models": "1",
          "cost": "80"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Outrider Escort",
            "description": "Once per turn, in your opponent’s Shooting phase, when a friendly Adeptus Astartes Mounted unit within 6\" of this model is selected as the target of an attack, this model can use this ability. If it does, after that enemy unit has finished making its attacks, this model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)."
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
          "sv": "3+",
          "w": "8",
          "ld": "6+",
          "oc": "2",
          "name": "Invader Atv"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
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
              "name": "Onslaught gatling cannon",
              "keywords": ["devastating wounds"],
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
              "name": "Twin bolt rifle",
              "keywords": ["twin-linked"],
              "range": "24\"",
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
              "attacks": "5",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Grenades", "Imperium", "Invader ATV"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "84126ce0-85ba-5960-8f4f-b5fa650ee62b",
      "name": "Invictor Tactical Warsuit",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Invictor Tactical Warsuit"],
      "loadout": "This model is equipped with: fragstorm grenade launcher; heavy bolter; incendium cannon; twin ironhail heavy stubber; Invictor fist.",
      "wargear": [
        "This model’s incendium cannon can be replaced with 1 twin ironhail autocannon."
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
        "core": ["Deadly Demise D3", "Scouts 8\""],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Combat Support",
            "description": "Once per turn, in your opponent’s Shooting phase, when a friendly Adeptus Astartes Phobos Infantry unit within 6\" of this model is selected as the target of an attack, this model can use this ability. If it does, after that enemy model’s unit has finished making its attacks, this model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)."
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
          "t": "8",
          "sv": "3+",
          "w": "12",
          "ld": "6+",
          "oc": "4",
          "name": "Invictor Tactical Warsuit"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Fragstorm grenade launcher",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
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
              "name": "Incendium cannon",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
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
              "name": "Twin ironhail autocannon",
              "keywords": ["twin-linked"],
              "range": "48\"",
              "attacks": "3",
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
              "name": "Twin ironhail heavy stubber",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Invictor fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "14",
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
        "Phobos",
        "Invictor Tactical Warsuit"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "7a55a0fb-d80d-5724-9ef8-5dbe69f98112",
      "name": "Iron Father Feirros",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Aggressor Squad ■ Eradicator Squad ■ Heavy Intercessor Squad",
      "composition": ["1 Iron Father Feirros – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Gorgon’s Wrath; Harrowhand; Medusan manipuli.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Rites of Tempering",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability."
          },
          {
            "name": "Iron Father",
            "description": "While this model is within 3\" of one or more friendly Adeptus Astartes Vehicle units, it has the Lone Operative ability."
          },
          {
            "name": "Master of the Forge",
            "description": "In your Command phase, select one friendly Adeptus Astartes Vehicle model within 3\" of this model. That model regains up to 3 lost wounds and, until the start of your next Command phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. You cannot select a unit for this ability that has already been selected for the Blessing of the Omnissiah ability this phase, and vice versa."
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
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Iron Father Feirros"
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
        },
        {
          "profiles": [
            {
              "name": "Gorgon’s Wrath",
              "keywords": ["sustained hits 2"],
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
              "name": "Harrowhand",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Medusan Manipuli",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
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
        "Gravis",
        "Iron Father Feirros"
      ],
      "factions": ["Adeptus Astartes", "Iron Hands"]
    },
    {
      "id": "62e97a7c-c4ae-54b9-9d0c-7cf1115ac7c6",
      "name": "Ironclad Dreadnought",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Ironclad Dreadnought"],
      "loadout": "This model is equipped with: meltagun; storm bolter; Dreadnought combat weapon; seismic hammer.",
      "wargear": [
        "This model’s seismic hammer can be replaced with 1 Dreadnought chainfist.",
        "This model’s Dreadnought combat weapon and storm bolter can be replaced with 1 hurricane bolter.",
        "This model’s storm bolter can be replaced with 1 heavy flamer.",
        "This model’s meltagun can be replaced with 1 heavy flamer.",
        "This model can be equipped with up to 2 hunter-killer missiles.",
        "This model can be equipped with 1 Ironclad assault launchers."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "150"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Ironclad Assault Launchers",
            "description": "The bearer has the Grenades keyword."
          }
        ],
        "core": ["Deadly Demise 1"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Siege-breaker Protocols",
            "description": "Each time this model makes a melee attack that targets a Vehicle or Fortification unit, add 1 to the Hit roll and add 1 to the Wound roll."
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
          "t": "10",
          "sv": "2+",
          "w": "8",
          "ld": "6+",
          "oc": "3",
          "name": "Ironclad Dreadnought"
        }
      ],
      "rangedWeapons": [
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
              "name": "Hurricane bolter",
              "keywords": ["rapid fire 6", "twin-linked"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Meltagun",
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
              "name": "Dreadnought chainfist",
              "keywords": ["anti-vehicle 3+"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Dreadnought combat weapon",
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
              "name": "Seismic hammer",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Smoke",
        "Imperium",
        "Dreadnought",
        "Ironclad Dreadnought"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "975b42e0-7b09-5ece-9dfe-a5da3838b3cf",
      "name": "Judiciar",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Bladeguard Veteran Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Judiciar"],
      "loadout": "This model is equipped with: absolvor bolt pistol; executioner relic blade.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": "* This model has a 4+ invulnerable save against melee attacks."
        },
        "other": [
          {
            "name": "Tempormortis",
            "description": "While this model is leading a unit, that unit has the Fights First ability."
          },
          {
            "name": "Silent Fury",
            "description": "Each time this model destroys an enemy Character model, until the end of the battle, add 1 to the Attacks characteristic of its executioner relic blade."
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
          "ld": "5+",
          "oc": "1",
          "name": "Judiciar"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Absolvor bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
              "attacks": "1",
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
              "name": "Executioner relic blade",
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
      "keywords": ["Infantry", "Character", "Imperium", "Tacticus", "Judiciar"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "54abfd41-d81e-5238-be09-db481da796ac",
      "name": "Kayvaan Shrike",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad with Jump Packs ■ Vanguard Veteran Squad with Jump Packs",
      "composition": ["1 Kayvaan Shrike – Epic Hero"],
      "loadout": "This model is equipped with: Blackout; the Raven’s Talons.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "110"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader", "Lone Operative", "Stealth"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Shadowmaster",
            "description": "While this model is leading a unit, models in this unit cannot be targeted by ranged attacks unless the attacking model is within 12\"."
          },
          {
            "name": "Echo of the Ravenspire",
            "description": "At the end of your opponent’s turn, if this model’s unit is not within Engagement Range of any enemy models, you can remove it from the battlefield and place it into Strategic Reserves."
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
          "sv": "3+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Kayvaan Shrike"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Blackout",
              "keywords": ["pistol", "precision"],
              "range": "18\"",
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
              "name": "The Raven’s Talons",
              "keywords": ["precision", "twin-linked"],
              "range": "Melee",
              "attacks": "7",
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
        "Fly",
        "Jump Pack",
        "Imperium",
        "Chapter Master",
        "Kayvaan Shrike"
      ],
      "factions": ["Adeptus Astartes", "Raven Guard"]
    },
    {
      "id": "990cf04d-3c9b-5891-8513-cc95e7a5ac0f",
      "name": "Kor’sarro Khan",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Kor’sarro Khan – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Moonfang.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "For the Khan!",
            "description": "While this model is leading a unit, ranged weapons equipped by models in that unit have the [ASSAULT] ability and melee weapons equipped by models in that unit have the [LANCE] ability."
          },
          {
            "name": "Trophy Taker",
            "description": "Each time this model destroys an enemy Character model, you gain 1CP."
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
          "name": "Kor’sarro Khan"
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
              "name": "Moonfang",
              "keywords": ["devastating wounds", "precision"],
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
        "Imperium",
        "Captain",
        "Kor’sarro Khan"
      ],
      "factions": ["Adeptus Astartes", "White Scars"]
    },
    {
      "id": "d63b5215-7378-55b6-b363-5d768a81474d",
      "name": "Land Raider",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Land Raider"],
      "loadout": "This model is equipped with: twin heavy bolter; 2 godhammer lascannons; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 multi-melta.",
        "This model can be equipped with 1 storm bolter."
      ],
      "transport": "This model has a transport capacity of 12 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "275"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Oath of Moment"],
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
          "name": "Land Raider"
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
      "keywords": ["Vehicle", "Smoke", "Transport", "Imperium", "Land Raider"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "99c456e2-eaf2-5c78-88b7-22e7d20f2605",
      "name": "Land Raider Crusader",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Land Raider Crusader"],
      "loadout": "This model is equipped with: 2 hurricane bolters; twin assault cannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 multi-melta.",
        "This model can be equipped with 1 storm bolter."
      ],
      "transport": "This model has a transport capacity of 16 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "255"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Oath of Moment"],
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
          "m": "12\"",
          "t": "12",
          "sv": "2+",
          "w": "16",
          "ld": "6+",
          "oc": "5",
          "name": "Land Raider Crusader"
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
              "name": "Hurricane bolter",
              "keywords": ["rapid fire 6", "twin-linked"],
              "range": "24\"",
              "attacks": "6",
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
        },
        {
          "profiles": [
            {
              "name": "Twin assault cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
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
        "Smoke",
        "Grenades",
        "Transport",
        "Imperium",
        "Land Raider Crusader"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "02779f77-6969-5f09-96af-3d742dd7b5df",
      "name": "Land Raider Redeemer",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Land Raider Redeemer"],
      "loadout": "This model is equipped with: 2 flamestorm cannons; twin assault cannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 multi-melta.",
        "This model can be equipped with 1 storm bolter."
      ],
      "transport": "This model has a transport capacity of 14 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "295"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Oath of Moment"],
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
          "m": "12\"",
          "t": "12",
          "sv": "2+",
          "w": "16",
          "ld": "6+",
          "oc": "5",
          "name": "Land Raider Redeemer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Flamestorm cannon",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
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
        },
        {
          "profiles": [
            {
              "name": "Twin assault cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
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
        "Smoke",
        "Grenades",
        "Transport",
        "Imperium",
        "Land Raider Redeemer"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "2ddde98b-47fc-58ab-beab-1748bafff00d",
      "name": "Land Speeder",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Land Speeder"],
      "loadout": "This model is equipped with: heavy bolter; close combat weapon.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 multi-melta."
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
        "core": ["Deadly Demise 1", "Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Target Sighted",
            "description": "At the start of your Shooting phase, select one enemy unit that is visible to this model. Until the end of the phase, each time a friendly Adeptus Astartes model makes an attack with a Blast weapon that targets that enemy unit, add 1 to the Hit roll and that attack has the [IGNORES COVER] ability."
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
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Land Speeder"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
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
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Imperium", "Land Speeder"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "ce97b10a-ebda-50c3-87a0-2218c8449acf",
      "name": "Land Speeder Storm",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Land Speeder Storm"],
      "loadout": "This model is equipped with: Cerberus launcher; heavy bolter; close combat weapon.",
      "wargear": ["None"],
      "transport": "This model has a transport capacity of 6 models. It can only transport Scout Squad, Scout Sniper Squad and Sergeant Telion models.",
      "points": [
        {
          "models": "1",
          "cost": "70"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 1", "Firing Deck 6"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Storm Assault",
            "description": "Each time a unit disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn."
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
          "sv": "4+",
          "w": "7",
          "ld": "6+",
          "oc": "1",
          "name": "Land Speeder Storm"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Cerberus launcher",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6+3",
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Fly",
        "Transport",
        "Dedicated Transport",
        "Imperium",
        "Land Speeder Storm"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "80a20595-c764-5930-b83c-4d1d0b4173df",
      "name": "Land Speeder Tornado",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Land Speeder Tornado"],
      "loadout": "This model is equipped with: assault cannon; heavy bolter; close combat weapon.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 multi-melta.",
        "This model’s assault cannon can be replaced with 1 heavy flamer."
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
        "core": ["Deadly Demise 1", "Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Strafing Enfilade",
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
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Land Speeder Tornado"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Assault cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
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
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Imperium", "Land Speeder Tornado"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "20cb36c7-bf4d-502d-8356-85d3b3ffb752",
      "name": "Land Speeder Typhoon",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Land Speeder Typhoon"],
      "loadout": "This model is equipped with: heavy bolter; Typhoon missile launcher; close combat weapon.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 multi-melta."
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
        "core": ["Deadly Demise 1", "Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Fire and Redeploy",
            "description": "In your Shooting phase, each time this model has shot, if it is not within Engagement Range of any enemy units, it can make a Normal move of up to D6\". If it does, until the end of the turn, this model is not eligible to declare a charge."
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
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Land Speeder Typhoon"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
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
              "name": "Typhoon missile launcher – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Typhoon missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Imperium", "Land Speeder Typhoon"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "7d6fbc0a-42a0-59f2-8fc2-579ab8e03f20",
      "name": "Librarian",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Tactical Squad ■ Vanguard Veteran Squad",
      "composition": ["1 Librarian"],
      "loadout": "This model is equipped with: bolt pistol; Smite; force weapon.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 boltgun ◦ 1 combi-weapon ◦ 1 grav-pistol ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol ◦ 1 storm bolter"
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Psychic Hood",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks."
          },
          {
            "name": "Mental Fortress (Psychic)",
            "description": "While this model is leading a unit, models in that unit have a 4+ invulnerable save."
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
          "name": "Librarian"
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
              "name": "Boltgun",
              "keywords": [],
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
        },
        {
          "profiles": [
            {
              "name": "Smite – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "name": "Smite – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Psyker",
        "Imperium",
        "Librarian"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "d2c541f2-7cc0-578b-b51e-46c647773ebe",
      "name": "Librarian In Phobos Armour",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Eliminator Squad ■ Incursor Squad ■ Infiltrator Squad ■ Reiver Squad",
      "composition": ["1 Librarian in Phobos Armour"],
      "loadout": "This model is equipped with: bolt pistol; Smite; force weapon.",
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
        "core": ["Infiltrators", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Psychic Hood",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks."
          },
          {
            "name": "Shrouding (Psychic)",
            "description": "While this model is leading a unit, models in that unit have the Stealth ability and that unit cannot be targeted by ranged attacks unless the attacking model is within 12\"."
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
          "name": "Librarian In Phobos Armour"
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
              "name": "Smite – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "name": "Smite – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Psyker",
        "Imperium",
        "Phobos",
        "Librarian"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "2253b01e-9a65-551b-b690-50a460cedced",
      "name": "Librarian In Terminator Armour",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Relic Terminator Squad ■ Terminator Assault Squad ■ Terminator Squad",
      "composition": ["1 Librarian in Terminator Armour"],
      "loadout": "This model is equipped with: Smite; force weapon.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 combi-weapon ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "90"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Psychic Hood",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks."
          },
          {
            "name": "Veil of Time (Psychic)",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability."
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Librarian In Terminator Armour"
        }
      ],
      "rangedWeapons": [
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
              "name": "Smite – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "name": "Smite – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
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
        "Imperium",
        "Terminator",
        "Librarian"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "7c3e0867-fcf7-5e57-8b7d-1f6fa74b9754",
      "name": "Librarian With Jump Pack",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad with Jump Packs ■ Vanguard Veteran Squad with Jump Packs",
      "composition": ["1 Librarian with Jump Pack"],
      "loadout": "This model is equipped with: bolt pistol; Smite; force weapon.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 boltgun ◦ 1 combi-weapon ◦ 1 grav-pistol ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol ◦ 1 storm bolter"
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Psychic Hood",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks."
          },
          {
            "name": "Might of Heroes (Psychic)",
            "description": "While this model is leading a unit, improve the Armour Penetration characteristic of melee weapons equipped by models in that unit by 1."
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
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Librarian With Jump Pack"
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
              "name": "Boltgun",
              "keywords": [],
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
        },
        {
          "profiles": [
            {
              "name": "Smite – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "name": "Smite – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Jump Pack",
        "Fly",
        "Psyker",
        "Grenades",
        "Imperium",
        "Librarian"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "206eeab4-32a1-57f3-99bf-d1d8e96cef39",
      "name": "Lieutenant",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Tactical Squad ■ Vanguard Veteran Squad You can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Lieutenant"],
      "loadout": "This model is equipped with: bolt pistol; master-crafted boltgun; Astartes chainsword.",
      "wargear": [
        "This model’s master-crafted boltgun can be replaced with one of the following: ◦ 1 combi-weapon** ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol  ◦ 1 storm bolter ◦ 1 power fist ◦ 1 power weapon ◦ 1 storm shield*",
        "This model’s Astartes chainsword can be replaced with one of the following: ◦ 1 close combat weapon and 1 storm shield* ◦ 1 power fist",
        "This model’s master-crafted boltgun and  Astartes chainsword can be replaced with 1 twin lightning claws. * Maximum one per model. **  The profile for this weapon can be found on the Adeptus Astartes Armoury card."
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
            "name": "Storm Shield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Tactical Precision",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability."
          },
          {
            "name": "Target Priority",
            "description": "This model’s unit is eligible to shoot and declare a charge in a turn in which it Fell Back."
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
          "name": "Lieutenant"
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
        },
        {
          "profiles": [
            {
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Master-crafted boltgun",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
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
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power fist",
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
              "name": "Power weapon",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
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
        "Grenades",
        "Imperium",
        "Lieutenant"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "0141d981-5ebf-54d1-bbf8-20e83757a8e1",
      "name": "Lieutenant In Phobos Armour",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Incursor Squad ■ Infiltrator Squad ■ Reiver Squad You can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Lieutenant in Phobos Armour"],
      "loadout": "This model is equipped with: bolt pistol; master-crafted scoped bolt carbine; paired combat blades.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "60"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Infiltrators", "Leader", "Scouts 6\""],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Tactical Precision",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability."
          },
          {
            "name": "Shoot and Fade",
            "description": "In your Shooting phase, after this model’s unit has shot, if it is not within Engagement Range of any enemy models, it can make a Normal move of up to D6\"."
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
          "name": "Lieutenant In Phobos Armour"
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
        },
        {
          "profiles": [
            {
              "name": "Master-crafted scoped bolt carbine",
              "keywords": [],
              "range": "24\"",
              "attacks": "2",
              "skill": "2+",
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
              "name": "Paired combat blades",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Imperium",
        "Phobos",
        "Lieutenant"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "823f24d9-9549-557f-844a-564d44db7951",
      "name": "Lieutenant In Reiver Armour",
      "faction_id": "SM",
      "leader": "This model can be attached to the following unit: ■ Reiver Squad You can attach this model to the above unit even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Lieutenant in Reiver Armour"],
      "loadout": "This model is equipped with: master-crafted special issue bolt pistol; combat knife.",
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
        "core": ["Leader", "Scouts 6\""],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Tactical Precision",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability."
          },
          {
            "name": "Deadly Terror",
            "description": "While this model is leading a unit, increase the range of that unit’s Terror Troops ability by 3\"."
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
          "name": "Lieutenant In Reiver Armour"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Master-crafted special issue bolt pistol",
              "keywords": ["pistol", "precision"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
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
              "name": "Combat knife",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Smoke",
        "Grenades",
        "Imperium",
        "Phobos",
        "Lieutenant in Reiver Armour"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "fff1718a-d5f7-56d5-82a0-7188d027a3f1",
      "name": "Lieutenant With Combi-weapon",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Lieutenant with Combi-weapon"],
      "loadout": "This model is equipped with: combi-weapon; paired combat blades.",
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
        "core": [
          "Feel No Pain 5+",
          "Infiltrators",
          "Lone Operative",
          "Stealth"
        ],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Priority Objective Identified (Aura)",
            "description": "At the start of the first battle round, if your army contains one or more models with this ability, you can select one objective marker on the battlefield to be the Priority Objective. Until the end of the battle, while a friendly Adeptus Astartes unit is within 6\" of this model, each time a model in that unit makes an attack that targets an enemy unit that is within range of the Priority Target, re-roll a Wound roll of 1."
          },
          {
            "name": "Evade and Survive",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this unit, if this unit is not within Engagement Range of one or more enemy units, it can make a Normal move."
          }
        ],
        "special": [
          {
            "name": "LAST SURVIVOR",
            "description": "This model cannot be selected as your Warlord."
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
          "t": "4",
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Lieutenant With Combi-weapon"
        }
      ],
      "rangedWeapons": [
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
              "name": "Paired combat blades",
              "keywords": ["anti-tyranids 4+", "sustained hits 1"],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Smoke",
        "Imperium",
        "Phobos",
        "Lieutenant with Combi-weapon"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "0ed43323-83ec-5ecf-b6cb-d754d9cc3bd5",
      "name": "Marneus Calgar",
      "faction_id": "SM",
      "leader": "This unit can be attached to the following units: ■ Aggressor Squad ■ Assault Intercessor Squad ■ Bladeguard Veteran Squad ■ Eradicator Squad ■ Heavy Intercessor Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Marneus Calgar – Epic Hero", "2 Victrix Honour Guard"],
      "loadout": "Marneus Calgar is equipped with: Gauntlets of Ultramar. Every Victrix Honour Guard is equipped with: Victrix power sword.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "205"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Inspiring Leader",
            "description": "While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back."
          },
          {
            "name": "Master Tactician",
            "description": "At the start of your Command phase, if this unit’s Marneus Calgar model is on the battlefield, you gain 1CP."
          },
          {
            "name": "Honour Guard of Macragge",
            "description": "While this unit contains one or more Victrix Honour Guard models, this unit’s Marneus Calgar model has the Feel No Pain 4+ ability."
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
          "oc": "1",
          "name": "MARNEUS CALGAR"
        },
        {
          "m": "6\"",
          "t": "4",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "VICTRIX HONOUR GUARD"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Gauntlets of Ultramar",
              "keywords": ["pistol", "twin-linked"],
              "range": "18\"",
              "attacks": "4",
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
              "name": "Gauntlets of Ultramar",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Victrix power sword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "ALL MODELS:",
        "Infantry",
        "Imperium",
        "MARNEUS CALGAR:",
        "Character",
        "Epic Hero",
        "Gravis",
        "Chapter Master",
        "Marneus Calgar"
      ],
      "factions": ["Adeptus Astartes", "Ultramarines"]
    },
    {
      "id": "7a701c86-8b99-5ef2-94a7-15e3cb64e34a",
      "name": "Outrider Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": [
        "1 Outrider Sergeant",
        "2-5 Outriders",
        "0-1 Invader ATV"
      ],
      "loadout": "The Outrider Sergeant and every Outrider is equipped with: heavy bolt pistol; twin bolt rifle; Astartes chainsword. An Invader ATV is equipped with: heavy bolt pistol; twin bolt rifle, onslaught gatling cannon; close combat weapon.",
      "wargear": [
        "An Invader ATV’s onslaught gatling cannon can be replaced with 1 multi-melta."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "115"
        },
        {
          "models": "6",
          "cost": "230"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Turbo-boost",
            "description": "Each time this unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this unit."
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
          "sv": "3+",
          "w": "4",
          "ld": "6+",
          "oc": "2",
          "name": "OUTRIDER"
        },
        {
          "m": "12\"",
          "t": "5",
          "sv": "3+",
          "w": "8",
          "ld": "6+",
          "oc": "2",
          "name": "INVADER ATV"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
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
              "name": "Onslaught gatling cannon",
              "keywords": ["devastating wounds"],
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
              "name": "Twin bolt rifle",
              "keywords": ["twin-linked"],
              "range": "24\"",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Mounted", "Grenades", "Imperium", "Outrider Squad"],
      "factions": ["Adeptus Astartes"],
      "ledBy": ["Captain On Bike", "Chaplain On Bike"]
    },
    {
      "id": "a5466eb5-f937-5880-bdb0-43b0ce3cbce6",
      "name": "Pedro Kantor",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Command Squad ■ Sternguard Veteran Squad ■ Tactical Squad",
      "composition": ["1 Pedro Kantor – Epic Hero"],
      "loadout": "This model is equipped with: Dorn’s Arrow; Fist of Retribution.",
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
        "core": ["Feel No Pain 6+", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Oath of Rynn",
            "description": "Once per battle, at the start of either player’s Command phase, this model can use this ability. When it does, until the end of the turn, add 1 to the Attacks characteristic of weapons equipped by models in this model’s unit."
          },
          {
            "name": "To the Last",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Below Half-strength."
          }
        ],
        "special": [
          {
            "name": "CRIMSON FISTS",
            "description": "This model is from the Crimson Fists Chapter, a successor of the Imperial Fists. For all rules purposes, it is treated as an Imperial Fists model, but it cannot be included in an army that includes any other Imperial Fists Epic Hero models."
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
          "t": "4",
          "sv": "2+",
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Pedro Kantor"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Dorn’s Arrow",
              "keywords": ["rapid fire 2", "sustained hits 1"],
              "range": "24\"",
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
              "name": "Fist of Retribution",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "8",
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
        "Grenades",
        "Imperium",
        "Chapter Master",
        "Pedro Kantor"
      ],
      "factions": ["Adeptus Astartes", "Imperial Fists"]
    },
    {
      "id": "ae8823f4-1e44-58db-a791-de6260571359",
      "name": "Predator Annihilator",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Predator Annihilator"],
      "loadout": "This model is equipped with: Predator twin lascannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 lascannons",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter."
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Annihilator",
            "description": "Each time a ranged attack made by this model is allocated to a Monster or Vehicle model, re-roll a Damage roll of 1."
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
          "name": "Predator Annihilator"
        }
      ],
      "rangedWeapons": [
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
        },
        {
          "profiles": [
            {
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Predator Annihilator"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "3f20009a-ac23-5a71-9fb3-314a04b85d34",
      "name": "Predator Destructor",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Predator Destructor"],
      "loadout": "This model is equipped with: Predator autocannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 2 heavy bolters ◦ 2 lascannons",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter."
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Destructor",
            "description": "Each time this model makes a ranged attack that targets an Infantry unit, improve the Armour Penetration characteristic of that attack by 1."
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
          "name": "Predator Destructor"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy bolter",
              "keywords": ["sustained hits 1"],
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
              "keywords": ["rapid fire 2"],
              "range": "48\"",
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Predator Destructor"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "ea8e3c66-c1e3-5d1c-b8a6-e903fc9d9719",
      "name": "Primaris Ancient",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Hellblaster Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad ■ Desolation Squad You can attach this model to one of the above units even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Primaris Ancient"],
      "loadout": "This model is equipped with: bolt pistol; bolt rifle; close combat weapon.",
      "wargear": [
        "This model’s bolt rifle and close combat weapon can be replaced with 1 power weapon."
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Astartes Banner",
            "description": "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit."
          },
          {
            "name": "Unbreakable Duty",
            "description": "While this model is within range of an objective marker and/or within 6\" of the centre of the battlefield, this model has the Feel No Pain 4+ ability."
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
          "name": "Primaris Ancient"
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
              "name": "Bolt rifle",
              "keywords": ["assault", "heavy"],
              "range": "24\"",
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
              "attacks": "5",
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
              "name": "Power weapon",
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
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Primaris Ancient"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "2162d470-0f65-5dbd-8ce1-8daab106ecfd",
      "name": "Primaris Apothecary",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Desolation Squad ■ Hellblaster Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad You can attach this model to one of the above units even if one Captain, Chapter Master or Lieutenant model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Primaris Apothecary"],
      "loadout": "This model is equipped with: absolvor bolt pistol; reductor pistol; close combat weapon.",
      "wargear": ["None"],
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Narthecium",
            "description": "While this model is leading a unit, in your Command phase, you can return 1 destroyed model (excluding Character models) to that unit."
          },
          {
            "name": "Gene-seed Recovery",
            "description": "When this model’s Bodyguard unit is destroyed, roll one D6: on a 2+, you gain 1CP."
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
          "name": "Primaris Apothecary"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Absolvor bolt pistol",
              "keywords": ["pistol"],
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
              "name": "Reductor pistol",
              "keywords": ["pistol"],
              "range": "3\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Primaris Apothecary"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "16f27cd6-dea9-5e95-89be-c86367865115",
      "name": "Primaris Captain",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Bladeguard Veteran Squad* ■ Hellblaster Squad* ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad *  This model cannot be attached to a Bladeguard Veteran Squad unless it is equipped with a relic shield, and cannot be attached to a Hellblaster Squad unless it is equipped with a plasma pistol.",
      "composition": ["1 Primaris Captain"],
      "loadout": "This model is equipped with: bolt pistol; master-crafted bolt rifle; close combat weapon.",
      "wargear": [
        "This model’s bolt pistol, master-crafted bolt rifle and close combat weapon can be replaced with one of the following: ◦ 1 plasma pistol and 1 power fist ◦  1 heavy bolt pistol, 1 master-crafted power weapon and 1 relic shield",
        "This model’s close combat weapon can be replaced with one of the following: ◦ 1 master-crafted power weapon ◦ 1 power fist"
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
            "name": "Relic Shield",
            "description": "The bearer has a Wounds characteristic of 6."
          }
        ],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Rites of Battle",
            "description": "Once per battle round, one unit from your army with this ability can be targeted by a Stratagem for 0CP, even if another unit from your army has already been targeted by that Stratagem this phase."
          },
          {
            "name": "Finest Hour",
            "description": "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of melee weapons equipped by this model and those weapons have the [DEVASTATING WOUNDS] ability."
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
          "name": "Primaris Captain"
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
        },
        {
          "profiles": [
            {
              "name": "Heavy bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
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
              "name": "Master-crafted bolt rifle",
              "keywords": [],
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Master-crafted power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
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
              "attacks": "5",
              "skill": "2+",
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "Primaris",
        "Captain"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "2bc45778-d185-5f3d-85e8-22dcb6c9e0d7",
      "name": "Primaris Chaplain",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Bladeguard Veteran Squad ■ Hellblaster Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Primaris Chaplain"],
      "loadout": "This model is equipped with: absolvor bolt pistol; crozius arcanum.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Litany of Hate",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll."
          },
          {
            "name": "Spiritual Leader",
            "description": "Once per battle, at the start of any phase, you can select one friendly Adeptus Astartes unit that is Battle-shocked and within 12\" of this model. That unit is no longer Battle-shocked."
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
          "ld": "5+",
          "oc": "1",
          "name": "Primaris Chaplain"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Absolvor bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
              "attacks": "1",
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
              "name": "Crozius arcanum",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "Primaris Chaplain"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "d8a18490-faa0-56d6-a47a-e3a439e805b4",
      "name": "Primaris Company Champion",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Bladeguard Veteran Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Primaris Company Champion"],
      "loadout": "This model is equipped with: bolt pistol; master-crafted power weapon.",
      "wargear": ["None"],
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Honour or Death",
            "description": "While this model is leading a unit, add 1 to Advance and Charge rolls made for that unit and you can target that unit with the Heroic Intervention Stratagem for 0CP, even if you have already used that Stratagem on a different unit this phase."
          },
          {
            "name": "Martial Superiority",
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
          "name": "Primaris Company Champion"
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
              "name": "Master-crafted power weapon",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "5",
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "Primaris Company Champion"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "c8191307-5675-5725-a8d5-2f8435370f9d",
      "name": "Primaris Librarian",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Desolation Squad ■ Hellblaster Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Primaris Librarian"],
      "loadout": "This model is equipped with: bolt pistol; Smite; force weapon.",
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
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Psychic Hood",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks."
          },
          {
            "name": "Mental Fortress (Psychic)",
            "description": "While this model is leading a unit, models in that unit have a 4+ invulnerable save."
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
          "name": "Primaris Librarian"
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
              "name": "Smite – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "D3"
            },
            {
              "name": "Smite – focused witchfire",
              "keywords": ["devastating wounds", "hazardous", "psychic"],
              "range": "24\"",
              "attacks": "D6",
              "skill": "3+",
              "strength": "6",
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
              "name": "Force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "6",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Psyker",
        "Imperium",
        "Tacticus",
        "Primaris Librarian"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "f0933f21-2018-5243-b5b8-3f1b46be1b90",
      "name": "Primaris Lieutenant",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Bladeguard Veteran Squad ■ Hellblaster Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad You can attach this model to one of the above units even if one Captain or Chapter Master model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Primaris Lieutenant"],
      "loadout": "This model is equipped with: bolt pistol; master-crafted bolt rifle; close combat weapon.",
      "wargear": [
        "This model’s master-crafted bolt rifle can be replaced with one of the following: ◦ 1 plasma pistol ◦ 1 master-crafted power weapon ◦ 1 power fist",
        "This model’s bolt pistol, master-crafted bolt rifle and close combat weapon can be replaced with 1 neo-volkite pistol, 1 master-crafted power weapon and 1 storm shield.",
        "This model’s bolt pistol can be replaced with 1 heavy bolt pistol.",
        "This model’s close combat weapon can be replaced with one of the following: ◦ 1 master-crafted power weapon ◦ 1 power fist"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "75"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Tactical Precision",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability."
          },
          {
            "name": "Target Priority",
            "description": "This model’s unit is eligible to shoot and declare a charge in a turn in which it Fell Back."
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
          "name": "Primaris Lieutenant"
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
        },
        {
          "profiles": [
            {
              "name": "Heavy bolt pistol",
              "keywords": ["pistol"],
              "range": "18\"",
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
              "name": "Master-crafted bolt rifle",
              "keywords": [],
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
              "name": "Neo-volkite pistol",
              "keywords": ["devastating wounds", "pistol"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "5",
              "ap": "0",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Master-crafted power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "5",
              "ap": "-2",
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
              "attacks": "4",
              "skill": "2+",
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "Primaris Lieutenant"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "040aad89-8de4-5c5d-aea9-132cbfa465d3",
      "name": "Primaris Techmarine",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Astartes Servitors ■ Intercessor Squad",
      "composition": ["1 Primaris Techmarine"],
      "loadout": "This model is equipped with: forge bolter; grav-pistol; Omnissian power axe; servo-arm.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Techmarine",
            "description": "While this model is within 3\" of one or more friendly Adeptus Astartes Vehicle units, this model has the Lone Operative ability."
          },
          {
            "name": "Blessing of the Omnissiah",
            "description": "In your Command phase, you can select one friendly Adeptus Astartes Vehicle model within 3\" of this model. That model regains up to D3 lost wounds and, until the start of your next Command phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn."
          },
          {
            "name": "Vengeance of the Omnissiah",
            "description": "If a friendly Adeptus Astartes Vehicle model is destroyed within 12\" of this model, until the end of the battle, this model’s Omnissian power axe has an Attacks characteristic of 7."
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
          "ld": "6+",
          "oc": "1",
          "name": "Primaris Techmarine"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Forge bolter",
              "keywords": [],
              "range": "24\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Omnissian power axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Servo-arm",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Grenades",
        "Imperium",
        "Tacticus",
        "Primaris Techmarine"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "270018ea-69b6-553f-976f-7dff195a88bf",
      "name": "Razorback",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Razorback"],
      "loadout": "This model is equipped with: twin heavy bolter; armoured tracks.",
      "wargear": [
        "This model’s twin heavy bolter can be replaced with one of the following: ◦ 1 twin lascannon ◦ 1 twin assault cannon",
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter."
      ],
      "transport": "This model has a transport capacity of 6 Adeptus Astartes Infantry models. It cannot transport Jump Pack, Wulfen, Tacticus, Phobos, Gravis, Centurion or Terminator models.",
      "points": [
        {
          "models": "1",
          "cost": "100"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Fire Support",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit it scored one or more hits against this phase. Until the end of the phase, each time a friendly model that disembarked from this Transport this turn makes an attack that targets that enemy unit, you can re-roll the Wound roll."
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
          "name": "Razorback"
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
        },
        {
          "profiles": [
            {
              "name": "Twin assault cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "6",
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
        "Transport",
        "Dedicated Transport",
        "Imperium",
        "Razorback"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "223464ee-1634-52c5-9a15-70389d6d6fd5",
      "name": "Redemptor Dreadnought",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Redemptor Dreadnought"],
      "loadout": "This model is equipped with: twin fragstorm grenade launcher; heavy flamer; heavy onslaught gatling cannon; Redemptor fist.",
      "wargear": [
        "This model can be equipped with 1 Icarus rocket pod.",
        "This model’s heavy flamer can be replaced with 1 onslaught gatling cannon.",
        "This model’s heavy onslaught gatling cannon can be replaced with 1 macro plasma incinerator.",
        "This model’s twin fragstorm grenade launcher can be replaced with 1 twin storm bolter."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "225"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Duty Eternal",
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
          "name": "Redemptor Dreadnought"
        }
      ],
      "rangedWeapons": [
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
              "name": "Heavy onslaught gatling cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "12",
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
              "name": "Icarus rocket pod",
              "keywords": ["anti-fly 2+"],
              "range": "24\"",
              "attacks": "D3",
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
              "name": "Macro plasma incinerator – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            },
            {
              "name": "Macro plasma incinerator – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "9",
              "ap": "-4",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Onslaught gatling cannon",
              "keywords": ["devastating wounds"],
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
              "name": "Twin fragstorm grenade launcher",
              "keywords": ["blast", "twin-linked"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Twin storm bolter",
              "keywords": ["rapid fire 2", "twin-linked"],
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
              "name": "Redemptor fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Walker", "Imperium", "Redemptor Dreadnought"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "c55fc645-90a7-5857-ab8c-8a1bd3d27e22",
      "name": "Reiver Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Reiver Sergeant", "4-9 Reivers"],
      "loadout": "Every model is equipped with: special issue bolt pistol; combat knife.",
      "wargear": [
        "All models in this unit can each have their combat knife replaced with 1 bolt carbine.",
        "If the Reiver Sergeant is equipped with 1 bolt carbine, it can be equipped with 1 combat knife.",
        "All models in this unit can each be equipped with 1 Reiver grav-chute.",
        "All models in this unit can each be equipped with 1 grapnel launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "95"
        },
        {
          "models": "10",
          "cost": "190"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Grapnel Launcher",
            "description": "Each time the bearer’s unit makes a Normal, Advance, Fall Back or Charge move, ignore any vertical distance when determining the total distance the bearer can be moved during that move."
          },
          {
            "name": "Reiver Grav-chute",
            "description": "The bearer has the Deep Strike ability."
          }
        ],
        "core": ["Scouts 6\""],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Fearsome Assault",
            "description": "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test."
          },
          {
            "name": "Terror Troops (Aura)",
            "description": "While an enemy unit is within 6\" of this unit, each time that unit takes a Battle-shock or Leadership test, subtract 1 from that test."
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
          "oc": "1",
          "name": "Reiver Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bolt carbine",
              "keywords": ["precision"],
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
              "name": "Special issue bolt pistol",
              "keywords": ["pistol", "precision"],
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
              "attacks": "3",
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
              "name": "Combat knife",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
        "Smoke",
        "Imperium",
        "Phobos",
        "Reiver Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Captain In Phobos Armour",
        "Librarian In Phobos Armour",
        "Lieutenant In Phobos Armour",
        "Lieutenant In Reiver Armour"
      ]
    },
    {
      "id": "acb98ef8-9f18-5c4e-846a-9d915ed4a8d9",
      "name": "Relic Terminator Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Relic Terminator Sergeant", "4-9 Relic Terminators"],
      "loadout": "Every model is equipped with: combi-bolter; power fist.",
      "wargear": [
        "The Relic Terminator Sergeant’s combi-bolter can be replaced with one of the following: ◦ 1 plasma blaster ◦ 1 volkite charger",
        "For every 5 models in this unit, 1 Relic Terminator’s combi-bolter can be replaced with one of the following: ◦ 1 heavy flamer ◦ 1 reaper autocannon",
        "For every 5 models in this unit, 1 model can be equipped with 1 grenade harness.",
        "Any number of models can each have their power fist replaced with 1 power weapon.",
        "Any number of models can each have their power fist replaced with one 1 chainfist.",
        "Any number of models can each have their combi-bolter and power fist replaced with 1 twin lightning claws."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "200"
        },
        {
          "models": "10",
          "cost": "400"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Grenade Harness",
            "description": "The bearer has the Grenades keyword."
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Fury of the First",
            "description": "Each time a model in this unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill or Weapon Skill characteristic and/or to the Hit roll. In addition, each time a model in this unit makes an attack that targets the enemy unit you selected for the Oath of Moment ability this turn, add 1 to the Hit roll."
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
          "name": "Relic Terminator Squad"
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
              "name": "Plasma blaster – standard",
              "keywords": [],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma blaster – supercharge",
              "keywords": ["hazardous"],
              "range": "18\"",
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
              "name": "Volkite charger",
              "keywords": ["devastating wounds"],
              "range": "18\"",
              "attacks": "2",
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
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
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
        "Imperium",
        "Terminator",
        "Relic Terminator Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Ancient In Terminator Armour",
        "Captain In Terminator Armour",
        "Chaplain In Terminator Armour",
        "Darnath Lysander",
        "Librarian In Terminator Armour"
      ]
    },
    {
      "id": "5ae6c5e7-c11c-54a7-8232-22219c6e66df",
      "name": "Repulsor",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Repulsor"],
      "loadout": "This model is equipped with: heavy onslaught gatling cannon; hunter-slayer missile; Repulsor defensive array; twin heavy bolter; armoured hull.",
      "wargear": [
        "This model’s twin heavy bolter can be replaced with 1 twin lascannon.",
        "This model’s heavy onslaught gatling cannon can be replaced with 1 las-talon."
      ],
      "transport": "This model has a transport capacity of 12 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "195"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Emergency Combat Embarkation",
            "description": "Once per turn, in your opponent’s Charge phase, after an enemy unit has selected targets for its charge but before it makes a Charge move, you can select one Adeptus Astartes unit from your army that was selected as a target of that charge. Provided that unit is not within Engagement Range of any enemy units and every model in that unit is within 3\" of this Transport, it can embark within this Transport. The charging unit can then select new targets for its charge."
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
          "sv": "3+",
          "w": "16",
          "ld": "6+",
          "oc": "5",
          "name": "Repulsor"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy onslaught gatling cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "12",
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
              "name": "Hunter-slayer missile",
              "keywords": ["indirect fire", "one shot"],
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
              "name": "Las-talon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Repulsor defensive array",
              "keywords": [],
              "range": "24\"",
              "attacks": "18",
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
      "keywords": ["Vehicle", "Smoke", "Transport", "Imperium", "Repulsor"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "40ee135b-a29f-5683-a9be-d618abe9dbd5",
      "name": "Repulsor Executioner",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Repulsor Executioner"],
      "loadout": "This model is equipped with: heavy onslaught gatling cannon; macro plasma incinerator; Repulsor Executioner defensive array; twin heavy bolter; twin Icarus ironhail heavy stubber; armoured hull.",
      "wargear": [
        "This model’s macro plasma incinerator can be replaced with 1 heavy laser destroyer.",
        "This model can be equipped with 1 ironhail heavy stubber.",
        "This model can be equipped with 1 Icarus rocket pod."
      ],
      "transport": "This model has a transport capacity of 6 Adeptus Astartes Infantry models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "230"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Executioner",
            "description": "Each time this model makes an attack that targets a unit that is Below Half-strength, add 1 to the Hit roll."
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
          "sv": "3+",
          "w": "16",
          "ld": "6+",
          "oc": "5",
          "name": "Repulsor Executioner"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy laser destroyer",
              "keywords": ["heavy"],
              "range": "72\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+4"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Heavy onslaught gatling cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "12",
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
              "name": "Icarus rocket pod",
              "keywords": ["anti-fly 2+"],
              "range": "24\"",
              "attacks": "D3",
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
              "name": "Ironhail heavy stubber",
              "keywords": ["rapid fire 3"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Macro plasma incinerator – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "8",
              "ap": "-3",
              "damage": "2"
            },
            {
              "name": "Macro plasma incinerator – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "9",
              "ap": "-4",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Repulsor Executioner defensive array",
              "keywords": [],
              "range": "24\"",
              "attacks": "10",
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
              "name": "Twin Icarus ironhail heavy stubber",
              "keywords": ["anti-fly 4+", "rapid fire 3", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
        "Smoke",
        "Transport",
        "Imperium",
        "Repulsor Executioner"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "37ad9afa-0732-530e-ac40-a91802dcc98a",
      "name": "Rhino",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Rhino"],
      "loadout": "This model is equipped with: storm bolter; armoured tracks.",
      "wargear": ["This model can be equipped with 1 hunter-killer missile."],
      "transport": "This model has a transport capacity of 12 Adeptus Astartes Infantry models. It cannot transport Jump Pack, Wulfen, Tacticus, Phobos, Gravis, Centurion or Terminator models.",
      "points": [
        {
          "models": "1",
          "cost": "85"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 2"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Self Repair",
            "description": "At the end of your Command phase, this model regains 1 lost wound."
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
          "name": "Rhino"
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
        "Smoke",
        "Transport",
        "Dedicated Transport",
        "Imperium",
        "Rhino"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "278c55e7-acf2-5924-a017-dc9e4933deb2",
      "name": "Roboute Guilliman",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Roboute Guilliman – Epic Hero"],
      "loadout": "This model is equipped with: Hand of Dominion; Emperor’s Sword.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "355"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [
          {
            "name": "AUTHOR OF THE CODEX",
            "abilities": [
              {
                "name": "Primarch of the XIII (Aura)",
                "description": "While a friendly Adeptus Astartes unit is within 6\" of this model, add 1 to the Objective Control characteristic of models in that unit and you can re-roll Battle-shock and Leadership tests taken for that unit."
              },
              {
                "name": "Master of Battle",
                "description": "After you have selected an enemy unit using the Oath of Moment ability, select a second enemy unit. Until the start of your next Command phase, if the first unit selected has been destroyed, each time a friendly Adeptus Astartes model makes an attack that targets that second enemy unit, you can re-roll the Hit roll and you can re-roll the Wound roll."
              },
              {
                "name": "Supreme Strategist",
                "description": "Once per turn, you can target one friendly Adeptus Astartes unit within 12\" of this model with a Stratagem for 0CP, and can do so even if another unit from your army has already been targeted with that Stratagem this phase."
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
            "name": "Author of the Codex",
            "description": "In your Command phase, select one Author of the Codex ability (see left). Until the start of your next Command phase, this model has that ability."
          },
          {
            "name": "Ultramarines Bodyguard",
            "description": "While this model is within 3\" of one or more friendly Adeptus Astartes Infantry units, this model has the Lone Operative ability."
          },
          {
            "name": "Armour of Fate",
            "description": "The first time this model is destroyed, roll one D6 at the end of the phase: on a 3+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy models, with 6 wounds remaining."
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
          "m": "8\"",
          "t": "9",
          "sv": "2+",
          "w": "10",
          "ld": "5+",
          "oc": "4",
          "name": "Roboute Guilliman"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Hand of Dominion",
              "keywords": ["rapid fire 2"],
              "range": "30\"",
              "attacks": "2",
              "skill": "2+",
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
              "name": "Emperor’s Sword",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "14",
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
              "name": "Hand of Dominion",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "7",
              "skill": "2+",
              "strength": "14",
              "ap": "-4",
              "damage": "4"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Epic Hero",
        "Imperium",
        "Primarch",
        "Roboute Guilliman"
      ],
      "factions": ["Adeptus Astartes", "Ultramarines"]
    },
    {
      "id": "66ea84c4-25ed-5471-b8cd-55d9dec1ccff",
      "name": "Scout Bike Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Scout Biker Sergeant", "2-5 Scout Bikers"],
      "loadout": "Every model is equipped with: Astartes shotgun; bolt pistol; twin boltgun; combat knife.",
      "wargear": [
        "The Scout Biker Sergeant’s bolt pistol can be replaced with one of the following: ◦ 1 Astartes chainsword ◦ 1 boltgun* ◦ 1 combi-weapon* ◦ 1 hand flamer* ◦ 1 grav-pistol* ◦ 1 inferno pistol ◦ 1 plasma pistol ◦ 1 storm bolter* ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer",
        "Any number of models can each have their twin boltgun replaced with 1 Astartes grenade launcher. *  The profile for this weapon can be found on the Adeptus Astartes Armoury card."
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
        "core": ["Scouts 9\""],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Outflank",
            "description": "When this unit arrives from Strategic Reserves, it can be set up within your opponent’s deployment zone (all other restrictions still apply)."
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
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Scout Bike Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Astartes grenade launcher – frag",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Astartes grenade launcher – krak",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
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
              "name": "Astartes shotgun",
              "keywords": ["assault"],
              "range": "18\"",
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
        },
        {
          "profiles": [
            {
              "name": "Twin boltgun",
              "keywords": ["twin-linked"],
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Combat knife",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
        },
        {
          "profiles": [
            {
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Grenades",
        "Smoke",
        "Imperium",
        "Scout Bike Squad"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "e60cabb9-2491-5234-b190-b340bdb1e109",
      "name": "Scout Sniper Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Scout Sniper Sergeant", "4-9 Scout Snipers"],
      "loadout": "Every model is equipped with: bolt pistol; sniper rifle; close combat weapon.",
      "wargear": [
        "1 Scout Sniper’s scout sniper rifle can be replaced with 1 missile launcher."
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
        "core": ["Infiltrators", "Stealth"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Concealed Positions",
            "description": "This unit can only be selected as the target of a ranged attack if the attacking model is within 12\"."
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
          "ld": "6+",
          "oc": "1",
          "name": "Scout Sniper Squad"
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
              "name": "Missile launcher – frag",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Missile launcher – krak",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Scout sniper rifle",
              "keywords": ["heavy", "precision"],
              "range": "36\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
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
        "Smoke",
        "Imperium",
        "Scout Sniper Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": ["Captain In Phobos Armour", "Sergeant Telion"]
    },
    {
      "id": "5c07fa81-89e6-54aa-acbc-3e4499579637",
      "name": "Scout Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Scout Sergeant", "4-9 Scouts"],
      "loadout": "Every model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": [
        "Any number of models can each have their boltgun replaced with one of the following: ◦ 1 Astartes shotgun ◦ 1 combat knife",
        "1 Scout’s boltgun can be replaced with one of the following: ◦ 1 heavy bolter ◦ 1 missile launcher",
        "The Scout Sergeant’s bolt pistol and boltgun can be replaced with two different weapons from the following list:** ◦ 1 Astartes chainsword ◦ 1 bolt pistol  ◦ 1 boltgun ◦ 1 combi-weapon* ◦ 1 grav-pistol* ◦ 1 hand flamer* ◦ 1 inferno pistol* ◦ 1 plasma pistol* ◦ 1 storm bolter* ◦ 1 power fist ◦ 1 power weapon ◦ 1 thunder hammer *  The profile for this weapon can be found on the Adeptus Astartes Armoury card. **  This model can only be equipped with two ranged weapons if one of them is a Pistol (and it can only have one Pistol)."
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
        "wargear": [],
        "core": ["Infiltrators", "Scouts 6\""],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Guerrilla Tactics",
            "description": "At the end of your opponent’s turn, if this unit is more than 6\" away from all enemy models, you can remove this unit from the battlefield and place it into Strategic Reserves."
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
          "ld": "6+",
          "oc": "1",
          "name": "Scout Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Astartes shotgun",
              "keywords": ["assault"],
              "range": "18\"",
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
              "name": "Boltgun",
              "keywords": [],
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
              "name": "Heavy bolter",
              "keywords": ["heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Missile launcher – frag",
              "keywords": ["blast", "heavy"],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Missile launcher – krak",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "9",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
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
              "name": "Combat knife",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
        },
        {
          "profiles": [
            {
              "name": "Power weapon",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Smoke", "Imperium", "Scout Squad"],
      "factions": ["Adeptus Astartes"],
      "ledBy": ["Captain In Phobos Armour", "Sergeant Telion"]
    },
    {
      "id": "50d536da-a4fc-5e03-a1ea-149d966905b3",
      "name": "Sergeant Chronus",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Sergeant Chronus – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Chronus’ servo-arm.",
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
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Tank Commander",
            "description": "While this model is commanding a Vehicle model (see reverse): ■  Ranged weapons equipped by that Vehicle model have a Ballistic Skill characteristic of 2+. ■   Each time that Vehicle model is selected to shoot, you can re-roll one Wound roll when resolving those attacks."
          },
          {
            "name": "Chronus",
            "description": "When this model disembarks from a Vehicle model it was commanding, it has the Lone Operative ability until the end of the battle."
          }
        ],
        "special": [
          {
            "name": "TANK COMMANDER",
            "description": "If your army includes one or more of the Vehicle models listed below, Sergeant Chronus must start the battle embarked within one of those models as if it were a Transport. Sergeant Chronus can only disembark from that Vehicle if it is destroyed. While embarked in this way, Sergeant Chronus is said to be commanding that Vehicle. ■ Hunter                        ■ Predator Annihilator ■ Land Raider                   ■ Predator Destructor ■ Land Raider Crusader          ■ Stalker ■ Land Raider Redeemer          ■ Vindicator ■ Whirlwind"
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
          "t": "4",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Sergeant Chronus"
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
              "name": "Chronus’ servo-arm",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
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
        "Sergeant Chronus"
      ],
      "factions": ["Adeptus Astartes", "Ultramarines"]
    },
    {
      "id": "9dfa42f3-d374-558a-bca2-808c2a2cbc1e",
      "name": "Sergeant Telion",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Scout Squad ■ Scout Sniper Squad",
      "composition": ["1 Sergeant Telion – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Quietus; combat knife.",
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
        "core": ["Infiltrators", "Leader", "Scouts 6\"", "Stealth"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Voice of Experience",
            "description": "While this model is leading a unit, improve the Objective Control characteristic of models in that unit by 1 and each time a model in that unit makes an attack, add 1 to the Hit roll."
          },
          {
            "name": "Guiding Hand",
            "description": "While this model is leading a unit, each time that unit is selected to shoot or fight, select one of the following abilities to apply to weapons equipped by models in that unit until the end of the phase: ■ [LETHAL HITS] ■ [PRECISION] ■ [SUSTAINED HITS 1]"
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
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Sergeant Telion"
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
        },
        {
          "profiles": [
            {
              "name": "Quietus",
              "keywords": ["precision"],
              "range": "36\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "4",
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
              "name": "Combat knife",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Epic Hero",
        "Imperium",
        "Sergeant Telion"
      ],
      "factions": ["Adeptus Astartes", "Ultramarines"]
    },
    {
      "id": "fd140c7e-4195-5892-b169-4d2426bc64ad",
      "name": "Stalker",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Stalker"],
      "loadout": "This model is equipped with: 2 Icarus stormcannons; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter."
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Skyfire Protocols",
            "description": "Each time you target this model with the Overwatch Stratagem just after an enemy unit that can Fly starts or ends a Normal, Advance or Fall Back move, when resolving that Stratagem, in addition to shooting that enemy unit, you can select up to three additional enemy units within 24\" of this model that can Fly; this model can also shoot at each of those units with its Icarus stormcannons (provided each one is an eligible target), but when doing so, an unmodified Hit roll of 6 is required to score a hit."
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
          "m": "9\"",
          "t": "11",
          "sv": "3+",
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Stalker"
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
              "name": "Icarus stormcannon",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "6",
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Stalker"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "3bf460b5-81a0-51c5-9bbb-4556fae29a26",
      "name": "Sternguard Veteran Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": [
        "1 Sternguard Veteran Sergeant",
        "4-9 Sternguard Veterans"
      ],
      "loadout": "Every model is equipped with: Sternguard bolt pistol; Sternguard bolt rifle; close combat weapon.",
      "wargear": [
        "Any number of models can each have their Sternguard bolt rifle replaced with 1 combi-weapon.",
        "For every 5 models in this unit, 1 Sternguard Veteran’s Sternguard bolt rifle can be replaced with 1 Sternguard heavy bolter."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "105"
        },
        {
          "models": "10",
          "cost": "210"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Bolter Drill",
            "description": "Once per battle, in your Shooting phase, after this unit has shot, if one or more enemy units were destroyed as a result of those attacks, this unit can shoot again."
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
          "oc": "1",
          "name": "Sternguard Veteran Squad"
        }
      ],
      "rangedWeapons": [
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
              "name": "Sternguard bolt pistol",
              "keywords": ["devastating wounds", "pistol"],
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
              "name": "Sternguard bolt rifle",
              "keywords": [
                "assault",
                "devastating wounds",
                "heavy",
                "rapid fire 1"
              ],
              "range": "24\"",
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
              "name": "Sternguard heavy bolter",
              "keywords": ["devastating wounds", "heavy", "sustained hits 1"],
              "range": "36\"",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
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
        "Tacticus",
        "Sternguard veteran Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Adrax Agatone",
        "Captain Sicarius",
        "Chaplain Cassius",
        "Chief Librarian Tigurius",
        "Judiciar",
        "Kor’sarro Khan",
        "Marneus Calgar",
        "Pedro Kantor",
        "Primaris Ancient",
        "Primaris Apothecary",
        "Primaris Captain",
        "Primaris Chaplain",
        "Primaris Company Champion",
        "Primaris Librarian",
        "Primaris Lieutenant",
        "Uriel Ventris"
      ]
    },
    {
      "id": "81c471c8-099f-5435-bfd9-44da6d7de4c1",
      "name": "Storm Speeder Hailstrike",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Storm Speeder Hailstrike"],
      "loadout": "This model is equipped with: 2 fragstorm grenade launchers; onslaught gatling cannon; twin ironhail heavy stubber; close combat weapon.",
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
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Hailstrike",
            "description": "Each time this model has shot, select one enemy unit that was hit by one or more attacks made by this model this phase. Until the end of the phase, each time a friendly Adeptus Astartes unit makes a ranged attack that targets that enemy unit, improve the Armour Penetration characteristic of that attack by 1. The same enemy unit can only be affected by this ability once per phase."
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
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Storm Speeder Hailstrike"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Fragstorm grenade launcher",
              "keywords": ["blast"],
              "range": "18\"",
              "attacks": "D6",
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
              "name": "Onslaught gatling cannon",
              "keywords": ["devastating wounds"],
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
              "name": "Twin ironhail heavy stubber",
              "keywords": ["rapid fire 3", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Imperium", "Storm Speeder Hailstrike"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "79cdae87-5d70-5367-b24c-df606b276834",
      "name": "Storm Speeder Hammerstrike",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Storm Speeder Hammerstrike"],
      "loadout": "This model is equipped with: Hammerstrike missile launcher; 2 krakstorm grenade launchers; melta destroyer; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Hammerstrike",
            "description": "Each time this model has shot, select one enemy unit that was hit by one or more attacks made by this model this phase. Until the end of the phase, that enemy unit cannot have the Benefit of Cover."
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
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Storm Speeder Hammerstrike"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Hammerstrike missile launcher",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Krakstorm grenade launcher",
              "keywords": [],
              "range": "18\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "9",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Melta destroyer",
              "keywords": ["melta 2"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Imperium", "Storm Speeder Hammerstrike"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "ab2e1798-e58f-5c0d-a48a-247520d288d6",
      "name": "Storm Speeder Thunderstrike",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Storm Speeder Thunderstrike"],
      "loadout": "This model is equipped with: stormfury missiles; Thunderstrike las-talon; twin Icarus rocket pod; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "160"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Thunderstrike",
            "description": "Each time this model has shot, select one enemy Monster or Vehicle unit that was hit by one or more attacks made by this model this phase. Until the end of the phase, each time a friendly Adeptus Astartes unit makes a ranged attack that targets that enemy unit, add 1 to the Wound roll."
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
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Storm Speeder Thunderstrike"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Stormfury missiles",
              "keywords": [],
              "range": "48\"",
              "attacks": "1",
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
              "name": "Thunderstrike las-talon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "2+",
              "strength": "9",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin Icarus rocket pod",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "24\"",
              "attacks": "D3",
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
              "attacks": "4",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Vehicle", "Fly", "Imperium", "Storm Speeder Thunderstrike"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "3c3fb08c-0ecf-57c3-bcaf-dfc9ea67b744",
      "name": "Stormhawk Interceptor",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Stormhawk Interceptor"],
      "loadout": "This model is equipped with: twin assault cannon; skyhammer missile launcher; las-talon; armoured hull.",
      "wargear": [
        "This model’s skyhammer missile launcher can be replaced with one of the following: ◦ 1 twin heavy bolter ◦ 1 typhoon missile launcher",
        "This model’s las-talon can be replaced with 1 Icarus stormcannon."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "165"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
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
          "range": "",
          "description": ""
        }
      },
      "stats": [
        {
          "m": "20+\"",
          "t": "9",
          "sv": "3+",
          "w": "10",
          "ld": "6+",
          "oc": "0",
          "name": "Stormhawk Interceptor"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Icarus stormcannon",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "48\"",
              "attacks": "6",
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
              "name": "Las-talon",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Skyhammer missile launcher",
              "keywords": ["anti-fly 2+"],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin assault cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Typhoon missile launcher – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Typhoon missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
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
        "Fly",
        "Aircraft",
        "Imperium",
        "Smoke",
        "Stormhawk Interceptor"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "d3f766f6-109b-5002-bc61-d042afef6b75",
      "name": "Stormraven Gunship",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Stormraven Gunship"],
      "loadout": "This model is equipped with: 2 stormstrike missile launchers; twin assault cannon; typhoon missile launcher; armoured hull.",
      "wargear": [
        "This model’s twin assault cannon can be replaced with one of the following: ◦ 1 twin heavy plasma cannon ◦ 1 twin lascannon",
        "This model’s typhoon missile launcher can be replaced with one of the following: ◦ 1 twin heavy bolter ◦ 1 twin multi-melta",
        "This model can be equipped with 2 hurricane bolters."
      ],
      "transport": "This model has a transport capacity of 12 Adeptus Astartes Infantry models and 1 Dreadnought model. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models and each Centurion model takes up the space of 3 models.",
      "points": [
        {
          "models": "1",
          "cost": "255"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Hover"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Armoured Resilience",
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
          "m": "20+\"",
          "t": "10",
          "sv": "3+",
          "w": "14",
          "ld": "6+",
          "oc": "0",
          "name": "Stormraven Gunship"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Hurricane bolter",
              "keywords": ["rapid fire 6", "twin-linked"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Stormstrike missile launcher",
              "keywords": [],
              "range": "48\"",
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
              "name": "Twin assault cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Twin heavy plasma cannon – standard",
              "keywords": ["blast", "twin-linked"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Twin heavy plasma cannon – supercharge",
              "keywords": ["blast", "hazardous", "twin-linked"],
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
        },
        {
          "profiles": [
            {
              "name": "Twin multi-melta",
              "keywords": ["melta 2", "twin-linked"],
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
              "name": "Typhoon missile launcher – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Typhoon missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
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
        "Fly",
        "Aircraft",
        "Transport",
        "Imperium",
        "Stormraven Gunship"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "76354f4a-b1a5-58d7-a0df-1066c75926e5",
      "name": "Stormtalon Gunship",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Stormtalon Gunship"],
      "loadout": "This model is equipped with: skyhammer missile launcher; twin assault cannon; armoured hull.",
      "wargear": [
        "This model’s skyhammer missile launcher can be replaced with one of the following: ◦ 1 twin heavy bolter ◦ 1 twin lascannon ◦ 1 typhoon missile launcher"
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
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Strafing Run",
            "description": "Each time this model makes a ranged attack that targets a unit that cannot Fly, add 1 to the Hit roll."
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
          "w": "10",
          "ld": "6+",
          "oc": "0",
          "name": "Stormtalon Gunship"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Skyhammer missile launcher",
              "keywords": ["anti-fly 2+", "twin-linked"],
              "range": "48\"",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin assault cannon",
              "keywords": ["devastating wounds", "twin-linked"],
              "range": "24\"",
              "attacks": "6",
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
        },
        {
          "profiles": [
            {
              "name": "Typhoon missile launcher – frag",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Typhoon missile launcher – krak",
              "keywords": [],
              "range": "48\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "9",
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
        "Fly",
        "Aircraft",
        "Imperium",
        "Stormtalon Gunship"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "3a1b4813-01ca-5a6b-83c2-dd4d1b327fa3",
      "name": "Suppressor Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Suppressor Sergeant", "2 Suppressors"],
      "loadout": "Every model is equipped with: accelerator autocannon; bolt pistol; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "95"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Suppression Fire",
            "description": "In your Shooting phase, after this unit has shot, select one enemy unit hit by one or more of those attacks made with an accelerator autocannon. Until the start of your next turn, while this unit is on the battlefield, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll."
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
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Suppressor Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Accelerator autocannon",
              "keywords": ["heavy"],
              "range": "48\"",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
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
        "Smoke",
        "Jump Pack",
        "Fly",
        "Imperium",
        "Suppressor Squad"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "a345ee5b-b2c6-530a-9baf-73a455aba51a",
      "name": "Tactical Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Tactical Sergeant", "9 Tactical Marines"],
      "loadout": "Every model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": [
        "1 Tactical Marine’s boltgun can be replaced with one of the following: ◦ 1 flamer ◦ 1 heavy bolter* ◦ 1 heavy flamer* ◦ 1 grav-cannon* ◦ 1 grav-gun ◦ 1 lascannon* ◦ 1 meltagun ◦ 1 missile launcher* ◦ 1 multi-melta* ◦ 1 plasma cannon* ◦ 1 plasma gun",
        "1 Tactical Marine’s boltgun can be replaced with  one of the following: ◦ 1 flamer ◦ 1 grav-gun ◦ 1 meltagun ◦ 1 plasma gun",
        "The Tactical Sergeant’s bolt pistol and boltgun can be replaced with 1 twin lightning claws, or two different weapons from the following list:** ◦ 1 Astartes chainsword ◦ 1 bolt pistol ◦ 1 boltgun ◦ 1 combi-weapon* ◦ 1 grav-pistol* ◦ 1 hand flamer* ◦ 1 inferno pistol* ◦ 1 plasma pistol* ◦ 1 storm bolter* ◦ 1 power fist ◦ 1 power weapon  ◦ 1 thunder hammer  *  The profile for this weapon can be found on the Adeptus Astartes Armoury card. **  This model can only be equipped with two ranged weapons if one of them is a Pistol (and it can only have one Pistol)."
      ],
      "transport": "",
      "points": [
        {
          "models": "10",
          "cost": "175"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Tactical Flexibility",
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
          "t": "4",
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "Tactical Squad"
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
              "name": "Boltgun",
              "keywords": [],
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
              "name": "Flamer",
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
              "name": "Grav-gun",
              "keywords": ["anti-vehicle 2+"],
              "range": "18\"",
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
              "name": "Meltagun",
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
              "name": "Plasma gun – standard",
              "keywords": ["rapid fire 1"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma gun – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "24\"",
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
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
        },
        {
          "profiles": [
            {
              "name": "Power weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-2",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "4",
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
        "Imperium",
        "Tactical Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Captain",
        "Captain Sicarius",
        "Chaplain",
        "Chaplain Cassius",
        "Librarian",
        "Lieutenant",
        "Pedro Kantor",
        "Techmarine",
        "Vulkan He’stan"
      ]
    },
    {
      "id": "d2001ab7-9e30-5321-aba6-0f865ab4e987",
      "name": "Techmarine",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Astartes Servitors ■ Tactical Squad",
      "composition": ["1 Techmarine"],
      "loadout": "This model is equipped with: bolt pistol; Omnissian power axe; servo-arm.",
      "wargear": [
        "This model’s bolt pistol can be replaced with one of the following: ◦ 1 boltgun ◦ 1 combi-weapon* ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol ◦ 1 storm bolter*",
        "This model’s Omnissian power axe can be replaced with one of the following: ◦ 1 Astartes chainsword ◦ 1 power fist ◦ 1 thunder hammer",
        "This model can be equipped with 1 flamer, 1 plasma cutter and 1 servo-arm. *  The profile for this weapon can be found on the Adeptus Astartes Armoury card."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "70"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Techmarine",
            "description": "While this model is within 3\" of one or more friendly Adeptus Astartes Vehicle units, this model has the Lone Operative ability."
          },
          {
            "name": "Blessing of the Omnissiah",
            "description": "In your Command phase, you can select one friendly Adeptus Astartes Vehicle model within 3” of this model. That model regains up to D3 lost wounds and, until the start of your next Command phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn."
          },
          {
            "name": "Vengeance of the Omnissiah",
            "description": "If a friendly Adeptus Astartes Vehicle model is destroyed within 12” of this model, until the end of the battle, this model’s Omnissian power axe has an Attacks characteristic of 7."
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
          "ld": "6+",
          "oc": "1",
          "name": "Techmarine"
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
        },
        {
          "profiles": [
            {
              "name": "Boltgun",
              "keywords": [],
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
              "name": "Flamer",
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Astartes chainsword",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Omnissian power axe",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Plasma cutter",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Servo-arm",
              "keywords": ["extra attacks"],
              "range": "Melee",
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
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
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
        "Grenades",
        "Imperium",
        "Techmarine"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "f995c048-454a-5054-82bf-d3eca07582d6",
      "name": "Terminator Assault Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": [
        "1 Assault Terminator Sergeant",
        "4-9 Assault Terminators"
      ],
      "loadout": "Every model is equipped with: thunder hammer; storm shield.",
      "wargear": [
        "Any number of models can each have their thunder hammer and storm shield replaced with 1 twin lightning claws."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "200"
        },
        {
          "models": "10",
          "cost": "400"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a Wounds characteristic of 4."
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Teleport Homer",
            "description": "At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent’s deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3\" horizontally of that token and not within 9\" horizontally of any enemy models. That token is then removed."
          },
          {
            "name": "Terminatus Assault",
            "description": "Each time this unit ends a Charge move, each enemy unit within Engagement Range of this unit must take a Battle-shock test."
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
          "name": "Terminator Assault Squad"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Thunder hammer",
              "keywords": ["devastating wounds"],
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
              "name": "Twin lightning claws",
              "keywords": ["twin-linked"],
              "range": "Melee",
              "attacks": "5",
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
        "Imperium",
        "Terminator",
        "Terminator Assault Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Ancient In Terminator Armour",
        "Captain In Terminator Armour",
        "Chaplain In Terminator Armour",
        "Darnath Lysander",
        "Librarian In Terminator Armour"
      ]
    },
    {
      "id": "8ca68d6d-5841-5437-aa03-5d0d660a010f",
      "name": "Terminator Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Terminator Sergeant", "4-9 Terminators"],
      "loadout": "The Terminator Sergeant is equipped with: storm bolter; power weapon. Every Terminator is equipped with: storm bolter; power fist.",
      "wargear": [
        "For every 5 models in this unit, 1 Terminator’s storm bolter can be replaced with one of the following: ◦ 1 assault cannon ◦ 1 heavy flamer ◦  1 cyclone missile launcher and 1 storm bolter.*",
        "Any number of models can each have their power fist replaced with 1 chainfist. *  This model’s storm bolter cannot be replaced."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "205"
        },
        {
          "models": "10",
          "cost": "410"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Teleport Homer",
            "description": "At the start of the battle, you can set up one Teleport Homer token for this unit anywhere on the battlefield that is not in your opponent’s deployment zone. If you do, once per battle, you can target this unit with the Rapid Ingress Stratagem for 0CP, but when resolving that Stratagem, you must set this unit up within 3\" horizontally of that token and not within 9\" horizontally of any enemy models. That token is then removed."
          },
          {
            "name": "Fury of the First",
            "description": "Each time a model in this unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill or Weapon Skill characteristic and/or to the Hit roll. In addition, each time a model in this unit makes an attack that targets the enemy unit you selected for the Oath of Moment ability this turn, add 1 to the Hit roll."
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
          "name": "Terminator Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Assault cannon",
              "keywords": ["devastating wounds"],
              "range": "24\"",
              "attacks": "6",
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
              "name": "Cyclone missile launcher – frag",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Cyclone missile launcher – krak",
              "keywords": [],
              "range": "36\"",
              "attacks": "2",
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
              "name": "Chainfist",
              "keywords": ["anti-vehicle 3+"],
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
              "name": "Power fist",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Power weapon",
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
      "keywords": ["Infantry", "Imperium", "Terminator", "Terminator Squad"],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Ancient In Terminator Armour",
        "Captain In Terminator Armour",
        "Chaplain In Terminator Armour",
        "Darnath Lysander",
        "Librarian In Terminator Armour"
      ]
    },
    {
      "id": "f1c2ad6f-a51e-5016-8928-28dc40b05961",
      "name": "Thunderfire Cannon",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Techmarine Gunner", "1 Thunderfire Cannon"],
      "loadout": "The Techmarine Gunner is equipped with: bolt pistol; flamer; plasma cutter; Gunner’s servo-arms; close combat weapon. The Thunderfire Cannon is equipped with: thunderfire cannon; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "2",
          "cost": "90"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Tremor Shells",
            "description": "In your Shooting phase, after this unit has shot, if an enemy Infantry unit was hit by one or more attacks made by this unit’s thunderfire cannon this phase, until the end of your opponent’s next turn, that enemy unit is shaken. While a unit is shaken, subtract 2 from that unit’s Move characteristic, and subtract 2 from Advance and Charge rolls made for that unit."
          },
          {
            "name": "Crewed Artillery",
            "description": "If one model in this unit is destroyed, the remaining model in this unit is also destroyed."
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
          "sv": "2+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Thunderfire Cannon"
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
        },
        {
          "profiles": [
            {
              "name": "Flamer",
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
              "name": "Thunderfire cannon",
              "keywords": ["blast", "indirect fire"],
              "range": "48\"",
              "attacks": "D6+4",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Gunner’s servo-arms",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Plasma cutter",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Artillery", "Vehicle", "Imperium", "Thunderfire Cannon"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "bff65e3c-701c-597b-a853-019a4f0bf33c",
      "name": "Thunderhawk Gunship",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Thunderhawk Gunship"],
      "loadout": "This model is equipped with: 2 lascannons; Thunderhawk heavy cannon; 4 twin heavy bolters; armoured hull; Thunderhawk cluster bombs. THUNDERHAWK This model has a transport capacity of 30 Adeptus Astartes Infantry or Adeptus Astartes Mounted models. Each Jump Pack, Wulfen, Gravis or Terminator model takes up the space of 2 models. Each Centurion model takes up the space of 3 models. Each Mounted model takes up the space of 4 models.",
      "wargear": [
        "This model’s Thunderhawk heavy cannon can be replaced with 1 turbo-laser destructor.",
        "This model’s Thunderhawk cluster bombs can be replaced with 1 hellstrike missile battery."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "840"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Thunderhawk Cluster Bombs",
            "description": "Each time the bearer ends a Normal move, you can select one enemy unit it moved over during that move and roll six D6: for each 3+, that unit suffers 1 mortal wound."
          }
        ],
        "core": ["Deadly Demise D6+2", "Hover"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Aerial Assault",
            "description": "Each time a unit with the Deep Strike ability disembarks from this model after it has made a Normal move, that unit is still eligible to declare a charge this turn."
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
          "t": "12",
          "sv": "2+",
          "w": "30",
          "ld": "6+",
          "oc": "0",
          "name": "Thunderhawk Gunship"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Hellstrike missile battery",
              "keywords": ["anti-fly 4+"],
              "range": "72\"",
              "attacks": "4",
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
              "name": "Thunderhawk heavy cannon",
              "keywords": ["blast"],
              "range": "48\"",
              "attacks": "D6+6",
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
              "name": "Turbo-laser destructor",
              "keywords": ["blast"],
              "range": "96\"",
              "attacks": "D3+1",
              "skill": "3+",
              "strength": "20",
              "ap": "-4",
              "damage": "D6+6"
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
        "Titanic",
        "Fly",
        "Aircraft",
        "Transport",
        "Imperium",
        "Thunderhawk Gunship"
      ],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "b066706e-e32b-5cae-9e48-2d158020b0d2",
      "name": "Tor Garadon",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Aggressor Squad ■ Eradicator Squad ■ Heavy Intercessor Squad",
      "composition": ["1 Tor Garadon – Epic Hero"],
      "loadout": "This model is equipped with: artificer grav-gun; Hand of Defiance.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Signum Array",
            "description": "While this model is leading a unit, ranged weapons equipped by models in that unit have the [LETHAL HITS] and [IGNORES COVER] abilities."
          },
          {
            "name": "Siege Captain",
            "description": "Each time this model makes an attack that targets a Monster, Vehicle, or Fortification unit, improve the Strength, Armour Penetration and Damage characteristics of that attack by 2."
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
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Tor Garadon"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Artificer grav-gun",
              "keywords": ["anti-vehicle 2+"],
              "range": "18\"",
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
              "name": "Hand of Defiance",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "12",
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
        "Imperium",
        "Gravis",
        "Captain",
        "Tor Garadon"
      ],
      "factions": ["Adeptus Astartes", "Imperial Fists"]
    },
    {
      "id": "f2c7620f-cfbb-5a3f-92e8-f25d72264657",
      "name": "Tyrannic War Veterans",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Veteran Sergeant", "4 Tyrannic War Veterans"],
      "loadout": "Every model is equipped with: bolt pistol; boltgun; close combat weapon.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "85"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Tyrannic War Veterans",
            "description": "Weapons equipped by models in this unit are have the [DEVASTATING WOUNDS] ability when targeting Tyranids units."
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
          "oc": "1",
          "name": "Tyrannic War Veterans"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bolt pistol",
              "keywords": ["anti-tyranids 4+", "pistol"],
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
              "name": "Boltgun",
              "keywords": ["anti-tyranids 4+"],
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
              "name": "Close combat weapon",
              "keywords": ["anti-tyranids 4+"],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Grenades", "Imperium", "Tyrannic War Veterans"],
      "factions": ["Adeptus Astartes", "Ultramarines"],
      "ledBy": ["Chaplain Cassius"]
    },
    {
      "id": "896d350b-6346-59b7-941d-7164cdb4cf36",
      "name": "Uriel Ventris",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Uriel Ventris – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Invictus; Sword of Idaeus.",
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
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Unorthodox Strategist",
            "description": "While this model is leading a unit, you can target that unit with a Stratagem even if that Stratagem has already been used on another unit from your army this phase. In addition, this model’s unit can still be selected as the target of a Stratagem while Battle-shocked."
          },
          {
            "name": "Master of the Fleet",
            "description": "During the Declare Battle Formations step, if your army includes this model, select one Adeptus Astartes Infantry unit from your army. That unit gains the Deep Strike ability."
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
          "name": "Uriel Ventris"
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
        },
        {
          "profiles": [
            {
              "name": "Invictus",
              "keywords": [],
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
              "name": "Sword of Idaeus",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "6",
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
        "Imperium",
        "Captain",
        "Uriel Ventris"
      ],
      "factions": ["Adeptus Astartes", "Ultramarines"]
    },
    {
      "id": "d818ad4a-fd8b-5b29-8416-c0d0ad2d759b",
      "name": "Vanguard Veteran Squad",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Vanguard Veteran Sergeant", "4-9 Vanguard Veterans"],
      "loadout": "Every model is equipped with: bolt pistol; heirloom weapon.",
      "wargear": [
        "Any number of models can each have their bolt pistol replaced one of the following: ◦ 1 storm shield ◦ 1 grav-pistol ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "120"
        },
        {
          "models": "10",
          "cost": "240"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": ["Scouts 6\""],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Vanguard Assault",
            "description": "Each time this unit ends a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [LETHAL HITS] ability."
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
          "oc": "1",
          "name": "Vanguard Veteran Squad"
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Heirloom weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        "Grenades",
        "Imperium",
        "Vanguard Veteran Squad"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Captain",
        "Captain Sicarius",
        "Chaplain",
        "Chaplain Cassius",
        "Librarian",
        "Lieutenant"
      ]
    },
    {
      "id": "901cb81c-702e-556f-a6d6-40cdf254795e",
      "name": "Vanguard Veteran Squad With Jump Packs",
      "faction_id": "SM",
      "leader": "",
      "composition": [
        "1 Vanguard Veteran Sergeant with Jump Pack",
        "4-9 Vanguard Veterans with Jump Packs"
      ],
      "loadout": "Every model is equipped with: bolt pistol; heirloom weapon.",
      "wargear": [
        "Any number of models can each have their bolt pistol replaced one of the following: ◦ 1 storm shield ◦ 1 grav-pistol ◦ 1 hand flamer ◦ 1 inferno pistol ◦ 1 plasma pistol"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "130"
        },
        {
          "models": "10",
          "cost": "260"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Storm Shield",
            "description": "The bearer has a 4+ invulnerable save."
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Vanguard Assault",
            "description": "Each time this unit ends a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [LETHAL HITS] ability."
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
          "sv": "3+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Vanguard Veteran Squad With Jump Packs"
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
              "name": "Grav-pistol",
              "keywords": ["anti-vehicle 2+", "pistol"],
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
              "name": "Hand flamer",
              "keywords": ["ignores cover", "pistol", "torrent"],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "3",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Inferno pistol",
              "keywords": ["melta 2", "pistol"],
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
              "name": "Heirloom weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        "Grenades",
        "Jump Pack",
        "Fly",
        "Imperium",
        "Vanguard Veteran Squad with Jump Packs"
      ],
      "factions": ["Adeptus Astartes"],
      "ledBy": [
        "Captain With Jump Pack",
        "Chaplain With Jump Pack",
        "Kayvaan Shrike",
        "Librarian With Jump Pack"
      ]
    },
    {
      "id": "d3292df5-bfd1-5e04-b335-5c87e717f411",
      "name": "Vindicator",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Vindicator"],
      "loadout": "This model is equipped with: demolisher cannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter."
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "205"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Siege Shield",
            "description": "When making ranged attacks with its demolisher cannon, this model can target enemy units within Engagement Range of it (provided no other friendly units are also within Engagement Range of that enemy unit). In addition, when making ranged attacks, this model does not suffer the penalty to its Hit rolls for being within Engagement Range of one or more enemy units."
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
          "m": "9\"",
          "t": "11",
          "sv": "2+",
          "w": "11",
          "ld": "6+",
          "oc": "3",
          "name": "Vindicator"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Demolisher cannon",
              "keywords": ["blast"],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "3+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Vindicator"],
      "factions": ["Adeptus Astartes"]
    },
    {
      "id": "45d31fd3-800c-5f73-9e81-4124e484e1b1",
      "name": "Vulkan He’stan",
      "faction_id": "SM",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Infernus Squad ■ Tactical Squad",
      "composition": ["1 Vulkan He’stan – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Gauntlet of the Forge; Spear of Vulkan.",
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
        "core": ["Feel No Pain 6+", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Forgefather",
            "description": "In your Shooting phase, select one enemy unit within 24\" of and visible to this model. Until the end of the phase, each time a friendly Adeptus Astartes model makes a ranged attack with a Torrent or Melta weapon that targets that enemy unit, you can re-roll the Wound roll."
          },
          {
            "name": "Seeker of Lost Relics",
            "description": "At the start of the battle, select one objective marker on the battlefield. While this model is within range of that objective marker, it has an Objective Control characteristic of 10, a Leadership characteristic of 5+ and the Feel No Pain 4+ ability."
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Vulkan He’stan"
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
        },
        {
          "profiles": [
            {
              "name": "Gauntlet of the Forge",
              "keywords": ["ignores cover", "torrent"],
              "range": "12\"",
              "attacks": "D6+3",
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
              "name": "Spear of Vulkan",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
        "Grenades",
        "Imperium",
        "Captain",
        "Vulkan He’stan"
      ],
      "factions": ["Adeptus Astartes", "Salamanders"]
    },
    {
      "id": "82cf4278-37e8-5c09-8c97-b795d77f3667",
      "name": "Whirlwind",
      "faction_id": "SM",
      "leader": "",
      "composition": ["1 Whirlwind"],
      "loadout": "This model is equipped with: Whirlwind vengeance launcher; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter."
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Pinning Bombardment",
            "description": "In your Shooting phase, after this model has shot, if one or more of those attacks made with its Whirlwind vengeance launcher scored a hit against an enemy Infantry unit, that unit must take a Battle-shock test."
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
          "name": "Whirlwind"
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
        },
        {
          "profiles": [
            {
              "name": "Whirlwind vengeance launcher",
              "keywords": ["blast", "indirect fire"],
              "range": "72\"",
              "attacks": "D6+3",
              "skill": "3+",
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
      "keywords": ["Vehicle", "Smoke", "Imperium", "Whirlwind"],
      "factions": ["Adeptus Astartes"]
    }
  ],
  "colours": {
    "banner": "#092135",
    "header": "#4b6262"
  }
}