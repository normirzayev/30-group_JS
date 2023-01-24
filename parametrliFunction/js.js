let massiv = [45, 8, 9, 10, 87, 54, 652, 13, 46, 6532, 102, 54, 96, 85, 34];
let massiv1 = [45, 8, 9, 10, 87, 6532, 102, 54, 96, 85, 34];

// massiv.sort((a, b) => b - a)
// console.log(massiv);
let juftMassiv = [];
let juftArray = (parametrggewrger) => {
  for (let p = 0; p < parametr.length; p++) {
    if (parametrggewrger[p] % 2 === 0) {
      // console.log(parametr[p]);
      juftMassiv.push(parametrggewrger[p]);
    }
  }
};

juftArray(massiv);
// juftArray(massiv1);
console.log(juftMassiv);

// massivnig ichidan faqat number type mos qiymatlarni ajaratib beradigan function hosil qiling
// example ::
// massivNumber(array) => ['efwv','fewr', true, false, 45,41, 41, 95, undefined]
// natija => [45,41, 41, 95]
