function printTriangle(counts) {
    for (let i = 1; i <= counts; i++) {
        printStars(i)
    }
    for (let i = counts-1; i > 0; i--) {
        printStars(i)
    }
    function printStars(n) {
        console.log("*".repeat(n).trim())
    }
}
printTriangle(10)
