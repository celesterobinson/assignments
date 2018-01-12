let twoSum = (arr, n) => {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum === n) {
                output.push(i, j);
            } else {
                output = "There are no matches.";
            }
            return output;
        }
    }
}

console.log(twoSum([2, 3, 4, 5, 6, 7, 8, 9], 20));