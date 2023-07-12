window.data = window.data || {};
window.data.AT = {
  "id": "AT",
  "link": "https://game-datacards.eu",
  "name": "Adeptus Titanicus",
  "is_subfaction": false,
  "parent_id": "",
  "datasheets": [
    {
      "id": "ce0d2309-7035-5974-8965-58466f8f5ff1",
      "name": "Reaver Titan",
      "faction_id": "AT",
      "leader": "",
      "composition": ["1 Reaver Titan"],
      "loadout": "This model is equipped with: Reaver apocalypse launcher; Reaver gatling blaster; Reaver laser blaster; Reaver feet.",
      "wargear": [
        "This model’s Reaver gatling blaster can be replaced with one of the following: ◦ 1 Reaver laser blaster ◦ 1 Reaver melta cannon ◦ 1 Reaver volcano cannon ◦ 1 Reaver power fist",
        "This model’s Reaver laser blaster can be replaced with one of the following: ◦ 1 Reaver gatling blaster ◦ 1 Reaver melta cannon ◦ 1 Reaver volcano cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "2200"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+6"],
        "faction": ["Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "Against ranged attacks only"
        },
        "other": [
          {
            "name": "Striding Colossus",
            "description": "Each time you target this model with a Stratagem, you must spend three times that Stratagem’s stated CP cost to do so."
          },
          {
            "name": "God-machine",
            "description": "This model is eligible to shoot and declare a charge in a turn in which it Fell Back."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-20 WOUNDS REMAINING",
          "description": "While this model has 1-20 wounds remaining, subtract 10 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "14",
          "sv": "2+",
          "w": "60",
          "ld": "6+",
          "oc": "20",
          "name": "Reaver Titan"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Reaver apocalypse launcher",
              "keywords": ["blast", "indirect fire"],
              "range": "200\"",
              "attacks": "3D6",
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
              "name": "Reaver gatling blaster",
              "keywords": ["sustained hits 1"],
              "range": "72\"",
              "attacks": "12",
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
              "name": "Reaver laser blaster",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "8",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Reaver melta cannon",
              "keywords": ["blast", "melta 4"],
              "range": "48\"",
              "attacks": "D6+2",
              "skill": "3+",
              "strength": "13",
              "ap": "-4",
              "damage": "6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Reaver volcano cannon",
              "keywords": ["blast", "heavy"],
              "range": "120\"",
              "attacks": "D3+1",
              "skill": "3+",
              "strength": "24",
              "ap": "-5",
              "damage": "14"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Reaver feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "4"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Reaver power fist – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "20",
              "ap": "-4",
              "damage": "14"
            },
            {
              "name": "Reaver power fist – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "6"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Imperium",
        "Reaver Titan"
      ],
      "factions": ["Adeptus Titanicus"]
    },
    {
      "id": "3f573207-e437-525c-ac92-3c27ae59fcf7",
      "name": "Warbringer Nemesis Titan",
      "faction_id": "AT",
      "leader": "",
      "composition": ["1 Warbringer Nemesis Titan"],
      "loadout": "This model is equipped with: 2 anvillus defence batteries; 3 ardex-defensor maulers; Nemesis quake cannon; Reaver gatling blaster; Reaver laser blaster; Nemesis feet.",
      "wargear": [
        "This model’s Nemesis quake cannon can be replaced with 1 Nemesis volcano cannon.",
        "This model’s Reaver gatling blaster can be replaced with one of the following: ◦ 1 Reaver laser blaster ◦ 1 Reaver melta cannon ◦ 1 Reaver volcano cannon",
        "This model’s Reaver laser blaster can be replaced with one of the following: ◦ 1 Reaver gatling blaster ◦ 1 Reaver melta cannon ◦ 1 Reaver volcano cannon"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "2600"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise D6+6"],
        "faction": ["Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "Against ranged attacks only"
        },
        "other": [
          {
            "name": "Striding Colossus",
            "description": "Each time you target this model with a Stratagem, you must spend three times that Stratagem’s stated CP cost to do so."
          },
          {
            "name": "Titanic Fire Support",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. Until the end of the phase, each time a friendly Imperium model makes an attack that targets that enemy unit, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 1."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-26 WOUNDS REMAINING",
          "description": "While this model has 1-26 wounds remaining, subtract 10 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "12\"",
          "t": "14",
          "sv": "2+",
          "w": "80",
          "ld": "6+",
          "oc": "20",
          "name": "Warbringer Nemesis Titan"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Anvillus defence battery",
              "keywords": ["anti-fly 4+"],
              "range": "72\"",
              "attacks": "8",
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
              "name": "Ardex-defensor mauler",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Nemesis quake cannon",
              "keywords": ["blast", "indirect fire"],
              "range": "480\"",
              "attacks": "D6+6",
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
              "name": "Nemesis volcano cannon",
              "keywords": ["blast"],
              "range": "120\"",
              "attacks": "D3+3",
              "skill": "3+",
              "strength": "24",
              "ap": "-5",
              "damage": "14"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Reaver gatling blaster",
              "keywords": ["sustained hits 1"],
              "range": "72\"",
              "attacks": "12",
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
              "name": "Reaver laser blaster",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "8",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Reaver melta cannon",
              "keywords": ["blast", "melta 4"],
              "range": "48\"",
              "attacks": "D6+2",
              "skill": "3+",
              "strength": "13",
              "ap": "-4",
              "damage": "6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Reaver volcano cannon",
              "keywords": ["blast", "heavy"],
              "range": "120\"",
              "attacks": "D3+1",
              "skill": "3+",
              "strength": "24",
              "ap": "-5",
              "damage": "14"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Nemesis feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "4"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Imperium",
        "Warbringer Nemesis Titan"
      ],
      "factions": ["Adeptus Titanicus"]
    },
    {
      "id": "14c695a9-93a2-5d2a-8c6f-768fa81cf1f3",
      "name": "Warhound Titan",
      "faction_id": "AT",
      "leader": "",
      "composition": ["1 Warhound Titan"],
      "loadout": "This model is equipped with: Warhound plasma blastgun; Warhound vulcan mega-bolter; Warhound feet.",
      "wargear": [
        "This model’s Warhound plasma blastgun can be replaced with one of the following: ◦ 1 Warhound inferno gun ◦ 1 Warhound turbo-laser destructor ◦  1 Warhound vulcan mega-bolter",
        "This model’s Warhound vulcan mega-bolter can be replaced with one of the following: ◦ 1 Warhound inferno gun ◦ 1 Warhound plasma blastgun ◦ 1 Warhound turbo-laser destructor"
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
        "faction": ["Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "Against ranged attacks only"
        },
        "other": [
          {
            "name": "Striding Colossus",
            "description": "Each time you target this model with a Stratagem, you must spend twice that Stratagem’s stated CP cost to do so."
          },
          {
            "name": "Flank Speed",
            "description": "Each time this model Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 8\" to the Move characteristic of this model."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-13 WOUNDS REMAINING",
          "description": "While this model has 1-13 wounds remaining, subtract 8 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "14\"",
          "t": "13",
          "sv": "2+",
          "w": "40",
          "ld": "6+",
          "oc": "16",
          "name": "Warhound Titan"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Warhound inferno gun",
              "keywords": ["ignores cover", "torrent"],
              "range": "24\"",
              "attacks": "3D6",
              "skill": "N/A",
              "strength": "7",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Warhound plasma blastgun – standard",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "2D6+3",
              "skill": "3+",
              "strength": "9",
              "ap": "-3",
              "damage": "4"
            },
            {
              "name": "Warhound plasma blastgun – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "72\"",
              "attacks": "2D6+3",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "5"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Warhound turbo-laser destructor",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "D3+3",
              "skill": "3+",
              "strength": "20",
              "ap": "-3",
              "damage": "2D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Warhound vulcan mega-bolter",
              "keywords": ["sustained hits 1"],
              "range": "48\"",
              "attacks": "20",
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
              "name": "Warhound feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "8",
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
        "Imperium",
        "Warhound Titan"
      ],
      "factions": ["Adeptus Titanicus"]
    },
    {
      "id": "36df9ba7-d684-526e-a4a6-78a04115d575",
      "name": "Warlord Titan",
      "faction_id": "AT",
      "leader": "",
      "composition": ["1 Warlord Titan"],
      "loadout": "This model is equipped with: 2 apocalypse launchers; 2 ardex-defensor lascannons; 2 ardex-defensor maulers; macro gatling blaster; arioch power claw; Warlord feet.",
      "wargear": [
        "This model’s 2 apocalypse launchers can be replaced with 2 laser blasters.",
        "This model’s arioch power claw can be replaced with one of the following: ◦ 1 belicosa volcano cannon ◦ 1 macro gatling blaster ◦ 1 mori quake cannon ◦ 1 sunfury plasma annihilator",
        "This model’s macro gatling blaster can be replaced with one of the following: ◦ 1 arioch power claw ◦ 1 belicosa volcano cannon ◦ 1 mori quake cannon ◦ 1 sunfury plasma annihilator"
      ],
      "transport": "",
      "points": [
        {
          "models": "1",
          "cost": "3500"
        }
      ],
      "abilities": {
        "wargear": [],
        "core": ["Deadly Demise 2D6+6"],
        "faction": ["Super-heavy Walker"],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": "Against ranged attacks only"
        },
        "other": [
          {
            "name": "Striding Colossus",
            "description": "Each time you target this model with a Stratagem, you must spend four times that Stratagem’s stated CP cost to do so."
          },
          {
            "name": "Wrath of the Omnissiah",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks. That unit must take a Battle-shock test."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-33 WOUNDS REMAINING",
          "description": "While this model has 1-33 wounds remaining, subtract 15 from this model’s Objective Control characteristic and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "10\"",
          "t": "16",
          "sv": "2+",
          "w": "100",
          "ld": "6+",
          "oc": "30",
          "name": "Warlord Titan"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Apocalypse launcher",
              "keywords": ["blast", "indirect fire"],
              "range": "200\"",
              "attacks": "20",
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
              "name": "Ardex-defensor lascannon",
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
              "name": "Ardex-defensor mauler",
              "keywords": [],
              "range": "36\"",
              "attacks": "6",
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
              "name": "Arioch power claw",
              "keywords": ["sustained hits 1"],
              "range": "48\"",
              "attacks": "20",
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
              "name": "Belicosa volcano cannon",
              "keywords": ["blast"],
              "range": "120\"",
              "attacks": "D3+3",
              "skill": "3+",
              "strength": "32",
              "ap": "-5",
              "damage": "18"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Laser blaster",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "6",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "D6+3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Macro gatling blaster",
              "keywords": ["sustained hits 1"],
              "range": "100\"",
              "attacks": "30",
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
              "name": "Mori quake cannon",
              "keywords": ["blast", "ignores cover"],
              "range": "280\"",
              "attacks": "3D6",
              "skill": "3+",
              "strength": "16",
              "ap": "-4",
              "damage": "6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Sunfury plasma annihilator – standard",
              "keywords": ["blast"],
              "range": "72\"",
              "attacks": "2D6+6",
              "skill": "3+",
              "strength": "10",
              "ap": "-3",
              "damage": "5"
            },
            {
              "name": "Sunfury plasma annihilator – supercharge",
              "keywords": ["blast", "hazardous"],
              "range": "72\"",
              "attacks": "2D6+6",
              "skill": "3+",
              "strength": "12",
              "ap": "-3",
              "damage": "8"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Arioch power claw – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "20",
              "ap": "-4",
              "damage": "24"
            },
            {
              "name": "Arioch power claw – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "8"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Warlord feet",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "4"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Walker",
        "Titanic",
        "Towering",
        "Imperium",
        "Warlord Titan"
      ],
      "factions": ["Adeptus Titanicus"]
    }
  ],
  "colours": {
    "banner": "#092135",
    "header": "#4b6262"
  }
}