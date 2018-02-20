function sencor(str, arr) {
    for (let obj of arr) {
        let regex = new RegExp(obj, 'g')
        let dash = '-'.repeat(obj.length)
        str=str.replace(regex, dash)
    }
    console.log(str)
}
sencor('roses are red, violets are blue', [', violets are', 'red'])