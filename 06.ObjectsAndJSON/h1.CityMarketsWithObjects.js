function cityObject(arr) {
    let result = {}
    for (let str of arr) {
        let [town, item, value]= str.split(/\s*->\s*/)
        let multiply = value.split(/\s*:\s*/).map(s=>Number(s)).reduce((a,b)=>a*b)

        if (result.hasOwnProperty(town)){
            if (result[town][item]){
                result[town][item]=result[item]+multiply
            }else{
                result[town][item]=multiply
            }
        }else{
            let itemsMap ={}
            itemsMap[item] = multiply
            result[town]=itemsMap
        }
    }
    for (let key in result) {
        console.log('Town - '+key)
        for (let item in result[key]) {
            console.log('$$$'+ item + " : " + result[key][item])
        }
    }
}

cityObject(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3',
])