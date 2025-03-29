// Варіант з if
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}

// Варіант з тернарним оператором
function isDivisibleTernary(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}

// Варіант без if і тернарного оператора
function isDivisibleNoIf(n, x, y) {
    return !(n % x || n % y);
}

console.log(isDivisible(10, 2, 5)); // true
console.log(isDivisibleTernary(10, 2, 5)); // true
console.log(isDivisibleNoIf(10, 2, 5)); // true
