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

function calculateCost(object){
    return object.basePrice * Math.pow(1.15, object.owned);
}