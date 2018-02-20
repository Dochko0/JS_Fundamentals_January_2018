function bitcoin(shifts) {
    let grams = 0;
    let dayCount = 1;
    let leva = 0;
    let firstCoint = 0;
    let hasCoin = false;
    for (let day of shifts) {
        day = Number(day);
        if (dayCount % 3 === 0) {
            day = day * 0.7;
        }
        grams += day;
        leva += day * 67.51;
        if (hasCoin === false && leva >= 11949.16) {
            firstCoint = dayCount;
            hasCoin = true;
        }
        dayCount++;
    }

    console.log(`Bought bitcoins: ${Math.floor(leva / 11949.16)}`);
    if (firstCoint > 0 ) console.log(`Day of the first purchased bitcoin: ${firstCoint}`);
    console.log(`Left money: ${(leva % 11949.16).toFixed(2)} lv.`);
}
bitcoin([3124.15, 504.212, 2511.124])
