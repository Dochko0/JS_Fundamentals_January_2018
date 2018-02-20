let obj = {
    obj1: {value: 3},
    obj2: {value: 1},
    obj3: {value: 2},
    obj4: {value: 5},
    obj5: {value: 4},
}

//-------->>> Long try <<<-----------

// let arrKeys = Object.keys(obj).sort(function (w,v) {
//     if(obj[w].value>obj[v].value){
//         return 1
//     } else if(obj[v].value>obj[w].value){
//         return -1
//     }else{
//         return 0
//     }
// }).forEach(key=>console.log(key+' -> '+JSON.stringify(obj[key])))


//-------->>> Short try <<<-----------

let arrKeys = Object.keys(obj).sort((w,v) => obj[w].value - obj[v].value)
    .forEach(key=>console.log(key+' -> '+JSON.stringify(obj[key])))


