function countWord(arr) {
    let result = {}
    for (let str of arr) {
        let currWords = str.split(/[^0-9a-zA-Z_]+/).filter(a=>a!=='')
        for (let w of currWords) {
            if(result.hasOwnProperty(w)){
                result[w]++
            }else{
                result[w]=1
            }
        }
    }
    console.log(JSON.stringify(result))
}

countWord(['JS devs use Node.js for server-side JS.-- JS for devs'])