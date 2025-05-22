let arr=[21,43,11,45,4,32,54];
// console.log(arr[0]+arr[0+1]);
let num=[null,null];
let minlength=Infinity;
function func(arr,r) {
    for (let i = 0; i < arr.length; i++) {
        let count=arr[i]+arr[i+1];
        let a=Math.abs(r-count);
        if (minlength>a) {
            minlength=a;
            num=[arr[i],arr[i+1]];
        }
    }
    return num;
}
console.log(func(arr,35));
