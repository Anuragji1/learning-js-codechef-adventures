Statement) Write a JavaScript code for printing all even numbers from 10 to 20.

-------------------------------------
SOLUTION = /* Solution as follows */ 
const start = 10;
const end = 20;

for (var i = start; i <= end; i++) {
    if (i%2 === 0){
        console.log(i);
    }
}

----------------------
Your Output
10
12
14
16
18
20
