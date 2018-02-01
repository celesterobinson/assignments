let database = [
    { a: 1, b: 1, c: 2 },
    { a: 0, b: 0, c: 2 },
    { a: 0, b: 1, c: 0 },
    { a: 1, b: 2, c: 2 }
];

let queryObj = {
    b: 1
}

let filterDatabase = (query, database) => {
    return database.filter(resource => {
        for(let key in query) {
            if(query[key] !== resource[key]) {
                return false;
            }
        }
        return true;
    })
}

console.log(filterDatabase(queryObj, database));