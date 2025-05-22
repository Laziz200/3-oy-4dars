let arr=[1,2,3,4,5,6];
function func(arr,k) {
    if (k<0||k>=arr.length) {
        return arr;
    }else{
        for (let i = 0; i < arr.length; i++) {
            if (i==k) {
                arr.splice(k,1);
            }
        }
    }
    return arr;
}
console.log(func(arr,2));
