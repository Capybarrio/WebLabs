function analyzeArray(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = arr.reduce((acc, val) => acc + val, 0);
    let avg = sum / arr.length;
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    
    console.log("Максимальне значення:", max);
    console.log("Мінімальне значення:", min);
    console.log("Сума елементів:", sum);
    console.log("Середнє арифметичне:", avg);
    console.log("Непарні значення:", oddNumbers);
}

const arr = [10, 25, 3, 8, 50, 7, 12];
analyzeArray(arr);
