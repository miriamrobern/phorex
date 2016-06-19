
var pops = [];

function Pop(name,people,population,x,y,prestige,values,demographics,dispositions,equipment,rites,advances,health,movement,job) {
  
  this.name = name;
  this.people = people;
  this.population = population;
  this.x = x;
  this.y = y;
  this.lastSeason;
  this.loyalty = {player:0};
  
  if (prestige === undefined) {
    this.prestige = Math.floor(Math.random()*100);
  } else {
    this.prestige = prestige;
  }
  
  if (values === undefined) {
    this.values = {aggression:Math.floor(Math.random()*100)};
    if (Math.random()>0.7) {
      this.values.matriarchy = Math.floor(Math.random()*100);
      this.values.patriarchy = Math.floor(Math.random()*100);
    } else if (Math.random()>0.7) {
      this.values.matriarchy = Math.floor(Math.random()*100);
      this.values.patriarchy = Math.floor(Math.random()*100);
      this.values.neutrarchy = Math.floor(Math.random()*100);
    } else if (Math.random()>0.7) {
      this.values.matriarchy = Math.floor(Math.random()*100);
      this.values.patriarchy = Math.floor(Math.random()*100);
      this.values.tertiarchy = Math.floor(Math.random()*100);
      this.values.quartarchy = Math.floor(Math.random()*100);
    }
    
    if (Math.random()>0.6) {
      this.values.piety = Math.floor(Math.random()*100);
    }
    
    if (Math.random()>0.6) {
      this.values.inquiry = Math.floor(Math.random()*100);
    }
    
    if (Math.random()>0.6) {
      this.values.authority = Math.floor(Math.random()*100);
      
    }
  } else {
    this.values = values;
  }
  
  if (demographics === undefined) {
    this.demographics = {gender: "mixed",age:"mixed"};
  } else {
    this.demographics = demographics;
  }
  
  if (dispositions === undefined) {
    this.dispositions = {};
  } else {
    this.dispositions = dispositions;
  }
  
  if (advances === undefined) {
    this.advances = {failures: 0};
  } else {
    this.advances = advances;
  }
  
  if (equipment === undefined) {
    this.inv = {food:population,simpleTool:population/2};
  } else {
    this.inv = equipment;
  }
  
  if (rites === undefined) {
    this.rites = [];
  } else {
    this.rites = rites;
  }
  
  if (health === undefined) {
    this.health = 100;
  } else {
    this.health = health;
  }
  
  if (movement === undefined) {
    this.movement = 100;
  } else {
    this.movement = movement;
  }
  
  if (job === undefined) {
    this.job = dataSites.theWilds;
  } else {
    this.job = job;
  }
  
  this.popUp = function() {
    
    var popUpText = "<strong>"+this.name+"</strong>";
    
    if (this.health < 100) {
      popUpText += " ("+Math.floor(this.health)+"% health)";
    }
    
    popUpText += "<table>";
    
    var force = this.force();
    force = Math.floor(force*100)/100;
    loyalty = this.loyalty.player;
    popUpText += "<tr><td class='popupbox'><div class='bigstat'>"+Math.floor(this.prestige*10)/10+"</div> Prestige</td><td class='popupbox'><div class='bigstat'>"+loyalty+"</div> Loyalty</td><td class='popupbox'><div class='bigstat'>"+force+"</div> Force</td></tr>";
    popUpText += "<tr><td colspan='3'><hr /></td></tr>";
  
    var demographicsText = '';
    
    for (var i in this.demographics) {
      if (this.demographics[i] === "mixed") {
        
      } else {
        demographicsText += this.demographics[i] + " ";
      }
    }
    
    popUpText += "<tr><td class='popupheader'>Members:</td><td class='popupdata' colspan='2'>" + this.population + " "+this.people.name + "</td></tr>";

    
    var valuesText = '';
    
    var values = this.values;
    var valuesRanked = [];
    
    for (i in this.values) {
      valuesRanked.push(i);
    }
    
    valuesRanked.sort(function(a,b){return values[b] - values[a] });
    
    for (i in valuesRanked) {
      valuesText += valuesRanked[i] + " " + Math.floor(this.values[valuesRanked[i]])+ "<br />";
    }
    
    popUpText += "<tr><td class='popupheader'>Values:</td><td class='popupdata' colspan='2'>"+valuesText+"</td></tr>";
    
    var advancesArray = [];
    var advancesText = '';
    
    for (i in this.advances) {
      advancesArray.push(i);
    }
    
    advancesArray.splice(0,1);
    advancesArray.sort();
    
    for (i in advancesArray) {
      advancesText += dataAdvances[advancesArray[i]].name + " " + this.advances[advancesArray[i]];
      if (i < advancesArray.length - 1) {
        advancesText += ", ";
      }
    }
    
    if (advancesText !== '') {
      popUpText += "<tr><td class='popupheader'>Advances:</td><td class='popupdata' colspan='2'>"+advancesText+"</td></tr>";
    }
    
    var invText = '';
    
    for (i in this.inv) {
      invText += Math.floor(this.inv[i]) + " " + dataResources[i].name + "<br />";
      if (i < this.inv.length - 1) {
        invText += ", ";
      }
    }
    
    popUpText += "<tr><td class='popupheader'>Stocks:</td><td class='popupdata' colspan='2'>"+invText+"</td></tr>";
    popUpText += "<tr><td colspan='3'><hr /></td></tr>";
    popUpText += "<tr><td class='popupheader'>Task:</td><td class='popupdata' colspan='2'>"+this.job.job+"</td></tr>";
    
    var secondaryProduceText = '';
    
    for (i in this.job.secondaryProduce) {
      secondaryProduceText += this.job.secondaryProduce[i].name;
      if (i < this.job.secondaryProduce.length - 1) {
        secondaryProduceText += ", ";
      }
    }
    
    popUpText += "<tr><td class='popupheader'>Producing:</td><td class='popupdata' colspan='2'>"+Math.floor(this.job.primaryEfficiency*this.population)+" "+this.job.primaryProduce.plural+" and a chance of "+secondaryProduceText+"</td></tr>";
    popUpText += "</table>";
    
    return popUpText;
  };
  
  this.notify = function(notification) {
    this.lastSeason = this.lastSeason + notification + "  ";
    console.log(this,notification);
    
  };
  
  this.force = function() {
    var force = this.population;
    
    force *= Math.min(100,this.health+50)/100;
    force *= (this.values.aggression+50)/100;
    
    // for loops checking dataForceResources and dataForceAdvances for multipliers
    
    for (var i in dataForceItems) {
      if (this.inv[i] !== undefined) {
        force *= 1 + dataForceItems[i]*Math.min(1,dataForceItems[i]/this.population);
      }
    }
    
    for (i in dataForceAdvances) {
      if (this.advances[i] !== undefined) {
        force *= 1 + dataForceAdvances[i];
      }
    }
    
    return force;
  };
  
  this.defense = function() {
  	return this.force();
  };
  
  this.withinRange = function() {
  
  	var openPaths = [{x:this.x, y:this.y, movementRemaining: this.movement, path:[]}];
  	var visited = [worldMap.coords[this.x][this.y]];
  	var destinations = [];
  	
  	checkPath = function(x,y,movementRemaining,path) {
  		if (visited.indexOf(worldMap.coords[x][y]) === -1) {
  		
  			if (worldMap.coords[x][y].altitude > 0) { // Overland Movement

				// Reduce movement
				movementRemaining -= worldMap.coords[x][y].biome.moveCost;
			
				var newPath = path.slice(0,path.length);
				newPath.push({tile:worldMap.coords[x][y],x:x,y:y});
				openPaths.push({x:x,y:y,movementRemaining:movementRemaining,path:newPath});
				visited.push(worldMap.coords[x][y])
				destinations.push({tile:worldMap.coords[x][y],x:x,y:y,path})
  			
  			} else {
  				// Ocean Movement
				visited.push(worldMap.coords[x][y])
  			}
  		
  		}
  	}
  	
  	while (openPaths.length > 0) {
  		var thisPath = openPaths.shift();
  		if (thisPath.x-1 > 0 && thisPath.movementRemaining > 0) {
  			checkPath(thisPath.x-1,thisPath.y,thisPath.movementRemaining,thisPath.path);
  			}
  		if (thisPath.x+1 < worldMap.prefs.size_x && thisPath.movementRemaining > 0) {
  			checkPath(thisPath.x+1,thisPath.y,thisPath.movementRemaining,thisPath.path);
  			}
  		if (thisPath.y-1 > 0 && thisPath.movementRemaining > 0) {
  			checkPath(thisPath.x,thisPath.y-1,thisPath.movementRemaining,thisPath.path);
  			}
  		if (thisPath.y+1 < worldMap.prefs.size_y && thisPath.movementRemaining > 0) {
  			checkPath(thisPath.x,thisPath.y+1,thisPath.movementRemaining,thisPath.path);
  			}
  	};
  	
  	return destinations;
  
  };
  
  this.split = function(name) {
    
    var newPop = new Pop();
    var split = Math.random()*0.2 + 0.4;
    
    if (name === undefined) {
      name = this.name + " Schismatics";
    }
    

    newPop.name = name;
    newPop.people = this.people;
    newPop.population = Math.floor(this.population*split);
    newPop.x = this.x;
    newPop.y = this.y;
    newPop.prestige = this.prestige;
    
    newPop.values = {};
    for (var i in this.values) {
      newPop.values[i] = this.values[i]; 
    }
    
    newPop.demographics = {};
    for (i in this.demographics) {
      newPop.demographics[i] = this.demographics[i]; 
    }
    
    newPop.dispositions = {};
    for (i in this.dispositions) { // This will probably need to be more elaborate.
      newPop.dispositions[i] = this.dispositions[i]; 
    }
    
    newPop.inv = {};
    for (i in this.inv) {
      newPop.inv[i] = Math.floor(this.inv[i]/2);
      this.inv[i] = Math.ceil(this.inv[i]/2);
    }
    
    newPop.advances = this.advances;
    newPop.advances.failures = this.advances.failures/2;
    this.advances.failures /= 2;
    
    newPop.rites = this.rites;
    
    newPop.health = this.health;
    newPop.movement = this.movement;
    newPop.job = this.job;
    
    this.population = Math.ceil(this.population*(1-split));
    this.prestige /= 0.8;
    
    pops.push(newPop);
    worldMap.coords[this.x][this.y].units.push(newPop);
    
    return newPop;
    
  };
  
  this.work = function() {
    
    var notification = '';
    var job = this.job;
    var matsCheck = 0;
    var toolsCheck = 0;
    var materialCost = '';
    var breakage = '';
    
    if (job.materials[0] === undefined) {
      matsCheck = 1;
    } else {
      console.log('ERROR: requires materials');
      
      // will need to use regional availability function
      
      materialCost = ' consuming some stuff?';
    }
    
    if (job.tools[0] === undefined) {
      toolsCheck = 1;
    } else {
      console.log('ERROR: requires tools');
      
      // will need to use regional availability function
      
      breakage = 'Maybe something breaks?';
    }
    
    if (matsCheck + toolsCheck === 2) {

      var primary = job.primaryProduce;
      var primaryQuantity = Math.floor(job.primaryEfficiency * this.population * 100) / 100;
      var secondary = job.secondaryProduce[Math.floor(Math.random()*job.secondaryProduce.length)];
      var secondaryQuantity = Math.floor(job.secondaryEfficiency * this.population * 100) / 100;
      
      notification = this.name + " works as " + job.job + "s," + materialCost + " producing " + primaryQuantity + " " + primary.plural + " and " + secondaryQuantity + " " + secondary.plural + ".  " + breakage;

      if (worldMap.coords[this.x][this.y].stocks[primary.key] > 0) {
        worldMap.coords[this.x][this.y].stocks[primary.key] += primaryQuantity;
      } else {
        worldMap.coords[this.x][this.y].stocks[primary.key] = primaryQuantity;
      }
      
      if (worldMap.coords[this.x][this.y].stocks[secondary.key] > 0) {
        worldMap.coords[this.x][this.y].stocks[secondary.key] += secondaryQuantity; 
      } else {
        worldMap.coords[this.x][this.y].stocks[secondary.key] = secondaryQuantity; 
      }
      
    }
    
    this.notify(notification);
    
  };
  
  this.eat = function() {
    
    var notification = '';
    
    // will need update to regional resource claiming (claim function, too)
    
    var available = worldMap.coords[this.x][this.y].stocks.food;
    
    // Claiming food

    if (available > this.population) {
      
      notification = this.name + " claims food from the stockpile.";
      this.inv.food += this.population;
      worldMap.coords[this.x][this.y].stocks.food -= this.population;
      
    } else if (available > 0) {
      
      notification = this.name + " empties the stockpile.";
      this.inv.food += worldMap.coords[this.x][this.y].stocks.food;
      worldMap.coords[this.x][this.y].stocks.food = 0;
      
    } else {
      
      notification = this.name + " finds no food in the stockpile.";
      
    }
    
    // Actually eating
    
    if (this.population > this.inv.food) {
      
      // Lean Season
      this.health -= 30 * (1 - (this.inv.food / this.population));
      this.inv.food = 0;
      notification = notification + " They have a lean season, and are down to "+ Math.floor(this.health) + "% health.";
      
      // Starvation Losses
      if (this.health < 50 ) {
        
        var deaths = Math.ceil(this.population * this.health / 50) ;
        
        notification = notification + " They lose " + deaths  + " souls to starvation.";
        this.population = Math.floor(this.population - deaths);
        
        this.health = this.health + 20;
      }
      
      // Check for Population Death (this needs to be its own loop in a prune function)
      if (this.population === 0) {
        notification = notification + " They are no more.";
        
        for (var i in this.inv) {
          worldMap.coords[this.x][this.y].stocks[i] += this.inv[i] ;
        }
        
        worldMap.coords[this.x][this.y].units.splice(worldMap.coords[this.x][this.y].units.indexOf(this),1);
        pops.splice(pops.indexOf(this),1);
      }
      
    } else {
      
      // Eat Their Fill
      notification = notification + " They eat their fill.";
      this.inv.food -= this.population;
      
      // Heal
      if (this.health < 100) {
        this.health = Math.min(100,this.health+30);
        notification = notification + " They heal up to " + Math.floor(this.health) + "% health.";
      }
      
    }
    
    this.notify(notification);
  };
  
  this.claim = function() {
    
    // will need update to regional resource claiming (eat function, too)
    // will need update to consider relative values
    
    var availableStocks = [];
    
    for (var i in worldMap.coords[this.x][this.y].stocks) {
      if (worldMap.coords[this.x][this.y].stocks[i] > 0) {
        availableStocks.push(i);
      }
    }
    
    var claim = availableStocks[Math.floor(Math.random()*availableStocks.length)];
    
    if (claim === undefined) {
    	notification = this.name + "does not find anything in the stockpile worth claiming.";
    } else {
		var claimNum = Math.ceil(Math.min(this.population,worldMap.coords[this.x][this.y].stocks[claim]/2));
	
		worldMap.coords[this.x][this.y].stocks[claim] -= claimNum;
	
		if (this.inv[claim] === undefined) {
		  this.inv[claim] = claimNum;
		} else {
		  this.inv[claim] += claimNum;
		}
		
		notification = this.name + " claims " + claimNum + " " + dataResources[claim].plural + ".";

    }

    this.notify(notification);
  
  };
  
  this.share = function() {
    
    var neighbors = [];
    
    for (var i in worldMap.coords[this.x][this.y].units) {
      if (worldMap.coords[this.x][this.y].units[i] != this) {
        neighbors.push(worldMap.coords[this.x][this.y].units[i],worldMap.coords[this.x][this.y].units[i],worldMap.coords[this.x][this.y].units[i]);
      }
    }
    
    if (this.x > 0) {
      neighbors = neighbors.concat(worldMap.coords[this.x-1][this.y].units);
    }
    
    if (this.y > 0 ) {
      neighbors = neighbors.concat(worldMap.coords[this.x][this.y-1].units);
    }
    
    if (this.x < worldMap.prefs.size_x-1) {
      neighbors = neighbors.concat(worldMap.coords[this.x+1][this.y].units);
    }
    
    if (this.y < worldMap.prefs.size_y-1) {
      neighbors = neighbors.concat(worldMap.coords[this.x][this.y+1].units);
    }
    
    if (neighbors.length === 0) {
      notification = this.name + " has no neighbors to share with!";
      
    } else {
    
	  // Sharing!
	  
      var targetPop = neighbors[Math.floor(Math.random()*neighbors.length)];
      var sharingRites = this.rites;
      var sharingAdvances = this.advances;
      
      if (Math.random() > 0.7 && sharingRites.length > 0) { // share a rite
        var rite = sharingRites[Math.floor(Math.random()*sharingRites.length)];
        if (targetPop.rites.indexOf(rite) === -1) {
          targetPop.rites.push(rite);
          rite.power += 2;
          notification = this.name + " shares the "+rite.name+" with " + targetPop.name + "."
          var shared = 1;
        }
      
        
      } else if (Math.random() > 0.9 && Object.keys(sharingAdvances).length > 1) { // share an advance
        var advancesList = Object.keys(sharingAdvances);
        advancesList.splice(0,1);
        var advance = advancesList[Math.floor(Math.random()*advancesList.length)]
        if (targetPop.advances[advance] === undefined) {
          targetPop.advances[advance] = 1;
          console.log("advance: ",advance);
          notification = this.name + " shares the " + dataAdvances[advance].name + " advance with " + targetPop.name + ".";
          var shared = 1;
        } else if (targetPop.advances[advance] < this.advances[advance]) {
          targetPop.advances[advance]++;
          notification = this.name + " shares the " + dataAdvances[advance].name + " " + targetPop.advances[advance] + " advance with " + targetPop.name + ".";
          var shared = 1;
        }
      }
      
      if (shared != 1) { //share a value
        var value = Object.keys(this.values)[Math.floor(Math.random()*Object.keys(this.values).length)];
        if (targetPop.values[value] === undefined) {
          targetPop.values[value] = this.values[value] / 2 ;
          notification = this.name + " teaches " + targetPop.name + " about " + value + ".";
        } else if (targetPop.values[value] > this.values[value]) {
          targetPop.values[value] = (targetPop.values[value] + this.values[value])/2;
          notification = this.name + " shares their views with " + targetPop.name + ", dampening their stance on " + value + ".";
        } else {
          targetPop.values[value] = (targetPop.values[value] + this.values[value])/2;
          notification = this.name + " shares their views with " + targetPop.name + ", emboldening their stance on " + value + ".";
        }
      }
    }
    
    this.notify(notification);
    
  };
  
  this.impulse = function() {
    
    var impulse = {};
    
    for (var i in this.values) {
      impulse[i] = this.values[i] - Math.random()*100;
    }
    
    impulse.jobChange = (this.inv.food/this.population)*100 - Math.random()*100 ;
    
    if (this.prestige < 1) {
      // will eventually need to check for freedom of movement
      impulse.migration =  this.prestige * -1 ;
    }
    
    if (this.inv.food < 1 && worldMap.coords[this.x][this.y].stocks.food < 1 && this.job.primaryProduce != dataResources.food) {
      impulse.growFood = Math.random()*100;
    }
    
     // can add other impulses (migration/survival/rebellion) in here
    
    impulse = Object.keys(impulse).reduce(function(a, b){ return impulse[a] > impulse[b] ? a : b });
    
    notification = pop.name + "has an impulse that didn't go off: " + impulse;
    
    if (impulse === "jobChange") {
      this.impulse.jobChange(this);
    } else if (impulse === "matriarchy") {
      this.impulse.matriarchy(this);
    } else if (impulse === "patriarchy") {
      this.impulse.patriarchy(this);
    } else if (impulse === "neutrarchy") {
      this.impulse.neutrarchy(this);
    } else if (impulse === "piety") {
      this.impulse.piety(this);
    } else if (impulse === "authority") {
      this.impulse.authority(this);
    } else if (impulse === "inquiry") {
      this.impulse.inquiry(this);
    } else if (impulse === "aggression") {
      this.impulse.aggression(this);
    } else if (impulse === "migration") {
      this.impulse.migration(this);
    } else if (impulse === "growFood") {
      this.impulse.growFood(this);
    } 
    
    this.notify(notification);
    
  };
  
  this.impulse.jobChange = function(pop) {
    
    // Presently random; needs to take mats&tools into account at least
    // Extra credit: value of the primary resources to be produced?
    
    var sites = worldMap.coords[pop.x][pop.y].sites;
    var newJob = sites[Math.floor(Math.random()*sites.length)];
    
    pop.job = newJob;
    
    notification = pop.name + " decide to start working as " + newJob.job + "s.";
  };
  
  this.impulse.matriarchy = function(pop) {
    
    var targets = [];
    var superiors = [];
    
    for (var i in worldMap.coords[pop.x][pop.y].units) {
      if (worldMap.coords[pop.x][pop.y].units[i].demographics.gender != "Women") {
        targets.push(worldMap.coords[pop.x][pop.y].units[i]);
      } else if (worldMap.coords[pop.x][pop.y].units[i].demographics.gender === "Women") {
        superiors.push(worldMap.coords[pop.x][pop.y].units[i]);
        
      }
    }
    
    if (pop.demographics.gender === "mixed" && pop.population > 1) {
      notification = pop.name + " expels their men into a seperate population.";
      var newPop = pop.split(pop.name+" Men");
      pop.demographics.gender = "Women";
      pop.values.matriarchy = Math.min(100,pop.values.matriarchy+10);
      newPop.values.matriarchy = Math.max(0,newPop.values.matriarchy-10);
      if (newPop.population < 3 && Math.random() > 0.2) {
        newPop.demographics.gender = "Men";
      } else if (newPop.population < 3) {
        newPop.demographics.gender = "Genderqueers";
        newPop.name = pop.name + " Queers" ;
      } else {
        newPop.demographics.gender = "Men";
      }
      
      if (Math.random() > 1/newPop.population) {
        newPop.demographics.age = ["Young","Middle-aged","Elderly"][Math.floor(Math.random()*3)];
      }
      
    } else if (pop.demographics.gender === "Women" && targets.length > 0) {
      var targetPop = targets[Math.floor(Math.random()*targets.length)];
      var potentialTribute = Object.keys(targetPop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(targetPop.inv[tribute]/2);
      
      
      targetPop.inv[tribute] -= tributeNum;
      if (pop.inv[tribute] === undefined) {
      	pop.inv[tribute] = tributeNum;
      } else {
      	pop.inv[tribute] += tributeNum;
      }
      
      pop.prestige += 1;
      
      if (Math.random()*100 > targetPop.values.matriarchy) {
        // add matriarchs to disposition shit-list
      }
      
      notification = pop.name + " celebrates their mothers by exacting " + tributeNum + " " + dataResources[tribute].plural + " as tribute from the " + targetPop.name + ".";
      
    } else if (pop.demographics.gender != "Women" && superiors.length > 0) {
      var targetPop = superiors[Math.floor(Math.random()*superiors.length)];
      var potentialTribute = Object.keys(pop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(pop.inv[tribute]/2);
      
      pop.inv[tribute] -= tributeNum;
      if (targetPop.inv[tribute] === undefined) {
      	targetPop.inv[tribute] = tributeNum;
      } else {
      	targetPop.inv[tribute] += tributeNum;
      }
      
      targetPop.prestige += 1;
      
      notification = pop.name + " celebrates their mothers by offering " + tributeNum + " " + dataResources[tribute].plural + " as tribute to the "+ targetPop.name +".";
    } else {
      
      var potentialTribute = Object.keys(pop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(pop.inv[tribute]/4) ;
      
      pop.inv[tribute] -= tributeNum;
      pop.values.matriarchy -= Math.ceil(Math.random()*3);
      
      notification = pop.name + " celebrates their mothers in a modest ceremony, consuming " + tributeNum + " " + dataResources[tribute].plural + ".";
    }
    
  };

  this.impulse.patriarchy = function(pop) {
    
    var targets = [];
    var superiors = [];
    
    for (var i in worldMap.coords[pop.x][pop.y].units) {
      if (worldMap.coords[pop.x][pop.y].units[i].demographics.gender === "Women") {
        targets.push(worldMap.coords[pop.x][pop.y].units[i]);
      } else if (worldMap.coords[pop.x][pop.y].units[i].demographics.gender === "Men") {
        superiors.push(worldMap.coords[pop.x][pop.y].units[i]);
        
      }
    }
    
    if (pop.demographics.gender === "mixed" && pop.population > 1) {
      notification = pop.name + " expels their women into a seperate population.";
      var newPop = pop.split(pop.name+" Women");
      pop.demographics.gender = "Men";
      pop.values.patriarchy = Math.min(100,pop.values.patriarchy+10);
      newPop.values.patriarchy = Math.max(0,newPop.values.patriarchy-10);
      if (newPop.population < 3 && Math.random() > 0.2) {
        newPop.demographics.gender = "Women";
      } else if (newPop.population < 3) {
        newPop.demographics.gender = "Genderqueers";
        newPop.name = pop.name + " Queers" ;
      } else {
        newPop.demographics.gender = "Women";
      }
      
      if (Math.random() > 1/newPop.population) {
        newPop.demographics.age = ["Young","Middle-aged","Elderly"][Math.floor(Math.random()*3)];
      }
      
    } else if (pop.demographics.gender === "Men" && targets.length > 0) {
      var targetPop = targets[Math.floor(Math.random()*targets.length)];
      var potentialTribute = Object.keys(targetPop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(targetPop.inv[tribute]/2);
      
      targetPop.inv[tribute] -= tributeNum;
      if (pop.inv[tribute] === undefined) {
      	pop.inv[tribute] = tributeNum;
      } else {
      	pop.inv[tribute] += tributeNum;
      }
      
      pop.prestige += 1;
      
      if (Math.random()*100 > targetPop.values.patriarchy) {
        // add patriarchs to disposition shit-list
      }
      
      notification = pop.name + " celebrates their fathers by exacting " + tributeNum + " " + dataResources[tribute].plural + " as tribute from the " + targetPop.name + ".";
      
    } else if (pop.demographics.gender != "Men" && superiors.length > 0) {
      var targetPop = superiors[Math.floor(Math.random()*superiors.length)];
      var potentialTribute = Object.keys(pop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(pop.inv[tribute]/2);
      
      pop.inv[tribute] -= tributeNum;
      if (targetPop.inv[tribute] === undefined) {
      	targetPop.inv[tribute] = tributeNum;
      } else {
      	targetPop.inv[tribute] += tributeNum;
      }
      
      
      targetPop.prestige += 1;
      
      notification = pop.name + " celebrates their fathers by offering " + tributeNum + " " + dataResources[tribute].plural + " as tribute to the "+ targetPop.name +".";
    } else {
      
      var potentialTribute = Object.keys(pop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(pop.inv[tribute]/4) ;
      
      pop.inv[tribute] -= tributeNum;
      pop.values.patriarchy -= Math.ceil(Math.random()*3);
      
      notification = pop.name + " celebrates their fathers in a modest ceremony, consuming " + tributeNum + " " + dataResources[tribute].plural + ".";
    }
  };
  
  this.impulse.neutrarchy = function(pop) {
    
    var targets = [];
    var superiors = [];
    
    for (var i in worldMap.coords[pop.x][pop.y].units) {
      if (worldMap.coords[pop.x][pop.y].units[i].demographics.gender != "Neuter") {
        targets.push(worldMap.coords[pop.x][pop.y].units[i]);
      } else if (worldMap.coords[pop.x][pop.y].units[i].demographics.gender === "Neuter") {
        superiors.push(worldMap.coords[pop.x][pop.y].units[i]);
        
      }
    }
    
    if (pop.demographics.gender === "mixed" && pop.population > 1) {
      notification = pop.name + " expels their breeders into a seperate population.";
      var newPop = pop.split(pop.name+" Breeders");
      pop.demographics.gender = "Neuter";
      pop.values.neutrarchy = Math.min(100,pop.values.neutrarchy+10);
      newPop.values.neutrarchy = Math.max(0,newPop.values.neutrarchy-10);
      if (newPop.population < 3 && Math.random() > 0.2) {
        newPop.demographics.gender = "mixed";
      } else if (newPop.population < 3 && Math.random < .1) {
        newPop.demographics.gender = "Genderqueers";
        newPop.name = pop.name + " Queers" ;
      } else if (newPop.population < 3 && Math.random < .5) {
        newPop.demographics.gender = "Men";
        newPop.name = pop.name + " Men" ;
      } else if (newPop.population < 3 ) {
        newPop.demographics.gender = "Women";
        newPop.name = pop.name + " Women" ;
      } else {
        newPop.demographics.gender = "mixed";
      }
      
      if (Math.random() > 1/newPop.population) {
        newPop.demographics.age = ["Young","Middle-aged","Elderly"][Math.floor(Math.random()*3)];
      }
      
      newPop.population += Math.floor(pop.population/2);
      pop.population -= Math.floor(pop.population/2);
      
    } else if (pop.demographics.gender === "Neuter" && targets.length > 0) {
      var targetPop = targets[Math.floor(Math.random()*targets.length)];
      var potentialTribute = Object.keys(targetPop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(targetPop.inv[tribute]/2);
      
      targetPop.inv[tribute] -= tributeNum;
      if (pop.inv[tribute] === undefined) {
      	pop.inv[tribute] = tributeNum;
      } else {
      	pop.inv[tribute] += tributeNum;
      }
      
      pop.prestige += 1;
      
      if (Math.random()*100 > targetPop.values.neutrarchy) {
        // add neuters to disposition shit-list
      }
      
      notification = pop.name + " celebrates their celibates by exacting " + tributeNum + " " + dataResources[tribute].plural + " as tribute from the " + targetPop.name + ".";
      
    } else if (pop.demographics.gender != "Neuter" && superiors.length > 0) {
      var targetPop = superiors[Math.floor(Math.random()*superiors.length)];
      var potentialTribute = Object.keys(pop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(pop.inv[tribute]/2);
      
      pop.inv[tribute] -= tributeNum;
      if (targetPop.inv[tribute] === undefined) {
      	targetPop.inv[tribute] = tributeNum;
      } else {
      	targetPop.inv[tribute] += tributeNum;
      }
      
      
      targetPop.prestige += 1;
      
      notification = pop.name + " celebrates their celibates by offering " + tributeNum + " " + dataResources[tribute].plural + " as tribute to the "+ targetPop.name +".";
    } else {
      
      var potentialTribute = Object.keys(pop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(pop.inv[tribute]/4) ;
      
      pop.inv[tribute] -= tributeNum;
      pop.values.patriarchy -= Math.ceil(Math.random()*3);
      
      notification = pop.name + " celebrates their celibates in a modest ceremony, consuming " + tributeNum + " " + dataResources[tribute].plural + ".";
    }
  };
  
  this.impulse.authority = function(pop) {
    var targets = [];
    var superiors = [];
    for (var i in worldMap.coords[pop.x][pop.y].units) {
      if (worldMap.coords[pop.x][pop.y].units[i].prestige < pop.prestige) {
        targets.push(worldMap.coords[pop.x][pop.y].units[i]);
      } else if (worldMap.coords[pop.x][pop.y].units[i].prestige > pop.prestige) {
        superiors.push(worldMap.coords[pop.x][pop.y].units[i]);
      }
    }
      
    if (pop.population > 1 && targets.length < 1) {
      var lowClassName = ["Low-caste ","Abject ","Poor ","Lesser ","Debased "][Math.floor(Math.random()*5)] ;
      var newPop = pop.split();
      newPop.name = lowClassName + pop.name;
      newPop.prestige -= 20;
      pop.prestige += 20;
      // Lower authoritarian Loyalties
      
      if (Math.random() > 1/newPop.population) {
        newPop.demographics.gender = ["Men","Women","Genderqueer","Neuter"][Math.floor(Math.random()*4)];
      }
      
      if (Math.random() > 1/newPop.population) {
        newPop.demographics.age = ["Young","Middle-aged","Elderly"][Math.floor(Math.random()*3)];
      }
      
      notification = pop.name + " expels its less prestigious members into a new population.";
      
    } else if (targets.length < 1 && superiors.length > 0) {
      var targetPop = superiors[Math.floor(Math.random()*superiors.length)]
      pop.values.authority -= 1;
      targetPop.prestige += 1;

      var potentialTribute = Object.keys(pop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(pop.inv[tribute]/2);
      
      pop.inv[tribute] -= tributeNum;
      if (targetPop.inv[tribute] === undefined) {
      	targetPop.inv[tribute] = tributeNum;
      } else {
      	targetPop.inv[tribute] += tributeNum;
      }
      
      
      notification = pop.name + " serves " + targetPop.name + ", spending " + tributeNum + " " + dataResources[tribute].plural + " in the process.";
      
    } else if (targets.length > 0) {
      
      var targetPop = targets[Math.floor(Math.random()*targets.length)];
      targetPop.prestige -= 1;

      var potentialTribute = Object.keys(targetPop.inv);
      var tribute = potentialTribute[Math.floor(Math.random()*potentialTribute.length)];
      var tributeNum = Math.ceil(pop.inv[tribute]/2);
      
      targetPop.inv[tribute] -= tributeNum;
      if (pop.inv[tribute] === undefined) {
      	pop.inv[tribute] = tributeNum;
      } else {
      	pop.inv[tribute] += tributeNum;
      }
      
      if (Math.random()*100 > targetPop.values.authority) {
        // add authoritarians to disposition shit-list
      }
      
      notification = pop.name + " exacts "+tributeNum+" "+dataResources[tribute].plural+" as tribute from the "+targetPop.name+", as is their right.";
      
    } else {
      console.log(pop);
      notification = pop.name + " finds a weird edge-case.";
    }
    
    
  };
  
  this.impulse.piety = function(pop) {
    
    localRites = [];
    notification = pop.name + " has a pious impulse.";
    
    for (i in worldMap.coords[pop.x][pop.y].units) {
      localRites = localRites.concat(worldMap.coords[pop.x][pop.y].units[i].rites);
    }
    
    if (Math.random()< 1/(1+pop.rites.length) ) { // attempt to create new rite
      var sacrifice = Object.keys(pop.inv)[Math.floor(Math.random()*Object.keys(pop.inv).length)];
      var sacrificeNum = Math.ceil(pop.inv[sacrifice]/5);
      pop.inv[sacrifice] -= sacrificeNum;
      
      if (Math.random() < 0.2) {
        
        var newRite = new Rite(pop,sacrifice);
        pop.rites.push(newRite);
        
        notification = pop.name + " sacrifices " + sacrificeNum + " " + dataResources[sacrifice].plural + " to develop a new religious rite, the " + newRite.name + ".";
      } else {
        notification = pop.name + " sacrifices " + sacrificeNum + " " + dataResources[sacrifice].plural + " in minor religious rites.";
      }
      
    // } else if (Math.random() < 1 / localRites.length) { // syncretize rites
    //   notifiction = pop.name + "merges two rites to make a stronger rite!";
    } else { // enact rite
      
      var rite = pop.rites[Math.floor(Math.random()*pop.rites.length)]
      
      notification = pop.name + " enacts the " + rite.name + ".";
      
      rite.enact(pop);
    }
    
  };
  
  this.impulse.inquiry = function(pop) {
    
    // Needs Prospecting on the top and addition of Values on the bototm
    
    var sacrifice = Object.keys(pop.inv)[Math.floor(Math.random()*Object.keys(pop.inv).length)];
    var sacrificeNum = Math.ceil(pop.inv[sacrifice]/5);
    pop.inv[sacrifice] -= sacrificeNum;
    potentialAdvances = [];
    
    for (i in dataResources[sacrifice].advances) {
      var terrainCheck = 1;
      if (terrainCheck === 1) {
        potentialAdvances.push(dataResources[sacrifice].advances[i]);
      }
    }
    var potentialAdvances = dataResources[sacrifice].advances;
    var advance = potentialAdvances[Math.floor(Math.random()*potentialAdvances.length)];
    
    if (Math.random()*100 < sacrificeNum + pop.advances.failures && advance !== undefined) {     
      if (pop.advances[advance.name] === undefined) {
        pop.advances[advance.key] = 1;
      } else {
        pop.advances[advance.key]++;
      }
      pop.advances.failures = 0;
      notification = pop.name + " destroys " + sacrificeNum + " " + dataResources[sacrifice].plural + " in an experiment.  They discover an "+advance.name+".";      
    } else {
      pop.advances.failures++;
      notification = pop.name + " destroys " + sacrificeNum + " " + dataResources[sacrifice].plural + " in an experiment.  It yields only negative data.";
    }
    
  };
  
  this.impulse.aggression = function(pop) {
  
  	var tiles = pop.withinRange();
  	var raidDestination;
  	var raidTargets = [];
  	var weakTargets = [];
  	var raidForce = pop.force();
  	var targetDefense = 0;
  	var raidTarget;
  	
  	if (tiles.length > 0) {
  		raidDestination = tiles[Math.floor(Math.random()*tiles.length)].tile
  		raidTargets = raidDestination.units;
  	} else if (worldMap.coords[pop.x][pop.y].units.length > 1) {
  		raidDestination = worldMap.coords[pop.x][pop.y];
  		raidTargets = raidDestination.units;
  	} else {
  		pop.impulse.authority(pop);
  	}
  	
  	for (i in raidTargets) {
  		targetDefense = raidTargets[i].defense();
  		if (raidTargets[i] != pop && raidForce > targetDefense*0.8) {
  			weakTargets.push(raidTargets[i]);
  		}
  	}
  	
  	// Upgrade this to take into account dispositions
  	raidTarget = weakTargets[Math.floor(Math.random()*weakTargets.length)];
  	
  	if (raidDestination !== undefined && raidTargets.length === 0) {
  		notification = pop.name + " mounts a raid to ("+raidDestination.x+","+raidDestination.y+") and finds an undefended stockpile.";
  		
  		// Plunder the stockpile
  		
  	} else if (raidTarget === undefined && raidTargets.length > 0) {
  		raidTarget = raidTargets[Math.floor(Math.random()*raidTargets.length)];
  		notification = pop.name + " mounts a raid but finds the " + raidTarget.name + " far too formidable to fight.";
  		
  		// Arm Up?
  		
  	} else if (raidTarget !== undefined) {
  		notification = pop.name + " mounts a raid on the " + raidTarget.name + ".  ";
  		var potentialSpoilsPop = Object.keys(raidTarget.inv);
  		var potentialSpoilsPile = Object.keys(raidDestination.stocks);
  		var spoilsPop = potentialSpoilsPop[Math.floor(Math.random()*potentialSpoilsPop.length)];
  		var spoilsPile = potentialSpoilsPile[Math.floor(Math.random()*potentialSpoilsPile.length)];
  		var spoilsPopNum = raidTarget.inv[spoilsPop] / 2;
  		var spoilsPileNum = raidDestination.stocks[spoilsPile] / 2;
  		var spoilsText;
  		
  		if (raidForce/targetDefense > 2) { // crit success
  			spoilsPopNum *= 1.5;
  			spoilsPileNum *= 1.5;
  			raidTarget.health -= 30;
  			
  			notification = notification + "They trounce the defenders and return at "+Math.floor(pop.health)+"% health.";
  		} else if (raidForce/targetDefense > 1) { // success
  			spoilsPopNum *= 1;
  			spoilsPileNum *= 1;
  			pop.health -= 10;
  			raidTarget.health -= 20;
  			
  			notification = notification + "They defeat the defenders and return at "+Math.floor(pop.health)+"% health.";
  		} else if (raidForce/targetDefense > .5) { // weak hit
  			spoilsPopNum *= 0;
  			spoilsPileNum *= 1;
  			pop.health -= 20;
  			raidTarget.health -= 10;
  			
  			notification = notification + "They struggle against the defenders and return at "+Math.floor(pop.health)+"% health.";
  		} else { // crit fail / routed
  			spoilsPopNum = 0;
  			spoilsPileNum = 0;
  			pop.health -= 30;
  			notification = notification + pop.name + " are routed!  They return home without any spoils and at "+Math.floor(pop.health)+"% health.";
  		}
  		
  		if (spoilsPileNum !== 0 ) {
  		
			spoilsPopNum = Math.floor(spoilsPopNum*100)/100;
			spoilsPileNum = Math.floor(spoilsPileNum*100)/100;
		
			if (spoilsPop === undefined && spoilsPile === undefined) {
				spoilsText = "Their targets, however, had nothing to take as spoils.";
			} else if (spoilsPop === undefined) {
				spoilsText = "They keep " + spoilsPopNum + " of the " +raidTarget.name+ "'s " + dataResources[spoilsPop].plural + " as spoils.";
				if (pop.inv[spoilsPop] === undefined) {
					pop.inv[spoilsPop] = spoilsPopNum;
				} else {
					pop.inv[spoilsPop] += spoilsPopNum;
				}
				raidTarget.inv[spoilsPop] -= spoilsPopNum;
			} else if (spoilsPile === undefined) {
				spoilsText = "They add their spoils, " + spoilsPileNum + " " + dataResources[spoilsPile].plural + ", to the stockpile.";
				pop.prestige += 10;
				if (worldMap.coords[pop.x][pop.y].stocks[spoilsPile] === undefined) {
					worldMap.coords[pop.x][pop.y].stocks[spoilsPile] = spoilsPileNum;
				} else {
					worldMap.coords[pop.x][pop.y].stocks[spoilsPile] += spoilsPileNum;
				}
				raidDestination.stocks[spoilsPile] -= spoilsPileNum;
			} else {
				spoilsText = "They add a portion of their spoils, " + spoilsPileNum + " " + dataResources[spoilsPile].plural + ", to the stockpile and keep " + spoilsPopNum + " of the " +raidTarget.name+ "'s " + dataResources[spoilsPop].plural + " for themselves.";
				pop.prestige += 10;
				if (pop.inv[spoilsPop] === undefined) {
					pop.inv[spoilsPop] = spoilsPopNum;
				} else {
					pop.inv[spoilsPop] += spoilsPopNum;
				}
				if (worldMap.coords[pop.x][pop.y].stocks[spoilsPile] === undefined) {
					worldMap.coords[pop.x][pop.y].stocks[spoilsPile] = spoilsPileNum;
				} else {
					worldMap.coords[pop.x][pop.y].stocks[spoilsPile] += spoilsPileNum;
				}
				raidTarget.inv[spoilsPop] -= spoilsPopNum;
				raidDestination.stocks[spoilsPile] -= spoilsPileNum;
			}
		
			raidTarget.prestige -= 5;
			raidTarget.values.aggression += 2;
		
			// Add raiders to raidTarget's dispositions shit-list
		
			notification = notification + " " + spoilsText;
  		}
  		
  	}
  	
  	// Fog
  	
  	// Defenders take no losses!
    
  };
  
  this.impulse.growFood = function(pop) {
    
    var potentialSites = [];
    
    for (var i in worldMap.coords[pop.x][pop.y].sites) {
      if (worldMap.coords[pop.x][pop.y].sites[i].primaryProduce === dataResources.food) {
        potentialSites.push(worldMap.coords[pop.x][pop.y].sites[i]);
      }
    }
    
    pop.job = potentialSites[Math.floor(Math.random()*potentialSites.length)];
    
    notification = pop.name + " decides to produce food working as " + pop.job.job + "s.";
  };
  
  this.impulse.migration = function(pop) {
  
  	var tiles = pop.withinRange();
  	
  	if (tiles.length > 0) {
  		var targetTile = tiles[Math.floor(Math.random()*tiles.length)];
  		var oldTile = worldMap.coords[pop.x][pop.y];
  		oldTile.units.splice(oldTile.units.indexOf(pop),1);
  		pop.name.x = targetTile.x;
  		pop.name.y = targetTile.y;
  		pop.prestige = Math.floor((pop.prestige + 50)/2);
  		targetTile.tile.units.push(pop);
  		notification = pop.name + " migrates to a new area."
  		
  		// Adjust fog for PC populations
  		
  	} else {
  		notification = pop.name + " wants to migrate away, but there is nowhere to go.";
  		// Reduce Loyalty
  	}
  };
  
};

var peoples = [];

function people(name,x,y) {
  this.name = name;
  this.x = x;
  this.y = y;
}

var rites = [];

function Rite(pop,sacrifice) {
  
  var riteForms = ["Parable","Feast","Ritual","Dance","Song","Secret","Mystery","Teachings","Myth","Fable","Koan","Story","Tale","Passion"];
  var riteIcons = [];
  riteIcons = riteIcons.concat(worldMap.coords[pop.x][pop.y].biome.flora);
  riteIcons = riteIcons.concat(worldMap.coords[pop.x][pop.y].biome.fauna);
  
  this.icon = riteIcons[Math.floor(Math.random()*riteIcons.length)];
  this.icon = this.icon.charAt(0).toUpperCase() + this.icon.slice(1);
  this.form = riteForms[Math.floor(Math.random()*riteForms.length)];
  this.name =  this.form + " of the " + this.icon;
  
  var potentialValues = Object.keys(pop.values);
  this.valueName = potentialValues[Math.floor(Math.random()*potentialValues.length)];
  this.valueNum = Math.max(0,Math.min(100,Math.floor(pop.values[this.valueName])));
  
  this.power = Math.floor(Math.random()*20);
  
  this.items = [dataResources[sacrifice]];
  
  this.practitioners = [pop];
  
  this.popUp = function() {
    var ritePopUp = '';
    var itemsList = '';
    var valueNumDescriptor = ['an abject rejection','a thorough disgust','a disdain','dislike','a nuanced dismissal','mild approval','a strong value','a fervent adulation','an incredible valuation','an obsession','a fanatical devotion'][Math.floor(this.valueNum/10)]
    
    for (n in this.items) {
      itemsList = itemsList + this.items[n].name;
      if (n < this.items-1) {
        itemsList = itemsList + ", ";
      }
    }
    
    
    ritePopUp = ritePopUp + "<strong>"+this.name+"</strong>";
    
    ritePopUp = ritePopUp + "<p>This rite promotes " + valueNumDescriptor + " (" + this.valueNum + ") of " + this.valueName + ".</p>";
    
    ritePopUp = ritePopUp + "<p>Full enactment requires " + itemsList + ".</p>";
    
    ritePopUp = ritePopUp + "<p>It has a power of " + this.power + ".</p>";
    
    return ritePopUp;
  };

  
  this.enact = function(pop) {
    var items = 0;
    for (i in this.items) {
      if (pop.inv[this.items[i].key] > 0 ) {
        items++;
        pop.inv[this.items[i].key]--;
        notification = notification + " " + dataResources[this.items[i].key].name + " is sacrificed.";
      }
    }
    
    if (items === this.items.length) {
      for (i in worldMap.coords[pop.x][pop.y].units) {
        if (worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] > this.valueNum) {
          notification = notification + " " + worldMap.coords[pop.x][pop.y].units[i].name + "'s " + this.valueName + " is chastened."
          if (worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] === undefined) {
            worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] = this.valueNum;
          } else {
            worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] -= this.power;
          }
        } else {
          notification = notification + " " + worldMap.coords[pop.x][pop.y].units[i].name + "'s " + this.valueName + " is encouraged."
          if (worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] === undefined) {
            worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] = this.valueNum;
          } else {
            worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] += this.power;
          }
        }
      }
      this.power--;
    } else {
      for (i in worldMap.coords[pop.x][pop.y].units) {
        if (worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] > this.valueNum) {
          notification = notification + " " + worldMap.coords[pop.x][pop.y].units[i].name + "'s " + this.valueName + " is chastened."
          if (worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] === undefined) {
            worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] = this.valueNum;
          } else {
            worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] -= Math.floor(this.power/2);
          }
        } else {
          notification = notification + " " + worldMap.coords[pop.x][pop.y].units[i].name + "'s " + this.valueName + " is encouraged."
          if (worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] === undefined) {
            worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] = this.valueNum;
          } else {
            worldMap.coords[pop.x][pop.y].units[i].values[this.valueName] += Math.floor(this.power/2);
          }
        }
      }
      this.power--;
      notification = notification + "  Without the ritual components, the rite is less effective.";
    }
    
    if (this.power < 1) {
      notification = notification + " The rite's power has been expended."
      for (practitioner in this.practitioners) {
        this.practitioners[practitioner].rites.splice(this.practitioners[practitioner].rites.indexOf(this),1);
      }
    } else if (Math.random() > 0.7 && worldMap.coords[pop.x][pop.y].units.length > 1) {
      var potentialPops = worldMap.coords[pop.x][pop.y].units;
      potentialPops.splice(potentialPops.indexOf(pop),1);
      var newPop = potentialPops[Math.floor(Math.random()*potentialPops.length)];
      newPop.rites.push(this);
      this.practitioners.push(newPop);
      notification = notification + newPop.name + " studies the rite and learns it.";
    }
    
  }
}