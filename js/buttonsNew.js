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
function Button(object){
    this.upgradeIndex = object.upgradeIndex;
    this.perSecond = object.perSecond;
    this.totalPerSecond = object.totalPerSecond;
    this.owned = object.owned;
    this.basePrice = object.basePrice;
}

function testMeDaddy() {
    
}