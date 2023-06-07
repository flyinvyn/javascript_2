const cekSeleksi = (nilaiAwal, nilaiAkhir, dataArray, validation) => {
  validation(nilaiAwal,nilaiAkhir,dataArray)
}

const validation = (nilaiAwal,nilaiAkhir,dataArray) =>{
  try {
    if (isNaN(nilaiAwal) || isNaN(nilaiAkhir)) throw "Data harus number"
    if (nilaiAwal >= nilaiAkhir) throw "Nilai akhir harus lebih besar dari nilai awal";
    if (dataArray.length <= 5) throw "Data array harus lebih dari 5";
  
    let arr = dataArray.filter(data => data > nilaiAwal && data < nilaiAkhir);
  
    if (arr.length === 0) throw "Nilai tidak ditemukan";
    dataArray.sort((a, b) => a - b);
    console.log(arr);
  
  } catch (error) {
    console.log(error)
  }
}

cekSeleksi(5, 20, [80, 54, 10, 13, 22, 15], validation)
cekSeleksi("lo", 20, [80, 54, 10, 13, 22, 15], validation)
cekSeleksi(20, 5, [80, 54, 10, 13, 22, 15], validation)
cekSeleksi(5, 20, [80, 54, 10], validation)
cekSeleksi(5, 20, [80, 54, 30, 21, 22, 50], validation)