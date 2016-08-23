var dataAdvances = {
  failures: {
  	key: "failures",
    name: "Negative Results",
    biomes: [],
    unlocks: [],
  },
  
  agriculture: {
  	key: "agriculture",
    name: "Agriculture",
    biomes: ["Shrubland","Savanna","Forest","Rainforest"],
    unlocks: [,	{type:'site', key:"crudeFields"},
    			{type:'site', key:"simpleFields"},
    			{type:'site', key:"flaxFields"},
    			{type:'upgrade', key:"cropRotation"}],
  },
  
  aquatecture: {
  	key: "aquatecture",
    name: "Aquatecture",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'trade', key:"shortPier"}],
  },
  
  blackPowder: {
  	key: "blackPowder",
  	name: "Black Powder",
  	biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
  	unlocks: [,	{type:'unknown',key:''}],
  },
  
  brewing: {
  	key: "brewing",
  	name: "Brewing",
  	biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
  	unlocks: [,	{type:'site', key:'brewery'}],
  },
  
  bronzeworking: {
  	key: "bronzeworking",
  	name: "bronzeworking",
  	biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'site', key:'bronzesmith'},
    			{type:'site', key:'bronzeSwordsmithy'},
    			{type:'site', key:'bronzeArmory'}],
  },
  
  camelHerding: {
  	key: "camelHerding",
    name: "Camel Herding",
    biomes: ["Desert","Savanna"],
    livestock: "camel",
    unlocks: [,	{type:'site', key:"camelFarm"}],
  },
  
  carpentry: {
  	key: "carpentry",
    name: "Carpentry",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'building', key:"woodHut"},
    			{type:'defense', key:"woodenPalisade"}],
  },
  
  caribouHerding: {
  	key: "caribouHerding",
    name: "Caribou Herding",
    biomes: ["Tundra"],
    livestock: "caribou",
    unlocks: [,	{type:'site', key:"caribouPaddock"}],
  },
  
  cattleHerding: {
  	key: "cattleHerding",
    name: "Cattle Herding",
    biomes: ['Savanna'],
    livestock: "cattle",
    unlocks: [,	{type:'site', key:"cattleKraal"}],
  },
  
  ceramics: {
  	key: "ceramics",
    name: "Ceramics",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'site', key:'potter'},
   				{type:'site', key:'brickworks'},
    			{type:'site', key:'glazier'},
    			{type:'site', key:'tilery'}],
  },
  
  chickenHusbandry: {
  	key: "chickenHusbandry",
    name: "Chicken Husbandry",
    biomes: ["Rainforest"],
    livestock: "chicken",
    unlocks: [,	{type:'site', key:'chickenCoop'}],
  },
  
  construction: {
  	key: "construction",
    name: "Construction",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'building', key:'stoneHut'},
    			{type:'defense', key:'stoneWall'}],
  },
  
  discipline: {
  	key: "discipline",
    name: "Discipline",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'bonus', key:"Basic Discipline"}]
  },
  
  dyes: {
  	key: "dyes",
    name: "Dyes",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'site', key:'dyehouse'}]
  },
  
  excavation: {
  	key: "excavation",
    name: "Excavation",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'site', key:'well'},
    			{type:'site', key:'openPitMine'},
    			{type:'site', key:'lateralMine'},
    			{type:'site', key:'shaftMine'}],
  },
  
  falconry: {
  	key: "falconry",
    name: "Falconry",
    biomes: "Forest",
    livestock: "falcon",
    unlocks: [,	{type:'site', key:'mews'}],
  },
  
  feminism: {
  	key: "feminism",
    name: "Feminism",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'value', key:"feminism"}],
  },
  
  finance: {
  	key: "finance",
    name: "Finance",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'pile', key:'treasury'},
    			{type:'building', key:'bank'}],
  },
  
  fishing: {
  	key: "fishing",
    name: "Fishing",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'site', key:'netWeaver'}],
  },
  
  forestry: {
  	key: "forestry",
    name: "Forestry",
    biomes: ['Forest','Rainforest'],
    unlocks: [,	{type:'site', key:'lumberyard'}],
  },
  
  goatHerding: {
  	key: "goatHerding",
    name: "Goat Herding",
    biomes: ['Shrubland','Savanna'],
    livestock: "goat",
    unlocks: [,	{type:'site', key:'goatPen'}],
  },
  
  honor: {
  	key: "honor",
    name: "Honor",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'bonus', key:'Honor'}],
  },
  
  horseHerding: {
  	key: "horseHerding",
    name: "Horse Herding",
    biomes: ['Savanna'],
    livestock: "horse",
    unlocks: [,	{type:'site', key:'horseCorral'},
    			{type:'site', key:'stable'}],
  },
  
  ironworking: {
  	key: "ironworking",
  	name: "Ironworking",
  	biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
  	unlocks: [,	{type:'site', key:'bloomery'},
  				{type:'site', key:'ironArmory'},
  				{type:'site', key:'ironArsenal'},
  				{type:'site', key:'blastFurnace'}],
  },
  
  kennelry: {
  	key: "kennelry",
    name: "Kennelry",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    livestock: "wolf",
    unlocks: [,	{type:'site', key:'kennel'}],
  },
  
  leatherworking: {
  	key: "leatherworking",
    name: "Leatherworking",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'site', key:'tannery'},
    			{type:'site', key:'leatherworks'},
    			{type:'site', key:'fineLeatherworks'}],
  },
  
  llamaHerding: {
  	key: "llamaHerding",
    name: "Llama Herding",
    biomes: ["Shrubland","Savanna"],
    livestock: "llama",
    unlocks: [,	{type:'site', key:"llamaFarm"}],
  },
  
  masculinism: {
  	key: "masculinism",
    name: "Masculinism",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'value', key:"masculinism"}],
  },
  
  metalurgy: {
  	key: "metalurgy",
    name: "Metalurgy",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'site', key:'smelter'},
    			{type:'site', key:'alloyer'}],
  },
  
  preservation: {
  	key: "preservation",
    name: "Food Preservation",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'pile', key:'granary'}],
  },
  
  pyrotechnics: {
  	key: "pyrotechnics",
    name: "Pyrotechnics",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'site', key:'charcoalBurner'},
    			{type:'site', key:'smoker'}],
  },
  
  race: {
  	key: "race",
    name: "Race",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'value', key:'racism'}],
  },
  
  sheepHerding: {
  	key: "sheepHerding",
    name: "Sheep Herding",
    biomes: ["Shrubland","Savanna"],
    livestock: "sheep",
    unlocks: [,	{type:'site', key:"sheepfold"}],
  },
  
  slings: {
  	key: "slings",
    name: "Slings",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'site', key:'slingery'}],
  },
  
  stonecraft: {
  	key: "stonecraft",
    name: "Stonecraft",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'site', key:'knappery'},
    			{type:'site', key:'stoneArmory'}],
  },
  
  swineHusbandry: {
  	key: "swineHusbandry",
    name: "Swine Husbandry",
    biomes: ["Shrubland","Forest"],
    livestock: "swine",
    unlocks: [,	{type:'site', key:'swineHollow'}],
  },
  
  tactics: {
  	key: "tactics",
    name: "Tactics",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'bonus', key:"Simple Tactics"}]
  },
  
  trade: {
  	key: "trade",
    name: "Trade",
    biomes: ['Tundra','Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
    unlocks: [,	{type:'link', key:'overland'},
    			{type:'pile', key:'warehouse'},
    			{type:'pile', key:'market'}],
  },
  
  textiles: {
  	key: "textiles",
  	name: "Textiles",
  	biomes: ['Desert','Savanna','Shrubland','Forest','Rainforest','Ocean'],
  	unlocks: [,	{type:'site', key:'ropewalk'},
  				{type:'site', key:'feltery'},
  				{type:'site', key:'clothier'},
  				{type:'site', key:'loom'},
  				{type:'site', key:'tailor'}],
  },
  
};

var dataResources = {
  
  food: {
    key: "food",
    name: "Food",
    plural: "sacks of Food",
    desc: "Each sack of food will feed one person for one season.  Can be stretched across starving people, but their health will slowly degrade.",
    advances: [dataAdvances.agriculture, dataAdvances.falconry, dataAdvances.kennelry, dataAdvances.horseHerding, dataAdvances.cattleHerding, dataAdvances.goatHerding, dataAdvances.caribouHerding,dataAdvances.sheepHerding,dataAdvances.llamaHerding,dataAdvances.camelHerding],
  },
  
  aluminumOre: {
    key: "aluminumOre",
    name: "Aluminum Ore",
    plural: "piles of Aluminum Ore",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  beer: {
    key: "beer",
    name: "Beer",
    plural: "skins of Beer",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.brewing],
  },
  
  bronzeArmor: {
    key: "bronzeArmor",
    name: "Bronze Armor",
    plural: "suit of Bronze Armor",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.bronzeworking],
  },
  
  bone: {
    key: "bone",
    name: "Bone",
    plural: "piles of Bones",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.kennelry],
  },
  
  brick: {
    key: "brick",
    name: "Brick",
    plural: "stack of Bricks",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.construction],
  },
  
  bronze: {
    key: "bronze",
    name: "Bronze",
    plural: "ingots of Bronze",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  bronzeArmor:  {
    key: "bronzeArmor",
    name: "Bronze Armor",
    plural: "Bronze Armor",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.discipline,dataAdvances.tactics],
  },
  
  bronzeArms: {
    key: "bronzeArms",
    name: "Bronze Arms",
    plural: "Bronze Arms",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.discipline,dataAdvances.tactics],
  },
  
  bronzeTool: {
  	key: "bronzeTool",
  	name: "Bronze Tool",
  	plural: "Bronze Tools",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  camel: {
    key: "camel",
    name: "Camel",
    plural: "head of Camel",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.camelHerding,dataAdvances.trade],
    foodValue: 4,
  },
  
  caribou: {
    key: "caribou",
    name: "Caribou",
    plural: "head of Caribou",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.caribouHerding,dataAdvances.trade],
    foodValue: 3,
  },
  
  cattle: {
    key: "cattle",
    name: "Cattle",
    plural: "head of Cattle",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.cattleHerding],
    foodValue: 4,
  },
  
  chicken: {
    key: "chicken",
    name: "Chicken",
    plural: "head of chicken",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.chickenHusbandry],
    foodValue: 0.1,
  },
  
  clay: {
    key: "clay",
    name: "Clay",
    plural: "lumps of Clay",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.ceramics, dataAdvances.preservation, dataAdvances.construction],
  },
  
  cloth: {
    key: "cloth",
    name: "Cloth",
    plural: "bolts of Cloth",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.textiles],
  },
  
  clothing: {
    key: "clothing",
    name: "Clothing",
    plural: "outfits of Clothing",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.textiles],
  },
  
  coal: {
    key: "coal",
    name: "Coal",
    plural: "piles of Coal",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  copperOre: {
    key: "copperOre",
    name: "Copper Ore",
    plural: "piles of Copper Ore",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  cowrie: {
    key: "cowrie",
    name: "Cowrie Shell",
    plural: "Cowries",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.finance,dataAdvances.trade],
  },
  
  crudeOil: {
    key: "crudeOil",
    name: "Crude Oil",
    plural: "buckets of Crude Oil",
    desc: "A useful thing. (Placeholder Text)",
    advances: [],
  },
  
  dog: {
  	key: "dog",
  	name: "Dog",
  	plural: "Dogs",
    desc: "A useful thing. (Placeholder Text)",
  	advances: [dataAdvances.kennelry,dataAdvances.trade],
  	foodValue: 0.2,
  },
  
  dye: {
    key: "dye",
    name: "Dye",
    plural: "bucket of Dye",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.dyes,dataAdvances.textiles],
  },
  
  dyedCloth: {
    key: "dyedCloth",
    name: "Dyed Cloth",
    plural: "bolts of Dyed Cloth",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.textiles],
  },
  
  goat: {
    key: "goat",
    name: "Goat",
    plural: "head of goats",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.goatHerding],
    foodValue: 1,
  },
  
  falcon: {
  	key: "falcon",
  	name: "Falcon",
  	plural: "Falcons",
    desc: "A useful thing. (Placeholder Text)",
  	advances: [dataAdvances.falconry],
  },
  
  fiber: {
    key: "fiber",
    name: "Fiber",
    plural: "cords of Fiber",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.textiles],
  },
  
  fineClothing: {
    key: "fineClothing",
    name: "Fine Clothing",
    plural: "outfits of Fine Clothing",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.textiles],
  },
  
  fuel: {
    key: "fuel",
    name: "Fuel",
    plural: "stacks of Fuel",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.pyrotechnics],
  },
  
  fur: {
    key: "fur",
    name: "Fur",
    plural: "Furs",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.leatherworking, dataAdvances.dyes],
  },
  
  glaze: {
    key: "glaze",
    name: "Glaze",
    plural: "pots of Glaze",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.pottery, dataAdvances.dyes],
  },
  
  horse: {
    key: "horse",
    name: "Horse",
    plural: "head of Horses",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.horseHerding,dataAdvances.trade],
    foodValue: 3,
  },
  
  ironIngot: {
    key: "ironIngot",
    name: "Iron Ingot",
    plural: "Iron Ingots",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.ironworking],
  },
  
  ironOre: {
    key: "ironOre",
    name: "Iron Ore",
    plural: "piles of Iron Ore",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.ironworking],
  },
  
  ironArmor:  {
    key: "ironArmor",
    name: "Iron Armor",
    plural: "Iron Armor",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.discipline,dataAdvances.tactics],
  },
  
  ironArms: {
    key: "ironArms",
    name: "Iron Arms",
    plural: "Iron Arms",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.discipline,dataAdvances.tactics],
  },
  
  ironTool: {
  	key: "ironTool",
  	name: "Iron Tool",
  	plural: "Iron Tools",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  leadOre: {
    key: "leadOre",
    name: "Lead Ore",
    plural: "piles of Lead Ore",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.smelting,dataAdvances.ironworking,dataAdvances.bronzeworking],
  },
  
  leadPellet: {
  	key: "leadPellet",
  	name: "Lead Pellet",
  	plural: "Pouch of Lead Pellets",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.slings],
  },
  
  leather: {
  	key: "leather",
  	name: "Leather",
  	plural: "bale of Leathers",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.leatherworking,dataAdvances.dyes],
  },
  
  leatherFinery: {
  	key: "leatherFinery",
  	name: "Leather Finery",
  	plural: "suit of Leather Finery",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.leatherworking,dataAdvances.dyes],
  },
  
  leatherJerkin: {
  	key: "leatherJerkin",
  	name: "Leather Jerkin",
  	plural: "leather Jerkins",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.leatherworking,dataAdvances.dyes],
  },
  
  llama: {
    key: "llama",
    name: "Llama",
    plural: "head of Llama",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.llamaHerding,dataAdvances.trade],
    foodValue: 2,
  },
  
  lumber: {
    key: "lumber",
    name: "Lumber",
    plural: "stacks of Lumber",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.forestry, dataAdvances.pyrotechnics, dataAdvances.carpentry, dataAdvances.aquatecture],
  },
  
  longbow: {
    key: "longbow",
    name: "Longbow",
    plural: "long Bows",
    advances: [dataAdvances.tactics],
  },
  
  manure: {
    key: "manure",
    name: "Manure",
    plural: "piles of Manure",
    advances: [dataAdvances.agriculture,dataAdvances.preservation,dataAdvances.blackPowder],
  },
  
  mysteryLivestock: {
  	key: "mysteryLivestock",
  	name: "Mystery Livestock!",
  	plural: "Livestock",
    desc: "A useful thing. (Placeholder Text)",
  	advances: [],
  },
  
  mysteryOre: {
  	key: "mysteryOre",
  	name: "Mystery Ore!",
  	plural: "Ore",
    desc: "A useful thing. (Placeholder Text)",
  	advances: [],
  },
  
  net: {
  	key: "net",
  	name: "Fishing Net",
  	plural: "Fishing Nets",
    desc: "A useful thing. (Placeholder Text)",
  	advances: [dataAdvances.fishing],
  },
  
  pottery: {
  	key: "pottery",
  	name: "Pottery",
  	plural: "pots",
    desc: "A useful thing. (Placeholder Text)",
  	advances: [dataAdvances.preservation],
  },
  
  rope: {
  	key: "rope",
  	name: "Rope",
  	plural: "cords of Rope",
    desc: "A useful thing. (Placeholder Text)",
  	advances: [dataAdvances.fishing,dataAdvances.slings,dataAdvances.trade],
  },
  
  saltpeter: {
    key: "saltpeter",
    name: "Saltpeter",
    plural: "piles of Saltpeter",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.blackPowder],
  },
  
  sheep: {
    key: "sheep",
    name: "Sheep",
    plural: "head of Sheep",
    desc: "A useful thing. (Placeholder Text)",
  	advances: [dataAdvances.agriculture,dataAdvances.leatherworking,dataAdvances.textiles],
    foodValue: 2,
  },
  
  shortbow: {
    key: "shortbow",
    name: "Shortbow",
    plural: "short Bows",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.discipline,dataAdvances.tactics],
  },
  
  simpleTool: {
    key: "simpleTool",
    name: "Simple Tool",
    plural: "Simple Tools",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.excavation],
  },
  
  slag: {
  	key: "slag",
  	name: "Slag",
  	plural: "lumps of Slag",
    desc: "A useful thing. (Placeholder Text)",
  	advances: [dataAdvances.ironworking,dataAdvances.ceramics],
  },
  
  sling: {
  	key: "sling",
  	name: "Sling",
  	plural: "Slings",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  steed: {
    key: "steed",
    name: "Steed",
    plural: "noble Steeds",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.horseHerding,dataAdvances.trade],
    foodValue: 3,
  },
  
  steelBar: {
    key: "steelBar",
    name: "Steel Bar",
    plural: "stacks of Steel Bars",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  steelArmor:  {
    key: "steelArmor",
    name: "Steel Armor",
    plural: "Steel Armor",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.discipline,dataAdvances.tactics],
  },
  
  steelArms: {
    key: "steelArms",
    name: "Steel Arms",
    plural: "Steel Arms",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.discipline,dataAdvances.tactics],
  },
  
  steelTool: {
  	key: "steelTool",
  	name: "Steel Tool",
  	plural: "Steel Tools",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  stone: {
    key: "stone",
    name: "Stone",
    plural: "piles of Stones",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.excavation, dataAdvances.stonecraft, dataAdvances.construction],
  },
  
  stoneArms: {
    key: "stoneArms",
    name: "Stone Axe",
    plural: "Stone Axes",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  sulfur: {
    key: "sulfur",
    name: "Sulfur",
    plural: "piles of Sulfur",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  swine: {
    key: "swine",
    name: "Swine",
    plural: "head of Swine",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.swineHusbandry],
    foodValue: 2,
  },
  
  tile: {
    key: "tile",
    name: "Tile",
    plural: "stacks of tile",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  tinOre: {
    key: "tinOre",
    name: "Tin Ore",
    plural: "piles of Tin Ore",
    desc: "A useful thing. (Placeholder Text)",
  },
  
  water: {
    key: "water",
    name: "Water",
    plural: "jugs of Water",
    desc: "A useful thing. (Placeholder Text)",
    advances: [dataAdvances.agriculture, dataAdvances.brewing, dataAdvances.dyes,dataAdvances.camelHerding,dataAdvances.trade],
  },
  
  wolf: {
  	key: "wolf",
  	name: "Wolf",
  	plural: "Wolves",
    desc: "A useful thing. (Placeholder Text)",
  	advances: [dataAdvances.kennelry],
  	foodValue: 0.2,
  },
  
};

var dataSites = {
  theWilds: {
    name: 'The Wilds',
    job: 'hunter-gatherer',
    tools: [],
    bonusTools: [dataResources.falcon,dataResources.dog,dataResources.sling,dataResources.shortbow,dataResources.longbow],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.1,
    secondaryProduce: [dataResources.simpleTool,dataResources.fur,dataResources.lumber,dataResources.bone,dataResources.stone,dataResources.fiber,dataResources.mysteryLivestock],
    secondaryEfficiency: 0.1,
    baseCapacity: 200,
  },
  
  // Natural Food-Producing Work Sites
    
  fruitGrove: {
    name: 'Fruit Grove',
    job: 'gatherer',
    tools: [],
    bonusTools: [],
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
    bonusTools: [dataResources.net],
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
    bonusTools: [dataResources.net],
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
    bonusTools: [dataResources.sling,dataResources.dog,dataResources.shortbow,dataResources.longbow],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.3,
    secondaryProduce: [dataResources.simpleTool,dataResources.bone,dataResources.fur,dataResources.fiber,dataResources.mysteryLivestock],
    secondaryEfficiency: 0.2,
    baseCapacity: 100,
  },
  
  // Other Natural Work Sites
    
  pond: {
    name: 'Pond',
    job: 'water-bearer',
    tools: [],
    bonusTools: [],
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
    bonusTools: [],
    materials: [],
    primaryProduce: dataResources.water,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food,dataResources.bone,dataResources.lumber,dataResources.fiber,dataResources.mysteryLivestock],
    secondaryEfficiency: 0.5,
    baseCapacity: 100,
  },
    
  cenote: {
    name: 'Cenote',
    job: 'cenotista',
    tools: [],
    bonusTools: [],
    materials: [],
    primaryProduce: dataResources.water,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food, dataResources.bone, dataResources.clay, dataResources.stone, dataResources.fiber],
    secondaryEfficiency: 0.5,
    baseCapacity: 100,
  },
    
  clayDeposit: {
    name: 'Clay Deposit',
    job: 'clay digger',
    tools: [dataResources.simpleTool],
    bonusTools: [],
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
    bonusTools: [],
    materials: [],
    primaryProduce: dataResources.stone,
    primaryEfficiency: .5,
    secondaryProduce: [dataResources.simpleTool],
    secondaryEfficiency: .2,
    baseCapacity: 100,
  },
    
  hardwoodGrove: {
    name: 'Hardwood Grove',
    job: 'logger',
    tools: [dataResources.simpleTool],
    bonusTools: [dataResources.stoneArms],
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
    bonusTools: [],
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
    bonusTools: [],
    materials: [],
    primaryProduce: dataResources.fuel,
    primaryEfficiency: .3,
    secondaryProduce: [dataResources.bone,dataResources.stone,dataResources.food,dataResources.simpleTool,dataResources.fur,dataResources.fiber,dataResources.mysteryLivestock],
    secondaryEfficiency: 1,
    baseCapacity: 100,
  },
    
  cowrieBeach: {
    name: 'Cowrie Beach',
    job: 'cowrie gatherer',
    tools: [],
    bonusTools: [],
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
    bonusTools: [],
    materials: [dataResources.ironOre],
    primaryProduce: dataResources.ironIngot,
    primaryEfficiency: 0.6,
    secondaryProduce: [dataResources.slag],
    secondaryEfficiency: 0.2,
    upgradeAdvance: dataAdvances.ironworking,
    buildCost: {brick:100, lumber:20},
    baseCapacity: 20,
  },
  
  bloomery: {
    name: 'Bloomery',
    job: 'ironworker',
    tools: [dataResources.bronzeTool],
    bonusTools: [],
    materials: [dataResources.ironOre,dataResources.fuel],
    primaryProduce: dataResources.ironIngot,
    primaryEfficiency: 0.3,
    secondaryProduce: [dataResources.slag],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.ironworking,
    buildCost: {stone:50},
    baseCapacity: 20,
  },
  
  bowyery: {
    name: 'Bowyery',
    job: 'bowyer',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.lumber,dataResources.rope],
    primaryProduce: dataResources.shortbow,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.simpleTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.tactics,
    buildCost: {lumber:20,simpleTool:20},
    baseCapacity: 20,
  },
  
  breedingKennel: {
    name: 'Breeding Kennel',
    job: 'kennel keepers',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.dog],
    primaryProduce: dataResources.dog,
    primaryEfficiency: 1.2,
    secondaryProduce: [dataResources.food,dataResources.wolf],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.kennelry,
    buildCost: {dog:1,lumber:50},
    baseCapacity: 20,
  },
  
  brewery: {
    name: 'Brewery',
    job: 'brewer',
    tools: [],
    bonusTools: [],
    materials: [dataResources.water,dataResources.food],
    primaryProduce: dataResources.beer,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food,dataResources.manure],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.brewing,
    buildCost: {lumber:50},
    baseCapacity: 20,
  },
  
  brickworks: {
    name: 'Brickworks',
    job: 'brickmaker',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.clay,dataResources.fuel],
    primaryProduce: dataResources.brick,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.simpleTool,dataResources.fuel,dataResources.stone],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.ceramics,
    buildCost: {stone:50},
    baseCapacity: 20,
  },
  
  bronzeArmory: {
    name: 'Bronze Armory',
    job: 'bronzesmith',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.bronze],
    primaryProduce: dataResources.bronzeArms,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.bronzeTool,dataResources.simpleTool,dataResources.bronzeArmor],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.bronzeworking,
    buildCost: {stone:100},
    baseCapacity: 20,
  },
  
  bronzeArsenal: {
    name: 'Bronze Arsenal',
    job: 'bronzesmith',
    tools: [dataResources.bronzeTool],
    bonusTools: [],
    materials: [dataResources.bronze],
    primaryProduce: dataResources.bronzeArmor,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.bronzeArms,dataResources.bronzeTool],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.bronzeworking,
    buildCost: {stone:200},
    baseCapacity: 20,
  },
    
  bronzesmith: {
    name: 'Bronzesmithy',
    job: 'bronzesmith',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.tinOre,dataResources.copperOre,dataResources.fuel],
    primaryProduce: dataResources.bronze,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.bronzeTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.bronzeworking,
    buildCost: {simpleTool:50,stone:50},
    baseCapacity: 20,
  },
  
  camelFarm: {
    name: 'Camel Farm',
    job: 'camel farmer',
    tools: [],
    bonusTools: [],
    materials: [dataResources.simpleTool],
    primaryProduce: dataResources.camel,
    primaryEfficiency: 1.1,
    secondaryProduce: [dataResources.food,dataResources.manure,dataResources.fiber],
    secondaryEfficiency: 1.5,
    upgradeAdvance: dataAdvances.camelHerding,
    buildCost: {water:20,lumber:50,camel:1},
    baseCapacity: 20,
  },
  
  cattleKraal: {
    name: 'Cattle Kraal',
    job: 'cattle rancher',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.cattle],
    primaryProduce: dataResources.cattle,
    primaryEfficiency: 1.1,
    secondaryProduce: [dataResources.food,dataResources.manure],
    secondaryEfficiency: 1.5,
    upgradeAdvance: dataAdvances.cattleHerding,
    buildCost: {fur:20, lumber:50, cattle:1},
    baseCapacity: 20,
  },
  
  caribouPaddock: {
    name: 'Caribou Paddock',
    job: 'caribou rancher',
    tools: [],
    bonusTools: [],
    materials: [dataResources.simpleTool],
    primaryProduce: dataResources.caribou,
    primaryEfficiency: 1.1,
    secondaryProduce: [dataResources.food,dataResources.manure],
    secondaryEfficiency: 1.5,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {fur:20, lumber:50, caribou:1},
    baseCapacity: 20,
  },
  
  charcoalBurner: {
    name: 'Charcoal Burner',
    job: 'charcoal burner',
    tools: [],
    bonusTools: [],
    materials: [dataResources.lumber],
    primaryProduce: dataResources.fuel,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.simpleTool,dataResources.stone,dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.pyrotechnics,
    buildCost: {stone:20},
    baseCapacity: 20,
  },
  
  chickenCoop: {
    name: 'Chicken Coop',
    job: 'chicken tender',
    tools: [],
    bonusTools: [],
    materials: [dataResources.chicken],
    primaryProduce: dataResources.chicken,
    primaryEfficiency: 2,
    secondaryProduce: [dataResources.food,dataResources.manure],
    secondaryEfficiency: 1.5,
    upgradeAdvance: dataAdvances.chickenHusbandry,
    buildCost: {lumber:20, chicken:1},
    baseCapacity: 20,
  },
  
  clothier: {
    name: 'Clothier',
    job: 'clothier',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.cloth],
    primaryProduce: dataResources.clothing,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.simpleTool,dataResources.fineClothing],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.textiles,
    buildCost: {fiber:1,lumber:20},
    baseCapacity: 20,
  },
  
  crudeFields: {
    name: 'Crude Fields',
    job: 'farmer',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.5,
    secondaryProduce: [dataResources.simpleTool,dataResources.stone,dataResources.lumber,dataResources.fiber],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.agriculture,
    buildCost: {simpleTool:20,lumber:10},
    baseCapacity: 20,
  },
  
  dyehouse: {
    name: 'Dyehouse',
    job: 'dyer',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.water],
    primaryProduce: dataResources.dye,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.cowrie,dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.dyes,
    buildCost: {stone:50},
    baseCapacity: 20,
  },
  
  dyeworks: {
    name: 'Dyeworkers',
    job: 'dyer',
    tools: [],
    bonusTools: [],
    materials: [dataResources.dye,dataResources.cloth],
    primaryProduce: dataResources.dyedCloth,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.cloth,dataResources.simpleTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.dyes,
    buildCost: {stone:100},
    baseCapacity: 20,  
  },
  
  feltery: {
    name: 'Feltery',
    job: 'felter',
    tools: [],
    bonusTools: [],
    materials: [dataResources.fiber,dataResources.water],
    primaryProduce: dataResources.cloth,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.dye,dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.textiles,
    buildCost: {lumber:20},
    baseCapacity: 20,
  },
  
  fineLeatherworks: {
    name: 'Fine Leatherworks',
    job: 'fine leatherworker',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.leather],
    primaryProduce: dataResources.leatherFinery,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.leatherJerkin,dataResources.simpleTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.leatherworking,
    buildCost: {lumber:100},
    baseCapacity: 20,
  },
  
  flaxFields: {
    name: 'Simple Fields',
    job: 'farmer',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.water],
    biomes: ['savanna','shrubland','forest','rainforest','desert'],
    primaryProduce: dataResources.fiber,
    primaryEfficiency: 1.75,
    secondaryProduce: [dataResources.simpleTool,dataResources.stone,dataResources.lumber,dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.agriculture,
    buildCost: {simpleTool:20,lumber:10},
    baseCapacity: 20,
  },
  
  fletchery: {
    name: 'Fletchery',
    job: 'fletcher',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.lumber,dataResources.rope],
    primaryProduce: dataResources.longbow,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.simpleTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.tactics,
    buildCost: {lumber:20,simpleTool:20},
    baseCapacity: 20,
  },
  
  glazier: {
    name: 'Glazier',
    job: 'glazier',
    tools: [dataResources.bronzeTool],
    bonusTools: [],
    materials: [dataResources.slag],
    primaryProduce: dataResources.glaze,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.slag,dataResources.ironOre],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.ceramics,
    buildCost: {stone:100},
    baseCapacity: 20,
  },
  
  goatPen: {
    name: 'Goat Pen',
    job: 'goat wrangler',
    tools: [],
    bonusTools: [],
    materials: [dataResources.goat],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.5,
    secondaryProduce: [dataResources.goat,dataResources.manure],
    secondaryEfficiency: 0.4,
    upgradeAdvance: dataAdvances.goatHerding,
    buildCost: {fur:20, lumber:50, goat:1},
    baseCapacity: 20,
  },
  
  horseCorral: {
    name: 'Horse Corral',
    job: 'horse breaker',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.horse],
    primaryProduce: dataResources.steed,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.food,dataResources.horse,dataResources.manure],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.horseHerding,
    buildCost: {fur:20, lumber:50, horse:1},
    baseCapacity: 20,
  },
  
  ironArmory: {
    name: 'Iron Armory',
    job: 'ironsmith',
    tools: [dataResources.bronzeTool],
    bonusTools: [],
    materials: [dataResources.ironIngot],
    primaryProduce: dataResources.ironArms,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.ironTool,dataResources.ironArmor],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.ironworking,
    buildCost: {brick:100},
    baseCapacity: 20,
  },
  
  ironArsenal: {
    name: 'Iron Arsenal',
    job: 'ironsmith',
    tools: [dataResources.ironTool],
    bonusTools: [],
    materials: [dataResources.ironIngot],
    primaryProduce: dataResources.ironArmor,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.ironArms,dataResources.ironTool],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.ironworking,
    buildCost: {brick:200},
    baseCapacity: 20,
  },
  
  kennel: {
    name: 'Kennel',
    job: 'kennel keepers',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.wolf],
    primaryProduce: dataResources.dog,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.food,dataResources.wolf],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.kennelry,
    buildCost: {lumber:50, wolf:1},
    baseCapacity: 20,
  },
    
  knappery: {
    name: 'Knappery',
    job: 'knapper',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.stone],
    primaryProduce: dataResources.simpleTool,
    primaryEfficiency: 1.8,
    secondaryProduce: [dataResources.fuel],
    secondaryEfficiency: .1,
    upgradeAdvance: dataAdvances.stonecraft,
    buildCost: {simpleTool:10,stone:10},
    baseCapacity: 20,
  },
  
  lateralMine: {
    name: 'Lateral Mine',
    job: 'miner',
    tools: [dataResources.bronzeTool],
    bonusTools: [],
    materials: [],
    primaryProduce: dataResources.mysteryOre,
    primaryEfficiency: 0.4,
    miningDepth: 1,
    secondaryProduce: [dataResources.simpleTool,dataResources.stone],
    secondaryEfficiency: 0.4,
    upgradeAdvance: dataAdvances.excavation,
    buildCost: {simpleTool:100},
    baseCapacity: 20,
  },
  
  leatherworks: {
    name: 'Leatherworks',
    job: 'leatherworker',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.leather],
    primaryProduce: dataResources.leatherJerkin,
    primaryEfficiency: 0.6,
    secondaryProduce: [dataResources.leatherFinery,dataResources.dye,dataResources.simpleTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {lumber:50},
    baseCapacity: 20,
  },
  
  llamaFarm: {
    name: 'Llama Farm',
    job: 'llama farmer',
    tools: [],
    bonusTools: [],
    materials: [dataResources.simpleTool],
    primaryProduce: dataResources.llama,
    primaryEfficiency: 1.1,
    secondaryProduce: [dataResources.food,dataResources.manure,dataResources.fiber],
    secondaryEfficiency: 1.5,
    upgradeAdvance: dataAdvances.llamaHerding,
    buildCost: {fur:20, lumber:50, llama:1},
    baseCapacity: 20,
  },
  
  loom: {
    name: 'Loom',
    job: 'weaver',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.fiber],
    primaryProduce: dataResources.cloth,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.textiles,
    buildCost: {lumber:50},
    baseCapacity: 20,
  },
  
  lumberyard: {
    name: 'Lumberyard',
    job: 'lumberjaq',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [],
    primaryProduce: dataResources.lumber,
    primaryEfficiency: 1.5,
    secondaryProduce: [dataResources.food,dataResources.simpleTool,dataResources.stone],
    secondaryEfficiency: 0.2,
    upgradeAdvance: dataAdvances.forestry,
    buildCost: {lumber:50},
    baseCapacity: 20,
  },
  
  mews: {
    name: 'Mews',
    job: 'falconer',
    tools: [dataResources.simpleTool],
    bonusTools: [dataResources.leather],
    materials: [dataResources.falcon],
    primaryProduce: dataResources.falcon,
    primaryEfficiency: 2,
    secondaryProduce: [dataResources.food],
    secondaryEfficiency: 0.8,
    upgradeAdvance: dataAdvances.falconry,
    buildCost: {stone:50, falcon:1},
    baseCapacity: 20,
  },
  
  netWeaver: {
    name: 'Netweaver',
    job: 'netweaver',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.rope],
    primaryProduce: dataResources.net,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.food,dataResources.simpleTool],
    secondaryEfficiency: 0.4,
    upgradeAdvance: dataAdvances.fishing,
    buildCost: {lumber:100},
    baseCapacity: 20,
  },
  
  openPitMine: {
    name: 'Open Pit Mine',
    job: 'miner',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [],
    primaryProduce: dataResources.mysteryOre,
    primaryEfficiency: 0.2,
    miningDepth: 0,
    secondaryProduce: [dataResources.simpleTool,dataResources.stone],
    secondaryEfficiency: 0.3,
    upgradeAdvance: dataAdvances.excavation,
    buildCost: {simpleTool:100},
    baseCapacity: 20,
  },
  
  potter: {
    name: 'Pottery Barn',
    job: 'potter',
    tools: [],
    bonusTools: [],
    materials: [dataResources.clay,,dataResources.fuel],
    primaryProduce: dataResources.pottery,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.stone,dataResources.brick],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {simpleTool:10,lumber:20},
    baseCapacity: 20,
  },
  
  ropewalk: {
    name: 'Ropewalk',
    job: 'ropemaker',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.fiber],
    primaryProduce: dataResources.rope,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.fiber,dataResources.cloth],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.textiles,
    buildCost: {lumber:100},
    baseCapacity: 20,
  },
  
  shaftMine: {
    name: 'Shaft Mine',
    job: 'miner',
    tools: [dataResources.ironTool],
    bonusTools: [],
    materials: [],
    primaryProduce: dataResources.mysteryOre,
    primaryEfficiency: 0.6,
    miningDepth: 2,
    secondaryProduce: [dataResources.stone],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.excavation,
    buildCost: {simpleTool:100},
    baseCapacity: 20,
  },
  
  sheepfold: {
    name: 'Sheepfold',
    job: 'shepherd',
    tools: [],
    bonusTools: [],
    materials: [dataResources.simpleTool],
    primaryProduce: dataResources.sheep,
    primaryEfficiency: 1.1,
    secondaryProduce: [dataResources.food,dataResources.manure,dataResources.fiber],
    secondaryEfficiency: 1.5,
    upgradeAdvance: dataAdvances.sheepHerding,
    buildCost: {water:20,lumber:50, sheep:1},
    baseCapacity: 20,
  },
  
  simpleFields: {
    name: 'Simple Fields',
    job: 'farmer',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.water],
    biomes: ['savanna','shrubland','forest','rainforest','desert'],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.75,
    secondaryProduce: [dataResources.simpleTool,dataResources.stone,dataResources.lumber,dataResources.fiber],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.agriculture,
    buildCost: {simpleTool:20,lumber:10},
    baseCapacity: 20,
  },
  
  slingery: {
    name: 'Slingery',
    job: 'sling-maker',
    tools: [],
    bonusTools: [dataResources.simpleTool],
    materials: [dataResources.rope],
    primaryProduce: dataResources.sling,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.simpleTool],
    secondaryEfficiency: 0.1,
    upgradeAdvance: '',
    buildCost: {simpleTool:5,lumber:10},
    baseCapacity: 20,
  },
  
  smoker: {
    name: 'Smoker',
    job: 'smoker',
    tools: [],
    bonusTools: [],
    materials: [dataResources.food,,dataResources.fuel],
    primaryProduce: dataResources.food,
    primaryEfficiency: 2,
    secondaryProduce: [dataResources.food,dataResources.dye],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.pyrotechnics,
    buildCost: {stone:50},
    baseCapacity: 20,
  },
  
  stable: {
    name: 'Stable',
    job: 'hostler',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.steed],
    primaryProduce: dataResources.steed,
    primaryEfficiency: 1.2,
    secondaryProduce: [dataResources.food,dataResources.horse,dataResources.manure],
    secondaryEfficiency: 0.8,
    upgradeAdvance: dataAdvances.horseHerding,
    buildCost: {lumber:100, horse:1},
    baseCapacity: 20,
  },
  
  steelArmory: {
    name: 'Steel Armory',
    job: 'steelsmith',
    tools: [dataResources.ironTool],
    bonusTools: [],
    materials: [dataResources.steelBar],
    primaryProduce: dataResources.steelArms,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.steelTool,dataResources.steelArmor],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.steelworking,
    buildCost: {brick:300},
    baseCapacity: 20,
  },
  
  steelArsenal: {
    name: 'Steel Arsenal',
    job: 'steelsmith',
    tools: [dataResources.steelTool],
    bonusTools: [],
    materials: [dataResources.steelBar],
    primaryProduce: dataResources.steelArmor,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.steelArms,dataResources.steelTool],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.steelworking,
    buildCost: {brick:400},
    baseCapacity: 20,
  },
    
  stoneArmory: {
    name: 'Stone Armory',
    job: 'stone armorer',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.stone],
    primaryProduce: dataResources.stoneArms,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.simpleTool,dataResources.lumber,dataResources.bone],
    secondaryEfficiency: .1,
    upgradeAdvance: dataAdvances.stonecraft,
    buildCost: {simpleTool:20,stone:50},
    baseCapacity: 20,
  },
  
  swineHollow: {
    name: 'Swine Hollow',
    job: 'swineherd',
    tools: [],
    bonusTools: [],
    materials: [dataResources.swine],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1.2,
    secondaryProduce: [dataResources.swine,dataResources.manure,dataResources.fur],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.swineHerding,
    buildCost: {fur:20, water:20, simpleTool:20, swine:1},
    baseCapacity: 20,
  },
  
  tailor: {
    name: 'Tailor',
    job: 'WorkerHereAtThePlace',
    tools: [dataResources.bronzeTool],
    bonusTools: [],
    materials: [dataResources.dyedCloth],
    primaryProduce: dataResources.fineClothing,
    primaryEfficiency: 0.5,
    secondaryProduce: [dataResources.clothing],
    secondaryEfficiency: 0.5,
    upgradeAdvance: dataAdvances.textiles,
    buildCost: {lumber:100},
    baseCapacity: 20,
  },
  
  tannery: {
    name: 'Tannery',
    job: 'tanner',
    tools: [dataResources.simpleTool],
    bonusTools: [],
    materials: [dataResources.fur],
    primaryProduce: dataResources.leather,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.dye,dataResources.food],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.leatherworking,
    buildCost: {lumber:10, simpleTool:20},
    baseCapacity: 20,
  },
  
  tilery: {
    name: 'Tilery',
    job: 'tiler',
    tools: [dataResources.bronzeTool],
    bonusTools: [],
    materials: [dataResources.clay,,dataResources.fuel],
    primaryProduce: dataResources.tile,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.brick,dataResources.glaze,dataResources.pottery],
    secondaryEfficiency: 0.3,
    upgradeAdvance: dataAdvances.ceramics,
    buildCost: {brick:50},
    baseCapacity: 20,
  },
  
  well: {
    name: 'Well',
    job: 'drawer',
    tools: [],
    bonusTools: [],
    materials: [],
    primaryProduce: dataResources.water,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.simpleTool,dataResources.food,dataResources.stone,dataResources.bone],
    secondaryEfficiency: 0.1,
    buildCost: {stone:50, simpleTool:10},
    baseCapacity: 20,
  },
  
  // Template
  
  nameOfWorkSite: {
    name: 'PrettyNameGoesHere',
    job: 'WorkerHereAtThePlace',
    tools: [dataResources.caribou],
    bonusTools: [],
    materials: [dataResources.caribou],
    primaryProduce: dataResources.food,
    primaryEfficiency: 1,
    secondaryProduce: [dataResources.caribou],
    secondaryEfficiency: 0.1,
    upgradeAdvance: dataAdvances.caribouHerding,
    buildCost: {resource:999},
    baseCapacity: 20,
  },
  
};

var dataBuildings = {

	agora: {
		name: "Agora",
		desc: "This structure allows populations to share with their neighbors once more per season.",
		buildCost: {stone:20,tile:50,simpleTool:30},
    	baseCapacity: 25,
	},

	beerGarten: {
		name: "Beer Garten",
		desc: "This structure allows populations to share with their neighbors once more per season.",
		buildCost: {lumber:20,beer:50,simpleTool:20},
    	baseCapacity: 25,
	},

	customsHouse: {
		name: "Customs House",
		desc: "This building allows elite populations to restrict imports and exports to this tile.",
		buildCost: {lumber:20,beer:50,simpleTool:20},
    	baseCapacity: 25,
	},

	geographicalSociety: {
		name: "Geographical Society",
		desc: "Populations which undertake scouting missions share their knowledge with all populations with access to this building.",
		buildCost: {stone:50,simpleTool:10},
    	baseCapacity: 25,
	},

	greatHall: {
		name: "Great Hall",
		desc: "This structure doubles the prestige bonus for a successful raid.",
		buildCost: {stone:50,simpleTool:10},
    	baseCapacity: 25,
	},
	
	laboratory: {
		name: "Laboratory",
		desc: "The laboratory increases the chance of a population learning an advance.",
		buildCost: {lumber:20,stone:20,simpleTool:20},
    	baseCapacity: 25,
	},

	library: {
		name: "Library",
		desc: "The library shares negative data produced here with all residents.",
		buildCost: {stone:50,simpleTool:10},
    	baseCapacity: 25,
    },

	moat: {
		name: "Moat",
		desc: "A circular ditch filled with water, affording protection from outsiders.",
		defense: 1.1,
		buildCost: {simpleTools:50,water:200},
    	baseCapacity: 25,
	},

	palisade: {
		name: "Palisade",
		desc: "A ring of wooden poles lashed together, affording protection from outsiders.",
		defense: 1.2,
		buildCost: {stone:100,lumber:20},
    	baseCapacity: 25,
	},

	stoneWall: {
		name: "Stone Wall",
		desc: "A bulwark of stone, affording protection from outsiders.",
		defense: 1.5,
		buildCost: {stone:100,lumber:20},
    	baseCapacity: 25,
	},
	
	university: {
		name: "University",
		desc: "When a population learns a new advance, there is a small chance they will immediately share the advance with another population.",
		buildCost: {lumber:50,stone:50,tile:20,bronzeTools:20},
    	baseCapacity: 25,
	},
	
	watchtowers: {
		name: "Watchtowers",
		desc: "Sentries warn of impending attack, allowing raid targets in this tile to be defended by their neighbors.",
		buildCost: {lumber:100,simpleTool:20},
    	baseCapacity: 25,
	},

};

var dataShrines = {

	cathedral: {
		name: "Cathedral",
		desc: "The audience for rites performed here extends to neighboring tiles.",
		buildCost: {stone:500,lumber:100,tile:50,simpleTool:50}
	},

	cloister: {
		name: "Cloister",
		desc: "Rites performed by populations of celibates are more effective.",
		bonus: {type:"demographic",lock:"fertility",key:"Celibate"},
		buildCost: {stone:50,lumber:10,simpleTool:20}
	},

	forecourtMen: {
		name: "Men's Forecourt",
		desc: "Rites performed by populations of women are more effective.",
		bonus: {type:"demographic",lock:"gender",key:"Women"},
		buildCost: {stone:50,lumber:10,tile:20,simpleTool:20}
	},

	forecourtWomen: {
		name: "Women's Forecourt",
		desc: "Rites performed by populations of men are more effective.",
		bonus: {type:"demographic",lock:"gender",key:"Men"},
		buildCost: {stone:50,lumber:10,tile:20,simpleTool:20}
	},

	kiva: {
		name: "Kiva",
		desc: "TK.",
		buildCost: {stone:20,simpleTool:50}
	},

	menhir: {
		name: "Menhir",
		desc: "Rites which require Stone are more effective.",
		bonus: {type:"item",lock:"item",key:"stone"},
		buildCost: {stone:50,simpleTool:10}
	},

	reliquary: {
		name: "Reliquary",
		desc: "Rites which require Bone are more effective.",
		bonus: {type:"item",lock:"item",key:"bone"},
		buildCost: {bone:30,stone:10,simpleTool:10}
	},

	ritualLoom: {
		name: "Ritual Loom",
		desc: "Rites which require Fiber are more effective.",
		bonus: {type:"item",lock:"item",key:"fiber"},
		buildCost: {lumber:20,fiber:10,simpleTool:20}
	},

	sacredGrove: {
		name: "Sacred Grove",
		desc: "Rites which require Lumber are more effective.",
		bonus: {type:"item",lock:"item",key:"lumber"},
		buildCost: {lumber:20, stone:20,simpleTool:20}
	},

	sacredSpring: {
		name: "Sacred Spring",
		desc: "Rites which require Water are more effective.",
		bonus: {type:"item",lock:"item",key:"water"},
		buildCost: {stone:30,simpleTool:20}
	},

	seminary: {
		name: "Seminary",
		desc: "New rites developed through synthesis are immediately shared with one additional population.",
		buildCost: {stone:50,lumber:20,tile:20,simpleTool:20}
	},

	shrine: {
		name: "Shrine",
		desc: "Rites performed on this tile lose power only half the time.",
		bonus: {type:"icon",lock:"icon",key:"icon"},
		buildCost: {stone:30,simpleTool:20}
	},

	shul: {
		name: "Shul",
		desc: "Rites performed on this tile lose power only half the time, and are more likely to be learned by other populations.",
		buildCost: {lumber:100,stone:100,simpleTool:30}
	},

	temple: {
		name: "Temple",
		desc: "When rites are synthesized here, they gain bonus power.",
		buildCost: {stone:50,lumber:20,tile:20,simpleTool:20}
	},

};

var dataLinks = {

	overland: {
		name: "Overland Route",
		legal: true,
		reflexive: true,
		restrictedResources: [dataResources.food,dataResources.water],
	},

	overlandSmuggling: {
		name: "Overland Smuggling Route",
		legal: false,
		reflexive: false,
		restrictedResources: [dataResources.food,dataResources.water],
	},
};

var dataBiomes = {
  
  tundra: {
    name: 'Tundra',
    naturalSites: [dataSites.clayDeposit,dataSites.grazingLand,dataSites.outcropping],
    fauna: ["Caribou",'Polar Bear',"Puffin","Penguin",'Hare','Wolf','Fox','Yak'],
    flora: ['Lichen','Rock Willow','Pasque','Saxifrage'],
    moveCost: 30,
  },
  
  desert: {
    name: 'Desert',
    naturalSites: [dataSites.clayDeposit,dataSites.outcropping,dataSites.canyon,dataSites.oasis,dataSites.cenote],
    fauna: ['Jackal','Camel','Vulture','Snake','Scorpion','Goat','Wolf','Tortoise','Lizard','Owl'],
    flora: ['Palm','Date','Mustard Seed','Cactus'],
    moveCost: 50,
  },
  
  shrubland: {
    name: 'Shrubland',
    naturalSites: [dataSites.grazingLand,dataSites.clayDeposit,dataSites.pond,dataSites.river],
    fauna: ['Antelope','Sheep','Cat','Wolf','Otter','Fox','Bat','Wallaby','Hare','Zebra','Rhinoceros','Mouse','Rat','Elephant','Owl'],
    flora: ["Saltbrush",'Needlebush','Tomato','Currant','Cassia','Bloodbush','Cotton','Sage'],
    moveCost: 20,
  },
  
  rainforest: {
    name: 'Rainforest',
    naturalSites: [dataSites.river,dataSites.pond,dataSites.clayDeposit,dataSites.outcropping,dataSites.hardwoodGrove,dataSites.canyon],
    fauna: ['Duiker','Fox','Cat','Ocelot','Ferret','Bat','Bonobo','Chimpanzee','Loris','Orangutan','Mouse','Rat'],
    flora: ['Vine','Bamboo','Fern','Orchid','Palm','Water Lily','Rubber Tree','Bougainvillea','Corpse Flower','Pitcherplant','Durian'],
    moveCost: 70,
  },
  
  savanna: {
    name: 'Savanna',
    naturalSites: [dataSites.river,dataSites.pond,dataSites.clayDeposit,dataSites.grazingLand,dataSites.outcropping,dataSites.cenote,dataSites.canyon],
    fauna: ['Antelope','Gazelle','Peccary','Buffalo','Giraffe','Duiker','Leopard','Lion','Tiger','Fox','Hyena','Lynx','Bat','Mouse','Rat','Squirrel','Porcupine','Owl','Hawk'],
    flora: ['Tall Grass','Acacia','Manketti','Bushwillow','Baobab','Melon'],
    moveCost: 20,
  },
  
  forest: {
    name: 'Forest',
    naturalSites: [dataSites.river,dataSites.pond,dataSites.peatBog,dataSites.clayDeposit,dataSites.outcropping,dataSites.hardwoodGrove,dataSites.fruitGrove,dataSites.canyon],
    fauna: ['Ox','Peccary','Deer','Elk','Cat','Wolf','Fox','Wolverine','Bat','Lemur','Opposum','Kangaroo','Rabbit','Hare','Ape','Tamarin','Monkey','Elephant','Mouse','Rat','Squirrel','Porcupine','Owl','Hawk','Eagle'],
    flora: ['Oak','Pine','Berry','Water Lily','Rose','Lily','Dandelion'],
    moveCost: 60,
  },
  
  ocean: {
  	name: 'Ocean',
    moveCost: 20,
    flora: [],
    fauna: [],
    
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
  compositebow: 0.8,
};

var dataForceAdvances = {
  honor: 0.1,
  discipline: 0.5,
  tactics: 0.5,
};

var dataMoveItems = {
	camel: 0.5,
	horse: 0.5,
	llama: 0.4,
	caribou: 0.3,
	dog: 0.2,
};

var dataMoveAdvances = {
  
};

var dataNames = {
	universal: ["Star","Sky","Moon","Sun","Summer","Autumn","Winter","Spring","Rain","Wind","Stone","Rock","Pebble","Water","Child","Children","Mother","Father","Parent","Hunger","Peace","Plenty","Strife","Loss","Feast","Cloud"],
};




