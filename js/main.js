/* global $ */
var Game = {};
Game.fps = 60;
var timeOnUnTab;
var timeOnResume;
var Save = {
    perSecond: 1,
    score: 0
}
Save.saveString = "perSecond=1; score= " + Save.score + ";";


Game.run = function() {
  Game.update();
};

// Start the game loop
Game._intervalId = setInterval(Game.run, 1000 / Game.fps);

//Updates everything
Game.update = function(){
    $("#score").html("Score: " + makePretty(Save.score) );
    Save.score += Save.perSecond / 60; //This prints the players score
    document.title = "Score: " + makePretty(Save.score)
    //document.title = "test";
}

function makePretty(score){
    var smallNum;
    var suffix;
    if (score > 1000 && score < 1000000){
        smallNum = Math.round( (score / 1000 ) * 10)  / 10;
        suffix = "K";
    }
    else if (score > 1000000){
        smallNum = Math.round( (score / 1000000) * 10) / 10;
        suffix = "M";
    }
    else {
        smallNum = score;
        suffix = "";
    }
    //return smallNum.toFixed(1) + suffix;
    return smallNum.toFixed(1) + suffix;
}
$(window).blur(function(){
});

$(window).focus(function(){
  //your code
});

function load() {
    //alert(window.localStorage.getItem("save"));
    Save.score = parseInt(readSaveString("score"));
}

window.onLoad = load();

function save() {
    Save.saveString = "perSecond=1; score= " + Save.score + ";"
    window.localStorage.setItem("save", Save.saveString);
    alert("Saved");
}

function readSaveString(name) {
    var nameEQ = name + "=";
    var ca = Save.saveString.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
