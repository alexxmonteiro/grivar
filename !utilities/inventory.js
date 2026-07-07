class Inventory{
    constructor(){
        this.itens = {}
    }

    registerItem(id, itemData){
        this.itens[id] = itemData;
    }

    addItem(id){
        if(this.itens[id]){
            this.itens[id].quantity+=1;
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
}

export var item = new Inventory(); 
item.registerItem(1, {
    name: "Holy Water",
    type: "Trhowable",
    description: "It is one of the sacramentals: sacred signs that, through the prayer of the Church, prepare the heart to receive God's grace and help combat evil.",
    damage: 6,
    quantity: 0
});

item.registerItem(2, {
    name: "Life Potion",
    type: "Cosumable",
    description: "A mysterious magical liquid that heals even the deepest scars.",
    lifeRegen: 3,
    quantity: 0
});
