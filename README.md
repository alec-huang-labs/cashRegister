## Cash Register Machine Function

`checkCashRegister(price, cash, cid){...}` accepts 3 arguments.  

- **price** is the total checkout price
- **cash** is the customer payment amount
- **cid** stands for change-in-drawer which is the amount of change left in cash drawer. _cid_ is a 2D array listing available currency. 

**Example function call:** 
`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); `
Means the total checkout price is $19.50, the customer paid with $20 and the amount of change left in cash drawer is $1.01 of Pennies, $2.05 of Nickels, $3.10 of Dimes, $4.25 of Quarters and so on. 

The function will return an Object that..
1. Describes the state of the cash register: INSUFFICIENT_FUNDS (not enough change in drawer), CLOSED (if the change due is equal to the total amount of change in change-in-drawer or OPEN. 
2. A 2-D array of the change to be handed back to the customer 

The Example function call will return: 
`{ status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }` meaning there is still enough change in the drawer for the next transaction and the change to be returned would be $0.5 worth of quarters 
