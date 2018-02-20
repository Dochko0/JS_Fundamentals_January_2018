function countWordsInMap(arr) {
    let myMap = new Map()
    for (let str of arr) {
        let currWords = str.split(/[^0-9a-zA-Z_]+/).filter(a => a !== '')
        for (let w of currWords) {
            w=w.toLowerCase()
            if (myMap.has(w)) {
                myMap.set(w, myMap.get(w) + 1)
            } else {
                myMap.set(w, 1)
            }
        }
    }
    let sortedKeys =Array.from(myMap.keys()).sort((a,b)=>a.localeCompare(b))
    //console.log(JSON.stringify([...myMap]))
    for (let key of sortedKeys) {
        console.log("'" + key + "'" + ' -> ' + myMap.get(key) + ' times')
    }
    //console.log(JSON.stringify([...myMap]))
}

countWordsInMap(['Far too slow, you\'re far too slow.'])