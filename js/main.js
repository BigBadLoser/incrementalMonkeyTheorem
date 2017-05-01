/* global $ */
var Game = {};
Game.fps = 60;
var timeOnUnTab;
var timeOnResume;


if (window.localStorage.getItem("save") != null){
    var Save = load();
}
else {
    var Save = {
        score: 0,
        perSecond: 1
    }
}


Game.run = function() {
  Game.update();
};
//https://bigbadloser.github.io/incrementalMonkeyTheorem/index.html
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



function save() {
  window.localStorage.setItem("save", JSON.stringify(Save));
}
function test(){
    Save = load();
}
function load() {
  return JSON.parse(window.localStorage.getItem("save"));
}