// Soal Nomor 1
var nilai = 66;

// Jawaban Nomor 1
// Jika nilai lebih dari 100
if (nilai > 100) {
  console.log("Nilai anda lebih dari 100. Mohon masukkan nilai antara 0-100");
} else if (nilai >= 85) {
  console.log("A");
} else if (nilai >= 75 && nilai < 85) {
  console.log("B");
} else if (nilai >= 65 && nilai < 75) {
  console.log("C");
} else if (nilai >= 55 && nilai < 65) {
  console.log("D");
} else if (nilai >= 0 && nilai < 55) {
  console.log("E");
}
// Jika nilai negatif
else {
  console.log("Nilai anda negatif. Mohon masukkan nilai antara 0-100 ");
}
