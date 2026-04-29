export default [
    // Constants for Heroes V scripting language
    
    // 🕊️ Heaven
    // Tier 1
    { label: "CREATURE_PEASANT", detail: "Haven • Tier 1 • Base", documentation: "Peasant" },            // 1
    { label: "CREATURE_MILITIAMAN", detail: "Haven • Tier 1 • Upgrade", documentation: "Conscript" },    // 2
    { label: "CREATURE_DEFENDER", detail: "Haven • Tier 1 • Alternative", documentation: "Defender" },   // 92 (HoF)

    // Tier 2
    { label: "CREATURE_ARCHER", detail: "Haven • Tier 2 • Base", documentation: "Archer" },              // 3
    { label: "CREATURE_MARKSMAN", detail: "Haven • Tier 2 • Upgrade", documentation: "Marksman" },       // 4
    { label: "CREATURE_LONGBOWMAN", detail: "Haven • Tier 2 • Alternative", documentation: "Longbowman" }, // 107 (HoF)

    // Tier 3
    { label: "CREATURE_FOOTMAN", detail: "Haven • Tier 3 • Base", documentation: "Footman" },            // 5
    { label: "CREATURE_SWORDSMAN", detail: "Haven • Tier 3 • Upgrade", documentation: "Squire" },        // 6
    { label: "CREATURE_VINDICATOR", detail: "Haven • Tier 3 • Alternative", documentation: "Vindicator" }, // 108 (HoF)

    // Tier 4
    { label: "CREATURE_GRIFFIN", detail: "Haven • Tier 4 • Base", documentation: "Griffin" },            // 7
    { label: "CREATURE_ROYAL_GRIFFIN", detail: "Haven • Tier 4 • Upgrade", documentation: "Imperial Griffin" }, // 8
    { label: "CREATURE_BATTLE_GRIFFIN", detail: "Haven • Tier 4 • Alternative", documentation: "Battle Griffin" }, // 109

    // Tier 5
    { label: "CREATURE_PRIEST", detail: "Haven • Tier 5 • Base", documentation: "Priest" },              // 9
    { label: "CREATURE_CLERIC", detail: "Haven • Tier 5 • Upgrade", documentation: "Inquisitor" },       // 10
    { label: "CREATURE_ZEALOT", detail: "Haven • Tier 5 • Alternative", documentation: "Zealot" },       // 110

    // Tier 6
    { label: "CREATURE_CAVALIER", detail: "Haven • Tier 6 • Base", documentation: "Cavalier" },          // 11
    { label: "CREATURE_PALADIN", detail: "Haven • Tier 6 • Upgrade", documentation: "Paladin" },         // 12
    { label: "CREATURE_CHAMPION", detail: "Haven • Tier 6 • Alternative", documentation: "Champion" },   // 111

    // Tier 7
    { label: "CREATURE_ANGEL", detail: "Haven • Tier 7 • Base", documentation: "Angel" },                // 13
    { label: "CREATURE_ARCHANGEL", detail: "Haven • Tier 7 • Upgrade", documentation: "Archangel" },     // 14
    { label: "CREATURE_SERAPH", detail: "Haven • Tier 7 • Alternative", documentation: "Seraph" },       // 112

    // 🔥 INFERNO
    // Tier 1
    { label: "CREATURE_FAMILIAR", detail: "Inferno • Tier 1 • Base", documentation: "Familiar" },          // 15
    { label: "CREATURE_IMP", detail: "Inferno • Tier 1 • Upgrade", documentation: "Imp" },                 // 16
    { label: "CREATURE_VERMIN", detail: "Inferno • Tier 1 • Alternative", documentation: "Vermin" },       // 131 (ToE)

    // Tier 2
    { label: "CREATURE_DEMON", detail: "Inferno • Tier 2 • Base", documentation: "Horned Demon" },         // 17
    { label: "CREATURE_HORNED_DEMON", detail: "Inferno • Tier 2 • Upgrade", documentation: "Overseer Demon" }, // 18
    { label: "CREATURE_HORNED_LEAPER", detail: "Inferno • Tier 2 • Alternative", documentation: "Horned Leaper" }, // 132 (ToE)

    // Tier 3
    { label: "CREATURE_HELL_HOUND", detail: "Inferno • Tier 3 • Base", documentation: "Hell Hound" },      // 19
    { label: "CREATURE_CERBERI", detail: "Inferno • Tier 3 • Upgrade", documentation: "Cerberus" },        // 20
    { label: "CREATURE_FIREBREATHER_HOUND", detail: "Inferno • Tier 3 • Alternative", documentation: "Firebreather" }, // 133 (ToE)

    // Tier 4
    { label: "CREATURE_SUCCUBUS", detail: "Inferno • Tier 4 • Base", documentation: "Succubus" },          // 21
    { label: "CREATURE_SUCCUBUS_SUCCUBUS", detail: "Inferno • Tier 4 • Upgrade", documentation: "Succubus Mistress" }, // 22
    { label: "CREATURE_SUCCUBUS_SEDUCER", detail: "Inferno • Tier 4 • Alternative", documentation: "Seducer" }, // 134 (ToE)

    // Tier 5
    { label: "CREATURE_NIGHTMARE", detail: "Inferno • Tier 5 • Base", documentation: "Nightmare" },        // 23
    { label: "CREATURE_NIGHTMARE_2", detail: "Inferno • Tier 5 • Upgrade", documentation: "Hell Charger" }, // 24 (duplicate name in doc)
    { label: "CREATURE_HELLMARE", detail: "Inferno • Tier 5 • Alternative", documentation: "Hellmare" },   // 135 (ToE)

    // Tier 6
    { label: "CREATURE_PIT_FIEND", detail: "Inferno • Tier 6 • Base", documentation: "Pit Fiend" },        // 25
    { label: "CREATURE_BALOR", detail: "Inferno • Tier 6 • Upgrade", documentation: "Pit Lord" },          // 26
    { label: "CREATURE_PIT_SPAWN", detail: "Inferno • Tier 6 • Alternative", documentation: "Pit Spawn" }, // 136 (ToE)

    // Tier 7
    { label: "CREATURE_DEVIL", detail: "Inferno • Tier 7 • Base", documentation: "Devil" },                // 27
    { label: "CREATURE_ARCHDEVIL", detail: "Inferno • Tier 7 • Upgrade", documentation: "Archdevil" },     // 28
    { label: "CREATURE_ARCH_DEMON", detail: "Inferno • Tier 7 • Alternative", documentation: "Arch Demon" }, // 137 (ToE)

    // ☠️ NECROPOLIS
    // Tier 1
    { label: "CREATURE_SKELETON", detail: "Necropolis • Tier 1 • Base", documentation: "Skeleton" },            // 29
    { label: "CREATURE_SKELETON_ARCHER", detail: "Necropolis • Tier 1 • Upgrade", documentation: "Skeleton Archer" }, // 30
    { label: "CREATURE_SKELETON_WARRIOR", detail: "Necropolis • Tier 1 • Alternative", documentation: "Skeleton Warrior" }, // 152

    // Tier 2
    { label: "CREATURE_WALKING_DEAD", detail: "Necropolis • Tier 2 • Base", documentation: "Walking Dead" },   // 31
    { label: "CREATURE_ZOMBIE", detail: "Necropolis • Tier 2 • Upgrade", documentation: "Plague Zombie" },     // 32
    { label: "CREATURE_DISEASE_ZOMBIE", detail: "Necropolis • Tier 2 • Alternative", documentation: "Disease Zombie" }, // 153

    // Tier 3
    { label: "CREATURE_MANES", detail: "Necropolis • Tier 3 • Base", documentation: "Ghost" },                 // 33
    { label: "CREATURE_GHOST", detail: "Necropolis • Tier 3 • Upgrade", documentation: "Spectre" },            // 34
    { label: "CREATURE_POLTERGEIST", detail: "Necropolis • Tier 3 • Alternative", documentation: "Poltergeist" }, // 154

    // Tier 4
    { label: "CREATURE_VAMPIRE", detail: "Necropolis • Tier 4 • Base", documentation: "Vampire" },             // 35
    { label: "CREATURE_VAMPIRE_LORD", detail: "Necropolis • Tier 4 • Upgrade", documentation: "Vampire Lord" }, // 36
    { label: "CREATURE_NOSFERATU", detail: "Necropolis • Tier 4 • Alternative", documentation: "Nosferatu" },  // 155

    // Tier 5
    { label: "CREATURE_LICH", detail: "Necropolis • Tier 5 • Base", documentation: "Lich" },                   // 37
    { label: "CREATURE_DEMILICH", detail: "Necropolis • Tier 5 • Upgrade", documentation: "Archlich" },        // 38
    { label: "CREATURE_LICH_MASTER", detail: "Necropolis • Tier 5 • Alternative", documentation: "Lich Master" }, // 156

    // Tier 6
    { label: "CREATURE_WIGHT", detail: "Necropolis • Tier 6 • Base", documentation: "Wight" },                 // 39
    { label: "CREATURE_WRAITH", detail: "Necropolis • Tier 6 • Upgrade", documentation: "Wraith" },            // 40
    { label: "CREATURE_BANSHEE", detail: "Necropolis • Tier 6 • Alternative", documentation: "Banshee" },      // 157

    // Tier 7
    { label: "CREATURE_BONE_DRAGON", detail: "Necropolis • Tier 7 • Base", documentation: "Bone Dragon" },     // 41
    { label: "CREATURE_SHADOW_DRAGON", detail: "Necropolis • Tier 7 • Upgrade", documentation: "Spectral Dragon" }, // 42
    { label: "CREATURE_HORROR_DRAGON", detail: "Necropolis • Tier 7 • Alternative", documentation: "Horror Dragon" }, // 158

    // 🌲 SYLVAN
    // Tier 1
    { label: "CREATURE_PIXIE", detail: "Sylvan • Tier 1 • Base", documentation: "Pixie" },                    // 43
    { label: "CREATURE_SPRITE", detail: "Sylvan • Tier 1 • Upgrade", documentation: "Sprite" },               // 44
    { label: "CREATURE_DRYAD", detail: "Sylvan • Tier 1 • Alternative", documentation: "Dryad" },             // 145

    // Tier 2
    { label: "CREATURE_BLADE_JUGGLER", detail: "Sylvan • Tier 2 • Base", documentation: "Blade Dancer" },     // 45
    { label: "CREATURE_WAR_DANCER", detail: "Sylvan • Tier 2 • Upgrade", documentation: "War Dancer" },       // 46
    { label: "CREATURE_BLADE_SINGER", detail: "Sylvan • Tier 2 • Alternative", documentation: "Blade Singer" }, // 146

    // Tier 3
    { label: "CREATURE_WOOD_ELF", detail: "Sylvan • Tier 3 • Base", documentation: "Hunter" },                // 47
    { label: "CREATURE_GRAND_ELF", detail: "Sylvan • Tier 3 • Upgrade", documentation: "Master Hunter" },     // 48
    { label: "CREATURE_SHARP_SHOOTER", detail: "Sylvan • Tier 3 • Alternative", documentation: "Sharp Shooter" }, // 147

    // Tier 4
    { label: "CREATURE_DRUID", detail: "Sylvan • Tier 4 • Base", documentation: "Druid" },                    // 49
    { label: "CREATURE_DRUID_ELDER", detail: "Sylvan • Tier 4 • Upgrade", documentation: "Druid Elder" },     // 50
    { label: "CREATURE_HIGH_DRUID", detail: "Sylvan • Tier 4 • Alternative", documentation: "High Druid" },   // 148

    // Tier 5
    { label: "CREATURE_UNICORN", detail: "Sylvan • Tier 5 • Base", documentation: "Unicorn" },                // 51
    { label: "CREATURE_WAR_UNICORN", detail: "Sylvan • Tier 5 • Upgrade", documentation: "Silver Unicorn" },  // 52
    { label: "CREATURE_WHITE_UNICORN", detail: "Sylvan • Tier 5 • Alternative", documentation: "White Unicorn" }, // 149

    // Tier 6
    { label: "CREATURE_TREANT", detail: "Sylvan • Tier 6 • Base", documentation: "Treant" },                  // 53
    { label: "CREATURE_TREANT_GUARDIAN", detail: "Sylvan • Tier 6 • Upgrade", documentation: "Ancient Treant" }, // 54
    { label: "CREATURE_ANGER_TREANT", detail: "Sylvan • Tier 6 • Alternative", documentation: "Anger Treant" }, // 150

    // Tier 7
    { label: "CREATURE_GREEN_DRAGON", detail: "Sylvan • Tier 7 • Base", documentation: "Green Dragon" },      // 55
    { label: "CREATURE_GOLD_DRAGON", detail: "Sylvan • Tier 7 • Upgrade", documentation: "Gold Dragon" },     // 56
    { label: "CREATURE_RAINBOW_DRAGON", detail: "Sylvan • Tier 7 • Alternative", documentation: "Rainbow Dragon" }, // 151

    // 🧙‍♂️ ACADEMY
    // Tier 1
    { label: "CREATURE_GREMLIN", detail: "Academy • Tier 1 • Base", documentation: "Gremlin" },               // 57
    { label: "CREATURE_MASTER_GREMLIN", detail: "Academy • Tier 1 • Upgrade", documentation: "Master Gremlin" }, // 58
    { label: "CREATURE_GREMLIN_SABOTEUR", detail: "Academy • Tier 1 • Alternative", documentation: "Gremlin Saboteur" }, // 159

    // Tier 2
    { label: "CREATURE_STONE_GARGOYLE", detail: "Academy • Tier 2 • Base", documentation: "Stone Gargoyle" }, // 59
    { label: "CREATURE_OBSIDIAN_GARGOYLE", detail: "Academy • Tier 2 • Upgrade", documentation: "Obsidian Gargoyle" }, // 60
    { label: "CREATURE_MARBLE_GARGOYLE", detail: "Academy • Tier 2 • Alternative", documentation: "Marble Gargoyle" }, // 160

    // Tier 3
    { label: "CREATURE_IRON_GOLEM", detail: "Academy • Tier 3 • Base", documentation: "Iron Golem" },         // 61
    { label: "CREATURE_STEEL_GOLEM", detail: "Academy • Tier 3 • Upgrade", documentation: "Steel Golem" },    // 62
    { label: "CREATURE_OBSIDIAN_GOLEM", detail: "Academy • Tier 3 • Alternative", documentation: "Obsidian Golem" }, // 161

    // Tier 4
    { label: "CREATURE_MAGE", detail: "Academy • Tier 4 • Base", documentation: "Mage" },                     // 63
    { label: "CREATURE_ARCH_MAGE", detail: "Academy • Tier 4 • Upgrade", documentation: "Archmage" },         // 64
    { label: "CREATURE_COMBAT_MAGE", detail: "Academy • Tier 4 • Alternative", documentation: "Combat Mage" }, // 162

    // Tier 5
    { label: "CREATURE_GENIE", detail: "Academy • Tier 5 • Base", documentation: "Djinn" },                   // 65
    { label: "CREATURE_MASTER_GENIE", detail: "Academy • Tier 5 • Upgrade", documentation: "Djinn Sultan" },  // 66
    { label: "CREATURE_DJINN_VIZIER", detail: "Academy • Tier 5 • Alternative", documentation: "Djinn Vizier" }, // 163

    // Tier 6
    { label: "CREATURE_RAKSHASA", detail: "Academy • Tier 6 • Base", documentation: "Rakshasa" },             // 67
    { label: "CREATURE_RAKSHASA_RUKH", detail: "Academy • Tier 6 • Upgrade", documentation: "Rakshasa Rukh" }, // 68
    { label: "CREATURE_RAKSHASA_KSHATRI", detail: "Academy • Tier 6 • Alternative", documentation: "Rakshasa Kshatri" }, // 164

    // Tier 7
    { label: "CREATURE_GIANT", detail: "Academy • Tier 7 • Base", documentation: "Colossus" },                // 69
    { label: "CREATURE_TITAN", detail: "Academy • Tier 7 • Upgrade", documentation: "Titan" },                // 70
    { label: "CREATURE_STORM_LORD", detail: "Academy • Tier 7 • Alternative", documentation: "Storm Lord" },  // 165

    // 🐍 DUNGEON
    // Tier 1
    { label: "CREATURE_SCOUT", detail: "Dungeon • Tier 1 • Base", documentation: "Scout" },                   // 71
    { label: "CREATURE_ASSASSIN", detail: "Dungeon • Tier 1 • Upgrade", documentation: "Assassin" },          // 72
    { label: "CREATURE_STALKER", detail: "Dungeon • Tier 1 • Alternative", documentation: "Stalker" },        // 138

    // Tier 2
    { label: "CREATURE_WITCH", detail: "Dungeon • Tier 2 • Base", documentation: "Witch" },                   // 73
    { label: "CREATURE_BLOOD_WITCH", detail: "Dungeon • Tier 2 • Upgrade", documentation: "Blood Witch" },    // 74
    { label: "CREATURE_BLOOD_WITCH_2", detail: "Dungeon • Tier 2 • Alternative", documentation: "Shadow Witch" }, // 139

    // Tier 3
    { label: "CREATURE_MINOTAUR", detail: "Dungeon • Tier 3 • Base", documentation: "Minotaur" },             // 75
    { label: "CREATURE_MINOTAUR_KING", detail: "Dungeon • Tier 3 • Upgrade", documentation: "Minotaur King" }, // 76
    { label: "CREATURE_MINOTAUR_CAPTAIN", detail: "Dungeon • Tier 3 • Alternative", documentation: "Minotaur Captain" }, // 140

    // Tier 4
    { label: "CREATURE_RIDER", detail: "Dungeon • Tier 4 • Base", documentation: "Rider" },                   // 77
    { label: "CREATURE_RAVAGER", detail: "Dungeon • Tier 4 • Upgrade", documentation: "Ravager" },            // 78
    { label: "CREATURE_BLACK_RIDER", detail: "Dungeon • Tier 4 • Alternative", documentation: "Black Rider" }, // 141

    // Tier 5
    { label: "CREATURE_HYDRA", detail: "Dungeon • Tier 5 • Base", documentation: "Hydra" },                   // 79
    { label: "CREATURE_CHAOS_HYDRA", detail: "Dungeon • Tier 5 • Upgrade", documentation: "Chaos Hydra" },    // 80
    { label: "CREATURE_ACIDIC_HYDRA", detail: "Dungeon • Tier 5 • Alternative", documentation: "Acidic Hydra" }, // 142

    // Tier 6
    { label: "CREATURE_MATRON", detail: "Dungeon • Tier 6 • Base", documentation: "Matron" },                 // 81
    { label: "CREATURE_MATRIARCH", detail: "Dungeon • Tier 6 • Upgrade", documentation: "Matriarch" },        // 82
    { label: "CREATURE_SHADOW_MISTRESS", detail: "Dungeon • Tier 6 • Alternative", documentation: "Shadow Mistress" }, // 143

    // Tier 7
    { label: "CREATURE_DEEP_DRAGON", detail: "Dungeon • Tier 7 • Base", documentation: "Deep Dragon" },       // 83
    { label: "CREATURE_BLACK_DRAGON", detail: "Dungeon • Tier 7 • Upgrade", documentation: "Black Dragon" },  // 84
    { label: "CREATURE_RED_DRAGON", detail: "Dungeon • Tier 7 • Alternative", documentation: "Red Dragon" },  // 144
    
    // ⚒️ FORTRESS
    // Tier 1
    { label: "CREATURE_DEFENDER", detail: "Fortress • Tier 1 • Base", documentation: "Defender" },              // 92
    { label: "CREATURE_STOUT_DEFENDER", detail: "Fortress • Tier 1 • Upgrade", documentation: "Stout Defender" }, // 93
    { label: "CREATURE_STONE_DEFENDER", detail: "Fortress • Tier 1 • Alternative", documentation: "Stone Defender" }, // 166

    // Tier 2
    { label: "CREATURE_AXE_FIGHTER", detail: "Fortress • Tier 2 • Base", documentation: "Axe Fighter" },        // 94
    { label: "CREATURE_AXE_THROWER", detail: "Fortress • Tier 2 • Upgrade", documentation: "Axe Thrower" },     // 95
    { label: "CREATURE_HARPOONER", detail: "Fortress • Tier 2 • Alternative", documentation: "Harpooner" },     // 167

    // Tier 3
    { label: "CREATURE_BEAR_RIDER", detail: "Fortress • Tier 3 • Base", documentation: "Bear Rider" },          // 96
    { label: "CREATURE_BLACKBEAR_RIDER", detail: "Fortress • Tier 3 • Upgrade", documentation: "Blackbear Rider" }, // 97
    { label: "CREATURE_WHITE_BEAR_RIDER", detail: "Fortress • Tier 3 • Alternative", documentation: "White Bear Rider" }, // 168

    // Tier 4
    { label: "CREATURE_BROWLER", detail: "Fortress • Tier 4 • Base", documentation: "Brawler" },                // 98
    { label: "CREATURE_BERSERKER", detail: "Fortress • Tier 4 • Upgrade", documentation: "Berserker" },         // 99
    { label: "CREATURE_BATTLE_RAGER", detail: "Fortress • Tier 4 • Alternative", documentation: "Battle Rager" }, // 169

    // Tier 5
    { label: "CREATURE_RUNE_MAGE", detail: "Fortress • Tier 5 • Base", documentation: "Rune Mage" },            // 100
    { label: "CREATURE_FLAME_MAGE", detail: "Fortress • Tier 5 • Upgrade", documentation: "Flame Mage" },       // 101
    { label: "CREATURE_FLAME_KEEPER", detail: "Fortress • Tier 5 • Alternative", documentation: "Flame Keeper" }, // 170

    // Tier 6
    { label: "CREATURE_THANE", detail: "Fortress • Tier 6 • Base", documentation: "Thane" },                    // 102
    { label: "CREATURE_WARLORD", detail: "Fortress • Tier 6 • Upgrade", documentation: "Warlord" },             // 103
    { label: "CREATURE_THUNDER_THANE", detail: "Fortress • Tier 6 • Alternative", documentation: "Thunder Thane" }, // 171

    // Tier 7
    { label: "CREATURE_FIRE_DRAGON", detail: "Fortress • Tier 7 • Base", documentation: "Fire Dragon" },        // 104
    { label: "CREATURE_MAGMA_DRAGON", detail: "Fortress • Tier 7 • Upgrade", documentation: "Magma Dragon" },   // 105
    { label: "CREATURE_LAVA_DRAGON", detail: "Fortress • Tier 7 • Alternative", documentation: "Lava Dragon" }, // 172

    // 🪓 STRONGHOLD
    // Tier 1
    { label: "CREATURE_GOBLIN", detail: "Stronghold • Tier 1 • Base", documentation: "Goblin" },                // 117
    { label: "CREATURE_GOBLIN_TRAPPER", detail: "Stronghold • Tier 1 • Upgrade", documentation: "Goblin Trapper" }, // 118
    { label: "CREATURE_GOBLIN_DEFILER", detail: "Stronghold • Tier 1 • Alternative", documentation: "Goblin Defiler" }, // 173

    // Tier 2
    { label: "CREATURE_CENTAUR", detail: "Stronghold • Tier 2 • Base", documentation: "Centaur" },              // 119
    { label: "CREATURE_CENTAUR_NOMAD", detail: "Stronghold • Tier 2 • Upgrade", documentation: "Centaur Nomad" }, // 120
    { label: "CREATURE_CENTAUR_MARADEUR", detail: "Stronghold • Tier 2 • Alternative", documentation: "Centaur Marauder" }, // 174

    // Tier 3
    { label: "CREATURE_ORC_WARRIOR", detail: "Stronghold • Tier 3 • Base", documentation: "Orc Warrior" },      // 121
    { label: "CREATURE_ORC_SLAYER", detail: "Stronghold • Tier 3 • Upgrade", documentation: "Orc Slayer" },     // 122
    { label: "CREATURE_ORC_WARMONGER", detail: "Stronghold • Tier 3 • Alternative", documentation: "Orc Warmonger" }, // 175

    // Tier 4
    { label: "CREATURE_SHAMAN", detail: "Stronghold • Tier 4 • Base", documentation: "Shaman" },                // 123
    { label: "CREATURE_SHAMAN_WITCH", detail: "Stronghold • Tier 4 • Upgrade", documentation: "Shaman Witch" }, // 124
    { label: "CREATURE_SHAMAN_HAG", detail: "Stronghold • Tier 4 • Alternative", documentation: "Shaman Hag" }, // 176

    // Tier 5
    { label: "CREATURE_ORCCHIEF_BUTCHER", detail: "Stronghold • Tier 5 • Base", documentation: "Orc Chieftain (Butcher)" }, // 125
    { label: "CREATURE_ORCCHIEF_EXECUTIONER", detail: "Stronghold • Tier 5 • Upgrade", documentation: "Orc Chieftain (Executioner)" }, // 126
    { label: "CREATURE_ORCCHIEF_CHIEFTAIN", detail: "Stronghold • Tier 5 • Alternative", documentation: "Orc Chieftain" }, // 177

    // Tier 6
    { label: "CREATURE_WYVERN", detail: "Stronghold • Tier 6 • Base", documentation: "Wyvern" },               // 127
    { label: "CREATURE_WYVERN_POISONOUS", detail: "Stronghold • Tier 6 • Upgrade", documentation: "Poisonous Wyvern" }, // 128
    { label: "CREATURE_WYVERN_PAOKAI", detail: "Stronghold • Tier 6 • Alternative", documentation: "Paokai" }, // 178

    // Tier 7
    { label: "CREATURE_CYCLOP", detail: "Stronghold • Tier 7 • Base", documentation: "Cyclops" },              // 129
    { label: "CREATURE_CYCLOP_UNTAMED", detail: "Stronghold • Tier 7 • Upgrade", documentation: "Untamed Cyclops" }, // 130
    { label: "CREATURE_CYCLOP_BLOODEYED", detail: "Stronghold • Tier 7 • Alternative", documentation: "Bloodeyed Cyclops" }, // 179

    // 🐺 NEUTRALS
    { label: "CREATURE_FIRE_ELEMENTAL", detail: "Neutral • Elemental", documentation: "Fire Elemental" },     // 85
    { label: "CREATURE_WATER_ELEMENTAL", detail: "Neutral • Elemental", documentation: "Water Elemental" },   // 86
    { label: "CREATURE_EARTH_ELEMENTAL", detail: "Neutral • Elemental", documentation: "Earth Elemental" },   // 87
    { label: "CREATURE_AIR_ELEMENTAL", detail: "Neutral • Elemental", documentation: "Air Elemental" },       // 88

    { label: "CREATURE_BLACK_KNIGHT", detail: "Neutral • Undead", documentation: "Black Knight" },            // 89

    { label: "CREATURE_PHOENIX", detail: "Neutral • Elite", documentation: "Phoenix" },                       // 91

    { label: "CREATURE_WOLF", detail: "Neutral • Beast", documentation: "Wolf" },                             // 113
    { label: "CREATURE_MANTICORE", detail: "Neutral • Beast", documentation: "Manticore" },                   // 115
    { label: "CREATURE_MUMMY", detail: "Neutral • Undead", documentation: "Mummy" },                          // 116

    // ⚙️ WAR MACHINES
    { label: "WAR_MACHINE_BALLISTA", detail: "War Machine", documentation: "Ballista" },        // 1
    { label: "WAR_MACHINE_CATAPULT", detail: "War Machine", documentation: "Catapult" },        // 2
    { label: "WAR_MACHINE_FIRST_AID_TENT", detail: "War Machine", documentation: "First Aid Tent" }, // 3
    { label: "WAR_MACHINE_AMMO_CART", detail: "War Machine", documentation: "Ammo Cart" },      // 4

    // 🔥 DESTRUCTIVE MAGIC
    { label: "SPELL_MAGIC_ARROW", detail: "Destructive", documentation: "Magic Arrow" }, // 1
    { label: "SPELL_MAGIC_FIST", detail: "Destructive", documentation: "Fist of Wrath" }, // 2
    { label: "SPELL_LIGHTNING_BOLT", detail: "Destructive", documentation: "Lightning Bolt" }, // 3
    { label: "SPELL_ICE_BOLT", detail: "Destructive", documentation: "Ice Bolt" }, // 4
    { label: "SPELL_FIREBALL", detail: "Destructive", documentation: "Fireball" }, // 5
    { label: "SPELL_FROST_RING", detail: "Destructive", documentation: "Circle of Winter" }, // 6
    { label: "SPELL_CHAIN_LIGHTNING", detail: "Destructive", documentation: "Chain Lightning" }, // 7
    { label: "SPELL_METEOR_SHOWER", detail: "Destructive", documentation: "Meteor Shower" }, // 8
    { label: "SPELL_IMPLOSION", detail: "Destructive", documentation: "Implosion" }, // 9
    { label: "SPELL_ARMAGEDDON", detail: "Destructive", documentation: "Armageddon" }, // 10
    { label: "SPELL_DEEP_FREEZE", detail: "Destructive", documentation: "Deep Freeze" }, // 279
    { label: "SPELL_FIREWALL", detail: "Destructive", documentation: "Firewall" }, // 236
    { label: "SPELL_STONE_SPIKES", detail: "Destructive", documentation: "Stone Spikes" }, // 237
    { label: "SPELL_UBER_CHAIN_LIGHTNING", detail: "Destructive", documentation: "Uber Chain Lightning" }, // 238

    // 💀 DARK MAGIC
    { label: "SPELL_CURSE", detail: "Dark", documentation: "Suffering" }, // 11
    { label: "SPELL_SLOW", detail: "Dark", documentation: "Slow" }, // 12
    { label: "SPELL_DISRUPTING_RAY", detail: "Dark", documentation: "Vulnerability" }, // 13
    { label: "SPELL_PLAGUE", detail: "Dark", documentation: "Decay" }, // 14
    { label: "SPELL_WEAKNESS", detail: "Dark", documentation: "Weakness" }, // 15
    { label: "SPELL_FORGETFULNESS", detail: "Dark", documentation: "Confusion" }, // 17
    { label: "SPELL_BERSERK", detail: "Dark", documentation: "Frenzy" }, // 18
    { label: "SPELL_BLIND", detail: "Dark", documentation: "Blindness" }, // 19
    { label: "SPELL_HYPNOTIZE", detail: "Dark", documentation: "Puppet Master" }, // 20
    { label: "SPELL_UNHOLY_WORD", detail: "Dark", documentation: "Curse of the Netherworld" }, // 21
    { label: "SPELL_SORROW", detail: "Dark", documentation: "Sorrow" }, // 277
    { label: "SPELL_VAMPIRISM", detail: "Dark", documentation: "Vampirism" }, // 278

    // ✨ LIGHT MAGIC
    { label: "SPELL_BLESS", detail: "Light", documentation: "Divine Strength" }, // 23
    { label: "SPELL_HASTE", detail: "Light", documentation: "Haste" }, // 24
    { label: "SPELL_STONESKIN", detail: "Light", documentation: "Endurance" }, // 25
    { label: "SPELL_DISPEL", detail: "Light", documentation: "Cleansing" }, // 26
    { label: "SPELL_CELESTIAL_SHIELD", detail: "Light", documentation: "Arcane Armor" }, // 34
    { label: "SPELL_HOLY_WORD", detail: "Light", documentation: "Word of Light" }, // 35
    { label: "SPELL_RESURRECT", detail: "Light", documentation: "Resurrection" }, // 48
    { label: "SPELL_ENCOURAGE", detail: "Light", documentation: "Divine Guidance" }, // 52
    { label: "SPELL_HOLY_CHARGE", detail: "Light", documentation: "Holy Charge" }, // 53
    { label: "SPELL_PRAYER", detail: "Light", documentation: "Benediction" }, // 54
    { label: "SPELL_DIVINE_VENGEANCE", detail: "Light", documentation: "Divine Vengeance" }, // 281

    // 🌿 SUMMONING MAGIC
    { label: "SPELL_WASP_SWARM", detail: "Summoning", documentation: "Wasp Swarm" }, // 39
    { label: "SPELL_PHANTOM", detail: "Summoning", documentation: "Phantom Forces" }, // 40
    { label: "SPELL_ANIMATE_DEAD", detail: "Summoning", documentation: "Raise Dead" }, // 42
    { label: "SPELL_SUMMON_ELEMENTALS", detail: "Summoning", documentation: "Summon Elementals" }, // 43
    { label: "SPELL_SUMMON_BOAT", detail: "Summoning", documentation: "Vessel of Shalassa" }, // 49
    { label: "SPELL_DIMENSION_DOOR", detail: "Summoning", documentation: "Instant Travel" }, // 50
    { label: "SPELL_ARCANE_CRYSTAL", detail: "Summoning", documentation: "Arcane Crystal" }, // 282
    { label: "SPELL_SUMMON_HIVE", detail: "Summoning", documentation: "Summon Hive" }, // 283
    { label: "SPELL_BLADE_BARRIER", detail: "Summoning", documentation: "Blade Barrier" }, // 284
    { label: "SPELL_CONJURE_PHOENIX", detail: "Summoning", documentation: "Conjure Phoenix" }, // 235

    // ⚡ MASS SPELLS
    { label: "SPELL_MASS_CURSE", detail: "Mass Spell", documentation: "Mass Suffering" }, // 210
    { label: "SPELL_MASS_DISRUPTING_RAY", detail: "Mass Spell", documentation: "Mass Vulnerability" }, // 211
    { label: "SPELL_MASS_SLOW", detail: "Mass Spell", documentation: "Mass Slow" }, // 212
    { label: "SPELL_MASS_FORGETFULNESS", detail: "Mass Spell", documentation: "Mass Confusion" }, // 213
    { label: "SPELL_MASS_PLAGUE", detail: "Mass Spell", documentation: "Mass Decay" }, // 214
    { label: "SPELL_MASS_WEAKNESS", detail: "Mass Spell", documentation: "Mass Weakness" }, // 215
    { label: "SPELL_MASS_BLESS", detail: "Mass Spell", documentation: "Mass Divine Strength" }, // 216
    { label: "SPELL_MASS_DISPEL", detail: "Mass Spell", documentation: "Mass Cleansing" }, // 217
    { label: "SPELL_MASS_STONESKIN", detail: "Mass Spell", documentation: "Mass Endurance" }, // 218
    { label: "SPELL_MASS_DEFLECT_ARROWS", detail: "Mass Spell", documentation: "Mass Deflect Missile" }, // 219
    { label: "SPELL_MASS_BLOODLUST", detail: "Mass Spell", documentation: "Mass Righteous Might" }, // 220
    { label: "SPELL_MASS_HASTE", detail: "Mass Spell", documentation: "Mass Haste" }, // 221

    // ⚡ EMPOWERED (WARLOCK)
    { label: "SPELL_EMPOWERED_MAGIC_ARROW", detail: "Empowered", documentation: "Empowered Magic Arrow" }, // 223
    { label: "SPELL_EMPOWERED_MAGIC_FIST", detail: "Empowered", documentation: "Empowered Fist of Wrath" }, // 224
    { label: "SPELL_EMPOWERED_LIGHTNING_BOLT", detail: "Empowered", documentation: "Empowered Lightning Bolt" }, // 225
    { label: "SPELL_EMPOWERED_ICE_BOLT", detail: "Empowered", documentation: "Empowered Ice Bolt" }, // 226
    { label: "SPELL_EMPOWERED_FIREBALL", detail: "Empowered", documentation: "Empowered Fireball" }, // 227
    { label: "SPELL_EMPOWERED_FROST_RING", detail: "Empowered", documentation: "Empowered Frost Ring" }, // 228
    { label: "SPELL_EMPOWERED_CHAIN_LIGHTNING", detail: "Empowered", documentation: "Empowered Chain Lightning" }, // 229
    { label: "SPELL_EMPOWERED_METEOR_SHOWER", detail: "Empowered", documentation: "Empowered Meteor Shower" }, // 230
    { label: "SPELL_EMPOWERED_IMPLOSION", detail: "Empowered", documentation: "Empowered Implosion" }, // 231
    { label: "SPELL_EMPOWERED_ARMAGEDDON", detail: "Empowered", documentation: "Empowered Armageddon" }, // 232
    { label: "SPELL_EMPOWERED_STONE_SPIKES", detail: "Empowered", documentation: "Empowered Stone Spikes" }, // 233

    // 🪓 WARCRIES (STRONGHOLD)
    { label: "SPELL_WARCRY_RALLING_CRY", detail: "Warcry", documentation: "Rallying Cry" }, // 290
    { label: "SPELL_WARCRY_CALL_OF_BLOOD", detail: "Warcry", documentation: "Call of Blood" }, // 291
    { label: "SPELL_WARCRY_WORD_OF_THE_CHIEF", detail: "Warcry", documentation: "Word of the Chief" }, // 292
    { label: "SPELL_WARCRY_FEAR_MY_ROAR", detail: "Warcry", documentation: "Fear My Roar" }, // 293
    { label: "SPELL_WARCRY_BATTLECRY", detail: "Warcry", documentation: "Battlecry" }, // 294
    { label: "SPELL_WARCRY_SHOUT_OF_MANY", detail: "Warcry", documentation: "Shout of Many" }, // 295

    // 🧩 HERO ABILITIES
    { label: "SPELL_DEMONIC_STRIKE_CAST", detail: "Ability", documentation: "Mark of the Damned (Cast)" }, // 55
    { label: "SPELL_DEMONIC_STRIKE", detail: "Ability", documentation: "Mark of the Damned" }, // 56
    { label: "SPELL_CONSUME_CORPSE", detail: "Ability", documentation: "Souldrinker" }, // 57
    { label: "SPELL_SPIRIT_LINK", detail: "Ability", documentation: "Mark of the Necromancer" }, // 58
    { label: "SPELL_DEATH_SCREAM", detail: "Ability", documentation: "Banshee Howl" }, // 59
    { label: "SPELL_SNIPE_DEAD", detail: "Ability", documentation: "Deadeye Shot" }, // 60
    { label: "SPELL_MULTISHOT", detail: "Ability", documentation: "Rain of Arrows" }, // 61
    { label: "SPELL_IMBUE_ARROW", detail: "Ability", documentation: "Imbue Arrow" }, // 62
    { label: "SPELL_ABILITY_MAGIC_BOND", detail: "Ability", documentation: "Mark of the Wizard" }, // 63
    { label: "SPELL_ABILITY_MELT_ARTIFACT", detail: "Ability", documentation: "Consume Artifact" }, // 64
    { label: "SPELL_ABILITY_COUNTERSPELL", detail: "Ability", documentation: "Counterspell" }, // 65
    { label: "SPELL_ABILITY_UNSUMMON", detail: "Ability", documentation: "Banish" }, // 66
    { label: "SPELL_ABILITY_DARK_RITUAL", detail: "Ability", documentation: "Dark Ritual" }, // 67

    // 🧠 SKILLS (SPELL-SKILLS)
    { label: "SPELL_SKILL_OFFENCE1", detail: "Skill", documentation: "Offence I" }, // 68
    { label: "SPELL_SKILL_OFFENCE2", detail: "Skill", documentation: "Offence II" }, // 69
    { label: "SPELL_SKILL_OFFENCE3", detail: "Skill", documentation: "Offence III" }, // 70
    { label: "SPELL_SKILL_ARCHERY", detail: "Skill", documentation: "Archery" }, // 71
    { label: "SPELL_SKILL_FRENZY", detail: "Skill", documentation: "Battle Frenzy" }, // 72
    { label: "SPELL_SKILL_DEFENCE1", detail: "Skill", documentation: "Defense I" }, // 73
    { label: "SPELL_SKILL_DEFENCE2", detail: "Skill", documentation: "Defense II" }, // 74
    { label: "SPELL_SKILL_DEFENCE3", detail: "Skill", documentation: "Defense III" }, // 75
    { label: "SPELL_SKILL_PROTECTION", detail: "Skill", documentation: "Protection" }, // 76
    { label: "SPELL_SKILL_EVASION", detail: "Skill", documentation: "Evasion" }, // 77
    { label: "SPELL_SKILL_TOUGHNESS", detail: "Skill", documentation: "Vitality" }, // 78
    { label: "SPELL_SKILL_LUCK1", detail: "Skill", documentation: "Luck I" }, // 79
    { label: "SPELL_SKILL_LUCK2", detail: "Skill", documentation: "Luck II" }, // 80
    { label: "SPELL_SKILL_LUCK3", detail: "Skill", documentation: "Luck III" }, // 81
    { label: "SPELL_SKILL_RESISTANCE", detail: "Skill", documentation: "Magic Resistance" }, // 82
    { label: "SPELL_SKILL_LUCKY_STRIKE", detail: "Skill", documentation: "Soldier's Luck" }, // 83
    { label: "SPELL_SKILL_LEADERSHIP1", detail: "Skill", documentation: "Leadership I" }, // 84
    { label: "SPELL_SKILL_LEADERSHIP2", detail: "Skill", documentation: "Leadership II" }, // 85
    { label: "SPELL_SKILL_LEADERSHIP3", detail: "Skill", documentation: "Leadership III" }, // 86
    { label: "SPELL_SKILL_WAR_MACHINES1", detail: "Skill", documentation: "War Machines I" }, // 87
    { label: "SPELL_SKILL_WAR_MACHINES2", detail: "Skill", documentation: "War Machines II" }, // 88
    { label: "SPELL_SKILL_WAR_MACHINES3", detail: "Skill", documentation: "War Machines III" }, // 89
    { label: "SPELL_SKILL_FIRST_AID", detail: "Skill", documentation: "First Aid" }, // 90
    { label: "SPELL_SKILL_BALLISTA", detail: "Skill", documentation: "Ballista" }, // 91
    { label: "SPELL_SKILL_CATAPULT", detail: "Skill", documentation: "Catapult" }, // 92
    { label: "SPELL_SKILL_DEMONIC_FIRE", detail: "Skill", documentation: "Hellfire" }, // 93
    { label: "SPELL_SKILL_ELVEN_VOLLEY", detail: "Skill", documentation: "Storm of Arrows" }, // 94
    { label: "SPELL_SKILL_MATRON_SALVO", detail: "Skill", documentation: "Matron's Salvo" }, // 95
    { label: "SPELL_SKILL_ANCIENT_SMITHY", detail: "Skill", documentation: "Fiery Wrath" }, // 96
    { label: "SPELL_SKILL_FIRE_PROTECTION", detail: "Skill", documentation: "Fire Resistance" }, // 97

    // 🥇 SPECIALIZATIONS
    { label: "SPELL_SPEC_FOREST_GUARDIAN", detail: "Specialization", documentation: "Forest Guardian" }, // 114
    { label: "SPELL_SPEC_ZOMBIES", detail: "Specialization", documentation: "Zombies" }, // 115
    { label: "SPELL_SPEC_VAMPIRES", detail: "Specialization", documentation: "Vampires" }, // 116
    { label: "SPELL_SPEC_EMPIRIC", detail: "Specialization", documentation: "Empiric" }, // 117
    { label: "SPELL_SPEC_SOULHUNTER", detail: "Specialization", documentation: "Soulhunter" }, // 118
    { label: "SPELL_SPEC_MASTER_OF_ELEMENTS", detail: "Specialization", documentation: "Master of Elements" }, // 119
    { label: "SPELL_SPEC_GREMLINS", detail: "Specialization", documentation: "Gremlins" }, // 120
    { label: "SPELL_SPEC_GOLEMS", detail: "Specialization", documentation: "Golems" }, // 121
    { label: "SPELL_SPEC_MAGES", detail: "Specialization", documentation: "Mages" }, // 122
    { label: "SPELL_SPEC_PRUDENT", detail: "Specialization", documentation: "Prudent" }, // 123
    { label: "SPELL_SPEC_EVASIVE", detail: "Specialization", documentation: "Evasive" }, // 124
    { label: "SPELL_SPEC_RIDERS", detail: "Specialization", documentation: "Riders" }, // 125
    { label: "SPELL_SPEC_MATRON_SALVO", detail: "Specialization", documentation: "Matron Salvo" }, // 126
    { label: "SPELL_SPEC_SAVAGE", detail: "Specialization", documentation: "Savage" }, // 127
    { label: "SPELL_SPEC_WITCHES", detail: "Specialization", documentation: "Witches" }, // 128
    { label: "SPELL_SPEC_MINOTAURS", detail: "Specialization", documentation: "Minotaurs" }, // 129

    // 🏰 TOWN BUFFS
    { label: "SPELL_TOWN_OFFENCE_P1", detail: "Town Buff", documentation: "Town Offence +1" }, // 130
    { label: "SPELL_TOWN_OFFENCE_M1", detail: "Town Buff", documentation: "Town Offence -1" }, // 131
    { label: "SPELL_TOWN_DEFENCE_P1", detail: "Town Buff", documentation: "Town Defence +1" }, // 132
    { label: "SPELL_TOWN_DEFENCE_M1", detail: "Town Buff", documentation: "Town Defence -1" }, // 133
    { label: "SPELL_TOWN_OFFENCE_DEFENCE_P1", detail: "Town Buff", documentation: "Town Off/Def +1" }, // 134
    { label: "SPELL_TOWN_OFFENCE_DEFENCE_M1", detail: "Town Buff", documentation: "Town Off/Def -1" }, // 135

    { label: "SPELL_TOWN_OFFENCE_P2", detail: "Town Buff", documentation: "Town Offence +2" }, // 136
    { label: "SPELL_TOWN_OFFENCE_M2", detail: "Town Buff", documentation: "Town Offence -2" }, // 137
    { label: "SPELL_TOWN_DEFENCE_P2", detail: "Town Buff", documentation: "Town Defence +2" }, // 138
    { label: "SPELL_TOWN_DEFENCE_M2", detail: "Town Buff", documentation: "Town Defence -2" }, // 139
    { label: "SPELL_TOWN_OFFENCE_DEFENCE_P2", detail: "Town Buff", documentation: "Town Off/Def +2" }, // 140
    { label: "SPELL_TOWN_OFFENCE_DEFENCE_M2", detail: "Town Buff", documentation: "Town Off/Def -2" }, // 141

    { label: "SPELL_TOWN_LUCK_P1", detail: "Town Buff", documentation: "Town Luck +1" }, // 142
    { label: "SPELL_TOWN_LUCK_M1", detail: "Town Buff", documentation: "Town Luck -1" }, // 143
    { label: "SPELL_TOWN_MORALE_P1", detail: "Town Buff", documentation: "Town Morale +1" }, // 144
    { label: "SPELL_TOWN_MORALE_M1", detail: "Town Buff", documentation: "Town Morale -1" }, // 145

    { label: "SPELL_TOWN_ELVEN_CAPITAL", detail: "Town Buff", documentation: "Elven Capital" }, // 146
    { label: "SPELL_TOWN_WALLS", detail: "Town Buff", documentation: "Town Walls" }, // 147
    { label: "SPELL_TOWN_TOWERS", detail: "Town Buff", documentation: "Town Towers" }, // 148
    { label: "SPELL_TOWN_UNHOLY_TEMPLE", detail: "Town Buff", documentation: "Unholy Temple" }, // 149
    { label: "SPELL_TOWN_DARK_GUARDIAN", detail: "Town Buff", documentation: "Dark Guardian" }, // 150

    { label: "SPELL_TOWN_SPARKLING_FOUNTAIN", detail: "Town Buff", documentation: "Sparkling Fountain" }, // 151
    { label: "SPELL_TOWN_DIETY_OF_FIRE", detail: "Town Buff", documentation: "Deity of Fire" }, // 152
    { label: "SPELL_TOWN_INFERNAL_LOOM", detail: "Town Buff", documentation: "Infernal Loom" }, // 153

    // 🧩 ABILITIES
    { label: "SPELL_ABILITY_BATTLE_DIVE", detail: "Ability", documentation: "Battle Dive" }, // 154
    { label: "SPELL_ABILITY_BATTLE_DIVE_FINISH", detail: "Ability", documentation: "Battle Dive (Finish)" }, // 155
    { label: "SPELL_ABILITY_LAY_HANDS", detail: "Ability", documentation: "Lay Hands" }, // 156
    { label: "SPELL_ABILITY_RESURRECT_ALLIES", detail: "Ability", documentation: "Resurrect Allies" }, // 157
    { label: "SPELL_ABILITY_SCATTER_SHOT", detail: "Ability", documentation: "Scatter Shot" }, // 158
    { label: "SPELL_ABILITY_GATING", detail: "Ability", documentation: "Gating" }, // 159
    { label: "SPELL_ABILITY_FEAR", detail: "Ability", documentation: "Fear" }, // 160
    { label: "SPELL_ABILITY_SUMMON_BALOR", detail: "Ability", documentation: "Summon Balor" }, // 161

    { label: "SPELL_ABILITY_EXPLOSION", detail: "Ability", documentation: "Explosion" }, // 162
    { label: "SPELL_ABILITY_EXPLOSION_EFFECT", detail: "Ability", documentation: "Explosion (Effect)" }, // 163
    { label: "SPELL_ABILITY_CHAIN_SHOT_END_EFFECT", detail: "Ability", documentation: "Chain Shot (End)" }, // 164
    { label: "SPELL_ABILITY_MANA_DESTROY", detail: "Ability", documentation: "Mana Destroy" }, // 165
    { label: "SPELL_ABILITY_MANA_STEAL", detail: "Ability", documentation: "Mana Steal" }, // 166
    { label: "SPELL_ABILITY_LIFE_DRAIN", detail: "Ability", documentation: "Life Drain" }, // 167
    { label: "SPELL_ABILITY_MANA_DRAIN", detail: "Ability", documentation: "Mana Drain" }, // 168
    { label: "SPELL_ABILITY_DEATH_CLOUD", detail: "Ability", documentation: "Death Cloud" }, // 169
    { label: "SPELL_ABILITY_HARM_TOUCH", detail: "Ability", documentation: "Harm Touch" }, // 170
    { label: "SPELL_ABILITY_MANA_FEED", detail: "Ability", documentation: "Mana Feed" }, // 171
    { label: "SPELL_ABILITY_ENTANGLING_ROOTS", detail: "Ability", documentation: "Entangling Roots" }, // 172
    { label: "SPELL_ABILITY_REPAIR", detail: "Ability", documentation: "Repair" }, // 173
    { label: "SPELL_ABILITY_RANDOM_CAST_DARK", detail: "Ability", documentation: "Random Dark Spell" }, // 174
    { label: "SPELL_ABILITY_RANDOM_CAST_DARK_LIGHT", detail: "Ability", documentation: "Random Dark/Light Spell" }, // 175
    { label: "SPELL_ABILITY_DASH", detail: "Ability", documentation: "Dash" }, // 176
    { label: "SPELL_ABILITY_DASH_EFFECT", detail: "Ability", documentation: "Dash (Effect)" }, // 177

    // ✨ EFFECTS
    { label: "SPELL_REMOTE_CONTROL", detail: "Spell", documentation: "Remote Control" }, // 178
    { label: "SPELL_EFFECT_ARMOR_CRUSHING", detail: "Effect", documentation: "Armor Crushing" }, // 179
    { label: "SPELL_ABILITY_POISONOUS_ATTACK", detail: "Ability", documentation: "Poisonous Attack" }, // 180
    { label: "SPELL_LIZARD_BITE_HIT", detail: "Ability", documentation: "Lizard Bite" }, // 181
    { label: "SPELL_EFFECT_REGENERATION", detail: "Effect", documentation: "Regeneration" }, // 182
    { label: "SPELL_EFFECT_REBIRTH", detail: "Effect", documentation: "Rebirth" }, // 183

    { label: "SPELL_ABILITY_FROST_BREATH", detail: "Ability", documentation: "Frost Breath" }, // 184
    { label: "SPELL_EFFECT_BAD_LUCK", detail: "Effect", documentation: "Bad Luck" }, // 185
    { label: "SPELL_EFFECT_GOOD_LUCK", detail: "Effect", documentation: "Good Luck" }, // 186
    { label: "SPELL_EFFECT_BAD_MORALE", detail: "Effect", documentation: "Bad Morale" }, // 187
    { label: "SPELL_EFFECT_GOOD_MORALE", detail: "Effect", documentation: "Good Morale" }, // 188
    { label: "SPELL_EFFECT_FIRST_AID_TENT_HEAL", detail: "Effect", documentation: "First Aid Tent Heal" }, // 189
    { label: "SPELL_EFFECT_CLERIC_HIT", detail: "Effect", documentation: "Cleric Hit" }, // 190
    { label: "SPELL_EFFECT_COMBAT_HIT_00", detail: "Effect", documentation: "Combat Hit 00" }, // 191
    { label: "SPELL_EFFECT_COMBAT_HIT_01", detail: "Effect", documentation: "Combat Hit 01" }, // 192
    { label: "SPELL_EFFECT_COMBAT_HIT_02", detail: "Effect", documentation: "Combat Hit 02" }, // 193
    { label: "SPELL_EFFECT_WAR_MACHINE_HIT", detail: "Effect", documentation: "War Machine Hit" }, // 194
    { label: "SPELL_EFFECT_FIRST_AID_HIT", detail: "Effect", documentation: "First Aid Hit" }, // 195
    { label: "SPELL_EFFECT_FIRE_HIT", detail: "Effect", documentation: "Fire Hit" }, // 196
    { label: "SPELL_EFFECT_BASH_HIT", detail: "Effect", documentation: "Bash Hit" }, // 197
    { label: "SPELL_EFFECT_SUN_FIRE", detail: "Effect", documentation: "Sun Fire" }, // 198
    { label: "SPELL_EFFECT_SOIL_BURN", detail: "Effect", documentation: "Soil Burn" }, // 199
    { label: "SPELL_EFFECT_CATAPULT_CHARGE_EXPLOSION", detail: "Effect", documentation: "Catapult Explosion" }, // 200
    { label: "SPELL_EFFECT_FROZEN", detail: "Effect", documentation: "Frozen" }, // 201
    { label: "SPELL_EFFECT_FIRE_DAMAGE", detail: "Effect", documentation: "Fire Damage" }, // 202
    { label: "SPELL_EFFECT_LAND_MINE_EXPLOSION", detail: "Effect", documentation: "Land Mine Explosion" }, // 203
    { label: "SPELL_EFFECT_PHANTOM_OUT", detail: "Effect", documentation: "Phantom Out" }, // 204
    { label: "SPELL_EFFECT_FIRE_SHIELD", detail: "Effect", documentation: "Fire Shield" }, // 205
    { label: "SPELL_EFFECT_DIMENSION_DOOR_END", detail: "Effect", documentation: "Dimension Door End" }, // 206

    { label: "SPELL_DEMON_SOVEREIGN_FX", detail: "Effect", documentation: "Demon Sovereign FX" }, // 239

    // 🧠 SKILLS
    { label: "SPELL_SKILL_CHILLING_BONES", detail: "Skill", documentation: "Chilling Bones" }, // 207
    { label: "SPELL_DEBUG_TELEPORT", detail: "Debug", documentation: "Debug Teleport" }, // 208
    { label: "SPELL_ABILITY_ENRAGED", detail: "Ability", documentation: "Enraged" }, // 209

    // 🎮 Player IDs
    { label: "PLAYER_NONE", detail: "Player", documentation: "No Player" }, // 0
    { label: "PLAYER_1", detail: "Player", documentation: "Player 1" }, // 1
    { label: "PLAYER_2", detail: "Player", documentation: "Player 2" }, // 2
    { label: "PLAYER_3", detail: "Player", documentation: "Player 3" }, // 3
    { label: "PLAYER_4", detail: "Player", documentation: "Player 4" }, // 4
    { label: "PLAYER_5", detail: "Player", documentation: "Player 5" }, // 5
    { label: "PLAYER_6", detail: "Player", documentation: "Player 6" }, // 6
    { label: "PLAYER_7", detail: "Player", documentation: "Player 7" }, // 7
    { label: "PLAYER_8", detail: "Player", documentation: "Player 8" }, // 8

    // 🌍 FLOORS
    { label: "GROUND", detail: "Floor", documentation: "Ground Level" }, // 0
    { label: "UNDERGROUND", detail: "Floor", documentation: "Underground Level" }, // 1

    // 💎 RESOURCES
    { label: "WOOD", detail: "Resource", documentation: "Wood" }, // 0
    { label: "ORE", detail: "Resource", documentation: "Ore" }, // 1
    { label: "MERCURY", detail: "Resource", documentation: "Mercury" }, // 2
    { label: "CRYSTAL", detail: "Resource", documentation: "Crystal" }, // 3
    { label: "SULFUR", detail: "Resource", documentation: "Sulfur" }, // 4
    { label: "GEM", detail: "Resource", documentation: "Gem" }, // 5
    { label: "GOLD", detail: "Resource", documentation: "Gold" }, // 6

    // 📅 DATE TYPES
    { label: "DAY", detail: "Date", documentation: "Day" }, // 0
    { label: "WEEK", detail: "Date", documentation: "Week" }, // 1
    { label: "MONTH", detail: "Date", documentation: "Month" }, // 2
    { label: "DAY_OF_WEEK", detail: "Date", documentation: "Day of Week" }, // 3
    { label: "ABSOLUTE_DAY", detail: "Date", documentation: "Absolute Day" }, // alias of DAY

    // 🧙‍♂️ HERO STATS
    { label: "STAT_EXPERIENCE", detail: "Hero Stat", documentation: "Experience" }, // 0
    { label: "STAT_ATTACK", detail: "Hero Stat", documentation: "Attack" }, // 1
    { label: "STAT_DEFENCE", detail: "Hero Stat", documentation: "Defence" }, // 2
    { label: "STAT_SPELL_POWER", detail: "Hero Stat", documentation: "Spell Power" }, // 3
    { label: "STAT_KNOWLEDGE", detail: "Hero Stat", documentation: "Knowledge" }, // 4
    { label: "STAT_LUCK", detail: "Hero Stat", documentation: "Luck" }, // 5
    { label: "STAT_MORALE", detail: "Hero Stat", documentation: "Morale" }, // 6
    { label: "STAT_MOVE_POINTS", detail: "Hero Stat", documentation: "Movement Points" }, // 7
    { label: "STAT_MANA_POINTS", detail: "Hero Stat", documentation: "Mana Points" }, // 8

    // 🎯 OBJECTIVE STATES
    { label: "OBJECTIVE_SCENARIO_INFO", detail: "Objective", documentation: "Scenario Info" }, // 0
    { label: "OBJECTIVE_UNKNOWN", detail: "Objective", documentation: "Unknown" }, // 1
    { label: "OBJECTIVE_ACTIVE", detail: "Objective", documentation: "Active" }, // 2
    { label: "OBJECTIVE_COMPLETED", detail: "Objective", documentation: "Completed" }, // 3
    { label: "OBJECTIVE_FAILED", detail: "Objective", documentation: "Failed" }, // 4

    // 🧥 ARTIFACT IDs
    { label: "ARTIFACT_SWORD_OF_RUINS", detail: "Artifact", documentation: "Sword of Might" }, // 1
    { label: "ARTIFACT_GREAT_AXE_OF_GIANT_SLAYING", detail: "Artifact", documentation: "Axe of the Mountain Lords" }, // 2
    { label: "ARTIFACT_WAND_OF_X", detail: "Artifact", documentation: "Wand of X" }, // 3
    { label: "ARTIFACT_UNICORN_HORN_BOW", detail: "Artifact", documentation: "Unicorn Horn Bow" }, // 4
    { label: "ARTIFACT_TITANS_TRIDENT", detail: "Artifact", documentation: "Trident of the Titans" }, // 5
    { label: "ARTIFACT_STAFF_OF_VEXINGS", detail: "Artifact", documentation: "Staff of Ensnarement" }, // 6
    { label: "ARTIFACT_SHACKLES_OF_WAR", detail: "Artifact", documentation: "Shackles of the Last Man" }, // 7
    { label: "ARTIFACT_FOUR_LEAF_CLOVER", detail: "Artifact", documentation: "Four Leaf Clover" }, // 8
    { label: "ARTIFACT_ICEBERG_SHIELD", detail: "Artifact", documentation: "Shield of Crystal Ice" }, // 9
    { label: "ARTIFACT_GOLDEN_SEXTANT", detail: "Artifact", documentation: "Sextant of the Sea Elves" }, // 10
    { label: "ARTIFACT_CROWN_OF_COURAGE", detail: "Artifact", documentation: "Lion Crown" }, // 11
    { label: "ARTIFACT_CROWN_OF_MANY_EYES", detail: "Artifact", documentation: "All-Seeing Crown" }, // 12
    { label: "ARTIFACT_PLATE_MAIL_OF_STABILITY", detail: "Artifact", documentation: "Armor of the Forgotten Hero" }, // 13
    { label: "ARTIFACT_BREASTPLATE_OF_PETRIFIED_WOOD", detail: "Artifact", documentation: "Breastplate of Eldritch Might" }, // 14
    { label: "ARTIFACT_PEDANT_OF_MASTERY", detail: "Artifact", documentation: "Pendant of Mastery" }, // 15
    { label: "ARTIFACT_NECKLACE_OF_BRAVERY", detail: "Artifact", documentation: "Necklace of the Lion" }, // 16
    { label: "ARTIFACT_WEREWOLF_CLAW_NECKLACE", detail: "Artifact", documentation: "Necklace of the Bloody Claw" }, // 17
    { label: "ARTIFACT_EVERCOLD_ICICLE", detail: "Artifact", documentation: "Pendant of Winter's Grip" }, // 18
    { label: "ARTIFACT_NECKLACE_OF_POWER", detail: "Artifact", documentation: "Necklace of Victory" }, // 19
    { label: "ARTIFACT_RING_OF_LIGHTING_PROTECTION", detail: "Artifact", documentation: "Ring of Lightning Protection" }, // 20
    { label: "ARTIFACT_RING_OF_LIFE", detail: "Artifact", documentation: "Ring of Vitality" }, // 21
    { label: "ARTIFACT_RING_OF_HASTE", detail: "Artifact", documentation: "Ring of Speed" }, // 22
    { label: "ARTIFACT_NIGHTMARISH_RING", detail: "Artifact", documentation: "Ring of the Broken Spirits" }, // 23
    { label: "ARTIFACT_BOOTS_OF_SPEED", detail: "Artifact", documentation: "Boots of the Swift Journey" }, // 24
    { label: "ARTIFACT_GOLDEN_HORSESHOE", detail: "Artifact", documentation: "Golden Horseshoe" }, // 25
    { label: "ARTIFACT_WAYFARER_BOOTS", detail: "Artifact", documentation: "Boots of the Open Road" }, // 26
    { label: "ARTIFACT_BOOTS_OF_INTERFERENCE", detail: "Artifact", documentation: "Boots of Magical Defense" }, // 27
    { label: "ARTIFACT_ENDLESS_SACK_OF_GOLD", detail: "Artifact", documentation: "Sack of Endless Gold" }, // 28
    { label: "ARTIFACT_ENDLESS_BAG_OF_GOLD", detail: "Artifact", documentation: "Bag of Endless Gold" }, // 29
    { label: "ARTIFACT_ANGEL_WINGS", detail: "Artifact", documentation: "Angel Wings" }, // 30
    { label: "ARTIFACT_LION_HIDE_CAPE", detail: "Artifact", documentation: "Cape of the Lion's Mane" }, // 31
    { label: "ARTIFACT_PHOENIX_FEATHER_CAPE", detail: "Artifact", documentation: "Phoenix Feather Cape" }, // 32
    { label: "ARTIFACT_CLOAK_OF_MOURNING", detail: "Artifact", documentation: "Cloak of Mourning" }, // 33
    { label: "ARTIFACT_HELM_OF_ENLIGHTMENT", detail: "Artifact", documentation: "Turban of Enlightenment" }, // 34
    { label: "ARTIFACT_CHAIN_MAIL_OF_ENLIGHTMENT", detail: "Artifact", documentation: "Scale Mail of Enlightenment" }, // 35
    { label: "ARTIFACT_DRAGON_SCALE_ARMOR", detail: "Artifact", documentation: "Dragon Scale Armor" }, // 36
    { label: "ARTIFACT_DRAGON_SCALE_SHIELD", detail: "Artifact", documentation: "Dragon Scale Shield" }, // 37
    { label: "ARTIFACT_DRAGON_BONE_GRAVES", detail: "Artifact", documentation: "Dragon Bone Greaves" }, // 38
    { label: "ARTIFACT_DRAGON_WING_MANTLE", detail: "Artifact", documentation: "Dragon Wing Mantle" }, // 39
    { label: "ARTIFACT_DRAGON_TEETH_NECKLACE", detail: "Artifact", documentation: "Dragon Teeth Necklace" }, // 40
    { label: "ARTIFACT_DRAGON_TALON_CROWN", detail: "Artifact", documentation: "Dragon Talon Crown" }, // 41
    { label: "ARTIFACT_DRAGON_EYE_RING", detail: "Artifact", documentation: "Dragon Eye Ring" }, // 42
    { label: "ARTIFACT_DRAGON_FLAME_TONGUE", detail: "Artifact", documentation: "Dragon Flame Tongue" }, // 43
    { label: "ARTIFACT_ROBE_OF_MAGI", detail: "Artifact", documentation: "Robe of Sar-Issus" }, // 44
    { label: "ARTIFACT_STAFF_OF_MAGI", detail: "Artifact", documentation: "Staff of Sar-Issus" }, // 45
    { label: "ARTIFACT_CROWN_OF_MAGI", detail: "Artifact", documentation: "Crown of Sar-Issus" }, // 46
    { label: "ARTIFACT_RING_OF_MAGI", detail: "Artifact", documentation: "Ring of Sar-Issus" }, // 47
    { label: "ARTIFACT_DWARVEN_MITHRAL_CUIRASS", detail: "Artifact", documentation: "Cuirass of the Dwarven Kings" }, // 48
    { label: "ARTIFACT_DWARVEN_MITHRAL_GREAVES", detail: "Artifact", documentation: "Greaves of the Dwarven Kings" }, // 49
    { label: "ARTIFACT_DWARVEN_MITHRAL_HELMET", detail: "Artifact", documentation: "Helm of the Dwarven Kings" }, // 50
    { label: "ARTIFACT_DWARVEN_MITHRAL_SHIELD", detail: "Artifact", documentation: "Shield of the Dwarven Kings" }, // 51
    { label: "ARTIFACT_SCROLL_OF_SPELL_X", detail: "Artifact", documentation: "Scroll of Spell X" }, // 52
    { label: "ARTIFACT_GRAAL", detail: "Artifact", documentation: "Grail" }, // 53
    { label: "ARTIFACT_BOOTS_OF_LEVITATION", detail: "Artifact", documentation: "Boots of Levitation" }, // 54
    { label: "ARTIFACT_SKULL_HELMET", detail: "Artifact", documentation: "Necromancer's Helm" }, // 55
    { label: "ARTIFACT_VALORIOUS_ARMOR", detail: "Artifact", documentation: "Armor of Valor" }, // 56
    { label: "ARTIFACT_BOOTS_OF_SWIFTNESS", detail: "Artifact", documentation: "Windstrider Boots" }, // 57
    { label: "ARTIFACT_MOONBLADE", detail: "Artifact", documentation: "Moonblade" }, // 58
    { label: "ARTIFACT_RING_OF_CELERITY", detail: "Artifact", documentation: "Ring of Celerity" }, // 59
    { label: "ARTIFACT_BAND_OF_CONJURER", detail: "Artifact", documentation: "Elemental Waistband" }, // 60
    { label: "ARTIFACT_EARTHSLIDERS", detail: "Artifact", documentation: "Emerald Slippers" }, // 61
    { label: "ARTIFACT_RIGID_MANTLE", detail: "Artifact", documentation: "Cloak of Sylanna" }, // 62
    { label: "ARTIFACT_JINXING_BAND", detail: "Artifact", documentation: "Cursed Waistband" }, // 63
    { label: "ARTIFACT_BONESTUDDED_LEATHER", detail: "Artifact", documentation: "Tunic of the Carved Flesh" }, // 64
    { label: "ARTIFACT_WISPERING_RING", detail: "Artifact", documentation: "Ring of Caution" }, // 65
    { label: "ARTIFACT_HELM_OF_CHAOS", detail: "Artifact", documentation: "Helm of Chaos" }, // 66
    { label: "ARTIFACT_TWISTING_NEITHER", detail: "Artifact", documentation: "Pendant of Conflux" }, // 67
    { label: "ARTIFACT_SANDALS_OF_THE_SAINT", detail: "Artifact", documentation: "Sandals of the Blessed" }, // 68
    { label: "ARTIFACT_SHAWL_OF_GREAT_LICH", detail: "Artifact", documentation: "Sandro's Cloak" }, // 69
    { label: "ARTIFACT_RING_OF_DEATH", detail: "Artifact", documentation: "Ring of the Unrepentant" }, // 70
    { label: "ARTIFACT_NECROMANCER_PENDANT", detail: "Artifact", documentation: "Amulet of Necromancy" }, // 71
    { label: "ARTIFACT_FREIDA", detail: "Artifact", documentation: "Freida" }, // 72
    { label: "ARTIFACT_RING_OF_THE_SHADOWBRAND", detail: "Artifact", documentation: "Ring of the Shadowbrand" }, // 73
    { label: "ARTIFACT_DRAGONBONE_STAFF", detail: "Artifact", documentation: "Dragonbone Staff" }, // 74
    { label: "ARTIFACT_DRAGONBONE_RING", detail: "Artifact", documentation: "Dragonbone Ring" }, // 75
    { label: "ARTIFACT_DRAGONBONE_NECKLACE", detail: "Artifact", documentation: "Dragonbone Necklace" }, // 76
    { label: "ARTIFACT_DRAGONBONE_CUIRASS", detail: "Artifact", documentation: "Dragonbone Cuirass" }, // 77
    { label: "ARTIFACT_DRAGONBONE_GREAVES", detail: "Artifact", documentation: "Dragonbone Greaves" }, // 78
    { label: "ARTIFACT_DRAGONBONE_HELM", detail: "Artifact", documentation: "Dragonbone Helm" }, // 79
    { label: "ARTIFACT_DRAGONBONE_SHIELD", detail: "Artifact", documentation: "Dragonbone Shield" }, // 80

    { label: "ARTIFACT_RUNIC_WAR_AXE", detail: "Artifact", documentation: "Runic War Axe" }, // 81
    { label: "ARTIFACT_RUNIC_WAR_HELM", detail: "Artifact", documentation: "Runic War Helm" }, // 82
    { label: "ARTIFACT_RUNIC_WAR_CUIRASS", detail: "Artifact", documentation: "Runic War Cuirass" }, // 83
    { label: "ARTIFACT_RUNIC_WAR_GREAVES", detail: "Artifact", documentation: "Runic War Greaves" }, // 84
    { label: "ARTIFACT_RUNIC_WAR_SHIELD", detail: "Artifact", documentation: "Runic War Shield" }, // 85

    { label: "ARTIFACT_SHATTERED_STAFF", detail: "Artifact", documentation: "Shattered Staff" }, // 86
    { label: "ARTIFACT_SHATTERED_HELM", detail: "Artifact", documentation: "Shattered Helm" }, // 87
    { label: "ARTIFACT_SHATTERED_ARMOR", detail: "Artifact", documentation: "Shattered Armor" }, // 88
    { label: "ARTIFACT_SHATTERED_GREAVES", detail: "Artifact", documentation: "Shattered Greaves" }, // 89
    { label: "ARTIFACT_SHATTERED_SHIELD", detail: "Artifact", documentation: "Shattered Shield" }, // 90

    { label: "ARTIFACT_TALISMAN_OF_MANA", detail: "Artifact", documentation: "Talisman of Mana" }, // 91
    { label: "ARTIFACT_TALISMAN_OF_LUCK", detail: "Artifact", documentation: "Talisman of Luck" }, // 92
    { label: "ARTIFACT_TALISMAN_OF_SPEED", detail: "Artifact", documentation: "Talisman of Speed" }, // 93
    { label: "ARTIFACT_TALISMAN_OF_POWER", detail: "Artifact", documentation: "Talisman of Power" }, // 94
    { label: "ARTIFACT_TALISMAN_OF_FORTUNE", detail: "Artifact", documentation: "Talisman of Fortune" }, // 95
    { label: "ARTIFACT_TALISMAN_OF_WARDING", detail: "Artifact", documentation: "Talisman of Warding" }, // 96
    
    // 🧠 SKILLS
    { label: "SKILL_ATTACK", detail: "Skill", documentation: "Attack" }, // 1
    { label: "SKILL_DEFENSE", detail: "Skill", documentation: "Defense" }, // 2
    { label: "SKILL_LOGISTICS", detail: "Skill", documentation: "Logistics" }, // 3
    { label: "SKILL_LEADERSHIP", detail: "Skill", documentation: "Leadership" }, // 4
    { label: "SKILL_LUCK", detail: "Skill", documentation: "Luck" }, // 5
    { label: "SKILL_OFFENCE", detail: "Skill", documentation: "Offence" }, // 6
    { label: "SKILL_WAR_MACHINES", detail: "Skill", documentation: "War Machines" }, // 7
    { label: "SKILL_SORCERY", detail: "Skill", documentation: "Sorcery" }, // 8
    { label: "SKILL_ENLIGHTENMENT", detail: "Skill", documentation: "Enlightenment" }, // 9
    { label: "SKILL_NECROMANCY", detail: "Skill", documentation: "Necromancy" }, // 10
    { label: "SKILL_DARK_MAGIC", detail: "Skill", documentation: "Dark Magic" }, // 11
    { label: "SKILL_DESTRUCTIVE_MAGIC", detail: "Skill", documentation: "Destructive Magic" }, // 12
    { label: "SKILL_LIGHT_MAGIC", detail: "Skill", documentation: "Light Magic" }, // 13
    { label: "SKILL_SUMMONING_MAGIC", detail: "Skill", documentation: "Summoning Magic" }, // 14
    { label: "SKILL_DEFENCE", detail: "Skill", documentation: "Defence" }, // alias

    // 🎯 PERKS
    { label: "PERK_TACTICS", detail: "Perk", documentation: "Tactics" }, // 15
    { label: "PERK_ARCHERY", detail: "Perk", documentation: "Archery" }, // 16
    { label: "PERK_FRENZY", detail: "Perk", documentation: "Battle Frenzy" }, // 17
    { label: "PERK_PROTECTION", detail: "Perk", documentation: "Protection" }, // 18
    { label: "PERK_EVASION", detail: "Perk", documentation: "Evasion" }, // 19
    { label: "PERK_TOUGHNESS", detail: "Perk", documentation: "Vitality" }, // 20
    { label: "PERK_RESISTANCE", detail: "Perk", documentation: "Magic Resistance" }, // 21
    { label: "PERK_LUCKY_STRIKE", detail: "Perk", documentation: "Soldier's Luck" }, // 22
    { label: "PERK_LEADERSHIP_TRAINING", detail: "Perk", documentation: "Recruitment" }, // 23
    { label: "PERK_ESTATES", detail: "Perk", documentation: "Estates" }, // 24
    { label: "PERK_DIPLOMACY", detail: "Perk", documentation: "Diplomacy" }, // 25
    { label: "PERK_FIRST_AID", detail: "Perk", documentation: "First Aid" }, // 26
    { label: "PERK_BALLISTA", detail: "Perk", documentation: "Ballista" }, // 27
    { label: "PERK_CATAPULT", detail: "Perk", documentation: "Catapult" }, // 28
    { label: "PERK_SORCERY_MYSTICISM", detail: "Perk", documentation: "Mysticism" }, // 29
    { label: "PERK_SORCERY_ARCANE_TRAINING", detail: "Perk", documentation: "Arcane Training" }, // 30
    { label: "PERK_SORCERY_MAGIC_INSIGHT", detail: "Perk", documentation: "Magic Insight" }, // 31
    { label: "PERK_ENLIGHTENMENT_INTELLIGENCE", detail: "Perk", documentation: "Intelligence" }, // 32
    { label: "PERK_ENLIGHTENMENT_SCHOLAR", detail: "Perk", documentation: "Scholar" }, // 33
    { label: "PERK_ENLIGHTENMENT_EAGLE_EYE", detail: "Perk", documentation: "Eagle Eye" }, // 34
    { label: "PERK_NECROMANCY_SPIRIT_LINK", detail: "Perk", documentation: "Spirit Link" }, // 35
    { label: "PERK_NECROMANCY_RAISE_ARCHERS", detail: "Perk", documentation: "Skeleton Archers" }, // 36
    { label: "PERK_NECROMANCY_DEATH_SCREAM", detail: "Perk", documentation: "Banshee Howl" }, // 37
    { label: "PERK_DARK_MASTER_OF_CURSES", detail: "Perk", documentation: "Master of Curses" }, // 38
    { label: "PERK_DARK_MASTER_OF_MIND", detail: "Perk", documentation: "Master of Mind" }, // 39
    { label: "PERK_DARK_MASTER_OF_PAIN", detail: "Perk", documentation: "Master of Pain" }, // 40
    { label: "PERK_DESTRUCTIVE_MASTER_OF_FIRE", detail: "Perk", documentation: "Master of Fire" }, // 41
    { label: "PERK_DESTRUCTIVE_MASTER_OF_ICE", detail: "Perk", documentation: "Master of Ice" }, // 42
    { label: "PERK_DESTRUCTIVE_MASTER_OF_LIGHTNING", detail: "Perk", documentation: "Master of Lightning" }, // 43
    { label: "PERK_LIGHT_MASTER_OF_BLESSINGS", detail: "Perk", documentation: "Master of Blessings" }, // 44
    { label: "PERK_LIGHT_MASTER_OF_ABJURATION", detail: "Perk", documentation: "Master of Abjuration" }, // 45
    { label: "PERK_LIGHT_MASTER_OF_WRATH", detail: "Perk", documentation: "Master of Wrath" }, // 46
    { label: "PERK_SUMMONING_MASTER_OF_CONJURATION", detail: "Perk", documentation: "Master of Conjuration" }, // 47
    { label: "PERK_SUMMONING_MASTER_OF_ANIMATION", detail: "Perk", documentation: "Master of Animation" }, // 48
    { label: "PERK_SUMMONING_MASTER_OF_EARTHBLOOD", detail: "Perk", documentation: "Master of Earthblood" }, // 49
    
    // 🏰 TOWN TYPES
    { label: "TOWN_HEAVEN", detail: "Town", documentation: "Haven" }, // 1
    { label: "TOWN_PRESERVE", detail: "Town", documentation: "Sylvan" }, // 2
    { label: "TOWN_ACADEMY", detail: "Town", documentation: "Academy" }, // 3
    { label: "TOWN_DUNGEON", detail: "Town", documentation: "Dungeon" }, // 4
    { label: "TOWN_NECROMANCY", detail: "Town", documentation: "Necropolis" }, // 5
    { label: "TOWN_INFERNO", detail: "Town", documentation: "Inferno" }, // 6
    { label: "TOWN_FORTRESS", detail: "Town", documentation: "Fortress" }, // 7
    { label: "TOWN_STRONGHOLD", detail: "Town", documentation: "Stronghold" }, // 8

    // 🏰 TOWN BUILDINGS
    { label: "BUILDING_TOWN_HALL", detail: "Building", documentation: "Town Hall" }, // 1
    { label: "BUILDING_CITY_HALL", detail: "Building", documentation: "City Hall" }, // 2
    { label: "BUILDING_CAPITOL", detail: "Building", documentation: "Capitol" }, // 3

    { label: "BUILDING_FORT", detail: "Building", documentation: "Fort" }, // 4
    { label: "BUILDING_CITADEL", detail: "Building", documentation: "Citadel" }, // 5
    { label: "BUILDING_CASTLE", detail: "Building", documentation: "Castle" }, // 6

    { label: "BUILDING_TAVERN", detail: "Building", documentation: "Tavern" }, // 7
    { label: "BUILDING_MARKETPLACE", detail: "Building", documentation: "Marketplace" }, // 8
    { label: "BUILDING_RESOURCE_SILO", detail: "Building", documentation: "Resource Silo" }, // 9

    { label: "BUILDING_BLACKSMITH", detail: "Building", documentation: "Blacksmith" }, // 10
    { label: "BUILDING_MAGE_GUILD_1", detail: "Building", documentation: "Mage Guild I" }, // 11
    { label: "BUILDING_MAGE_GUILD_2", detail: "Building", documentation: "Mage Guild II" }, // 12
    { label: "BUILDING_MAGE_GUILD_3", detail: "Building", documentation: "Mage Guild III" }, // 13
    { label: "BUILDING_MAGE_GUILD_4", detail: "Building", documentation: "Mage Guild IV" }, // 14
    { label: "BUILDING_MAGE_GUILD_5", detail: "Building", documentation: "Mage Guild V" }, // 15

    { label: "BUILDING_SHIPYARD", detail: "Building", documentation: "Shipyard" }, // 16
    { label: "BUILDING_GRAIL", detail: "Building", documentation: "Grail Building" }, // 17

    // 🏹 RACIAL BUILDINGS (Faction‑specific)
    { label: "BUILDING_HEAVEN_HALL_OF_HEROES", detail: "Racial Building", documentation: "Hall of Heroes" }, // 20
    { label: "BUILDING_HEAVEN_TRAINING_GROUNDS", detail: "Racial Building", documentation: "Training Grounds" }, // 21

    { label: "BUILDING_PRESERVE_AVENGERS_GUILD", detail: "Racial Building", documentation: "Avenger's Guild" }, // 22

    { label: "BUILDING_ACADEMY_ARTIFACT_MERCHANT", detail: "Racial Building", documentation: "Artifact Merchant" }, // 23
    { label: "BUILDING_ACADEMY_LIBRARY", detail: "Racial Building", documentation: "Library" }, // 24

    { label: "BUILDING_DUNGEON_ALTAR_OF_ELEMENTS", detail: "Racial Building", documentation: "Altar of Elements" }, // 25

    { label: "BUILDING_NECROMANCY_NECROMANCER_SHRINE", detail: "Racial Building", documentation: "Necromancer Shrine" }, // 26

    { label: "BUILDING_INFERNO_SACRIFICIAL_PIT", detail: "Racial Building", documentation: "Sacrificial Pit" }, // 27

    { label: "BUILDING_FORTRESS_RUNIC_SHRINE", detail: "Racial Building", documentation: "Runic Shrine" }, // 28

    { label: "BUILDING_STRONGHOLD_HALL_OF_TRIALS", detail: "Racial Building", documentation: "Hall of Trials" }, // 29

    // 🐺 MONSTER MOOD / COURAGE
    { label: "MONSTER_MOOD_FEAR", detail: "Monster Mood", documentation: "Fear" }, // 0
    { label: "MONSTER_MOOD_NORMAL", detail: "Monster Mood", documentation: "Normal" }, // 1
    { label: "MONSTER_MOOD_AGGRESSIVE", detail: "Monster Mood", documentation: "Aggressive" }, // 2
    { label: "MONSTER_MOOD_FRENZY", detail: "Monster Mood", documentation: "Frenzy" }, // 3

    // 🔑 BORDERGUARD KEYS
    { label: "KEY_RED", detail: "Key", documentation: "Red Key" }, // 1
    { label: "KEY_BLUE", detail: "Key", documentation: "Blue Key" }, // 2
    { label: "KEY_GREEN", detail: "Key", documentation: "Green Key" }, // 3
    { label: "KEY_YELLOW", detail: "Key", documentation: "Yellow Key" }, // 4
    { label: "KEY_PURPLE", detail: "Key", documentation: "Purple Key" }, // 5
    { label: "KEY_TAN", detail: "Key", documentation: "Tan Key" }, // 6
    { label: "KEY_BROWN", detail: "Key", documentation: "Brown Key" }, // 7

    // 💥 TRIGGER TYPES
    { label: "TRIGGER_DAY", detail: "Trigger", documentation: "Day Trigger" }, // 1
    { label: "TRIGGER_WEEK", detail: "Trigger", documentation: "Week Trigger" }, // 2
    { label: "TRIGGER_MONTH", detail: "Trigger", documentation: "Month Trigger" }, // 3
    { label: "TRIGGER_TIMER", detail: "Trigger", documentation: "Timer Trigger" }, // 4
    { label: "TRIGGER_ENTER_AREA", detail: "Trigger", documentation: "Enter Area" }, // 5
    { label: "TRIGGER_LEAVE_AREA", detail: "Trigger", documentation: "Leave Area" }, // 6
    { label: "TRIGGER_HERO_LEVELUP", detail: "Trigger", documentation: "Hero Level Up" }, // 7
    { label: "TRIGGER_HERO_DEATH", detail: "Trigger", documentation: "Hero Death" }, // 8
    { label: "TRIGGER_COMBAT_START", detail: "Trigger", documentation: "Combat Start" }, // 9
    { label: "TRIGGER_COMBAT_END", detail: "Trigger", documentation: "Combat End" }, // 10
    { label: "TRIGGER_OBJECT_CAPTURED", detail: "Trigger", documentation: "Object Captured" }, // 11
    { label: "TRIGGER_OBJECT_LOST", detail: "Trigger", documentation: "Object Lost" }, // 12
    { label: "TRIGGER_CUSTOM", detail: "Trigger", documentation: "Custom Trigger" }, // 13

];
