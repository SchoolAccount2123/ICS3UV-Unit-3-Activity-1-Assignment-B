//This code will calculate the total restaurant bill including HST
//setting up the variables for mealcost, hstrate, and tiprate as well as number of people

const mealcost: number = 315.99
const hstrate: number = 0.13;
const tiprate: number = 0.15;
const numpeople: number = 5;

// doing the calculations

const hstamount: number = mealcost * hstrate;
const tipamount: number = mealcost * tiprate;
const totalcost: number = mealcost + hstamount + tipamount;
const costperperson: number = totalcost / numpeople;

// Displaying the final results and cost per person

console.log("The total meal cost before tax is: $", mealcost);
console.log("The HST amount is: $", hstamount);
console.log("The tip amount is: $", tipamount);
console.log("The total cost is: $", totalcost);
console.log("The cost per person is: $", costperperson);




