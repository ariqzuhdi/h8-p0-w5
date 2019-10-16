function totalDigitRekursif(angka) {
    var hasil = String(angka)
    if (hasil.length === 1) {
        return angka
    } else {
        return Number(hasil[0]) + totalDigitRekursif(Number(hasil.slice(1)))
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5