# Cash Register

Function accepts checkout price as the first argument (price), customer payment amount as the second argument (cash), and change-in-drawer (cid) as the third argument. cid is a 2D array listing available currency. <br><br>
Example function call: checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); means the checkout price is $19.50, the customer paid with $20 and the change-in-drawer is $1.01 of Pennies, $2.05 of Nickels, $3.10 of Dimes, $4.25 of Quarters and so on. <br>
The function will return an Object that 1) describes the state of the cash register: INSUFFICIENT_FUNDS (not enough change in drawer), CLOSED (if the change due is equal to the total amount of change in change-in-drawer or OPEN. 2) A 2-D array of the new change-in-drawer after the change has been given to the customer. 
The Example function call will return: 

Returns {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change. <br>
Returns {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due. <br>
Returns {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. <br>
