function extract(str) {
    let result = []
    while(true) {
        let start = str.indexOf('(')
        if (start < 0){
            break
        }
        let end = str.indexOf(')')
        if (end < 0 || end<start){
            break
        }
        result.push(str.substring(start+1,end))
        str = str.substring(end+1)
    }
    console.log(result.join(', '));
}
extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')