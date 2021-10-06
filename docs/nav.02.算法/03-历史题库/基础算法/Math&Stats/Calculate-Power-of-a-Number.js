/**
 * Given a double, 'x', and an integer, 'n', write a function to calculate 'x' raised to the power 'n'.
 */

// Divide and Conquer
// recursive call

let powerRec = function (x, n) {
    if (n === 0) {
        return 1
    }

    let temp = powerRec(x, Math.floor(n / 2))
    if (n % 2 === 0) {
        return temp * temp
    } else {
        return temp * temp * x
    }
};

let power = function (x, n) {
    let isNegative = false
    if (n <= 0) {
        isNegative = true
        n *= -1
    }

    let result = powerRec(x, n)
    if (isNegative) {
        return 1 / result
    }
    return result
};

console.log("Power(0, 0) = " + power(0, 0));
console.log("Power(2, 5) = " + power(2, 5));
console.log("Power(3, 4) = " + power(3, 4));
console.log("Power(1.5, 3) = " + power(1.5, 3));
console.log("Power(2, -2) = " + power(2, -2));