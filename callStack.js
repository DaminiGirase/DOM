// Call Stack

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = one() + two();
//      console.log(ans);
// }

// three();

// Callback Hell

// 01

// let h1 = document.querySelector("h1");
// function changeCol(color, deley, nextColorChange){
//   setTimeout(() => {
//     h1.style.color = color;
//      if(nextColorChange) nextColorChange();
//   }, deley);

// }

// changeCol("red", 1000, () => {
//     changeCol("orange", 1000, () => {
//         changeCol("green", 1000);
//     });
// });

// 02

// function saveToDB(data, success, failure) {
//     let interNet = Math.floor(Math.random() * 10) + 1;
//     if (interNet > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// saveToDB("Damini Girase",
//     () => {
//         console.log("Succees: Data saved succesfuly!");

//         saveToDB("Rajput Damini",
//             () => {
//                 console.log("Success2: data Saved");

//                 saveToDB("Girase Divya",
//                     () => {
//                         console.log("Success3: data Saved")
//                     },
//                     () => {
//                         console.log("Failure3: No conection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("Failure2: No conection");
//             }
//         );
//     },
//     () => {
//         console.log("Falure: Weak internet connection!");
//     }
// );

// Promises

// function saveToDB(data) {
//     return new Promise((resolve, reject) => {
//         let interNet = Math.floor(Math.random() * 10) + 1;
//         if (interNet > 4) {
//             resolve("Success: data was saved");
//         }
//         else {
//             reject("Faiilure: weak conection");
//         }
//     });
// }

// saveToDB("Damini Girase")
//     .then((result) => {
//         console.log("Data1 saved");
//         console.log(result);
//         return saveToDB("Hello Data");
//     })
//     .then((result) => {
//         console.log("Data2 saved");
//         console.log(result);
//         return saveToDB("Hello Guys");
//     })
//     .then((result) => {
//         console.log("Data3 saved");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("Promis was rejected");
//         console.log(error);
//     });

// color chande of heading

// let h1 = document.querySelector("h1");
// function changeCol(color, deley){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve();
//         }, deley);
//     })
// }

//     changeCol("red", 1000)
//     .then(() => {
//         console.log("red color");
//         return changeCol("green", 1000)
//     })
//     .then(() => {
//          console.log("green color");
//     });

// font size of heading

// let h1 = document.querySelector("h1");

// function chngeFont(font, deley){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.fontWeight = font;
//             resolve();
//         }, deley);
//     });
// }

// chngeFont(500, 2000)
// .then(() => {
//     console.log("500 font");
//     return chngeFont(300, 2000);
// })
// .then(() => {
//     console.log("300 font");
//     return chngeFont(100, 2000);
// })
// .then(() => {
//     console.log("100 font");
// })

// async function

// async function greet(){
//     throw "An Error Occured!";
//     return "Hello";
// }

// greet()
// .then((result) => {
//    console.log("result resolved: ", result);
// })
// .catch((err) => {
//     console.log("Error occured: ", err);
// })

// await keyword

// function changeCol() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let random = Math.floor(Math.random() * 10) + 1;
//             console.log(random);
//             resolve();
//         }, 1000);
//     });
// }

// async function greet() {
//     await changeCol();
//     await changeCol();
//     await changeCol();
//     await changeCol();
//     changeCol();
// }

// greet();

// color change using async and await

let h1 = document.querySelector("h1");
function changeCol(color, deley) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let num = Math.floor(Math.random() * 10) + 1;
            if (num > 5) {
                reject("promise rejected!");
            };
            
            h1.style.color = color;
            console.log(`changed color is ${color}`);
            resolve("Promise resolved!");
        }, deley);
    })
}

async function change() {
    try {
        await changeCol("red", 1000);
        await changeCol("green", 1000);
        await changeCol("orange", 1000);
        await changeCol("pink", 1000);
    }
    catch (err) {
        console.log("Erroe Occured: ", err);
    }

    let a = 5;
    console.log(a);
    console.log("Value of a is: ", a);
};

change();