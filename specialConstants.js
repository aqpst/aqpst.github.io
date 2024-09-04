
const autodoc = {
    "type": "furniture",
    "id": "f_autodoc",
    "name": "Autodoc Mk. XI",
    "symbol": "&",
    "description": "A surgical apparatus used for the installation and removal of bionics.  The term name 'Autodoc' is something of a misnomer, as it can only operate if programmed beforehand, something that a plethora of labels warn against doing without expertise.",
    "color": "light_cyan",
    "looks_like": "f_robotic_arm",
    "move_cost_mod": -1,
    "coverage": 35,
    "required_str": -1,
    "flags": [ "TRANSPARENT", "AUTODOC", "CONTAINER", "NO_PICKUP_ON_EXAMINE" ],
    "examine_action": "autodoc",
    "surgery_skill_multiplier": 100.0,
    "deconstruct": {
      "items": [
        { "item": "processor", "count": [ 1, 2 ] },
        { "item": "RAM", "count": [ 4, 8 ] },
        { "item": "cable", "charges": [ 4, 6 ] },
        { "item": "small_lcd_screen", "count": [ 1, 2 ] },
        { "item": "e_scrap", "count": [ 10, 16 ] },
        { "item": "circuit", "count": [ 6, 10 ] },
        { "item": "power_supply", "count": [ 2, 4 ] },
        { "item": "amplifier", "count": [ 2, 4 ] },
        { "item": "plastic_chunk", "count": [ 10, 12 ] },
        { "item": "scrap", "count": [ 6, 8 ] }
      ]
    },
    "bash": {
      "str_min": 8,
      "str_max": 150,
      "sound": "crunch!",
      "sound_fail": "whack!",
      "items": [
        { "item": "processor", "prob": 25 },
        { "item": "RAM", "count": [ 0, 2 ], "prob": 50 },
        { "item": "cable", "charges": [ 1, 2 ], "prob": 50 },
        { "item": "small_lcd_screen", "prob": 25 },
        { "item": "e_scrap", "count": [ 1, 4 ], "prob": 50 },
        { "item": "circuit", "count": [ 0, 2 ], "prob": 50 },
        { "item": "power_supply", "prob": 25 },
        { "item": "amplifier", "prob": 25 },
        { "item": "plastic_chunk", "count": [ 4, 10 ], "prob": 50 },
        { "item": "scrap", "count": [ 2, 6 ], "prob": 50 }
      ]
    }
  }

const mutationSelector = {
    "type": "EXTERNAL_OPTION",
    "name": "SHOW_MUTATION_SELECTOR",
    "info": "When mutating, displays a menu which allows players to pick from a list of possible mutations.",
    "stype": "bool",
    "value": true
    }

const capitalism = {
    "type": "EXTERNAL_OPTION",
    "name": "CAPITALISM",
    "info": "NPCs will accept your bank balance as payment in trades.",
    "stype": "bool",
    "value": true
  }

const noRevive = {
    "type": "monster_adjustment",
    "species": "ZOMBIE",
    "flag": { "name": "REVIVES", "value": false }
  }

const weakEMP = {
    "type": "EXTERNAL_OPTION",
    "name": "EMP_DISABLE_ELECTRONICS",
    "info": "Whether EMP effects will permanently disable items.",
    "stype": "bool",
    "value": false
  }

const vehicleOverride = {
    "type": "EXTERNAL_OPTION",
    "name": "OVERRIDE_VEHICLE_INIT_STATE",
    "info": "If true, initial status and amount of fuel for all spawned vehicles will be overridden by values of VEHICLE_STATUS_AT_SPAWN and VEHICLE_FUEL_AT_SPAWN options.",
    "stype": "bool",
    "value": true
  }

const portal1 = {
    "type": "effect_on_condition",
    "id": "EOC_PORTAL_STORM_WARN_OR_CAUSE_RECURRING",
    "global": true,
    "effect": []
  }

const portal2 = {
    "type": "effect_on_condition",
    "id": "EOC_CAUSE_EARLY_PORTAL_STORM",
    "global": true,
    "effect": []
  }

const portal3 = {
    "type": "effect_on_condition",
    "id": "EOC_CAUSE_PORTAL_STORM",
    "global": true,
    "effect": []
  }

const vehicleNoFuel = {
    "type": "EXTERNAL_OPTION",
    "name": "VEHICLE_FUEL_AT_SPAWN",
    "info": "All vehicles spawn with this percentage of fuel.  0 is empty, 100 is fully loaded, -1 is random amount from 7% to 35% (default).  Values are read only if OVERRIDE_VEHICLE_INIT_STATE is set to true.",
    "stype": "int",
    "value": 0
  }


const vehicleBroken = {
    "type": "EXTERNAL_OPTION",
    "name": "VEHICLE_STATUS_AT_SPAWN",
    "info": "All vehicles spawn in this status.  -1 is lightly damaged (default), 0 is undamaged, 1 is disabled (destroyed tires or engine).  Values are read only if OVERRIDE_VEHICLE_INIT_STATE is set to true.",
    "stype": "int",
    "value": 1
  }