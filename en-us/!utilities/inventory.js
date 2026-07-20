class Inventory{
    constructor(){
        this.itens = {};
        this.stack = [];
        this.count = 0;
    }

    registerItem(id, itemData){
        this.itens[id] = itemData;
        this.stack.push(id);
    }

    addItem(id){
        if(this.itens[id]){
            this.itens[id].quantity++;
            this.count++;
        }
    }

    removeItem(id){
        if(this.itens[id]){
            this.itens[id].quantity--;
            this.count--;
        }
    }

    itemName(id){
        if(this.itens[id]){
            return this.itens[id].name; 
        }
    }

    itemDescription(id){
        if(this.itens[id]){
            return this.itens[id].description; 
        }
    }

    itemQuantity(id){
        if(this.itens[id]){
            return this.itens[id].quantity;
        }
    }
}   

export var item = new Inventory(); 
item.registerItem(1, {
    name: "Holy Water",
    type: "Trhowable",
    description: "It is one of the sacramentals: sacred signs that, through the prayer of the Church, prepare the heart to receive God's grace and help combat evil.",
    damage: 4,
    quantity: 0
});

item.registerItem(2, {
    name: "Life Potion",
    type: "Cosumable",
    description: "A mysterious magical liquid that heals even the deepest scars.",
    lifeRegen: 3,
    quantity: 0
});

