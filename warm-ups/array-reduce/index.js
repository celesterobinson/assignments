function total(arr) {
    let totalSum = arr.reduce((total, currNum) => {
        return total + currNum;
    })

    return totalSum;
}

function stringConcat(arr) {
    let str = arr.reduce((currNum, total, i) => {
        return i === 0 ? total : currNum + "" + total;
    })
    return str;
}

function totalVotes(arr) {
    let count = 0;
    let voters = arr.forEach((person) => {
        if(person.voted) {
            count++;
        }
    })
    return count;
}

//or

// return arr.reduce((total, curr) => {
//     return curr.voted ? total + 1 : total;
// }, 0)



function shoppingSpree(arr) {
    return arr.reduce((total, currNum) => {
        return total = currNum.price + total;
    }, 0);
}

function flatten(arr) {
    return arr.reduce((total, curr) => {
        return [...total, ...curr];
    })
}

function voterResults(arr) {
    return arr.reduce((total, curr) => {
        if(curr.age < 26) {
            total.youth++;
            curr.voted ? total.youngVotes++ : null;
            return total;
        } else if (curr.age < 36){
            total.mids++;
            curr.voted ? total.midVotes++ : null;
            return total;
        } else if (curr.age < 56){
            total.olds++;
            curr.voted ? total.oldVotes++ : null;
            return total;
        } 
    }, {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0 
      });
}

module.exports = {
    total, 
    stringConcat, 
    totalVotes,
    shoppingSpree,
    flatten,
    voterResults,
}

