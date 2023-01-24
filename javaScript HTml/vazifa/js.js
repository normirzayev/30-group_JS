// let a = 4,
//   b = 25,
//   c = 3;
// let massiv = [];

// for (let p = a; p <= b; p += c) {
//   // console.log(p);
//   massiv.push(p);
// }

// console.log(massiv);

// let toqMassiv = [],
//   juftMassiv = [];
// for (let i = 0; i < massiv.length; i++) {
//   console.log();

//   if (massiv[i] % 2 !== 0) {
//     toqMassiv.push(massiv[i]);
//   } else {
//     juftMassiv.push(massiv[i]);
//   }
// }

// console.log("juftMassiv ", juftMassiv);
// console.log("toqMassiv ", toqMassiv);

let malumotlar = [
  {
    name: "jasur",
    yosh: 14,
    jinsi: "erkak",
  },
  {
    name: "guli",
    yosh: 15,
    jinsi: "ayol",
  },
  {
    name: "karim",
    yosh: 20,
    jinsi: "erkak",
  },
  {
    name: "farhod",
    yosh: 21,
    jinsi: "erkak",
  },
  {
    name: "malika",
    yosh: 22,
    jinsi: "ayol",
  },
  {
    name: "hanifa",
    yosh: 19,
    jinsi: "ayol",
  },
  {
    name: "bobur",
    yosh: 17,
    jinsi: "erkak",
  },
  {
    name: "islom",
    yosh: 19,
    jinsi: "erkak",
  },
  {
    name: "ilhom",
    yosh: 13,
    jinsi: "erkak",
  },
  {
    name: "komila",
    yosh: 21,
    jinsi: "ayol",
  },
];

let erkakArray = [];
let ayolArray = [];
for (let i = 0; i < malumotlar.length; i++) {
  if (malumotlar[i].jinsi == "erkak") {
    erkakArray.push(malumotlar[i]);
  } else {
    ayolArray.push(malumotlar[i]);
  }
}

console.log("erkakArray ", erkakArray);
console.log("ayolArray ", ayolArray);
