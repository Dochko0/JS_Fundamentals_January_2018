function fruitVegetable(item) {
    switch (item){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }

    // if (item === 'banana' ||item === 'apple' ||item === 'kiwi' ||item === 'cherry' ||item === 'lemon' ||item === 'grapes'||item === 'peach' ){
    //     console.log("fruit")
    // }
    // else if (item === 'tomato' ||item === 'cucumber' ||item === 'pepper' ||item === 'onion' ||item === 'garlic' ||item === 'parsley'){
    //     console.log("fruit")
    // }else{
    //     console.log("unknown")
    // }

}
fruitVegetable("banana");