// let json = '{"fact":"The tiniest cat on record is Mr. Pebbles, a 2-year-old cat that weighed 3 lbs (1.3 k) and was 6.1 inches (15.5 cm) high.","length":120}';
// let convert = JSON.parse(json);
// console.log(convert.fact);

// let student = {
//     name: "damini Girase",
//     marks: 95,
//     cgpa: 9.36
// };

// let change = JSON.stringify(student);
// console.log(change);

// first API request

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log("data1 = ",data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 = ",data2.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data3) => {
//     console.log("data3 = ", data3.fact);
// })
// .catch((err) => {
//     console.log("Error =",err);
// })

// API request using async and await

// let url = "https://catfact.ninja/fact";

// async function getAPICall() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//     catch (e) {
//         console.log("Errore = ", e);
//     }

// }

// getAPICall();

// let url = "https://catfact.ninja/fact";

// async function getRequest() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }catch(e) {
//         console.log("Erroe = ", e);
//     }
// }

// getRequest();

// using axios

// let butten = document.querySelector("button");


// butten.addEventListener("click", async () => {
//       let fact = await getRequest();
//        let para = document.querySelector("#result");
//        para.innerText = fact;
// })


// async function getRequest() {
//     try{
//          let res = await axios.get(url);
//          return res.data.fact;
//     }
//     catch(err){
//         console.log("Error = ", err);
//         return "No fact found";
//     }
// }




// let button = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";

// button.addEventListener("click", async () => {
//     let link = await getRequest();
//     let image = document.querySelector("#image");
//     image.setAttribute("src", link);
//     console.log(link);
// })

// async function getRequest() {
//     try {
//         let res = await axios.get(url);
//         return res.data.message;
//     }
//    catch(err){
//     console.log("Error = ",err);
//     return "image not Found";
//    }
// }

// aplication headers convert html to json

// const url = "https://icanhazdadjoke.com/";

// async function getRequest() {
//     try {
//         let config = { headers: { Accept: "application/json" } }
//         let res = await axios.get(url, config);
//         return res.data;
//     }
//     catch (e) {
//         console.log(e);
//     }

// }
// console.log(getRequest());

// let url = "http://universities.hipolabs.com/search?name=";

// let button = document.querySelector("button");

// button.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let colArr = await getCollege(country);
//     Show(colArr);
// });

// function Show(colArr){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colArr){
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }
// async function getCollege(country) {
//     try {
//         let res = await axios.get(url + country);
//         return res.data;
//     }
//     catch (e) {
//         console.log(e);
//         return [];
//     }
// }


let url = "http://universities.hipolabs.com/search?country=India";

let button = document.querySelector("button");

button.addEventListener("click", async () => {
    let state_province = document.querySelector("input").value.trim().toLowerCase();
    console.log("State input:", state_province);

    let arrList = await getCollege();

    let filteredList = arrList.filter(col => 
        (col["state-province"] ?? "").toLowerCase().includes(state_province)
    );

    Show(filteredList);
});

function Show(arrList) {
    let list = document.querySelector("#list");
    list.innerText = "";
    
    if (arrList.length === 0) {
        list.innerText = "No colleges found in this state.";
        return;
    }

    for (let lis of arrList) {
        console.log(lis["state-province"]);
        let li = document.createElement("li");
        li.innerText = `${lis.name} — ${lis["state-province"] ?? "N/A"}`;
        list.appendChild(li);
    }
}

async function getCollege() {
    try {
        let res = await axios.get(url);
        return res.data;
    }
    catch (err) {
        console.log("Error = ", err);
        return [];
    }
}

