var view = {
    
  focusX: '',
  focusY: '',
  targetX: '',
  targetY: '',
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
        
		mapCell = view.displayMapTile(x,y);
		mapRow.appendChild(mapCell);  
        
      }
      
      mapTable.appendChild(mapRow);
    }
    
  },
  
  displayMapTile: function(x,y) {
  
        var mapCell = document.createElement('td');
        mapCell.className = "mapTile";
        
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
        
        // Fog
        
        if (worldMap.coords[x][y].fog === 0) {
        	mapCell.classname = "";
        	mapCell.innerHTML = "?";
        	mapCell.setAttribute('bgcolor','#AAA');
        }
        
        return mapCell;
  
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

	  var values = worldMap.coords[x][y].units[i].values;
	  popDescriptors = Object.keys(values).reduce(function(a, b){ return values[a] > values[b] ? a : b });

	  if (popDescriptors === 'matriarchy') {popDescriptors = "matriarchal";}
	  else if (popDescriptors === 'patriarchy') {popDescriptors = "patriarchal";}
	  else if (popDescriptors === 'neutrarchy') {popDescriptors = "neutrarchal";}
	  else if (popDescriptors === 'tertiarchy') {popDescriptors = "tertiarchal";}
	  else if (popDescriptors === 'quadrarchy') {popDescriptors = "quadrarchal";}
	  else if (popDescriptors === 'inquiry') {popDescriptors = "curious";}
	  else if (popDescriptors === 'piety') {popDescriptors = "pious";}
	  else if (popDescriptors === 'authority') {popDescriptors = "authoritarian";}
	  else if (popDescriptors === 'aggression') {popDescriptors = "aggressive";}
      
      var popPopUp = worldMap.coords[x][y].units[i].popUp();
      populationsList = populationsList + "<li><a class='popup'>" + worldMap.coords[x][y].units[i].population + " of the " + popDescriptors + " " + worldMap.coords[x][y].units[i].people.name + " people <span>" + popPopUp + "</span></a></li>";
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
    
    selectPaneBiomeVerbose.innerHTML = worldMap.coords[x][y].name;
    selectPanePopulationsNumber.innerHTML = ["zero","one","two","three","four","five"][worldMap.coords[x][y].units.length];
    
    selectPanePopulationsList.innerHTML = populationsList;
    
    selectPaneBiome.innerHTML = worldMap.coords[x][y].biome.name;
    selectPaneAltitude.innerHTML = Math.floor(worldMap.coords[x][y].altitude*900) + "m";
    selectPanePrecipitation.innerHTML = worldMap.coords[x][y].precipitation + "cm annually";
    selectPaneTemperature.innerHTML = worldMap.coords[x][y].temperature + " celsius";
    selectPaneNaturalBounty.innerHTML = site.site.name;
    
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
    
    uiPeopleList.innerHTML = "";
        
    worldMap.coords[view.focusX][view.focusY].units.sort(function(a,b){return b.prestige - a.prestige});
    
    for (i in worldMap.coords[view.focusX][view.focusY].units) {
      
      pop = worldMap.coords[view.focusX][view.focusY].units[i];
      
      var popLi = document.createElement('li');
      var popPopUp = pop.popUp();
      popLi.innerHTML = "<a onclick='handlers.selectPop("+i+")' class='popup'><strong>" + pop.name + ",</strong> " + pop.population + " " + pop.people.name + " " + pop.job.site.job + "s <span>" + popPopUp + "</span></a>";
      
      if (pop.loyalty.player > 0 && pop.guided !== 1) {
      	popLi.className = "uiPopUnguided";
      } else if (pop.loyalty.player > 0) {
      	popLi.className = "uiPopGuided";
      } else {
      	popLi.className = "uiPop";
      }
      
      uiPeopleList.appendChild(popLi);

    }
  },
  
  refreshLandPanel: function() {
    var uiLandName = document.getElementById('uiLandName');
    var uiLandShort = document.getElementById('uiLandShort');
    var uiSitesList = document.getElementById("uiSitesList");
    var uiStocksList = document.getElementById("uiStocksList");
    var sitePopUp;
    var workers;
    
    var here=worldMap.coords[view.focusX][view.focusY]
    uiLandShort.innerHTML = "<strong>" + here.name + ":</strong> " + here.biome.name + " (" + Math.floor(here.altitude*900) + "m elevation, " + here.precipitation + "cm rainfall, " + here.temperature + "\u00B0 celsius)";
    
    uiSitesList.innerHTML = "";
    uiStocksList.innerHTML = "";
    
    for (i in worldMap.coords[view.focusX][view.focusY].sites) {
      
      site = worldMap.coords[view.focusX][view.focusY].sites[i].site;
      workers = 0;
      capacity = worldMap.coords[view.focusX][view.focusY].sites[i].capacity;
      sitePopUp = "<strong>"+site.name+"</strong>";
      if (site.tools.length) {
      	var toolsText = '';
      	for (n in site.tools) {
      		if (toolsText !== '') {
      			toolsText += " and ";
      		}
      		toolsText += site.tools[n].plural;
      	}
      	sitePopUp += "<p>When equipped with "+toolsText+", the ";
      } else {
      	sitePopUp += "<p> The ";
      }
      sitePopUp += site.job+"s at this site "
      if (site.materials.length === 0) {
      	sitePopUp += "produce ";
      } else {
      	var materialsText = '';
      	for (n in site.materials) {
      		if (materialsText !== '') {
      			materialsText += " and ";
      		}
      		materialsText += site.materials[n].plural;
      	}
      	sitePopUp += "convert "+materialsText+" to ";
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
      
      for (u in here.units) {
      	if (here.units[u].job === worldMap.coords[view.focusX][view.focusY].sites[i]) {
      		workers += here.units[u].population;
      	}
      }
      
      if (workers > capacity) {
      	sitePopUp += "<p><strong>This site is over capacity!</strong>  Unless " + (workers-capacity) + " workers move elsewhere, this site will be overharvested and lose capacity.</p>"
      } else {
      	sitePopUp += "<p>There are presently "+workers+" workers here, out of a capacity of "+capacity+" workers.</p>";
      }
      
      if (site.upgradeAdvance !== undefined) {
      	sitePopUp += "<p>Upgrades with the "+site.upgradeAdvance.name+" advance.</p>";
      }
      siteText = "<a class='popup'>" + site.name + " (" + workers + "/" + capacity + ") <span>" + sitePopUp + "</span></a>" ;
      
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
    
    var uiGuidancePoints = document.getElementById('uiGuidancePoints');
    uiGuidancePoints.innerHTML = gameClock.guidancePoints;
    
    var minimapTable = document.getElementById('minimapTable');
    minimapTable.innerHTML = '';
    var cellAltitudeRelative = '';
    var cellColor = '';
    var cellBorder = '';
      
    for (y = view.focusY-4 ; y < view.focusY+5; y++) {
      
      var mapRow = document.createElement('tr');
      
      for (x = view.focusX-4 ; x < view.focusX+5;x++) {
        
        if (x > -1 && y > -1 && x < worldMap.prefs.size_x && y< worldMap.prefs.size_y) {
        	mapCell = view.displayMapTile(x,y);
        	
        } else {
        	var mapCell = document.createElement('td');
        	mapCell.setAttribute('bgcolor','#aaa');
        	mapCell.innerHTML = ".";
        }
		
		mapRow.appendChild(mapCell);  
        
      }
      
      minimapTable.appendChild(mapRow);
    }

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
    var uiNotificationsList = document.getElementById('uiNotificationsList');
    uiNotificationsList.innerHTML = '';
  
  	for (i in popsByPrestige) {
  		if (popsByPrestige[i].loyalty.player > 0) {
  			var notLi = document.createElement('li');
  			notLi.innerHTML = "<a onclick='view.refocus("+popsByPrestige[i].x+","+popsByPrestige[i].y+")'>"+popsByPrestige[i].lastSeason+"</a>";
  			notLi.className = "uiNotification";
  			uiNotificationsList.appendChild(notLi);
  		}
  	}
    
  },
  
  refocus: function(x,y) {
    view.focusX = x;
    view.focusY = y;
  	document.getElementById('uiGuidancePanel').style.display = "none";
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
  
  displayGuidance: function(pop) {
  	view.focusPop = pop;
  	document.getElementById('uiGuidancePanel').style.display = "inherit";
  	document.getElementById('uiGuidancePopUp').innerHTML = pop.popUp();
  	
	document.getElementById('uiGuidanceAssign').style.display = "none";
	document.getElementById('uiGuidanceDevelop').style.display = "none";
	document.getElementById('uiGuidanceExperiment').style.display = "none";
	document.getElementById('uiGuidanceWorship').style.display = "none";
	document.getElementById('uiGuidanceExpedition').style.display = "none";
	document.getElementById('uiGuidanceSplitMerge').style.display = "none";
	document.getElementById('uiGuidanceEquip').style.display = "none";
	
	if (view.focusPop.guided === 0) {
		document.getElementById('uiGuidanceResult').style.display = "none";
	} else {
		document.getElementById('uiGuidanceResult').style.display = "inherit";
	}
  	
  	// Assign
  	var uiGuidanceAssignSelect = document.getElementById('uiGuidanceAssignSelect');
  	uiGuidanceAssignSelect.innerHTML = '';
  	var uiGuidanceAssignCostButton = document.getElementById('uiGuidanceAssignCostButton');
  	uiGuidanceAssignCostButton.innerHTML = Math.max(10,Math.ceil(view.focusPop.prestige));
  	var uiGuidanceAssignButton = document.getElementById('uiGuidanceAssignButton');
  	
  	for (i in worldMap.coords[view.focusX][view.focusY].sites) {
  		var item = document.createElement('option');
  		item.text = "Produce " + worldMap.coords[view.focusX][view.focusY].sites[i].site.primaryProduce.plural + " as " + worldMap.coords[view.focusX][view.focusY].sites[i].site.job + "s at " + worldMap.coords[view.focusX][view.focusY].sites[i].site.name;
  		item.value = i;
  		uiGuidanceAssignSelect.appendChild(item);
  	}
  	
  	if (uiGuidanceAssignCostButton.innerHTML > gameClock.guidancePoints) {
  		uiGuidanceAssignButton.disabled = true;
  	} else {
  		uiGuidanceAssignButton.disabled= false;
  	}
  	
  	// Development
  	var uiGuidanceProspectCostButton = document.getElementById('uiGuidanceProspectCostButton');
  	var uiGuidanceProspectChance = document.getElementById('uiGuidanceProspectChance');
  	var uiGuidanceProspectConsumes = document.getElementById('uiGuidanceProspectConsumes');
  	var currentSites = worldMap.coords[view.focusX][view.focusY].sites.length;
  	
  	uiGuidanceProspectChance.innerHTML = Math.floor(100 / ( currentSites + 4 ) );
  	uiGuidanceProspectConsumes.innerHTML = currentSites*10 + " Food and " + currentSites*5 + " Simple Tools";
  	
  	if (pop.inv.food > currentSites*10 && pop.inv.simpleTool > currentSites*5) {
  		uiGuidanceProspectButton.disabled = false;
  	}
  	
  	if (pop.values.inquiry === undefined) {
  		uiGuidanceProspectCostButton.innerHTML = 100;
  		if (gameClock.guidancePoints < 100) {
  			uiGuidanceProspectButton.disabled = true;
  		} else {
  			uiGuidanceProspectButton.disabled = false;
  		}
  	} else {
  		uiGuidanceProspectCostButton.innerHTML = Math.max(100-pop.values.inquiry,10);
  		if (gameClock.guidancePoints < Math.max(100-pop.values.inquiry,10)) {
  			uiGuidanceProspectButton.disabled = true;  			
  		} else {
  			uiGuidanceProspectButton.disabled = false;
  		}
  	}
  	
  	var uiGuidanceBuildSelect = document.getElementById('uiGuidanceBuildSelect');
  	uiGuidanceBuildSelect.innerHTML = '';
  	
  	var canBuild = [];
  	var existingSites = [];
  	
  	for (i in worldMap.coords[pop.x][pop.y].sites) {
  		existingSites.push(worldMap.coords[pop.x][pop.y].sites[i].site);
  	}
  	
  	for (i in pop.advances) {
  		if (i !== "failures") {
	  		for (l = 1;l < pop.advances[i]+1;l++) {
	  			if (dataAdvances[i][l].type === "site" && existingSites.indexOf(dataSites[dataAdvances[i][l].key]) === -1) {
	  				canBuild.push(dataAdvances[i][l].key);
	  			}
  			}
  		}
  	}
  	  	
  	for (i in canBuild) {
  		var item = document.createElement('option');
  		var buildCost = ' (cost:';
  		for (n in dataSites[canBuild[i]].buildCost) {
  			buildCost += " " + dataSites[canBuild[i]].buildCost[n] + " " + dataResources[n].name;
  			if (dataSites[canBuild[i]].buildCost[n] < pop.inv[n] + worldMap.coords[pop.x][pop.y].stocks[n] || dataSites[canBuild[i]].buildCost[n] < worldMap.coords[pop.x][pop.y].stocks[n] || dataSites[canBuild[i]].buildCost[n] < pop.inv[n]) {
  			} else {
  				item.disabled = true;
  			}
  		}
  		buildCost += ')';
  		item.text = dataSites[canBuild[i]].name + buildCost;
  		item.value = canBuild[i];  		
  		uiGuidanceBuildSelect.appendChild(item);
  	}
  	
  	// Experiments
  	var uiGuidanceExperimentSelect = document.getElementById('uiGuidanceExperimentSelect');
  	uiGuidanceExperimentSelect.innerHTML = '';
  	var uiGuidanceExperimentButton = document.getElementById('uiGuidanceExperimentButton');
  	
  	var uiGuidanceExperimentCost = document.getElementById('uiGuidanceExperimentCost');
  	var uiGuidanceExperimentCostButton = document.getElementById('uiGuidanceExperimentCostButton');
  	
  	if (pop.values.inquiry === undefined) {
  		uiGuidanceExperimentCost.innerHTML = 100;
  		uiGuidanceExperimentCostButton.innerHTML = 100;
  	} else {
  		uiGuidanceExperimentCost.innerHTML = Math.max(100-pop.values.inquiry,10);
  		uiGuidanceExperimentCostButton.innerHTML = Math.max(100-pop.values.inquiry,10);
  	}
  	
  	for (i in pop.inv) {
  		var resource = document.createElement('option');
  		var advances = [];
  		for (a in dataResources[i].advances) {
  			if (pop.advances[dataResources[i].advances[a].key] === undefined ) {
  				advances.push(dataResources[i].advances[a].name);
  			}
  		}
  		if (advances.length > 0) {
  			var advancesText = " (might learn "
  			for (a in advances) {
  				advancesText += advances[a];
  				if (a < advances.length-2) {
  					advancesText += ", ";
  				} else if (a == advances.length-2) {
  					advancesText += ", or ";
  				}
  			}
  			advancesText += ")";
  		}
  		if (pop.inv[i] >= 1) {
			resource.text = Math.ceil(pop.inv[i]/5) + " " + dataResources[i].name + advancesText;
			resource.value = i;
			uiGuidanceExperimentSelect.appendChild(resource);
  		}

  	}
  	
  	if (uiGuidanceExperimentCostButton.innerHTML > gameClock.guidancePoints) {
  		uiGuidanceExperimentButton.disabled = true;
  	} else {
  		uiGuidanceExperimentButton.disabled= false;
  	}
  	
  	// Worship
  	
  	var uiGuidanceEnactButton = document.getElementById('uiGuidanceEnactButton');
  	var uiGuidanceDesignButton = document.getElementById('uiGuidanceDesignButton');
  	var uiGuidanceSynthesizeButton = document.getElementById('uiGuidanceSynthesizeButton');
  	var uiGuidanceEnactCostButton = document.getElementById('uiGuidanceEnactCostButton');
  	var uiGuidanceDesignCostButton = document.getElementById('uiGuidanceDesignCostButton');
  	var uiGuidanceSynthesizeCostButton = document.getElementById('uiGuidanceSynthesizeCostButton');
  	var numRites = Object.keys(pop.rites).length+1;
  	
  	uiGuidanceEnactButton.disabled = true;
  	uiGuidanceSynthesizeButton.disabled = true;
  	
  	if (pop.values.piety === undefined) {
  		uiGuidanceEnactCostButton.innerHTML = 100;
  		uiGuidanceDesignCostButton.innerHTML = 100*numRites;
  		uiGuidanceSynthesizeCostButton.innerHTML = 100;
  	} else {
  		uiGuidanceEnactCostButton.innerHTML = Math.ceil(Math.max(100-pop.values.piety,10));
  		uiGuidanceDesignCostButton.innerHTML = Math.ceil(Math.max((100-pop.values.piety)*numRites,10*numRites));
  		uiGuidanceSynthesizeCostButton.innerHTML = Math.ceil(Math.max(100-pop.values.piety,10));
  	}
  	
  	if (numRites > 2 && gameClock.guidancePoints >= uiGuidanceEnactCostButton.innerHTML) {
  		uiGuidanceEnactButton.disabled = false;
  		uiGuidanceSynthesizeButton.disabled = false;
  	} else if (numRites > 1 && gameClock.guidancePoints >= uiGuidanceEnactCostButton.innerHTML) {
  		uiGuidanceEnactButton.disabled = false;
  	}
  	
  	if (gameClock.guidancePoints >= uiGuidanceDesignCostButton.innerHTML) {
  		uiGuidanceDesignButton.disabled = false;
  	} else {
  		uiGuidanceDesignButton.disabled = true;
  	}
  	
  	var uiGuidanceEnactSelect = document.getElementById('uiGuidanceEnactSelect');
  	var uiGuidanceSynthesisSelectA = document.getElementById('uiGuidanceSynthesisSelectA');
  	var uiGuidanceSynthesisSelectB = document.getElementById('uiGuidanceSynthesisSelectB');
  	uiGuidanceEnactSelect.innerHTML = '';
  	uiGuidanceSynthesisSelectA.innerHTML = '';
  	uiGuidanceSynthesisSelectB.innerHTML = '';
  	for (i in pop.rites) {
  		var rite = document.createElement('option');
  		rite.text = pop.rites[i].name,pop;
  		rite.value = i;
  		var riteA = document.createElement('option');
  		riteA.text = pop.rites[i].name,pop;
  		riteA.value = i;
  		var riteB = document.createElement('option');
  		riteB.text = pop.rites[i].name,pop;
  		riteB.value = i;
  		uiGuidanceEnactSelect.appendChild(rite);
  		uiGuidanceSynthesisSelectA.appendChild(riteA);
  		uiGuidanceSynthesisSelectB.appendChild(riteB);
  	}
  	
  	// Expeditions
  	view.refreshGuidanceMap();
  	var uiGuidanceScoutCostButton = document.getElementById('uiGuidanceScoutCostButton');
  	var uiGuidanceRaidCostButton = document.getElementById('uiGuidanceRaidCostButton');
  	var uiGuidanceMigrateCostButton = document.getElementById('uiGuidanceMigrateCostButton');
  	
  	if (pop.values.inquiry === undefined) {
  		uiGuidanceScoutCostButton.innerHTML = 100;
  	} else {
  		uiGuidanceScoutCostButton.innerHTML = Math.ceil(Math.max(100-pop.values.inquiry,10));
  	}
  	
  	uiGuidanceRaidCostButton.innerHTML = Math.ceil(Math.max(100-pop.values.aggression,10));
  	uiGuidanceMigrateCostButton.innerHTML = Math.ceil(Math.max(50+pop.prestige,10));
  	
  	// Manage
  	var uiGuidanceSplitSelect = document.getElementById('uiGuidanceSplitSelect');
  	var uiGuidanceMergeSelect = document.getElementById('uiGuidanceMergeSelect');
  	uiGuidanceSplitSelect.innerHTML = '';
  	uiGuidanceMergeSelect.innerHTML = '';
  	var item;
  	var splitCost;
  	
  	if (pop.values.matriarchy !== undefined && pop.demographics.gender !== "Women" && pop.demographics.gender !== "Men") {
  		item = document.createElement('option');
  		splitCost = Math.max(10,100-pop.values.matriarchy);
  		item.text = "Expel Men (" + splitCost + "G)";
  		item.value = "matriarchy "+splitCost;
  		uiGuidanceSplitSelect.appendChild(item);
  	}
  	
  	if (pop.values.patriarchy !== undefined && pop.demographics.gender !== "Men" && pop.demographics.gender !== "Women") {
  		item = document.createElement('option');
  		splitCost = Math.max(10,100-pop.values.patriarchy);
  		item.text = "Expel Women (" + splitCost + "G)";
  		item.value = "patriarchy "+splitCost;
  		uiGuidanceSplitSelect.appendChild(item);
  	}
  	
  	if (pop.values.neutrarchy !== undefined && pop.demographics.fertility === "mixed") {
  		item = document.createElement('option');
  		splitCost = Math.max(10,100-pop.values.neutrarchy);
  		item.text = "Expel Breeders (" + splitCost + "G)";
  		item.value = "neutrarchy "+splitCost;
  		uiGuidanceSplitSelect.appendChild(item);
  	}
  	
  	if (pop.values.authority !== undefined) {
  		item = document.createElement('option');
  		splitCost = Math.max(10,100-pop.values.authority);
  		item.text = "Expel Low Status (" +  + "G)";
  		item.value = "authority "+splitCost;
  		uiGuidanceSplitSelect.appendChild(item);
  	}
  	
  	if (pop.values.piety !== undefined) {
  		item = document.createElement('option');
  		splitCost = Math.max(10,100-pop.values.piety);
  		item.text = "Expel Heretics (" + splitCost + "G)";
  		item.value = "piety "+splitCost;
  		uiGuidanceSplitSelect.appendChild(item);
  	}
  	
  	if (pop.values.aggression !== undefined) {
  		item = document.createElement('option');
  		splitCost = Math.max(10,100-pop.values.aggression);
  		item.text = "Expel the Weak (" + splitCost + "G)";
  		item.value = "aggression "+splitCost;
  		item.selected = true;
  		uiGuidanceSplitSelect.appendChild(item);
  		view.splitCostButtonToggle();
  	}
  	
  	var uiGuidanceMergeSelect = document.getElementById('uiGuidanceMergeSelect');
  	uiGuidanceMergeSelect.innerHTML = '';
  	
  	for (i in worldMap.coords[view.focusX][view.focusY].units) {
  		item = document.createElement('option');
  		item.text = worldMap.coords[view.focusX][view.focusY].units[i].name;
  		item.value = i
  		if (pop.people === worldMap.coords[view.focusX][view.focusY].units[i].people && pop !== worldMap.coords[view.focusX][view.focusY].units[i]) {
  			item.text += " (unknown cost)";
  			uiGuidanceMergeSelect.appendChild(item);
  		} else if (pop.advances.cosmopolitain > 0) { // can merge without regard to people
  			item.text += " (unknown cost)";
  			uiGuidanceMergeSelect.appendChild(item);
  		}
  		
  	}
  	
  	// Resources
  	var uiGuidanceEquipSelect = document.getElementById('uiGuidanceEquipSelect');
  	uiGuidanceEquipSelect.innerHTML = '';
  	for (i in worldMap.coords[view.focusX][view.focusY].stocks) {
  		var resource = document.createElement('option');
  		var popInv = 0;
  		var fullyEquipped = "";
  		if (pop.inv[i] !== undefined) {
  			popInv = pop.inv[i];
  		}
  		var resourceNum = Math.floor(Math.min(worldMap.coords[view.focusX][view.focusY].stocks[i],pop.population-popInv));
  		if (popInv + resourceNum === pop.population) {
  			fullyEquipped = " (fully equipped!)"
  		}
  		if (resourceNum >= 1) {
  			resource.text = resourceNum + " " + dataResources[i].name + fullyEquipped;
  			resource.value = i;
  			uiGuidanceEquipSelect.appendChild(resource);
  		}
  	}
  	
  	var uiGuidanceDivestSelect = document.getElementById('uiGuidanceDivestSelect');
  	uiGuidanceDivestSelect.innerHTML = '';
  	for (i in pop.inv) {
  		var resource = document.createElement('option');
  		resource.text = Math.floor(pop.inv[i]) + " " + dataResources[i].name;
  		resource.value = i;
  		uiGuidanceDivestSelect.appendChild(resource);
  	}
  	
  	if (gameClock.guidancePoints < 10) {
  		document.getElementById('uiGuidanceDivestButton').disabled = true;
  	}
  	
  },
  
  refreshGuidanceMap: function() {
	var mapTable = document.getElementById('uiGuidanceMapTable');
    mapTable.innerHTML = '';
    var cellAltitudeRelative = '';
    var cellColor = '';
    var cellBorder = '';
    
    var withinRange = worldMap.coords[view.focusX][view.focusY].units[0].withinRange();
    var withinRangeObjects = [];
    
    for (i in withinRange) {
    	withinRangeObjects.push(worldMap.coords[withinRange[i].x][withinRange[i].y])
    }
      
    for (y = view.focusY-7 ; y < view.focusY+8; y++) {
      var mapRow = document.createElement('tr');
      for (x = view.focusX-7 ; x < view.focusX+8;x++) {
        if (x > -1 && y > -1 && x < worldMap.prefs.size_x && y< worldMap.prefs.size_y && worldMap.coords[x][y].fog === 1 && withinRangeObjects.indexOf(worldMap.coords[x][y]) != -1) {
        	mapCell = view.displayMapTile(x,y);
        	mapCell.innerHTML = "<a onclick='handlers.guidanceMapSelect("+x+","+y+")'>x</a>";
        	
        } else if (x > -1 && y > -1 && x < worldMap.prefs.size_x && y< worldMap.prefs.size_y && worldMap.coords[x][y].fog === 1) {
        	mapCell = view.displayMapTile(x,y);
        	mapCell.innerHTML = "o";
        	// color shift code here
        	
        } else {
        	var mapCell = document.createElement('td');
        	mapCell.className = "mapTile";
        	mapCell.setAttribute('bgcolor','#aaa');
        	mapCell.innerHTML = "?";
        }
        
        if (x === view.targetX && y === view.targetY) {
        	mapCell.className = "targetTile";
        }
        
		mapRow.appendChild(mapCell);  
      }
      mapTable.appendChild(mapRow);
    }  
  },
  
  closeGuidancePanel: function() {
  	document.getElementById('uiGuidancePanel').style.display = "none";
  	
	document.getElementById('uiGuidanceAssign').style.display = "none";
	document.getElementById('uiGuidanceDevelop').style.display = "none";
	document.getElementById('uiGuidanceExperiment').style.display = "none";
	document.getElementById('uiGuidanceWorship').style.display = "none";
	document.getElementById('uiGuidanceExpedition').style.display = "none";
	document.getElementById('uiGuidanceSplitMerge').style.display = "none";
	document.getElementById('uiGuidanceEquip').style.display = "none";
	document.getElementById('uiGuidanceResult').style.display = "none";
  },
  
  selectGuidance(panel) {
	document.getElementById('uiGuidanceAssign').style.display = "none";
	document.getElementById('uiGuidanceDevelop').style.display = "none";
	document.getElementById('uiGuidanceExperiment').style.display = "none";
	document.getElementById('uiGuidanceWorship').style.display = "none";
	document.getElementById('uiGuidanceExpedition').style.display = "none";
	document.getElementById('uiGuidanceSplitMerge').style.display = "none";
	document.getElementById('uiGuidanceEquip').style.display = "none";
	document.getElementById('uiGuidanceResult').style.display = "none";
	
	if (view.focusPop.guided === 0 || panel === "uiGuidanceEquip") {
		document.getElementById(panel).style.display = "inherit";
	} else {
		document.getElementById('uiGuidanceResult').style.display = "inherit";
	}
  	
  	document.getElementById('uiGuidanceScoutButton').disabled = true;
  	document.getElementById('uiGuidanceRaidButton').disabled = true;
  	document.getElementById('uiGuidanceMigrateButton').disabled = true;
  	
  	view.targetX = -1;
  	view.targetY = -1;
    
  },
  
  guidanceMapSelect(x,y) {
  	var uiGuidanceScoutCostButton = document.getElementById('uiGuidanceScoutCostButton');
  	var uiGuidanceRaidCostButton = document.getElementById('uiGuidanceRaidCostButton');
  	var uiGuidanceMigrateCostButton = document.getElementById('uiGuidanceMigrateCostButton');
  	
  	if (uiGuidanceScoutCostButton.innerHTML > gameClock.guidancePoints) {
  		uiGuidanceScoutButton.disabled = true;
  	} else {
  		uiGuidanceScoutButton.disabled= false;
  	}
  	
  	if (uiGuidanceRaidCostButton.innerHTML > gameClock.guidancePoints) {
  		uiGuidanceRaidButton.disabled = true;
  	} else {
  		uiGuidanceRaidButton.disabled= false;
  	}
  	
  	if (uiGuidanceMigrateCostButton.innerHTML > gameClock.guidancePoints) {
  		uiGuidanceMigrateButton.disabled = true;
  	} else {
  		uiGuidanceMigrateButton.disabled= false;
  	}
  	
  	view.targetX = x;
  	view.targetY = y;
  	view.refreshGuidanceMap();
  },
  
  splitCostButtonToggle: function() {
  	var uiGuidanceSplitButton = document.getElementById('uiGuidanceSplitButton');
  	var input = document.getElementById('uiGuidanceSplitSelect').value;
  	var splitCost = +input.substr(1+input.indexOf(" "));
  	if (splitCost > gameClock.guidancePoints) {
  		uiGuidanceSplitButton.disabled = true;
  	} else {
  		uiGuidanceSplitButton.disabled = false;
  	}
  },
  
  
};