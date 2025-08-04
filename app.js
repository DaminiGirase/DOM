// Element selector

// console.dir(document.getElementById("mainImg"));

// let smallimg = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallimg.length; i++){
//     smallimg[i].src = "spiderman_img.png";
//     console.log(`value of ${i} is changed`);
// }

// console.log(document.getElementsByTagName("P")[1].innerText = "abc");

// Query selector

// console.dir(document.querySelector('h1'));

// console.dir(document.querySelector('#description'));

// console.dir(document.querySelector('.oldImg'));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));

// let para = document.querySelector('p');
// console.dir(para);

// console.log(para.innerHTML);
// console.log(para.innerText);
// console.log(para.textContent);

// para.innerText = "Damini girase";
// para.innerHTML = "<b>DAMINI</b>"
// console.log(para.innerText);

// let heading = document.querySelector('h1');
// heading.innerHTML = `<u> ${heading.innerText}</u>`

// let img = document.querySelector('img');
// console.log(img.getAttribute('id'));
// img.setAttribute('id', 'spidermanImg');
// console.log(img.getAttribute('id'));

// img.setAttribute('src', "creation_3 (1).jpeg")

// Style Manupulation

// let heading = document.querySelector('h1');
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";

// let ancerTags = document.querySelectorAll('.box a');
// for(link of ancerTags){
//     link.style.color = "red";
// }
// for(let i=0; i<ancerTags.length; i++){
//     ancerTags[i].style.color = "red";
// }

// class list

// let heading = document.querySelector('h1');
// heading.classList.add("green");
// // heading.classList.remove("green");
// console.log(heading.classList.contains("green"));

// let box = document.querySelector('.box');
// box.classList.add("boxColour");
// box.classList.remove("boxColour");
// box.classList.toggle("boxColour");

// navigation

// let h4 = document.querySelector('h4');
// console.log(h4.parentElement);
// console.log(h4.children);
// console.log(h4.previousElementSibling);
// console.log(h4.nextElementSibling);

// let img = document.querySelector('img');
// img.previousElementSibling.style.color = "green";

// let box = document.querySelector('.box');
// let newpara = document.createElement('p');
// newpara.innerText = "hi i am damini";
// newpara.append(" damini how are you");

// let btn = document.createElement('button');
// btn.innerText = "Click me";
// let body = document.querySelector('body');
// newpara.append(btn);
// box.prepend(newpara);
// box.appendChild(btn);
// box.appendChild(newpara);

// body.appendChild(newpara);

// let btn = document.createElement('button');
// btn.innerHTML = "Click Me";
// let para = document.querySelector('p');
// para.insertAdjacentElement('afterend', btn);

// let body = document.querySelector('body');
// body.removeChild(btn);