function solve(dataRows) {
    let uniqueSequencesMap = new Map()
    for (let dataRow of dataRows) {
        let numArr = JSON.parse(dataRow).map(Number).sort((a, b) => b - a)
        let currSum = numArr.reduce((a, b) => a + b)
        if (!uniqueSequencesMap.has(currSum)) {
            uniqueSequencesMap.set(currSum,numArr)
        }
    }
    let sortedMap = [...uniqueSequencesMap.entries()].sort(sortByLenght)
    for (let [sum, arr] of sortedMap) {
        console.log(`[${arr.join(', ')}]`)
    }
    function sortByLenght(a,b) {
        let aLen = a[1].length
        let bLen = b[1].length
        return aLen-bLen

    }
    // function sortByDescending(a, b) {
    //     return b - a
    // }
}

solve([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
])
