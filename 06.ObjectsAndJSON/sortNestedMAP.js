let myMap = new Map([
    ['obj1', {value: 3}],
    ['obj2', {value: 1}],
    ['obj3', {value: 2}],
    ['obj4', {value: 5}],
    ['obj5', {value: 4}],
])

let arrKeys = Array.from(myMap.keys())
    .sort((w,v) => myMap.get(w)['value'] - myMap.get(v)['value'])
    .forEach(key=>console.log(key+' -> '+JSON.stringify(myMap.get(key))))


