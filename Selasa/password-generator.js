function changeVocals(str) {
    var split = str.split('');
    var vocal = 'aiueo';
    var vocalBaru = 'bjvfp';
    var tampung = ''

    for (var i = 0; i < split.length; i++) {
        for (var j = 0; j < vocal.length; j++) {
            if (vocal[j] === split[i]) {
                tampung = tampung + vocalBaru[j];

            } else if (vocal[j].toUpperCase() === split[i]) {
                tampung = tampung + vocalBaru[j].toUpperCase();

            }
        }
        if (tampung.length < i + 1) {
            tampung = tampung + split[i]
        }
    }
    return tampung
}

function reverseWord(str) {
    var resultChangeVocals = changeVocals(str)
    var tampung = ''
    for (var i = resultChangeVocals.length - 1; i >= 0; i--) {
        tampung += resultChangeVocals[i]
    }
    return tampung
}

function setLowerUpperCase(str) {
    var resultReverseWord = reverseWord(str)
    var tampung = ''
    for (var i = 0; i < resultReverseWord.length; i++) {
        if (resultReverseWord[i] === resultReverseWord[i].toUpperCase()) {
            tampung += resultReverseWord[i].toLowerCase()
        } else if (resultReverseWord[i] === resultReverseWord[i].toLowerCase()) {
            tampung += resultReverseWord[i].toUpperCase()
        }
    }
    return tampung
}

function removeSpaces(str) {
    var resultSetLowerUpperCase = setLowerUpperCase(str)
    return resultSetLowerUpperCase.split(' ').join('')
}
function passwordGenerator(name) {
    var hasil = removeSpaces(name)
    for (var i = 0; i < name.length; i++) {
        if (name.length <= 5) {
            return 'Minimal karatker yang diinputkan adalah 5 karakter'
        }
    }
    return hasil
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'