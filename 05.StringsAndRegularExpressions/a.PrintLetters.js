function printCaracters(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(`str[${i}]` +" -> " + str[i])
    }

   // console.log(str.split('').forEach((str, i) => `str${i}` + " -> " + str[i]));

}
printCaracters('Hello, World!')