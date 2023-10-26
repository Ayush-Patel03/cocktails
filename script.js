const getCocktails = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";


    try{
        const response = await fetch(url);
        return await response.json();
    }catch(error)
    {
        console.log(error);
    }
};


const showCocktails =async()=> {
    let cocktails = await getCocktails();

    let cocktailsSection = document.getElementById("cocktails-section");
    
    cocktails.drinks.forEach(cocktail => {
        //cocktail is 1 cocktail
        cocktailsSection.append(getCocktailItem(cocktail));
    });
};

const getCocktailItem= (cocktail)=>{
    let section = document.createElement("section");
   // let section2 = document.createElement("section");
    let section3 = document.createElement("section");
    let h3 = document.createElement("h3");
    h3.innerText = cocktail.idDrink;
    
    
   // section.append(section2);
    section.append(section3);
    
    section.classList.add("section");
  //  section2.classList.add("img-flexing");
    
    section3.classList.add("p-flex");
    


    section3.append(h3);
    let ul = document.createElement("ul");
    section3.append(ul);
    ul.append(getLi(cocktail.strDrink));
    ul.append(getLi(`Notable cast: ${cocktail.strDrinkAlternate}`));
    ul.append(getLi(`Year made: ${cocktail.strTags}`));
    ul.append(getLi(`Genres: ${cocktail.strVideo}`));
    ul.append(getLi(`Description: ${cocktail.strCategory}`));
    ul.append(getLi(`Description: ${cocktail.strIBA}`));
    ul.append(getLi(`Description: ${cocktail.strAlcoholic}`));
    ul.append(getLi(`Description: ${cocktail.strGlass}`));


    



   // section.append(cocktail.img);
    
    
    
    
    return section;
}

const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;

    return li;
};




 

window.onload =() => showCocktails();