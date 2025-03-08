let b = 1000;
let count = 0;

while (b >= 5) {
    b /= 3;
    count++;
}

let res = b;

console.log("Результат ділення:", res);
console.log("Кількість ітерацій:", count);