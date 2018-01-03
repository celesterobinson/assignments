let multiplicationTable = (size) => {
    let table = [];

    for (let i = 1; i < size + 1; i++) {
        let row = [];
        for (let j = 1; j < 11; j++) {
            row.push(j * i);
        }
        table.push(row);
    }
    return table;
}

console.log(multiplicationTable(10));

