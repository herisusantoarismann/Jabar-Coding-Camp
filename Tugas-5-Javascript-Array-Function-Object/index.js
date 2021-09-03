// Soal Nomor 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

// Jawaban Nomor 1
daftarHewan = daftarHewan.sort();
daftarHewan.map((item) => {
  console.log(item);
});

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

// Jawaban Nomor 3
function hitung_huruf_vokal() {
  return /^[aeiou]$/i.test(s);
}
