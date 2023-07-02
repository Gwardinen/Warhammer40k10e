window.data = window.data || {};
window.data.GK = {
  "id": "GK",
  "link": "https://game-datacards.eu",
  "name": "Grey Knights",
  "is_subfaction": false,
  "parent_id": "",
  "enhancements": [
    {
      "name": "First to the Fray",
      "description": "Grey Knights model with the Deep Strike ability only. The bearer’s unit must start the battle in Reserves, but neither it, nor any Transport it is embarked within, is counted towards any limits the mission places on the number of Strategic Reserves units you can have. That unit can be set up using its Deep Strike ability in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules.",
      "keywords": ["Grey Knights", "Deep Strike"],
      "excludes": [],
      "cost": "35"
    },
    {
      "name": "Domina Liber Daemonica",
      "description": "Grey Knights model only. Each time the bearer makes a melee attack add 1 to the Wound roll and, if that attack targets a Daemon unit, add 1 to the Damage characteristic of that attack as well.",
      "keywords": ["Grey Knights"],
      "excludes": [],
      "cost": "20"
    },
    {
      "name": "Sigil of Exigence",
      "description": "Grey Knights model only. Once per battle, in your opponent’s Shooting phase, when the bearer’s unit is selected as the target of a ranged attack, you can remove the bearer’s unit from the battlefield and then set it back up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models. If the bearer is no longer an eligible target, your opponent can then select new targets for any attacks that had targeted the bearer’s unit.",
      "keywords": ["Grey Knights"],
      "excludes": [],
      "cost": "30"
    },
    {
      "name": "Inescapable Wrath",
      "description": "Grey Knights model only. Add 1 to Charge rolls made for the bearer’s unit.",
      "keywords": ["Grey Knights"],
      "excludes": [],
      "cost": "15"
    }
  ],
  "datasheets": [
    {
      "id": "f2ec85ee-5971-5c49-beac-3575cbbc6030",
      "name": "Brother-captain",
      "faction_id": "GK",
      "leader": "This model can be attached to the following units: ■ Brotherhood Terminator Squad ■ Paladin Squad",
      "composition": ["1 Brother-Captain"],
      "loadout": "This model is equipped with: storm bolter; Nemesis force weapon.",
      "wargear": [
        "This model’s storm bolter can be replaced with one of the following: ◦ 1 incinerator ◦ 1 psilencer ◦ 1 psycannon"
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Empyric Amplification (Psychic)",
            "description": "While this model is leading a unit, Psychic weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability."
          },
          {
            "name": "Focused Mind (Psychic)",
            "description": "Each time this model makes an attack with a Psychic weapon, you can re-roll the Wound roll."
          }
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
          "name": "Brother-captain"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Incinerator",
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
              "name": "Psilencer",
              "keywords": ["psychic", "sustained hits 1"],
              "range": "24\"",
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
              "name": "Psycannon",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "8",
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
              "name": "Nemesis force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
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
        "Terminator",
        "Imperium",
        "Brother-Captain"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "29dae550-63b2-50fa-9176-d68af9541d34",
      "name": "Brother-captain Stern",
      "faction_id": "GK",
      "leader": "This model can be attached to the following units: ■ Brotherhood Terminator Squad ■ Paladin Squad",
      "composition": ["1 Brother-Captain Stern – Epic Hero"],
      "loadout": "This model is equipped with: storm bolter; Nemesis force sword.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Exemplar of the Silvered Host",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, on a Critical Wound, the target suffers 1 mortal wound in addition to any normal damage."
          },
          {
            "name": "Strands of Fate (Psychic)",
            "description": "The first time this model is destroyed, roll one D6 at the end of the phase. On a 2+, set this model back up on the battlefield as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining."
          }
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
          "name": "Brother-captain Stern"
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
              "name": "Nemesis force sword",
              "keywords": ["psychic"],
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
        "Psyker",
        "Imperium",
        "Terminator",
        "Brother-Captain Stern"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "116708b0-8e85-502e-bade-efc6cffe2251",
      "name": "Brotherhood Champion",
      "faction_id": "GK",
      "leader": "This model can be attached to the following units: ■ Purgation Squad ■ Strike Squad",
      "composition": ["1 Brotherhood Champion"],
      "loadout": "This model is equipped with: storm bolter; Nemesis force weapon.",
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
        "core": ["Deep Strike", "Fights First", "Leader"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Ethereal Castigation (Psychic)",
            "description": "While this model is leading a unit, models in that unit have the Fights First ability."
          },
          {
            "name": "Martial Fury",
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
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Brotherhood Champion"
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
              "name": "Nemesis force weapon",
              "keywords": ["precision", "psychic"],
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
        "Imperium",
        "Brotherhood Champion"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "a196334f-705a-5c01-939c-29532382942a",
      "name": "Brotherhood Chaplain",
      "faction_id": "GK",
      "leader": "This model can be attached to the following units: ■ Brotherhood Terminator Squad ■ Paladin Squad",
      "composition": ["1 Brotherhood Chaplain"],
      "loadout": "This model is equipped with: storm bolter; crozius arcanum.",
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
        "core": ["Deep Strike"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Words of Power (Psychic)",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Wound roll."
          },
          {
            "name": "Dread Bearing (Aura)",
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
          "m": "5\"",
          "t": "5",
          "sv": "2+",
          "w": "5",
          "ld": "5+",
          "oc": "1",
          "name": "Brotherhood Chaplain"
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
        "Psyker",
        "Terminator",
        "Imperium",
        "Brotherhood Chaplain"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "ed58e505-b825-5724-83a6-a0271413d051",
      "name": "Brotherhood Librarian",
      "faction_id": "GK",
      "leader": "This model can be attached to the following units: ■ Brotherhood Terminator Squad ■ Paladin Squad",
      "composition": ["1 Brotherhood Librarian"],
      "loadout": "This model is equipped with: Purge Soul; Nemesis force weapon.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 combi-weapon ◦ 1 storm bolter"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "110"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Leader"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Sanctic Hood",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against Psychic Attacks."
          },
          {
            "name": "Vortex of Doom (Psychic)",
            "description": "In your Shooting phase, you can select one enemy unit within 18\" of and visible to this Psyker and roll one D6: on a 1, this Psyker’s unit suffers D6 mortal wounds; on a 2-5, that enemy unit suffers 2D3 mortal wounds; on a 6, that enemy unit suffers 2D6 mortal wounds."
          }
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
          "name": "Brotherhood Librarian"
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
              "name": "Purge Soul – witchfire",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
              "damage": "3"
            },
            {
              "name": "Purge Soul – focused witchfire",
              "keywords": ["precision", "psychic", "hazardous"],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "6",
              "ap": "-2",
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
              "name": "Nemesis force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
              "skill": "2+",
              "strength": "6",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": ["Infantry", "Character", "Terminator", "Psyker", "Imperium"],
      "factions": ["Grey Knights"]
    },
    {
      "id": "eeb060e8-3807-55c1-a07d-c836e0cd370d",
      "name": "Brotherhood Techmarine",
      "faction_id": "GK",
      "leader": "This model can be attached to the following units: ■ Servitors ■ Strike Squad",
      "composition": ["1 Brotherhood Techmarine"],
      "loadout": "This model is equipped with: boltgun; flamer; plasma cutter; Omnissian power axe; servo-arms.",
      "wargear": ["This model’s boltgun can be replaced with 1 bolt pistol."],
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
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Awaken the Machine Spirit",
            "description": "In your Command phase, you can select one friendly Grey Knights Vehicle model within 6\" of this model. Until the start of your next Command phase, each time that Vehicle model makes an attack, add 1 to the Hit roll."
          },
          {
            "name": "Omnissiah’s Blessing",
            "description": "In your Command phase, you can select one friendly Grey Knights Vehicle model within 3\" of this model. That Vehicle model regains up to D3 lost wounds."
          },
          {
            "name": "Techmarine",
            "description": "While this model is within 3\" of one or more friendly Grey Knights Vehicle units, unless it is leading a unit, this model has the Lone Operative ability."
          }
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
          "t": "4",
          "sv": "2+",
          "w": "4",
          "ld": "6+",
          "oc": "1",
          "name": "Brotherhood Techmarine"
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
              "name": "Plasma cutter – standard",
              "keywords": ["extra attacks"],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "1"
            },
            {
              "name": "Plasma cutter – supercharge",
              "keywords": ["extra attacks", "hazardous"],
              "range": "Melee",
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
              "name": "Servo-arms",
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
        "Psyker",
        "Imperium",
        "Brotherhood Techmarine"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "09b7e6e4-9a1c-5fa8-bcd2-119f1feda5fe",
      "name": "Brotherhood Terminator Squad",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Terminator Justicar", "4-9 Brotherhood Terminators"],
      "loadout": "Every model is equipped with: storm bolter; Nemesis force weapon.",
      "wargear": [
        "For every 5 models in this unit, 1 Brotherhood Terminator’s storm bolter can be replaced with one of the following: ◦ 1 incinerator ◦ 1 psilencer ◦ 1 psycannon",
        "1 Brotherhood Terminator equipped with a storm bolter can be equipped with 1 Ancient’s banner.*",
        "1 Brotherhood Terminator can have its storm bolter replaced with 1 narthecium.* *You cannot select both of these options for the same model."
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "225"
        },
        {
          "models": "10",
          "cost": "450"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Ancient’s Banner",
            "description": "Add 1 to the Objective Control characteristic of models in the bearer’s unit."
          },
          {
            "name": "Narthecium",
            "description": "In your Command phase, you can return 1 destroyed model (excluding Characters) to the bearer’s unit."
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Hammerhand (Psychic)",
            "description": "Each time a model in this unit makes a Charge move, until the end of the turn, melee weapons equipped by models in this unit have the [LETHAL HITS] ability."
          }
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
          "oc": "2",
          "name": "Brotherhood Terminator Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Incinerator",
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
              "name": "Psilencer",
              "keywords": ["psychic", "sustained hits 1"],
              "range": "24\"",
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
              "name": "Psycannon",
              "keywords": ["psychic"],
              "range": "24\"",
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
              "name": "Nemesis force weapon",
              "keywords": ["psychic"],
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
        "Infantry",
        "Battleline",
        "Psyker",
        "Terminator",
        "Grenades",
        "Imperium",
        "Brotherhood Terminator Squad"
      ],
      "factions": ["Grey Knights"],
      "ledBy": [
        "Brother-captain",
        "Brother-captain Stern",
        "Brotherhood Chaplain",
        "Brotherhood Librarian",
        "Grand Master",
        "Grand Master Voldus",
        "Kaldor Draigo"
      ]
    },
    {
      "id": "293435ac-8824-583a-8a7e-0e94642bf809",
      "name": "Castellan Crowe",
      "faction_id": "GK",
      "leader": "This model can be attached to the following unit: ■ Purifier Squad",
      "composition": ["1 Castellan Crowe – Epic Hero"],
      "loadout": "This model is equipped with: Purifying Flame; storm bolter; Black Blade of Antwyr.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Champion of the Order of Purifiers (Psychic)",
            "description": "While this model is leading a unit, add 1 to the Attacks characteristic of that unit’s Purifying Flame."
          },
          {
            "name": "Foresight of the Prognosticars (Psychic)",
            "description": "Once per turn, the first time a saving throw is failed for this model, change the Damage characteristic of that attack to 0."
          }
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
          "name": "Castellan Crowe"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Purifying Flame",
              "keywords": ["anti-infantry 2+", "ignores cover", "psychic"],
              "range": "18\"",
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
              "name": "Black Blade of Antwyr",
              "keywords": ["devastating wounds", "precision"],
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
        "Psyker",
        "Imperium",
        "Castellan Crowe"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "f29aef55-8607-5cfb-8bac-1d235c1ca41a",
      "name": "Grand Master",
      "faction_id": "GK",
      "leader": "This model can be attached to the following units: ■ Brotherhood Terminator Squad ■ Paladin Squad",
      "composition": ["1 Grand Master"],
      "loadout": "This model is equipped with: storm bolter; Nemesis force weapon.",
      "wargear": [
        "This model’s storm bolter can be replaced with one of the following: ◦ 1 incinerator ◦ 1 psilencer ◦ 1 psycannon"
      ],
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
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Might of Purity (Psychic)",
            "description": "While this model is leading a unit, you can ignore any or all modifiers to the characteristics of models in that unit and to any roll or test made for models in that unit (excluding modifiers to saving throws)."
          },
          {
            "name": "Master Strategist",
            "description": "Once per battle, one unit from your army with this ability can be targeted by a Stratagem for 0CP, even if another unit from your army has already been targeted by that Stratagem this phase."
          }
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
          "w": "7",
          "ld": "6+",
          "oc": "1",
          "name": "Grand Master"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Incinerator",
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
              "name": "Psilencer",
              "keywords": ["psychic", "sustained hits 1"],
              "range": "24\"",
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
              "name": "Psycannon",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "8",
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
              "name": "Nemesis force weapon",
              "keywords": ["psychic"],
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
        "Grenades",
        "Terminator",
        "Imperium",
        "Grand Master"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "cf718708-be2e-50fc-80e7-4da3f6637da3",
      "name": "Grand Master In Nemesis Dreadknight",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Grand Master in Nemesis Dreadknight"],
      "loadout": "This model is equipped with: dreadfists.",
      "wargear": [
        "This model’s dreadfists can be replaced with one of the following: ◦ 1 Nemesis daemon greathammer ◦ 1 Nemesis greatsword",
        "This model can be equipped with up to two of the following, but cannot take duplicates: ◦ 1 gatling psilencer ◦ 1 heavy incinerator ◦ 1 heavy psycannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "245"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Surge of Wrath (Psychic)",
            "description": "Once per battle round, in the Fight phase, one model from your army with this ability can use it before resolving its attacks. If it does, until the end of the phase, each time that model makes an attack that targets a Monster or Vehicle unit, you can re-roll the Hit roll, you can re-roll the Wound roll and you can re-roll the Damage roll."
          },
          {
            "name": "Heroism’s Favour",
            "description": "Each time you target this model with a Stratagem, it only costs 1CP to use, even if the CP cost is higher."
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
          "sv": "2+",
          "w": "13",
          "ld": "6+",
          "oc": "4",
          "name": "Grand Master In Nemesis Dreadknight"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Gatling psilencer",
              "keywords": ["psychic", "sustained hits 1"],
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
              "name": "Heavy incinerator",
              "keywords": ["ignores cover", "torrent"],
              "range": "18\"",
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
              "name": "Heavy psycannon",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "10",
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
              "name": "Dreadfists",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Nemesis daemon greathammer",
              "keywords": ["psychic"],
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
              "name": "Nemesis greatsword – strike",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Nemesis greatsword – sweep",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "10",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Character",
        "Walker",
        "Psyker",
        "Imperium",
        "Grand Master in Nemesis Dreadknight"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "149469d0-61a1-5592-98ca-2a94ca358bc8",
      "name": "Grand Master Voldus",
      "faction_id": "GK",
      "leader": "This model can be attached to the following units: ■ Brotherhood Terminator Squad ■ Paladin Squad",
      "composition": ["1 Grand Master Voldus – Epic Hero"],
      "loadout": "This model is equipped with: storm bolter; Malleus Argyrum.",
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
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Sanctuary (Psychic)",
            "description": "While this model is leading a unit, each time an attack targets that unit, subtract 1 from the Hit roll."
          },
          {
            "name": "Hammer Aflame (Psychic)",
            "description": "Each time this model’s unit is selected to fight, you can select one enemy unit within Engagement Range of this model’s unit and roll one D6, adding 2 to the result if that unit has the Daemon keyword: on a 4-5, that enemy unit suffers D3 mortal wounds; on a 6+, that enemy unit suffers D3+3 mortal wounds."
          }
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
          "name": "Grand Master Voldus"
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
              "name": "Malleus Argyrum",
              "keywords": ["psychic"],
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
        "Psyker",
        "Terminator",
        "Imperium",
        "Grand Master Voldus"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "689e1001-9d6b-5dd2-a513-9346daaf23b4",
      "name": "Grey Knights Land Raider",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Land Raider"],
      "loadout": "This model is equipped with: 2 godhammer lascannons; twin heavy bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 multi-melta.",
        "This model can be equipped with 1 storm bolter."
      ],
      "transport": "This model has a transport capacity of 12 Grey Knights Infantry models. Each Terminator model takes up the space of 2 models.",
      "points": [
        {
          "models": "1",
          "cost": "270"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
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
          "name": "Grey Knights Land Raider"
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
      "keywords": ["Vehicle", "Transport", "Smoke", "Imperium", "Land Raider"],
      "factions": ["Grey Knights"]
    },
    {
      "id": "4d3bc053-81dd-5d13-b4eb-9701facf25dd",
      "name": "Grey Knights Land Raider Crusader",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Land Raider Crusader"],
      "loadout": "This model is equipped with: 2 hurricane bolters; twin assault cannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 multi-melta.",
        "This model can be equipped with 1 storm bolter."
      ],
      "transport": "This model has a transport capacity of 16 Grey Knights Infantry models. Each Terminator model takes up the space of 2 models.",
      "points": [
        {
          "models": "1",
          "cost": "250"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
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
          "name": "Grey Knights Land Raider Crusader"
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
        "Transport",
        "Smoke",
        "Grenades",
        "Imperium",
        "Land Raider",
        "Crusader"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "46942d4e-2b3b-5f7a-b034-0a067a3629f3",
      "name": "Grey Knights Land Raider Redeemer",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Land Raider Redeemer"],
      "loadout": "This model is equipped with: 2 flamestorm cannons; twin assault cannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 multi-melta.",
        "This model can be equipped with 1 storm bolter."
      ],
      "transport": "This model has a transport capacity of 14 Grey Knights Infantry models. Each Terminator model takes up the space of 2 models.",
      "points": [
        {
          "models": "1",
          "cost": "290"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
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
          "name": "Grey Knights Land Raider Redeemer"
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
        "Transport",
        "Smoke",
        "Grenades",
        "Imperium",
        "Land Raider",
        "Redeemer"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "3f5d25a5-f5ca-5398-90d0-9c702d2a65a9",
      "name": "Grey Knights Razorback",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Razorback"],
      "loadout": "This model is equipped with: twin heavy bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter.",
        "This model’s twin heavy bolter can be replaced with one of the following: ◦ 1 twin assault cannon ◦ 1 twin lascannon"
      ],
      "transport": "This model has a transport capacity of 6 Grey Knights Infantry models. It cannot transport Terminator models.",
      "points": [
        {
          "models": "1",
          "cost": "95"
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
          "name": "Grey Knights Razorback"
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
        "Transport",
        "Dedicated Transport",
        "Smoke",
        "Imperium",
        "Razorback"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "6c474964-4d5f-5f57-8b1b-b8c3b373bd9b",
      "name": "Grey Knights Rhino",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Rhino"],
      "loadout": "This model is equipped with: storm bolter; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 additional storm bolter."
      ],
      "transport": "This model has a transport capacity of 12 Grey Knights Infantry models. It cannot transport Terminator models.",
      "points": [
        {
          "models": "1",
          "cost": "80"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Firing Deck 2"],
        "faction": [],
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
          "name": "Grey Knights Rhino"
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
        "Rhino"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "ca1ff249-da22-5041-81b3-c5dbc117454a",
      "name": "Grey Knights Stormhawk Interceptor",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Stormhawk Interceptor"],
      "loadout": "This model is equipped with: las-talon; skyhammer missile launcher; twin assault cannon; armoured hull.",
      "wargear": [
        "This model’s las-talon can be replaced with 1 icarus stormcannon.",
        "This model’s skyhammer missile launcher can be replaced with one of the following: ◦ 1 twin heavy bolter ◦ 1 typhoon missile launcher"
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
        "core": ["Deadly Demise D3", "Hover"],
        "faction": [],
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
          "name": "Grey Knights Stormhawk Interceptor"
        }
      ],
      "rangedWeapons": [
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
              "name": "Las-talon",
              "keywords": [],
              "range": "24\"",
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
        "Aircraft",
        "Fly",
        "Smoke",
        "Imperium",
        "Stormhawk Interceptor"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "ff40724d-a84a-5684-8eeb-6917bd57f2eb",
      "name": "Grey Knights Stormraven Gunship",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Stormraven Gunship"],
      "loadout": "This model is equipped with: 2 stormstrike missile launchers; twin assault cannon; typhoon missile launcher; armoured hull.",
      "wargear": [
        "This model can be equipped with 2 hurricane bolters.",
        "This model’s twin assault cannon can be replaced with one of the following: ◦ 1 twin heavy plasma cannon ◦ 1 twin lascannon",
        "This model’s typhoon missile launcher can be replaced with one of the following: ◦ 1 twin heavy bolter ◦ 1 twin multi-melta"
      ],
      "transport": "This model has a transport capacity of 12 Grey Knights Infantry models and 1 Grey Knights Venerable Dreadnought model. Each Terminator model takes up the space of 2 models.",
      "points": [
        {
          "models": "1",
          "cost": "265"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6", "Hover"],
        "faction": [],
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
          "name": "Grey Knights Stormraven Gunship"
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
              "ap": "-3",
              "damage": "D6+2"
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
              "attacks": "3",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Twin heavy plasma cannon – supercharge",
              "keywords": ["blast", "hazardous", "twin-linked"],
              "range": "36\"",
              "attacks": "3",
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
        "Aircraft",
        "Transport",
        "Fly",
        "Imperium",
        "Stormraven Gunship"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "c9a5a5d4-76dc-5845-b86e-7b1818200853",
      "name": "Grey Knights Stormtalon Gunship",
      "faction_id": "GK",
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
          "cost": "170"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D3", "Hover"],
        "faction": [],
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
          "name": "Grey Knights Stormtalon Gunship"
        }
      ],
      "rangedWeapons": [
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
        "Aircraft",
        "Fly",
        "Imperium",
        "Stormtalon Gunship"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "ce388f5e-eacb-5433-a787-d00ca5b0b4bf",
      "name": "Grey Knights Thunderhawk Gunship",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Grey Knights Thunderhawk Gunship"],
      "loadout": "This model is equipped with: 2 lascannons; Thunderhawk heavy cannon; 4 twin heavy bolters; armoured hull; Thunderhawk cluster bombs.",
      "wargear": [
        "This model’s Thunderhawk heavy cannon can be replaced with 1 turbo-laser destructor.",
        "This model’s Thunderhawk cluster bombs can be replaced with 1 hellstrike missile battery."
      ],
      "transport": "This model has a transport capacity of 30 Grey Knights Infantry models. Each Terminator model takes up the space of 2 models.",
      "points": [
        {
          "models": "1",
          "cost": "805"
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
        "faction": [],
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
          "name": "Grey Knights Thunderhawk Gunship"
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
      "factions": ["Grey Knights"]
    },
    {
      "id": "84079d1f-0353-5ea0-a39a-c33a1a17c3f4",
      "name": "Grey Knights Venerable Dreadnought",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Venerable Dreadnought"],
      "loadout": "This model is equipped with: assault cannon; storm bolter; Dreadnought combat weapon.",
      "wargear": [
        "This model’s assault cannon can be replaced with one of the following: ◦ 1 heavy plasma cannon ◦ 1 multi-melta ◦ 1 twin lascannon",
        "This model’s storm bolter and Dreadnought combat weapon can be replaced with one of the following: ◦  1 missile launcher and 1 armoured feet ◦  1 heavy flamer and 1 Dreadnought combat weapon"
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
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Wisdom of the Ancients (Aura)",
            "description": "While a friendly Grey Knights Infantry unit is within 6\" of this model, each time a model in that unit makes an attack, re-roll a Hit roll of 1 and re-roll a Wound roll of 1."
          }
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
          "name": "Grey Knights Venerable Dreadnought"
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
              "keywords": ["torrent", "ignores cover"],
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
              "name": "Armoured feet",
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
      "keywords": [
        "Vehicle",
        "Walker",
        "Psyker",
        "Smoke",
        "Imperium",
        "Venerable Dreadnought"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "dbba5ea4-3390-573f-b26a-2251b7a7e472",
      "name": "Interceptor Squad",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Interceptor Justicar", "4-9 Interceptors"],
      "loadout": "Every model is equipped with: storm bolter; Nemesis force weapon.",
      "wargear": [
        "For every 5 models in this unit, 1 Interceptor’s storm bolter and Nemesis force weapon can be replaced with one of the following: ◦ 1 incinerator and 1 close combat weapon ◦ 1 psilencer and 1 close combat weapon ◦ 1 psycannon and 1 close combat weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "160"
        },
        {
          "models": "10",
          "cost": "320"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Personal Teleporters",
            "description": "In your Shooting phase, after this unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6\" as if it were your Movement phase. If it does, until the end of the turn, this unit is not eligible to declare a charge."
          }
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
          "sv": "2+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Interceptor Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Incinerator",
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
              "name": "Psilencer",
              "keywords": ["psychic", "sustained hits 1"],
              "range": "24\"",
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
              "name": "Psycannon",
              "keywords": ["psychic"],
              "range": "24\"",
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
              "name": "Nemesis force weapon",
              "keywords": ["psychic"],
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
        "Psyker",
        "Fly",
        "Grenades",
        "Imperium",
        "Interceptor Squad"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "ed70155e-e7bf-5d8f-968f-bd71c2821012",
      "name": "Kaldor Draigo",
      "faction_id": "GK",
      "leader": "This model can be attached to the following units: ■ Brotherhood Terminator Squad ■ Paladin Squad",
      "composition": ["1 Kaldor Draigo – Epic Hero"],
      "loadout": "This model is equipped with: Scourging; storm bolter; the Titansword.",
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
        "core": ["Deep Strike", "Leader"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Untouchable Purity",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 4+ ability against mortal wounds."
          },
          {
            "name": "One With the Warp (Psychic)",
            "description": "Once per battle, when this model’s unit declares a charge in the same turn it was set up as Reinforcements using the Deep Strike ability, add 3 to the Charge roll."
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
          "m": "5\"",
          "t": "5",
          "sv": "2+",
          "w": "7",
          "ld": "6+",
          "oc": "1",
          "name": "Kaldor Draigo"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Scourging",
              "keywords": ["anti-daemon 2+", "ignores cover", "psychic"],
              "range": "18\"",
              "attacks": "3",
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
              "name": "The Titansword",
              "keywords": ["anti-daemon 2+", "psychic"],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "8",
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
        "Psyker",
        "Terminator",
        "Grenades",
        "Imperium",
        "Kaldor Draigo"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "3c7a2d6a-ccc8-5bfc-855e-79dbcff9a034",
      "name": "Land Raider Banisher",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Land Raider Banisher"],
      "loadout": "This model is equipped with: 2 heavy incinerators; twin psycannon; armoured tracks.",
      "wargear": [
        "This model can be equipped with 1 hunter-killer missile.",
        "This model can be equipped with 1 storm bolter.",
        "This model can be equipped with 1 multi-melta."
      ],
      "transport": "This model has a transport capacity of 12 Grey Knights Infantry models. Each Terminator model takes up the space of 2 models.",
      "points": [
        {
          "models": "1",
          "cost": "255"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6"],
        "faction": [],
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
          "name": "Land Raider Banisher"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Heavy incinerator",
              "keywords": ["ignores cover", "torrent"],
              "range": "18\"",
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
              "name": "Twin psycannon",
              "keywords": ["psychic", "sustained hits 1", "twin-linked"],
              "range": "24\"",
              "attacks": "3",
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
        "Imperium",
        "Land Raider",
        "Banisher"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "ae017e4f-88b0-5a26-8fc3-52b3865bcd12",
      "name": "Nemesis Dreadknight",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Nemesis Dreadknight"],
      "loadout": "This model is equipped with: dreadfists.",
      "wargear": [
        "This model’s dreadfists can be replaced with one of the following: ◦ 1 Nemesis daemon greathammer ◦ 1 Nemesis greatsword",
        "This model can be equipped with up to two of the following, but cannot take duplicates: ◦ 1 gatling psilencer ◦ 1 heavy incinerator ◦ 1 heavy psycannon"
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
        "core": ["Deadly Demise D3", "Deep Strike"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Empyric Reprisal (Psychic)",
            "description": "This model is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back."
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
          "sv": "2+",
          "w": "13",
          "ld": "6+",
          "oc": "4",
          "name": "Nemesis Dreadknight"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Gatling psilencer",
              "keywords": ["psychic", "sustained hits 1"],
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
              "name": "Heavy incinerator",
              "keywords": ["ignores cover", "torrent"],
              "range": "18\"",
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
              "name": "Heavy psycannon",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "10",
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
              "name": "Dreadfists",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Nemesis daemon greathammer",
              "keywords": ["psychic"],
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
              "name": "Nemesis greatsword – strike",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            },
            {
              "name": "Nemesis greatsword – sweep",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "10",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Psyker",
        "Imperium",
        "Nemesis Dreadknight"
      ],
      "factions": ["Grey Knights"]
    },
    {
      "id": "d34447ce-96dc-5248-8b8c-067b4951590d",
      "name": "Paladin Squad",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Paragon", "4-9 Paladins"],
      "loadout": "Every model is equipped with: storm bolter; Nemesis force weapon.",
      "wargear": [
        "For every 5 models in this unit, up to 2 Paladins can each have their storm bolter replaced with one of the following: ◦ 1 incinerator ◦ 1 psilencer ◦ 1 psycannon",
        "1 Paladin equipped with a storm bolter and Nemesis force weapon can be equipped with 1 Ancient’s banner. That model’s storm bolter can be replaced with one of the following: ◦ 1 incinerator ◦ 1 psilencer ◦ 1 psycannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "255"
        },
        {
          "models": "10",
          "cost": "510"
        }
      ],
      "abilities": {
        "wargear": [
          {
            "name": "Ancient’s Banner",
            "description": "Add 1 to the Objective Control characteristic of models in the bearer’s unit."
          }
        ],
        "core": ["Deep Strike"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Inner Fortitude (Psychic)",
            "description": "Each time an attack targets this unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of this unit, subtract 1 from the Wound roll."
          }
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
          "name": "Paladin Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Incinerator",
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
              "name": "Psilencer",
              "keywords": ["psychic", "sustained hits 1"],
              "range": "24\"",
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
              "name": "Psycannon",
              "keywords": ["psychic"],
              "range": "24\"",
              "attacks": "3",
              "skill": "2+",
              "strength": "8",
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
              "name": "Nemesis force weapon",
              "keywords": ["psychic"],
              "range": "Melee",
              "attacks": "4",
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
        "Psyker",
        "Terminator",
        "Grenades",
        "Imperium",
        "Paladin Squad"
      ],
      "factions": ["Grey Knights"],
      "ledBy": [
        "Brother-captain",
        "Brother-captain Stern",
        "Brotherhood Chaplain",
        "Brotherhood Librarian",
        "Grand Master",
        "Grand Master Voldus",
        "Kaldor Draigo"
      ]
    },
    {
      "id": "60cb3f02-e210-5d88-9594-349d03bb941a",
      "name": "Purgation Squad",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Purgator Justicar", "4-9 Purgators"],
      "loadout": "Every model is equipped with: storm bolter; Nemesis force weapon.",
      "wargear": [
        "Up to 4 Purgators can each have their storm bolter and Nemesis force weapon replaced with one of the following: ◦ 1 incinerator and 1 close combat weapon ◦ 1 psilencer and 1 close combat weapon ◦ 1 psycannon and 1 close combat weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "165"
        },
        {
          "models": "10",
          "cost": "275"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Astral Aim (Psychic)",
            "description": "In your Shooting phase, ranged weapons equipped by models in this unit have the [INDIRECT FIRE] ability, provided the target of that weapon is visible to one or more other friendly Grey Knights Psyker units."
          }
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
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Purgation Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Incinerator",
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
              "name": "Psilencer",
              "keywords": ["psychic", "sustained hits 1"],
              "range": "24\"",
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
              "name": "Psycannon",
              "keywords": ["psychic"],
              "range": "24\"",
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
              "name": "Nemesis force weapon",
              "keywords": ["psychic"],
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
        "Psyker",
        "Grenades",
        "Imperium",
        "Purgation Squad"
      ],
      "factions": ["Grey Knights"],
      "ledBy": ["Brotherhood Champion"]
    },
    {
      "id": "d10cbe49-479b-5d84-b030-e7a1ed0bcfb0",
      "name": "Purifier Squad",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Knight of the Flame", "4-9 Purifiers"],
      "loadout": "Every model is equipped with: Purifying Flame; storm bolter; Nemesis force weapon.",
      "wargear": [
        "For every 5 models in this unit, up to 2 Purifiers can each have their storm bolter and Nemesis force weapon replaced with one of the following: ◦ 1 incinerator and 1 close combat weapon ◦ 1 psilencer and 1 close combat weapon ◦ 1 psycannon and 1 close combat weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "150"
        },
        {
          "models": "10",
          "cost": "300"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike"],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Sanctity of Purpose",
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
          "m": "6\"",
          "t": "4",
          "sv": "2+",
          "w": "2",
          "ld": "6+",
          "oc": "1",
          "name": "Purifier Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Incinerator",
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
              "name": "Psilencer",
              "keywords": ["psychic", "sustained hits 1"],
              "range": "24\"",
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
              "name": "Psycannon",
              "keywords": ["psychic"],
              "range": "24\"",
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
              "name": "Purifying Flame",
              "keywords": ["anti-infantry 2+", "ignores cover", "psychic"],
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
              "name": "Nemesis force weapon",
              "keywords": ["psychic"],
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
        "Psyker",
        "Grenades",
        "Imperium",
        "Purifier Squad"
      ],
      "factions": ["Grey Knights"],
      "ledBy": ["Castellan Crowe"]
    },
    {
      "id": "98f32d4e-f2e4-5b8a-a274-bf31c4467a77",
      "name": "Servitors",
      "faction_id": "GK",
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
        "faction": [],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Mindlock",
            "description": "While a Brotherhood Techmarine model is leading this unit, improve the Ballistic Skill and Weapon Skill characteristics of ranged and melee weapons equipped by Servitor models in this unit by 1."
          },
          {
            "name": "Retinue",
            "description": "While a Brotherhood Techmarine model is leading this unit, models in this unit have the Deep Strike and Teleport Assault abilities."
          }
        ],
        "special": [
          {
            "name": "SERVITOR RETINUE",
            "description": "At the start of the Declare Battle Formations step, this unit can join one other unit from your army that is being led by a Brotherhood Techmarine (a unit cannot have more than one Servitors unit joined to it). If it does, until the end of the battle, every model in this unit counts as being part of that Bodyguard unit, and that Bodyguard unit’s Starting Strength is increased accordingly."
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
              "name": "Servitor’s servo-arm",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "5+",
              "strength": "6",
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
      "factions": ["Grey Knights"],
      "ledBy": ["Brotherhood Techmarine"]
    },
    {
      "id": "c5e2fdc0-70ae-50af-907a-6c8c4714c95b",
      "name": "Strike Squad",
      "faction_id": "GK",
      "leader": "",
      "composition": ["1 Justicar", "4-9 Grey Knights"],
      "loadout": "Every model is equipped with: storm bolter; Nemesis force weapon.",
      "wargear": [
        "For every 5 models in this unit, 1 Grey Knight’s storm bolter and Nemesis force weapon can be replaced with one of the following: ◦ 1 incinerator and 1 close combat weapon ◦ 1 psilencer and 1 close combat weapon ◦ 1 psycannon and 1 close combat weapon"
      ],
      "transport": "",
      "points": [
        {
          "models": "5",
          "cost": "135"
        },
        {
          "models": "10",
          "cost": "270"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deep Strike", "Scouts 6\""],
        "faction": ["Teleport Assault"],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Sanctifying Ritual (Psychic)",
            "description": "If you control an objective marker at the end of your Command phase and this unit is within range of that objective marker, that objective marker remains under you control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn."
          }
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
          "w": "2",
          "ld": "6+",
          "oc": "2",
          "name": "Strike Squad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Incinerator",
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
              "name": "Psilencer",
              "keywords": ["psychic", "sustained hits 1"],
              "range": "24\"",
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
              "name": "Psycannon",
              "keywords": ["psychic"],
              "range": "24\"",
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
              "name": "Nemesis force weapon",
              "keywords": ["psychic"],
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
        "Battleline",
        "Psyker",
        "Grenades",
        "Imperium",
        "Strike Squad"
      ],
      "factions": ["Grey Knights"],
      "ledBy": ["Brotherhood Champion", "Brotherhood Techmarine"]
    }
  ],
  "colours": {
    "banner": "#325b68",
    "header": "#4a5e67"
  }
}