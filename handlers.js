var handlers = {
  
  expandWorldMap: function() {
    var expandWorldMapButton = document.getElementById('expandWorldMapButton');
    expandWorldMapButton.style.display = 'none';
    var collapseWorldMapButton = document.getElementById('collapseWorldMapButton');
    collapseWorldMapButton.style.display = 'inline';
    var worldMapTable = document.getElementById('worldMapTable');
    worldMapTable.style.display = 'table';
    var worldMapLegendDiv=document.getElementById('worldMapLegendDiv');
    worldMapLegendDiv.style.display = 'inline';
    
  },
  
  collapseWorldMap: function() {
    var expandWorldMapButton = document.getElementById('expandWorldMapButton');
    expandWorldMapButton.style.display = 'inline';
    var collapseWorldMapButton = document.getElementById('collapseWorldMapButton');
    collapseWorldMapButton.style.display = 'none';
    var worldMapTable = document.getElementById('worldMapTable');
    worldMapTable.style.display = 'none';
    var worldMapLegendDiv=document.getElementById('worldMapLegendDiv');
    worldMapLegendDiv.style.display = 'none';
  },
  
  setupCoords: function() {
    var size = Math.floor(document.getElementById('setupCoordsButton').valueAsNumber);
    worldMap.setupCoords(size*2,size);
    
    var expandWorldMapButton = document.getElementById('expandWorldMapButton');
    expandWorldMapButton.style.display = 'none';
    var collapseWorldMapButton = document.getElementById('collapseWorldMapButton');
    collapseWorldMapButton.style.display = 'inline';
    var worldMapTable = document.getElementById('worldMapTable');
    worldMapTable.style.display = 'table';
    view.displaySetUpTable();
  },
  
  setupTectonics: function() {
    worldMap.setupTectonics(20);
    view.displaySetUpTable();
  },
  
  setupOceans: function() {
    worldMap.setupOceans(document.getElementById('setupOceanButton').valueAsNumber);
    view.displaySetUpTable();
  },
  
  setupHemisphere: function() {
    
    worldMap.stage = 3;
    
    var worldMapLegendDiv=document.getElementById('worldMapLegendDiv');
    worldMapLegendDiv.style.display = 'inline';
    
    var windPower = document.getElementById('setupPrecipitationButton').valueAsNumber;
    var hemisphere = document.getElementById('setupHemisphereButton').valueAsNumber;
    worldMap.setupPrecipitation(windPower,hemisphere);
    
    var heat = document.getElementById('setupTemperatureButton').valueAsNumber;
    worldMap.setupTemperature(heat+20,heat-10,hemisphere);
    
    view.displaySetUpTable();
  },
  
  setupPrecipitation: function() {
    
    worldMap.stage = 4;
    var windPower = document.getElementById('setupPrecipitationButton').valueAsNumber;
    var hemisphere = document.getElementById('setupHemisphereButton').valueAsNumber;
    worldMap.setupPrecipitation(windPower,hemisphere);
    
    view.displaySetUpTable();
  },
  
  setupTemperature: function() {
    
    worldMap.stage = 4;
    var heat = document.getElementById('setupTemperatureButton').valueAsNumber;
    var hemisphere = document.getElementById('setupHemisphereButton').valueAsNumber;
    worldMap.setupTemperature(heat+20,heat-10,hemisphere);
    
    view.displaySetUpTable();
  },
  
  setupBiomes: function() {
    worldMap.setupBiomes();
    view.displaySetUpTable();
  },
  
  setupPopulations: function() {
    worldMap.setupPopulations();
    view.displaySetUpTable();
  },
  
  selectTile: function() {
    worldMap.setupSelect(view.focusX,view.focusY);
  	view.displayWorldMap();
    view.refreshUi();
  },
  
  selectPop: function(i) {
  	var pop = worldMap.coords[view.focusX][view.focusY].units[i];
  	if (pop.loyalty.player > 0) {
  		view.displayGuidance(pop);
  	}
  },
  
  setLegendToElevation: function() {
    worldMap.prefs.legend = "altitude";
    view.displayWorldMap();
  },
  
  setLegendToPrecipitation: function() {
    worldMap.prefs.legend = "precipitation";
    view.displayWorldMap();
  },
  
  setLegendToTemperature: function() {
    worldMap.prefs.legend = "temperature";
    view.displayWorldMap();
  },
  
  setLegendToPopulation: function() {
    worldMap.prefs.legend = "population";
    view.displayWorldMap();
    
  },
  
  revealMap: function() {
  	for (x = 0;x < worldMap.prefs.size_x;x++) {
  		for (y = 0;y < worldMap.prefs.size_y;y++) {
  			worldMap.coords[x][y].fog = 1;
  		}
  	}
    view.displayWorldMap();
  },
  
  guidanceMapSelect: function(x,y) {
  	view.guidanceMapSelect(x,y);
  },
  
  processTurn() {
  
  	document.getElementById('uiGuidancePanel').style.display = "none";
    
    var uiNotificationsList = document.getElementById('uiNotificationsList');
    uiNotificationsList.innerHTML = "";
    
    // Sort all populations by prestige so high-prestige pops go first everywhere
    var popsByPrestige = [];
    for (i in pops) {
      popsByPrestige.push(pops[i]);
    }
    popsByPrestige.sort(function(a,b){return b.prestige - a.prestige});
    
    // And then populations do things:
    for (i in popsByPrestige) {
      popsByPrestige[i].lastSeason = "";
      popsByPrestige[i].work();
    }
    
    for (i in popsByPrestige) {
      popsByPrestige[i].eat();
    }
    
    for (i in popsByPrestige) {
      popsByPrestige[i].claim();
    }
    
    for (i in popsByPrestige) {
      popsByPrestige[i].share();
    }
    
    for (i in popsByPrestige) {
      popsByPrestige[i].impulse();
    }
    
    for (i in popsByPrestige) {
      popsByPrestige[i].season(popsByPrestige[i]);
    }
    
    gameClock.turn++;
    
    view.refreshUi();
  },
  
};