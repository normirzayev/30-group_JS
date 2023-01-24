// 8-misol
// let a = 9,
//   b = 9;

// if (a > b) {
//   console.log(a);
// } else if (a < b) {
//   console.log(b);
// } else {
//   console.log("sonlar ozaro teng");
// }

// 9-msiol
// let bobur = 10,
//   jasur = 15,
//   jamshid;

// if (bobur > jasur) {
//   console.log("bobur = " + bobur, "jasur = " + jasur);
// } else if (jasur > bobur) {
//   jamshid = bobur;
//   bobur = jasur;
//   jasur = jamshid;
//   console.log("bobur = " + bobur, "jasur = " + jasur);
// } else {
//   console.log("qiymatlari teng");
// }

// 12 - misol
// var a = 0,
//   b = 0,
//   c = 0;

// if (a < b && a < c) {
//   console.log("a = " + a);
// } else if (b < a && b < c) {
//   console.log("b = " + b);
// } else if (c < a && c < b) {
//   console.log("c = " + c);
// } else {
//   console.log("ikkitasi yoki uchtasi ozaro teng");
// }

// 15 - misol
// if (a < b && a < c) {
//   console.log("b + c = " + (b + c));
// } else if (b < a && b < c) {
//   console.log("a + c = " + (a + c));
// } else if (c < a && c < b) {
//   console.log("b + a = " + (b + a));
// } else {
//   console.log("ikkitasi yoki uchtasi ozaro teng");
// }

// 17 - misol
// var a = 8,
//   b = 8,
//   c = 8;

// if ((a < b && a < c && b < c) || (c < b && c < a && b < a)) {
//   console.log(a, b, c);
//   console.log(2 * a, 2 * b, 2 * c);
// } else {
//   console.log(-a, -b, -c);
// }

// 29 - 30 - misol

// let a = 0;

// if (a < 0 && a > -9 && a % 2 == 0) {
//   console.log(a + " berilgan son manify bir xonali juft son");
// } else if (a < 0 && a > -10 && a % 2 !== 0) {
//   console.log(a + " berilgan son manify bir xonali toq son");
// } else if (a < -9 && a > -100 && a % 2 === 0) {
//   console.log(a + " berilgan son manify ikki xonali juft son");
// } else if (a < -9 && a > -100 && a % 2 !== 0) {
//   console.log(a + " berilgan son manify ikki xonali toq son");
// } else if (a < -99 && a > -1000 && a % 2 === 0) {
//   console.log(a + " berilgan son manify uch xonali juft son");
// } else if (a < -9 && a > -1000 && a % 2 !== 0) {
//   console.log(a + " berilgan son manify uch xonali toq son");
// }
// // noldan katta xolat
// else if (a > 0 && a < 10 && a % 2 === 0) {
//   console.log(a + " berilgan son musbat bir xonali juft son");
// } else if (a > 0 && a < 10 && a % 2 !== 0) {
//   console.log(a + " berilgan son musbat bir xonali toq son");
// } else if (a > 9 && a < 100 && a % 2 === 0) {
//   console.log(a + " berilgan son musbat ikki xonali juft son");
// } else if (a > 9 && a < 100 && a % 2 !== 0) {
//   console.log(a + " berilgan son musbat ikki xonali toq son");
// } else if (a > 99 && a < 1000 && a % 2 === 0) {
//   console.log(a + " berilgan son musbat uch xonali juft son");
// } else if (a > 99 && a < 1000 && a % 2 !== 0) {
//   console.log(a + " berilgan son musbat uch xonali toq son");
// }
// else {
//   console.log(a + ' son nolga teng');
// }

// sonlarni so'z bilan o'qilishi

// let son = 111,
//   soz,
//   yuzlik = parseInt(son / 100),
//   onlik = parseInt(son / 10) % 10
//   birlik = son % 10;

// switch (yuzlik) {
//   case 1:
//     soz = "yuz ";
//     break;
//   case 2:
//     soz = "ikki yuz ";
//     break;
//   case 3:
//     soz = "uch yuz ";
//     break;
//   case 4:
//     soz = "tort yuz ";
//     break;
//   case 5:
//     soz = "besh yuz ";
//     break;
//   case 6:
//     soz = "olti yuz ";
//     break;
//   case 7:
//     soz = "yetti yuz ";
//     break;
//   case 8:
//     soz = "sakkiz yuz ";
//     break;
//   case 9:
//     soz = "to'qqiz yuz ";
//     break;
//   case 0:
//     soz = "";
// }

// switch (onlik) {
//   case 1:
//     soz = soz +  "on ";
//     break;
//   case 2:
//     soz = soz +  "yigirma ";
//     break;
//   case 3:
//     soz = soz +  "o'ttiz ";
//     break;
//   case 4:
//     soz = soz +  "qirq ";
//     break;
//   case 5:
//     soz = soz +  "ellik ";
//     break;
//   case 6:
//     soz = soz +  "oltimish ";
//     break;
//   case 7:
//     soz = soz +  "yettimish ";
//     break;
//   case 8:
//     soz = soz +  "sakson ";
//     break;
//   case 9:
//     soz = soz +  "to'qson ";
//     break;
//   case 0:
//     soz =  "";
// }

// switch (birlik) {
//   case 1:
//     soz = soz + "bir";
//     break;
//   case 2:
//     soz = soz + "ikki";
//     break;
//   case 3:
//     soz = soz + "uch";
//     break;
//   case 4:
//     soz = soz + "to'rt";
//     break;
//   case 5:
//     soz = soz + "besh";
//     break;
//   case 6:
//     soz = soz + "olti";
//     break;
//   case 7:
//     soz = soz + "yetti";
//     break;
//   case 8:
//     soz = soz + "sakkiz";
//     break;
//   case 9:
//     soz = soz + "to'qqiz";
//     break;
// }
// console.log(son + " => " + soz);

// let son = 0;
// // for('boshlanigich nuqta'; 'oxrgi nuqta';'qadam')

// for (son; son <= 50;  son += 2) {
//   console.log(son);
// }

// let m = 15

// m-- // 4
// --m // 4
// m++ // 6
// ++m // 6
// console.log(m++); // 5
// console.log(++m); // 6

// m = m - 5  or short m -= 5
// m = m + 5  or short m += 5
// console.log(m);

// 1-misol

// 4 - misol
// let a = 1,
//   b = 10,
//   narx = 4;

// for (let i = a; i <= b; i++) {
//   console.log(i + "kg narxi " + i * narx + " so'm");
// }

// let p = '5'
// console.log(Number(p));  bumber typega o'tkazish
// console.log(+p);

// for (let i = 0; i < 10; i += 0.2) {
//   console.log(+i.toFixed(1)); // nuqtadan keyin nechta son kerak bolsa qavs ichiga kiritiladi
// }
