/*global $*/
/* This will be my attempt at updating the buttons code to be more dynamic
** I don't even know what the word dynamic means anymore, but I use it to mean
** Less copy and paste code, more objects and stuff
*/

/* Old button code example
function monkeyButton() {
    var cost = calculateCost(Monkey.owned, Monkey.basePrice);
    if (Save.cash >= cost ){ //I could have hard coded this really, since it's not as dynamic as it I thought it would be.
        Monkey.owned++;
        Save.cash -= cost;
        Monkey.totalPerSecond = Monkey.owned * Monkey.perSecond;
    }
    else {
        notEnoughMoney();
    }
}
*/
//<button type="button" class="btn btn-default" id="chimpButton" onclick="chimpButton()">Acquire Chimp</button>
var buttons = [];
function Button(object){ //A lot of these variables aren't even necessary, the button will never need them.
    this.html = $('<button/>', {
        text: 'Obtain ' + object.name + ' - $' + object.basePrice,
        id: object + 'Button',
        class: 'btn btn-default',
        click: function(){
        if (Save.cash >= calculateCost(object) ){ 
            object.owned++;
            Save.cash -= calculateCost(object);
            object.totalPerSecond = object.owned * object.perSecond;
            this.currentCost = calculateCost(object);
        }
        else {
            notEnoughMoney();
        }
    }
    })
}

function createButtons() {
    var monkeyButton = new Button(Monkey); buttons.push(monkeyButton);
    var chimpButton = new Button(Chimp); buttons.push(chimpButton)
        for(var i = 0; i < buttons.length; i++){
        $("#unitButtons").append(buttons[i].html);
    }
}
function updateButtons(){
    
}
function testFunction() {
    return("nice");
}
function obtainFunding(){
    $("#fundingButton").addClass("disabled");
    setTimeout(
      function() 
      {
        Save.cash += Save.fundingPerPress;
        
        $("#fundingProgress").css('width', 0);
        
        $("#fundingButton").removeClass("disabled");
      }, 5 * 1000);
      
    $("#fundingProgress").animate({
    width: "100%"
}, 4750);
}
function zeroButton() {
    Save.perSecond = 0;
    Save.cash = 0;
    window.localStorage.clear;
    window.localStorage.removeItem("save");
    
}
function notEnoughMoney(){
    alert("not enough");
}