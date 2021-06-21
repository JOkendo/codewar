function squareDigits(num){
    let numString = num.toString();
    let numArr = numString.split('');
    let numSqr = [];
    for(let i = 0; i < numArr.length; i++){
        numSqr.push(parseInt(numArr[i] * numArr[i]));
    }
    return parseInt(numSqr.join(''));
}