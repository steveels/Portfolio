
let produits = [{
    
    nameProduit:"Guitare",
    priceProduit:"50",
    quantityProduit:"150",
    categorie:"categorie1",

}
];



const app = Vue.createApp({
    
    data(){
        return{
          
           produit: produits,
           newProduit:{

           },
           modal:false,
           editIndex:-1,
           modal:false,

          
        
        }
        
    },

    methods:{
       
        submit(){
            if(this.newProduit.nameProduit && this.newProduit.priceProduit && this.newProduit.quantityProduit && this.newProduit.categorie){
            this.produit.push(this.newProduit);
            this.newProduit = {}
            }

            else{
                alert("Les champs ne sont pas tous remplis");
            }

           
        },

        removeProduct(index){
            if(confirm("Etes vous sur?")){
                this.produit.splice(index, 1);

            }

        },

       

        SaveModif(index){
           this.modal = true
           this.editIndex = index
           this.newProduit = {...this.produit[index]}
           
          

        },

        closeModal(){
            this.modal = false
            this.editIndex = -1
            this.newProduit = {}
            

        },
        
        edit(){
            if(this.newProduit.nameProduit && this.newProduit.priceProduit && this.newProduit.quantityProduit && this.newProduit.categorie){
                this.produit[this.editIndex] = this.newProduit
                this.newProduit = {}
                this.closeModal()
                
            }

            else {
                alert("Les champs ne sont pas tous remplis");
        
        }


        },
    
    
        saveTolocalStorage(){
            localStorage.setItem("produit", JSON.stringify(this.produit))

        }
    },

        watch:{
            produit:{
                deep:true,
                handler(){
                    this.saveTolocalStorage()
                },
                
            }

        },
       
        created(){
            let storeProd = localStorage.getItem("produit")
            if(storeProd){
                this.produit = JSON.parse(storeProd)
            }
        }
 
    
    

});


app.mount('#app')