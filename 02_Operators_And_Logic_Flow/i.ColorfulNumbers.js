function colorful(num) {
    // console.log("<ul>");
    //
    // for (let i = 1; i <= num; i++) {
    //     if (i%2===1){
    //         console.log(`<li><span style='color:green'>${i}</span></li>`);
    //     }else   {
    //         console.log(`<li><span style='color:blue'>${i}</span></li>`)
    //     }
    // }
    // console.log(`</ul>`);


    let result = '<ul>\n';
    for (let i = 1; i <= num; i++) {
        let color = i%2===0?'blue' : "green";
            result+= `<li><span style='color:${color}'>${i}</span></li>\n`
    }
    result+=`</ul>`;
    return result
}

console.log(colorful(10));