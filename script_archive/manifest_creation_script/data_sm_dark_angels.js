window.data = window.data || {};
window.data.CHDA = {
  "id": "CHDA",
  "link": "https://game-datacards.eu",
  "name": "Dark Angels",
  "is_subfaction": false,
  "parent_id": "",
  "enhancements": [
    {
      "name": "Shroud of Heroes",
      "description": "Adeptus Astartes model only. The first time the bearer is destroyed, roll one D6 at the end of the phase. On a 2+, set the bearer back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with 3 wounds remaining (if the bearer was Battle-shocked when it was destroyed, it is instead returned with its full wounds remaining).",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "25"
    },
    {
      "name": "Stubborn Tenacity",
      "description": "Adeptus Astartes model only. While the bearer is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if the bearer’s unit is below its Starting Strength, and add 1 to the Wound roll as well if the bearer’s unit is Battle-shocked.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "15"
    },
    {
      "name": "Heavenfall Blade",
      "description": "Adeptus Astartes model only. Add 1 to the Attacks, Strength, and Damage characteristics of the bearer’s melee weapons. While the bearer is Battle-shocked, add 2 to the Attacks, Strength, and Damage characteristics of the bearer’s melee weapons instead.",
      "keywords": ["Adeptus Astartes"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "Pennant of Remembrance",
      "description": "Bladeguard Ancient, Primaris Ancient, or Terminator Ancient model only. While the bearer is leading a unit, models in that unit have the Feel No Pain 6+ ability. While that unit is Battle-shocked, models in that unit have the Feel No Pain 4+ ability instead.",
      "keywords": [
        "Bladeguard Ancient",
        "Primaris Ancient",
        "Terminator Ancient model"
      ],
      "excludes": [],
      "cost": "10"
    }
  ],
  "datasheets": [
    {
      "id": "73dea935-78f8-5af7-a400-04c431a64bd8",
      "name": "Asmodai",
      "faction_id": "CHDA",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Tactical Squad ■ Vanguard Veteran Squad",
      "composition": ["1 Asmodai – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Blades of Reason; crozius arcanum.",
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
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Exemplar of Hate",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, you can re-roll the Hit roll."
          },
          {
            "name": "Feared Interrogator",
            "description": "At the start of the Fight phase, each enemy Character unit within 6\" of this model must take a Battle-shock test, subtracting 1 from that test when they do. In addition, each time this model destroys an enemy Character model with a melee attack, you gain 1CP."
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
          "name": "Asmodai"
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
              "name": "Blades of Reason",
              "keywords": ["anti-character 2+", "extra attacks", "precision"],
              "range": "Melee",
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
        "Epic Hero",
        "Grenades",
        "Imperium",
        "Chaplain",
        "Asmodai"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "dba448cc-ea5e-5fd9-bd91-c795467fd1d2",
      "name": "Azrael",
      "faction_id": "CHDA",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Bladeguard Veteran Squad ■ Hellblaster Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Azrael – Epic Hero"],
      "loadout": "This model is equipped with: Lion’s Wrath; the Sword of Secrets; the Lion Helm.",
      "wargear": ["None"],
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
            "name": "The Lion Helm",
            "description": "Models in the bearer’s unit have a 4+ invulnerable save. In addition, once per battle, at any time, the bearer can summon a Watcher in the Dark. When it does, until the end of the phase, models in the bearer’s unit have the Feel No Pain 4+ ability against mortal wounds."
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
            "name": "Supreme Grand Master",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability."
          },
          {
            "name": "Masterful Tactician",
            "description": "At the start of your Command phase, if this model is on the battlefield, you gain 1CP."
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
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Azrael"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Lion’s Wrath",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "2",
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
              "name": "The Sword of Secrets",
              "keywords": ["devastating wounds"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "Chapter Master",
        "Azrael"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "b0e28fbd-1d1d-5c84-acc7-ee729e62fe99",
      "name": "Belial",
      "faction_id": "CHDA",
      "leader": "This model can be attached to the following units: ■ Deathwing Command Squad ■ Deathwing Knights ■ Deathwing Squad ■ Relic Terminator Squad ■ Terminator Assault Squad ■ Terminator Squad",
      "composition": ["1 Belial – Epic Hero"],
      "loadout": "This model is equipped with: master-crafted storm bolter; the Sword of Silence.",
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Grand Master of the Deathwing",
            "description": "While this model is leading a unit, each time a model in that unit makes an attack, if a Critical Hit is scored, that attack has the [PRECISION] ability."
          },
          {
            "name": "Strikes of Retribution",
            "description": "Each time a melee attack is allocated to this model, after the attacking model’s unit has finished making its attacks, roll one D6 (to a maximum of six D6 per"
          },
          {
            "name": "attacking unit)",
            "description": "for each 2+, the attacking unit suffers 1 mortal wound."
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
          "name": "Belial"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Master-crafted storm bolter",
              "keywords": ["precision", "rapid fire 2"],
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
              "name": "The Sword of Silence",
              "keywords": ["precision"],
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
        "Terminator",
        "Captain",
        "Belial"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "0a16e1a6-afee-5421-8445-d0eccde8d7d2",
      "name": "Deathwing Command Squad",
      "faction_id": "CHDA",
      "leader": "",
      "composition": [
        "1 Deathwing Ancient",
        "1 Deathwing Apothecary",
        "1 Deathwing Champion",
        "2-7 Deathwing Command Terminators"
      ],
      "loadout": "The Deathwing Ancient is equipped with: storm bolter; power fist. The Deathwing Apothecary is equipped with: storm bolter; chainfist. The Deathwing Champion is equipped with: halberd of Caliban. Every Deathwing Command Terminator is equipped with: storm bolter; power fist.",
      "wargear": [
        "Any number of Deathwing Command Terminators can each have their storm bolter and power fist replaced with one of the following: ◦ 1 twin lightning claws ◦ 1 thunder hammer and 1 storm shield",
        "Any number of Deathwing Command Terminators can each have their power fist replaced with 1 chainfist.",
        "For every 5 models in this unit, 1 Deathwing Command Terminator can replace its storm bolter with one of the following: ◦ 1 assault cannon ◦ 1 heavy flamer ◦ 1 plasma cannon ◦ 1 storm bolter and 1 cyclone missile launcher (this model’s storm bolter cannot be replaced)",
        "This unit can be equipped with 1 Watcher in the Dark.* * The rules for a Watcher in the Dark can be found on the Deathwing Knights datasheet."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "215"
        },
        {
          "models": "10",
          "cost": "430"
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
            "name": "Narthecium",
            "description": "While this unit contains an Apothecary, in your Command phase, you can return 1 destroyed model (excluding Character models) to this unit."
          },
          {
            "name": "Astartes Banner",
            "description": "While this unit contains an Ancient, add 1 to the Objective Control characteristic of its models."
          },
          {
            "name": "Honour or Death",
            "description": "While this unit contains a Company Champion, add 1 to Advance and Charge rolls made for this unit and you can target this unit with the Heroic Intervention Stratagem for 0CP."
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to a Terminator Squad, it can be attached to this unit instead."
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
          "t": "5",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Deathwing Command Squad"
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
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Halberd of Caliban",
              "keywords": ["precision"],
              "range": "Melee",
              "attacks": "5",
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
        "Deathwing Command Squad"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"],
      "ledBy": ["Belial", "Deathwing Strikemaster"]
    },
    {
      "id": "0a59cf75-fb0a-540f-9206-4ff05900b6a4",
      "name": "Deathwing Knights",
      "faction_id": "CHDA",
      "leader": "",
      "composition": ["1 Knight Master", "4-9 Deathwing Knights"],
      "loadout": "The Knight Master is equipped with: flail of the Unforgiven. Every Deathwing Knight is equipped with: mace of absolution.",
      "wargear": ["This unit can be equipped with 1 Watcher in the Dark."],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "235"
        },
        {
          "models": "10",
          "cost": "470"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Watcher in the Dark",
            "description": "Once per battle, at any time, this unit can summon a Watcher in the Dark. When it does, until the end of the phase, models in this unit have the Feel No Pain 4+ ability against mortal wounds."
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
            "name": "Inner Circle",
            "description": "Each time an attack is allocated to a model in this unit, subtract 1 from the Damage characteristic of that attack."
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to a Terminator Squad, it can be attached to this unit instead."
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
          "t": "5",
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Deathwing Knights"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Flail of the Unforgiven",
              "keywords": ["devastating wounds", "sustained hits 1"],
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
              "name": "Mace of absolution",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Imperium", "Terminator", "Deathwing Knights"],
      "factions": ["Adeptus Astartes", "Dark Angels"],
      "ledBy": ["Belial"]
    },
    {
      "id": "07279e32-bea5-56f0-83d5-031c5a19458e",
      "name": "Deathwing Strikemaster",
      "faction_id": "CHDA",
      "leader": "This model can be attached to the following units: ■ Deathwing Command Squad ■ Deathwing Squad ■ Relic Terminator Squad ■ Terminator Assault Squad ■ Terminator Squad You can attach this model to one of the above units even if one Captain model has already been attached to it. If you do, and that Bodyguard unit is destroyed, the Leader units attached to it become separate units, with their original Starting Strengths.",
      "composition": ["1 Deathwing Strikemaster"],
      "loadout": "This model is equipped with: storm bolter; master-crafted power weapon.",
      "wargear": [
        "This model’s storm bolter and master-crafted power weapon can be replaced with either 1 twin lightning claws, or two different weapons from the following list: ◦ 1 storm bolter ◦ 1 chainfist ◦ 1 mace of absolution ◦ 1 power fist ◦ 1 thunder hammer ◦ 1 storm shield"
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
            "name": "Storm Shield",
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
            "name": "Tactical Precision",
            "description": "While this model is leading a unit, weapons equipped by models in that unit have the [LETHAL HITS] ability."
          },
          {
            "name": "Vanquish the Foe",
            "description": "Each time this model makes an attack that targets an enemy unit that is Below Half-strength, add 1 to the Hit roll and add 1 to the Wound roll."
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
          "name": "Deathwing Strikemaster"
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
              "name": "Mace of absolution",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "3"
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
        "Lieutenant",
        "Deathwing Strikemaster"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "76f2cda0-0d76-57a6-9b61-7db0598b1683",
      "name": "Deathwing Terminator Squad",
      "faction_id": "CHDA",
      "leader": "",
      "composition": ["1 Deathwing Sergeant", "4-9 Deathwing Terminators"],
      "loadout": "The Deathwing Sergeant is equipped with: storm bolter; power weapon. Every Deathwing Terminator is equipped with: storm bolter; power fist.",
      "wargear": [
        "Any number of Deathwing Terminators can each have their storm bolter and power fist replaced with one of the following: ◦ 1 twin lightning claws ◦ 1 thunder hammer and 1 storm shield",
        "Any number of Deathwing Terminators can each have their power fist replaced with 1 chainfist.",
        "For every 5 models in this unit, 1 Deathwing Terminator can replace its storm bolter with one of the following: ◦ 1 assault cannon ◦ 1 heavy flamer ◦ 1 plasma cannon ◦ 1 storm bolter and 1 cyclone missile launcher (this model’s storm bolter cannot be replaced)",
        "This unit can be equipped with 1 Watcher in the Dark.* * The rules for a Watcher in the Dark can be found on the Deathwing Knights datasheet."
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
            "name": "Deathwing",
            "description": "Each time a model in this unit makes an attack, you can ignore any or all modifiers to that attack’s Ballistic Skill or Weapon Skill characteristics and/or to the Hit roll. In addition, each time a model in this unit makes an attack that targets the enemy unit you selected at the start of your Command phase for the Oath of Moment ability, add 1 to the Hit roll."
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to a Terminator Squad, it can be attached to this unit instead."
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
          "t": "5",
          "sv": "2+",
          "w": "3",
          "ld": "6+",
          "oc": "1",
          "name": "Deathwing Terminator Squad"
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
              "name": "Plasma cannon – standard",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma cannon – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "36\"",
              "attacks": "D3",
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
        "Deathwing Terminator Squad"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "72e9446e-116a-5ef1-9ecf-956c1ce11c9e",
      "name": "Ezekiel",
      "faction_id": "CHDA",
      "leader": "This model can be attached to the following units: ■ Assault Squad ■ Command Squad ■ Tactical Squad ■ Vanguard Veteran Squad",
      "composition": ["1 Ezekiel – Epic Hero"],
      "loadout": "This model is equipped with: the Deliverer; Mind Wipe; Traitor’s Bane; Book of Salvation.",
      "wargear": ["None"],
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
            "name": "Book of Salvation",
            "description": "While this model is leading a unit, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit. When this model is destroyed, each friendly Adeptus Astartes unit within 6\" of this model must take a Battle-shock test."
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
            "name": "Psychic Hood",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks."
          },
          {
            "name": "Engulfing Fear (Psychic)",
            "description": "In your Shooting phase, you can select one enemy unit within 18\" of this model. That enemy unit must take a Battle-shock test."
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
          "name": "Ezekiel"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "The Deliverer",
              "keywords": ["pistol", "precision"],
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
              "name": "Mind Wipe – witchfire",
              "keywords": ["devastating wounds", "precision", "psychic"],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "6",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Mind Wipe – focused witchfire",
              "keywords": [
                "anti-character 4+",
                "devastating wounds",
                "hazardous",
                "precision",
                "psychic"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "2+",
              "strength": "6",
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
              "name": "Traitor’s Bane",
              "keywords": ["anti-chaos 2+", "psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
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
        "Grenades",
        "Imperium",
        "Ezekiel"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "7e3ea0b9-3d47-53aa-9bb5-757c44eb1ec1",
      "name": "Lazarus",
      "faction_id": "CHDA",
      "leader": "This model can be attached to the following units: ■ Assault Intercessor Squad ■ Bladeguard Veteran Squad ■ Infernus Squad ■ Intercessor Squad ■ Sternguard Veteran Squad",
      "composition": ["1 Lazarus – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; Enmity’s Edge.",
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
            "name": "Intractable Will",
            "description": "While this model is leading a unit, each time a model in that unit is destroyed by a melee attack, if that model has not fought this phase, roll one D6. On a 4+, do not remove it from play; that destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play."
          },
          {
            "name": "The Spiritshield Helm",
            "description": "This model has the Feel No Pain 3+ ability against Psychic Attacks and mortal wounds."
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
          "name": "Lazarus"
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
              "name": "Enmity’s Edge",
              "keywords": ["anti-psyker 2+"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
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
        "Grenades",
        "Imperium",
        "Tacticus",
        "Captain",
        "Lazarus"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "1cecd901-d66e-5d61-a0eb-6540650e63f6",
      "name": "Lion El’jonson",
      "faction_id": "CHDA",
      "leader": "",
      "composition": ["1 Lion El’Jonson – Epic Hero"],
      "loadout": "This model is equipped with: Arma Luminis; Fealty.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "380"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Fights First"],
        "faction": ["Oath of Moment"],
        "primarch": [
          {
            "name": "PRIMARCH OF THE FIRST LEGION",
            "abilities": [
              {
                "name": "All Secrets Revealed",
                "description": "Once per turn, when your opponent targets a unit from their army with a Stratagem but before that Stratagem’s effects are resolved, if that unit is within 12\" of this model, you gain 1CP and that enemy unit must take a Battle-shock test. If that test is failed, in addition to that unit being Battle-shocked, that Stratagem’s effects are not resolved (that Stratagem still counts as having been used this phase)."
              },
              {
                "name": "Martial Exemplar (Aura)",
                "description": "While a friendly Adeptus Astartes unit is within 6\" of this model , each time a model in that unit makes a melee attack, add 1 to the Hit roll."
              },
              {
                "name": "No Hiding From the Watchers (Aura)",
                "description": "While a friendly Adeptus Astartes unit is within 6\" of this model, models in that unit have the Feel No Pain 4+ ability against mortal wounds."
              }
            ]
          }
        ],
        "invul": {
          "value": "3+",
          "info": ""
        },
        "other": [
          {
            "name": "Primarch of the First Legion",
            "description": "In your Command phase, select one Primarch of the First Legion abilities (see left). Until the start of your next Command phase, this model has that ability."
          },
          {
            "name": "The Emperor’s Shield",
            "description": "Each time an attack targets this model, subtract 1 from the Wound roll. In addition, each time a melee attack is allocated to this model, on an unmodified saving throw of 6, the attacking unit suffers 1 mortal wound after it has finished making its attacks."
          },
          {
            "name": "Dark Angels Bodyguard",
            "description": "While this model is within 3\" of one or more friendly Adeptus Astartes Infantry units, this model has the Lone Operative ability."
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
          "name": "Lion El’jonson"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Arma Luminis – bolt",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "4",
              "skill": "2+",
              "strength": "4",
              "ap": "-1",
              "damage": "2"
            },
            {
              "name": "Arma Luminis – plasma",
              "keywords": ["pistol"],
              "range": "12\"",
              "attacks": "2",
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
              "name": "Fealty – strike",
              "keywords": ["lethal hits"],
              "range": "Melee",
              "attacks": "8",
              "skill": "2+",
              "strength": "12",
              "ap": "-4",
              "damage": "4"
            },
            {
              "name": "Fealty – sweep",
              "keywords": ["sustained hits 1"],
              "range": "Melee",
              "attacks": "16",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "2"
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
        "Lion El’Jonson"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "101d5e2e-9a10-59a2-830a-92c827f9f203",
      "name": "Nephilim Jetfighter",
      "faction_id": "CHDA",
      "leader": "",
      "composition": ["1 Nephilim Jetfighter"],
      "loadout": "This model is equipped with: avenger mega bolter; blacksword missiles; twin heavy bolter; armoured hull.",
      "wargear": [
        "This model’s avenger mega bolter can be replaced with 1 Nephilim lascannons."
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
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Lightning-fast Manoeuvres",
            "description": "Each time a ranged attack targets this model, subtract 1 from the Hit roll. If that attack was made by a model that can Fly, subtract 1 from the Wound roll as well."
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
          "t": "8",
          "sv": "3+",
          "w": "11",
          "ld": "6+",
          "oc": "0",
          "name": "Nephilim Jetfighter"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Avenger mega bolter",
              "keywords": ["sustained hits 1"],
              "range": "36\"",
              "attacks": "10",
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
              "name": "Blacksword missiles",
              "keywords": ["anti-fly 2+"],
              "range": "36\"",
              "attacks": "2",
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
              "name": "Nephilim lascannons",
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
        "Nephilim Jetfighter"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "18601d27-010d-50a9-84b8-e30b26dac1b7",
      "name": "Ravenwing Black Knights",
      "faction_id": "CHDA",
      "leader": "",
      "composition": ["1 Ravenwing Huntmaster", "2-5 Ravenwing Black Knights"],
      "loadout": "Every model is equipped with: bolt pistol; plasma talon; Black Knight combat weapon.",
      "wargear": [
        "For every 3 models in this unit, 1 model can replace its plasma talon with 1 Astartes grenade launcher."
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
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Knights of Caliban",
            "description": "Each time this unit is selected to fight, if it made a Charge move this turn, until the end of the phase, melee weapons equipped by models in this unit have the [ANTI-MONSTER 4+] and [ANTI-VEHICLE 4+] abilities."
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to an Outrider Squad, it can be attached to this unit instead."
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
          "t": "5",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Ravenwing Black Knights"
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
              "name": "Plasma talon – standard",
              "keywords": ["rapid fire 1"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma talon – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "18\"",
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
              "name": "Black Knight combat weapon",
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
      "keywords": [
        "Mounted",
        "Grenades",
        "Imperium",
        "Ravenwing Black Knights"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"],
      "ledBy": ["Sammael"]
    },
    {
      "id": "65697143-7593-5759-a841-ef1aaddef7f6",
      "name": "Ravenwing Command Squad",
      "faction_id": "CHDA",
      "leader": "",
      "composition": [
        "1 Ravenwing Champion",
        "1 Ravenwing Apothecary",
        "1 Ravenwing Ancient",
        "0-3 Ravenwing Knights"
      ],
      "loadout": "The Ravenwing Champion is equipped with: bolt pistol; plasma talon; master-crafted power weapon. The Ravenwing Apothecary is equipped with: bolt pistol; plasma talon; Black Knight combat weapon. The Ravenwing Ancient is equipped with: bolt pistol; plasma talon; Black Knight combat weapon. Every Ravenwing Knight is equipped with: bolt pistol; plasma talon; Black Knight combat weapon.",
      "wargear": [
        "For every 3 models in this unit, 1 model’s plasma talon can be replaced with 1 Astartes grenade launcher."
      ],
      "transport": "",
      "points": [
        {
          "models": "3",
          "cost": "145"
        },
        {
          "models": "6",
          "cost": "290"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Narthecium",
            "description": "While this unit contains an Apothecary, in your Command phase, you can return 1 destroyed model (excluding Character models) to this unit."
          },
          {
            "name": "Astartes Banner",
            "description": "While this unit contains an Ancient, add 1 to the Objective Control characteristic of its models."
          },
          {
            "name": "Honour or Death",
            "description": "While this unit contains a Company Champion, add 1 to Advance and Charge rolls made for this unit and you can target this unit with the Heroic Intervention Stratagem for 0CP."
          }
        ],
        "special": [
          {
            "name": "ATTACHED UNIT",
            "description": "If a Character unit from your army with the Leader ability can be attached to a Outrider Squad, it can be attached to this unit instead."
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
          "t": "5",
          "sv": "3+",
          "w": "3",
          "ld": "6+",
          "oc": "2",
          "name": "Ravenwing Command Squad"
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
              "name": "Plasma talon – standard",
              "keywords": ["rapid fire 1"],
              "range": "18\"",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma talon – supercharge",
              "keywords": ["hazardous", "rapid fire 1"],
              "range": "18\"",
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
              "name": "Black Knight combat weapon",
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
        }
      ],
      "keywords": [
        "Mounted",
        "Grenades",
        "Imperium",
        "Ravenwing Command Squad"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"],
      "ledBy": ["Sammael"]
    },
    {
      "id": "eab64694-a982-55df-80a6-73d5036f7d8f",
      "name": "Ravenwing Dark Talon",
      "faction_id": "CHDA",
      "leader": "",
      "composition": ["1 Ravenwing Dark Talon"],
      "loadout": "This model is equipped with: rift cannon; 2 hurricane bolters; armoured hull.",
      "wargear": ["None"],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "210"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Stasis Bomb",
            "description": "Once per battle, after this model ends a Normal move, you can select one enemy unit (excluding Aircraft) it moved over this phase. That unit suffers D3 mortal wounds and you must roll one D6: on a 1-3, that unit cannot Advance or Fall Back in your opponent’s next Movement phase; on a 4-6, that unit must Remain Stationary in your opponent’s next Movement phase."
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
          "t": "8",
          "sv": "3+",
          "w": "11",
          "ld": "6+",
          "oc": "0",
          "name": "Ravenwing Dark Talon"
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
              "name": "Rift cannon",
              "keywords": ["blast", "devastating wounds"],
              "range": "18\"",
              "attacks": "D3+1",
              "skill": "3+",
              "strength": "16",
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
        "Ravenwing Dark Talon"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "a3a7cf44-57f6-55cd-aef8-6da96e65dd21",
      "name": "Ravenwing Darkshroud",
      "faction_id": "CHDA",
      "leader": "",
      "composition": ["1 Ravenwing Darkshroud"],
      "loadout": "This model is equipped with: heavy bolter; close combat weapon.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 assault cannon."
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
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Icon of Old Caliban (Aura)",
            "description": "While a friendly Adeptus Astartes unit is within 6\" of this model, models in that unit have the Stealth ability and each time a ranged attack targets that unit, that unit has the Benefit of Cover against that attack."
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
          "t": "8",
          "sv": "3+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Ravenwing Darkshroud"
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
      "keywords": ["Vehicle", "Fly", "Imperium", "Ravenwing Darkshroud"],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "e063e96f-7443-55ea-94bd-4637d8526392",
      "name": "Ravenwing Land Speeder Vengeance",
      "faction_id": "CHDA",
      "leader": "",
      "composition": ["1 Ravenwing Land Speeder Vengeance"],
      "loadout": "This model is equipped with: heavy bolter; plasma storm battery; close combat weapon.",
      "wargear": [
        "This model’s heavy bolter can be replaced with 1 assault cannon."
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
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Storm of Vengeance",
            "description": "Once per turn, in your opponent’s Shooting phase, when a friendly Adeptus Astartes unit within 6\" of this model is destroyed, this model can use this ability (it cannot use this ability when it is itself destroyed). If it does, after the attacking unit has finished making its attacks, this model can shoot as if it were your Shooting phase, but when resolving those attacks it can only target that enemy unit (and only if it is an eligible target)."
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
          "t": "8",
          "sv": "3+",
          "w": "10",
          "ld": "6+",
          "oc": "3",
          "name": "Ravenwing Land Speeder Vengeance"
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
              "name": "Plasma storm battery – standard",
              "keywords": ["blast", "twin-linked"],
              "range": "36\"",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Plasma storm battery – supercharge",
              "keywords": ["blast", "hazardous", "twin-linked"],
              "range": "36\"",
              "attacks": "D6+1",
              "skill": "3+",
              "strength": "9",
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
        "Vehicle",
        "Fly",
        "Imperium",
        "Ravenwing Land Speeder Vengeance"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "d425ac5f-4616-5714-b360-94abfe35e9f6",
      "name": "Ravenwing Talonmaster",
      "faction_id": "CHDA",
      "leader": "",
      "composition": ["1 Ravenwing Talonmaster"],
      "loadout": "This model is equipped with: twin assault cannon; twin heavy bolter; power weapon.",
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
        "core": ["Deadly Demise 1", "Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Talonmaster",
            "description": "While this model is within 3\" of one or more other friendly Adeptus Astartes Mounted or Adeptus Astartes Fly Vehicle units, this model has the Lone Operative ability."
          },
          {
            "name": "Nowhere to Hide",
            "description": "While a friendly Adeptus Astartes Mounted or Adeptus Astartes Fly Vehicle unit is within 6\" of this model, ranged weapons equipped by models in that unit have the [IGNORES COVER] ability."
          },
          {
            "name": "Master of Manoeuvre",
            "description": "Once per turn, when an enemy unit ends a Normal, Advance or Fall Back move within 9\" of this model, if this model is not within Engagement Range of one or more enemy units, this model can make a Normal move of up to 6\"."
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
          "m": "16\"",
          "t": "7",
          "sv": "3+",
          "w": "6",
          "ld": "6+",
          "oc": "2",
          "name": "Ravenwing Talonmaster"
        }
      ],
      "rangedWeapons": [
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
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Power weapon",
              "keywords": [],
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
        "Vehicle",
        "Character",
        "Fly",
        "Imperium",
        "Ravenwing Talonmaster"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    },
    {
      "id": "171df937-ae5f-5b45-8d8d-2685fe36fcc2",
      "name": "Sammael",
      "faction_id": "CHDA",
      "leader": "This model can be attached to the following units: ■ Bike Squad ■ Outrider Squad ■ Ravenwing Black Knights ■ Ravenwing Command Squad",
      "composition": ["1 Sammael – Epic Hero"],
      "loadout": "This model is equipped with: bolt pistol; master-crafted plasma cannon; twin storm bolter; the Raven Sword.",
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
        "core": ["Leader"],
        "faction": ["Oath of Moment"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Grand Master of the Ravenwing",
            "description": "While this model is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Advanced."
          },
          {
            "name": "Cut Off Their Escape",
            "description": "Each time an enemy unit (excluding Monsters and Vehicles) within Engagement Range of this model’s unit is selected to Fall Back, models in that enemy unit must take Desperate Escape tests as if their unit was Battle-shocked. When doing so, if that enemy unit is also Battle-shocked by other means, subtract 1 from each of those Desperate Escape tests."
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
          "w": "7",
          "ld": "6+",
          "oc": "2",
          "name": "Sammael"
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
              "name": "Master-crafted plasma cannon",
              "keywords": ["blast"],
              "range": "36\"",
              "attacks": "D3",
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
              "name": "Twin storm bolter",
              "keywords": ["rapid fire 2", "twin-linked"],
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
              "name": "The Raven Sword",
              "keywords": ["sustained hits 2"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "6",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Character",
        "Epic Hero",
        "Fly",
        "Grenades",
        "Imperium",
        "Captain",
        "Sammael"
      ],
      "factions": ["Adeptus Astartes", "Dark Angels"]
    }
  ],
  "colours": {
    "banner": "#16291a",
    "header": "#013a17"
  }
}