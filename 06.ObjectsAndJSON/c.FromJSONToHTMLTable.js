function jsonToHTML(strArr) {
    let arr = JSON.parse(strArr)
    let str = '<table>\n'
    str+= '  <tr>'
    let keys = Object.keys(arr[0])
    for (let key of keys) {
        str += `<th>${key}</th>`
    }
    str+= '</tr>\n'
    for (let obj of arr) {
        str += `  <tr>`
        for (let i = 0; i < keys.length; i++) {
            str+=  `<td>${escapeChar(obj[keys[i]]+'')}</td>`
        }
        str+= '</tr>\n'
    }
    str+='</table>'
    console.log(str)




    function escapeChar(strES) {
        return strES.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}
jsonToHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')