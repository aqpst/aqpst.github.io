
const itemCategoryList = ['ammo', 'armor', 'artifacts', 'bionics', 'books', 'chems',
  'clothing', 'container', 'corpses', 'currency', 'drugs',
  'food', 'fuel', 'guns', 'keys', 'ma_manuals', 'magazines',
  'manuals', 'maps', 'mods', 'mutagen', 'other', 'seeds',
  'spare_parts', 'tool_magazine', 'tools', 'traps',
  'veh_parts', 'weapons']

const itemCategoriesVersionH = {
    "guns": {
      "id": "guns",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "GUNS"
      },
      "zone": "LOOT_GUNS",
      "sort_rank": -23
    },
    "magazines": {
      "id": "magazines",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "MAGAZINES"
      },
      "zone": "LOOT_MAGAZINES",
      "sort_rank": -22
    },
    "ammo": {
      "id": "ammo",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "AMMO"
      },
      "zone": "LOOT_AMMO",
      "sort_rank": -21
    },
    "weapons": {
      "id": "weapons",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "WEAPONS"
      },
      "zone": "LOOT_WEAPONS",
      "sort_rank": -20
    },
    "tools": {
      "id": "tools",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "TOOLS"
      },
      "zone": "LOOT_TOOLS",
      "sort_rank": -19
    },
    "clothing": {
      "id": "clothing",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "CLOTHING"
      },
      "priority_zones": [
        {
          "id": "LOOT_FCLOTHING",
          "filthy": true
        }
      ],
      "zone": "LOOT_CLOTHING",
      "sort_rank": 19
    },
    "food": {
      "id": "food",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "FOOD"
      },
      "//": "zone is hardcoded",
      "sort_rank": -18
    },
    "drugs": {
      "id": "drugs",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "DRUGS"
      },
      "zone": "LOOT_DRUGS",
      "sort_rank": -17
    },
    "manuals": {
      "id": "manuals",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "MANUALS"
      },
      "zone": "LOOT_MANUALS",
      "sort_rank": -16
    },
    "books": {
      "id": "books",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "BOOKS"
      },
      "zone": "LOOT_BOOKS",
      "sort_rank": -15
    },
    "maps": {
      "id": "maps",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "MAPS"
      },
      "zone": "LOOT_MAPS",
      "sort_rank": -14
    },
    "mods": {
      "id": "mods",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "MODS"
      },
      "zone": "LOOT_MODS",
      "sort_rank": -13
    },
    "mutagen": {
      "id": "mutagen",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "MUTAGENS"
      },
      "zone": "LOOT_MUTAGENS",
      "sort_rank": -12
    },
    "bionics": {
      "id": "bionics",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "BIONICS"
      },
      "zone": "LOOT_BIONICS",
      "sort_rank": -12
    },
    "currency": {
      "id": "currency",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "CURRENCY"
      },
      "zone": "LOOT_CURRENCY",
      "sort_rank": -11
    },
    "veh_parts": {
      "id": "veh_parts",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "VEHICLE PARTS"
      },
      "zone": "LOOT_VEHICLE_PARTS",
      "sort_rank": -10
    },
    "other": {
      "id": "other",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "OTHER"
      },
      "zone": "LOOT_OTHER",
      "sort_rank": -9
    },
    "fuel": {
      "id": "fuel",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "FUEL"
      },
      "zone": "LOOT_FUEL",
      "sort_rank": -8
    },
    "seeds": {
      "id": "seeds",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "SEEDS"
      },
      "zone": "LOOT_SEEDS",
      "sort_rank": -7
    },
    "ma_manuals": {
      "id": "ma_manuals",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "MARTIAL ARTS MANUALS"
      },
      "zone": "LOOT_MA_MANUALS",
      "sort_rank": -6
    },
    "traps": {
      "id": "traps",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "TRAPS"
      },
      "zone": "LOOT_TRAPS",
      "sort_rank": -5
    },
    "chems": {
      "id": "chems",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "CHEMICAL STUFF"
      },
      "zone": "LOOT_CHEMICAL",
      "sort_rank": 5
    },
    "spare_parts": {
      "id": "spare_parts",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "SPARE PARTS"
      },
      "zone": "LOOT_SPARE_PARTS",
      "sort_rank": 8
    },
    "container": {
      "id": "container",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "CONTAINERS"
      },
      "zone": "LOOT_CONTAINERS",
      "sort_rank": 9
    },
    "artifacts": {
      "id": "artifacts",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "ARTIFACTS"
      },
      "zone": "LOOT_ARTIFACTS",
      "sort_rank": 10
    },
    "keys": {
      "id": "keys",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "KEYS"
      },
      "zone": "LOOT_KEYS",
      "sort_rank": 11
    },
    "corpses": {
      "id": "corpses",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "CORPSES"
      },
      "zone": "LOOT_CORPSES",
      "sort_rank": 12
    },
    "tool_magazine": {
      "id": "tool_magazine",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "TOOL MAGAZINES"
      },
      "zone": "LOOT_TOOL_MAGAZINE",
      "sort_rank": -15
    },
    "armor": {
      "id": "armor",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "ARMOR"
      },
      "priority_zones": [
        {
          "id": "LOOT_FARMOR",
          "filthy": true
        }
      ],
      "zone": "LOOT_ARMOR",
      "sort_rank": 20
    },
    "exosuit": {
      "id": "exosuit",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "EXOSUIT"
      },
      "zone": "LOOT_EXOSUIT",
      "sort_rank": 20
    },
    "ITEMS_WORN": {
      "id": "ITEMS_WORN",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "ITEMS WORN"
      },
      "sort_rank": -100
    },
    "INTEGRATED": {
      "id": "INTEGRATED",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "INTEGRATED"
      },
      "sort_rank": -99
    },
    "BIONIC_FUEL_SOURCE": {
      "id": "BIONIC_FUEL_SOURCE",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "BIONIC FUEL SOURCE"
      },
      "sort_rank": -98
    },
    "WEAPON_HELD": {
      "id": "WEAPON_HELD",
      "type": "ITEM_CATEGORY",
      "name": {
        "str": "WEAPON HELD"
      },
      "sort_rank": -200
    }
  }




const itemCategoriesVersionI = {
    "guns": {
      "id": "guns",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Guns"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "gun"
      },
      "zone": "LOOT_GUNS",
      "sort_rank": -23
    },
    "magazines": {
      "id": "magazines",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Magazines"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "magazine"
      },
      "zone": "LOOT_MAGAZINES",
      "sort_rank": -22
    },
    "ammo": {
      "id": "ammo",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Ammo"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str_sp": "ammo"
      },
      "zone": "LOOT_AMMO",
      "sort_rank": -21
    },
    "weapons": {
      "id": "weapons",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Weapons"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "weapon"
      },
      "zone": "LOOT_WEAPONS",
      "sort_rank": -20
    },
    "tools": {
      "id": "tools",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Tools"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "tool"
      },
      "zone": "LOOT_TOOLS",
      "sort_rank": -19
    },
    "clothing": {
      "id": "clothing",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Clothing"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str_sp": "clothing"
      },
      "priority_zones": [
        {
          "id": "LOOT_FCLOTHING",
          "filthy": true
        }
      ],
      "zone": "LOOT_CLOTHING",
      "sort_rank": 19
    },
    "food": {
      "id": "food",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Food"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str_sp": "food"
      },
      "//": "zone is hardcoded",
      "sort_rank": -18
    },
    "drugs": {
      "id": "drugs",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Drugs"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str_sp": "drug"
      },
      "zone": "LOOT_DRUGS",
      "sort_rank": -17
    },
    "manuals": {
      "id": "manuals",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Manuals"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "manual"
      },
      "zone": "LOOT_MANUALS",
      "sort_rank": -16
    },
    "books": {
      "id": "books",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Books"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "book"
      },
      "zone": "LOOT_BOOKS",
      "sort_rank": -15
    },
    "maps": {
      "id": "maps",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Maps"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "map"
      },
      "zone": "LOOT_MAPS",
      "sort_rank": -14
    },
    "mods": {
      "id": "mods",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Mods"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "mod"
      },
      "zone": "LOOT_MODS",
      "sort_rank": -13
    },
    "mutagen": {
      "id": "mutagen",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Mutagens"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str_sp": "mutagen"
      },
      "zone": "LOOT_MUTAGENS",
      "sort_rank": -12
    },
    "bionics": {
      "id": "bionics",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Bionics"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "bionic"
      },
      "zone": "LOOT_BIONICS",
      "sort_rank": -12
    },
    "currency": {
      "id": "currency",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Currency"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str_sp": "currency"
      },
      "zone": "LOOT_CURRENCY",
      "sort_rank": -11
    },
    "veh_parts": {
      "id": "veh_parts",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Vehicle parts"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "vehicle part"
      },
      "zone": "LOOT_VEHICLE_PARTS",
      "sort_rank": -10
    },
    "other": {
      "id": "other",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Other"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "other"
      },
      "zone": "LOOT_OTHER",
      "sort_rank": -9
    },
    "fuel": {
      "id": "fuel",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Fuel"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str_sp": "fuel"
      },
      "zone": "LOOT_FUEL",
      "sort_rank": -8
    },
    "seeds": {
      "id": "seeds",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Seeds"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "seed"
      },
      "zone": "LOOT_SEEDS",
      "sort_rank": -7
    },
    "ma_manuals": {
      "id": "ma_manuals",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Martial arts manuals"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "martial arts manual"
      },
      "zone": "LOOT_MA_MANUALS",
      "sort_rank": -6
    },
    "traps": {
      "id": "traps",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Traps"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "trap"
      },
      "zone": "LOOT_TRAPS",
      "sort_rank": -5
    },
    "chems": {
      "id": "chems",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Chemical stuff"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str_sp": "chemical"
      },
      "zone": "LOOT_CHEMICAL",
      "sort_rank": 5
    },
    "spare_parts": {
      "id": "spare_parts",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Spare parts"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "spare part"
      },
      "zone": "LOOT_SPARE_PARTS",
      "sort_rank": 8
    },
    "container": {
      "id": "container",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Containers"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "container"
      },
      "zone": "LOOT_CONTAINERS",
      "sort_rank": 9
    },
    "artifacts": {
      "id": "artifacts",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Artifacts"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "artifact"
      },
      "zone": "LOOT_ARTIFACTS",
      "sort_rank": 10
    },
    "keys": {
      "id": "keys",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Keys"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "key"
      },
      "zone": "LOOT_KEYS",
      "sort_rank": 11
    },
    "corpses": {
      "id": "corpses",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Corpses"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "corpse"
      },
      "zone": "LOOT_CORPSES",
      "sort_rank": 12
    },
    "tool_magazine": {
      "id": "tool_magazine",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Tool magazines"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "tool magazine"
      },
      "zone": "LOOT_TOOL_MAGAZINE",
      "sort_rank": -15
    },
    "armor": {
      "id": "armor",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Armor"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str_sp": "armor"
      },
      "priority_zones": [
        {
          "id": "LOOT_FARMOR",
          "filthy": true
        }
      ],
      "zone": "LOOT_ARMOR",
      "sort_rank": 20
    },
    "exosuit": {
      "id": "exosuit",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Exosuit"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "exosuit"
      },
      "zone": "LOOT_EXOSUIT",
      "sort_rank": 20
    },
    "ITEMS_WORN": {
      "id": "ITEMS_WORN",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Items worn"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "item worn",
        "str_pl": "items worn"
      },
      "sort_rank": -100
    },
    "INTEGRATED": {
      "id": "INTEGRATED",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Integrated"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str_sp": "integrated"
      },
      "sort_rank": -99
    },
    "BIONIC_FUEL_SOURCE": {
      "id": "BIONIC_FUEL_SOURCE",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Bionic fuel source"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "bionic fuel source"
      },
      "sort_rank": -98
    },
    "WEAPON_HELD": {
      "id": "WEAPON_HELD",
      "type": "ITEM_CATEGORY",
      "name_header": {
        "str": "Weapon held"
      },
      "name_noun": {
        "ctxt": "item_category",
        "str": "weapon held",
        "str_pl": "weapons held"
      },
      "sort_rank": -200
    }
  }