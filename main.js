

var creatureCount = 0;
var manualModID = false;

function byID(id) {
    return document.getElementById(id);
}

function roundedFloat(x) {
    return +parseFloat(x).toFixed(2);
}

function disableField(id) {
    byID(id).setAttribute("disabled", "true");
}

function enableField(id) {
    byID(id).removeAttribute("disabled");
}

function getRadio(id) {
    try {
        var val = byID(id).elements[id].value;
        if (val == null) {
            throw new error("id is null");
        }
    }
    catch(err) {
        alert("error: getRadio(): no element named \"" + id + "\"");
        // I see absolutely no problems with this
    }
    return val;
}

function targetVersionChanged() {
    var version = getRadio("targetVersion");
    if (version == "G") {
        itemCategoryList.forEach(category => disableField(category));
    } else {
        itemCategoryList.forEach(category => enableField(category));
    }
}

function sanitizeModID(name) {
    var id = name.trim();
    id = id.toLowerCase()
    .replace(/ |-/g, '_')
    .replace(/_+/g, '_')        // replace spaces and dashes with an underscore
    .replace(/[^\w\s]/g, '');   // remove special characters
    return id;
}

function modNameChanged(elem) {
    if (manualModID === true) {
        return;
    }
    var name = elem.value;
    name = sanitizeModID(name);
    byID("modID").value = name;
}

function modIDChanged(elem) {
    manualModID = !(elem.value.length == 0);
}



function addPanel() {
    var creatures = byID("creatures");
    var section = byID("creatureButton").content.cloneNode(true);
    creatures.appendChild(section);
    section = byID("creature");
    section.id = "creature" + creatureCount;
    creatureCount += 1;
}

function toggleCollapsible(elem) {
    var content = elem.nextElementSibling.nextElementSibling;
    if (content.style.display == "flex") {
        content.style.display = "none";
        elem.textContent = "Expand";
    } else {
        content.style.display = "flex";
        elem.textContent = "Collapse";
    }
}

function deleteSection(elem) {
    elem.parentElement.remove();
}


function generateMonsterMod() {
    var i = 0;
    var definedCreatures = new Set();
    var monsterAdjustments = [];
    var monsterExclusions = [];
    for (i = 0; i <= creatureCount; i += 1) {
        var creat = byID("creature" + i);
        if (creat == null) {
            continue;
        }

        species = creat.querySelector("#species").value;
        health = creat.querySelector("#health").value;
        speed = creat.querySelector("#speed").value;
        exclude = creat.querySelector("#exclude").checked;
        noBleed = creat.querySelector("#noBleed").checked;

        if (definedCreatures.has(species)) {
            alert("Duplicate definition of " + species + " will be ignored.")
            continue;
        }
        definedCreatures.add(species);

        if (health != 100) {
            monsterAdjustments.push(
                {
                    "type": "monster_adjustment",
                    "species": species.toUpperCase(),
                    "stat": {"name": "hp", "modifier": roundedFloat(health/100)}
                }
            );
        }

        if (speed != 100) {
            monsterAdjustments.push(
                {
                    "type": "monster_adjustment",
                    "species": species.toUpperCase(),
                    "stat": {"name": "speed", "modifier": roundedFloat(speed/100)}
                }
            );
        }

        if (noBleed) {
            monsterAdjustments.push(
                {
                    "type": "monster_adjustment",
                    "species": species.toUpperCase(),
                    "stat": {"name": "bleed_rate", "modifier": 0}
                }
            );
        }

        if (exclude) {
            monsterExclusions.push(species.toUpperCase());
        }

    }

    return [monsterAdjustments, monsterExclusions];
}

const noop = ()=>{}

function generateItemCategories() {
    var categories = []
    var version = getRadio("targetVersion");
    if (version == "H") {
        var prototypes = itemCategoriesVersionH;
    } else {
        var prototypes = itemCategoriesVersionI;
    }

    var arrLen = itemCategoryList.length;
    for (var i = 0; i < arrLen; i += 1) {
        var category = itemCategoryList[i];
        var spawnRate = byID(category).value;
        if (spawnRate != 1.0) {
            var temp = prototypes[category];
            temp["spawn_rate"] = roundedFloat(spawnRate);
            categories.push(temp);
        }
    }

    return categories;
}

function generateJSON() {
    var modName = byID("modName").value.trim();
    var modID = byID("modID").value;
    var version = getRadio("targetVersion");

    if (modName.length == 0) {
        modName = "My mod";
    }
    modID = sanitizeModID(modID);
    if (modID.length == 0) {
        modID = "my_mod";
    }

    modHeader = {
        "type": "MOD_INFO",
        "id": modID,
        "name": modName,
        "authors": [ "you" ],
        "description": "<placeholder> A mod generated with CDDA Mini Mod Maker",
        "category": "rebalance",
        "dependencies": [ "dda" ],
    }

    let [monsterAdjustments, monsterExclusions] = generateMonsterMod();

    var modInfo = [];
    modInfo.push(modHeader);
    monsterAdjustments.forEach(adjustment => modInfo.push(adjustment));

    var monBlacklist = [];
    if (monsterExclusions.length > 0) {
        monBlacklist.push(
            {
                "type": "MONSTER_BLACKLIST",
                "species": monsterExclusions
            }
        );
    }

    var itemCategories = [];
    if (version == "H" || version == "I") {
        itemCategories = generateItemCategories();
    }

    const zip = new JSZip();
    const folder = zip.folder("data/mods/" + modID);
    folder.file("modinfo.json", JSON.stringify(modInfo, null, 2));

    if (monBlacklist.length > 0) {
        folder.file("mon_blacklist.json", JSON.stringify(monBlacklist, null, 2));
    }

    if (itemCategories.length > 0) {
        folder.file("item_category.json", JSON.stringify(itemCategories, null, 2));
    }

    zip.generateAsync({type: "blob", compression: "DEFLATE"}).then(function(content) {
        saveAs(content, modID + ".zip");
    })
}