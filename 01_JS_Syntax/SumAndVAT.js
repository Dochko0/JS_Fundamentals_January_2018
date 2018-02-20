function calcSum(number) {
    let sum =0;
    for (let i = 0; i < number.length; i++) {
        sum+=number[i];
    }

    console.log("Sum = "+sum);
    console.log("VAT = "+sum*0.2);
    console.log("total = "+sum*1.2);
}
calcSum([1.20, 2.60, 3.50]);