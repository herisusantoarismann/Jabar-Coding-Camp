// Soal Nomor
// Membuat arrrow Function
// Jawaban Nomor 2
const LuasPersegiPanjang = (p, l) => {
  return p * l;
};
const KelilingPersegiPanjang = (p, l) => {
  return 2(p + l);
};

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
