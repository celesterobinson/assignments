const multiD1 = [[true, true, true],[true, true, true],[true, true, true]];

function checkTypes(arr) {
    let initial = arr[0][0]
    return arr.every(subArr => 
        subArr.every(value => 
            typeof (value) === typeof (initial)
        )
    )
}

console.log(checkTypes(multiD1));



