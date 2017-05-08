/*global $*/
/* A better name for this file would be unitButtons.js, becase this only handles the unit buttons.
** The upgrades.js handles the upgrades buttons, and the contracts.js handles the contracts buttons.
** I could edit my button object to take 'purpose' as input, and have that be eitherm 
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
        text: 'Obtain ' + object.name + ' - $' + calculateCost(object),
        id: object.name + "Button",
        class: 'btn btn-default',
        click: function(){
        if (Save.cash >= calculateCost(object) ){ 
            Save.cash -= calculateCost(object);
            object.owned++;
            object.totalPerSecond = object.owned * object.perSecond;
            this.currentCost = calculateCost(object);
            $("#" + this.id).text("Obtain " + object.name + ' - $' + makePretty( calculateCost( object ) ) );
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
}