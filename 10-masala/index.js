let arr=[1,2,3,4,5,6,7,8,9];
function func(arr) {
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0) {
            count+=i;
        }
    }
    return count;
}
console.log(func(arr));
