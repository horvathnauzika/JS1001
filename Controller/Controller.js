import Modell from "../Modell/Modell.js";
import Kartya from "../View/Kartya.js";

class Controller{
    lista=[]
    #modell
    constructor(){
        this.#modell=new Modell()
        this.lista=this.#modell.getLista();
        new Kartya(this.lista, $('.kartyaElemek'));
        $(window).on("kattint", ()=>{
            new Kartya(this.lista, $('.kartyaElemek'));
        })
        console.log("hello2")
    }
}
export default Controller;