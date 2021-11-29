var num1 = Number(prompt("first number:.."))
var num2 = Number(prompt("second number:.."))

if (num1 % 2 === 0){
    while (num1 < num2){
        console.log(num1)
        num1 += 2;
    }
} else {
    num1++ 
    while (num1 < num2){
        console.log(num1)
        num1 += 2;
    }
}
