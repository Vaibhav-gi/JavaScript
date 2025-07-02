// // 1.
// console.log("Hello World!!");

// //2.
// let a= 2; //number
// let b=2.3; //number
// let c="Vaibhav"; //string
// let d='P'; //string
// let e; //undefined
// let f=null; //object
// let g=NaN; //number
// let h=true; //boolean
// let i = [1,2,3]; //object
// let j=()=>{} //function
// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h, typeof i, typeof j);

// //3.
// let num1=25;
// let num2=50;

// console.log(Math.abs(num1));//absolute num1 = 25
// console.log(Math.sqrt(num2));//square root num2 = 7.071
// console.log(Math.cbrt(8));//2
// console.log(Math.max(1,2,3,4));// 4
// console.log(Math.min(5,6,3,6));//3
// console.log(Math.ceil(135.76));//136 ->round of (gives next number)
// console.log(Math.round(4.3));//4
// console.log(Math.floor(3.9));//3
// console.log(Math.random()*10);// gives random 1 digit number

// //4
// let name = "vaibhav"
// console.log(name.toUpperCase()); //VAIBHAV
// let string = "PAWAR" 
// console.log(string.toLowerCase());//pawar
// let m ="prasaaaad";
// console.log(m.indexOf('a'));//2
// let n = "maheaandrb";
// console.log(n.lastIndexOf('a'));//5
// let o = "Rajendra";
// console.log(o.charAt(2));//j
// let p = "AkashPawar";
// console.log(p.split("h"))//'Akas', 'Pawar'
// let q = "RadheShyam"
// let r = "Mohan"
// console.log(q.concat(r));//RadheShyamMohan (Connects both strings)
// let s = "xerox"
// console.log(s.slice(2,4)); //


// //5 
// let year = 2024;
// if ((year % 4 == 0) || ((year % 400 == 0) && (year % 100 != 0))) 
// {
// console.log("Leap Year");
// }
// else{
//     console.log("Not Leap Year");
// }

// //6
// let number1 = +prompt();
// let number2 = +prompt();
// let result = prompt("Enter your operation");
// switch(result)
// {
//     case '+' : console.log(number1 + number2);break;
//     case '-' : console.log(number1 - number2);break;
//     case '*' : console.log(number1 * number2);break;
//     case '/' : console.log(number1 / number2);break;
// }

//7
let val=1;
let a = Math.ceil(Math.random()*13)
let b = Math.ceil(Math.random()*13)
let c = Math.ceil(Math.random()*13)

if(a==b && a==c && c==b){
    console.log("You won");
}else{
    console.log("You Lose");
}

if(a==1){
    console.log('A');
}else if(a==11){
    console.log('k');    
}else if(a==12){
    console.log('Q');
}else if(a==13){
    console.log('J');
}else{
   console.log(a);
}
if(b==1){
    console.log('A');
}else if(b==11){
    console.log('k');    
}else if(b==12){
    console.log('Q');
}else if(b==13){
    console.log('J');
}else{
   console.log(b);
}
if(c==1){
    console.log('A');
}else if(c==11){
    console.log('k');    
}else if(c==12){
    console.log('Q');
}else if(c==13){
    console.log('J');
}else{
   console.log(c);
}