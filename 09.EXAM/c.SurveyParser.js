function parser(str) {
    console.log(str)
    let svgStart = str.indexOf('<svg>')
    let svgEnd = str.indexOf('</svg>')
    str = str.slice(svgStart + 5, svgEnd)

    console.log(str)

    let catStart = str.indexOf('<cat>')
    let catEnd = str.indexOf('</cat>')

    let label = str.slice(catStart + 5, catEnd)
    let start = label.indexOf('[')
    let end = label.indexOf(']')

    console.log(label)

    let finallabel = ""
    let counterForInvalidFormat = 0
    let counterForNeSurveyFound = 0
    if (start > 0 && start < end && end > 0) {
        finallabel = label.substring(start + 1, end)
    }
    if (finallabel === '' && svgStart >= 0 && svgEnd > 0) {
        counterForInvalidFormat++
    }
    if (svgStart < 0 && svgEnd < 0) {
        counterForNeSurveyFound++
    }
console.log(finallabel)
    str = str.slice(catEnd + 6, str.length)
    console.log(str)
    let result = 0
    let votes = 0
    while (true) {
        let startC = str.indexOf('<g><val>')
        if (startC < 0) {
            break
        }
        let endC = str.indexOf('</g>')
        if (endC < 0 || end < start) {
            break
        }
        let subSTR = str.slice(startC + 8, endC)
        console.log(subSTR)
        let afterNum = subSTR.indexOf('<')
        if (afterNum < 0) {
            break
        }
        let beforeLast = subSTR.indexOf('>')
        if (beforeLast < 0 || end < start) {
            break
        }
        let check = subSTR.slice(afterNum, beforeLast + 1)
        let num1 = Number(subSTR.slice(0, afterNum))
        let num2 = Number(subSTR.slice(beforeLast + 1))
        if (num1 < 1 || num1 > 10 || isNaN(num1)) {
            num1 = 0
            num2 = 0
        }

        if (num2 < 0 || isNaN(num2)) {
            num2 = 0

        }
        if (check !== '</val>') {
            num2 = 0
        }
        result += num1 * num2
        votes += num2
        str = str.substring(endC + 1)
    }

    if (counterForInvalidFormat > 0) {
        console.log('Invalid format')
    } else if (counterForNeSurveyFound > 0) {
        console.log('No survey found')
    } else {
        let finalResult = (result / votes).toFixed(2)
        if ((finalResult * 1000) % 100 === 0) {
            let newFinal = finalResult * 10
            finalResult = (newFinal / 10).toFixed(1)
        }
        console.log(`${finallabel}: ${finalResult}`)
    }
}

parser("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>")

// parser("<svg>\n" +
//     "<cat><text>Which is your favourite meal from our selection?</text></cat>\n" +
//     "<cat>\n" +
//     "<g><val>Fish</val>15</g>\n" +
//     "<g><val>Prawns</val>31</g>\n" +
//     "<g><val>Crab Langoon</val>12</g>\n" +
//     "<g><val>Calamari</val>17</g>\n" +
//     "</cat>\n" +
//     "</svg>")