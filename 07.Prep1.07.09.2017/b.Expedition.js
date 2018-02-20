function expedition(primaryMatrix, secondaryMatrix, targetsCoordinates, startCoordinates) {
    let steps = 1
    for (let coordinate of targetsCoordinates) {
        modifyPrimaryMatrix(coordinate)
    }
    let currRow = startCoordinates[0]
    let currCol = startCoordinates[1]
    let prewiousDitection
    while (true) {
        if (currRow + 1 < primaryMatrix.length && primaryMatrix[currRow + 1][currCol] === 0 && prewiousDitection !== 'up') {
            prewiousDitection = 'down'
            currRow++
        } else if (currCol + 1 < primaryMatrix[0].length && primaryMatrix[currRow][currCol + 1] === 0 && prewiousDitection !== 'left') {
            prewiousDitection = 'right'
            currCol++
        } else if (currRow - 1 >= 0 && primaryMatrix[currRow - 1][currCol] === 0 && prewiousDitection !== 'down') {
            prewiousDitection = 'up'
            currRow--
        } else if (currCol - 1 >= 0 && primaryMatrix[currRow][currCol - 1] === 0 && prewiousDitection !== 'right') {
            prewiousDitection = 'left'
            currCol--
        } else {
            break
        }
        steps++
    }
    console.log(steps)
    definePosition(currRow,currCol)

    function modifyPrimaryMatrix([targetRow, targetCol]) {
        for (let row = 0; row < secondaryMatrix.length; row++) {
            if(primaryMatrix[targetRow+row]!==undefined){
                for (let col = 0; col < secondaryMatrix[0].length; col++) {
                    if(secondaryMatrix[row][col]===1 && primaryMatrix[targetRow+row][targetCol+col]!==undefined){
                        primaryMatrix[targetRow+row][targetCol+col]=
                            primaryMatrix[targetRow+row][targetCol+col]===1?0:1
                    }
                }
            }
        }
    }

    function definePosition(endRow, endCol) {
        let output = ''
        if (endRow === 0) {
            output = 'Top'
        } else if (endCol === 0) {
            output = 'Left'
        } else if (endRow === primaryMatrix.length - 1) {
            output = 'Bottom'
        } else if (endRow === primaryMatrix[0].length - 1) {
            output = 'Right'
        } else if (endRow < primaryMatrix.length / 2 && endCol >= primaryMatrix[0].length / 2) {
            output = 'Dead end 1'
        } else if (endRow < primaryMatrix.length / 2 && endCol < primaryMatrix[0].length / 2) {
            output = 'Dead end 2'
        } else if (endRow >= primaryMatrix.length / 2 && endCol < primaryMatrix[0].length / 2) {
            output = 'Dead end 3'
        } else if (endRow >= primaryMatrix.length / 2 && endCol >= primaryMatrix[0].length / 2) {
            output = 'Dead end 4'
        }
        console.log(output)
    }
}