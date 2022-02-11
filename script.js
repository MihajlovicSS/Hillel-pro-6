function removeDuplicates(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])) newArr.push(arr[i]);
    }
    return newArr;
}
console.log(removeDuplicates([1, 2, 3, 2, 2, 3, 1, 5, 9, 7, 7]));
// [1, 2, 3, 5, 9, 7]

/* function reverseString(str) {
    let newString = '';
    for(let i = str.length-1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
} */
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString('laptop')); // potpal

function createMatrix(n, m) {
    let current = 1;
    let result = [];
    for (let i = 0; i < n; i++){
        result.push([]);
        for (let j = 0; j < m; j++){
            result[i].push(current++);
        }
    }
    return result;
}
console.log(createMatrix(5, 6));
/*[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]*/
