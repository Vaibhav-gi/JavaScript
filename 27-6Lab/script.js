// Que 1) Write a program that prints characters and their ASCII values between two ASCII codes (e.g., 65 to 90 for A–Z) using a for loop.

// Sample Input:
// =============

// 	Start: 65
// 	End: 70

// Sample Output:
// =============
// 	A = 65
// 	B = 66
// 	C = 67
// 	D = 68
// 	E = 69
// 	F = 70

// JavaScript Program :
// let start = 65;
// let end = 70;

// for(let i=start; i<=end;i++)
// {
//     console.log(String.fromCharCode(i) + " = "+ i );
// }


// Que 2) Take a range from the user and print all numbers divisible by 7 using a for loop.

// Sample Input:
// ==============
// 	Start: 1
// 	End: 50

// Sample Output:
// ==============

// 	7, 14, 21, 28, 35, 42, 49

// JavaScript Program:

// let Start = 1;
// let End = 50;

// for(let i = Start; i<=End; i++)
// {
//     if(i % 7==0)
//         console.log(i);
// }



// Que 3) Write a JavaScript program that asks the user to enter a digit count (1, 2, 3,...). Based on the input, the program should print all prime numbers that have exactly that many digits.

// If the user enters 1, print all 1-digit prime numbers (i.e., from 1 to 9).

// If the user enters 2, print all 2-digit prime numbers (i.e., from 10 to 99).

// If the user enters 3, print all 3-digit prime numbers (i.e., from 100 to 999).


// Sample Input:
// =============
// 	digit_count: 1


// Sample Output:
// ==============
// 	1-digit prime numbers:

// 	2
// 	3
// 	5
// 	7

// Sample Input:
// =============
// 	num: 2


// Sample Output:
// ==============
// 	2-digit prime numbers:

// 	11
// 	13
// 	17
// 	19
// 	23
// 	...
// 	97

// let n = +prompt("Enter number");
// let a=0, b=0;

// if(n==1){
//     a=1;
//     b=9;
// }
//  if(n==2)
// {
//     a=10;
//     b=99;
// }
// if(n==3)
// {
//     a=100;
//     b=999;
// }

//     for(let i=0;i<b;i++){
//         let a = i;
//         let c = 0;
//         for(let j=1;j<=a;j++)
//         {
//             if(a%j==0)
//             {
//                 c++;
//             }
//         }
//         if(c==2){
//             console.log(i)
//         }
//     }

// Que 4) Take two numbers from the user and calculate the factorial of each number from start to end using nested for loops.
// Sample Input:
// ============
// 	Start: 3
// 	End: 5

// Sample Output:
// =============
// 	Factorial of 3 = 6
// 	Factorial of 4 = 24
// 	Factorial of 5 = 120

// JavaScript Program :
let start = 3;
let end = 5;
let fact = 1;
for(let i=start; i<=end; i++)
    {
    fact = fact *i;
    console.log(`Factorial of ${i} = ${fact*2}`);
}
// console.log(fact)

// Que 5) Write a JavaScript program that takes two numbers as input (start and end of range) and prints all Armstrong numbers between them using a for loop.
// An Armstrong number is a number that is equal to the sum of the cubes (or powers) of its digits.

// Sample Input:
// ============
// 	Start: 100
// 	End: 999

// Sample Output:
// =============
// 	Armstrong numbers: 153, 370, 371, 407

