var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

const bacaBuku = async () => {
  let waktu = 10000;
  for (book of books) {
    await readBooksPromise(waktu, book).then(
      (sisawaktu) => (waktu = sisawaktu)
    );
  }
};

bacaBuku();
