
let func =()=>{
   return ` <a href="./index.html">HOME</a>
    <input type="text" id="search_input" placeholder="Search News for tesla and twitter">`;
}

export default func;
// 

let getUrl = async(url)=>{

    try {
        
        let res = await fetch(url);

        let data = await res.json();
        console.log(data.articles);

        return data.articles


    } catch (error) {
        console.log(error)
    }

}


let Append = (array)=>{

    let container = document.querySelector('#results');
    container.innerHTML = null;

    array.forEach(element => {
        
        let Div = document.createElement('div');
        Div.setAttribute("class", "news");

        let IM = document.createElement('img');
        let TI = document.createElement('h3');
        let DES = document.createElement('p');

        IM.src = element.urlToImage;
        TI.textContent = element.title;
        DES.textContent = element.description;


        Div.addEventListener("click",()=>{
            showNews(element);
        })

        Div.append(IM,TI,DES);

        container.append(Div)

    });

}


let showNews =(element)=>{

    localStorage.setItem("news", JSON.stringify(element));
    window.location.href="./news.html";

}


export {getUrl, Append}
