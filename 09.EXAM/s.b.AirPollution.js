function airPollution(sofia, events) {
    sofia = sofia.map(row => row.split(' ').map(Number));
    for (let event of events) {
        let [type, direction] = event.split(' ');
        direction = Number(direction);
        switch (type) {
            case "breeze":
                sofia[direction] = sofia[direction].map(num => num -= 15);
                break;
            case "gale":
                let galeRow = 0;
                for (let i = 0; i < sofia.length; i++) {
                    sofia[galeRow][direction] -= 20;
                    galeRow++;
                }
                break;
            case "smog":
                sofia = sofia.map(row => row.map(num => num < 0 ? num = 0 : num));
                sofia = sofia.map(row => row.map(num => num += direction));
                break;
        }
    }
    let output = [];
    for (let row = 0; row < sofia.length; row++) {
        for (let col = 0; col < sofia[row].length; col++) {
            if (sofia[row][col] >= 50) {
                output.push(`[${row}-${col}]`)
            }
        }
    }
    output.length > 0 ? console.log(`Polluted areas: ${output.join(', ')}`) : console.log('No polluted areas');
}

airPollution([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24"
    ],
    ["breeze 1", "gale 2", "smog 25"])