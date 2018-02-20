function game(kingdoms, battles) {
    let kingdomsObj = {};
    for (let data of kingdoms) {
        if (!kingdomsObj.hasOwnProperty(data.kingdom)) {
            kingdomsObj[data.kingdom] = {};
            kingdomsObj[data.kingdom][data.general] = {'army': data.army, 'wins': 0, 'losses': 0};
            kingdomsObj[data.kingdom]['totalWins'] = 0;
            kingdomsObj[data.kingdom]['totalLosses'] = 0;
        } else {
            if (!kingdomsObj[data.kingdom].hasOwnProperty(data.general)) {
                kingdomsObj[data.kingdom][data.general] = {'army': data.army, 'wins': 0, 'losses': 0};
            } else {
                kingdomsObj[data.kingdom][data.general]['army'] += data.army;
            }
        }
    }
    for (let [atkKingdom, atkGeneral, defKingdom, defGeneral] of battles) {
        if (atkKingdom !== defKingdom) {
            let attacker = kingdomsObj[atkKingdom][atkGeneral]['army'];
            let defender = kingdomsObj[defKingdom][defGeneral]['army'];
            if (attacker > defender) {
                let gain = attacker * 0.1;
                let loss = defender * 0.1;
                kingdomsObj[atkKingdom][atkGeneral]['army'] += gain;
                kingdomsObj[atkKingdom][atkGeneral]['army'] = Math.floor(kingdomsObj[atkKingdom][atkGeneral]['army']);
                kingdomsObj[atkKingdom][atkGeneral]['wins'] ++;
                kingdomsObj[atkKingdom]['totalWins'] ++;
                kingdomsObj[defKingdom][defGeneral]['army'] -= loss;
                kingdomsObj[defKingdom][defGeneral]['army'] = Math.floor(kingdomsObj[defKingdom][defGeneral]['army']);
                kingdomsObj[defKingdom][defGeneral]['losses'] ++;
                kingdomsObj[defKingdom]['totalLosses'] ++;
            } else if (attacker < defender) {
                let gain = defender * 0.1;
                let loss = attacker * 0.1;
                kingdomsObj[defKingdom][defGeneral]['army'] += gain;
                kingdomsObj[defKingdom][defGeneral]['army'] = Math.floor(kingdomsObj[defKingdom][defGeneral]['army']);
                kingdomsObj[defKingdom][defGeneral]['wins'] ++;
                kingdomsObj[defKingdom]['totalWins'] ++;
                kingdomsObj[atkKingdom][atkGeneral]['army'] -= loss;
                kingdomsObj[atkKingdom][atkGeneral]['army'] = Math.floor(kingdomsObj[atkKingdom][atkGeneral]['army']);
                kingdomsObj[atkKingdom][atkGeneral]['losses'] ++;
                kingdomsObj[atkKingdom]['totalLosses'] ++;
            }
        }
    }
    let sortedKingdom = Object.keys(kingdomsObj).sort((a, b) => {
        if (kingdomsObj[b]['totalWins'] - kingdomsObj[a]['totalWins'] === 0) {
            if (kingdomsObj[a]['totalLosses'] - kingdomsObj[b]['totalLosses'] === 0) {
                return a.localeCompare(b);
            }
            return kingdomsObj[a]['totalLosses'] - kingdomsObj[b]['totalLosses'];
        }
        return kingdomsObj[b]['totalWins'] - kingdomsObj[a]['totalWins'];
    })[0];
    let sortedGenerals = Object.keys(kingdomsObj[sortedKingdom]).filter(x => x !== 'totalWins' && x !== 'totalLosses').sort((a, b) => {
        let x = kingdomsObj[sortedKingdom][b]['army'];
        let y = kingdomsObj[sortedKingdom][a]['army'];
        return x - y;
    });
    console.log(`Winner: ${sortedKingdom}`);
    for (let gen of sortedGenerals) {
        console.log(`/\\general: ${gen}`);
        console.log(`---army: ${kingdomsObj[sortedKingdom][gen]['army']}`);
        console.log(`---wins: ${kingdomsObj[sortedKingdom][gen]['wins']}`);
        console.log(`---losses: ${kingdomsObj[sortedKingdom][gen]['losses']}`);
    }
}