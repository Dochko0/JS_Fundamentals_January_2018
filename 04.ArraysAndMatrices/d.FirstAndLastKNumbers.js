function firstAndLastKNumbers(arr) {
    let num = Number(arr.shift());
    console.log(arr.slice(0, num));
    console.log(arr.slice(arr.length - num));
}

firstAndLastKNumbers([3, -2,3,-4,5]);