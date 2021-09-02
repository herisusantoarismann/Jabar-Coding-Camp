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

// Soal Nomor 2
var tanggal = 12;
var bulan = 1;
var tahun = 1999;

// Jawaban Nomor 2
switch (bulan) {
  case 1:
    console.log(tanggal + " Januari " + tahun);
    break;
  case 2:
    console.log(tanggal + " Februari " + tahun);
    break;
  case 3:
    console.log(tanggal + " Maret " + tahun);
    break;
  case 4:
    console.log(tanggal + " April " + tahun);
    break;
  case 5:
    console.log(tanggal + " Mei " + tahun);
    break;
  case 6:
    console.log(tanggal + " Juni " + tahun);
    break;
  case 7:
    console.log(tanggal + " Juli " + tahun);
    break;
  case 8:
    console.log(tanggal + " Agustus " + tahun);
    break;
  case 9:
    console.log(tanggal + " September " + tahun);
    break;
  case 10:
    console.log(tanggal + " Oktober " + tahun);
    break;
  case 11:
    console.log(tanggal + " November " + tahun);
    break;
  case 12:
    console.log(tanggal + " Desember " + tahun);
    break;
  default:
    console.log("Mohon masukkan bulan dengan benar");
    break;
}
