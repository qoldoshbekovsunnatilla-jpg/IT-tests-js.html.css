








let btn =document.querySelector(".btn")
btn.onclick =function() {
    let ball =0
    clearInterval(bsh) 

   

    let a1 =document.querySelector(".a1:checked")
    let b1 =document.querySelector(".b1:checked")
    let t1 =document.querySelector(".t1:checked")
    let z1 =document.querySelector(".z1:checked")
    let q1 =document.querySelector(".q1:checked")
    let o1 =document.querySelector(".o1:checked")
    let k1 =document.querySelector(".k1:checked")
    let w1 =document.querySelector(".w1:checked")
    let v1 =document.querySelector(".v1:checked")
    let g1 =document.querySelector(".g1:checked")


    if(a1) {
        ball += Number(a1.value)
    }
    if(t1) {
        ball += Number(t1.value)
    }
    if(z1) {
        ball += Number(z1.value)
    }
    if(q1) {
        ball += Number(q1.value)
    }
    if(o1) {
        ball += Number(o1.value)
    }
    if(k1) {
        ball += Number(k1.value)
    }
    if(b1) {
       ball += Number(b1.value)  
    }
    if(w1) {
       ball += Number(w1.value)  
    }
    if(v1) {
       ball += Number(v1.value)  
    }
    if(g1) {
       ball += Number(g1.value)  
    }

    document.querySelector(".res").innerHTML=`
    ${ball}
    
    `
}




//     let ma =document.querySelector(".ma")
//     let sn= 60;
//     let sq =1 ;
//     let bsh;
//     let start =document.querySelector(".start")
//     let paste =document.querySelector(".paste")
    
    
// start.onclick=function () {
//   let sq =setInterval (()=>{
//     sn--;
//     ma.innerHTML =sn;
//     rek.setTimeout
//     paste.style.display ='block'

    
//   },1000)
//   bsh=sq
//    let reklama =document.querySelector(".reklama")

// let rek =setTimeout(() =>{
//     reklama.style.display ='block'
// },60000)

// let cloce =document.querySelector(".cloce")
// cloce.onclick =function () {
//     reklama.style.display ="none"
// }
  
// }



let ma = document.querySelector(".ma");
let sn = 60;
let bsh;
let start = document.querySelector(".start");
let paste = document.querySelector(".paste");
let reklama = document.querySelector(".reklama");
let close = document.querySelector(".cloce");
let oops = document.querySelector(".oops");


start.onclick = function () {
  // Pastani ko‘rsatish
  paste.style.display = "block";

  // Taymerni ishga tushirish
  bsh = setInterval(() => {
    sn--;
    ma.innerHTML = sn;
    oops.style.display ="none"

    // Agar vaqt tugasa
    if (sn === 0) {
      clearInterval(bsh); // Taymerni to‘xtat
      reklama.style.display = "block"; // Reklamani ko‘rsat
    }
  }, 1000);
};

// Reklamani yopish tugmasi
close.onclick = function () {
  reklama.style.display = "none";
};
