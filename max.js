const disha = 56;
const salman = 95;
if (disha > salman) {
    console.log("Disha will get the strabetty");
}
else {
    console.log("Salman will get the strawberry");
}
// Inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
const max = getMax(5, 7);
console.log('max of two is:', max);