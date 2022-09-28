// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import func, { getUrl, Append } from "../components/fetch-append.js";

document.querySelector('#navbar').innerHTML = func();



let funct = async ()=>{

    let getQuery = JSON.parse(localStorage.getItem("searchData"));
    console.log(getQuery);

    let url = `https://masai-api.herokuapp.com/news?q=${getQuery}`;

    let data = await getUrl(url);
    console.log(data)

    Append(data)

}
funct();



// search bar 
document.querySelector('#search_input').addEventListener("keypress",async()=>{
    
    let query = document.querySelector('#search_input').value;
    let url = `https://masai-api.herokuapp.com/news?q=${query}`;

    let data = await getUrl(url);
    console.log(data)

   Append(data)
     
})

