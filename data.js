var dataAdvances = {
  agriculture: {
  	key: "agriculture",
    name: "Agriculture",
    terrain: ["Shrubland","Savanna","Forest","Rainforest"],
    1: {type:'site', name:"crudeFields"},
    2: {type:'upgrade', key:"cropRotation"},
  },
  
  aquatecture: {
  	key: "aquatecture",
    name: "Aquatecture",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'trade', key:"shortPier"},
  },
  
  brewing: {
  	key: "brewing",
  	name: "Brewing",
  	terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
  	1: {type:'site', key:'brewery'},
  },
  
  bronzeworking: {
  	key: "bronzeworking",
  	name: "bronzeworking",
  	terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'bronzesmith'},
    2: {type:'site', key:'bronzeSwordsmithy'},
    3: {type:'site', key:'bronzeArmory'},
  },
  
  carpentry: {
  	key: "carpentry",
    name: "Carpentry",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'building', key:"woodHut"},
    2: {type:'defense', key:"woodenPalisade"},
  },
  
  caribouHerding: {
  	key: "caribouHerding",
    name: "Caribou Herding",
    terrain: ["Tundra"],
    1: {type:'site', key:"caribouHerd"},
    2: {type:'site', key:"caribouPaddock"},
  },
  
  cattleHerding: {
  	key: "cattleHerding",
    name: "Cattle Herding",
    terrain: ['Savanna'],
    1: {type:'site', key:"cattleHerd"},
    2: {type:'site', key:"cattleKraal"},
  },
  
  ceramics: {
  	key: "ceramics",
    name: "Ceramics",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'potter'},
    2: {type:'site', key:'brickworks'},
    3: {type:'site', key:'glazier'},
    4: {type:'site', key:'tilery'},
  },
  
  chickenHusbandry: {
  	key: "chickenHusbandry",
    name: "Chicken Husbandry",
    terrain: ["Rainforest"],
    1: {type:'site', key:'chickenCoop'},
  },
  
  construction: {
  	key: "construction",
    name: "Construction",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'building', key:'stoneHut'},
    2: {type:'defense', key:'stoneWall'},
  },
  
  discipline: {
  	key: "discipline",
    name: "Discipline",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'bonus', key:"Basic Discipline"},
  },
  
  dyes: {
  	key: "dyes",
    name: "Dyes",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'dyehouse'},
  },
  
  excavation: {
  	key: "excavation",
    name: "Excavation",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'well'},
    2: {type:'site', key:'openPitMine'},
  },
  
  falconry: {
  	key: "falconry",
    name: "Falconry",
    terrain: "Forest",
    1: {type:'site', key:'mews'},
  },
  
  feminism: {
  	key: "feminism",
    name: "Feminism",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'value', key:"feminism"},
  },
  
  finance: {
  	key: "finance",
    name: "Finance",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'pile', key:'treasury'},
    2: {type:'building', key:'bank'},
  },
  
  fishing: {
  	key: "fishing",
    name: "Fishing",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'netWeaver'},
  },
  
  forestry: {
  	key: "forestry",
    name: "Forestry",
    terrain: ['Forest','Rainforest'],
    1: {type:'site', key:'lumberyard'},
  },
  
  goatHerding: {
  	key: "goatHerding",
    name: "Goat Herding",
    terrain: ['Shrubland','Savanna'],
    1: {type:'site', key:'goatHerd'},
    1: {type:'site', key:'goatPen'},
  },
  
  honor: {
  	key: "honor",
    name: "Honor",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'bonus', key:'Honor'},
  },
  
  horseHerding: {
  	key: "horseHerding",
    name: "Horse Herding",
    terrain: ['Savanna'],
    1: {type:'site', key:'horseHerd'},
    2: {type:'site', key:'horseCorral'},
    3: {type:'site', key:'stable'},
  },
  
  ironworking: {
  	key: "ironworking",
  	name: "Ironworking",
  	terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
  	1: {type:'site', key:'bloomery'},
  	2: {type:'site', key:'ironArmory'},
  	3: {type:'site', key:'ironArsenal'},
  	4: {type:'site', key:'blastFurnace'},
  },
  
  kennelry: {
  	key: "kennelry",
    name: "Kennelry",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'wolfDen'},
    2: {type:'site', key:'kennel'},
  },
  
  leatherworking: {
  	key: "leatherworking",
    name: "Leatherworking",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'tannery'},
    2: {type:'site', key:'leatherworks'},
    3: {type:'site', key:'fineLeatherworks'},
  },
  
  masculinism: {
  	key: "masculinism",
    name: "Masculinism",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'value', key:"masculinism"},
  },
  
  metalurgy: {
  	key: "metalurgy",
    name: "Metalurgy",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'smelter'},
    2: {type:'site', key:'alloyer'},
  },
  
  preservation: {
  	key: "preservation",
    name: "Food Preservation",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'granary'},
  },
  
  pyrotechnics: {
  	key: "pyrotechnics",
    name: "Pyrotechnics",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'charcoalBurner'},
    2: {type:'site', key:'smoker'},
  },
  
  race: {
  	key: "race",
    name: "Race",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'value', key:'racism'},
  },
  
  stonecraft: {
  	key: "stonecraft",
    name: "Stonecraft",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'knappery'},
    2: {type:'site', key:'stoneArmory'},
  },
  
  swineHusbandry: {
  	key: "swingHusbandry",
    name: "Swine Husbandry",
    terrain: ["Shrubland","Forest"],
    1: {type:'site', key:'swineHerd'},
    2: {type:'site', key:'swineHollow'},
  },
  
  trade: {
  	key: "trade",
    name: "Trade",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'trade', key:'tradeRoute'},
    2: {type:'pile', key:'warehouse'},
    3: {type:'pile', key:'market'},
  },
  
  textiles: {
  	key: "textiles",
  	name: "Textiles",
  	terrain: ['Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
  	1: {type:'site', key:'feltery'},
  	2: {type:'site', key:'clothier'},
  	3: {type:'site', key:'loom'},
  	4: {type:'site', key:'tailor'},
  },
  
};

var dataResources = {
  
  food: {
    key: "food",
    name: "Food",
    plural: "sacks of Food",
    advances: [dataAdvances.agriculture, dataAdvances.falconry, dataAdvances.kennelry, dataAdvances.horseHerding, dataAdvances.cattleHerding, dataAdvances.goatHerding, dataAdvances.caribouHerding],
  },
  
  beer: {
    key: "beer",
    name: "Beer",
    plural: "skins of Beer",
    advances: [dataAdvances.brewing],
  },
  
  bone: {
    key: "bone",
    name: "Bone",
    plural: "piles of Bones",
    advances: [dataAdvances.kennelry],
  },
  
  brick: {
    key: "brick",
    name: "Brick",
    plural: "stack of Bricks",
    advances: [dataAdvances.construction],
  },
  
  bronze: {
    key: "bronze",
    name: "Bronze",
    plural: "ingots of Bronze",
  },
  
  bronzeArms: {
    key: "bronzeArms",
    name: "Bronze Arms",
    plural: "Bronze Armss",
  },
  
  bronzeTool: {
  	key: "bronzeTool",
  	name: "Bronze Tool",
  	plural: "Bronze Tools",
  },
  
  caribou: {
    key: "caribou",
    name: "Caribou",
    plural: "head of Caribou",
    advances: [dataAdvances.caribouHerding],
  },
  
  cattle: {
    key: "cattle",
    name: "Cattle",
    plural: "head of Cattle",
    advances: [dataAdvances.cattleHerding],
  },
  
  chicken: {
    key: "chicken",
    name: "Chicken",
    plural: "head of chicken",
    advances: [dataAdvances.chickenHusbandry],
  },
  
  clay: {
    key: "clay",
    name: "Clay",
    plural: "lumps of Clay",
    advances: [dataAdvances.ceramics, dataAdvances.preservation, dataAdvances.construction],
  },
  
  clothing: {
    key: "clothing",
    name: "Clothing",
    plural: "outfits of Clothing",
    advances: [dataAdvances.weaving],
  },
  
  copperOre: {
    key: "copperOre",
    name: "Copper Ore",
    plural: "piles of Copper Ore",
  },
  
  cowrie: {
    key: "cowrie",
    name: "Cowrie Shell",
    plural: "Cowries",
    advances: [dataAdvances.finance,dataAdvances.trade],
  },
  
  goat: {
    key: "goat",
    name: "Goat",
    plural: "head of goats",
    advances: [dataAdvances.goatHerding],
  },
  
  manure: {
    key: "manure",
    name: "manure",
    plural: "piles of Manure",
    advances: [dataAdvances.agriculture,dataAdvances.preservation,dataAdvances.blackpowder],
  },
  
  fiber: {
    key: "fiber",
    name: "Fiber",
    plural: "cords of Fiber",
    advances: [dataAdvances.weaving],
  },
  
  fineClothing: {
    key: "fineClothing",
    name: "Fine Clothing",
    plural: "outfits of Fine Clothing",
    advances: [dataAdvances.weaving],
  },
  
  fuel: {
    key: "fuel",
    name: "Fuel",
    plural: "stacks of Fuel",
    advances: [dataAdvances.pyrotechnics],
  },
  
  fur: {
    key: "fur",
    name: "Fur",
    plural: "Furs",
    advances: [dataAdvances.leatherworking, dataAdvances.dyes],
  },
  
  ironIngot: {
    key: "ironIngot",
    name: "Iron Ingot",
    plural: "Iron Ingots",
    advances: [dataAdvances.ironworking],
  },
  
  ironOre: {
    key: "ironOre",
    name: "Iron Ore",
    plural: "piles of Iron Ore",
    advances: [dataAdvances.ironworking],
  },
  
  leadOre: {
    key: "leadOre",
    name: "Lead Ore",
    plural: "piles of Lead Ore",
    advances: [dataAdvances.smelting,dataAdvances.ironworking,dataAdvances.bronzeworking],
  },
  
  leadPellet: {
  	key: "leadPellet",
  	name: "Lead Pellet",
  	plural: "Pouch of Lead Pellets",
    advances: [dataAdvances.slings],
  },
  
  lumber: {
    key: "lumber",
    name: "Lumber",
    plural: "stacks of Lumber",
    advances: [dataAdvances.forestry, dataAdvances.pyrotechnics, dataAdvances.carpentry, dataAdvances.aquatecture],
  },
  
  mysteryOre: {
  	key: "mysteryOre",
  	name: "Mystery Ore!",
  	plural: "glowing clumps of Mysterious Ore",
  	advances: [],
  },
  
  pottery: {
  	key: "pottery",
  	name: "Pottery",
  	plural: "pots",
  	advances: [dataAdvances.preservation],
  },
  
  rope: {
  	key: "rope",
  	name: "Rope",
  	plural: "cords of Rope",
  	advances: [dataAdvances.fishing,dataAdvances.slings],
  },
  
  saltpeter: {
    key: "saltpeter",
    name: "Saltpeter",
    plural: "piles of Saltpeter",
  },
  
  simpleTool: {
    key: "simpleTool",
    name: "Simple Tool",
    plural: "simple tools",
    advances: [dataAdvances.excavation],
  },
  
  slag: {
  	key: "slag",
  	name: "Slag",
  	plural: "lumps of Slag",
  	advances: [dataAdvances.ironworking,dataAdvances.ceramics];
  },
  
  sling: {
  	key: "sling",
  	name: "Sling",
  	plural: "Slings",
  },
  
  steelBar: {
    key: "steelBar",
    name: "Steel Bar",
    plural: "stacks of Steel Bars",
  },
  
  stone: {
    key: "stone",
    name: "Stone",
    plural: "piles of Stones",
    advances: [dataAdvances.excavation, dataAdvances.stonecraft, dataAdvances.construction],
  },
  
  stoneArms: {
    key: "stoneArms",
    name: "Stone Arms",
    plural: "Stone Arms",
  },
  
  sulfur: {
    key: "sulfur",
    name: "Sulfur",
    plural: "piles of Sulfur",
  },
  
  swine: {
    key: "swine",
    name: "Swine",
    plural: "head of Swine",
    advances: [dataAdvances.swineHerding],
  },
  
  tile: {
    key: "tile",
    name: "Tile",
    plural: "stacks of tile",
  },
  
  tinOre: {
    key: "tinOre",
    name: "Tin Ore",
    plural: "piles of Tin Ore",
  },
  
  water: {
    key: "water",
    name: "Water",
    plural: "jugs of Water",
    advances: [dataAdvances.agriculture, dataAdvances.brewing, dataAdvances.dyes],
  },
  
};

var dataSites = {
  theWilds: {
    name: 'The Wilds',
    job: 'hunter-gatherer',
    tools: [],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.1,
    secondaryProduce: [dataResources.simpleTool,dataResources.fur,dataResources.lumber,dataResources.bone,dataResources.stone,dataResources.fiber],
    secondaryEfficiency: 0.1,
    baseCapacity: 200,
  },
  
  // Natural Food-Producing Work Sites
    
  fruitGrove: {
    name: 'Fruit Grove',
    job: 'gatherer',
    tools: [],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.3,
    secondaryProduce: [dataResources.water,dataResources.simpleTool,dataResources.lumber,dataResources.fiber],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  shallows: {
    name: 'Shallows',
    job: 'fisher',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.3,
    secondaryProduce: [dataResources.simpleTool,dataResources.lumber,dataResources.bone],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  river: {
    name: 'River',
    job: 'fisher',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.3,
    secondaryProduce: [dataResources.simpleTool,dataResources.lumber,dataResources.cowrie],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  grazingLand: {
    name: 'Grazing Land',
    job: 'hunter',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.3,
    secondaryProduce: [dataResources.simpleTool,dataResources.bone,dataResources.fur,dataResources.fiber],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
  
  // Other Natural Work Sites
    
  pond: {
    name: 'Pond',
    job: 'water-bearer',
    tools: [],
    materials: [],
    primaryProduce: dataResources.water,
    primaryEfficiency: 2,
    secondaryProduce: [dataResources.food,dataResources.simpleTool,dataResources.fiber],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  oasis: {
    name: 'Oasis',
    job: 'oasis tender',
    tools: [],
    materials: [],
    primaryProduce: dataResources.water,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food,dataResources.bone,dataResources.lumber,dataResources.fiber],
    secondaryEfficiency: 0.5,
    baseCapacity: 100,
  },
    
  cenote: {
    name: 'Cenote',
    job: 'cenotista',
    tools: [],
    materials: [],
    primaryProduce: dataResources.water,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food,dataResources.bone,dataResources.clay,dataResources.stone,dataResources.fiber],
    secondaryEfficiency: 0.5,
    baseCapacity: 100,
  },
    
  clayDeposit: {
    name: 'Clay Deposit',
    job: 'clay digger',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.clay,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.stone,dataResources.simpleTool],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  outcropping: {
    name: 'Outcropping',
    job: 'quarrier',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.stone,
    primaryEfficiency: .5,
    secondaryProduce: [dataResources.simpleTool],
    secondaryEfficiency: .2,
    baseCapacity: 100,
  },
    
  hardwoodGrove: {
    name: 'Forest',
    job: 'logger',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.lumber,
    primaryEfficiency: .5,
    secondaryProduce: [dataResources.simpleTool,dataResources.food,dataResources.bone,dataResources.fur,dataResources.fiber],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  canyon: {
    name: 'Canyon',
    job: 'quarrier',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.stone,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.food,dataResources.water,dataResources.lumber,dataResources.bone],
    secondaryEfficiency: 0.5,
    baseCapacity: 100,
  },
    
  peatBog: {
    name: 'Peat Bog',
    job: 'peat cutter',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.fuel,
    primaryEfficiency: .3,
    secondaryProduce: [dataResources.bone,dataResources.stone,dataResources.food,dataResources.simpleTool,dataResources.fur,dataResources.fiber],
    secondaryEfficiency: 1,
    baseCapacity: 100,
  },
    
  cowrieBeach: {
    name: 'Cowrie Beach',
    job: 'cowrie gatherer',
    tools: [],
    materials: [],
    primaryProduce: dataResources.cowrie,
    primaryEfficiency: .5,
    secondaryProduce: [dataResources.food,dataResources.simpleTool,dataResources.lumber,dataResources.bone],
    secondaryEfficiency: .5,
    upgradeAdvance: dataAdvances.butchery,
    baseCapacity: 100,
  },
  
  // Buildable Work Sites
  
  blastFurnace: {
    name: 'Blast Furnace',
    job: 'ironworker',
    tools: [dataResources.ironTool],
    materials: [dataResources.ironOre],
    primaryProduce: dataResources.ironIngot,
    primaryEfficiency: 0.6,
    secondaryProduce: [dataResources.slag],
    secondaryEfficiency: 0.2,
    upgradeAdvance: dataAdvances.ironworking,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  bloomery: {
    name: 'Bloomery',
    job: 'ironworker',
    tools: [dataResources.bronzeTool],
    materials: [dataResources.ironOre,dataResources.fuel],
    primaryProduce: dataResources.ironIngot,
    primaryEfficiency: 0.3,
    secondaryProduce: [dataResources.slag],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.ironworking,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  brewery: {
    name: 'Brewery',
    job: 'brewer',
    tools: [],
    materials: [dataResources.water,dataResources.food],
    primaryProduce: dataResources.beer,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food,dataResources.manure],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.brewing,
    buildCost: {resource:999},
    baseCapacity: 20,
  }
  
  brickworks: {
    name: 'Brickworks',
    job: 'brickmaker',
    tools: [dataResources.simpleTool],
    materials: [dataResources.clay,dataResources.fuel],
    primaryProduce: dataResources.brick,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.simpleTool,dataResources.fuel,dataResources.stone],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.ceramics,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  bronzeArmory: {
    name: 'Bronze Armory',
    job: 'bronzesmith',
    tools: [dataResources.simpleTool],
    materials: [dataResources.bronze],
    primaryProduce: dataResources.bronzeArms,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.bronzeTool,dataResources.simpleTool,dataResources.bronzeArmor],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.bronzeworking,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  bronzeArsenal: {
    name: 'Bronze Arsenal',
    job: 'bronzesmith',
    tools: [dataResources.bronzeTool],
    materials: [dataResources.bronze],
    primaryProduce: dataResources.bronzeArmor,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.bronzeArms,dataResources.bronzeTool],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.bronzeworking,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
    
  bronzesmith: {
    name: 'Bronzesmithy',
    job: 'bronzesmith',
    tools: [dataResources.simpleTool],
    materials: [dataResources.tinOre,dataResources.copperOre,dataResources.fuel],
    primaryProduce: dataResources.bronze,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.bronzeTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.bronzeworking,
    buildCost: {simpleTool:10,bronze:10},
    baseCapacity: 20,
  },
  
  cattleHerd: {
    name: 'Cattle Herd',
    job: 'cattle herder',
    tools: [],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 0.9,
    secondaryProduce: [dataResources.cattle,dataResources.manure],
    secondaryEfficiency: 0.2,
    upgradeAdvance: dataAdvances.cattleHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  cattleKraal: {
    name: 'Cattle Kraal',
    job: 'cattle rancher',
    tools: [dataResources.simpleTool],
    materials: [dataResources.cattle],
    primaryProduce: dataResources.cattle,
    primaryEfficiency: 1.1,
    secondaryProduce: [dataResources.food,dataResources.manure],
    secondaryEfficiency: 1.5,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
    
  caribouHerd: {
    name: 'Caribou Herd',
    job: 'caribou herder',
    tools: [],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 0.9,
    secondaryProduce: [dataResources.caribou,dataResources.manure],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {fur:10},
    baseCapacity: 20,
  },
  
  caribouPaddock: {
    name: 'Caribou Paddock',
    job: 'caribou rancher',
    tools: [],
    materials: [dataResources.simpleTool],
    primaryProduce: dataResources.caribou,
    primaryEfficiency: 1.1,
    secondaryProduce: [dataResources.food,dataResources.manure],
    secondaryEfficiency: 1.5,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {lumber:10},
    baseCapacity: 20,
  },
  
  charcoalBurner: {
    name: 'Charcoal Burner',
    job: 'charcoal burner',
    tools: [],
    materials: [dataResources.lumber],
    primaryProduce: dataResources.fuel,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.simpleTool,dataResources.stone,dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.pyrotechnics,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  chickenCoop: {
    name: 'Chicken Coop',
    job: 'chicken tender',
    tools: [],
    materials: [dataResources.chicken],
    primaryProduce: dataResources.chicken,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.food,dataResources.manure],
    secondaryEfficiency: 1.5,
    upgradeAdvance: dataAdvances.chickenHusbandry,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  clothier: {
    name: 'Clothier',
    job: 'clothier',
    tools: [dataResources.simpleTool],
    materials: [dataResources.cloth],
    primaryProduce: dataResources.clothing,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.simpleTool,dataResources.fineClothing],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.textiles,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  crudeFields: {
    name: 'Crude Fields',
    job: 'farmer',
    tools: [dataResources.simpleTool],
    materials: [dataResources.water],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.5,
    secondaryProduce: [dataResources.simpleTool,dataResources.stone,dataResources.lumber,dataResources.fiber],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.agriculture,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  dyehouse: {
    name: 'Dyehouse',
    job: 'dyer',
    tools: [dataResources.simpleTool],
    materials: [dataResources.water],
    primaryProduce: dataResources.dye,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.cowrie,dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.dyes,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  dyeworks: {
    name: 'Dyeworkers',
    job: 'dyer',
    tools: [],
    materials: [dataResources.dye,dataResources.cloth],
    primaryProduce: dataResources.dyedCloth,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.cloth,dataResources.simpleTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.dyes,
    buildCost: {resource:999},
    baseCapacity: 20,  
  },
  
  feltery: {
    name: 'Feltery',
    job: 'felter',
    tools: [],
    materials: [dataResources.fiber,dataResources.water],
    primaryProduce: dataResources.cloth,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.dye,dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.textiles,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  fineLeatherworks: {
    name: 'Fine Leatherworks',
    job: 'fine leatherworker',
    tools: [dataResources.simpleTool],
    materials: [dataResources.leather],
    primaryProduce: dataResources.leatherFinery,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.leatherJerkin,dataResources.simpleTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.leatherworking,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  glazier: {
    name: 'Glazier',
    job: 'glazier',
    tools: [dataResources.bronzeTool],
    materials: [dataResources.slag],
    primaryProduce: dataResources.glaze,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.slag,dataResources.ironOre],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.ceramics,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  goatHerd: {
    name: 'Goat Herd',
    job: 'goat herder',
    tools: [],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.goat,dataResources.manure],
    secondaryEfficiency: 0.4,
    upgradeAdvance: dataAdvances.goatHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  goatPen: {
    name: 'Goat Pen',
    job: 'goat wrangler',
    tools: [],
    materials: [dataResources.goat],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.5,
    secondaryProduce: [dataResources.goat,dataResources.manure],
    secondaryEfficiency: 0.4,
    upgradeAdvance: dataAdvances.goatHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  horseCorral: {
    name: 'Horse Corral',
    job: 'horse breaker',
    tools: [dataResources.simpleTool],
    materials: [dataResources.horse],
    primaryProduce: dataResources.steed,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.food,dataResources.horse,dataResources.manure],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.horseHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  horseHerd: {
    name: 'Horse Herd',
    job: 'horse wrangler',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.horse,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.simpleTool,dataResources.food,dataResources.manure],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.horseHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  ironArmory: {
    name: 'Iron Armory',
    job: 'ironsmith',
    tools: [dataResources.bronzeTool],
    materials: [dataResources.ironIngot],
    primaryProduce: dataResources.ironArms,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.ironTool,dataResources.ironArmor],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.ironworking,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  ironArsenal: {
    name: 'Iron Arsenal',
    job: 'ironsmith',
    tools: [dataResources.ironTool],
    materials: [dataResources.ironIngot],
    primaryProduce: dataResources.ironArmor,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.ironArms,dataResources.ironTool],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.ironworking,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  kennel: {
    name: 'Kennel',
    job: 'kennel keepers',
    tools: [dataResources.simpleTool],
    materials: [dataResources.wolf],
    primaryProduce: dataResources.dog,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.food,dataResources.wolf],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.kennelry,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
    
  knappery: {
    name: 'Knappery',
    job: 'knapper',
    tools: [dataResources.simpleTool],
    materials: [dataResources.stone],
    primaryProduce: dataResources.simpleTool,
    primaryEfficiency: 1.8,
    secondaryProduce: [dataResources.fuel],
    secondaryEfficiency: .1,
    upgradeAdvance: dataAdvances.stonecraft,
    buildCost: {simpleTool:10,stone:10},
    baseCapacity: 20,
  },
  
  leatherworks: {
    name: 'Leatherworks',
    job: 'leatherworker',
    tools: [dataResources.simpleTool],
    materials: [dataResources.leather],
    primaryProduce: dataResources.leatherJerkin,
    primaryEfficiency: 0.6,
    secondaryProduce: [dataResources.leatherFinery,dataResources.dye,dataResources.simpleTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  loom: {
    name: 'Loom',
    job: 'weaver',
    tools: [dataResources.simpleTool],
    materials: [dataResources.fiber],
    primaryProduce: dataResources.cloth,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.textiles,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  lumberyard: {
    name: 'Lumberyard',
    job: 'lumberjaq',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.lumber,
    primaryEfficiency: 1.5,
    secondaryProduce: [dataResources.food,dataResources.simpleTool,dataResources.stone],
    secondaryEfficiency: 0.2,
    upgradeAdvance: dataAdvances.forestry,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  mews: {
    name: 'Mews',
    job: 'falconer',
    tools: [dataResources.simpleTool],
    materials: [dataResources.leather],
    primaryProduce: dataResources.falcon,
    primaryEfficiency: 0.2,
    secondaryProduce: [dataResources.food],
    secondaryEfficiency: 0.8,
    upgradeAdvance: dataAdvances.falconry,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  netWeaver: {
    name: 'Netweaver',
    job: 'netweaver',
    tools: [dataResources.simpleTool],
    materials: [dataResources.rope],
    primaryProduce: dataResources.net,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food,dataResources.simpleTool],
    secondaryEfficiency: 0.4,
    upgradeAdvance: dataAdvances.fishing,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  openPitMine: {
    name: 'Open Pit Mine',
    job: 'miner',
    tools: [dataResources.simpleTool],
    materials: [],
    primaryProduce: dataResources.mysteryOre,
    primaryEfficiency: 0.2,
    secondaryProduce: [dataResources.simpleTool,dataResources.stone],
    secondaryEfficiency: 0.3,
    upgradeAdvance: dataAdvances.excavation,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  potter: {
    name: 'Pottery Barn',
    job: 'potter',
    tools: [],
    materials: [dataResources.clay,,dataResources.fuel],
    primaryProduce: dataResources.pottery,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.stone,dataResources.brick],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  ropewalk: {
    name: 'Ropewalk',
    job: 'ropemaker',
    tools: [dataResources.simpleTool],
    materials: [dataResources.fiber],
    primaryProduce: dataResources.rope,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.fiber,dataResources.cloth],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.textiles,
    buildCost: {resource:999},
    baseCapacity: 20,
  }
  
  smoker: {
    name: 'Smoker',
    job: 'smoker',
    tools: [],
    materials: [dataResources.food,,dataResources.fuel],
    primaryProduce: dataResources.food,
    primaryEfficiency: 2,
    secondaryProduce: [dataResources.food,dataResources.dye],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.pyrotechnics,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  stable: {
    name: 'Stable',
    job: 'hostler',
    tools: [dataResources.simpleTool],
    materials: [dataResources.steed],
    primaryProduce: dataResources.steed,
    primaryEfficiency: 1.2,
    secondaryProduce: [dataResources.food,dataResources.horse,dataResources.manure],
    secondaryEfficiency: 0.8,
    upgradeAdvance: dataAdvances.horseHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  steelArmory: {
    name: 'Steel Armory',
    job: 'steelsmith',
    tools: [dataResources.ironTool],
    materials: [dataResources.steelBar],
    primaryProduce: dataResources.steelArms,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.steelTool,dataResources.steelArmor],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.steelworking,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  steelArsenal: {
    name: 'Steel Arsenal',
    job: 'steelsmith',
    tools: [dataResources.steelTool],
    materials: [dataResources.steelBar],
    primaryProduce: dataResources.steelArmor,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.steelArms,dataResources.steelTool],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.steelworking,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
    
  stoneArmory: {
    name: 'Stone Armory',
    job: 'stone armorer',
    tools: [dataResources.simpleTool],
    materials: [dataResources.stone],
    primaryProduce: dataResources.stoneArms,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.simpleTool,dataResources.lumber,dataResources.bone],
    secondaryEfficiency: .1,
    upgradeAdvance: dataAdvances.stonecraft,
    buildCost: {simpleTool:20,stone:10},
    baseCapacity: 20,
  },
  
  swineHerd: {
    name: 'Swine Herd',
    job: 'swineherd',
    tools: [],
    materials: [dataResources.food],
    primaryProduce: dataResources.swine,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food,dataResources.manure],
    secondaryEfficiency: 1,
    upgradeAdvance: dataAdvances.swineHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  swineHollow: {
    name: 'Swine Hollow',
    job: 'swineherd',
    tools: [],
    materials: [dataResources.swine],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.2,
    secondaryProduce: [dataResources.swine,dataResources.manure],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.swineHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  tailor: {
    name: 'Tailor',
    job: 'WorkerHereAtThePlace',
    tools: [dataResources.bronzeTool],
    materials: [dataResources.dyedCloth],
    primaryProduce: dataResources.fineClothing,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.clothing],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.textiles,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  tannery: {
    name: 'Tannery',
    job: 'tanner',
    tools: [dataResources.simpleTool],
    materials: [dataResources.fur],
    primaryProduce: dataResources.leather,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.dye,dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.leatherworking,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  tilery: {
    name: 'Tilery',
    job: 'tiler',
    tools: [dataResources.bronzeTool],
    materials: [dataResources.clay,,dataResources.fuel],
    primaryProduce: dataResources.tile,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.brick,dataResources.glaze,dataResources.pottery],
    secondaryEfficiency: 0.3,
    upgradeAdvance: dataAdvances.ceramics,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  well: {
    name: 'Well',
    job: 'drawer',
    tools: [],
    materials: [],
    primaryProduce: dataResources.water,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.simpleTool,dataResources.food,dataResources.stone,dataResources.bone],
    secondaryEfficiency: 0.1,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  wolfDen: {
    name: 'Wolf Den',
    job: 'wolf whisperer',
    tools: [dataResources.simpleTool],
    materials: [dataResources.food],
    primaryProduce: dataResources.wolf,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.food,dataResources.bone],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.kennelry,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
  // Template
  
  nameOfWorkSite: {
    name: 'PrettyNameGoesHere',
    job: 'WorkerHereAtThePlace',
    tools: [dataResources.caribou],
    materials: [dataResources.caribou],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.caribou],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  }
  
};

var dataBiomes = {
  
  tundra: {
    name: 'Tundra',
    naturalSites: [dataSites.clayDeposit,dataSites.grazingLand,dataSites.outcropping],
    fauna: ["caribou",'polar bear',"puffin","penguin",'hare','wolf','fox','yak'],
    flora: ['lichen','rock willow','pasque','saxifrage'],
    moveCost: 30,
  },
  
  desert: {
    name: 'Desert',
    naturalSites: [dataSites.clayDeposit,dataSites.outcropping,dataSites.canyon,dataSites.oasis,dataSites.cenote],
    fauna: ['jackal','camel','vulture','snake','scorpion','goat','wolf','tortoise','lizard','owl'],
    flora: ['palm','date','mustard seed','cactus'],
    moveCost: 50,
  },
  
  shrubland: {
    name: 'Shrubland',
    naturalSites: [dataSites.grazingLand,dataSites.clayDeposit,dataSites.pond,dataSites.river],
    fauna: ['antelope','sheep','cat','wolf','otter','fox','bat','wallaby','hare','zebra','rhinoceros','mouse','rat','elephant','owl'],
    flora: ["saltbrush",'needlebush','tomato','currant','cassia','bloodbush','cotton','sage'],
    moveCost: 20,
  },
  
  rainforest: {
    name: 'Rainforest',
    naturalSites: [dataSites.river,dataSites.pond,dataSites.clayDeposit,dataSites.outcropping,dataSites.hardwoodGrove,dataSites.canyon],
    fauna: ['duiker','fox','cat','ocelot','ferret','bat','bonobo','chimpanzee','loris','orangutan','mouse','rat'],
    flora: ['vine','bamboo','fern','orchid','palm','water lily','rubber tree','bougainvillea','corpse flower','pitcherplant','durian'],
    moveCost: 70,
  },
  
  savanna: {
    name: 'Savanna',
    naturalSites: [dataSites.river,dataSites.pond,dataSites.clayDeposit,dataSites.grazingLand,dataSites.outcropping,dataSites.cenote,dataSites.canyon],
    fauna: ['antelope','gazelle','peccary','buffalo','giraffe','duiker','leopard','lion','tiger','fox','hyena','lynx','bat','mouse','rat','squirrel','porcupine','owl','hawk'],
    flora: ['tall grass','acacia','manketti','bushwillow','baobab','melon'],
    moveCost: 20,
  },
  
  forest: {
    name: 'Forest',
    naturalSites: [dataSites.river,dataSites.pond,dataSites.peatBog,dataSites.clayDeposit,dataSites.outcropping,dataSites.hardwoodGrove,dataSites.fruitGrove,dataSites.canyon],
    fauna: ['ox','peccary','deer','elk','cat','wolf','fox','wolverine','bat','lemur','opposum','kangaroo','rabbit','hare','ape','tamarin','monkey','elephant','mouse','rat','squirrel','porcupine','owl','hawk','eagle'],
    flora: ['oak','pine','berry','water lily','rose','lily','dandelion'],
    moveCost: 60,
  },
  
  ocean: {
  	name: 'Ocean',
    moveCost: 20,
    
  },
  
};

var dataValues = {
  
  matriarchy: {
    name: "Matriarchy",
  },
  
  patriarchy: {
    name: "Patriarchy",
  },
  
  neutrarchy: {
    name: "Neutrarchy",
  },
  
  tertiarchy: {
    name: "Tertiarchy",
  },
  
  quadrarchy: {
    name: "Quadrarchy",
  },
  
  piety: {
    name: "Piety",
  },
  
  inquiry: {
    name: "Inquiry",
  },
  
  authority: {
    name: "Authority",
  },
  
  aggression: {
    name: "Aggression",
  },
  
  charity: {
    name: "Charity",
  },
  
  
};

var dataForceItems = {
  bone: 0.1,
  wolf: 0.2,
  stoneArms: 0.2,
  bronzeArms: 0.3,
  ironArms: 0.4,
  steelArms: 0.5,
  fur: 0.1,
  leather: 0.2,
  leatherJerkin: 0.4,
  bronzeArmor: 0.6,
  ironArmor: 0.8,
  steelArmor: 1,
  sling: 0.3,
  shortbow: 0.4,
  longbow: 0.6,
};

var dataForceAdvances = {
  honor: 0.1,
  discipline: 0.5,
};

var dataMoveItems = {
  horse: 0.5,
};

var dataMoveAdvances = {
  
};






