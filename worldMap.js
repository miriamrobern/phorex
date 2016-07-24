var worldMap = {
  
  coords: [],
  rites: [],
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
          name: "("+x+","+y+")",
          
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
        
        var here = worldMap.coords[x][y];
        worldMap.coords[x][y].biome = '';
        worldMap.coords[x][y].sites = [];
        
        if (worldMap.coords[x][y].altitude < 0) {
          worldMap.coords[x][y].biome = dataBiomes.ocean;
          here.nameGeography = [];
          here.nameAdjective = [];
          
        } else if (worldMap.coords[x][y].temperature < 0) {
          worldMap.coords[x][y].biome = dataBiomes.tundra;
          site = dataBiomes.tundra.naturalSites[Math.floor(Math.random()*dataBiomes.tundra.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push({site:dataSites.theWilds,capacity:100},{site:site,capacity:20+Math.floor(Math.random()*20)});
          here.nameGeography = ["Reach","Expanse","Ice Shelf"];
          here.nameAdjective = ["Frozen","Cold","Icy","Moaning","Windy","White","Grey","Granite"];
          
        } else if (worldMap.coords[x][y].precipitation > 200) {
          worldMap.coords[x][y].biome = dataBiomes.rainforest;
          site = dataBiomes.rainforest.naturalSites[Math.floor(Math.random()*dataBiomes.rainforest.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push({site:dataSites.theWilds,capacity:100},{site:site,capacity:20+Math.floor(Math.random()*20)});
          here.nameGeography = ["Rainforest","Jungle","Deeps","Green"];
          here.nameAdjective = ["Verdant","Steamy","Living","Fruitful","Savage","Coiled","Strangled"];
          
        } else if (worldMap.coords[x][y].precipitation < 50) {
          worldMap.coords[x][y].biome = dataBiomes.desert;
          site = dataBiomes.desert.naturalSites[Math.floor(Math.random()*dataBiomes.desert.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push({site:dataSites.theWilds,capacity:100},{site:site,capacity:20+Math.floor(Math.random()*20)});
          here.nameGeography = ["Reach","Expanse","Desert","Plateau","Bluffs","Badlands","Wastes"];
          here.nameAdjective = ["Dry","Thirsty","Dusty","Sandy","Windswept","Bleached","Rocky","Pebble"];
          
        } else if (worldMap.coords[x][y].temperature > 20) {
          worldMap.coords[x][y].biome = dataBiomes.savanna;
          site = dataBiomes.savanna.naturalSites[Math.floor(Math.random()*dataBiomes.savanna.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push({site:dataSites.theWilds,capacity:100},{site:site,capacity:20+Math.floor(Math.random()*20)});
          here.nameGeography = ["Plain","Veldt","Grassland"];
          here.nameAdjective = ["Dry","Sighing","Endless","Placid"];
          
        } else if (worldMap.coords[x][y].precipitation > 100) {
          worldMap.coords[x][y].biome = dataBiomes.forest;
          site = dataBiomes.forest.naturalSites[Math.floor(Math.random()*dataBiomes.forest.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push({site:dataSites.theWilds,capacity:100},{site:site,capacity:20+Math.floor(Math.random()*20)});
          here.nameGeography = ["Green","Forest","Glade","Wood"];
          here.nameAdjective = ["Verdant","Dark","Haunted","Tangled","Deep"];
          
        } else {
          worldMap.coords[x][y].biome = dataBiomes.shrubland;
          site = dataBiomes.shrubland.naturalSites[Math.floor(Math.random()*dataBiomes.shrubland.naturalSites.length)] ;
          worldMap.coords[x][y].sites.push({site:dataSites.theWilds,capacity:100},{site:site,capacity:20+Math.floor(Math.random()*20)});
          here.nameGeography = ["Plain","Grassland","Prairie","Dale"];
          here.nameAdjective = ["Windy","Harsh","Rolling","Treacherous"];
          
        }
        
		if (x > 1 && y > 1 && x < worldMap.prefs.size_x-1 && y < worldMap.prefs.size_y-1) {
		
			var adjacentTiles = [worldMap.coords[x+1][y],worldMap.coords[x][y+1],worldMap.coords[x-1][y],worldMap.coords[x][y-1]]
			var higherTiles = 0;
			var lowerTiles = 0;
			var waterTiles = 0;
			for (i in adjacentTiles) {
				if (adjacentTiles[i].altitude > here.altitude) {
					higherTiles++;
				} else if (adjacentTiles[i].altitude < here.altitude) {
					lowerTiles++;
				}
				if (adjacentTiles[i].altitude < 0) {
					waterTiles++;
				}
			}		
			
			if (higherTiles > 2) {
				here.nameGeography.push("Valley","Hollow","Canyon","Culvert","Vale");
			} else if (lowerTiles > 2 && here.altitude > 3 && higherTiles === 0) {
				here.nameGeography = ["Summit","Crest","Mount"];
				here.nameAdjective.push("High","Great");
			} else if ((worldMap.coords[x+1][y].altitude < here.altitude && worldMap.coords[x-1][y].altitude < here.altitude && worldMap.coords[x][y+1].altitude > here.altitude && worldMap.coords[x][y-1].altitude > here.altitude) || (worldMap.coords[x+1][y].altitude > here.altitude && worldMap.coords[x-1][y].altitude > here.altitude && worldMap.coords[x][y+1].altitude < here.altitude && worldMap.coords[x][y-1].altitude < here.altitude)) {
				here.nameGeography.push("Ridge","Saddle");
			} else if (lowerTiles > 2) {
				here.nameGeography.push("Hill","Hills");
			};
		
			if (waterTiles > 0 ) {
				here.nameAdjective.push("Salty","Crashing","Seaspray","Seaborne");
				if (Math.random() < 0.3 ) {
					worldMap.coords[x][y].sites.splice(1,1,{site:[dataSites.cowrieBeach,dataSites.shallows][Math.floor(Math.random()*2)],capacity:20+Math.floor(Math.random()*20)});
				}
				if (waterTiles === 4) {   
					here.nameGeography = ["Isle","Island","Key","Cay","Islet","Archipelago","Atoll"];
				} else if (waterTiles === 3) {
					here.nameGeography.push("Peninsula","Spit","Cape","Point","Finger","Chersonese");
				} else if ((worldMap.coords[x+1][y].altitude < 0 && worldMap.coords[x-1][y].altitude < 0 && worldMap.coords[x][y+1].altitude > 0 && worldMap.coords[x][y-1].altitude > 0) || (worldMap.coords[x+1][y].altitude > 0 && worldMap.coords[x-1][y].altitude > 0 && worldMap.coords[x][y+1].altitude < 0 && worldMap.coords[x][y-1].altitude < 0)) {
					here.nameGeography.push("Isthmus","Bridge","Stretch","Neck");
				} else if (waterTiles === 2) {
					here.nameGeography.push("Point");
				}
				if (waterTiles < 4) {
					here.nameGeography.push("Beach","Bank","Shore");
				}
			};

        
        }
        
        if (Math.random() < 0.33) {
        	nameFlavor = here.biome.flora[Math.floor(Math.random()*here.biome.flora.length)];
        } else if (Math.random() < 0.5) {
        	nameFlavor = here.biome.fauna[Math.floor(Math.random()*here.biome.fauna.length)];
        } else {
        	nameFlavor = dataNames.universal[Math.floor(Math.random()*dataNames.universal.length)];
        }
        var nameGeography = here.nameGeography[Math.floor(Math.random()*here.nameGeography.length)];
        var nameAdjective = here.nameAdjective[Math.floor(Math.random()*here.nameAdjective.length)];
        
        if (Math.random() < 0.25) {
        	here.name = nameAdjective + " " + nameGeography;
        } else if (Math.random() < 0.33) {
        	here.name = nameAdjective + " " + nameFlavor + " " + nameGeography;
        } else if (Math.random() < 0.5) {
        	here.name = nameGeography + " of " + nameFlavor + "s";
        } else {
        	here.name = nameGeography + " of the " + nameAdjective + " " + nameFlavor + "s";
        }
        
        if (Math.random() < 0.4) {
        	here.name = "The " + here.name;
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
      if (worldMap.coords[x+1][y].altitude > 0 && Math.random() < 0.5 ) {
        
        expName = ["Wanderers","of the West","Westron","Sunsetters","Eurus","Subsolanus"][Math.floor(Math.random()*4)];
        
        expPop = new Pop(peopleName+" "+expName,newPeople,Math.floor(newPop.population/4),x+1,y,newPop.prestige,newPop.values);
        pops.push(expPop);
        worldMap.coords[x+1][y].units.push(expPop);
        
      }
      
      //Migrating Westward
      if (worldMap.coords[x-1][y].altitude > 0 && Math.random() < 0.5 ) {
        
        expName = ["Refugees","of the East","Estos","of the Rising Sun","Zephyrus","Favonius"][Math.floor(Math.random()*4)];
        
        expPop = new Pop(peopleName+" "+expName,newPeople,Math.floor(newPop.population/4),x-1,y,newPop.prestige,newPop.values);
        pops.push(expPop);
        worldMap.coords[x-1][y].units.push(expPop);
        
      }
      
      //Migrating Northward
      if (worldMap.coords[x][y-1].altitude > 0 && Math.random() < 0.3 ) {
        
        expName = ["Snowbirds","of the South","Southron","Sude","Boreas","Septentrio"][Math.floor(Math.random()*4)];
        
        expPop = new Pop(peopleName+" "+expName,newPeople,Math.floor(newPop.population/4),x,y-1,newPop.prestige,newPop.values);
        pops.push(expPop);
        worldMap.coords[x][y-1].units.push(expPop);
        
      }
      
      //Migrating Southward
      if (worldMap.coords[x][y+1].altitude > 0 && Math.random() < 0.3 ) {
        
        expName = ["Newcomers","of the North","Norse","Notos","Auster"][Math.floor(Math.random()*4)];
        
        expPop = new Pop(peopleName+" "+expName,newPeople,Math.floor(newPop.population/4),x,y+1,newPop.prestige,newPop.values);
        pops.push(expPop);
        worldMap.coords[x][y+1].units.push(expPop);
        
      }
      
    }
    
    setupTable.style.display = 'none';
    view.populatePopulationsPane();
    
  },
  
  setupSelect: function(hereX,hereY) {
    
    var uiTileDiv=document.getElementById("uiTileDiv");
    uiTileDiv.style.display = 'inherit';
    
    var selectPane = document.getElementById('selectPane');
    selectPane.style.display = 'none';
    
    var withinSight = worldMap.coords[hereX][hereY].units[0].withinSight();
    
    for (i in worldMap.coords[hereX][hereY].units) {
    	worldMap.coords[hereX][hereY].units[i].loyalty.player = 50;
    	popsByPrestige.push(worldMap.coords[hereX][hereY].units[i]);
    }
    
    for (y = 0 ; y < worldMap.prefs.size_y; y++) {
      for (x = 0 ; x < worldMap.prefs.size_x;x++) {
      	worldMap.coords[x][y].fog = 0;
      }
    }
    
    for (i in withinSight) {
    	if (withinSight[i].x > 0 && withinSight[i].x < worldMap.prefs.size_x && withinSight[i].y > 0 && withinSight[i].y < worldMap.prefs.size_y) {
    		worldMap.coords[withinSight[i].x][withinSight[i].y].fog = 1;
    	}
    }
  },
  
  
};















