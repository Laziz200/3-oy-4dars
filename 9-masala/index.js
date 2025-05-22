let arr = [1, 2, 3, 3, 4, 3, 4, 5, 2, 4, 4];

function func(arr) {
    let countMap = {};
    for (let num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }
    
    return arr.filter(num => countMap[num] >= 3);
}

console.log(func(arr)); 