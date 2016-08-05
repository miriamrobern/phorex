
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
          x:x,
          y:y,
          fog: 1,
          
        });
      }
        
    }
    
    worldMap.coords[1][1].altitude = 2;
    worldMap.coords[1][2].altitude = 2;
    worldMap.coords[2][1].altitude = 2;
    worldMap.coords[2][2].altitude = 2;
    worldMap.coords[2][2].sites = [{site:dataSites.theWilds,capacity:100},{site:dataSites.outcropping,capacity:100},{site:dataSites.well,capacity:100}];
    worldMap.coords[1][1].sites = [{site:dataSites.theWilds,capacity:100},{site:dataSites.grazingLand,capacity:100},{site:dataSites.river,capacity:100}];
    worldMap.coords[1][2].sites = [{site:dataSites.theWilds,capacity:100},{site:dataSites.outcropping,capacity:100},{site:dataSites.peatBog,capacity:100}];
    worldMap.coords[2][1].sites = [{site:dataSites.theWilds,capacity:100},{site:dataSites.clayDeposit,capacity:100},{site:dataSites.pond,capacity:100}];
    worldMap.coords[1][1].biome = dataBiomes.forest;
    worldMap.coords[1][2].biome = dataBiomes.desert;
    worldMap.coords[2][1].biome = dataBiomes.tundra;
    worldMap.coords[2][2].biome = dataBiomes.shrubland;
    
    worldMap.coords[1][1].name = "Northwest Forest";
    worldMap.coords[1][2].name = "Southwest Desert";
    worldMap.coords[2][1].name = "Northeast Tundra";
    worldMap.coords[2][2].name = "Southeast Shrubland";
    
    var south = new people("South",2,2);
    var north = new people("North",1,1);
    
    worldMap.coords[1][1].stocks = {caribou:1000};
    
    southeast = new Pop("Southeasterners",south,99,2,2,48,{aggression: 1,inquiry: 1},{gender:"mixed",age:"mixed"});
    northwest = new Pop("Northwesterners",north,99,1,1,1,{aggression: 1,inquiry: 1},{gender:"mixed",age:"mixed"});
    northeast = new Pop("Northeasterners",north,99,2,1,20,{aggression: 1,inquiry: 1},{gender:"mixed",age:"mixed"});
    southwest = new Pop("Southwesterners",south,99,1,2,21,{aggression: 1,inquiry: 1},{gender:"mixed",age:"mixed"});
    
    
    worldMap.coords[1][1].units = [northwest];
    worldMap.coords[1][2].units = [southwest];
    worldMap.coords[2][2].units = [southeast];
    worldMap.coords[2][1].units = [northeast];
    
    
    worldMap.coords[1][1].links = [];
    worldMap.coords[1][2].links = [];
    worldMap.coords[2][2].links = [];
    worldMap.coords[2][1].links = [];
    
    worldMap.coords[2][2].buildings = [{building:dataBuildings.agora,capacity:250},{building:dataBuildings.beerGarten,capacity:350},{building:dataBuildings.customsHouse,capacity:150},{building:dataBuildings.greatHall,capacity:950},{building:dataBuildings.laboratory,capacity:50},{building:dataBuildings.library,capacity:250},{building:dataBuildings.moat,capacity:350},{building:dataBuildings.palisade,capacity:250},{building:dataBuildings.stoneWall,capacity:250},{building:dataBuildings.university,capacity:250},{building:dataBuildings.watchtowers,capacity:250}];
    worldMap.coords[2][2].shrines = [dataShrines.cathedral,dataShrines.cloister,dataShrines.forecourtMen,dataShrines.forecourtWomen,dataShrines.kiva,dataShrines.menhir,dataShrines.sacredGrove,dataShrines.sacredSpring,dataShrines.shrine,dataShrines.reliquary,dataShrines.ritualLoom,dataShrines.shul,dataShrines.seminary,dataShrines.temple];
//     worldMap.coords[2][2].links = [{type:dataLinks.overland, destination:worldMap.coords[1][1]},{type:dataLinks.overlandSmuggling, destination:worldMap.coords[1][2]}];
    
    var rite1 = new Rite(southeast,"caribou");
    var rite2 = new Rite(southeast,"bone");
    southeast.rites.push(rite1);
    southeast.rites.push(rite2);
    
    southeast.loyalty.player = 50;
    northwest.loyalty.player = 50;
    northeast.loyalty.player = 50;
    southwest.loyalty.player = 50;
    pops.push(southeast);
    pops.push(southwest);
    pops.push(northeast);
    pops.push(northwest);
    
    southeast.advances = {failures:80, trade:1};
    southwest.advances = {failures:80, trade:1};
    northwest.advances = {failures:80, trade:1};
    northeast.advances = {failures:80, trade:1};
    
    southeast.inv = {food:0};
    northeast.inv = {food:0};
    southwest.inv = {food:0};;
    northwest.inv = {food:0};

    
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