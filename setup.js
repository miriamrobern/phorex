// Code goes here

var gameClock = {
  turn: 0,
  
  year: function() {
    return Math.floor(gameClock.turn/4);
  },
  
  season: function() {
    return ["Spring","Summer","Autumn","Winter"][((gameClock.turn/4)-Math.floor(gameClock.turn/4))*4];
  },
};

var worldMap = {
  
  coords: [],
  stage: 0,
  
  prefs: {
    size_x: '',
    size_y: '',
    legend: "altitude",
  },
  
  setupCoords: function(size_x,size_y) {
    
    worldMap.stage = 0;
  
    worldMap.coords = [];
    
    for (x = 0; x < size_x; x++) {
      
      worldMap.prefs.size_x = size_x;
      worldMap.prefs.size_y = size_y;
      
      worldMap.coords.push([]);
      
      for (y = 0; y < size_y; y++) {
        
        worldMap.coords[x].push({
          altitude: Math.random()*2 - 1,
          precipitation: '99',
          temperature: '15',
          downhill: '',
          biome: '',
          sites: [],
          units: [],
          stocks: {},
          
        });
        
        if (x < 5 || y < 5 || x > size_x-5 || y > size_y - 5) {
          worldMap.coords[x][y].altitude -= Math.max(5-x,5-y,(size_x-5-x)*-1,(size_y-5-y)*-1);
        }
        
      }
    }
    
    view.displayWorldMap();
    
  },
  
  setupTectonics: function(plates) {
    
    worldMap.stage = 1;
    worldMap.prefs.legend = "altitude";
    
    var landmarks = [];
    var offset_x = 0;
    var offset_y = 0;
    var dist = '';
    var dist_offset = '';
    
    for (i = 0; i < plates*2; i = i + 2 ) {
      
      landmarks[i] = {
        x: '',
        y: '',
        z: '',
        r: '',
      };
      
      landmarks[i+1] = {
        x: '',
        y: '',
        z: '',
        r: '',
      };
      
      landmarks[i].x = Math.floor(Math.random()*worldMap.prefs.size_x*2 - worldMap.prefs.size_x/2);
      landmarks[i].y = Math.floor(Math.random()*worldMap.prefs.size_y*2 - worldMap.prefs.size_y/2);
      landmarks[i].z = (Math.random()-0.5)*5;
      landmarks[i].r = Math.random()*(worldMap.prefs.size_x+worldMap.prefs.size_y)/4;
      
      offset_x = Math.random()*3+3;
      offset_y = Math.random()*3+3;
      
      if (Math.random() > 0.5) {
        offset_x = offset_x * -1 ;
      }
      
      if (Math.random() > 0.5) {
        offset_y = offset_y * -1 ;
      }
      
      if (Math.random() < 0.3 && landmarks[i].x < 1 || landmarks[i].x > worldMap.prefs.size_x || landmarks[i].y < 1 || landmarks[i].y > worldMap.prefs.size_y) {
        landmarks[i].z = Math.abs(landmarks[i].z) * -2 ;
        landmarks[i].r *= 1.5;
        landmarks[i+1].z = landmarks[i].z * 0;
      } else {
        landmarks[i+1].z = landmarks[i].z * -1;
      }
      
      landmarks[i+1].x = landmarks[i].x+offset_x;
      landmarks[i+1].y = landmarks[i].y+offset_y;
      landmarks[i+1].r = landmarks[i].r * (Math.random()/4 + 0.75);
      
      for (x = Math.max(0,Math.floor(landmarks[i].x-landmarks[i].r)); x < Math.min(worldMap.prefs.size_x,landmarks[i].x+landmarks[i].r); x++ ){
        for (y = Math.max(0,Math.floor(landmarks[i].y-landmarks[i].r)); y < Math.min(worldMap.prefs.size_y,landmarks[i].y+landmarks[i].r); y++ ) {
          
          dist = Math.pow((Math.pow(x-landmarks[i].x,2)+Math.pow(y-landmarks[i].y,2)),0.5);
          dist_offset = Math.pow((Math.pow(x-landmarks[i+1].x,2)+Math.pow(y-landmarks[i+1].y,2)),0.5);
          
          if ( dist < landmarks[i].r * 0.9 ) {
            worldMap.coords[x][y].altitude = worldMap.coords[x][y].altitude + landmarks[i].z;
          } else if (dist < landmarks[i].r && Math.random() < 0.8) {
            worldMap.coords[x][y].altitude = worldMap.coords[x][y].altitude + landmarks[i].z;
          }
          if ( dist_offset < landmarks[i+1].r * 0.9 ) {
            worldMap.coords[x][y].altitude = worldMap.coords[x][y].altitude + landmarks[i+1].z;
          } else if (dist_offset < landmarks[i+1].r && Math.random() < 0.8) {
            worldMap.coords[x][y].altitude = worldMap.coords[x][y].altitude + landmarks[i+1].z;
          }
        }
      }
    }
    
    // Fitting altitudes to -10/10 range
    
    var maxalt= 0;
    var minalt= 0;
    
    for (x = 0; x < worldMap.prefs.size_x; x++) {
      for (y = 0; y < worldMap.prefs.size_y; y++) {
        
        maxalt = Math.max(maxalt,worldMap.coords[x][y].altitude);
        minalt = Math.min(minalt,worldMap.coords[x][y].altitude) ; 
        
      }
      
    }
    
    for (x = 0; x < worldMap.prefs.size_x; x++) {
      for (y = 0; y < worldMap.prefs.size_y; y++) {
        
        worldMap.coords[x][y].altitude -= minalt ;
        worldMap.coords[x][y].altitude /= maxalt - minalt  ; 
        worldMap.coords[x][y].altitude *= 20 ;
        worldMap.coords[x][y].altitude -= 10 ;
        
      }
      
    }
    
    view.displayWorldMap();
    
  },
  
  setupOceans: function(oceanAlt) {
    
    worldMap.stage = 2;
    worldMap.prefs.legend = "altitude";
    
    var maxalt= 0;
    var minalt= 0;
    
    for (x = 0; x < worldMap.prefs.size_x; x++) {
      for (y = 0; y < worldMap.prefs.size_y; y++) {
        
        maxalt = Math.max(maxalt,worldMap.coords[x][y].altitude);
        minalt = Math.min(minalt,worldMap.coords[x][y].altitude) ; 
        
      }
      
    }
    
    for (x = 0; x < worldMap.prefs.size_x; x++) {
      for (y = 0; y < worldMap.prefs.size_y; y++) {
        
        worldMap.coords[x][y].altitude -= minalt ;
        worldMap.coords[x][y].altitude /= maxalt - minalt  ; 
        worldMap.coords[x][y].altitude *= 20 ;
        worldMap.coords[x][y].altitude -= oceanAlt ;
        
      }
      
    }
    
    view.displayWorldMap();
    
  },
  
  
  
  
  
  
  setupPrecipitation: function(windPower,hemisphere) {
    
    worldMap.prefs.legend = "precipitation";
    
    for (x = 0; x < worldMap.prefs.size_x; x++) {
      for (y=0; y < worldMap.prefs.size_y; y++) {
        worldMap.coords[x][y].precipitation = 0;
      }
    }
    
    var loadSW = 0;
    var lastAlt = 0;
    
    for (x = 0; x < worldMap.prefs.size_x; x++) {
      for (y = 0; y < worldMap.prefs.size_y; y++) {
        
        if (worldMap.coords[x][y].altitude < 0) {
          
          if (hemisphere === 1) {
            loadNE = windPower * 1.0;
            loadNW = windPower * 0.7;
            loadSE = windPower * 0.5;
            loadSW = windPower * 0.3;
          } else {
            loadNE = windPower * 0.5;
            loadNW = windPower * 0.3;
            loadSE = windPower * 1.0;
            loadSW = windPower * 0.7;
          }
          
        lastAlt = 0;
        
          for (n = 0; n < windPower; n++) {
          
            if (loadNE > 0 && x+n < worldMap.prefs.size_x && y-n > -1) {
              if (worldMap.coords[x+n][y-n] > lastAlt) {
                loadNE -= 1 - lastAlt + worldMap.coords[x+n][y-n].altitude;
                worldMap.coords[x+n][y-n].precipitation += 10*(1 - lastAlt + worldMap.coords[x+n][y-n].altitude);
                lastAlt = worldMap.coords[x+n][y-n].altitude;
              } else {
                loadNE--;
                worldMap.coords[x+n][y-n].precipitation += 10;
              }
            } else {
              n = windPower;
            }
          
          }
          
        lastAlt = 0;
        
          for (n = 0; n < windPower; n++) {
          
            if (loadNW > 0 && x-n > -1 && y-n > -1) {
              if (worldMap.coords[x-n][y-n] > lastAlt) {
                loadNW -= 1 - lastAlt + worldMap.coords[x-n][y-n].altitude;
                worldMap.coords[x-n][y-n].precipitation += 10*(1 - lastAlt + worldMap.coords[x-n][y-n].altitude);
                lastAlt = worldMap.coords[x-n][y-n].altitude;
              } else {
                loadNW--;
                worldMap.coords[x-n][y-n].precipitation += 10;
              }
            } else {
              n = windPower;
            }
          
          }
          
        lastAlt = 0;
        
          for (n = 0; n < windPower; n++) {
          
            if (loadSE > 0 && x+n < worldMap.prefs.size_x && y+n < worldMap.prefs.size_y) {
              if (worldMap.coords[x+n][y+n] > lastAlt) {
                loadSE -= 1 - lastAlt + worldMap.coords[x+n][y+n].altitude;
                worldMap.coords[x+n][y+n].precipitation += 10*(1 - lastAlt + worldMap.coords[x+n][y+n].altitude);
                lastAlt = worldMap.coords[x+n][y+n].altitude;
              } else {
                loadSE--;
                worldMap.coords[x+n][y+n].precipitation += 10;
              }
            } else {
              n = windPower;
            }
          
          }
          
        lastAlt = 0;
        
          for (n = 0; n < windPower; n++) {
          
            if (loadSW > 0 && x-n > -1 && y+n < worldMap.prefs.size_y) {
              if (worldMap.coords[x-n][y+n] > lastAlt) {
                loadSW -= 1 - lastAlt + worldMap.coords[x-n][y+n].altitude;
                worldMap.coords[x-n][y+n].precipitation += 10*(1 - lastAlt + worldMap.coords[x-n][y+n].altitude);
                lastAlt = worldMap.coords[x-n][y+n].altitude;
              } else {
                loadSW--;
                worldMap.coords[x-n][y+n].precipitation += 10;
              }
            } else {
              n = windPower;
            }
          
          }
          
          
          
          
          
          
          
          
        }
        
      }
    }
    
    view.displayWorldMap();
    
  },
  
  setupTemperature: function(tempMax,tempMin,hemisphere) {
    
    worldMap.prefs.legend = "temperature";

    var latTemp = '';
    
    for (y = 0; y < worldMap.prefs.size_y; y++) {
      
      if (hemisphere === 1) {
        latTemp = tempMin + (tempMax-tempMin) * (y / worldMap.prefs.size_y) ;
      } else {
        latTemp = tempMin + (tempMax-tempMin) * ((worldMap.prefs.size_y - y) / worldMap.prefs.size_y) ;
      }
      
      for (x = 0; x < worldMap.prefs.size_x; x++) {
        worldMap.coords[x][y].temperature = Math.floor(latTemp - worldMap.coords[x][y].altitude);
      }
    }
    
    view.displayWorldMap();
  },
  
  
  
  setupBiomes: function() {
    
    worldMap.stage = 5;
    worldMap.prefs.legend = "";
    
    var site = '';
    
    for (x=0; x<worldMap.prefs.size_x; x++) {
      for (y=0; y<worldMap.prefs.size_y; y++) {
        
        worldMap.coords[x][y].biome = '';
        worldMap.coords[x][y].sites = [];
        
        if (worldMap.coords[x][y].altitude < 0) {
          worldMap.coords[x][y].biome = dataBiomes.ocean;
          
        } else if (worldMap.coords[x][y].temperature < 0) {
          worldMap.coords[x][y].biome = dataBiomes.tundra;
          site = dataBiomes.tundra.naturalSites[Math.floor(Math.random()*dataBiomes.tundra.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push(dataSites.theWilds,site);
          
        } else if (worldMap.coords[x][y].precipitation > 200) {
          worldMap.coords[x][y].biome = dataBiomes.rainforest;
          site = dataBiomes.rainforest.naturalSites[Math.floor(Math.random()*dataBiomes.rainforest.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push(dataSites.theWilds,site);
          
        } else if (worldMap.coords[x][y].precipitation < 50) {
          worldMap.coords[x][y].biome = dataBiomes.desert;
          site = dataBiomes.desert.naturalSites[Math.floor(Math.random()*dataBiomes.desert.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push(dataSites.theWilds,site);
          
        } else if (worldMap.coords[x][y].temperature > 20) {
          worldMap.coords[x][y].biome = dataBiomes.savanna;
          site = dataBiomes.savanna.naturalSites[Math.floor(Math.random()*dataBiomes.savanna.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push(dataSites.theWilds,site);
          
        } else if (worldMap.coords[x][y].precipitation > 100) {
          worldMap.coords[x][y].biome = dataBiomes.forest;
          site = dataBiomes.forest.naturalSites[Math.floor(Math.random()*dataBiomes.forest.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push(dataSites.theWilds,site);
          
        } else {
          worldMap.coords[x][y].biome = dataBiomes.shrubland;
          site = dataBiomes.shrubland.naturalSites[Math.floor(Math.random()*dataBiomes.shrubland.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push(dataSites.theWilds,site);
          
        }
        
        if (x > 1 && y > 1 && x < worldMap.prefs.size_x-1 && y < worldMap.prefs.size_y-1) {
          if (worldMap.coords[x+1][y].altitude < 0 || worldMap.coords[x][y+1].altitude < 0 || worldMap.coords[x-1][y].altitude < 0 || worldMap.coords[x][y-1].altitude < 0 ) {
            if (Math.random() < 0.3 ) {
              worldMap.coords[x][y].sites.splice(1,1,[dataSites.cowrieBeach,dataSites.shallows][Math.floor(Math.random()*2)]);
            }          
        }
        

        } 
      }
    }

    view.displayWorldMap();

  },
  
  
  setupPopulations: function() {
    
    var peopleName;
    var newPop;
    var newPeople;
    
    var dataPrefices = ["Ab","Ad","An","B","Ch","D","En","Ek","Esh","Ex","F","Fif","Ge","H","Ho","Ik","In","Ish","Isk","K","L","M","N","Om","Ont","Op","P","Qu","R","S","Sh","Sk","T","Th","Uff","Un","Uk","V","W","X","Y","Z"];
    var dataRoots = ["a","as","ab","e","es","en","i","i","in","o","oo","ou","ow","os","u","un","us"];
    var dataSuffices = ["ho","ha","hin","ni","qi","folk","ta","to","te","toh","ten","nish","to","ta","tin","ca","co"];
    
    
    // Initial Populations
    for (x = 1; x < worldMap.prefs.size_x-1; x++) {
      for (y=1; y < worldMap.prefs.size_y-1; y++) {
        if (worldMap.coords[x][y].altitude > 0) {
          
          peopleName = dataPrefices[Math.floor(Math.random()*dataPrefices.length)]+dataRoots[Math.floor(Math.random()*dataRoots.length)]+dataSuffices[Math.floor(Math.random()*dataSuffices.length)];
          peoplePop = Math.floor((Math.random()*0.25+0.25)*worldMap.coords[x][y].precipitation)+5+Math.floor(Math.random()*5);
            
          newPeople = new people(peopleName,x,y);
          peoples.push(newPeople);
          
          newPop = new Pop(peopleName+" Clan",newPeople,peoplePop,x,y);
          pops.push(newPop);
          worldMap.coords[x][y].units.push(newPop);
          
        }
      }
    }
    
    
    // Pregame Migrations
    
    worldMap.stage = 'complete';
    
    var originals = pops.length;
    var expName = '';
    var expPop = 0;
    
    var x = 0;
    var y = 0;
    
    for (i = 0 ; i < originals ; i++) {
      
      x = pops[i].x;
      y = pops[i].y;
      newPop = pops[i];
      newPeople = pops[i].people;
      peopleName = pops[i].people.name;
      
      
      //Migrating Eastward
      if (worldMap.coords[x+1][y].altitude > 0 && Math.random() < 0.7 ) {
        
        expName = ["Wanderers","of the West","Westron","Sunsetters","Eurus","Subsolanus"][Math.floor(Math.random()*4)];
        
        expPop = new Pop(peopleName+" "+expName,newPeople,Math.floor(newPop.population/4),x+1,y,newPop.prestige,newPop.values);
        pops.push(expPop);
        worldMap.coords[x+1][y].units.push(expPop);
        
      }
      
      //Migrating Westward
      if (worldMap.coords[x-1][y].altitude > 0 && Math.random() < 0.7 ) {
        
        expName = ["Refugees","of the East","Estos","of the Rising Sun","Zephyrus","Favonius"][Math.floor(Math.random()*4)];
        
        expPop = new Pop(peopleName+" "+expName,newPeople,Math.floor(newPop.population/4),x-1,y,newPop.prestige,newPop.values);
        pops.push(expPop);
        worldMap.coords[x-1][y].units.push(expPop);
        
      }
      
      //Migrating Northward
      if (worldMap.coords[x][y-1].altitude > 0 && Math.random() < 0.6 ) {
        
        expName = ["Snowbirds","of the South","Southron","Sude","Boreas","Septentrio"][Math.floor(Math.random()*4)];
        
        expPop = new Pop(peopleName+" "+expName,newPeople,Math.floor(newPop.population/4),x,y-1,newPop.prestige,newPop.values);
        pops.push(expPop);
        worldMap.coords[x][y-1].units.push(expPop);
        
      }
      
      //Migrating Southward
      if (worldMap.coords[x][y+1].altitude > 0 && Math.random() < 0.6 ) {
        
        expName = ["Newcomers","of the North","Norse","Notos","Auster"][Math.floor(Math.random()*4)];
        
        expPop = new Pop(peopleName+" "+expName,newPeople,Math.floor(newPop.population/4),x,y+1,newPop.prestige,newPop.values);
        pops.push(expPop);
        worldMap.coords[x][y+1].units.push(expPop);
        
      }
      
    }
    
    setupTable.style.display = 'none';
    view.populatePopulationsPane();
    
  },
  
  setupSelect: function(x,y) {
    
    var uiTileDiv=document.getElementById("uiTileDiv");
    uiTileDiv.style.display = 'inherit';
    
    var selectPane = document.getElementById('selectPane');
    selectPane.style.display = 'none';

  },
  
  
};








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
  
  processTurn() {
    
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
    
    gameClock.turn++;
    
    view.refreshUi();
  }
  
};










var view = {
    
  focusX: '',
  focusY: '',
  mouseoverX: -1,
  mouseoverY: -1,
  
  displaySetUpTable: function() {
    
    var setupTectonicsButton = document.getElementById('setupTectonicsButton');
    var setupOceanButton = document.getElementById('setupOceanButton');
    var setupPrecipitationButton = document.getElementById('setupPrecipitationButton');
    var setupTemperatureButton = document.getElementById('setupTemperatureButton');
    var setupBiomesButton = document.getElementById('setupBiomesButton');
    var setupPopulationsButton = document.getElementById('setupPopulationsButton');
    
    var setupCellTectonics = document.getElementById('setupCellTectonics');
    var setupCellOcean = document.getElementById('setupCellOcean');
    var setupCellHemisphere = document.getElementById('setupCellHemisphere');
    var setupCellPrecipitation = document.getElementById('setupCellPrecipitation');
    var setupCellTemperature = document.getElementById('setupCellTemperature');
    var setupCellBiomes = document.getElementById('setupCellBiomes');
    var setupCellPopulations = document.getElementById('setupCellPopulations');
    
    var setupTable = document.getElementById('setupTable');
    
    var nextCellColor = "#ddd";
    var oldCellColor = "#555";
    
    var introDiv = document.getElementById("introduction");
    introDiv.style.display = 'none';
    
    // SetUp Control Blocking
    
    if (worldMap.stage === 0) {
      
      setupTectonicsButton.disabled = false ;
      setupOceanButton.disabled = true ;
      setupHemisphereButton.disabled = true;
      setupPrecipitationButton.disabled = true ;
      setupTemperatureButton.disabled = true ;
      setupBiomesButton.disabled = true ;
      setupPopulationsButton.disabled = true ;
        
      setupCellTectonics.setAttribute('bgcolor',nextCellColor)
      setupCellOcean.setAttribute('bgcolor',oldCellColor);
      setupCellHemisphere.setAttribute('bgcolor',oldCellColor);
      setupCellPrecipitation.setAttribute('bgcolor',oldCellColor);
      setupCellTemperature.setAttribute('bgcolor',oldCellColor);
      setupCellBiomes.setAttribute('bgcolor',oldCellColor);
      setupCellPopulations.setAttribute('bgcolor',oldCellColor);
        
    } else if (worldMap.stage === 1) {
      
      setupOceanButton.disabled = false;
      setupCellOcean.setAttribute('bgcolor',nextCellColor);
  
      
    } else if (worldMap.stage === 2) {
      
      setupTectonicsButton.disabled = true ;
      setupCellTectonics.setAttribute('bgcolor',oldCellColor);
      setupHemisphereButton.disabled = false ;
      setupCellHemisphere.setAttribute('bgcolor',nextCellColor);
      
    } else if (worldMap.stage === 3) {
      
      setupOceanButton.disabled = true ;
      setupCellOcean.setAttribute('bgcolor',oldCellColor);
      setupPrecipitationButton.disabled = false;
      setupCellPrecipitation.setAttribute('bgcolor',nextCellColor);
      setupTemperatureButton.disabled = false ;
      setupCellTemperature.setAttribute('bgcolor',nextCellColor);
      
      setupBiomesButton.disabled = false;
      setupCellBiomes.setAttribute('bgcolor',nextCellColor);
      
    } else if (worldMap.stage === 4) {
      
    } else if (worldMap.stage === 5) {
      
      setupPrecipitationButton.disabled = true;
      setupCellPrecipitation.setAttribute('bgcolor',oldCellColor);
      setupHemisphereButton.disabled = true ;
      setupCellHemisphere.setAttribute('bgcolor',oldCellColor);
      setupTemperatureButton.disabled = true;
      setupCellTemperature.setAttribute('bgcolor',oldCellColor);
      setupBiomesButton.disabled = true;
      setupCellBiomes.setAttribute('bgcolor',oldCellColor);
      setupPopulationsButton.disabled = false;
      setupCellPopulations.setAttribute('bgcolor',nextCellColor);
      
    }
    
  },
  
  displayWorldMap: function() {
      
    var mapTable = document.getElementById('worldMapTable');
    mapTable.innerHTML = '';
    var cellAltitudeRelative = '';
    var cellColor = '';
    var cellBorder = '';
      
    for (y = 0 ; y < worldMap.prefs.size_y; y++) {
      
      var mapRow = document.createElement('tr');
      
      for (x = 0 ; x < worldMap.prefs.size_x;x++) {
        
        var mapCell = document.createElement('td');
        
        // Tile Coloring
        
        cellAltitudeRelative = Math.max(16,Math.min(255,Math.floor( 128 + 10 * worldMap.coords[x][y].altitude ))) ;

        
        if (worldMap.stage < 2) {
          //Grayscale
          cellColor = cellAltitudeRelative.toString(16) + cellAltitudeRelative.toString(16) + cellAltitudeRelative.toString(16);
          mapCell.setAttribute('bgcolor',cellColor);
          cellBorder = "1px solid " + cellColor;
          mapCell.style.border = cellBorder;
          
        } else if (worldMap.coords[x][y].altitude < 0) {
          // Water
          cellAltitudeRelative = Math.max(cellAltitudeRelative-32,16);
          cellColor = cellAltitudeRelative.toString(16) + cellAltitudeRelative.toString(16) + "DD";
          mapCell.setAttribute('bgcolor',cellColor);
          cellBorder = "1px solid " + cellColor;
          mapCell.style.border = cellBorder;
          
        } else if (worldMap.coords[x][y].temperature < 0) {
          //Tundra
          cellAltitudeRelative = Math.min(255,cellAltitudeRelative + 50 )
          cellColor = cellAltitudeRelative.toString(16) + cellAltitudeRelative.toString(16) + cellAltitudeRelative.toString(16);
          mapCell.setAttribute('bgcolor',cellColor);
          cellBorder = "1px solid " + cellColor;
          mapCell.style.border = cellBorder;
            
        } else if (worldMap.coords[x][y].precipitation > 200) {
          //Rainforest
          cellAltitudeRelative = Math.max(16,cellAltitudeRelative - 40 )
          cellColor = cellAltitudeRelative.toString(16) + "77" + cellAltitudeRelative.toString(16);
          mapCell.setAttribute('bgcolor',cellColor);
          cellBorder = "1px solid " + cellColor;
          mapCell.style.border = cellBorder;
            
        } else if (worldMap.coords[x][y].precipitation < 50) {
          //Desert
          cellColor = "dddd" + cellAltitudeRelative.toString(16);
          mapCell.setAttribute('bgcolor',cellColor);
          cellBorder = "1px solid " + cellColor;
          mapCell.style.border = cellBorder;
            
        } else if (worldMap.coords[x][y].temperature > 20) {
          //Savanna
          cellColor = "BBBB" + cellAltitudeRelative.toString(16);
          mapCell.setAttribute('bgcolor',cellColor);
          cellBorder = "1px solid " + cellColor;
          mapCell.style.border = cellBorder;
            
        } else if (worldMap.coords[x][y].precipitation > 100 ) {
          //Forest
          cellAltitudeRelative = Math.max(16,cellAltitudeRelative - 20 )
          cellColor = cellAltitudeRelative.toString(16) + "99" + cellAltitudeRelative.toString(16);
          mapCell.setAttribute('bgcolor',cellColor);
          cellBorder = "1px solid " + cellColor;
          mapCell.style.border = cellBorder;
            
        } else {
          //Scrubland
          cellColor = "99bb" + cellAltitudeRelative.toString(16);
          mapCell.setAttribute('bgcolor',cellColor);
          cellBorder = "1px solid " + cellColor;
          mapCell.style.border = cellBorder;
            
        // } else {
        //   //Alpine
        //   cellColor = cellAltitudeRelative.toString(16) + cellAltitudeRelative.toString(16) + cellAltitudeRelative.toString(16);
        //   mapCell.setAttribute('bgcolor',cellColor);
          
        } 
        
        
        //Tile Contents
        
        if (worldMap.prefs.legend === "altitude") {
          mapCell.innerHTML = Math.floor(worldMap.coords[x][y].altitude);
        } else if (worldMap.prefs.legend === "temperature") {
          mapCell.innerHTML = Math.floor(worldMap.coords[x][y].temperature);
        } else if (worldMap.prefs.legend === "precipitation") {
          mapCell.innerHTML = Math.floor(worldMap.coords[x][y].precipitation);
        } else {
          var tileLink = "<a onclick='view.refocus("+x+","+y+")'>o</a>";
          mapCell.innerHTML = tileLink;
        }
        
        if (worldMap.stage > 1 && worldMap.coords[x][y].altitude < 0) {
          mapCell.innerHTML = "~";
        } else if (worldMap.stage === "complete" && worldMap.coords[x][y].altitude < 0) {
          mapCell.innerHTML = "~";
        }
        
        
        // Mouseover Cursor
        
        if (x === view.focusX && y === view.focusY) {
        	mapCell.className = "focusTile";
        } else {
        	mapCell.className = "mapTile";
        }
        
        mapRow.appendChild(mapCell);
        
      }
      
      mapTable.appendChild(mapRow);
    }
  },
  
  populatePopulationsPane: function() {
    
    var worldMapTable = document.getElementById("worldMapTable");
    var expandWorldMapButton = document.getElementById("expandWorldMapButton");
    var collapseWorldMapButton = document.getElementById("collapseWorldMapButton");
    worldMapTable.style.display = 'none';
    expandWorldMapButton.style.display = 'inline';
    collapseWorldMapButton.style.display = 'none';
    
    var worldMapLegendDiv=document.getElementById('worldMapLegendDiv');
    worldMapLegendDiv.style.display = 'none';
    
    var selectPane = document.getElementById('selectPane');
    var selectPaneBiome = document.getElementById('selectPaneBiome');
    var selectPanePopulationsNumber = document.getElementById('selectPanePopulationsNumber');
    var selectPanePopulationsList = document.getElementById('selectPanePopulationsList');
    var selectPaneBiome = document.getElementById('selectPaneBiome');
    var selectPaneAltitude = document.getElementById('selectPaneAltitude');
    var selectPanePrecipitation = document.getElementById('selectPanePrecipitation');
    var selectPaneTemperature = document.getElementById('selectPaneTemperature');
    var selectPaneNaturalBounty = document.getElementById('selectPaneNaturalBounty');
    var selectPaneWest = document.getElementById('selectPaneWest');
    var selectPaneEast = document.getElementById('selectPaneEast');
    var selectPaneNorth = document.getElementById('selectPaneNorth');
    var selectPaneSouth = document.getElementById('selectPaneSouth');
    
    var potentialPop = pops[Object.keys(pops)[Math.floor(Math.random()*Object.keys(pops).length)]];
    
    var x = potentialPop.x ;
    var y = potentialPop.y ;
    
    view.focusX = potentialPop.x ;
    view.focusY = potentialPop.y ;
    
    var site = worldMap.coords[x][y].sites[1];
    
    var populationsList = '';
    var popDescriptors = '';
    
    var values ;
    
    for (i = 0; i < worldMap.coords[x][y].units.length;i++) {
      
      values = worldMap.coords[x][y].units[i].values;
      
      if (values.matriarchy > values.patriarchy + 20 ) {
          popDescriptors = popDescriptors + "matriarchal and ";
          
        } else if (values.patriarchy > values.matriarchy + 20) {
          popDescriptors = popDescriptors + "patriarchal and ";
        } 
        
        if (values.piety > values.aggression && values.piety > values.authority && values.piety > values.inquiry) {
          popDescriptors = popDescriptors + "pious ";
          
        } else if (values.authority > values.inquiry && values.authority > values.aggression && values.authority > values.piety) {
          popDescriptors = popDescriptors + "authoritarian ";
          
        } else if (values.inquiry > values.aggression && values.inquiry > values.authority && values.inquiry > values.piety) {
          popDescriptors = popDescriptors + "curious ";
          
        } else {
          popDescriptors = popDescriptors + "violent ";
          
        }
      
      populationsList = populationsList + "<li>" + worldMap.coords[x][y].units[i].population + " of the " + popDescriptors + worldMap.coords[x][y].units[i].people.name + " people</li>";
      popDescriptors = '';
    }
    
    var neighborsWest = "live ";
    
    for (i = 0; i < worldMap.coords[x-1][y].units.length;i++) {
      neighborsWest = neighborsWest + worldMap.coords[x-1][y].units[i].people.name + "s";
      if (i === worldMap.coords[x-1][y].units.length-2) {
        neighborsWest = neighborsWest + ", and ";
      } else if (i < worldMap.coords[x-1][y].units.length-2) {
        neighborsWest = neighborsWest + ", ";
      }
    }
    
    if (neighborsWest === "live ") {neighborsWest = "sets the sun"}
    
    var neighborsEast = "live ";
    
    for (i = 0; i < worldMap.coords[x+1][y].units.length;i++) {
      neighborsEast = neighborsEast + worldMap.coords[x+1][y].units[i].people.name + "s";
      if (i === worldMap.coords[x+1][y].units.length-2) {
        neighborsEast = neighborsEast + ", and ";
      } else if (i < worldMap.coords[x+1][y].units.length-2) {
        neighborsEast = neighborsEast + ", ";
      }
    }
    
    if (neighborsEast === "live ") {neighborsEast = "is the birthplace of the sun"}
    
    var neighborsNorth = "live ";
    
    for (i = 0; i < worldMap.coords[x][y-1].units.length;i++) {
      neighborsNorth = neighborsNorth + worldMap.coords[x][y-1].units[i].people.name + "s";
      if (i === worldMap.coords[x][y-1].units.length-2) {
        neighborsNorth = neighborsNorth + ", and ";
      } else if (i < worldMap.coords[x][y-1].units.length-2) {
        neighborsNorth = neighborsNorth + ", ";
      }
    }
    
    if (neighborsNorth === "live ") {neighborsNorth = "swim unreachable beasts"}
    
    var neighborsSouth = "live ";
    
    for (i = 0; i < worldMap.coords[x][y+1].units.length;i++) {
      neighborsSouth = neighborsSouth + worldMap.coords[x][y+1].units[i].people.name + "s";
      if (i === worldMap.coords[x][y+1].units.length-2) {
        neighborsSouth = neighborsSouth + ", and ";
      } else if (i < worldMap.coords[x][y+1].units.length-2) {
        neighborsSouth = neighborsSouth + ", ";
      }
    }
    
    if (neighborsSouth === "live ") {neighborsSouth = "crash endless waves"}
    
    selectPaneBiomeVerbose.innerHTML = worldMap.coords[x][y].biome.name;
    selectPanePopulationsNumber.innerHTML = worldMap.coords[x][y].units.length;
    
    selectPanePopulationsList.innerHTML = populationsList;
    
    selectPaneBiome.innerHTML = worldMap.coords[x][y].biome.name;
    selectPaneAltitude.innerHTML = Math.floor(worldMap.coords[x][y].altitude*900) + "m";
    selectPanePrecipitation.innerHTML = worldMap.coords[x][y].precipitation + "cm annually";
    selectPaneTemperature.innerHTML = worldMap.coords[x][y].temperature + " celsius";
    selectPaneNaturalBounty.innerHTML = site.name;
    
    selectPaneWest.innerHTML = worldMap.coords[x-1][y].biome.name + " to the west " + neighborsWest + ".";
    selectPaneEast.innerHTML = worldMap.coords[x+1][y].biome.name + " to the east " + neighborsEast + ".";
    selectPaneNorth.innerHTML = worldMap.coords[x][y-1].biome.name + " to the north " + neighborsNorth + ".";
    selectPaneSouth.innerHTML = worldMap.coords[x][y+1].biome.name + " to the south " + neighborsSouth + ".";
    
    selectPane.style.display = 'inherit';
    
  },
  
  refreshUi: function() {
    
    view.refreshPeoplePanel();
    view.refreshLandPanel();
    view.refreshMinimapPanel();
    view.refreshCivicsPanel();
    view.refreshWorshipPanel();
    view.refreshRelationsPanel();
    view.refreshNotificationsPanel();
  },
  
  refreshPeoplePanel: function() {
    
    var uiPeopleList = document.getElementById("uiPeopleList");
    var uiNotificationsList = document.getElementById('uiNotificationsList');
    
    uiPeopleList.innerHTML = "";
    uiNotificationsList.innerHTML = "";
    
    worldMap.coords[view.focusX][view.focusY].units.sort(function(a,b){return b.prestige - a.prestige});
    
    for (i in worldMap.coords[view.focusX][view.focusY].units) {
      
      pop = worldMap.coords[view.focusX][view.focusY].units[i];
      
      var popLi = document.createElement('li');
      var popPopUp = pop.popUp();
      popLi.innerHTML = "<a class='popup'><strong>" + pop.name + ",</strong> " + pop.population + " " + pop.people.name + " " + pop.job.job + "s <span>" + popPopUp + "</span></a>";
      uiPeopleList.appendChild(popLi);
      
      if (pop.lastSeason !== undefined) {
		  var notLi = document.createElement('li');
		  notLi.innerHTML = pop.lastSeason;
		  uiNotificationsList.appendChild(notLi);
      }

    }
  },
  
  refreshLandPanel: function() {
    
    var uiLandShort = document.getElementById('uiLandShort');
    var uiSitesList = document.getElementById("uiSitesList");
    var uiStocksList = document.getElementById("uiStocksList");
    var sitePopUp;
    
    var here=worldMap.coords[view.focusX][view.focusY]
    uiLandShort.innerHTML = here.biome.name + " (" + Math.floor(here.altitude*900) + "m elevation, " + here.precipitation + "cm rainfall, " + here.temperature + "\u00B0 celsius)";
    
    uiSitesList.innerHTML = "";
    uiStocksList.innerHTML = "";
    
    var sitePopUp = function() {
    	return site.name;
    };
    
    for (i in worldMap.coords[view.focusX][view.focusY].sites) {
      
      site = worldMap.coords[view.focusX][view.focusY].sites[i];
      sitePopUp = "<strong>"+site.name+"</strong>";
      if (site.tools) {
      	sitePopUp += "<p>When equipped with "+site.tools.name+"s, the ";
      } else {
      	sitePopUp += "<p> The ";
      }
      sitePopUp += site.job+"s at this site "
      if (site.materials.length === 0) {
      	sitePopUp += "produce ";
      } else {
      	sitePopUp += "convert "+site.materials+" to ";
      }
      sitePopUp += site.primaryProduce.plural+". Additionally, they may also produce a small amount of "
      for (var r in site.secondaryProduce) {
      	sitePopUp += " "+site.secondaryProduce[r].name
      	if (r < site.secondaryProduce.length-1 && site.secondaryProduce.length > 2) {
      		sitePopUp += ",";
      	}
      	if (r == site.secondaryProduce.length-2) {
      		sitePopUp += " or";
      	}
      }
      sitePopUp += ".</p>";
      if (site.upgradeAdvance !== undefined) {
      	sitePopUp += "<p>Upgrades with the "+site.upgradeAdvance.name+" advance.</p>";
      }
      siteText = "<a class='popup'>"+site.name+"<span>"+sitePopUp+"</span></a>" ;
      
      var sitesLi = document.createElement('li');
      sitesLi.innerHTML = siteText;
      uiSitesList.appendChild(sitesLi);
      
    }
    
    for (i in worldMap.coords[view.focusX][view.focusY].stocks) {
      
      resource = Math.floor(worldMap.coords[view.focusX][view.focusY].stocks[i]);
      
      if (resource > 0) {
        resourceText = resource + " " + dataResources[i].name;
        var stocksLi = document.createElement('li');
        stocksLi.innerHTML = resourceText;
        uiStocksList.appendChild(stocksLi);        
      }
      
    }
    
  },
  
  refreshMinimapPanel: function() {
    var uiTitleDate = document.getElementById('uiTitleDate');
    var dateSeason = gameClock.season();
    var dateYear = gameClock.year();
    uiTitleDate.innerHTML = dateSeason + ", Year "+ dateYear + "; Turn " + gameClock.turn;
  },
  
  refreshCivicsPanel: function() {
    
  },
  
  refreshWorshipPanel: function() {
    var uiRitesList = document.getElementById('uiRitesList');
    var ritePopUp;
    localRites = [];
    ritesList = '';
    
    var localRites = [];
    for (i in worldMap.coords[view.focusX][view.focusY].units) {
    	for (r in worldMap.coords[view.focusX][view.focusY].units[i].rites) {
    		if (localRites.indexOf(worldMap.coords[view.focusX][view.focusY].units[i].rites[r]) === -1) {
    			localRites = localRites.concat(worldMap.coords[view.focusX][view.focusY].units[i].rites[r]);
    		}
    	}
    }
    
    for (i in localRites) {
      ritePopUp = localRites[i].popUp();
      ritesList = ritesList + "<li><a class='popup'>"+localRites[i].name+"<span>" + ritePopUp + "</span></a></li>";
    }
    
    uiRitesList.innerHTML = ritesList;
  },
  
  refreshRelationsPanel: function() {
    
  },
  
  refreshNotificationsPanel: function() {
    
  },
  
  refocus: function(x,y) {
    view.focusX = x;
    view.focusY = y;
  	view.displayWorldMap();
    view.refreshUi();
  },
  
  uiToggleHelp: function() {
    var uiHelpContent = document.getElementById('uiHelpContent');
    var uiNotificationsContent = document.getElementById('uiNotificationsContent');
    var uiHelp = document.getElementById('uiHelp');
    var uiNotifications = document.getElementById('uiNotifications');
    var uiToggleHelpButton = document.getElementById('uiToggleHelpButton');
    var uiToggleNotificationsButton = document.getElementById('uiToggleNotificationsButton');
    
    if (uiHelp.style.width === "10%") {
      uiHelpContent.style.display = "inherit";
      uiNotificationsContent.style.display = "inherit";
      uiHelp.style.width = "45%";
      uiNotifications.style.width = "45%";
      uiToggleNotificationsButton.innerHTML = "Hide";
      uiToggleHelpButton.innerHTML = "Hide";
    } else {
      uiHelpContent.style.display = "none";
      uiNotificationsContent.style.display = "inherit";
      uiHelp.style.width = "10%";
      uiNotifications.style.width = "85%";
      uiToggleNotificationsButton.innerHTML = "Reduce";
      uiToggleHelpButton.innerHTML = "Expand";
    }
    
  },
  
  uiToggleNotifications: function() {
    var uiHelpContent = document.getElementById('uiHelpContent');
    var uiNotificationsContent = document.getElementById('uiNotificationsContent');
    var uiHelp = document.getElementById('uiHelp');
    var uiNotifications = document.getElementById('uiNotifications');
    
    if (uiNotifications.style.width === "10%") {
      uiNotificationsContent.style.display = "inherit";
      uiHelpContent.style.display = 'inherit';
      uiNotifications.style.width = "45%";
      uiHelp.style.width = "45%";
      uiToggleNotificationsButton.innerHTML = "Hide";
      uiToggleHelpButton.innerHTML = "Hide";
    } else {
      uiNotificationsContent.style.display = "none";
      uiHelpContent.style.display = "inherit";
      uiNotifications.style.width = "10%";
      uiHelp.style.width = "85%";
      uiToggleNotificationsButton.innerHTML = "Expand";
      uiToggleHelpButton.innerHTML = "Reduce";
    }
  },
  
};