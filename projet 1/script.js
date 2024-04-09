

     

let produits = [
    {
        
        name: "Big Mac",
        image: "img/big-mac.png",
        price: 5.99,
        quantity: 0,
        id:1,
        active: false,
    },
    {

        name: "Mc Chicken",
        image: "img/mc-chicken.png",
        price: 4.99,
        quantity: 0,
        id:2,
        active: false,

    },

    {
        
        name: "Doucle Cheese Burger",
        image: "img/double-cb.png",
        price: 2.99,
        quantity: 0,
        id:3,
        active: false,

    },

    {

        name: "Fries",
        image: "img/fries.png",
        price: 2.99,
        quantity: 0,
        id:4,
        active: false,

    },

    {

        name: "Mc Nuggets",
        image: "img/nuggets.png",
        price: 3.49,
        quantity: 0,
        id:5,
        active: false,

    },

    {

        name: "Salad",
        image: "img/salad.png",
        price: 2.79,
        quantity: 0,
        id:6,
        active: false,

    },

    {

        name: "Coke",
        image: "img/cola.png",
        price: 1.99,
        quantity: 0,
        id:7,
        active: false,

    },

    {

        name: "Ice Tea",
        image: "img/lipton.png",
        price: 1.99,
        quantity: 0,
        id:8,
        active: false,

    },

    {

        name: "Water",
        image: "img/water.png",
        price: 1.49,
        quantity: 0,
        id:9,
        active: false,

    }
]




const app = Vue.createApp({
    data(){
        return{
            prod: produits,
            
        
        }
        
    },
    methods:{

        
        ToggleEvent(toto){
            toto.active=!toto.active
          
            
        },
    
    decrement(baba){
       baba.quantity < 1? baba.quantity++ : baba.quantity;
         
    },
       totalProduits(bubu){
        return (bubu.quantity*bubu.price).toFixed(2)
       },

       totalTotal(){
        return  this.prod.reduce((acc, produit) =>{
            if(produit.active){
                return acc + parseFloat(this.totalProduits(produit));
            }
            else{
                return acc;
            }


        },0).toFixed(2)
        
   
},


    }
});

app.mount('#app')