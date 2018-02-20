function expression(str) {
    let regex = /[,;().\s]+/
    str.split(regex).forEach(s=>console.log(s))
}
expression('let sum = 4 * 4,b = "wow";')