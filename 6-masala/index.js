let arr=[2,54,4,11,1,34,11];
let max=Math.max(...arr);
let min=Math.min(...arr);
function func(arr) {
    let maxIndex=arr.indexOf(max);
    let minIndex=arr.indexOf(min);
    let rev=arr.slice(maxIndex+1,minIndex).reverse();
    arr.splice(maxIndex+1,minIndex-maxIndex-1,...rev);
    return arr;
}
console.log(func(arr));
