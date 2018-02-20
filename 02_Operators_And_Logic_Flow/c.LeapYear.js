function leapYear(year) {
    let isLeap = (year%4===0 && year%100===0)||year%400===0 ? "yes" : "no";
    console.log(isLeap)
    
}
leapYear(2000)