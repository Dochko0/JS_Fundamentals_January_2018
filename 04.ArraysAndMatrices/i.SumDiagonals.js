function sumDiagonals(matrix) {
    // let normalDiagonal=0
    // let secondDiagonal = 0
    //
    // for (let row = 0; row < matrix.length; row++) {
    //     for (let col = 0; col < matrix[row].length; col++) {
    //         if(row===col) {
    //             normalDiagonal += matrix[row][col]
    //             secondDiagonal+= matrix[row][matrix.length-1-row]
    //         }
    //
    //     }
    // }
    // console.log(normalDiagonal+ " "+ secondDiagonal)

    //----------------------------------------------------------------------

    let normalDiagonal=0
    let secondDiagonal = 0
    for (let row = 0; row < matrix.length; row++) {
                normalDiagonal += matrix[row][row]
                secondDiagonal+= matrix[row][matrix.length-1-row]
    }
    console.log(normalDiagonal+ " "+ secondDiagonal)
}

sumDiagonals([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)