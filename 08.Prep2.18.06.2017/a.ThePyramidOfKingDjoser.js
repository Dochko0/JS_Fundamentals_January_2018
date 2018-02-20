function solution(size, increment) {
    let totalRows = Math.ceil(size/2)
    let [stone, marble, lapis]=[0,0,0];
    for (let i = 1; i < totalRows; i++) {
       let currStone = (size-2)*(size-2)
        if (i%5===0){
            lapis+=size*size-currStone
        }else{
            marble+=size*size-currStone
        }
        stone+=currStone
       size-=2
    }
    let gold = size*size

    console.log('Stone required: ' + Math.ceil(stone*increment))
    console.log('Marble required: ' + Math.ceil(marble*increment))
    console.log('Lapis Lazuli required: ' + Math.ceil(lapis*increment))
    console.log('Gold required: ' + Math.ceil(gold*increment))
    console.log('Final pyramid height: ' + Math.floor(totalRows*increment))
}