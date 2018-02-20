function solve(matrix1, arr) {
    let matrix=[
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            let num = Number(matrix1[row].split(' ')[col])
            matrix[row][col] = num
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let weather = arr[i].split(' ')[0]
        let target = Number(arr[i].split(' ')[1])
        if (weather === "breeze") {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    if (row === target) {
                        matrix[row][col] -= 15
                    }
                }
            }
        }
        if (weather === "gale") {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    if (col === target) {
                        matrix[row][col] -= 20
                    }
                }
            }
        }
        if (weather === "smog") {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    matrix[row][col] += target
                }
            }
        }
    }
    let result =""
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] >= 50) {
                result+=`[${row}-${col}], `
            }
        }
    }

    if (result!==""){
        result=result.trim().slice(0,-1)
        console.log(`Polluted areas: `+ result.trim())
    }else{
        console.log('No polluted areas')
    }
}

solve([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24"
    ],
    ["breeze 1", "gale 2", "smog 25"])
// solve([
//         [5, 7, 72, 14, 4],
//         [41, 35, 37, 27, 33],
//         [23, 16, 27, 42, 12],
//         [2, 20, 28, 39, 14],
//         [16, 34, 31, 10, 24]
//     ],
//     ["breeze 1", "gale 2", "smog 25"])
// solve([
//         [5, 7, 3, 28, 32],
//         [41, 12, 49, 30, 33],
//         [3, 16, 20, 42, 12],
//         [2, 20, 10, 39, 14],
//         [7, 34, 4, 27, 24]
//     ],
//     [  "smog 11", "gale 3", "breeze 1", "smog 2"
//     ])
// solve([
//         [5, 7, 2, 14, 4],
//         [21, 14, 2, 5, 3],
//         [3, 16, 7, 42, 12],
//         [2, 20, 8, 39, 14],
//         [7, 34, 1, 10, 24]
//     ],
//     ["breeze 1", "gale 2", "smog 35"])