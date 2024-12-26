/*                                                   jai shree ram                                                               */

// Declaring global variables
let price = 19.5; // Adjusted to match the test case
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
           ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

const currencyUnits = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5],
           ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

function check() {
    let cash = parseFloat(document.getElementById("cash").value);

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        document.getElementById("cash").value = null;
    } else if (isNaN(cash)) {
        alert("Please enter the amount received by the customer");
        document.getElementById("cash").focus();
    } else if (cash === price) {
        document.getElementById("change-due").textContent = "No change due - customer paid with exact cash";
    } else {
        document.getElementById("change-due").textContent = calculateChange(cash);
    }
}

function calculateChange(cash) {
	let change = cash - price;
	let totalCash = 0;
	let remainingChange = change;
	let changeArray = [];

	// Calculate the total cash available in the cash drawer
    	for (let i = 0; i < cid.length; ++i) {
        	totalCash += cid[i][1];
    	}
    	totalCash = parseFloat(totalCash.toFixed(2));

	// Check if the change is greater than the total cash available
	if (change > totalCash) {
        	return "Status: INSUFFICIENT_FUNDS";
    	}
	else if (change === totalCash) {
        // Handle the CLOSED status properly
        	for (let i = currencyUnits.length - 1; i >= 0; --i) {
            		let coinName = cid[i][0];
            		let coinValue = currencyUnits[i][1];
            		let coinAmount = cid[i][1];
            		let amountFromUnit = 0;

            		// Check if we can use this coin to make change
            		while (remainingChange >= coinValue && coinAmount > 0) {
                		remainingChange = parseFloat((remainingChange - coinValue).toFixed(2));
                		coinAmount -= coinValue;
                		amountFromUnit += coinValue;
            		}

            		if (amountFromUnit > 0) {
                		changeArray.push([coinName, parseFloat(amountFromUnit.toFixed(2))]);
            		}
        	}
        	// Return status and sorted change array
		return `Status: CLOSED ${changeArray.map(item => `${item[0]}: $${item[1]}`).join(" ")}`;
	}
	else {
        	for (let i = currencyUnits.length - 1; i >= 0; --i) {
            		let coinName = cid[i][0];
            		let coinValue = currencyUnits[i][1];
            		let coinAmount = cid[i][1];
            		let amountFromUnit = 0;

            		// Check if we can use this coin to make change
            		while (remainingChange >= coinValue && coinAmount > 0) {
                		remainingChange = parseFloat((remainingChange - coinValue).toFixed(2));
                		coinAmount -= coinValue;
                		amountFromUnit += coinValue;
            		}

            		if (amountFromUnit > 0) {
                		changeArray.push([coinName, parseFloat(amountFromUnit.toFixed(2))]);
            		}
        	}

        	// After the loop, if we still have remaining change, it means we can't make exact change
        	if (remainingChange > 0) {
            		return "Status: INSUFFICIENT_FUNDS";
        	}
		else {
            		return `Status: OPEN ${changeArray.map(item => `${item[0]}: $${item[1]}`).join(" ")}`;
        	}
	}
}