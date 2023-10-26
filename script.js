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
    h3.innerText = cocktail.strDrink;
    
    
   // section.append(section2);
    section.append(section3);
    
    section.classList.add("section");
  //  section2.classList.add("img-flexing");
    
    section3.classList.add("p-flex");
    


    section3.append(h3);
    let ul = document.createElement("ul");
    section3.append(ul);
    ul.append(getLi(cocktail.idDrink));
    ul.append(getLi(`Alternate: ${cocktail.strDrinkAlternate}`));
    ul.append(getLi(`Tags: ${cocktail.strTags}`));
    ul.append(getLi(`Video: ${cocktail.strVideo}`));
    ul.append(getLi(`Category: ${cocktail.strCategory}`));
    ul.append(getLi(`IBA: ${cocktail.strIBA}`));
    ul.append(getLi(`Alcoholic?: ${cocktail.strAlcoholic}`));
    ul.append(getLi(`Glass: ${cocktail.strGlass}`));
    ul.append(getLi(`Instructions: ${cocktail.strInstructions}`));
    ul.append(getLi(`Ingredient 1: ${cocktail.strIngredient1}`));
    ul.append(getLi(`Ingredient 2: ${cocktail.strIngredient2}`));
    ul.append(getLi(`Ingredient 3: ${cocktail.strIngredient3}`));
    ul.append(getLi(`Ingredient 4: ${cocktail.strIngredient4}`));
    ul.append(getLi(`Ingredient 5: ${cocktail.strIngredient5}`));
    ul.append(getLi(`Ingredient 6: ${cocktail.strIngredient6}`));
    ul.append(getLi(`Ingredient 7: ${cocktail.strIngredient7}`));
    ul.append(getLi(`Ingredient 8: ${cocktail.strIngredient8}`));
    ul.append(getLi(`Ingredient 9: ${cocktail.strIngredient9}`));
    ul.append(getLi(`Ingredient 10: ${cocktail.strIngredient10}`));
    ul.append(getLi(`Ingredient 11: ${cocktail.strIngredient11}`));
    ul.append(getLi(`Ingredient 12: ${cocktail.strIngredient12}`));
    ul.append(getLi(`Ingredient 13: ${cocktail.strIngredient13}`));
    ul.append(getLi(`Ingredient 14: ${cocktail.strIngredient14}`));
    ul.append(getLi(`Ingredient 15: ${cocktail.strIngredient15}`));
    


    



   // section.append(cocktail.img);
    
    
    
    
    return section;
}

const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;

    return li;
};




 

window.onload =() => showCocktails();