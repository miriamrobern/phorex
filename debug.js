
var testy = [];

var testMap = {
  
  setUp: function() {
  
    worldMap.coords = [];
    worldMap.prefs.size_x = 4;
    worldMap.prefs.size_y = 4;
    
    for (x = 0; x < 4; x++) {
      
      worldMap.coords.push([]);
      
      for (y = 0; y < 4; y++) {
        
        worldMap.coords[x].push({
          altitude: -1,
          precipitation: '99',
          temperature: '15',
          downhill: '',
          biome: '',
          sites: [],
          units: [],
          stocks: {},
          
        });
      }
        
    }
    
    worldMap.coords[1][1].altitude = 2;
    worldMap.coords[1][2].altitude = 2;
    worldMap.coords[2][1].altitude = 2;
    worldMap.coords[2][2].altitude = 2;
    worldMap.coords[2][2].sites = [{site:dataSites.theWilds,capacity:100},{site:dataSites.fruitGrove,capacity:100},{site:dataSites.cowrieBeach,capacity:100},{site:dataSites.knappery,capacity:100}];
    worldMap.coords[1][1].sites = [dataSites.theWilds,dataSites.grazingLand,dataSites.river];
    worldMap.coords[1][2].sites = [dataSites.theWilds,dataSites.outcropping,dataSites.peatBog];
    worldMap.coords[2][1].sites = [dataSites.theWilds,dataSites.clayDeposit,dataSites.pond];
    worldMap.coords[1][1].biome = dataBiomes.forest;
    worldMap.coords[1][2].biome = dataBiomes.desert;
    worldMap.coords[2][1].biome = dataBiomes.tundra;
    worldMap.coords[2][2].biome = dataBiomes.shrubland;
    
    var south = new people("South",2,2);
    var north = new people("North",1,1);
    
    // pop(name,people,population,x,y,prestige,values,demographics,dispositions,equipment,health,movement,job)
    
    southeast = new Pop("Southeasterners",south,22,2,2,100,{aggression: 100, piety: 100},{gender:"mixed",age:"mixed"});
    northwest = new Pop("Northwesterners",north,11,2,2,1,{aggression: 100, matriarchy: 100},{gender:"mixed",age:"mixed"});
    northeast = new Pop("Northeasterners",north,50,2,2,50,{aggression: 100, patriarchy: 100},{gender:"mixed",age:"mixed"});
    southwest = new Pop("Southwesterners",south,21,2,2,21,{aggression: 100, neutrarchy: 100, authority:10},{gender:"mixed",age:"mixed"});
    
    
    worldMap.coords[1][1].units = [];
    worldMap.coords[1][2].units = [];
    worldMap.coords[2][2].units = [southeast,northwest,northeast,southwest];
    worldMap.coords[2][1].units = [];
    
    southeast.loyalty.player = 50;
    northwest.loyalty.player = 50;
    northeast.loyalty.player = 50;
    southwest.loyalty.player = 50;
    pops.push(southeast);
    pops.push(southwest);
    pops.push(northeast);
    pops.push(northwest);
    
    southeast.advances = {failures:80, manufacture:3, caribouHerding:1, };

    
    view.focusX = 2;
    view.focusY = 2;
    
    var setupTable = document.getElementById('setupTable');
    setupTable.style.display = 'none';
    
    var introDiv = document.getElementById("introduction");
    introDiv.style.display = 'none';
    
    var uiTileDiv = document.getElementById('uiTileDiv');
    uiTileDiv.style.display = 'inherit';
    
    worldMap.stage = 'completed';
    worldMap.prefs.legend = 'population';
    view.displayWorldMap();
    view.refreshUi();
  },
};