// Soal Nomor
// Membuat arrrow Function
// Jawaban Nomor 2
const LuasPersegiPanjang = (p, l) => {
  return p * l;
};
const KelilingPersegiPanjang = (p, l) => {
  return 2 * (p + l);
};
console.log(LuasPersegiPanjang(2, 4));
console.log(KelilingPersegiPanjang(2, 4));

// Soal Nomor 2
// const newFunction = function literal(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(firstName + " " + lastName);
//     },
//   };
// };

// newFunction("William", "Imoh").fullName();

// Jawaban Nomor 2
const newFunction = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(firstName + " " + lastName);
    },
  };
};

newFunction("William", "Imoh").fullName();

// Soal Nomor 3
const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
};

// Jawaban Nomor 3
const { firstName, lastName, address, hobby } = newObject;
console.log(firstName, lastName, address, hobby);

// Soal Nomor 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
// const combined = west.concat(east);
// console.log(combined);

// Jawaban Nomor 4
const combined = [...west, ...east];
console.log(combined);
