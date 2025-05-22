let arr=[23,43,12,56,64];
let max=Math.max(...arr);
let min=Math.min(...arr);
function func(arr) {
    minIndex=arr.indexOf(min);
    maxIndex=arr.indexOf(max);
    let temp=arr[minIndex];
    arr[minIndex]=arr[maxIndex];
    arr[maxIndex]=temp
    return arr;
}
console.log(func(arr));

