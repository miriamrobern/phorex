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
    3: {type:'site', key:'tilery'},
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
    1: {type:'site', key:'bank'},
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
  
  manufacture: {
  	key: "manufacture",
    name: "Manufacture",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:'knappery'},
    2: {type:'site', key:'stoneArmory'},
    3: {type:'site', key:'bronzesmith'},
    4: {type:'site', key:'bronzeSwordsmithy'},
    5: {type:'site', key:'bronzeArmory'},
  },
  
  masculinism: {
  	key: "masculinism",
    name: "Masculinism",
    terrain: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    1: {type:'site', key:"masculinism"},
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
  
};

var dataResources = {
  
  food: {
    key: "food",
    name: "Food",
    plural: "sacks of Food",
    advances: [dataAdvances.agriculture, dataAdvances.falconry, dataAdvances.kennelry, dataAdvances.horseHerding, dataAdvances.cattleHerding, dataAdvances.goatHerding, dataAdvances.caribouHerding],
  },
  
  water: {
    key: "water",
    name: "Water",
    plural: "jugs of Water",
    advances: [dataAdvances.agriculture, dataAdvances.dyes],
  },
  
  simpleTool: {
    key: "simpleTool",
    name: "Simple Tool",
    plural: "simple tools",
    advances: [dataAdvances.excavation],
  },
  
  lumber: {
    key: "lumber",
    name: "Lumber",
    plural: "stacks of Lumber",
    advances: [dataAdvances.forestry, dataAdvances.pyrotechnics, dataAdvances.carpentry, dataAdvances.aquatecture],
  },
  
  clay: {
    key: "clay",
    name: "Clay",
    plural: "lumps of Clay",
    advances: [dataAdvances.ceramics, dataAdvances.preservation, dataAdvances.construction],
  },
  
  stone: {
    key: "stone",
    name: "Stone",
    plural: "piles of Stones",
    advances: [dataAdvances.excavation, dataAdvances.manufacture, dataAdvances.construction],
  },
  
  bone: {
    key: "bone",
    name: "Bone",
    plural: "piles of Bones",
    advances: [dataAdvances.kennelry],
  },
  
  fur: {
    key: "fur",
    name: "Fur",
    plural: "Furs",
    advances: [dataAdvances.leatherworking, dataAdvances.dyes],
  },
  
  cowrie: {
    key: "cowrie",
    name: "Cowrie Shell",
    plural: "Cowries",
    advances: [dataAdvances.finance,dataAdvances.trade],
  },
  
  fuel: {
    key: "fuel",
    name: "Fuel",
    plural: "stacks of Fuel",
    advances: [dataAdvances.pyrotechnics],
  },
  
  ore: {
    key: "ore",
    name: "Ore",
    plural: "piles of Ore",
  },
  
  stoneAxe: {
    key: "stoneAxe",
    name: "Stone Axe",
    plural: "Stone Axes",
  },
  
  bronze: {
    key: "bronze",
    name: "Bronze",
    plural: "ingots of Bronze",
  },
  
  bronzeAxe: {
    key: "bronzeAxe",
    name: "Bronze Axe",
    plural: "Bronze Axes",
  },
  
  caribou: {
    key: "caribou",
    name: "Caribou",
    plural: "head of Caribou",
  },
  
};

var dataSites = {
  theWilds: {
    name: 'The Wilds',
    job: 'hunter-gatherer',
    tools: '',
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.1,
    secondaryProduce: [dataResources.simpleTool,dataResources.fur,dataResources.lumber,dataResources.bone,dataResources.stone],
    secondaryEfficiency: 0.1,
    baseCapacity: 200,
  },
    
  shallows: {
    name: 'Shallows',
    job: 'fisher',
    tools: dataResources.simpleTool,
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
    tools: dataResources.simpleTool,
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.3,
    secondaryProduce: [dataResources.simpleTool,dataResources.lumber,dataResources.cowrie],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  pond: {
    name: 'Pond',
    job: 'water-bearer',
    tools: '',
    materials: [],
    primaryProduce: dataResources.water,
    primaryEfficiency: 2,
    secondaryProduce: [dataResources.food,dataResources.simpleTool],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  clayDeposit: {
    name: 'Clay Deposit',
    job: 'clay digger',
    tools: dataResources.simpleTool,
    materials: [],
    primaryProduce: dataResources.clay,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.stone,dataResources.simpleTool],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  grazingLand: {
    name: 'Grazing Land',
    job: 'hunter',
    tools: dataResources.simpleTool,
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.3,
    secondaryProduce: [dataResources.simpleTool,dataResources.bone,dataResources.fur],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  outcropping: {
    name: 'Outcropping',
    job: 'quarrier',
    tools: dataResources.simpleTool,
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
    tools: dataResources.simpleTool,
    materials: [],
    primaryProduce: dataResources.lumber,
    primaryEfficiency: .5,
    secondaryProduce: [dataResources.simpleTool,dataResources.food,dataResources.bone,dataResources.fur],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  fruitGrove: {
    name: 'Fruit Grove',
    job: 'gatherer',
    tools: '',
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.3,
    secondaryProduce: [dataResources.water,dataResources.simpleTool,dataResources.lumber],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
    
  oasis: {
    name: 'Oasis',
    job: 'oasis tender',
    tools: '',
    materials: [],
    primaryProduce: dataResources.water,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food,dataResources.bone,dataResources.lumber],
    secondaryEfficiency: 0.5,
    baseCapacity: 100,
  },
    
  cenote: {
    name: 'Cenote',
    job: 'cenotista',
    tools: '',
    materials: [],
    primaryProduce: dataResources.water,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food,dataResources.bone,dataResources.clay,dataResources.stone],
    secondaryEfficiency: 0.5,
    baseCapacity: 100,
  },
    
  canyon: {
    name: 'Canyon',
    job: 'quarrier',
    tools: dataResources.simpleTool,
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
    tools: dataResources.simpleTool,
    materials: [],
    primaryProduce: dataResources.fuel,
    primaryEfficiency: .3,
    secondaryProduce: [dataResources.bone,dataResources.stone,dataResources.food,dataResources.simpleTool],
    secondaryEfficiency: 1,
    baseCapacity: 100,
  },
    
  cowrieBeach: {
    name: 'Cowrie Beach',
    job: 'cowrie gatherer',
    tools: '',
    materials: [],
    primaryProduce: dataResources.cowrie,
    primaryEfficiency: .5,
    secondaryProduce: [dataResources.food,dataResources.simpleTool,dataResources.lumber,dataResources.bone],
    secondaryEfficiency: .5,
    upgradeAdvance: dataAdvances.butchery,
    baseCapacity: 100,
  },
    
  knappery: {
    name: 'Knappery',
    job: 'knapper',
    tools: dataResources.simpleTool,
    materials: [dataResources.stone],
    primaryProduce: dataResources.simpleTool,
    primaryEfficiency: 1.8,
    secondaryProduce: [dataResources.fuel],
    secondaryEfficiency: .1,
    upgradeAdvance: dataAdvances.manufacture,
    buildCost: {simpleTool:10,stone:10},
    baseCapacity: 20,
  },
    
  stoneArmory: {
    name: 'Stone Armory',
    job: 'stone armorer',
    tools: dataResources.simpleTool,
    materials: [dataResources.stone],
    primaryProduce: dataResources.stoneAxe,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.simpleTool,dataResources.lumber,dataResources.bone],
    secondaryEfficiency: .1,
    upgradeAdvance: dataAdvances.manufacture,
    buildCost: {simpleTool:20,stone:10},
    baseCapacity: 20,
  },
    
  bronzesmith: {
    name: 'Bronzesmithy',
    job: 'bronzesmith',
    tools: dataResources.simpleTool,
    materials: [dataResources.bronze],
    primaryProduce: dataResources.bronzeAxe,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.simpleTool,dataResources.lumber],
    secondaryEfficiency: .1,
    upgradeAdvance: dataAdvances.manufacture,
    buildCost: {simpleTool:10,bronze:10},
    baseCapacity: 20,
  },
    
  caribouHerd: {
    name: 'Caribou Herd',
    job: 'Caribou Herder',
    tools: '',
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 0.9,
    secondaryProduce: [dataResources.caribou],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {fur:10},
    baseCapacity: 20,
  },
  
  caribouPaddock: {
    name: 'Caribou Paddock',
    job: 'Caribou Rancher',
    tools: '',
    materials: [dataResources.caribou],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.5,
    secondaryProduce: [dataResources.caribou],
    secondaryEfficiency: 1.1,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {lumber:10},
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
  fur: 0.1,
  crudeAxe: 0.2,
  leathers: 0.2,
  wolf: 0.2,
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






