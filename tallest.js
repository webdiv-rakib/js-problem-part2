// tallest
const heights = [65, 66, 72, 84, 60, 56, 73];
function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const max = getMax(heights);
console.log("Max Value is:", max);

// smallest
const smallest = [84, 55, 42, 98, 35, 24, 87];

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        console.log(num);
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const min = getMin(smallest);
console.log("Smallest value is:", min);