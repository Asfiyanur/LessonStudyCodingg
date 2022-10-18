// * ============================================
// *!           DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");

// // ? Örnek1: 1 den n ye kadar sayıları toplayan kodu yazınız.

// const n=Number(prompt("Bir sayı giriniz:"));
// let toplam=0
// for(let i=1 ; i<=n ; i++){
//     toplam +=i;
//     // console.log(toplam,i);
// }
// console.log("SONUC:",toplam);



// ? ÖRNEK2: 0-100 arasında 10 adet rastgele sayı ureten kodu for döngüsü ile yazınız.

// for(let i=1;i<=10 ; i++){
//     const rasgele = Math.round(Math.random()*100);
//     console.log(rasgele);
// }

//*! NOT:

//*! Math.floor() =>surekli asagiya yuvarlar
//*! Math.ceil() =>sürekli yukariya yuvarlar
//*! Math.round() => degerine gore yuvarlar.
//*! Math.trunc() => kesirli sayinin tam kismini alir.


//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.


// ! flag=bayrak yöntemi ile kodlama

// const sayi = prompt("pozitif sayı giriniz:");

// let asal=true;

// if (sayi <=1){
//     alert("sayi 1 den büyük olmalıdır.");
// }else{
//     for(let i=2 ; i<sayi ; i++){
//        if(sayi % i === 0){
//         asal=false;
//         break;
//        } 
//     }
//     console.log(sonuc = asal === true ? "ASALDIR" : "ASAL DEĞİLDİR");
//     console.log(`${sayi} ${sonuc}` )
// }


// *!           DONGULER(LOOPS)-WHİLE
console.log("****** WHİLE *******");

// //? ORNEK 1: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
// //? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
// //? not girmeye zorlayan kodu while dongusu ile yaziniz.

// const not = prompt("Lütfen 0-100 arasında bir sayı giriniz");

// while(not < 0 || not > 100 ){
//     console.log("not 0-100 arasında olmalıdır");
//     not = prompt("Lütfen 0-100 arasında bir sayı giriniz");
// }
// console.log("Girdiğiniz Not :", not);


// *!  DONGULER(LOOPS)- DO WHİLE
console.log("****** DO WHİLE *******");

 //? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz

let not1;
do{
     not1 = +prompt("Lütfen 0-100 arasında bir sayı giriniz");
     if(not1 < 0 || not1 > 100){
        alert("girdiğiniz not 0-100 arasında olmalıdır");
     }
} while(not1 < 0 || not1 > 100 );

console.log("Girdiğiniz Not :", not1);



// !!!!!! //// ÖDEVVVVVV 

// ÖDEV: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

































