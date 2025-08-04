// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("Div is Clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul is Clicked");
// });

// for(li of lis){
// li.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("li is Clicked");
// });
// }

let butten = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");


butten.addEventListener("click", function(){
   let item = document.createElement("li");
   item.innerText = input.value;

   let add = document.createElement("button");
   add.innerText = "delet";
   add.classList.add("delet");

   item.appendChild(add);
   ul.appendChild(item);

    input.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
})