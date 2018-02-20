function matrixMaxNum(matrix) {
   console.log(matrix.map(arr => arr.sort((a, b) => a < b)[0]).sort((a,b)=>a < b)[0]);

//-----------------------------------------------------------------------------------

   //  let biggestNum = Number.NEGATIVE_INFINITY
   // matrix.forEach(r => r.forEach(c => biggestNum = Math.max(biggestNum, c)));
   //  console.log(biggestNum)

    //-------------------------------------------------

    // let biggestNum = Number.NEGATIVE_INFINITY
    // for (let row = 0; row < matrix.length; row++) {
    //     for (let col = 0; col < matrix[row].length; col++) {
    //        if(matrix[row][col]>biggestNum){
    //            biggestNum=matrix[row][col]
    //        }
    //     }
    // }
    // console.log(biggestNum)
//-------------------------------------------------------

}

matrixMaxNum([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])