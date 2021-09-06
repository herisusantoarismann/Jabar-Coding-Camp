// Soal Nomor 1
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

// Jawaban Nomor 1
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
