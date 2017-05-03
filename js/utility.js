/* makePretty, input the number you want to format.
** This returns the number in the new format. 1200 -> 1.2K, 1000000 -> 1M, etc. */
function makePretty(cash){
    var smallNum;
    var suffix;
    if (cash > 1000 && cash < 1000000){
        smallNum = Math.round( (cash / 1000 ) * 10)  / 10;
        suffix = "K";
    }
    else if (cash > 1000000){
        smallNum = Math.round( (cash / 1000000) * 10) / 10;
        suffix = "M";
    }
    else {
        smallNum = cash;
        suffix = "";
    }
    return smallNum.toFixed(1) + suffix;
}

/* calculateCost, input the object whose costs you want to use
** This returns the new cost of the unit based on the progression formula */
function calculateCost(object){
    return object.basePrice * Math.pow(1.15, object.owned); //from CC
}
	