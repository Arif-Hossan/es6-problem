// concat two array and find the max value

let array1= [10,20,30,40];
let array2=[5,6,8,9];

let findMaximum= (firstArray,secondArray)=>{
    let newArray= [...firstArray].concat([...secondArray]);
    let max=Math.max(...newArray);
    return max;

}

let result= findMaximum(array1,array2);
console.log(result);