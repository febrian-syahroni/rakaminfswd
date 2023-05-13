// Memanggil module
const kotak = require("./module");

// Implementasi module
let luasPersegi = kotak.luasPersegi(5);
console.log("Luas Persegi = ", luasPersegi); // Output: 25
let kelilingPersegi = kotak.kelilingPersegi(5);
console.log("Keliling Persegi = ", kelilingPersegi); // Output: 20
let luasPersegiPanjang = kotak.luasPersegiPanjang(5, 7);
console.log("Luas Persegi Panjang = ", luasPersegiPanjang); // Output: 35
let kelilingPersegiPanjang = kotak.kelilingPersegiPanjang(5, 7);
console.log("Keliling Persegi Panjang = ", kelilingPersegiPanjang); // Output: 24
