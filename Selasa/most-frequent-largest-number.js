function sorting(arrNumber) {
    var num = 0
    var array = []
    for (var i = 0; i < arrNumber.length; i++) {
        if (num < arrNumber[i]) {
            num = arrNumber[i]
        }
    }
    for (var j = 0; j < arrNumber.length; j++) {
        if (num === arrNumber[j]) {
            array.push(arrNumber[j])
        }
    }
    return array
}

function getTotal(arrNumber) {
    var number = sorting(arrNumber).pop()
    if(number === undefined){
        return ''
    }else{
        return 'angka paling besar adalah ' + number + ' dan jumlah kemunculan sebanyak ' + sorting(arrNumber).length + ' kali'
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
  //''