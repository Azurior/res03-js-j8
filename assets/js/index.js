import { Ingredient } from './classes/ingredient.js';
import { Pizza } from './classes/pizza.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let availableIngredients = [];
    
    let bacon = new Ingredient("Bacon", "assets/img/bacon.png");
    let carrots = new Ingredient("Carotte", "assets/img/carrots.png");
    let cheese = new Ingredient("Fromage", "assets/img/cheese.png");
    let egg = new Ingredient("Oeuf", "assets/img/egg.png");
    let eggplant = new Ingredient("Aubergine", "assets/img/eggplant.png");
    let goatCheese = new Ingredient("Fromage de chèvre", "assets/img/goat-cheese.png");
    let honey = new Ingredient("Miel", "assets/img/honey.png");
    let mushroom = new Ingredient("Champignon", "assets/img/mushroom.png");
    let olive = new Ingredient("Olive", "assets/img/olive.png");
    let pepper = new Ingredient("Piment", "assets/img/pepper.png");
    let potato = new Ingredient("Pomme de terre", "assets/img/potato.png");
    let tomato = new Ingredient("Tomate", "assets/img/tomato.png");
    
    availableIngredients.push(bacon, carrots, cheese, egg, eggplant, goatCheese,
    honey, mushroom, olive, pepper, potato, tomato);
    
    console.log(availableIngredients);
    
    for(let i = 0; i < availableIngredients.length; i++){
        
        let ul = document.querySelector("#stage ul");
        let li = document.createElement("li");
        let article = document.createElement("article");
        let header = document.createElement("header");
        let figure = document.createElement("figure");
        let h3 = document.createElement("h3");
        let textH3 = document.createTextNode(availableIngredients[i].name);
        let img = document.createElement("img");
        
        ul.appendChild(li);
        li.appendChild(article);
        article.appendChild(header);
        header.appendChild(figure);
        figure.appendChild(img);
        img.setAttribute("src", availableIngredients[i].file);
        img.setAttribute("alt", availableIngredients[i].name);
        header.appendChild(h3);
        h3.appendChild(textH3);
        
    }
    
    
    let articleAll = document.querySelectorAll("article");
    let pizza = new Pizza();
    for(let i = 0; i < articleAll.length; i++){
        articleAll[i].addEventListener("click", function(){
        
            articleAll[i].classList.toggle("selected");
            
        })
        
        if(articleAll[i].classList.toggle("selected")){
            pizza.removeIngredient(articleAll[i]);
            
        }else{
            pizza.addIngredient(articleAll[i]);
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
});

