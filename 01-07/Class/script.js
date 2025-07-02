//1.
// JavaScript Program :
// for(let i=1;i<8;i++)
// console.log(Math.ceil(Math.random()*1000000000));

//2.
// for(let i=1;i<=100;i++)
// {
//     if(i%3==0)
//     {
//         console.log("foo");
//     }
//     else if(i%5==0)
//     {
//         console.log("zoo");
//     }
//     else if(i%3==0 && i%5 ==0)
//     {
//         console.log("foozoo");
//     }
//     else
//     {
//         console.log(i);
//     }
// }


//3.

// for(let i=20;i>=1;i--)
// {
//     if(i%2==0)
//     {
//         console.log(`${i}`);
//     }
// }

//Q.4 Write a JS code to print following pattern
    // 1
    // 1  2
    // 1  2  3
    // 1  2  3  4
for(let r=1;r<=4;r++)
{
     str = ''
    for(let c=1;c<=r;c++)
    {
        str = str + c + " ";
    }
    console.log(str);
}

//Q.5 Write JS code to fibanocci upto 100 (starting values are 0 and 1)
let a=0,b=0,c=1;
for(let i=1;i<=100;i++)
{
    console.log(b)
    a=b;
    b=c;
    c=a+b;
}
