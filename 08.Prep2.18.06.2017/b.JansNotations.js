function notations(arr) {
    let numberss=[]

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i]
        if (typeof curr==='number'){
            numberss.push(curr)
        }else{
            if(numberss.length>1){
                let num1 = numberss.pop()
                let num2 = numberss.pop()
                switch(curr){
                    case '+': numberss.push(num2+num1);break
                    case '-': numberss.push(num2-num1);break
                    case '*': numberss.push(num2*num1);break
                    case '/': numberss.push(num2/num1);break
                    default: break
                }
            }else{
                console.log('Error: not enough operands!')
                return
            }
        }

    }
    numberss.length > 1 ? console.log('Error: too many operands!') : console.log(numberss[0]);

}

notations([3, 4, '+'])