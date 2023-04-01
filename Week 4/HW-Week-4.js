// Membuat Array dengan 100 nilai random (antara 1 sampai 50)
function generateRandomArray(totalIndex, angkaTerendah, angkaTertinggi) {
  const hasil = [];
  for (let i = 0; i < totalIndex; i++) {
    hasil.push(Math.floor(Math.random() * angkaTertinggi) + angkaTerendah);
  }
  return hasil;
}

const array = generateRandomArray(100, 1, 50);

// Membuat array ganjil dan genap
const arrayGanjil = [];
const arrayGenap = [];
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    arrayGenap.push(array[i]);
  } else {
    arrayGanjil.push(array[i]);
  }
}

// Mencari Nilai Terendah(Min)
function nilaiTerendah(angka) {
  let a = angka[0];
  for (let i = 1; i < angka.length; i++) {
    if (angka[i] < a) {
      a = angka[i];
    }
  }
  return a;
}

const terkecilGenap = nilaiTerendah(arrayGenap);
const terkecilGanjil = nilaiTerendah(arrayGanjil);

//Mencari Nilai tertinggi(Max)
function nilaiTertinggi(angka) {
  let b = angka[0];
  for (let i = 1; i < angka.length; i++) {
    if (angka[i] > b) {
      b = angka[i];
    }
  }
  return b;
}

const terbesarGenap = nilaiTertinggi(arrayGenap);
const terbesarGanjil = nilaiTertinggi(arrayGanjil);

//Mencari Nilai Total
function nilaiTotal(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const totalGenap = nilaiTotal(arrayGenap);
const totalGanjil = nilaiTotal(arrayGanjil);

//Mencari Nilai Rata-rata
function nilaiRata(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  const rataRata = total / numbers.length;
  return rataRata;
}

const rataGenap = nilaiRata(arrayGenap);
const rataGanjil = nilaiRata(arrayGanjil);

// Membuat perbandingan nilai
const perbandinganMin =
  terkecilGenap > terkecilGanjil
    ? "Nilai terkecil dari array Genap lebih besar dari array Ganjil"
    : terkecilGenap < terkecilGanjil
    ? "Nilai terkecil dari array Ganjil lebih besar dari array Genap"
    : "Nilai terkecil dari array Genap dan Ganjil adalah sama";
const perbandinganMax =
  terbesarGenap > terbesarGanjil
    ? "Nilai terbesar dari array Genap lebih besar dari array Ganjil"
    : "Nilai terbesar dari array Ganjil lebih besar dari array Genap";
const perbandinganTotal =
  totalGenap === totalGanjil
    ? "Total memiliki nilai sama antara array genap dan ganjil"
    : "Total tidak sama antara array genap dan ganjil";
const perbandinganRataRata =
  rataGenap > rataGanjil
    ? "Rata-rata lebih besar array genap"
    : "Rata-rata lebih besar array ganjil";

// Menampilkan Hasil(output)
console.log("Array: ", array);
console.log("Array Genap: ", arrayGenap);
console.log("Array Ganjil: ", arrayGanjil);
console.log("Nilai terkecil dari Array Genap: ", terkecilGenap);
console.log("Nilai terkecil dari Array Ganjil: ", terkecilGanjil);
console.log("Nilai Terbesar dari Array Genap: ", terbesarGenap);
console.log("Nilai Terbesar dari Array Ganjil: ", terbesarGanjil);
console.log("Total Array Genap = ", totalGenap);
console.log("Total Array Ganjil = ", totalGanjil);
console.log("Nilai Rata-rata Array Genap = ", rataGenap);
console.log("Nilai Rata-rata Array Ganjil = ", rataGanjil);
console.log(perbandinganMin);
console.log(perbandinganMax);
console.log(perbandinganTotal);
console.log(perbandinganRataRata);
