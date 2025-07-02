// Que 1 : (Using ternary operator) write a JavaScript program for a bookstore named "Book World" that calculates the discounted amount based on the total purchase amount. 
// ------

// The store provides three types of discounts to its customers:
// -> If the total purchase amount is less than Rs. 1000, there is no discount.
// -> If the total purchase amount is between Rs. 1000 and Rs. 5000 (inclusive), customers get a 5% discount on the total purchase amount.
// -> If the total purchase amount is greater than Rs. 5000, customers get a 10% discount on the total purchase amount.

// Sample input  : purchase amount = 999
// Sample output : total amount = 999

// Sample input  : purchase amount = 2000
// Sample output : total amount including 5% discount = 1900

// Sample input  : purchase amount = 10000
// Sample output : total amount including 10% discount = 9000

// Note : Take the input from the user using prompt() function.

// JavaSCript Program :
//let amount = parseInt(prompt("enter the number :"));

// let dis5 = amount*5/100;
// let fivepercent = amount - dis5;

// let dis10 = amount*10/100;
// let tenpercent = amount- dis10

// console.log(
// ((amount<1000)?"no discount":(amount>=1000 && amount<=5000)?fivepercent :(amount>5000 && amount <=10000)?tenpercent:""))


// Que 2 : Develop a program for an online bus ticket booking platform called "Bus Ticket Booker."
// ------  The platform offers tickets for a fixed price of Rs. 300 per seat. However, there are discounts available for senior citizens.
//         If a passenger's age is between 60 and 100 (inclusive), they will receive a 20% discount on the total booking cost.

//         Write a JavaScript program for "Bus Ticket Booker" that takes the number of tickets and the age of the passenger as inputs and calculates the total booking cost after applying any 	applicable discount using the ternary operator. The program should display the bill with a suitable message, including the total cost and the discount amount (if applicable).

//         Your task is to implement the program logic using only Ternary Operator.


// Example 1: Passenger is not a senior citizen
// Sample Input:
//               number of tickets: 3
//               age of the passenger: 45

// Sample Output:
//               Total cost before discount: Rs. 900.00
//               Discount amount: Rs. 0.00
//               Total cost after discount: Rs. 900.00

// JavaScript Program:
// const amount = 300;
// let tickets = 3;
// let age = 50;
// let discount = (amount * tickets) * 0.20;

// (age >= 60)?console.log(`Total cost before discount : Rs. ${amount*tickets} \nDiscount amount : Rs ${discount} \nTotal cost after discount : Rs. ${(amount * tickets)-discount}`):console.log(`Total cost before discount : Rs. ${amount*tickets} \nDiscount amount : Rs : 0.00 \nTotal cost after discount : Rs. ${(amount * tickets)}`);


// Que 3 : Write a C program that takes an integer as input and checks if it is a positive, negative, or zero. 
// ------- Display the appropriate message as output using the ternary operator.
    

// 	Sample Input: 
//       		enter a number: -1
             

// 	Sample Output:
// 		you entered negative number


// 	Sample Input: 
//              	enter a number: 1

// 	Sample Output:
// 		you entered positive number

// 	Sample Input: 
//               	enter a number: 0

// 	Sample Output:
// 		you entered zero

// Note : Take the input from the user using prompt() function.   


// JavaScript Program :
// let number = 0;
// console.log(number > 0 ? 'you entered positive number' : number < 0 ? 'you entered negative number' : 'you entered zero');


// ========================================================================================================       



// Que 4 :  Write a 'JavaScript' program to check and print the Maximum number among three numbers using ternary operator.
// --------

// Sample input : let a = 10 , b = 200, c = 134;
// Sample Output : MAX = 200

// Note : Take the input from the user using prompt() function.

// JavaScript Program :
// let a,b,c;
// a=+prompt();
// b=+prompt();
// c=+prompt();
// let Max = a > b && a > c ? a : b > c && b > a ? b : c 
// console.log(`MAX = ${Max}`)
// ========================================================================================================  

// Que 5 :  Write a 'JavaScript' program to check and print that given number is even or odd using ternary operator.
// --------

// Sample input : let a = 10
// Sample Output : EVEN

// Sample input : let a = 125
// Sample Output : ODD

// Note : Take the input from the user using prompt() function.

let a = +prompt();
console.log(a%2 == 0 ? "EVEN" : "ODD");

// ========================================================================================================

// Que 6 : A shopkeeper buys a TV set for Rs. 3500 and sells it at a profit of 27%. Apart from this a VAT of 12.7% and Service Charge is 3.87% is charged. 
// -------  Write a JavaScript program to Display total selling price, profit along with vat and service charge.
//          To calculate the selling price, profit, VAT, and service charge, follow these steps:

//          1) Calculate the selling price:
//             Selling Price = Cost Price + Profit
//             Selling Price = Rs. 3500 + (27% of Rs. 3500)


//          2) Calculate the profit:
//             Profit = Selling Price - Cost Price

//          3) Calculate VAT:
//             VAT = 12.7% of Selling Price

//          4) Calculate Service Charge:
//             Service Charge = 3.87% of Selling Price

// 	Sample output : 
// 			Cost Price: Rs. 3500.00
// 			Profit (27%): Rs. 945.00
// 			Selling Price (without VAT & Service Charge): Rs. 4445.00
// 			VAT (12.7%): Rs. 564.52
// 			Service Charge (3.87%): Rs. 171.00
// 			Total Selling Price (with VAT & Service Charge): Rs. 5180.52

// JavaScript Program :
let costPrice = 3500.00
let profit = costprice * 0.27;
let sellingPrice = costprice + profit;
let totalSellingPrice = costPrice + profit + 12.7 % + 3.87%;
console.log("Cost Price : Rs. \n"+costPrice "Profit (27%): Rs.  \n"+profit "Selling Price (without VAT & Service Charge): Rs. 4445.00" );

