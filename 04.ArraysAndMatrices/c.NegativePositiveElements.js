function negativePositiveNumbers(arr) {
    let result=[];
    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i]);
        if(n<0){
            result.unshift(n);
        }else{
            result.push(n)
        }
    }
    return result.join("\n")
}

console.log(negativePositiveNumbers([3, -2, 0, -1]));