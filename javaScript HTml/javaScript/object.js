// let talaba = {} // bo'sh object
let talaba = {
  ism: "jasur",
  familya: "muminov",
  yosh: 25,
  rasm: ["profile.png", "profile2.png", "profile3.png"],
};

// objectni valuelarini ko'rish ( tanlab olish ) usullari
// 1 - usul
console.log(talaba.yosh);
console.log(talaba.familya);
console.log(talaba.ism);

// 2 usul
console.log(talaba["yosh"]);
console.log(talaba["familya"]);
console.log(talaba["ism"]);
console.log(talaba["rasm"][2]); // objectning ichida massiv ishlatilishi va kerakli indexdagi qiymatni tanlab olish

// massiv ichida objectlar bilan ishlash

let cars = [
  {
    nomi: "gentra",
    tezligi: 200,
    rangi: "qora",
    yili: 2022,
    pozitsiya: 2,
    otkuchi: 105,
  },
  {
    nomi: "cobalt",
    pozitsiya: 3,
    yili: 2020,
    rangi: "oq",
    tezligi: 220,
    otkuchi: 110,
  },
];

console.log(cars[2].tezligi + ' km/soat');
console.log(cars[2]['yili'] + ' yil');

console.log(`${cars[2]["yili"]} yil `);  // js ga tegishli codlarni string typedagi malumotlarni qoshib yozish uchun ishlatiladi bektag orasida bo'lgan malumotlar qanday yozilgan bolsa shundayligicha qabul qilinadi

let o = 0;
let newCars = [], oldCars = []
for (o; o < cars.length; o++) {
  if (cars[o].yili > 2019) {
    newCars.push(cars[o])
  }
  else {
    oldCars.push(cars[o])
  }
}

console.log(newCars, 'yangi moshnalar');
console.log(oldCars, 'eski moshnalar');
