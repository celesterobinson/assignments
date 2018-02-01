function combined(arr) {
    //declare first three indices as the longest
    let longest = arr[0] + "," + arr[1] + "," + arr[2];
    for (let i = 0; i < arr.length - 2; i++) {
        let next = arr[i] + "," + arr[i + 1] + "," + arr[i + 2];
        if (next.length > longest.length) {
            console.log(next);
            longest = next;
        }
    }
    return longest.split(',');
}

console.log(combined(["to", "if", "love", "crusty", "be"]));