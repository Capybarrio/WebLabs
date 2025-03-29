function removeDuplicates(arr) {
    return [...new Set(arr)]; // створює множину (Set), яка автоматично видаляє дублікати
}


const inputArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
const result = removeDuplicates(inputArray);

console.log(result); 
