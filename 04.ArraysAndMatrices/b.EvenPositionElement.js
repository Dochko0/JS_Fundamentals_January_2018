function evenPositionElement(arr) {
    // let arr2="";
    // for (let i = 0; i < arr.length; i++) {
    //     if(i%2!==1){
    //         arr2+=(arr[i])+" "
    //     }
    // }
    // return arr2.trim();

    console.log(arr.filter((el, i) => {
        return i % 2 === 0
    }).join(' '));

}
//console.log(evenPositionElement(['20', '30', '40']));
evenPositionElement(['20', '30', '40']);
