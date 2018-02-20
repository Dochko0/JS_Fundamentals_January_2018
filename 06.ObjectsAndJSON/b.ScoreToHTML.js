function score(strArr) {
    let arr = JSON.parse(strArr)
    let str = '<table>\n'
    let keys = Object.keys(arr[0])

    str +=  `  <tr><th>${escapeChar(keys[0]+'')}</th><th>${escapeChar(keys[1]+'')}</th></tr>\n`
    for (let obj of arr) {
        str += `  <tr><td>${escapeChar(obj[keys[0]]+'')}</td><td>${escapeChar(obj[keys[1]]+'')}</td></tr>\n`
    }
    str += '</table>'
    console.log(str)

    function escapeChar(strES) {
        return strES.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

score('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')