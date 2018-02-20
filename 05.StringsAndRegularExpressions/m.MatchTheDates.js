function matchDate(arr) {
 let regex =/\b([0-9]{1,2})-([A-Z][a-z]{2,2})-([0-9]{4,4})/gm
    let match = regex.exec(arr)
    while (match){
        //for (let i = 0; i < ma.length; i++) {
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})` )
            match = regex.exec(arr)
        //}
    }


    //arr.match(regex).forEach(d=>{console.log()})
}

matchDate('I am born on 30-Dec-1994.\n' +
    'This is not date: 512-Jan-1996.\n' +
    'My father is born on the 29-Jul-1955.\n')