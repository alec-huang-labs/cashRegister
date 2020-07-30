//my Solution (7.75 hrs later!)
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
    return changeObj;
  }



checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])


//FCC Solution
var denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];
  
  function checkCashRegister(price, cash, cid) {
    var output = { status: null, change: [] };
    var change = cash - price;
  
    // Transform CID array into drawer object
    var register = cid.reduce(
      function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      },
      { total: 0 }
    );
  
    // Handle exact change
    if (register.total === change) {
      output.status = "CLOSED";
      output.change = cid;
      return output;
    }
  
    // Handle obvious insufficient funds
    if (register.total < change) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
  
    // Loop through the denomination array
    var change_arr = denom.reduce(function(acc, curr) {
      var value = 0;
      // While there is still money of this type in the drawer
      // And while the denomination is larger than the change remaining
      while (register[curr.name] > 0 && change >= curr.val) {
        change -= curr.val;
        register[curr.name] -= curr.val;
        value += curr.val;
  
        // Round change to the nearest hundreth deals with precision errors
        change = Math.round(change * 100) / 100;
      }
      // Add this denomination to the output only if any was used.
      if (value > 0) {
        acc.push([curr.name, value]);
      }
      return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce
  
    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
  
    // Here is your change, ma'am.
    output.status = "OPEN";
    output.change = change_arr;
    return output;
  }
  
  // test here
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
  ]);