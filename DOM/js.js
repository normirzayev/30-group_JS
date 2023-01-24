// let hfewfwe = document.getElementById("text");

// let massiv = [
//   "hello",
//   "salom",
//   "olam",
//   "mevalar",
//   54,
//   98,
//   21,
//   32,
//   true,
//   false,
//   "undefined",
//   "salatlar",
//   "computer",
// ];

// let son = massiv.length; // 13
// massiv.forEach((item, i) => {
//   hfewfwe.innerHTML += `${son}. <i>${item} </i> </br>`;
//   son--;
// });

// let iTages = document.querySelectorAll("i");

// iTages.forEach((iTag) => {
//   iTag.style.backgroundColor = "brown";
// });

// // h1.style.color = '#a1a1a1';
// // h1.style.backgroundColor = 'blue';
// // h1.style.fontSize = '10px';

// hfewfwe.style.cssText = `
//   color: red;
//   font-size: 25px;
//   width:400px;
//   background-color: yellow;
//   text-transform: capitalize;
// `;

// let matn = `salom`;
// console.log(matn + ' olam');
// console.log(` ${matn} olam `);

// querySelector

// let p = document.querySelectorAll('p') // tag nomi bo'yicha (hammasini agar all bilan tugasa) tanlab olish
// let p = document.querySelector('.p') // class nomi bo'yicha tanlab olish
// let p = document.querySelector('#p') // id nomi bo'yicha tanlab olish
// console.log(p[2]);

let malumotlar = [
  {
    name: "taxta",
    haqida:
      "Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Reiciendis,nulla?",
    rasm: "../img/images(1).jpg",
    chegirma: 15,
    narxi: 160,
  },
  {
    name: "yog'och",
    haqida:
      "Lorem  dolor sit amet consectetur ipsum Lorem ipsum dolor sit amet. adipisicing elit. Reiciendis,nulla?",
    rasm: "../img/images(2).jpg",
    chegirma: 12,
    narxi: 120,
  },
  {
    name: "tayoq",
    haqida:
      "Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Reiciendis,nulla?",
    rasm: "../img/images(3).jpg",
    chegirma: 27,
    narxi: 80,
  },
  {
    name: "disp",
    haqida:
      "Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Reiciendis,nulla?",
    rasm: "../img/images(4).jpg",
    chegirma: 19,
    narxi: 200,
  },
  {
    name: "emanYog'och",
    haqida:
      "Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Reiciendis,nulla?",
    rasm: "../img/images.jpg",
    chegirma: 10,
    narxi: 250,
  },
  {
    name: "reka",
    haqida:
      "Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Reiciendis,nulla?",
    rasm: "../img/rasm1.jpg",
    chegirma: 23,
    narxi: 170,
  },
  {
    name: "taxta",
    haqida:
      "Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Reiciendis,nulla?",
    rasm: "../img/rasm2.png",
    chegirma: 18,
    narxi: 140,
  },
];

let box = document.querySelector(".box");

malumotlar.map((item, index) => {
  box.innerHTML += `
    <div class="boxer">
      <span class="chegirma" > ${item.chegirma}% </span>
      <figure>
        <img src=${item.rasm} alt="" />
      </figure>
      <div class="boxerText">
        <h1> ${item.name} </h1>
        <p>  ${item.haqida} </p>
        <div class="flex"><del>${item.narxi} $</del><b> ${
    item.narxi - (item.narxi / 100) * item.chegirma
  }  $</b></div>
      </div>
    </div>
  `;
});
