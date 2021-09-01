// Soal Nomor 1
var pertama = "Saya sangat senang hari ini";
var kedua = "belajar Javascript itu Keren";

// Jawaban Nomor 1 (dengan penggunaan substr() pada variable pertama dan substring pada variable kedua)
console.log(
  pertama.substr(0, 4) +
    pertama.substr(11, 8) +
    kedua.substring(0, 8) +
    kedua.substring(8, 18).toUpperCase()
);

// Soal Nomor 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

// Jawaban Nomor 2
console.log(
  parseInt(kataPertama) +
    parseInt(kataKedua) * parseInt(kataKetiga) +
    parseInt(kataKeempat)
);

// Soal Nomor 3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substr(25);

// Jawaban Nomor 3
console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);
