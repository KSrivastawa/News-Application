// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import func, { getUrl, Append } from "../components/fetch-append.js";

document.querySelector('#navbar').innerHTML = func();

// search bar 
document.querySelector('#search_input').addEventListener("keypress",()=>{
   
    let query = document.querySelector('#search_input').value;

   if(query == "tesla" || query == "twitter"){
    localStorage.setItem("searchData", JSON.stringify(query))
    window.location.href="./search.html";
   }
    
})

  

// by default Indian News
let IndianNews = async ()=>{

    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`;

    let data = await getUrl(url);
    console.log(data)

    Append(data)

}
IndianNews();


// for India
document.querySelector('#in').addEventListener("click", async()=>{
    localStorage.setItem("Code", JSON.stringify("in"));
    findCountryNews();
})
// for USA
document.querySelector('#us').addEventListener("click", async()=>{
    localStorage.setItem("Code", JSON.stringify("us"));
    findCountryNews();
})
// for China
document.querySelector('#ch').addEventListener("click", async()=>{
    localStorage.setItem("Code", JSON.stringify("ch"));
    findCountryNews();
})
// for UK
document.querySelector('#uk').addEventListener("click", async()=>{
    localStorage.setItem("Code", JSON.stringify("uk"));
    findCountryNews();
})
// for New Zealand
document.querySelector('#nz').addEventListener("click", async()=>{
    localStorage.setItem("Code", JSON.stringify("nz"));
    findCountryNews();
})

let findCountryNews = async ()=>{

    let getCode = JSON.parse(localStorage.getItem("Code"));
    let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${getCode}`;

    let data = await getUrl(url);
    console.log(data)

    Append(data)

}



