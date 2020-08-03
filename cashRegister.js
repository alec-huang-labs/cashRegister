
function checkCashRegister(price, cash, cid) {
    
    let originalDrawer = cid.map(arr => [...arr]);
    let drawerTotal = cid.reduce((accum, obj) => accum + obj[1], 0);
    let names = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
    let values = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
    var changeObj = {
        status: "",
        change: []
    }
    const cashDrawer = cid.reverse();

    let giveBack = cash - price;
    let accum = 0;
    while (giveBack != 0 && cashDrawer[cashDrawer.length - 1][1] != 0){
      for (var i = 0; i < values.length; i++){
        while (values[i] <= giveBack && cashDrawer[i][1] > 0){     
              changeObj.change.push([names[i], values[i]]);
              accum = Math.round((accum + values[i]) * 100)/100;
              giveBack = Math.round((giveBack - values[i]) * 100) / 100;
              cashDrawer[i][1] = Math.round((cashDrawer[i][1] - values[i])* 100)/100;
        }
      }
    }

    let finalForm = [];
    for (let n = 0; n < changeObj.change.length; n++){
        if (finalForm.flat().includes(changeObj.change[n][0])) {
            finalForm[finalForm.length - 1][1] = Math.round((finalForm[finalForm.length - 1][1]+ changeObj.change[n][1])*100)/100;
        } else {
            finalForm.push(changeObj.change[n])
        }
    }
    changeObj.change = finalForm;
    
    if (accum == cash - price && cashDrawer[cashDrawer.length - 1][1] != 0){
        changeObj.status = "OPEN"
    } else if (drawerTotal == cash - price){
        changeObj.status = "CLOSED"
        changeObj.change = originalDrawer;
    } else {
        changeObj.status = "INSUFFICIENT_FUNDS"
        changeObj.change = [];
    }
    console.log(changeObj);
    return changeObj;
  }

//Example Function Calls:
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

//Your Function Calls:
