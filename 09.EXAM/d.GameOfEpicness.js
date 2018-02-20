function solve(arr, matrix) {
    let result = {}
    for (let obj of arr) {
        let kingdom = obj['kingdom']
        let general = obj['general']
        let army = obj['army']

        if (result.hasOwnProperty(kingdom)) {
            if (result[kingdom].hasOwnProperty(general)) {
                result[kingdom][general] += army
            } else {
                result[kingdom][general] = army
            }
        } else {
            result[kingdom] = {}
            result[kingdom][general] = army
        }
    }
    console.log(result);

    for (let battle of matrix) {
        if (battle[0] === battle[2]) {
            console.log('a');
            continue
        }
        if (battle[1] === battle[3]) {
            console.log('b');
            continue
        }

        let attacker = ""
        let attPoints = 0
        let defender = ""
        let defPoints = 0

        console.log('------------------------------')
        for (let key in result) {
            let kingdoms = result[key]
            for (let general in kingdoms) {
                if (general === battle[1]) {
                    attacker = general
                    attPoints = kingdoms[general]
                    //console.log("atakuvashtiq " + attacker)
                    //console.log("na atakuvashtiq tochkite " + attPoints);
                }
                if (general === battle[3]) {
                    defender = general
                    defPoints = kingdoms[general]
                    //console.log("zasht: " + defender)
                    //console.log("tochkite: " + defPoints);
                }
            }
        }

        if (attPoints < defPoints) {
            let defPoints1 = defPoints + defPoints * 0.1
            let attPoints1 = attPoints - attPoints * 0.1
            for (let key in result) {
                let kingdoms = result[key]
                for (let general in kingdoms) {
                    if (general === battle[1]) {
                        attacker = general
                        kingdoms[general] = attPoints1
                        //console.log("atakuvashtiq " + attacker)
                        //console.log("na atakuvashtiq tochkite " + attPoints1);
                    }
                    if (general === battle[3]) {
                        defender = general
                        kingdoms[general] = defPoints1
                        //console.log("zasht: " + defender)
                        //console.log("tochkite: " + defPoints1);
                    }
                }
            }
        }
        if (attPoints > defPoints) {
            let defPoints1 = defPoints - defPoints * 0.1
            let attPoints1 = attPoints + attPoints * 0.1
            for (let key in result) {
                let kingdoms = result[key]
                for (let general in kingdoms) {
                    if (general === battle[1]) {
                        attacker = general
                        kingdoms[general] = attPoints1
                        //console.log("atakuvashtiq " + attacker)
                        //console.log("na atakuvashtiq tochkite " + attPoints1);
                    }
                    if (general === battle[3]) {
                        defender = general
                        kingdoms[general] = defPoints1
                        //console.log("zasht: " + defender)
                        //console.log("tochkite: " + defPoints1);
                    }
                }
            }
        }


        //console.log(neshtoSi);

        // for (let innerKey in key) {
        //     console.log(innerKey)
        //     for (let value in innerKey) {
        //         console.log(value)
        //     }
        // }

    }
    console.log(result);

}

solve([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
)