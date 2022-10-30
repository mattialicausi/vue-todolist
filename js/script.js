'use strict';

/* 
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

const {createApp} = Vue;

//creo app
const app = createApp({
    data(){
        return {
        newtask :'',
        hasError: false,
        isActive: false,
        activeIndex: 0,
        lista:[
            {
                text: 'Fare la spesa',
                done: false,
             },
             {
                text: 'Prendere croccantini per il cane',
                done: false,
            },
            {
                text: 'Fare benzina',
                done: false,
            }
        ]
        }
    },
    methods: {

     addTask(){
        let textNew = this.newtask
        let newtodo = Object();
        newtodo.text = textNew;
        newtodo.done = false;

        if(textNew.length >= 4){
            this.lista.unshift(newtodo);
            this.hasError = false;
        } else{
            this.hasError = true;
        }
        this.newtask=''; 
        console.log(textNew)
        console.log(newtodo)
     },

     removeTask(i){
        this.lista.splice(i, 1);
     },

     checkedTask(i){

        this.lista[i].done = !this.lista[i].done;
        console.log(this.lista[i].done)
     }
   
    },
    mounted(){
       
    },

});
app.mount('#app');