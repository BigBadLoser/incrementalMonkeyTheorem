/*global Save */
/*global Monkey */
/*global $ */
/*global Chimp */
/*global calculateCost */
function monkeyButton() {
    var cost = calculateCost(Monkey);
    if (Save.cash >= cost ){ //I could have hard coded this really, since it's not as dynamic as it I thought it would be.
        Monkey.owned++;
        Save.cash -= cost;
        Monkey.totalPerSecond = Monkey.owned * Monkey.perSecond;
    }
    else {
        notEnoughMoney();
    }
}

function chimpButton() {
    var cost = calculateCost(Chimp);
    if (Save.cash >= cost ){
        Chimp.owned++;
        Save.cash -= cost;
        Chimp.totalPerSecond = Chimp.owned * Chimp.perSecond;
    }
    else {
        notEnoughMoney();
    }    
}
function zeroButton() {
    Save.perSecond = 0;
    Save.cash = 0;
    window.localStorage.clear;
    window.localStorage.removeItem("save");
    
}
function updateButtons(){
    $("#monkeyButton").html("Obtain Monkey - " + Monkey.owned);
    $("#chimpButton").html("Acquire Chimp - " + Chimp.owned );
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