function usernames(arr) {
    let finalResult = []
    for (let i = 0; i < arr.length; i++) {
        let username = arr[i].split('@')
        let domains = username[1].split('.')
        let result = username[0]+'.'

        for (let obj of domains) {
            result += obj[0]
        }
        finalResult.push(result)
    }
    console.log(finalResult.join(', '))
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])
