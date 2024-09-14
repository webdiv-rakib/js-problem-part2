const jim = 56;
const tim = 89;
const kim = 68;
if (jim > tim && jim > kim) {
    console.log("Jim is the ultimate boss");
}
else if (tim > jim && tim > kim) {
    console.log('Time is the ultimate boss');
}
else {
    console.log('Kim is the ultimate boss');
}
// Inside function
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return ("Num1 is pro max");
    }
    else if (num2 > num1 && num2 > num3) {
        return ("Num2 is pro max");
    }
    else {
        return ("Num3 is pro max");
    }
}
const numbers = maxOfThree(45, 50, 65);
console.log(numbers);