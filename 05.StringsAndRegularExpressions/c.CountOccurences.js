function countOccurrences(word, sentence) {
    let counter=0

    while(true){
        let startIndex = sentence.indexOf(word)
        if(startIndex<0){
            break;
        }
        counter++
        sentence = sentence.substr(startIndex+1)
    }
    console.log(counter);
}

countOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')