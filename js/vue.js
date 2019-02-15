
//fa-square vers fa-check-square
//alert-info vers alert-success


new Vue({
    el:"#app",
    data:{
        isSuccess: false,
        isHidden: false,
        list:[
            {name:'Courgette', isSelected:false}, 
            {name:'Champignon', isSelected:false}, 
            {name:'Tofu', isSelected:false}, 
            {name:'Riz basmati', isSelected:false},
            
        ],
        i:{name:"", isSelected:false},
        
        //voir le fiddle de Sofie - correction - na marche pas chez moi.
        // computed:{
        //     ingredientsSelected(){
        //         let selected = this.list.filter(i => i.isSelected);
        //         let selectedNames = selected.map(i => i.name);
        //         return selectedNames.join(', ');

        //     }
        
    },
    methods: {
        toggle(i){
            i.isSelected = !i.isSelected;
        },
        addNewI(){
            let newI ={
            name: this.i.name,
            isSelected:false
        };
        this.list.push(newI);
        this.i.name=null;
        }
    }
})






//5) rajouter une classe si selectionner/au click! toggle
// let app = new Vue({
//     el: "#app",             //el=selecteur qui sera lié à un element(app)
//     data: {                 //data=objet (voir dans index.html)
//         message: "Hello World",
//         isSelected: false     // rajouter une class au click par ex.
//     },
//     methods: {         // si je click/fonction/ je met une autre couleur(toggle) Dans index on met le @click=toggle()
//         toggle(){
//             if(this.isSelected){
//                 this.isSelected = false; 
//             } else{
//                 this.isSelected = true; 
//             }
            
//         }
//     }
// });