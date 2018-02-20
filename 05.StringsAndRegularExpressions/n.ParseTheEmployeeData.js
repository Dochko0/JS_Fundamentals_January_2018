function employeeData(str) {
    let regex = /^([A-Z][a-z]*)\s-\s([1-9][0-9]*)\s-\s([a-zA-Z0-9 -]+)/gm
    let m = regex.exec(str)
    while(m){
        console.log(`Name: ${m[1]}`)
        console.log(`Position: ${m[3]}`)
        console.log(`Salary: ${m[2]}`)
        m=regex.exec(str)
    }
}

employeeData('Isacc - 1000 - CEO\n' +
    'Ivan - 500 - Employee\n' +
    'Peter - 500 - Employee\n')