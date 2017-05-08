/* global $ */
/* global makePretty */
var Game = {};
Game.fps = 60;

if (load() != null){
    var Save = load();
}
else {
    var Save = {
        cash: 0,
        science: 0,
        perSecond: 0,
        sciencePerSecond: 0,
        fundingPerPress: 10,
        perSecond: 0,
        
    }
    var Monkey = {
        upgradeIndex: 0,
        perSecond: 1,
        totalPerSecond: 0,
        owned: 0,
        basePrice: 10,
        name: "Monkey"
    }
    var Chimp = {
        upgradeIndex: 0,
        perSecond: 2,
        totalPerSecond: 0,
        owned: 0,
        basePrice: 50,
        name: "Chimp"
    }
    //alert("test");
}
Game.run = function() {
  Game.update();
};
// Start the game loop
Game._intervalId = setInterval(Game.run, 1000 / Game.fps);
//Updates everything
Game.update = function(){
    updateLabels();
    updateIncome();
    updateButtons();
    updateContracts();
    document.title = "Cash: $" + makePretty(Save.cash); //This is temporary
    //save(); //broken atm, why? I don't know!
}

$('document').ready(function start(){
    createContracts();
    createButtons();
});
function updateLabels(){
    $("#cash").html("<p>Cash: $" + makePretty(Save.cash) + " + $" + makePretty(Save.perSecond) + " /sec" + "</p>");
    $("#science").html("<p>Science: " + makePretty(Save.science) + " + " + makePretty(Save.sciencePerSecond) + " /sec" + "</p>");
    $("#monkey").html("<p>Monkeys: " + Monkey.owned + " + $" + makePretty( Monkey.totalPerSecond ) + " /sec </p>");
        if (Monkey.owned < 1){ $("#monkey").hide();} else {$("#monkey").show();}
    $("#chimp").html("<p>Chimp: " + Chimp.owned + " + $" + makePretty( Chimp.totalPerSecond ) + " /sec </p>");
        if (Chimp.owned < 1){ $("#chimp").hide();} else {$("#chimp").show();}
}
function updateIncome() {
    Save.perSecond = Monkey.totalPerSecond + Chimp.totalPerSecond;
    Save.cash += Save.perSecond / 60;
    Save.science += Save.sciencePerSecond / 60;
}

//-- Honestly, fuck this save system. This took me like 3 1/2 hours to do, and it ends up being like 4 total lines of code
function save() {
  window.localStorage.setItem("save", JSON.stringify(Save));
}
function load() {
  return JSON.parse(window.localStorage.getItem("save"));
}
