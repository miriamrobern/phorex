var notificationLog = [];

var gameClock = {
  turn: 0,
  guidancePoints: 100,
  
  year: function() {
    return Math.floor(gameClock.turn/4);
  },
  
  season: function() {
    return ["Spring","Summer","Autumn","Winter"][((gameClock.turn/4)-Math.floor(gameClock.turn/4))*4];
  },
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