function elect(arr) {
    let result = {}
    for (let obj of arr) {
        let system = obj['system']
        let candidate = obj['candidate']
        let votes = obj['votes']
        if (result.hasOwnProperty(system)) {
            if (result[system].hasOwnProperty(candidate)) {
                result[system][candidate] += votes
            } else {
                result[system][candidate] = votes
            }
        } else {
            result[system] = {}
            result[system][candidate] = votes
        }
    }
    //console.log(result)
    let totalSum = 0
    for (let key in result) {
        let winner = Object.keys(result[key]).sort((a, b) => result[key][b] - result[key][a])[0]
        let sum = 0
        for (let inneKey in result[key]) {
            sum += result[key][inneKey]
        }
        result[key] = {}
        result[key]['candidate'] = winner
        result[key]['votes'] = sum
        totalSum += sum
    }
    console.log(result)
    let players = {}
    for (let key in result) {
        if (players.hasOwnProperty(result[key]['candidate'])) {
            players[result[key]['candidate']] += result[key]['votes']

        } else {
            players[result[key]['candidate']] = result[key]['votes']
        }
    }
    //console.log(players)
    let sortedPlayers = Object.keys(players).sort((a, b) => players[b] - players[a])
    let sortedValues = Object.values(players).sort((a, b) => b - a).map(a => Math.floor((a / totalSum) * 100))
    let sortetsystems = Object.keys(result).sort((a,b)=>result[b]['votes']-result[a]['votes'])

    //console.log(sortedValues)
    if (sortedValues[0] > 50) {
        if (sortedPlayers.length > 1) {
            console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`)
            console.log(`Runner up: ${sortedPlayers[1]}`)
            for (let system of sortetsystems) {
                if (result[system]['candidate']===sortedPlayers[1]){
                    console.log(`${system}: ${result[system]['votes']}`)
                }
            }

        } else {
            console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`)
            console.log(`${sortedPlayers[0]} wins unopposed!`)
        }
    } else {
        console.log(`Runoff between ${sortedPlayers[0]} with ${sortedValues[0]}% and ${sortedPlayers[1]} with ${sortedValues[1]}%`)
    }

}

elect([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
    {system: 'Tau', candidate: 'Space Cow', votes: 15},
    {system: 'Sigma', candidate: 'Space Cow', votes: 60},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]
)