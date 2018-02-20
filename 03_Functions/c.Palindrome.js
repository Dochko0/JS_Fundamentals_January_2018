// function palindrome(word) {
//     let check = true;
//     for (let i = 0; i <= word.length/2; i++) {
//         if (word[i]!==word[word.length-1-i]){
//             check=false;
//         }
//     }
//     console.log(check)
// }
// palindrome("racecar");

function palindrome1(a) {
    // let reversed = a.split('').reverse().join("");
    //
    //     if (reversed===a){
    //        return true;
    //     }
    // return false;

    return a.split('').reverse().join("")===a;
}

console.log(palindrome1("racecar"));;