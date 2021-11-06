const kortHolders = document.querySelector(".kortHolder");

function createCards(){
    for (let i = 0; i < onskeListe.length; i++) {
        

        let navn = onskeListe[i].Navn;
        let pris = onskeListe[i].pris;
        let bilder = onskeListe[i].bilde;
        let link = onskeListe[i].Link;  

        kortHolders.innerHTML += `
        <div class="vareKort">
                    <h2 class="vareNavn"> <span class="line">${navn}</span>  <br> <span class="pris">${pris} Kr</span> </h2>
                    <a href="${link}">Link</a>
                    <img src="${bilder}" alt="" class="prodBilde">
    
                </div>`
      }
}


createCards();