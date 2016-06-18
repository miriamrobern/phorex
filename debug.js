
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
    
    var south = new people("South",2,2);
    var north = new people("North",1,1);
    
    // pop(name,people,population,x,y,prestige,values,demographics,dispositions,equipment,health,movement,job)
    
    southeast = new Pop("Southeasterners",south,22,2,2,100,{aggression: 50, piety: 100},{gender:"mixed",age:"mixed"});
    northwest = new Pop("Northwesterners",north,11,1,1,1,{aggression: 50, piety: 100},{gender:"mixed",age:"mixed"});
    northeast = new Pop("Northeasterners",north,50,1,2,50,{aggression: 50, piety: 100},{gender:"mixed",age:"mixed"});
    southwest = new Pop("Southwesterners",south,21,2,1,21,{aggression: 50, piety: 100},{gender:"mixed",age:"mixed"});
    
    
    worldMap.coords[1][1].units = [northwest];
    worldMap.coords[1][2].units = [northeast];
    worldMap.coords[2][2].units = [southeast];
    worldMap.coords[2][1].units = [southwest];
    worldMap.coords[2][2].sites = [dataSites.theWilds,dataSites.fruitGrove,dataSites.cowrieBeach];
    worldMap.coords[1][1].sites = [dataSites.theWilds,dataSites.grazingLand,dataSites.river];
    worldMap.coords[1][2].sites = [dataSites.theWilds,dataSites.outcropping,dataSites.peatBog];
    worldMap.coords[2][1].sites = [dataSites.theWilds,dataSites.clayDeposit,dataSites.pond];
    worldMap.coords[1][1].biome = dataBiomes.forest;
    worldMap.coords[1][2].biome = dataBiomes.desert;
    worldMap.coords[2][1].biome = dataBiomes.tundra;
    worldMap.coords[2][2].biome = dataBiomes.shrubland;
    pops.push(southeast);
    pops.push(southwest);
    pops.push(northeast);
    pops.push(northwest);
    
    southeast.advances = {failures:80, butchery:1, carpentry:2, };

    
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