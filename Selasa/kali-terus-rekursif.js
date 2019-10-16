function kaliTerusRekursif(angka) {
    var hasil = String(angka)
    if (hasil.length === 1) {
        return angka
    } else {
        var hasilAkhir = Number(hasil[0]) * kaliTerusRekursif(Number(hasil.slice(1)))
        if (hasilAkhir.length !== 1) {
            return kaliTerusRekursif(hasilAkhir)
        } else { return hasilAkhir }
    }
}


// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6