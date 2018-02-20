function uniqueWords(arr) {
    let uniqueWords = new Set()
    for (let str of arr) {
        let words = str.split(/[^a-zA-Z0-9_]+/).filter(a=>a!=='')
        for (let w of words) {
            uniqueWords.add(w.toLowerCase())
        }
    }
    console.log([...uniqueWords.values()].join(', '))
}
uniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
    ])