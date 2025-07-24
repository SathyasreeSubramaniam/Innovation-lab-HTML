let i= 1;
while (1 <= 20)
{
    console.log(i)
    i++;
}

//--d0 -while loop--//
let input;
do{
    input = prompt("Enter a number between 1 and 20 : ");
}
while (isNaN(input)|| input < 1||input > 20);
console.log("You entered: "+ input);

//--for loop--//
let N = 20;
let sum = 0;
for(let i = 1; i <= N; i++)
{
    sum += i;
}
console.log("Sum of first" + N +"natural numbers : "+sum);

//--Nested for loop--//
let N = 20;
for (let i = 1;i <= N; i++)
{
    let row = "";
for(let j = 1; j<= 10; j++)
{
    row += (i*j)+ "\t";
}
}
let N = 20;
for(let i = 1; i<= N;i++)
    {
    row += (i * j)+ "\t";
    }
    console.log(row);
)