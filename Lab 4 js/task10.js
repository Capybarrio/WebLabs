const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function transformArray(arr) {
    return arr.reverse().map(el => (typeof el === "number" ? el ** 2 : el));
}

rl.question("Введіть елементи масиву через кому (наприклад: 1, hello, 3): ", function(input) {
    const arr = input.split(",").map(item => {
        // Преобразуємо числа в числа, а інші елементи залишаємо як є
        return isNaN(item.trim()) ? item.trim() : Number(item.trim());
    });

    console.log(transformArray(arr));
    rl.close();
});
