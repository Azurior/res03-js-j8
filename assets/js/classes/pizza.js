class Pizza {
    #ingredients;
    
    constructor(){
        this.#ingredients = [];
    }
    
    get ingredients (){
        return this.#ingredients;
    }
    
    addIngredient(ingredient){
        this.#ingredients.push(ingredient);
    }
    
    removeIngredient(ingredient){
        let newIngredient = [];
        for(let i = 0; i < this.#ingredients; i++){
            if(this.#ingredients[i].name !== name){
                name.push(newIngredient);
                console.log(newIngredient);
            }
            
            this.#ingredients = newIngredient;
        }
    }
    
    display(){
        
    }
}

export { Pizza };