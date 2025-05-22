let arr=[1,4,5,2,33,1,8,22];
let juft=arr.some(son=>son%2==0);
if (juft==true) {
    let juft;
    function birinchijuft() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]%2==0) {
                juft=arr[i];
                break;
            }
        }
    }
    console.log(birinchijuft(arr));
    console.log(juft);
    function func() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]%2==0) {
                arr[i]+=juft;
            }
        }
        return arr;
    }
    console.log(func(arr));
    
}
else{
    console.log(arr);
}