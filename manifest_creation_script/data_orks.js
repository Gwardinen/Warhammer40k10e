window.data = window.data || {};
window.data.ORK = {
  "id": "ORK",
  "link": "https://game-datacards.eu",
  "name": "Orks",
  "datasheets": [
    {
      "id": "acda7dbd-3e08-583d-a83d-5085f32f80ee",
      "name": "Battlewagon",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Battlewagon"
      ],
      "loadout": "This model is equipped with: tracks and wheels.",
      "wargear": [
        "This model can be equipped with one of the following: ◦ 1 kannon ◦ 1 killkannon ◦ 1 zzap gun",
        "This model can be equipped with: ◦ 1 lobba",
        "This model can be equipped with up to 4 big shootas.",
        "This model’s tracks and wheels can be replaced with 1 deff rolla.",
        "This model can be equipped with any of the following: ◦ 1 ’ard case ◦ 1 grabbin’ klaw ◦ 1 wreckin’ ball"
      ],
      "transport": "This model has a transport capacity of 22 Orks Infantry models. If this model is equipped with a killkannon, it has a transport capacity of 12 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. If this model is not equipped with an ’ard case, kannon, killkannon or zzap gun, it can transport 1 Ghazghkull Thraka. Ghazghkull Thraka takes up the space of 18 models.",
      "abilities": {
        "wargear": [
          {
            "name": "’Ard Case",
            "description": "Add 2 to the bearer’s Toughness characteristic, but it no longer has the Firing Deck ability."
          }
        ],
        "core": [
          "Deadly Demise D6",
          "Firing Deck 22"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Ramshackle but Rugged",
            "description": "Each time an attack is allocated to this model, worsen the Armour Penetration characteristic of that attack by 1."
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
          "w": "16",
          "ld": "7+",
          "oc": "5",
          "name": "Battlewagon"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Kannon – frag",
              "keywords": [
                "blast"
              ],
              "range": "36\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Kannon – shell",
              "keywords": [],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Killkannon",
              "keywords": [],
              "range": "24\"",
              "attacks": "D6+3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Lobba",
              "keywords": [
                "blast",
                "indirect fire"
              ],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Zzap gun",
              "keywords": [
                "devastating wounds"
              ],
              "range": "36\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "2D6",
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
              "name": "Deff rolla",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "9",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Grabbin’ klaw",
              "keywords": [
                "extra attacks"
              ],
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
              "name": "Tracks and wheels",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "4+",
              "strength": "8",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Wreckin’ ball",
              "keywords": [
                "extra attacks"
              ],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "0",
              "damage": "D6"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Battlewagon"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "9d13f644-86ae-568e-9f34-97e50e1cb30d",
      "name": "Beast Snagga Boyz",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Beast Snagga Nob",
        "9-19 Beast Snagga Boyz"
      ],
      "loadout": "The Beast Snagga Nob is equipped with: slugga; power snappa. Every Beast Snagga Boy is equipped with: slugga; choppa.",
      "wargear": [
        "For every 10 models in this unit, 1 Beast Snagga Boy’s slugga and choppa can be replaced with 1 thump gun and 1 close combat weapon."
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Feel No Pain 6+"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Monster Hunters",
            "description": "Each time a model in this unit makes an attack that targets a Monster or Vehicle unit, you can re-roll the Hit roll."
          }
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
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "BEAST SNAGGA BOY"
        },
        {
          "m": "6\"",
          "t": "5",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "BEAST SNAGGA NOB"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thump gun",
              "keywords": [
                "blast"
              ],
              "range": "18\"",
              "attacks": "D3",
              "skill": "5+",
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
              "name": "Choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
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
              "name": "Power snappa",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Mob",
        "Battleline",
        "Beast Snagga",
        "Beast Snagga Boyz"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "6acd203a-43b6-5fd6-9737-949144462427",
      "name": "Beastboss",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Beast Snagga Boyz",
      "composition": [
        "1 Beastboss"
      ],
      "loadout": "This model is equipped with: shoota; beastchoppa; Beast Snagga klaw.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Feel No Pain 6+",
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Beastboss",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll."
          },
          {
            "name": "Beastly Rage",
            "description": "Each time this model makes a Charge move, until the end of the turn, melee weapons it is equipped with have the [DEVASTATING WOUNDS] ability."
          }
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
          "w": "5",
          "ld": "6+",
          "oc": "1",
          "name": "Beastboss"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Shoota",
              "keywords": [
                "rapid fire 1"
              ],
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
              "name": "Beast Snagga klaw",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+"
              ],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Beastchoppa",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+"
              ],
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
        "Beast Snagga",
        "Warboss",
        "Beastboss"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "3136894e-024e-54e7-939f-a249b081c398",
      "name": "Beastboss On Squigosaur",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Beastboss on Squigosaur"
      ],
      "loadout": "This model is equipped with: slugga; beastchoppa; Squigosaur’s jaws.",
      "wargear": [
        "This model can be equipped with 1 thump gun."
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 1",
          "Feel No Pain 4+"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "’Ere We Go (Aura)",
            "description": "While a friendly Beast Snagga unit is within 6\" of this model, you can re-roll Charge rolls made for that unit."
          },
          {
            "name": "Single-minded Predator",
            "description": "You can target this model with the Heroic Intervention Stratagem for 1CP, and can do so even if you have already targeted a different unit with that Stratagem this phase."
          }
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
          "sv": "3+",
          "w": "9",
          "ld": "6+",
          "oc": "3",
          "name": "Beastboss On Squigosaur"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Thump gun",
              "keywords": [
                "blast"
              ],
              "range": "18\"",
              "attacks": "D3",
              "skill": "5+",
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
              "name": "Beastchoppa",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+"
              ],
              "range": "Melee",
              "attacks": "6",
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
              "name": "Squigosaur’s jaws",
              "keywords": [
                "devastating wounds",
                "extra attacks"
              ],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "7",
              "ap": "-2",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Beast Snagga",
        "Beastboss on Squigosaur"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "adceb48a-0005-5558-a460-289abae88725",
      "name": "Big Mek In Mega Armour",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Meganobz",
      "composition": [
        "1 Big Mek in Mega Armour"
      ],
      "loadout": "This model is equipped with: kustom-mega blaster; power klaw.",
      "wargear": [
        "This model’s kustom-mega blasta can be replaced with one of the following: ◦ 1 killsaw ◦ 1 kombi-weapon ◦ 1 kustom shoota",
        "This model can be equipped with one of the following: ◦ 1 tellyport blasta ◦ 1 kustom force field",
        "This model can be equipped with 1 grot oiler."
      ],
      "transport": "",
      "abilities": {
        "wargear": [
          {
            "name": "Kustom Force Field",
            "description": "While the bearer is leading a unit, models in that unit have a 4+ invulnerable save against ranged attacks."
          },
          {
            "name": "Grot Oiler",
            "description": "Once per battle, at the end of your Movement phase, one model in the bearer’s unit regains D3 lost wounds."
          }
        ],
        "core": [
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "More Dakka",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1."
          },
          {
            "name": "Fix Dat Armour Up",
            "description": "While this model is leading a unit, in your Command phase, you can return 1 destroyed Bodyguard model to that unit."
          }
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
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Big Mek In Mega Armour"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Kustom mega-blasta",
              "keywords": [
                "hazardous"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Kustom shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Tellyport blasta",
              "keywords": [
                "blast"
              ],
              "range": "12\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "8",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        "Character",
        "Big Mek in Mega Armour"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "675b6df7-89da-50b0-a4c2-ab52cd62b829",
      "name": "Big Mek With Kustom Force Field",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Burna Boyz ■ Tankbustas ■ Lootas ■ Nobz",
      "composition": [
        "1 Big Mek with Kustom Force Field"
      ],
      "loadout": "This model is equipped with: slugga; choppa.",
      "wargear": [
        "This model can be equipped with 1 grot helper."
      ],
      "transport": "",
      "abilities": {
        "wargear": [
          {
            "name": "Grot Helper",
            "description": "Once per battle, the bearer can overcharge its kustom force field one additional time."
          }
        ],
        "core": [
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "More Dakka",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1."
          },
          {
            "name": "Kustom Force Field",
            "description": "While this model is leading a unit, models in that unit have a 5+ invulnerable save against ranged attacks. Once per battle, at the start of any phase, this model can overcharge its kustom force field. If it does, until the end of the phase, this invulnerable save is improved to 4+."
          }
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
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Big Mek With Kustom Force Field"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Choppa",
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
        "Character",
        "Grenades",
        "Big Mek with Kustom Force Field"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "ca21b913-eb23-5dd4-967e-aef57fcb4dc7",
      "name": "Big Mek With Shokk Attack Gun",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Lootaz ■ Mek Gunz",
      "composition": [
        "1 Big Mek with Shokk Attack Gun"
      ],
      "loadout": "This model is equipped with: close combat weapon, shokk attack gun.",
      "wargear": [
        "This model can be equipped with 1 grot assistant."
      ],
      "transport": "",
      "abilities": {
        "wargear": [
          {
            "name": "Grot Assistant",
            "description": "Once per battle, after rolling to determine how many attacks the bearer’s shokk attack gun makes, you can re-roll that dice."
          }
        ],
        "core": [
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "More Dakka",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, re-roll a Hit roll of 1."
          },
          {
            "name": "Deranged Snotling Assault",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks; that unit must take a Battle-shock test."
          }
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
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Big Mek With Shokk Attack Gun"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Shokk attack gun",
              "keywords": [
                "blast",
                "heavy"
              ],
              "range": "60\"",
              "attacks": "D6+1",
              "skill": "5+",
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
              "strength": "5",
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
        "Big Mek with Shokk Attack Gun"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "60ac82b0-fd1d-599d-8484-c5e926301cfe",
      "name": "Big’ed Bossbunka",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Big’ed Bossbunka"
      ],
      "loadout": "This model is equipped with: big shoota; Gaze of Gork.",
      "wargear": [
        "This model can be equipped with up to 3 additional big shootas."
      ],
      "transport": "This model has a transport capacity of 11 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models.",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D3",
          "Firing Deck 11"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Ramshackle Cover",
            "description": "Each time a ranged attack is allocated to a model, if that model is not fully visible to every model in the attacking unit because of this Fortification, that model has the Benefit of Cover against that attack."
          },
          {
            "name": "Shoutin’ Pole (Aura)",
            "description": "While a friendly Orks unit is within 6\" of this Fortification, improve the Leadership characteristic of models in that unit by 1."
          },
          {
            "name": "Fortification",
            "description": "While an enemy unit is only within Engagement Range of one or more Fortifications from your army: ■  That unit can still be selected as the target of ranged attacks, but each time such an attack is made, unless it is made with a Pistol, subtract 1 from the Hit roll. ■  Models in that unit do not need to take Desperate Escape tests due to Falling Back while Battle-shocked, except for those that will move over enemy models when doing so."
          }
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
          "w": "12",
          "ld": "7+",
          "oc": "0",
          "name": "Big’ed Bossbunka"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Gaze of Gork – glare",
              "keywords": [
                "blast",
                "sustained hits d3"
              ],
              "range": "24\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            },
            {
              "name": "Gaze of Gork – squint",
              "keywords": [
                "sustained hits d3"
              ],
              "range": "18\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "12",
              "ap": "-4",
              "damage": "3"
            }
          ]
        }
      ],
      "meleeWeapons": [],
      "keywords": [
        "Fortification",
        "Vehicle",
        "Transport",
        "Big’ed Bossbunka"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "0ec6442e-cdf6-5669-b5ab-57cccdf4a27f",
      "name": "Blitza-bommer",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Blitza-bommer"
      ],
      "loadout": "This model is equipped with: big shoota; twin supa-shoota; armoured hull.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D3"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Boom Bomb",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6: on a 4+, that unit suffers D6 mortal wounds."
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
          "ld": "7+",
          "oc": "0",
          "name": "Blitza-bommer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin supa-shoota",
              "keywords": [
                "rapid fire 2",
                "sustained hits 1",
                "twin-linked"
              ],
              "range": "36\"",
              "attacks": "4",
              "skill": "5+",
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
        "Blitza-bommer"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "0c057420-5a2c-598e-a2ce-50c72fff23de",
      "name": "Boomdakka Snazzwagon",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Boomdakka Snazzwagon"
      ],
      "loadout": "This model is equipped with: big shoota; grot blasta; Mek speshul; spiked wheels.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 1"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Dust Trails (Aura)",
            "description": "While an enemy unit is within 6\" of this model, each time a model in that unit makes an attack, subtract 1 from the Hit roll."
          }
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
          "t": "7",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Boomdakka Snazzwagon"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Grot blasta",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Mek speshul",
              "keywords": [
                "assault",
                "rapid fire 4",
                "sustained hits 1"
              ],
              "range": "24\"",
              "attacks": "12",
              "skill": "5+",
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
              "name": "Spiked wheels",
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
      "keywords": [
        "Vehicle",
        "Grenades",
        "Boomdakka Snazzwagon"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "68d7d3de-7926-54df-8238-c1ed05b23fef",
      "name": "Boss Snikrot",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Kommandos",
      "composition": [
        "1 Boss Snikrot – Epic Hero"
      ],
      "loadout": "This model is equipped with: slugga; Mork’s Teeth.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Infiltrators",
          "Leader",
          "Stealth"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Red Skull Kommandos",
            "description": "While this model is leading a unit, models in that unit have the Benefit of Cover."
          },
          {
            "name": "Kunnin’ Infiltrator",
            "description": "Once per battle, in your Movement phase, instead of making a Normal move with this model’s unit, you can remove it from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models."
          }
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
          "sv": "5+",
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Boss Snikrot"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Mork’s Teeth",
              "keywords": [
                "precision",
                "twin-linked"
              ],
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
        "Grenades",
        "Epic Hero",
        "Boss Snikrot"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "9b4c638a-643c-532d-b632-31330c3e0f99",
      "name": "Boss Zagstruk",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Stormboyz",
      "composition": [
        "1 Boss Zagstruk – Epic Hero"
      ],
      "loadout": "This model is equipped with: Da Vulcha’s Klaws and choppa; slugga.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deep Strike",
          "Feel No Pain 6+",
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Drill Boss",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll."
          },
          {
            "name": "Plummeting Descent",
            "description": "You can re-roll Charge rolls made for this model’s unit in a turn in which it was set up on the battlefield from Reserves."
          }
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
          "ld": "6+",
          "oc": "1",
          "name": "Boss Zagstruk"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Da Vulcha’s Klaws and choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
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
        "Jump Pack",
        "Fly",
        "Character",
        "Epic Hero",
        "Boss Zagstruk"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "126f5eb6-5c28-57fb-a570-21a60a3d85f0",
      "name": "Boyz",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Boss Nob",
        "9-19 Boyz"
      ],
      "loadout": "The Boss Nob is equipped with: slugga; big choppa. Every Boy is equipped with: slugga; choppa.",
      "wargear": [
        "The Boss Nob’s big choppa can be replaced with 1 power klaw.",
        "The Boss Nob’s big choppa and slugga can be replaced with 1 kombi-weapon and 1 close combat weapon.",
        "Any number of Boyz can each have their slugga and choppa replaced with 1 shoota and 1 close combat weapon.",
        "For every 10 models in this unit, 1 Boy’s choppa and slugga can be replaced with one of the following: ◦ 1 big shoota and 1 close combat weapon ◦ 1 rokkit launcha and 1 close combat weapon"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Breakin’ Heads",
            "description": "While a Warboss model is leading this unit, in your Command phase, the first time a Battle-shock test is failed for this unit that phase, if it is within range of an objective marker, you can choose to break some heads. If you do, 1 Bodyguard model in this unit is destroyed and you can re-roll that test."
          }
        ],
        "special": [
          {
            "name": "BODYGUARD",
            "description": "If this unit has a Starting Strength of 20, you can attach up to two Leader units to it instead of one (but only if one of those is a Warboss model). If you do, and this unit is destroyed, the Leader units attached to it become separate units with their original Starting Strengths."
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
          "t": "5",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "2",
          "name": "BOY"
        },
        {
          "m": "6\"",
          "t": "5",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "2",
          "name": "BOSS NOB"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Rokkit launcha",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Shoota",
              "keywords": [
                "rapid fire 1"
              ],
              "range": "18\"",
              "attacks": "2",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Choppa",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Battleline",
        "Mob",
        "Grenades",
        "Boyz"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "aaec3250-022f-5250-8811-fad6216836e7",
      "name": "Burna Boyz",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1-3 Spanners*",
        "4-12 Burna Boyz *  This unit must contain 1 Spanner for every 4 Burna Boyz it contains."
      ],
      "loadout": "Every Spanner is equipped with: close combat weapon; big shoota. Every Burna Boy is equipped with: burna; cuttin’ flames.",
      "wargear": [
        "Any number of Spanners can each have their big shoota replaced with one of the following: ◦ 1 kustom mega-blasta ◦ 1 rokkit launcha"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Pyromaniaks",
            "description": "Each time a model in this unit makes a ranged attack with a burna that targets an enemy unit within 6\", re-roll a Wound roll of 1. If the target of that attack is also within range of an objective marker, you can re-roll the Wound roll instead."
          }
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
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Burna Boyz"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Burna",
              "keywords": [
                "ignores cover",
                "torrent"
              ],
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
              "name": "Kustom mega-blasta",
              "keywords": [
                "hazardous"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Rokkit launcha",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
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
              "name": "Cuttin’ flames",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "4",
              "ap": "-2",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Burna Boyz"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "5a5b64ff-c95d-5b5b-9f3f-db978a1ad4c4",
      "name": "Burna-bommer",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Burna-bommer"
      ],
      "loadout": "This model is equipped with: twin big shoota; twin supa-shoota; armoured hull.",
      "wargear": [
        "This model can be equipped with 1 skorcha missile rack."
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D3"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Burna Bomb",
            "description": "Each time this model ends a Normal move, you can select one enemy unit it moved over during that move. Until the end of the turn, models in that unit cannot have the Benefit of Cover. In addition, roll one D6 for each model in that unit: for each 6, that unit suffers 1 mortal wound."
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
          "ld": "7+",
          "oc": "0",
          "name": "Burna-bommer"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Twin big shoota",
              "keywords": [
                "rapid fire 2",
                "twin-linked"
              ],
              "range": "18\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin supa-shoota",
              "keywords": [
                "rapid fire 2",
                "sustained hits 1",
                "twin-linked"
              ],
              "range": "36\"",
              "attacks": "4",
              "skill": "5+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Skorcha missile rack",
              "keywords": [
                "blast",
                "ignores cover"
              ],
              "range": "36\"",
              "attacks": "2D6",
              "skill": "5+",
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
      "keywords": [
        "Vehicle",
        "Fly",
        "Aircraft",
        "Burna-bommer"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "9640f5b7-a970-5211-b77d-f607db6edf47",
      "name": "Dakkajet",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Dakkajet"
      ],
      "loadout": "This model is equipped with: 2 twin supa-shootas; armoured hull.",
      "wargear": [
        "This model can be equipped with 1 additional twin supa-shoota."
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D3"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Dakkastorm",
            "description": "Each time this model makes a ranged attack, every successful Hit roll scores a Critical Hit."
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
          "ld": "7+",
          "oc": "0",
          "name": "Dakkajet"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Twin supa-shoota",
              "keywords": [
                "rapid fire 2",
                "sustained hits 1",
                "twin-linked"
              ],
              "range": "36\"",
              "attacks": "4",
              "skill": "5+",
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
        "Dakkajet"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "a7a7a663-bd7e-55fc-b41c-6402d2745af4",
      "name": "Deff Dread",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Deff Dread"
      ],
      "loadout": "This model is equipped with: 2 big shootas; 2 dread klaws; stompy feet.",
      "wargear": [
        "This model’s big shootas can each be replaced with one of the following: ◦ 1 dread klaw ◦ 1 kustom-mega blasta ◦ 1 rokkit launcha ◦ 1 skorcha",
        "This model’s dread klaws can each be replaced with one of the following: ◦ 1 big shoota ◦ 1 kustom-mega blasta ◦ 1 rokkit launcha ◦ 1 skorcha"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 1"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Piston-driven Brutality",
            "description": "At the start of the Fight phase, each enemy unit within Engagement Range of one or more units with this ability must take a Battle-shock test."
          }
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
          "ld": "7+",
          "oc": "3",
          "name": "Deff Dread"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Kustom mega-blasta",
              "keywords": [
                "hazardous"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Rokkit launcha",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Skorcha",
              "keywords": [
                "ignores cover",
                "torrent"
              ],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Dread klaw",
              "keywords": [
                "dead choppy"
              ],
              "range": "Melee",
              "attacks": "4",
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
        "Deff Dread"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "76ae3494-a689-5dd3-92e6-99d47032ef82",
      "name": "Deffkilla Wartrike",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Warbikers",
      "composition": [
        "1 Defkilla Wartrike"
      ],
      "loadout": "This model is equipped with: defkilla boomsticks; killajet; snagga klaw.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 1",
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Speedboss",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll."
          },
          {
            "name": "High-octane Fuel",
            "description": "Each time this model’s unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6\" to the Move characteristic of models in this model’s unit."
          }
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
          "sv": "4+",
          "w": "9",
          "ld": "6+",
          "oc": "3",
          "name": "Deffkilla Wartrike"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Deffkilla boomstikks",
              "keywords": [
                "assault"
              ],
              "range": "12\"",
              "attacks": "6",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Killa jet – burna",
              "keywords": [
                "ignores cover",
                "torrent"
              ],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
              "strength": "5",
              "ap": "-1",
              "damage": "1"
            },
            {
              "name": "Killa jet – cutta",
              "keywords": [
                "melta 2"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Snagga klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Warboss",
        "Deffkilla Wartrike"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "99d257a5-ca17-5cdf-96a1-7473031a1259",
      "name": "Deffkoptas",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "3-6 Deffkoptas"
      ],
      "loadout": "Every model is equipped with: kopta rokkits; slugga; spinnin’ blades.",
      "wargear": [
        "For every 3 models in this unit, 1 Deffkopta can have its kopta rokkits replaced with 1 kustom mega-blasta."
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deep Strike"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Deff from Above",
            "description": "Each time this unit ends a Normal move, you can select one enemy unit it moved over during that move and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers 1 mortal wound."
          }
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
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "Deffkoptas"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kopta rokkits",
              "keywords": [
                "blast",
                "twin-linked"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Kustom mega-blasta",
              "keywords": [
                "hazardous"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Spinnin’ blades",
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
        "Vehicle",
        "Fly",
        "Grenades",
        "Deffkoptas"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "2505a4c1-5b1a-55ab-8340-c2a874d71104",
      "name": "Flash Gitz",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Kaptin",
        "4-9 Flash Gitz"
      ],
      "loadout": "Every model is equipped with: snazzgun; choppa.",
      "wargear": [
        "This unit can be equipped with 1 ammo runt."
      ],
      "transport": "",
      "abilities": {
        "wargear": [
          {
            "name": "Ammo Runt",
            "description": "Once per battle, when this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [LETHAL HITS] ability."
          }
        ],
        "core": [],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Gun-crazy Show-offs",
            "description": "Each time a model in this unit targets the closest eligible target with its snazzgun, until the end of the phase, that weapon has an Attacks characteristic of 4."
          }
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
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Flash Gitz"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Snazzgun",
              "keywords": [
                "heavy",
                "sustained hits 1"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Choppa",
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
        "Flash Gitz"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "5eaa496c-6dd6-5387-8308-d5e62f207d0c",
      "name": "Ghazghkull Thraka",
      "faction_id": "ORK",
      "leader": "This unit can be attached to the following unit: ■ Meganobz If this unit’s Bodyguard unit is destroyed, Ghazkghull Thraka and Makari become a single unit with their original Starting Strength.",
      "composition": [
        "1 Ghazghkull Thraka – Epic Hero",
        "1 Makari"
      ],
      "loadout": "Ghazghkull Thraka is equipped with: Mork’s Roar; Gork’s Klaw. Makari is equipped with: Makari’s stabba.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "GHAZGHKULL                          4+",
          "info": ""
        },
        "other": [
          {
            "name": "Prophet of Da Great Waaagh!",
            "description": "While this unit is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll and add 1 to the Wound roll."
          },
          {
            "name": "Ghazghkull’s Waaagh! Banner (Aura)",
            "description": "While a friendly Orks unit is within 12\" of Makari, if you have called a Waaagh! this battle round, melee weapons equipped by models in that unit have the [LETHAL HITS] ability."
          }
        ],
        "special": [
          {
            "name": "SUPREME COMMANDER",
            "description": "If this unit is in your army, its Ghazghkull Thraka model must be your Warlord."
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
          "t": "6",
          "sv": "2+",
          "w": "10",
          "ld": "6+",
          "oc": "4",
          "name": "GHAZGHKULL THRAKA"
        },
        {
          "m": "5\"",
          "t": "6",
          "sv": "7+",
          "w": "1",
          "ld": "8+",
          "oc": "1",
          "name": "MAKARI"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Mork’s Roar",
              "keywords": [
                "rapid fire 4"
              ],
              "range": "36\"",
              "attacks": "12",
              "skill": "5+",
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
              "name": "Gork’s Klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "14",
              "ap": "-3",
              "damage": "4"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Makari’s stabba",
              "keywords": [
                "devastating wounds"
              ],
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
        "Character",
        "Epic Hero",
        "Ghazghkull Thraka"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "4ffe5482-08d8-5c01-bf59-a4bb152fd94e",
      "name": "Gorkanaut",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Gorkanaut"
      ],
      "loadout": "This model is equipped with: deffstorm mega-shoota; 2 rokkit launchas; skorcha; 2 twin big shootas; klaw of Gork.",
      "wargear": [
        "None"
      ],
      "transport": "This model has a transport capacity of 12 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. It cannot transport Ghazghkull Thraka.",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D6"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Clankin’ Forward",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over enemy models (excluding Monster and Vehicle models) and terrain features that are 4\" or less in height as if they were not there."
          },
          {
            "name": "Big an’ Stompy",
            "description": "Each time this model makes a melee attack, if you have called a Waaagh! this battle round, add 1 to the Hit roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from this model’s Objective Control characteristic, and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "12",
          "sv": "3+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Gorkanaut"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Deffstorm mega-shoota",
              "keywords": [
                "rapid fire 10"
              ],
              "range": "36\"",
              "attacks": "20",
              "skill": "5+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Rokkit launcha",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Skorcha",
              "keywords": [
                "ignores cover",
                "torrent"
              ],
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
              "name": "Twin big shoota",
              "keywords": [
                "rapid fire 2",
                "twin-linked"
              ],
              "range": "18\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Klaw of Gork – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
              "skill": "3+",
              "strength": "18",
              "ap": "-3",
              "damage": "6"
            },
            {
              "name": "Klaw of Gork – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "15",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Towering",
        "Walker",
        "Transport",
        "Gorkanaut"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "c137a3eb-f513-5d58-9659-b9ca41e61b6b",
      "name": "Gretchin",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1-2 Runtherds",
        "10-20 Gretchin"
      ],
      "loadout": "Every Runtherd is equipped with: slugga; grot-smacka. Every Gretchin is equipped with: grot blasta; close combat weapon.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Runtherd",
            "description": "While this unit contains one or more Gretchin models, each time a ranged attack targets this unit, Runtherd models in this unit have a Toughness characteristic of 2."
          },
          {
            "name": "Thievin’ Scavengers",
            "description": "At the start of your Command phase, roll one D6 for each objective marker you control that has one or more units from your army with this ability within range of it. If one or more of those rolls is a 4+, you gain 1CP."
          }
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
          "sv": "7+",
          "w": "1",
          "ld": "8+",
          "oc": "2",
          "name": "GRETCHIN"
        },
        {
          "m": "6\"",
          "t": "5*",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "RUNTHERD"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Grot blasta",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "attacks": "1",
              "skill": "5+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Grot-smacka",
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
      "keywords": [
        "Infantry",
        "Gretchin"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "5680837d-12d4-5c28-9b6e-6ceb36083c1c",
      "name": "Hunta Rig",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Hunta Rig"
      ],
      "loadout": "This model is equipped with: ’eavy lobba; stikka kannon; butcha boyz; savage horns and hooves; saw blades.",
      "wargear": [
        "None"
      ],
      "transport": "This model has a transport capacity of 21 Beast Snagga Infantry models.",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D6",
          "Feel No Pain 6+",
          "Firing Deck 21"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Bail Out, Boyz!",
            "description": "If this Transport is destroyed, you can re-roll the dice when determining if a disembarking model’s unit suffers mortal wounds."
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
          "w": "16",
          "ld": "7+",
          "oc": "5",
          "name": "Hunta Rig"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "’Eavy lobba",
              "keywords": [
                "blast",
                "indirect fire"
              ],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Stikka kannon",
              "keywords": [
                "anti-monster 2+",
                "anti-vehicle 2+",
                "snagged"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "12",
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
              "name": "Butcha boyz",
              "keywords": []
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Savage horns and hooves",
              "keywords": [
                "extra attacks",
                "lance"
              ],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Saw blades",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "10",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Beast Snagga",
        "Hunta Rig"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "61b63a65-5fdf-51da-8260-4e320d8cebc1",
      "name": "Kaptin Badrukk",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Flash Gitz",
      "composition": [
        "1 Kaptin Badrukk – Epic Hero"
      ],
      "loadout": "This model is equipped with: slugga; choppa; Da Rippa.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Flashiest Gitz",
            "description": "While this model is leading a unit, each time a model in that unit makes a ranged attack, you can re-roll the Hit roll."
          },
          {
            "name": "Ded Glowy Ammo (Aura)",
            "description": "While an enemy Infantry unit is within 6\" of this model, subtract 1 from the Toughness characteristic of models in that unit."
          }
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
          "sv": "3+",
          "w": "6",
          "ld": "7+",
          "oc": "1",
          "name": "Kaptin Badrukk"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Da Rippa – standard",
              "keywords": [
                "heavy",
                "sustained hits 1"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "7",
              "ap": "-2",
              "damage": "2"
            },
            {
              "name": "Da Rippa – supercharge",
              "keywords": [
                "hazardous",
                "heavy",
                "sustained hits 1"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "8",
              "ap": "-3",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Choppa",
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
        "Epic Hero",
        "Kaptin Badrukk"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "c70f4da0-73a6-5bb0-9c6f-893a5a9f42b1",
      "name": "Kill Rig",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Kill Rig"
      ],
      "loadout": "This model is equipped with: ’eavy lobba; stikka kannon; wurrtower; butcha boyz; savage horns and hooves; saw blades.",
      "wargear": [
        "None"
      ],
      "transport": "This model has a transport capacity of 11 Beast Snagga Infantry models.",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D6",
          "Feel No Pain 6+",
          "Firing Deck 11"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Spirit of Gork (Psychic)",
            "description": "At the start of the Fight phase, you can select one friendly Orks unit within 12\" of this model and roll one D6: on a 1, this model suffers D3 mortal wounds; on a 2-5, until the end of the phase, add 1 to the Strength characteristic of melee weapons equipped by models in that unit; on a 6, until the end of the phase, add 1 to the Strength characteristic of melee weapons equipped by models in that unit and those weapons have the [LETHAL HITS] ability."
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
          "w": "16",
          "ld": "7+",
          "oc": "5",
          "name": "Kill Rig"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "’Eavy lobba",
              "keywords": [
                "blast",
                "indirect fire"
              ],
              "range": "48\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Stikka kannon",
              "keywords": [
                "anti-monster 2+",
                "anti-vehicle 2+",
                "snagged"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "12",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Wurrtower",
              "keywords": [
                "hazardous",
                "psychic",
                "torrent"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "N/A",
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
              "name": "Butcha boyz",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+",
                "extra attacks"
              ],
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
              "name": "Savage horns and hooves",
              "keywords": [
                "extra attacks",
                "lance"
              ],
              "range": "Melee",
              "attacks": "4",
              "skill": "4+",
              "strength": "8",
              "ap": "-1",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Saw blades",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "10",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Psyker",
        "Beast Snagga",
        "Kill Rig"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "17461bcd-24d2-580b-b1e4-aa86fdaaf5bf",
      "name": "Killa Kans",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "3-6 Killa Kans"
      ],
      "loadout": "Every model is equipped with: Kan shoota; Kan klaw.",
      "wargear": [
        "Each Killa Kan’s Kan shoota can be replaced with one of the following: ◦ 1 grotzooka ◦ 1 rokkit launcha ◦ 1 skorcha"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 1"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Shooty Power Trip",
            "description": "Each time this unit is selected to shoot, you can roll one D6: on a 1, the nearest other friendly Orks unit within 12\" of and visible to this unit suffers D3 mortal wounds; on a 2+, until the end of the phase, ranged weapons equipped by models in this unit have the [IGNORES COVER] ability."
          }
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
          "w": "5",
          "ld": "8+",
          "oc": "2",
          "name": "Killa Kans"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kan shoota",
              "keywords": [
                "devastating wounds",
                "rapid fire 2"
              ],
              "range": "36\"",
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
              "name": "Grotzooka",
              "keywords": [
                "blast"
              ],
              "range": "18\"",
              "attacks": "D3+3",
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
              "name": "Rokkit launcha",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
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
              "name": "Skorcha",
              "keywords": [
                "ignores cover",
                "torrent"
              ],
              "range": "12\"",
              "attacks": "D6",
              "skill": "N/A",
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
              "name": "Kan klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
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
        "Killa Kans"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "907ea7d6-7868-508c-874b-15982396713d",
      "name": "Kommandos",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Boss Nob",
        "9 Kommandos"
      ],
      "loadout": "Every model is equipped with: slugga; choppa.",
      "wargear": [
        "The Boss Nob’s choppa can be replaced with one of the following: ◦ 1 big choppa ◦ 1 power klaw",
        "Up to 2 Kommandos can each have their slugga and choppa replaced with 1 speshul Kommando shoota and 1 close combat weapon.",
        "1 Kommando’s slugga and choppa can be replaced with 1 breacha ram.",
        "1 Kommando’s slugga and choppa can be replaced with 1 burna and 1 close combat weapon.",
        "1 Kommando’s slugga and choppa can be replaced with 1 rokkit launcha and 1 close combat weapon.",
        "This unit can be equipped with 1 bomb squig.",
        "This unit can be equipped with 1 distraction grot."
      ],
      "transport": "",
      "abilities": {
        "wargear": [
          {
            "name": "Distraction Grot",
            "description": "Once per battle, in your opponent’s Shooting phase, before making a saving throw for a model in this unit, it can deploy the distraction grot. If it does, until the end of the phase, models in this unit have a 5+ invulnerable save."
          }
        ],
        "core": [
          "Infiltrators",
          "Stealth"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Sneaky Surprise",
            "description": "Enemy units cannot use the Fire Overwatch Stratagem to shoot at this unit."
          }
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
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "KOMMANDOS"
        },
        {
          "m": "6\"",
          "t": "5",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "BOSS NOB"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Burna",
              "keywords": [
                "ignores cover",
                "torrent"
              ],
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
              "name": "Speshul Kommando shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Rokkit launcha",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
              "name": "Breacha ram",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Choppa",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Kommandos"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "04e65945-62f8-54a9-82b7-23b92c74a0d2",
      "name": "Kustom Boosta-blasta",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Kustom Boosta-blasta"
      ],
      "loadout": "This model is equipped with: burna exhausts; grot blasta; rivet kannon; spiked wheels.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 1"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Rivetin’ Dakka",
            "description": "In your Shooting phase, after this model has shot, select one enemy unit hit by one or more of those attacks made with a rivet kannon. Until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll."
          }
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
          "t": "7",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Kustom Boosta-blasta"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Burna exhausts",
              "keywords": [
                "ignores cover",
                "torrent",
                "twin-linked"
              ],
              "range": "6\"",
              "attacks": "2D6",
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
              "name": "Grot blasta",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
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
              "name": "Rivet kannon",
              "keywords": [
                "assault",
                "rapid fire 3"
              ],
              "range": "36\"",
              "attacks": "6",
              "skill": "5+",
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
              "name": "Spiked wheels",
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
      "keywords": [
        "Vehicle",
        "Kustom Boosta-blasta"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "4313053f-9a2a-5a45-9427-5cba8aef2c7e",
      "name": "Lootas",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1-3 Spanners*",
        "4-12 Lootas * This unit must contain 1 Spanner for every 4 Lootas it contains."
      ],
      "loadout": "Every Spanner is equipped with: big shoota; close combat weapon. Every Loota is equipped with: deffgun; close combat weapon.",
      "wargear": [
        "Any number of Spanners can each have their big shoota replaced with one of the following: ◦ 1 kustom mega-blasta ◦ 1 rokkit launcha"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
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
          "m": "6\"",
          "t": "5",
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "Lootas"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Deffgun",
              "keywords": [
                "heavy",
                "rapid fire 1"
              ],
              "range": "48\"",
              "attacks": "2",
              "skill": "6+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Kustom mega-blasta",
              "keywords": [
                "hazardous"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Rokkit launcha",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
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
        "Lootas"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "7ec0d3aa-8f52-57b5-b3f7-e313c4f10db3",
      "name": "Mad Dok Grotsnik",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Burna Boyz ■ Tankbustas ■ Lootas ■ Nobz",
      "composition": [
        "1 Mad Dok Grotsnik – Epic Hero"
      ],
      "loadout": "This model is equipped with: slugga; power klaw; ’urty syringe.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Feel No Pain 5+",
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Mad Dok",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability."
          },
          {
            "name": "One Scalpel Short of a Medpack",
            "description": "While this model is leading a unit, that unit is eligible to declare a charge in a turn in which it Fell Back."
          }
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
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Mad Dok Grotsnik"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Power klaw",
              "keywords": [
                "sustained hits 1"
              ],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "’Urty syringe",
              "keywords": [
                "anti-infantry 4+",
                "extra attacks",
                "precision"
              ],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
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
        "Painboy",
        "Mad Dok Grotsnik"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "4a45c36d-652e-5cdb-a08d-a28f6644b794",
      "name": "Meganobz",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "2-6 Meganobz"
      ],
      "loadout": "Every model is equipped with: kustom shoota; power klaw.",
      "wargear": [
        "Any number of models can each have their kustom shoota and power klaw replaced with one of the following: ◦ 1 kombi-weapon and 1 power klaw ◦ 1 kombi-weapon and 1 killsaw ◦ 1 kustom shoota and 1 killsaw ◦ 1 killsaw and 1 power klaw ◦ 1 twin killsaw"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Krumpin’ Time",
            "description": "During the battle round in which you call a Waaagh!, melee weapons equipped by models in this unit have the [DEVASTATING WOUNDS] ability."
          }
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
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Meganobz"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Kustom shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin killsaw",
              "keywords": [
                "twin -linked"
              ],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Meganobz"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "fd282ce4-c66d-59cb-a801-9077e5569da7",
      "name": "Megatrakk Scrapjet",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Megatrakk Scrapjet"
      ],
      "loadout": "This model is equipped with: rokkit kannon; twin big shoota; wing missiles; nose drill.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 1"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Drill Through",
            "description": "Each time this model ends a Charge move, select one enemy unit within Engagement Range of it and roll one D6: on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers 3 mortal wounds."
          }
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
          "t": "7",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Megatrakk Scrapjet"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Rokkit kannon",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
              "attacks": "D6+1",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin big shoota",
              "keywords": [
                "rapid fire 2",
                "twin-linked"
              ],
              "range": "18\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Wing missiles",
              "keywords": [],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Nose drill",
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
        "Megatrakk Scrapjet"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "0d7f5f3a-61ae-5be6-9cbb-217e8b4a9421",
      "name": "Mek",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Lootas ■ Mek Gunz ■ Nobz ■ Tankbustas",
      "composition": [
        "1 Mek"
      ],
      "loadout": "This model is equipped with: kustom mega-slugga; wrench.",
      "wargear": [
        "This model’s wrench can be replaced with 1 killsaw."
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Mekboy",
            "description": "While this model is within 3\" of one or more friendly Orks Vehicle units, this model has the Lone Operative ability."
          },
          {
            "name": "Mekaniak",
            "description": "At the end of your Movement phase, you can select one friendly Orks Vehicle model within 3\" of this model. That Vehicle model regains up to D3 lost wounds, and, until the start of your next Movement phase, each time that Vehicle model makes an attack, add 1 to the Hit roll. Each model can only be selected for this ability once per turn."
          }
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
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Mek"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kustom mega-slugga",
              "keywords": [
                "blast",
                "hazardous"
              ],
              "range": "12\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "8",
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
              "name": "Killsaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Wrench",
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
        "Character",
        "Mek"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "71a0da31-35c6-57d1-89b9-ca161b90bb1b",
      "name": "Mek Gunz",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1-3 Mek Gunz"
      ],
      "loadout": "Every model is equipped with: smasha gun; grot crew. Designer’s Note: Place five Grot Crew tokens next to each Mek Gun model when this unit is first set up, removing one each time its Mek Gun model loses a wound (a Mek Gun model itself is considered to represent its final wound).",
      "wargear": [
        "Each model’s smasha gun can be replaced with one of the following: ◦ 1 bubblechukka ◦ 1 kustom mega-kannon ◦ 1 traktor kannon"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Splat!",
            "description": "Each time a model in this unit makes a ranged attack that targets a unit containing 10 or more models, re-roll a Hit roll of 1."
          }
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
          "t": "5",
          "sv": "5+",
          "w": "6",
          "ld": "8+",
          "oc": "2",
          "name": "Mek Gunz"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Bubblechukka – big bubble",
              "keywords": [
                "bubblechukka",
                "blast"
              ],
              "range": "48\"",
              "attacks": "2D6",
              "skill": "4+",
              "strength": "6",
              "ap": "-1",
              "damage": "1"
            },
            {
              "name": "Bubblechukka – wobbly bubble",
              "keywords": [
                "bubblechukka",
                "blast"
              ],
              "range": "48\"",
              "attacks": "D6",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            },
            {
              "name": "Bubblechukka – dense bubble",
              "keywords": [
                "bubblechukka",
                "blast"
              ],
              "range": "48\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+3"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Grot crew",
              "keywords": [],
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
      "keywords": [
        "Vehicle",
        "Mek Gunz"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "c33dd7fe-1ade-5788-bf63-5b801dfef7f1",
      "name": "Morkanaut",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Morkanaut"
      ],
      "loadout": "This model is equipped with: kustom mega-blasta; kustom mega-zappa; 2 rokkit launchas; 2 twin big shootas; klaw of Mork.",
      "wargear": [
        "None"
      ],
      "transport": "This model has a transport capacity of 12 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. It cannot transport Ghazghkull Thraka.",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D6"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Clankin’ Forward",
            "description": "Each time this model makes a Normal, Advance or Fall Back move, it can move over enemy models (excluding Monster and Vehicle models) and terrain features that are 4\" or less in height as if they were not there."
          },
          {
            "name": "Big an’ Shooty",
            "description": "Each time this model makes a ranged attack during the battle round in which you called a Waaagh!, add 1 to the Hit roll."
          }
        ],
        "special": [],
        "damaged": {
          "range": "1-7 WOUNDS REMAINING",
          "description": "While this model has 1-7 wounds remaining, subtract 4 from this model’s Objective Control characteristic, and each time this model makes an attack, subtract 1 from the Hit roll."
        }
      },
      "stats": [
        {
          "m": "8\"",
          "t": "12",
          "sv": "3+",
          "w": "20",
          "ld": "7+",
          "oc": "8",
          "name": "Morkanaut"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kustom mega-blasta",
              "keywords": [
                "hazardous"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Kustom mega-zappa",
              "keywords": [
                "blast",
                "hazardous"
              ],
              "range": "36\"",
              "attacks": "D6+3",
              "skill": "5+",
              "strength": "10",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Rokkit launcha",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
              "strength": "9",
              "ap": "-2",
              "damage": "3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin big shoota",
              "keywords": [
                "rapid fire 2",
                "twin-linked"
              ],
              "range": "18\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Klaw of Mork – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "18",
              "ap": "-3",
              "damage": "6"
            },
            {
              "name": "Klaw of Mork – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "12",
              "skill": "3+",
              "strength": "8",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Titanic",
        "Towering",
        "Transport",
        "Walker",
        "Morkanaut"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "9fef8723-d3b7-5638-8b79-5ed7e3399ef4",
      "name": "Mozrog Skragbad",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Mozrog Skragbad – Epic Hero"
      ],
      "loadout": "This model is equipped with: thump gun; Big Chompa’s jaws; gutrippa.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 1",
          "Feel No Pain 4+"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "4+",
          "info": ""
        },
        "other": [
          {
            "name": "Da Bigger Dey iz…",
            "description": "Each time this model makes an attack that targets a Monster or Vehicle unit, add 1 to the Damage characteristic of that attack. Each time this model makes an attack that targets a Titanic unit, add 2 to the Damage characteristic of that attack instead."
          },
          {
            "name": "Hungry Chompa",
            "description": "Each time this model declares a charge, until the end of the turn, each time this model makes an attack, an unmodified successful Wound roll of 5+ scores a Critical Wound."
          }
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
          "sv": "3+",
          "w": "9",
          "ld": "6+",
          "oc": "3",
          "name": "Mozrog Skragbad"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Thump gun",
              "keywords": [
                "blast"
              ],
              "range": "18\"",
              "attacks": "D3",
              "skill": "5+",
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
              "name": "Big Chompa’s jaws",
              "keywords": [
                "devastating wounds",
                "extra attacks"
              ],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "7",
              "ap": "-2",
              "damage": "4"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Gutrippa",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+"
              ],
              "range": "Melee",
              "attacks": "6",
              "skill": "2+",
              "strength": "7",
              "ap": "-1",
              "damage": "3"
            }
          ]
        }
      ],
      "keywords": [
        "Monster",
        "Character",
        "Beast Snagga",
        "Epic Hero",
        "Mozrog Skragbad"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "2b72a084-1c84-549d-933b-52c997e45ea4",
      "name": "Nob On Smasha Squig",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Squighog Boyz",
      "composition": [
        "1 Nob on Smasha Squig"
      ],
      "loadout": "This model is equipped with: slugga; big choppa; smasha squig jaws.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Feel No Pain 5+",
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Hogboss",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll."
          },
          {
            "name": "Hunt Them Down",
            "description": "During the battle round in which you call a Waaagh!, this model’s big choppa has the [ANTI-MONSTER 3+] and [ANTI-VEHICLE 3+] abilities."
          }
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
          "sv": "4+",
          "w": "5",
          "ld": "7+",
          "oc": "2",
          "name": "Nob On Smasha Squig"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Big choppa",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+"
              ],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Smasha squig jaws",
              "keywords": [
                "extra attacks"
              ],
              "range": "Melee",
              "attacks": "2",
              "skill": "4+",
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
        "Beast Snagga",
        "Nob on Smasha Squig"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "922d4b22-cc64-5dac-a376-097aa3d3c943",
      "name": "Nob With Waaagh! Banner",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Nobz",
      "composition": [
        "1 Nob with Waaagh! Banner"
      ],
      "loadout": "This model is equipped with: kustom shoota; Waaagh! banner.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Plant the Waaagh! Banner",
            "description": "Once per battle, at the start of the battle round, this model can use this ability. If it does, until the start of the next battle round, this model’s unit gains the benefits of the Waaagh! ability as if you had called a Waaagh! this battle round."
          },
          {
            "name": "Da Boss Iz Watchin’",
            "description": "While this model is gaining the benefits of the Waaagh! ability, it has a 4+ invulnerable save and an Objective Control characteristic of 5."
          }
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
          "oc": "1",
          "name": "Nob With Waaagh! Banner"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kustom shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "18\"",
              "attacks": "4",
              "skill": "5+",
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
              "name": "Waaagh! banner",
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
        "Character",
        "Nob with Waaagh! Banner"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "40af5f86-133a-5802-9ee9-4f0a8b483b56",
      "name": "Nobz",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Boss Nob",
        "4-9 Nobz"
      ],
      "loadout": "Every model is equipped with: slugga; big choppa.",
      "wargear": [
        "Any number of models can each have their big choppa replaced with 1 power klaw.",
        "Any number of models can each have their slugga and big choppa replaced with 1 kombi-weapon and 1 close combat weapon.",
        "For every 5 models in this unit, this unit can be equipped with 1 ammo runt."
      ],
      "transport": "",
      "abilities": {
        "wargear": [
          {
            "name": "Ammo Runt",
            "description": "Once per battle for each ammo runt this unit has, when this unit is selected to shoot, it can use this ability. If it does, until the end of the phase, ranged weapons equipped by models in this unit have the [LETHAL HITS] ability."
          }
        ],
        "core": [],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Da Boss’ Ladz",
            "description": "While a Warboss model is leading this unit, each time an attack targets this unit, subtract 1 from the Wound roll."
          }
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
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "Nobz"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Close combat weapon",
              "keywords": [],
              "range": "Melee",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Grenades",
        "Nobz"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "00de84f1-3352-56ca-944e-a272f9101301",
      "name": "Painboss",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Beast Snagga Boyz",
      "composition": [
        "1 Painboss"
      ],
      "loadout": "This model is equipped with: Beast Snagga klaw.",
      "wargear": [
        "This model can be equipped with 1 grot orderly."
      ],
      "transport": "",
      "abilities": {
        "wargear": [
          {
            "name": "Grot Orderly",
            "description": "Once per battle, in your Command phase, if the bearer is leading a unit that is below its Starting Strength, you can return up to D3 destroyed Bodyguard models to that unit."
          }
        ],
        "core": [
          "Feel No Pain 5+",
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Dok’s Toolz",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability."
          },
          {
            "name": "Sawbonez",
            "description": "At the end of your Movement phase, select one friendly Beast Snagga Character model within 3\" of this model. That model is healed and regains up to 3 lost wounds. Each model can only be healed once per turn."
          }
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
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Painboss"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Beast Snagga klaw",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+"
              ],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Beast Snagga",
        "Painboss"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "233c4eaf-0ffd-51c8-816d-3a05bb14b6bf",
      "name": "Painboy",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Nobz ■ Lootas ■ Burna Boyz ■ Tankbustas",
      "composition": [
        "1 Painboy"
      ],
      "loadout": "This model is equipped with: power klaw; ’urty syringe.",
      "wargear": [
        "This model can be equipped with 1 grot orderly."
      ],
      "transport": "",
      "abilities": {
        "wargear": [
          {
            "name": "Grot Orderly",
            "description": "Once per battle, in your Command phase, if the bearer is leading a unit that is below its Starting Strength, you can return up to D3 destroyed Bodyguard models to that unit."
          }
        ],
        "core": [
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Dok’s Toolz",
            "description": "While this model is leading a unit, models in that unit have the Feel No Pain 5+ ability."
          },
          {
            "name": "Hold Still and Say ‘Aargh!’",
            "description": "Each time an attack made by this model with its ’urty syringe scores a Critical Wound against a unit (excluding Vehicle units), that unit suffers D6 mortal wounds."
          }
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
          "sv": "5+",
          "w": "3",
          "ld": "7+",
          "oc": "1",
          "name": "Painboy"
        }
      ],
      "rangedWeapons": [],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "’Urty syringe",
              "keywords": [
                "anti-infantry 4+",
                "extra attacks",
                "precision"
              ],
              "range": "Melee",
              "attacks": "1",
              "skill": "3+",
              "strength": "2",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Painboy"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "cf029f7c-7e85-5ab4-9b12-acacb0beb38e",
      "name": "Rukkatrukk Squigbuggy",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Rukkatrukk Squigbuggy"
      ],
      "loadout": "This model is equipped with: sawn-off shotgun; squig-launchas; saw blades.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 1"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Buzzer Squigs",
            "description": "Each time this model makes an attack with its squig launchas that targets an Infantry unit, add 1 to the Hit roll."
          },
          {
            "name": "Squig Mine",
            "description": "Once per battle, at the start of any phase, select one enemy unit within 3\" of this model and roll one D6: on a 4+, that enemy unit suffers D6 mortal wounds. Designer’s Note: Place a Squig Mine token next to the model, removing it once this ability has been used."
          }
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
          "t": "7",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Rukkatrukk Squigbuggy"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Sawn-off shotgun",
              "keywords": [
                "assault"
              ],
              "range": "12\"",
              "attacks": "2",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Squig launchas",
              "keywords": [
                "blast",
                "ignores cover",
                "indirect fire"
              ],
              "range": "36\"",
              "attacks": "D6+6",
              "skill": "5+",
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
              "name": "Saw blades",
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
      "keywords": [
        "Vehicle",
        "Rukkatrukk Squigbuggy"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "31525a0d-8f9d-5999-b8b6-eb8e8aa13d1f",
      "name": "Shokkjump Dragsta",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Shokkjump Dragsta"
      ],
      "loadout": "This model is equipped with: kustom shokk rifle; rokkits; saw blades.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 1"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Shokk Tunnel",
            "description": "Each time this model is selected to Advance, you can remove it from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models."
          }
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
          "t": "7",
          "sv": "4+",
          "w": "9",
          "ld": "7+",
          "oc": "3",
          "name": "Shokkjump Dragsta"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kustom shokk rifle",
              "keywords": [
                "devastating wounds",
                "hazardous",
                "precision"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "3+",
              "strength": "8",
              "ap": "-2",
              "damage": "D6+1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Rokkits",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
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
              "name": "Saw blades",
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
      "keywords": [
        "Vehicle",
        "Shokkjump Dragsta"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "576c28c7-b40a-5ad3-a820-bd80cf729190",
      "name": "Squighog Boyz",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "3-6 Squighog Boyz"
      ],
      "loadout": "Every model is equipped with: saddlegit weapons; stikka; squighog jaws and saddlegits.",
      "wargear": [
        "For every 3 models in this unit, this unit can be equipped with 1 bomb squig."
      ],
      "transport": "",
      "abilities": {
        "wargear": [
          {
            "name": "Bomb Squig",
            "description": "Once per battle for each bomb squig this unit has, after this unit ends a Normal move, you can select one enemy unit within 12\" of it and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds."
          }
        ],
        "core": [
          "Feel No Pain 5+"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Wild Ride",
            "description": "You can ignore any or all modifiers to this unit’s Move characteristic and to Advance and Charge rolls made for this unit."
          }
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
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "2",
          "name": "Squighog Boyz"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Saddlegit weapons",
              "keywords": [
                "assault"
              ],
              "range": "9\"",
              "attacks": "1",
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
              "name": "Stikka",
              "keywords": [
                "assault",
                "anti-monster 4+",
                "anti-vehicle 4+"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Squighog jaws and saddlegits",
              "keywords": [
                "extra attacks"
              ],
              "range": "Melee",
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
              "name": "Stikka",
              "keywords": [
                "anti-monster 4+",
                "anti-vehicle 4+",
                "lance"
              ],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "5",
              "ap": "-1",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Beast Snagga",
        "Grenades",
        "Squighog Boyz"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "4a9a33db-6bd9-570c-8a96-6a7841919d6b",
      "name": "Stompa",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Stompa"
      ],
      "loadout": "This model is equipped with: 3 big shootas; deffkannon; skorcha; supa-gatler; supa-rokkits; twin big shoota; mega-choppa.",
      "wargear": [
        "None"
      ],
      "transport": "This model has a transport capacity of 22 Orks Infantry models. Each Mega Armour or Jump Pack model takes up the space of 2 models. Ghazghkull Thraka takes up the space of 18 models.",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise 2D6"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Waaagh! Effigy (Aura)",
            "description": "While a friendly Orks unit is within 12\" of this model, each time you take a Battle-shock test for that unit, add 1 to that test."
          },
          {
            "name": "Stompin’ Forward",
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
          "m": "10\"",
          "t": "14",
          "sv": "2+",
          "w": "30",
          "ld": "6+",
          "oc": "12",
          "name": "Stompa"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Deffkannon",
              "keywords": [
                "blast"
              ],
              "range": "72\"",
              "attacks": "3D6",
              "skill": "5+",
              "strength": "14",
              "ap": "-3",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Skorcha",
              "keywords": [
                "ignores cover",
                "torrent"
              ],
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
              "name": "Supa-gatler",
              "keywords": [
                "sustained hits 1"
              ],
              "range": "24\"",
              "attacks": "20",
              "skill": "5+",
              "strength": "7",
              "ap": "-1",
              "damage": "2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Supa-rokkits",
              "keywords": [
                "blast"
              ],
              "range": "100\"",
              "attacks": "D6",
              "skill": "5+",
              "strength": "12",
              "ap": "-3",
              "damage": "D6+2"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin big shoota",
              "keywords": [
                "rapid fire 2",
                "twin-linked"
              ],
              "range": "18\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Mega-choppa – strike",
              "keywords": [],
              "range": "Melee",
              "attacks": "6",
              "skill": "3+",
              "strength": "24",
              "ap": "-5",
              "damage": "10"
            },
            {
              "name": "Mega-choppa – sweep",
              "keywords": [],
              "range": "Melee",
              "attacks": "18",
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
        "Transport",
        "Titanic",
        "Towering",
        "Walker",
        "Stompa"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "9fae7cc2-0704-5d98-9819-5c9164820636",
      "name": "Stormboyz",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Boss Nob",
        "4-9 Stormboyz"
      ],
      "loadout": "Every model is equipped with: slugga; choppa.",
      "wargear": [
        "The Boss Nob’s choppa can be replaced with 1 power klaw."
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deep Strike"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Full Throttle",
            "description": "This unit is eligible to declare a charge in a turn in which it Advanced. If it does, before making that Charge move, roll one D6 for each model in this unit: for each 1, this unit suffers 1 mortal wound. You cannot use this ability during the battle round in which you call a Waaagh!."
          }
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
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "STORMBOY"
        },
        {
          "m": "12\"",
          "t": "5",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "BOSS NOB"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Choppa",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Jump Pack",
        "Fly",
        "Grenades",
        "Stormboyz"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "dcb10a15-0567-5c33-83f9-ba6d36a3b99b",
      "name": "Tankbustas",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Boss Nob",
        "4 Tankbustas"
      ],
      "loadout": "The Boss Nob is equipped with: rokkit launcha; close combat weapon. One Tankbusta is equipped with: pair of rokkit pistols; close combat weapon. One other Tankbusta is equipped with: tankhammer. Two other Tankbustas are equipped with: rokkit launcha; close combat weapon.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Tank Hunters",
            "description": "Each time a model in this unit makes an attack that targets a Monster or Vehicle unit, add 1 to the Hit roll and add 1 to the Wound roll."
          },
          {
            "name": "Bomb Squigs",
            "description": "Twice per battle, after this unit ends a Normal move, you can select one enemy unit within 12\" of it and roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds. Designer’s Note: Place two Bomb Squig tokens next to the unit, removing one each time this unit uses this ability."
          }
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
          "sv": "5+",
          "w": "1",
          "ld": "7+",
          "oc": "1",
          "name": "TANKBUSTA"
        },
        {
          "m": "6\"",
          "t": "5",
          "sv": "5+",
          "w": "2",
          "ld": "7+",
          "oc": "1",
          "name": "BOSS NOB"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Pair of rokkit pistols",
              "keywords": [
                "pistol",
                "twin-linked"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "7",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Rokkit launcha",
              "keywords": [
                "blast"
              ],
              "range": "24\"",
              "attacks": "D3",
              "skill": "5+",
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
              "name": "Tankhammer",
              "keywords": [
                "anti-vehicle 4+",
                "devastating wounds",
                "hazardous"
              ],
              "range": "Melee",
              "attacks": "2",
              "skill": "3+",
              "strength": "7",
              "ap": "-1",
              "damage": "D3"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Tankbustas"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "7fdf8eed-2556-52b8-b54f-ad8be211aef0",
      "name": "Trukk",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Trukk"
      ],
      "loadout": "This model is equipped with: big shoota; spiked wheels.",
      "wargear": [
        "This model can be equipped with 1 wreckin’ ball."
      ],
      "transport": "This model has a transport capacity of 12 Orks Infantry models. Each Mega Armour model takes up the space of 2 models. It cannot transport Jump Pack models.",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D3",
          "Firing Deck 12"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Grot Riggers",
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
          "t": "8",
          "sv": "4+",
          "w": "10",
          "ld": "7+",
          "oc": "2",
          "name": "Trukk"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Spiked wheels",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "5+",
              "strength": "6",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Wreckin’ ball",
              "keywords": [
                "extra attacks"
              ],
              "range": "Melee",
              "attacks": "1",
              "skill": "4+",
              "strength": "10",
              "ap": "0",
              "damage": "D6"
            }
          ]
        }
      ],
      "keywords": [
        "Vehicle",
        "Transport",
        "Dedicated Transport",
        "Trukk"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "01b374d7-1471-53cf-bff9-cca5d7efcf13",
      "name": "Warbikers",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Boss Nob on Warbike",
        "2-5 Warbikers"
      ],
      "loadout": "Every model is equipped with: twin dakkagun; close combat weapon.",
      "wargear": [
        "Each Warbiker can be equipped with one of the following: ◦ 1 slugga ◦ 1 choppa",
        "The Boss Nob on Warbike can be equipped with one of the following: ◦ 1 slugga ◦ 1 big choppa ◦ 1 power klaw"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Drive-by Dakka",
            "description": "Each time a model in this unit makes a ranged attack that targets a unit within 9\", improve the Armour Penetration characteristic of that attack by 1."
          }
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
          "sv": "4+",
          "w": "3",
          "ld": "7+",
          "oc": "2",
          "name": "WARBIKER"
        },
        {
          "m": "12\"",
          "t": "6",
          "sv": "4+",
          "w": "4",
          "ld": "7+",
          "oc": "2",
          "name": "WARBIKE"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin dakkagun",
              "keywords": [
                "rapid fire 2",
                "assault",
                "twin-linked"
              ],
              "range": "18\"",
              "attacks": "3",
              "skill": "5+",
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
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
              "name": "Choppa",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "3",
              "skill": "4+",
              "strength": "9",
              "ap": "-2",
              "damage": "2"
            }
          ]
        }
      ],
      "keywords": [
        "Mounted",
        "Grenades",
        "Warbikers"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "4adbb8b3-5ea7-5582-b45b-ba8626da7226",
      "name": "Warboss",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following units: ■ Boyz ■ Nobz",
      "composition": [
        "1 Warboss"
      ],
      "loadout": "This model is equipped with: kombi-weapon; twin slugga; big choppa.",
      "wargear": [
        "This model’s big choppa can be replaced with 1 power klaw.",
        "This model can be equipped with 1 attack squig."
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Might is Right",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll."
          },
          {
            "name": "Da Biggest and da Best",
            "description": "When you call a Waaagh!, until the start of the next battle round, add 4 to the Attacks characteristic of this model’s melee weapons."
          }
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
          "w": "6",
          "ld": "6+",
          "oc": "1",
          "name": "Warboss"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Kombi-weapon",
              "keywords": [
                "anti-infantry 4+",
                "devastating wounds",
                "rapid fire 1"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "5+",
              "strength": "4",
              "ap": "0",
              "damage": "1"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin slugga",
              "keywords": [
                "pistol",
                "twin-linked"
              ],
              "range": "12\"",
              "attacks": "2",
              "skill": "5+",
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
              "name": "Attack squig",
              "keywords": [
                "extra attacks"
              ],
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
              "name": "Big choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "5",
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
              "name": "Power klaw",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
              "skill": "3+",
              "strength": "10",
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
        "Warboss"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "13010bb0-bf6d-5579-bf91-ff2402f6b4b7",
      "name": "Warboss In Mega Armour",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Meganobz",
      "composition": [
        "1 Warboss in Mega Armour"
      ],
      "loadout": "This model is equipped with: big shoota; ’uge choppa.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "5+",
          "info": ""
        },
        "other": [
          {
            "name": "Might is Right",
            "description": "While this model is leading a unit, each time a model in that unit makes a melee attack, add 1 to the Hit roll."
          },
          {
            "name": "Dead ’ard",
            "description": "When you call a Waaagh!, until the start of the next battle round, this model has the Feel No Pain 4+ ability."
          }
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
          "w": "7",
          "ld": "6+",
          "oc": "1",
          "name": "Warboss In Mega Armour"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Big shoota",
              "keywords": [
                "rapid fire 2"
              ],
              "range": "36\"",
              "attacks": "3",
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
              "name": "’Uge choppa",
              "keywords": [],
              "range": "Melee",
              "attacks": "4",
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
        "Warboss in Mega Armour"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "5b0506a2-f061-5d06-b6b8-5b9bb351eada",
      "name": "Wazbom Blastajet",
      "faction_id": "ORK",
      "leader": "",
      "composition": [
        "1 Wazbom Blastajet"
      ],
      "loadout": "This model is equipped with: smasha gun; twin wazbom mega-kannon; armoured hull.",
      "wargear": [
        "This model’s twin wazbom mega-kannon can be replaced with 1 twin tellyport mega-blasta.",
        "This model can be equipped with 1 blastajet force field.",
        "This model can be equipped with 1 twin supa-shoota."
      ],
      "transport": "",
      "abilities": {
        "wargear": [
          {
            "name": "Blastajet Force Field",
            "description": "The bearer has a 4+ invulnerable save, but it loses the Grenades keyword."
          }
        ],
        "core": [
          "Deadly Demise D3"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "6+",
          "info": ""
        },
        "other": [
          {
            "name": "Blastajet Attack Run",
            "description": "Each time this model makes a ranged attack that targets a unit that cannot Fly, re-roll a Hit roll of 1."
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
          "ld": "7+",
          "oc": "0",
          "name": "Wazbom Blastajet"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Smasha gun",
              "keywords": [
                "blast"
              ],
              "range": "48\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "9",
              "ap": "-3",
              "damage": "4"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin wazbom mega-kannon",
              "keywords": [
                "blast",
                "hazardous",
                "twin-linked"
              ],
              "range": "36\"",
              "attacks": "D3",
              "skill": "4+",
              "strength": "12",
              "ap": "-2",
              "damage": "D6"
            }
          ]
        },
        {
          "profiles": [
            {
              "name": "Twin supa-shoota",
              "keywords": [
                "rapid fire 2",
                "sustained hits 1",
                "twin-linked"
              ],
              "range": "36\"",
              "attacks": "4",
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
              "name": "Twin tellyport mega-blasta",
              "keywords": [
                "blast",
                "twin-linked"
              ],
              "range": "24\"",
              "attacks": "3",
              "skill": "5+",
              "strength": "9",
              "ap": "-1",
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
        "Grenades",
        "Wazbom Blastajet"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "21308fb3-2753-5c17-a04d-7b8bc695fbbb",
      "name": "Weirdboy",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Boyz",
      "composition": [
        "1 Weirdboy"
      ],
      "loadout": "This model is equipped with: ’Eadbanger; weirdboy staff.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D3",
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Waaagh! Energy",
            "description": "While this model is leading a unit, add 1 to the Strength and Damage characteristics of this model’s ’Eadbanger weapon for every 5 models in that unit (rounding down), but while that unit contains 10 or more models, that weapon has the [HAZARDOUS] ability."
          },
          {
            "name": "Da Jump (Psychic)",
            "description": "Once per turn, at the end of your Movement phase, one Weirdboy from your army can use this ability. If it does, roll one D6: on a 1, that Weirdboy’s unit suffers D6 mortal wounds; on a 2+, remove this Weirdboy’s unit from the battlefield and set it up again anywhere on the battlefield that is more than 9\" horizontally away from all enemy models."
          }
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
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Weirdboy"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "’Eadbanger",
              "keywords": [
                "precision",
                "psychic"
              ],
              "range": "24\"",
              "attacks": "1",
              "skill": "4+",
              "strength": "6",
              "ap": "-3",
              "damage": "1"
            }
          ]
        }
      ],
      "meleeWeapons": [
        {
          "profiles": [
            {
              "name": "Weirdboy staff",
              "keywords": [
                "psychic"
              ],
              "range": "Melee",
              "attacks": "3",
              "skill": "3+",
              "strength": "8",
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
        "Weirdboy"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "3dc1b72a-b8f7-58b4-8bab-fa54e7523b2a",
      "name": "Wurrboy",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Beast Snagga Boyz",
      "composition": [
        "1 Wurrboy"
      ],
      "loadout": "This model is equipped with: Eyez of Mork; close combat weapon.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Deadly Demise D3",
          "Feel No Pain 6+",
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Waaagh! Energy",
            "description": "While this model is leading a unit, add 2 to the Attacks characteristic of this model’s Eyez of Mork weapon for every 5 models in that unit (rounding down), but while that unit contains 10 or more models, that weapon has the [HAZARDOUS] ability."
          },
          {
            "name": "Roar of Mork (Psychic)",
            "description": "In your opponent’s Command phase, you can select one enemy unit within 18\" of and visible to this Psyker and roll one D6: on a 1, this Psyker’s unit suffers D3 mortal wounds; on a 2+, until the start of your opponent’s next Command phase, each time a Battle-shock or Leadership test is taken for that enemy unit, subtract 2 from that test."
          }
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
          "sv": "5+",
          "w": "4",
          "ld": "7+",
          "oc": "1",
          "name": "Wurrboy"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Eyez of Mork",
              "keywords": [
                "psychic"
              ],
              "range": "18\"",
              "attacks": "D6",
              "skill": "5+",
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
              "strength": "5",
              "ap": "0",
              "damage": "1"
            }
          ]
        }
      ],
      "keywords": [
        "Infantry",
        "Character",
        "Beast Snagga",
        "Psyker",
        "Wurrboy"
      ],
      "factions": [
        "Orks"
      ]
    },
    {
      "id": "5c0a00c4-5adf-501e-856d-ab55f4bf892a",
      "name": "Zodgrod Wortsnagga",
      "faction_id": "ORK",
      "leader": "This model can be attached to the following unit: ■ Gretchin",
      "composition": [
        "1 Zodgrod Wortsnagga – Epic Hero"
      ],
      "loadout": "This model is equipped with: Da Grabzappa; slugga.",
      "wargear": [
        "None"
      ],
      "transport": "",
      "abilities": {
        "wargear": [],
        "core": [
          "Feel No Pain 6+",
          "Leader"
        ],
        "faction": [
          "Waaagh!"
        ],
        "primarch": [],
        "invul": {
          "value": "",
          "info": ""
        },
        "other": [
          {
            "name": "Special Dose",
            "description": "When you call a Waaagh!, until the start of the next battle round, add 6\" to the Move characteristic of models in this model’s unit."
          }
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
          "sv": "5+",
          "w": "5",
          "ld": "7+",
          "oc": "1",
          "name": "Zodgrod Wortsnagga"
        }
      ],
      "rangedWeapons": [
        {
          "profiles": [
            {
              "name": "Slugga",
              "keywords": [
                "pistol"
              ],
              "range": "12\"",
              "attacks": "1",
              "skill": "5+",
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
              "name": "Da Grabzappa",
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
        "Infantry",
        "Character",
        "Epic Hero",
        "Zodgrod Wortsnagga"
      ],
      "factions": [
        "Orks"
      ]
    }
  ]
}