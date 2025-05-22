let arr=[1,2,3,3,4,3];
function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===arr[i+1]) {
            arr.splice(i,1);
        }
    }
    return arr;
}
console.log(func(arr));
