function solve(arr) {
    let bitcoins = 0
    let leva = 0
    let gold =0
    let day=0

    for (let i = 1; i <= arr.length; i++) {
        if (i%3!==0){
            gold= Number(arr[i-1])
            leva+=gold*67.51
            if(bitcoins===0){
                day=i
            }
            if(leva>=11949.16 ){
             let bit=Math.floor(leva/11949.16)
                leva -= bit*11949.16
                bitcoins+=bit
            }

        }else {
            gold=Number(arr[i-1])-Number(arr[i-1])*0.3
            leva+=gold*67.51
            if(leva>=11949.16 ){
                let bit=Math.floor(leva/11949.16)
                leva -= bit*11949.16
                bitcoins+=bit
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`)
    if(bitcoins!==0) {
        console.log(`Day of the first purchased bitcoin: ${day}`)
    }
    leva = leva.toFixed(2)

    console.log(`Left money: ${leva} lv.`)
}
solve([3124.15, 504.212, 2511.124])