// let btn = document.querySelectorAll('button');

// function select(){
//     alert("i like your post!");
// };

// for(btns of btn){
//     btns.onclick = select;
//     btns.onmouseenter = function(){
//         console.log("you hoered the mouse");
//     };
// };

// for(btns of btn){
//     btns.addEventListener("dblclick", sayHello);
//     btns.addEventListener("dblclick", sayName);
// }
// function sayHello(){
//     alert("Hello gues!");
// };

// function sayName(){
//     alert("Apna College here!");
// }

// color generater

// let btn = document.querySelector('button');
// btn.addEventListener("click", function(){
//     let h3 = document.querySelector('h3');
//     let getRandomSelector = getRandomColor();
//     h3.innerText = getRandomSelector;

//     let div = document.querySelector('div');
//     div.style.backgroundColor = getRandomSelector;
//     console.log("color Updated");
// })

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let para = document.querySelector('p');
// para.addEventListener("click", function(){
//     console.log("Paragraph Was Cliked!");
// })

// let div = document.querySelector('.box');
// div.addEventListener("mouseenter", function(){
//     console.log("mouse inside box");
// })

// this in event listner

// let btn = document.querySelector('button');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let para = document.querySelector('p');

// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// para.addEventListener("click", changeColor);

// keybord event

// let input = document.querySelector('input');
// input.addEventListener("keydown", function(event){
//     console.log(`code = ${event.code}`);
//    if(event.code == "KeyD"){
//     console.log("character move forword");
//    }
//    else if(event.code == "KeyU"){
//     console.log("character move downword");
//    }

//    else if(event.code == "KeyL"){
//     console.log("character move right");
//    }
//    else if(event.code == "KeyR"){
//     console.log("character move left");
//    }
// })

// form Event

// let form = document.querySelector('form');

// form.addEventListener("submit", function(event){
//      event.preventDefault();

//  //this is also posibal
//  let user = this.elements[0];
//  // also this
//   let pass = document.querySelector('#pass');

//  console.log(user.value);
//  console.log(pass.value);
// });

// let user = document.querySelector("#user");
// user.addEventListener("change", function(){
//     console.log("changed event");
//     console.log("input changed to", this.value);
// });


// user.addEventListener("input", function(){
//     console.log("input even");
//     console.log("input changed to", this.value);
// });

// let input = document.querySelector('#text');
//  let para = document.querySelector('p');

// input.addEventListener("input", function(){

//    para.innerText = input.value
//    ;
// })

// Assenment

// Q 03

// let input = document.querySelector('input');
// let h3 = document.querySelector('#heading');

// input.addEventListener("input", function () {
//     let ogValue = input.value;
//       let filterValue = "";
//     for (let i = 0; i < ogValue.length; i++) {
//         let char = ogValue[i];
//         if ((char >= 'A' && char <= 'Z') ||
//             (char >= 'a' && char <= 'z') ||
//             (char === ' ')){
//                filterValue  += char;
//             }
//     }
//     h3.innerText = filterValue;
// });

// Q 02

// let btn = document.createElement("button");
// btn.innerText = "Click Me!";

// let body = document.querySelector('body');
// body.appendChild(btn);

// btn.addEventListener("click", function(){
//     this.style.backgroundColor = "blue";
// })

// Q 01

// Mouseout

// let h1 = document.querySelector('h1');
// h1.addEventListener("mouseout", function(){
//     console.log("mouse is hovered");
// });

// // Keypress

// let input = document.querySelector('input');
// input.addEventListener("keypress", function(e){
//     console.log("Key is presed", e.key);
// });

// Scroll

// window.addEventListener("scroll", function(){
//     console.log("page is Scrolled");
// });

// load

// window.addEventListener("load", function(){
//     alert("page is loaded");
// });
