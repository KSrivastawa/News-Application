// Ude Import export (MANDATORY)

import func, {getUrl} from "../components/fetch-append.js";

document.querySelector('#navbar').innerHTML = func();

// search bar 
document.querySelector('#search_input').addEventListener("keypress",()=>{
   
    let query = document.querySelector('#search_input').value;

   if(query == "tesla" || query == "twitter"){
    localStorage.setItem("searchData", JSON.stringify(query))
    window.location.href="./search.html";
   }
    
})


let getData = JSON.parse(localStorage.getItem("news"));

let Append = (array)=>{

    console.log(array)

    let container = document.querySelector('#detailed_news');
    container.innerHTML = null;

        let Div = document.createElement('div');
        Div.setAttribute("class", "news");

        let IM = document.createElement('img');
        let TI = document.createElement('h3');
        let CON = document.createElement('p');

        IM.src = array.urlToImage;
        TI.textContent = array.title;
        CON.textContent = array.content;

        Div.append(IM,TI,CON);

        container.append(Div)       
       

}

Append(getData);
