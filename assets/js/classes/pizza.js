class Pizza {
    #ingredients;
    
    constructor(){
        this.#ingredients = [];
    }
    
    
    
    get ingredients (){
        return this.#ingredients;
    }
}