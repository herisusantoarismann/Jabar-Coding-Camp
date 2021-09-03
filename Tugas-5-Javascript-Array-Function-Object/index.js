// Soal Nomor 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

// Jawaban Nomor 1
daftarHewan = daftarHewan.sort();
for (let i = 0; i < daftarHewan.length; i++) {
  console.log(daftarHewan[i]);
}

// Soal Nomor 2
var data = {
  name: "John",
  age: 30,
  address: "Jalan Pelesiran",
  hobby: "Gaming",
};

// Jawaban Nomor 2
function introduce(data = data) {
  return (
    "Nama saya " +
    data.name +
    ", umur saya " +
    data.age +
    " tahun, alamat saya di " +
    data.address +
    ", dan saya punya hobby yaitu " +
    data.hobby +
    "!"
  );
}
console.log(introduce(data));

// Soal Nomor 3
var hitung_1 = hitung_huruf_vokal("Muhammad");
var hitung_2 = hitung_huruf_vokal("Iqbal");

// Jawaban Nomor 3
function hitung_huruf_vokal(kalimat) {
  const hasil = kalimat.match(/[aeiou]/gi);
  return hasil === null ? 0 : hasil.length;
}

console.log(hitung_1, hitung_2);

// Soal Nomor 4

// Jawbaan Nomor 4
function hitung(angka) {
  return angka * 2 - 2;
}

console.log(hitung(0)); // -2
console.log(hitung(1)); // 0
console.log(hitung(2)); // 2
console.log(hitung(3)); // 4
console.log(hitung(5)); // 8
