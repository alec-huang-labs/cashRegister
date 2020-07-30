# Cash Register

Returns {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Returns {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Returns {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.