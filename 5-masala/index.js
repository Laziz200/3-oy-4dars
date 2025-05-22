let arr=[2,54,4,11,1,34,11];
let max=Math.max(...arr);
let min=Math.min(...arr);
function func(arr) {
    let maxIndex=arr.indexOf(max);
    let minIndex=arr.indexOf(min);
    for (let i = maxIndex+1; i < minIndex; i++) {
        arr[i]=0;
    }
    return arr;
}
console.log(func(arr));
