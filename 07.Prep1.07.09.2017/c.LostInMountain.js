function lost(keyword, text) {
    let regex = /(north|east)\D*(\d{2})[^\,]*\D*(,{1})\D*(\d{6})/gi
    let messageRegex = text.substring(text.indexOf(keyword)+keyword.length,text.lastIndexOf(keyword))
    //let message=''
    let match = regex.exec(text)
    let latitute
    let longtitute
    while(match){
        //console.log(match)
        if(match[1].toLowerCase()==='north'){
            latitute=`${match[2]}.${match[4]} N`
        }else if(match[1].toLowerCase()==='east'){
            longtitute=`${match[2]}.${match[4]} E`
        }
        match=regex.exec(text)
    }
        console.log(latitute)
    console.log(longtitute)
    console.log(`Message: ${messageRegex}`)
}

lost('4ds',
'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532'
)