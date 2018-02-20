function cappy(dataRows) {
    let flavorsObj = {}
    let bottlesObj = {}
    for (let dataRow of dataRows) {
        let [juceName, quantity] = dataRow.split(/\s=>\s/g)
        quantity = Number(quantity)
        if (!flavorsObj.hasOwnProperty(juceName)) {
            flavorsObj[juceName] = quantity
        } else {
            flavorsObj[juceName] += quantity
        }
       quantity = flavorsObj[juceName]
        if (quantity >= 1000) {
            let bottlesCount = Math.floor(quantity/1000)
                bottlesObj[juceName] = bottlesCount
        }
    }
    for (let juiceName in bottlesObj) {
        console.log(`${juiceName} => ${bottlesObj[juiceName]}`)
    }
}


cappy(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])