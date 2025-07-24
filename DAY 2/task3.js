//--stop at the first prime number found--//
function isprime(num){
if (num <= 1) return false;
for (let 1 = 2; i<= Math.sqrt(num);i++ )
{
    if (num % 1=== 0) return false;
}
return true;
}

let num = 1;
while(true){
{
    console.log(First prime number found : ${num});
    break;
}
num++;
}

//Example: print only odd numbers between 1 and 20
for (let i = 1;i <= 20; i++)
{
    if (i % 2===0){
        continue;
    }
    console.log(i);
}
