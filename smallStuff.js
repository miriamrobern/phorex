var notificationLog = [];

var popsByPrestige = [];

var gameClock = {
  turn: 0,
  guidancePoints: 300,
  
  year: function() {
    return 1+Math.floor(gameClock.turn/4);
  },
  
  season: function() {
    return ["Spring","Summer","Autumn","Winter"][((gameClock.turn/4)-Math.floor(gameClock.turn/4))*4];
  },
};

var peoples = [];

function people(name,x,y) {
	var pluralization = ["s","i","a","es"][Math.floor(Math.random()*3)]
	this.name = name;
	this.plural = name + pluralization;
	this.x = x;
	this.y = y;
}

var rites = [];

function Rite(pop,sacrifice) {
  
  var riteForms = ["Parable","Feast","Ritual","Dance","Song","Secret","Mystery","Teachings","Myth","Fable","Koan","Story","Tale","Passion"];
  var riteAdjectives = ["Hungry","Dying","Wise","Laughing","Learned","Ancient","Eternal","Starving","Thirsty","Compassionate","Foolish"];
  var riteIcons = [];
  riteIcons = riteIcons.concat(worldMap.coords[pop.x][pop.y].biome.flora);
  riteIcons = riteIcons.concat(worldMap.coords[pop.x][pop.y].biome.fauna);
  
  this.icon = [riteIcons[Math.floor(Math.random()*riteIcons.length)]];
  this.form = [riteForms[Math.floor(Math.random()*riteForms.length)]];
  this.adjective = [riteAdjectives[Math.floor(Math.random()*riteAdjectives.length)]];
  
  if (Math.random() > 0.5 ) {
	 this.name =  this.form[0] + " of the " + this.adjective[0] + " " + this.icon[0];
  } else {
	 this.name =  this.form[0] + " of the " + this.icon[0];
	 this.adjective = [];
  }
  
  var potentialValues = Object.keys(pop.values);
  var valueName = potentialValues[Math.floor(Math.random()*potentialValues.length)];
  this.moral = [{value: valueName, valueNum: Math.max(0,Math.min(100,Math.floor(pop.values[valueName])))}];
  
  this.power = Math.floor(Math.random()*20);
  
  this.items = [dataResources[sacrifice]];
  
  this.practitioners = [pop];
  
  this.popUp = function() {
    var ritePopUp = '';
    var moralList = '';
    var itemsList = '';
    var practitioners = '';
    
    for (n in this.moral) {
		moralList += ['an abject rejection of ','a thorough disgust with ','a disdain of ','dislike of ','a nuanced dismissal of ','mild approval of ','a strong value for ','a fervent adulation of ','an incredible valuation of ','an obsession with ','a fanatical devotion to '][Math.floor(this.moral[n].valueNum/10)]
    	moralList += this.moral[n].value;
		if (n < this.moral.length - 2 ) {
			moralList += ", ";
		} else if (n == this.moral.length - 2 ) {
			moralList += ", and ";
		}
    }
    
    for (n in this.items) {
      itemsList += this.items[n].name;
      if (n < this.items.length - 2 ) {
        itemsList += ", ";
      } else if (n == this.items.length - 2 ) {
      	itemsList += ", and ";
      }
    }
    
    for (n in this.practitioners) {
    	if (this.practitioners[n].x === view.focusX && this.practitioners[n].y === view.focusY) {
    		practitioners += this.practitioners[n].name;
    		if (n < this.practitioners.length - 2 ) {
    			practitioners += ", ";
    		} else if (n == this.practitioners.length - 2 ) {
    			practitioners += ", and ";
    		}
    	}
    }
    
    ritePopUp += "<strong>"+this.name+"</strong>";
    
    ritePopUp += "<p>This rite promotes " + moralList + ".</p>";
    
    ritePopUp += "<p>Full enactment requires " + itemsList + ".</p><p>It has a power of " + this.power + ".</p>";
    
    ritePopUp += "<p>This rite is practiced by " + practitioners + ".</p>";
    
    return ritePopUp;
  };

  
  this.enact = function(pop) {
    var items = 0;
    notification = pop.name + " performs the " +this.name+ " rite.  ";
    var distortion = 0;
    for (i in this.items) {
      if (pop.inv[this.items[i].key] > 0 ) {
        items++;
        pop.inv[this.items[i].key]--;
        notification += " " + dataResources[this.items[i].key].name + " is sacrificed.  ";
      }
    }
    var efficacy = (items+1) / (this.items.length+1);
    var audience = worldMap.coords[pop.x][pop.y].units;
    
    for (i in audience) {
    	for (v in this.moral) {
    		if (audience[i].values[this.moral[v].value] === undefined) {
    			notification += audience[i].name + " learns about " + this.moral[v].value + ".  ";
    			distortion = [-20,-10,-5,5,10,20][Math.floor(Math.random()*6)] / efficacy;
    			audience[i].values[this.moral[v].value] = this.moral[v].valueNum + distortion;
    		} else if (audience[i].values[this.moral[v].value] > this.moral[v].valueNum) {
    			notification += audience[i].name + "'s " + this.moral[v].value + " is chastened.  ";
    			audience[i].values[this.moral[v].value] -= Math.floor(this.power * efficacy);
    		} else {
    			notification += audience[i].name + "'s " + this.moral[v].value + " is encouraged.  ";
    			audience[i].values[this.moral[v].value] += Math.ceil(this.power * efficacy);
    		}
    	}
    }
    
    if (items < this.items.length) {notification += "  Without the ritual components, the rite is less effective.  "};
    
    this.power--;
    if (this.power < 1) {
      notification = notification + "The rite's power has been expended.  "
      for (practitioner in this.practitioners) {
        this.practitioners[practitioner].rites.splice(this.practitioners[practitioner].rites.indexOf(this),1);
      }
    } else if (Math.random() > 0.7 && worldMap.coords[pop.x][pop.y].units.length > 1) {
      var potentialPops = worldMap.coords[pop.x][pop.y].units.slice();
      potentialPops.splice(potentialPops.indexOf(pop),1);
      var newPop = potentialPops[Math.floor(Math.random()*potentialPops.length)];
      newPop.rites.push(this);
      this.practitioners.push(newPop);
      notification = notification + newPop.name + " studies the rite and learns it.";
    }
    
    pop.notify(notification);
    pop.guided = 1;
    
  }
}