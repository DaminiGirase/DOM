// let para = document.createElement('p');
// para.innerText = "hey! i am Red";
// para.style.color = "red";

// let h3 = document.createElement('h3');
// h3.innerText = "Hey! i am blue h3";
// h3.style.color = "blue";

// let div = document.createElement('div');
// div.style.border = "2px solid black";
// div.style.backgroundColor = "pink";

// let h1 = document.createElement('h1');
// h1.innerText = "i am in a div";
// div.appendChild(h1);

// let p2 = document.createElement('p');
// p2.innerText = "MEE TOO!";
// div.appendChild(p2);

// let body = document.querySelector('body');
// body.appendChild(para);
// body.appendChild(h3);
// body.appendChild(div);

// Assenment 

// Q 01, Q 02, Q 03, Q 04, Q 05

let btn1 = document.createElement("button");
btn1.innerText = "CLick Me";
btn1.setAttribute('id', 'btn');

let input = document.createElement("input");
input.setAttribute('placeholder', 'username');

let body = document.querySelector('body');
body.append(input);
body.append(btn1);

let change = document.querySelector("#btn");
change.classList.add('btn34');

let h1 = document.createElement('h1');
h1.innerText = "DOM Pracitce";
body.append(h1);
h1.classList.add('h1style');

let para = document.createElement('p');
para.innerHTML = "Apna College <b>Sigma</b> Practice";
body.append(para);