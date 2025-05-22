let arr=[2,55,2,21,44,3];
let toq=arr.some(son=>son%2==0);
if (toq==true) {
    let toq;
    function oxirgitoq() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]%2==1) {
                toq=arr[i];
            }
        }
    }
    console.log(oxirgitoq(arr));
    console.log(toq);
    function func() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]%2==1) {
                arr[i]+=toq;
            }
        }
        return arr;
    }
    console.log(func(arr));
    
}
else{
    console.log(arr);
}