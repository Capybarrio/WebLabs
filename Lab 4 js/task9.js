const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function analyzeNumber(n) {
    console.log(n > 0 ? "Позитивне" : "Негативне");

    let isPrime = n > 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? "Просте число" : "Складене число");

    [2, 3, 5, 6, 9].forEach(divisor => {
        console.log(`Ділиться на ${divisor}:`, n % divisor === 0);
    });
}

rl.question("Введіть число: ", function(userNumber) {
    userNumber = parseInt(userNumber);
    analyzeNumber(userNumber);
    rl.close();
});
